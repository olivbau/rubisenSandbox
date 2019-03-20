<template>
  <div class="giiker">
    <button @click="connect">Connect</button>
    <h1>{{lastMoveId}}</h1>
  </div>
</template>

<script>
import GiikerCube from '../../lib/giiker';

export default {
  name: 'giiker',
  data: function () {
      return {
          cube: new GiikerCube(),
          lastMove: null,
      }
  },
  methods: {
    connect: function () {
        console.log(this)
        this.cube.connect()
        this.cube.addEventListener(this.updateMove)
    },
    updateMove: function (d) {
        this.lastMove = d.latestMove
    }
  },
  computed: {
    lastMoveId: function () {
        if (!this.lastMove) return null
        return this.lastMove.id
    }
  }
};
</script>
