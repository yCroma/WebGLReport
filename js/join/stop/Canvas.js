// 利用するジオメトリのインポート
import Box from '../Box.js';

export default class Canvas {
  constructor () {
    // renderer のサイズ
    this.width = 950;
    this.height = 540;

    // HTML からオブジェクト数を取得
    this.obj_num = parseInt(
      document.getElementById('obj_num').innerText
    );

    // 初期化
    this.init();

    // レンダリング
    this.render();
  }
  init () {
    { // renderer の作成
      this.renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#Canvas')
      });
      this.renderer.setSize(this.width, this.height);
      this.renderer.setPixelRatio(window.devicePixelRatio);
    }
    { // scene の作成
      this.scene = new THREE.Scene();
    }
    { // camara の作成
      this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 1000);
      this.camera.position.set(0, 0, 500);
    }
    { // light の作成
      this.directionalLight = new THREE.DirectionalLight(0xffffff);
      this.directionalLight.position.set(1, 1, 1);
      this.scene.add(this.directionalLight);
    }
    //
    // 3Dオブジェクトの作成
    //
    { 
      // ../Box.jsで用意したgeometryとmaterialをMeshする
      this.mesh = new Box(this.obj_num);

      // 完成したオブジェクトをシーンに追加
      this.scene.add(this.mesh);
    }
    {
      this.stats = new Stats();
      this.stats.domElement.style.position = 'absolute';
      this.stats.domElement.style.top = '60px';
      document.body.appendChild(this.stats.domElement);
    }
  }
  render () {
    // レンダー
    this.renderer.render(this.scene, this.camera);

    // Statsを表示させる
    document.getElementById('info').innerHTML = JSON.stringify(
      this.renderer.info.render,
      '',
      '   '
    );
    this.stats.update();
    
    // アニメーションの更新
    requestAnimationFrame( () => {
      this.render();
    });
  }
}