window.addEventListener('load', init);

function init() {
  const width = 960;
  const height = 540;
  const CELL_NUM = 0;

  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#Canvas1')
  });
  renderer.setPixelRatio(window.devicePxielRatio);
  renderer.setSize(width, height);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, width / height);
  camera.position.set(0, 0, 400);

  const container = new THREE.Group();
  scene.add(container);

  const material = new THREE.MeshNormalMaterial();

  for (let i = 0; i < CELL_NUM; i++) {
    for (let j = 0; j < CELL_NUM; j++) {
      for (let k = 0; k < CELL_NUM; k++) {
        const mesh = new THREE.Mesh(
          new THREE.BoxGeometry(5, 5, 5),
          material
        );
        mesh.position.set(
          10 * (i - CELL_NUM / 2),
          10 * (j - CELL_NUM / 2),
          10 * (k - CELL_NUM / 2),
        )

        container.add(mesh)
      }
    }
  }

  const stats = new Stats();
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.top = '10px';
  document.body.appendChild(stats.domElement);

  tick();
  
  function tick() {
    container.rotation.x += Math.PI / 180;
    container.rotation.y += Math.PI / 180;

    renderer.render(scene, camera);

    document.getElementById('info').innerHTML = JSON.stringify(
      renderer.info.render,
      '',
      '   '
    );

    stats.update();
    
    requestAnimationFrame(tick);
  }
}