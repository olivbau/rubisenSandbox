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
  data() {
    return {
      cube: new GiikerCube(),
      lastMove: null,
    };
  },
  methods: {
    connect() {
      console.log(this);
      this.cube.connect();
      this.cube.addEventListener(this.updateMove);
    },
    updateMove(d) {
      this.lastMove = d.latestMove;
    },
  },
  computed: {
    lastMoveId() {
      if (!this.lastMove) return null;
      return this.lastMove.id;
    },
  },
};
</script>
