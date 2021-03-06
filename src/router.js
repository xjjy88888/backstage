import Vue from 'vue'
import Router from 'vue-router'
import Login from 'pages/login/login.vue'
import Home from 'pages/home/home.vue'
import ChangePassword from 'pages/change-password/change-password.vue'
import Info from 'pages/info/info.vue'
import Archives from 'pages/archives/archives.vue'
import ArchivesAdd from 'pages/archives-add/archives-add.vue'
import Contract from 'pages/contract/contract.vue'
import ContractAdd from 'pages/contract-add/contract-add.vue'
import Device from 'pages/device/device.vue'
import DeviceAdd from 'pages/device-add/device-add.vue'
import Operate from 'pages/operate/operate'
import OperateAdd from 'pages/operate-add/operate-add.vue'
import Engineer from 'pages/engineer/engineer.vue'
import EngineerAdd from 'pages/engineer-add/engineer-add.vue'
import Spare from 'pages/spare/spare.vue'
import SpareAdd from 'pages/spare-add/spare-add.vue'
import SpareDetail from 'pages/spare-detail/spare-detail.vue'
import Ledger from 'pages/ledger/ledger.vue'
import Assign from 'pages/assign/assign.vue'
import AssignPerson from 'pages/assign-person/assign-person.vue'
import Track from 'pages/track/track.vue'
import Typein from 'pages/typein/typein.vue'
import Replenish from 'pages/replenish/replenish.vue'
import Finish from 'pages/finish/finish.vue'
import Stats from 'pages/stats/stats.vue'
import StatsOps from 'pages/stats-ops/stats-ops.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
        path: '/',
        component: Login
    },
    {
        path: '/home',
        component: Home
    },
    {
      path: '/changePassword',
      component: ChangePassword
    },
    {
      path: '/info',
      component: Info
    },
    {
      path: '/archives',
      component: Archives
    },
    {
      path: '/archivesAdd',
      component: ArchivesAdd
    },
    {
      path: '/contract',
      component: Contract
    },
    {
      path: '/contractAdd',
      component: ContractAdd
    },
    {
      path: '/device',
      component: Device
    },
    {
      path: '/deviceAdd',
      component: DeviceAdd
    },
    {
      path: '/Operate',
      component: Operate
    },
    {
      path: '/operateAdd',
      component: OperateAdd
    },
    {
      path: '/engineer',
      component: Engineer
    },
    {
      path: '/engineerAdd',
      component: EngineerAdd
    },
    {
      path: '/spare',
      component: Spare
    },
    {
      path: '/spareAdd',
      component: SpareAdd
    },
    {
      path: '/spareDetail/:id',
      component: SpareDetail
    },
    {
      path: '/ledger',
      component: Ledger
    },
    {
      path: '/assign',
      component: Assign
    },
    {
      path: '/assignPerson/:id',
      component: AssignPerson
    },
    {
      path: '/track/:id',
      component: Track
    },
    {
      path: '/typein',
      component: Typein
    },
    {
      path: '/replenish',
      component: Replenish
    },
    {
      path: '/finish',
      component: Finish
    },
    {
      path: '/stats',
      component: Stats
    },
    {
      path: '/statsOps',
      component: StatsOps
    }
  ]
})
