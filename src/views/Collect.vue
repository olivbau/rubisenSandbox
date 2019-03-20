<template>
  <div class="giiker">
    <button @click="connect">Connect</button>
    <button @click="download">Download</button>
    <input type="text" v-model="user">
    <p>Entries: {{entries}}</p>
    <p>Reset: R R'</p>
    <h1>Sequence: {{sequenceStr}}</h1>
    <h1>{{currentSequenceStr}}</h1>
    <p>{{datas}}</p>
  </div>
</template>

<script>
import GiikerCube from '../../lib/giiker';

const _ = require('lodash');

export default {
  name: 'giiker',
  data() {
    return {
      cube: new GiikerCube(),
      user: 'user',
      lastMove: null,
      sequence: ['L\'', 'U', 'R', 'U\'', 'L', 'U', 'R\'', 'U\''],
      currentSequence: [],
      data: [],
      datas: [],
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
      this.currentSequence.push(d.latestMove.id);
      this.data.push(Date.now());
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
      this.datas.push(this.data);
      this.reset();
    },
    normalize() {
      const offset = this.data[0];
      for (let index = 0; index < this.data.length; index += 1) {
        this.data[index] -= offset;
      }
      for (let index = this.data.length - 1; index > 0; index -= 1) {
        this.data[index] -= this.data[index - 1];
      }
      this.data.unshift(this.user);
    },
    download() {
      const rows = this.datas;
      let csvContent = 'data:text/csv;charset=utf-8,';
      rows.forEach((rowArray) => {
        const row = rowArray.join(',');
        csvContent += `${row}\r\n`;
      });
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement('a');
      link.setAttribute('href', encodedUri);
      link.setAttribute('download', 'rubisen.csv');
      document.body.appendChild(link); // Required for FF
      link.click();
    },
  },
  computed: {
    currentSequenceStr() {
      return this.currentSequence.join(' ');
    },
    sequenceStr() {
      return this.sequence.join(' ');
    },
    entries() {
      return this.datas.length;
    },
  },
};
</script>
