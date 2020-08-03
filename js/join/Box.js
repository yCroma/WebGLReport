export default class Box extends THREE.Mesh {
  constructor (obj_num) {
    // 座標、向き、色などを保持するための geometry
    const geometry = new THREE.Geometry;

    // 保持しているところに、オブジェクトの情報を追加していく
    for (let i = 0; i < obj_num; i++) {
      for (let j = 0; j < obj_num; j++) {
        for (let k = 0; k < obj_num; k++) {
          const meshTemp = new THREE.Mesh(new THREE.BoxGeometry(5, 5, 5));

          meshTemp.position.set(
            10 * (i - obj_num / 2),
            10 * (j - obj_num / 2),
            10 * (k - obj_num / 2),
          );

          geometry.mergeMesh(meshTemp);
        }
      }
    }

    const material = new THREE.MeshNormalMaterial();

    // geometry と material　の情報をもとに継承しながらインスタンス化
    super(geometry, material);
  }
}