// components/settings/settings.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    setting:Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    settingClick(){
      if (this.data.setting.navigateTo){
        //子组件触发自定义事件，传递载荷给父页面
        this.triggerEvent('needNavigate', { navigateTo: this.data.setting.navigateTo})
      }
    }
  }
})
