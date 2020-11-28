<template>
  <div class="test container">
    <div class="metalStructureRoot">
      <div class="metalStructure" :style="metalStructureStyle">
        <template v-for="(track, index) in tracksName" :key="index">
          <div class="landscape-rail" :style="rowStyle(index)">
            <div class="row" :class="track" :style="{ height: shuttleHeight + 'px' }"></div>
          </div>
        </template>
        <div class="protrail-rail down-column"></div>
        <div class="protrail-rail up-column"></div>
        <template v-for="(shuttle, uuid, i) in shuttles" :key="uuid">
          <div class="shuttle" :class="uuid" :style="shuttleStyle(shuttle, i)">{{ uuid }}</div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
// const app = createApp();
// app.use(Carousel);
import io from "socket.io-client";
const grey100 = "#f5f5f5";
const lime500 = "#cddc39";
const red500 = "#f44336";
export default {
  name: "Test",
  components: {},
  data() {
    return {
      //   token: "",
      serverHost: "47.104.247.29",
      serverPort: "6174", //xy001
      //   serverPort: "6205", //sf001
      //   singleTrackHeight: 20,
      shuttleHeight: 20,
      boxHeight: 30,
      positionMap: {
        tracksName: [],
      },
      shuttles: {},
      socket: null,
    };
  },
  computed: {
    mapOffsetY() {
      return this.tracksName.reduce(
        (mapOffsetY, track, i) => ({ ...mapOffsetY, [track]: this.singleTrackHeight * i + this.boxHeight }),
        {}
      );
    },
    tracksName() {
      let tak = this.positionMap.tracksName;
      return tak.reverse();
    },
    singleTrackHeight() {
      return this.boxHeight * 2 + this.shuttleHeight;
    },
    tracksNameCount() {
      return this.positionMap?.tracksName?.length ?? 0;
    },
    metalStructureStyle: {
      get() {
        return {
          width: this.positionMap.horizontalTrackLength + this.positionMap.shuttleWidth + "px",
          height: this.tracksNameCount * this.singleTrackHeight + "px",
          //   background: "#ccc",
          boxSizing: "border-box",
        };
      },
    },
    serverUrl() {
      return `http://${this.serverHost}:${this.serverPort}`;
    },
    apiServerUrl: {
      get() {
        return `${this.serverUrl}/api`;
      },
    },
  },
  async created() {
    const request = this.request;
    this.token = localStorage.getItem("token");
    this.siteUuid = localStorage.getItem("siteUuid");
    if (!this.token) {
      let res = await request(`/user/login`, {
        userName: "root",
        password: "2020",
      });
      console.log(res);
      if (!res.success) return;
      let token = res.data.token;
      let siteUuid = res.data.site.uuid;
      window.localStorage.setItem("token", token);
      window.localStorage.setItem("siteUuid", siteUuid);
    } else {
      console.log("token", this.token);
    }
    this.socket = io.connect(this.serverUrl);
  },
  async mounted() {
    const request = this.request;
    console.log(this.apiServerUrl);
    let config = await request(`/system/config`, { method: "GET" });
    console.log("config", config);
    this.positionMap = config.data.positionMap;
    console.log(this.positionMap);
    let shuttlesData = await request("/shuttle", { method: "GET" });
    console.log("shuttlesData", shuttlesData);
    const shuttlesArr = shuttlesData.data.shuttles;
    this.shuttles = shuttlesArr.reduce((acc, curr) => ({ ...acc, [curr.uuid]: curr }), {});
    console.log(this.shuttles);

    this.socket.on("shuttlesRealTimeInfo", this.shuttleSocket);
  },
  methods: {
    shuttleStyle(shuttle, i) {
      let offsetX = shuttle.currentPosition.offset;
      const track = shuttle.currentPosition.trackName;
      const landscapeRailWidth = this.positionMap.horizontalTrackLength;

      if (track === "HT0") {
        offsetX = landscapeRailWidth - offsetX;
      }
      let offsetY = this.mapOffsetY[track];
      if (shuttle.status === 10) {
        offsetX = landscapeRailWidth - i * (this.positionMap.shuttleWidth + 10);
      }

      offsetX = -offsetX;
      const transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
      // console.log("transform", transform);
      return {
        width: this.positionMap.shuttleWidth + "px",
        height: this.shuttleHeight + "px",
        backgroundColor: Object.keys(shuttle.errors).length ? red500 : lime500,
        transform,
      };
    },
    rowStyle(index) {
      return {
        top: this.singleTrackHeight * index + "px",
        height: this.singleTrackHeight + "px",
        backgroundColor: grey100,
        width: this.positionMap.horizontalTrackLength + this.positionMap.shuttleWidth + "px",
      };
    },
    shuttleSocket(data) {
      this.shuttles = data.data;
    },
    async request(url, params = {}) {
      const { headers, method = "POST", body, token, ...rest } = params;
      let _headers = { "Content-Type": "application/json", ...headers };
      let _token = token || window.sessionStorage.getItem("token") || window.localStorage.getItem("token");

      if (_token) {
        _headers = { ..._headers, "X-AuthToken": _token };
      }
      const _url = `${this.apiServerUrl}${url}`;

      return await fetch(_url, {
        headers: _headers,
        method: method,
        body: method === "POST" ? body || JSON.stringify(rest) : null,
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          //   Promise.resolve(res);
          return res;
        });
    },
  },
  unmounted() {
    this.socket.off("shuttlesRealTimeInfo");
    this.socket.close();
    this.socket = null;
  },
};
</script>

<style lang="less" scoped>
.metalStructure {
  position: relative;
}
.landscape-rail {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  .row {
    border-top: 1px dashed black;
    border-bottom: 1px dashed black;
    width: 100%;
  }
}
.shuttle {
  position: absolute;
  right: 0;
  will-change: transform;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
