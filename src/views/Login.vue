<template>
  <div class="login">
    <button @click="connect">Cube Connect</button>
    <h1>Sequence: {{sequenceStr}}</h1>
    <h1>{{currentSequenceStr}}</h1>

    <p>{{data}}</p>
    <h1>{{predictedUser}}</h1>
  </div>
</template>

<script>
import io from 'socket.io-client';
import GiikerCube from '../../lib/giiker';

const _ = require('lodash');

export default {
  name: 'login',
  data() {
    return {
      cube: new GiikerCube(),
      lastMove: null,
      sequence: ['L\'', 'U', 'R', 'U\'', 'L', 'U', 'R\'', 'U\''],
      currentSequence: [],
      socket: null,
      data: [],
      predictedUser: '',
    };
  },
  mounted() {
    this.socket = io('http://127.0.0.1:3001');
    this.socket.on('loginReply', (data) => {
      console.log('Prediction !!');
      console.log(data);
      this.predictedUser = data;
    });
  },
  methods: {
    connect() {
      this.cube.connect();
      this.cube.addEventListener(this.updateMove);
    },
    updateMove(d) {
      this.lastMove = d.latestMove;
      this.data.push(Date.now());
      this.currentSequence.push(d.latestMove.id);
      this.checkReset();
      this.checkValid();
    },
    checkValid() {
      if (_.isEqual(this.currentSequence, this.sequence)) {
        this.valid();
      }
    },
    checkReset() {
      if (_.isEqual(this.currentSequence.slice(-2), ['R', 'R\''])) {
        this.reset();
      }
    },
    reset() {
      this.currentSequence = [];
      this.data = [];
    },
    valid() {
      this.normalize();
      this.sendLogin();
      this.reset();
    },
    sendLogin() {
      this.socket.emit('login', this.data);
    },
    normalize() {
      const offset = this.data[0];
      for (let index = 1; index < this.data.length; index += 1) {
        this.data[index] -= offset;
      }
      for (let index = this.data.length - 1; index === 1; index -= 1) {
        this.data[index] -= this.data[index - 1];
      }
      this.data.shift();
    },
  },
  computed: {
    lastMoveId() {
      if (!this.lastMove) return null;
      return this.lastMove.id;
    },
    currentSequenceStr() {
      return this.currentSequence.join(' ');
    },
    sequenceStr() {
      return this.sequence.join(' ');
    },
  },
};
</script>
