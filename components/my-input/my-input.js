// components/my-input/my-input.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    /*
     *mydata === {
        placeholder:'请输入手机号',
        type:'mobile'
     } 
     */
    mydata:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    title:'',
    count:10,
    interval:-1,
    isCountDown:false
  },

  attached(){
    this.setData({
      title:this.data.mydata.title
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    sendVcode(){
      // 0 判断是否正在倒计时，如果是return
      if(this.data.isCountDown) return

      //1.验证手机号码是否正确
      const isValid = this.validMobile()
      
      //2.判断手机号是否合法
      if(!isValid){
        wx.showToast({
          icon:'none',
          title: '手机号码不合法',
        })
        return
      }

      //3.倒计时
      this.setData({
        title:`(${this.data.count})`
      })

      this.data.interval = setInterval(()=>{
        this.data.count--

        if(this.data.count <= 0){
          this.setData({
            title:'获取验证码',
            isCountDown:false
          })
          clearInterval(this.data.interval)
          this.data.count = 10
          return
        }

        this.setData({
          title: `(${this.data.count})`
        })
      },1000)

      // 正在倒计时
      this.setData({
        isCountDown:true
      })
    },
    validMobile() {
      var myreg = /^1[3,4,5,6,7,8][0-9]{9}$/
      return (myreg.test(app.globalData.mobile ))
    },
    getInputValue(e){
      if(this.data.mydata.type==='mobile'){
        app.globalData.mobile = e.detail.value
      }else{
        app.globalData.vcode = e.detail.value
      }

      console.log(app.globalData)
    }
  }
})
