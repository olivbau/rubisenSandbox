<template>
  <div class="socket">
    <button @click="connect">Cube Connect</button>
    <h1>{{lastMoveId}}</h1>
  </div>
</template>

<script>
import io from 'socket.io-client';
import GiikerCube from '../../lib/giiker';

export default {
  name: 'socket',
  data() {
    return {
      cube: new GiikerCube(),
      lastMove: null,
      socket: null,
    };
  },
  mounted() {
    this.socket = io('localhost:3000');
  },
  methods: {
    connect() {
      this.cube.connect();
      this.cube.addEventListener(this.updateMove);
    },
    updateMove(d) {
      this.lastMove = d.latestMove;
      this.socket.emit('move', d.latestMove);
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
