import './index.styl'
import TreeMenu from '@/utils/tree-menu'

var nodes = [
  {
    id: 0,
    pId: -1,
    name: 'Aaaa'
  },
  {
    id: 1,
    pId: 0,
    name: 'A'
  },
  {
    id: 11,
    pId: 1,
    name: 'A1'
  },
  {
    id: 12,
    pId: 1,
    name: 'A2'
  },
  {
    id: 13,
    pId: 1,
    name: 'A3'
  },
  {
    id: 2,
    pId: 0,
    name: 'B'
  },
  {
    id: 21,
    pId: 2,
    name: 'B1'
  },
  {
    id: 22,
    pId: 2,
    name: 'B2'
  },
  {
    id: 23,
    pId: 2,
    name: 'B3'
  },
  {
    id: 3,
    pId: 0,
    name: 'C'
  },
  {
    id: 31,
    pId: 3,
    name: 'C1'
  },
  {
    id: 32,
    pId: 3,
    name: 'C2'
  },
  {
    id: 33,
    pId: 3,
    name: 'C3'
  },
  {
    id: 34,
    pId: 31,
    name: 'x'
  },
  {
    id: 35,
    pId: 31,
    name: 'y'
  },
  {
    id: 36,
    pId: 31,
    name: 'z'
  },
  {
    id: 37,
    pId: 36,
    name: 'z1123'
  },
  {
    id: 38,
    pId: 37,
    name: 'z123123123'
  }
]

var html = new TreeMenu(nodes, { label: 'name', value: 'id', parent: 'pId' }).init('-1')

document.getElementById('app').innerHTML = html
