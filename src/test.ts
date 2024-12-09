import type { ID, State } from '../types'
import type { ComboStyle } from './element/combo'
import type { EdgeStyle } from './element/edge'
import type { NodeStyle } from './element/node'
/**
 * <zh/> 图数据
 *
 * <en/> Graph data
 * @remarks
 * <zh/> 图数据（GraphData）是 Graph 接收的数据类型之一，包含节点、边、组合的集合。
 *
 * <zh/> 一个图数据的示例如下：
 *
 * <en/> Graph data is one of the data types received by Graph, which contains a collection of nodes, edges, and combos.
 *
 * <en/> An example of a graph data is as follows:
 *
 * ```json
 * {
 *  "nodes": [
 *    { "id": "node1", "combo": "combo-1", "style": { "x": 100, "y": 100 } },
 *    { "id": "node2", "style": { "x": 200, "y": 200 } }
 *  ],
 *  "edges": [{ "source": "node1", "target": "node2" }],
 *  "combos": [{ "id": "combo-1", "style": { "x": 100, "y": 100 } }]
 * }
 * ```
 */
export interface GraphData {
  nodes?: NodeData[]
  edges?: EdgeData[]
  combos?: ComboData[]
}

export interface NodeData {
  id: ID // 节点 ID
  type?: string // 节点类型
  data?: Record<string, unknown> // 节点数据 用于存储节点的自定义数据，可以在样式映射中通过回调函数获取
  style?: NodeStyle // 节点样式
  states?: State[] // 节点初始状态
  combo?: ID // 所属组合 ID
  children?: ID[] // 子节点 ID:  适用于树图结构
  depth?: number // 节点深度 适用于树图结构
  [key: string]: unknown
}

export interface ComboData {
  id: ID
  type?: string
  data?: Record<string, unknown>  // 用于存储 Combo 的自定义数据，可以在样式映射中通过回调函数获取
  style?: ComboStyle  // Combo 样式
  states?: State[]
  combo?: ID  // 所属组合 ID
  [key: string]: unknown
}

/**
 * 边数据
 */
export interface EdgeData {
  id?: ID
  source: ID
  target: ID
  sourceNode?: ID
  targetNode?: ID
  type?: string
  data?: Record<string, unknown>
  style?: EdgeStyle
  states?: State[]
  [key: string]: unknown
}
