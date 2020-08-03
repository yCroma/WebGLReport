export default class Box extends THREE.Mesh{
  constructor () {
    // ジオメトリとマテリアルの作成
    const geometry = new THREE.BoxGeometry(5, 5, 5);
    const material = new THREE.MeshNormalMaterial();

    // 親クラスからの呼び出しでインスタンス化
    super(geometry, material);
  }
}