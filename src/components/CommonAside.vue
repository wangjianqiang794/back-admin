<template>
  <div>
    <el-menu
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <h3 v-show="!isCollapse">后 台 管 理 系 统</h3>
      <h3 v-show="isCollapse">后 台</h3>
      <el-menu-item
        :index="item.path"
        v-for="item in noChildren"
        :key="item.path"
        @click="clickMenu(item)"
      >
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>

      <el-submenu
        :index="item.label"
        v-for="item in hasChildren"
        :key="item.path"
      >
        <template slot="title">
          <i :class="'el-icon-' + item.icon"></i>
          <span slot="title">{{ item.label }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            :index="subItem.path"
            v-for="(subItem, subIndex) in item.children"
            :key="subIndex"
            @click="clickMenu(item)"
          >
            <i :class="'el-icon-' + subItem.icon"></i>
            <span slot="title">{{ subItem.label }}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // isCollapse: false, //控制左边栏收缩
      menu: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-shop",
          url: "Home/Home",
        },
        {
          path: "/mall",
          name: "mall",
          label: "商品管理",
          icon: "s-goods",
          url: "MallManage/MallManage",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user-solid",
          url: "UserManage/UserManage",
        },
        {
          label: "其它",
          icon: "s-open",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "页面1",
              icon: "setting",
              url: "Other/pageOne",
            },
            {
              path: "/page2",
              name: "page2",
              label: "页面2",
              icon: "setting",
              url: "Other/pageTwo",
            },
          ],
        },
      ],
    };
  },
  methods: {
    // handleOpen(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // handleClose(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    clickMenu(item) {
      this.$router.push({ name: item.name });
    },
  },
  computed: {
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
    noChildren() {
      return this.menu.filter((item) => !item.children);
    },
    hasChildren() {
      return this.menu.filter((item) => item.children);
    },
  },
};
</script>

<style scoped lang="scss">
h3 {
  text-align: center;
  color: white;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  border: none;
  height: 100%;
  min-height: 400px;
}
.el-menu--collapse {
  height: 100%;
  border: 0;
}
</style>
