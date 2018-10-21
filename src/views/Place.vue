<template>
  <div class="background">
    <div class="container">
      <div class="left-content">
        <div class="logo">
          <h1>Urban girls movement</h1>
        </div>
        <div class="menu-item">
          <i>{{'<'}}</i>
          Tillbaka till kartan
        </div>

        <div class="menu-item" style="margin-top: 3rem;">
          <i>{{'<'}}</i>
          Bilder
        </div>
        <div class="menu-item">
          <i>{{'B'}}</i>
          Bilder
        </div>
        <div class="menu-item">
          <i>{{'!'}}</i>
          Utmaningar
        </div>
        <div class="menu-item">
          <i>{{'?'}}</i>
          Lösningsförslag
        </div>
        <div class="menu-item">
          <i>{{'L'}}</i>
          Ljud
        </div>
      </div>
      <div class="right-content">
        <p>
          “Jag tycker att det viktigaste var nog det här med att vara en tjej och gå runt i de olika områden, jag tror de flesta inklusive mig själv tycker inte att det är ganska tryggt att gå t.ex. genom en grupp killar med mask och stora jackor man vet aldrig vad de kan göra.”
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
  },
	data () {
		return {}
	},
}
</script>

<style lang="sass" scoped>
  .background
    width: 100%
    height: 100%
  .container
    border: 1px dotted white
    height: 100%
    display: flex
  .left-content
    display: flex
    flex-direction: column
  .right-content
    display: flex
    justify-content: flex-end
    padding: 2rem
    p
      width: 75%
  .logo
    width: 248px
    height: 224px
    padding: 2rem 1.5rem
    background-color: #FF305E
    font-size: 18px
    display: flex
    align-items: flex-end
    h1
      margin: 0
      text-transform: uppercase

  .menu-item
    margin-top: 1rem
    display: flex
    align-items: center
    i
      margin-right: 1rem
      width: 30px
      height: 30px
      display: flex
      justify-content: center
      align-items: center
      border: 2px solid white
      border-radius: 50%
</style>