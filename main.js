let camera, renderer, scene, cube, controls, stats, container, mtlLoader;
var clock = new THREE.Clock();
var mixers = [];

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    // scene.fog = new THREE.Fog(0xa0a0a0, 200, 1000);

    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        20000
    );



    const light = new THREE.AmbientLight(0x404040, 4); // soft white light
    scene.add(light);

    // const pointLight = new THREE.PointLight(0xffffff, 1);
    // pointLight.position.set(33, 8, 33);
    // pointLight.castShadow = true;
    // pointLight.shadow.camera.near = 0.9;
    // pointLight.shadow.camera.far = 25;
    // scene.add(pointLight)

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.state.setBlending(THREE.NoBlending)
    renderer.state.disable(renderer.context.BLEND);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.BasicShadowMap;

    document.body.appendChild(renderer.domElement);
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    // controls.maxPolarAngle = Math.PI / 2;




    // const geometry = new THREE.BoxGeometry(20000, 20000, 20000);
    // let materials = [
    //     new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('skybox/mp_amh/amh_rt.png'), side: THREE.DoubleSide }),
    //     new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('skybox/mp_amh/amh_lf.png'), side: THREE.DoubleSide }),
    //     new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('skybox/mp_amh/amh_up.png'), side: THREE.DoubleSide }),
    //     new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('skybox/mp_amh/amh_dn.png'), side: THREE.DoubleSide }),
    //     new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('skybox/mp_amh/amh_ft.png'), side: THREE.DoubleSide }),
    //     new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('skybox/mp_amh/amh_bk.png'), side: THREE.DoubleSide })
    // ];
    // let material = new THREE.MeshFaceMaterial(materials)
    // cube = new THREE.Mesh(geometry, material);
    // cube.position.y = 2000;
    // scene.add(cube);





    var mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(2000, 2000, 10, 10), new THREE.MeshPhongMaterial({ color: 0x00ff00, wireframe: true }));
    mesh.rotation.x = -Math.PI / 2;
    mesh.receiveShadow = true;
    scene.add(mesh);






    // mtlLoader = new THREE.MTLLoader();
    // mtlLoader.load('DeadPool/source/DEA_PC_DEADPOOL_Wade_Wilson_Deadpool_Default.mtl',
    //     function(materials) {

    //         materials.preload();

    //         var loader = new THREE.OBJLoader();
    //         loader.setMaterials(materials);

    //         // load a resource
    //         loader.load(
    //             // resource URL
    //             'DeadPool/source/DEA_PC_DEADPOOL_Wade_Wilson_Deadpool_Default.obj',
    //             // called when resource is loaded
    //             function(mesh) {
    //                 mesh.scale.set(250, 250, 250)
    //                 mesh.position.x = -300;
    //                 mesh.position.z = -300;
    //                 scene.add(mesh);
    //             })
    //     });






    // const texture = new THREE.TextureLoader().load('NightWing/textures/INJ_IOS_CHARACTER_Richard_Grayson_Nightwing_Injustice_Body_D.png');

    // const loader = new THREE.FBXLoader();
    // loader.load('NightWing/source/Backflip.fbx', function(object) {


    //     object.mixer = new THREE.AnimationMixer(object);
    //     mixers.push(object.mixer);
    //     var action = object.mixer.clipAction(object.animations[0]);
    //     action.play();
    //     object.traverse(function(child) {
    //         if (child.isMesh) {
    //             child.castShadow = true;
    //             child.receiveShadow = true;
    //             child.material.map = texture;
    //             child.material.needsUpdate = true;
    //         }

    //     });
    //     object.scale.set(250, 250, 250);
    //     object.position.x = -300;
    //     scene.add(object);
    // }, (ev) => {
    //     // console.log(ev);
    // }, (e) => {
    //     // console.log(e);
    // });



    const stexture = new THREE.TextureLoader().load('Ironman/source/Iron_Man_Mark_42/maps/42.png');


    const sloader = new THREE.FBXLoader();
    sloader.load('Ironman/source/Iron_Man_Mark_42/Two Hand Spell Casting.fbx', function(object) {


        object.mixer = new THREE.AnimationMixer(object);
        mixers.push(object.mixer);
        var action = object.mixer.clipAction(object.animations[0]);
        action.play();
        object.traverse(function(child) {
            if (child.isMesh) {

                child.castShadow = true;
                child.receiveShadow = true;
                child.material.map = stexture;
                child.material.needsUpdate = true;
            }

        });

        object.scale.set(250, 250, 250);
        object.position.x = 300;
        scene.add(object);
    }, (ev) => {
        // console.log(ev);
    }, (e) => {
        // console.log(e);
    });


    // const texture = new THREE.TextureLoader().load(
    //     'Red Lightsaber/textures/sable_laser_botones_AlbedoTransparency.png',
    //     'Red Lightsaber/textures/sable_laser_botones_MetallicSmoothness.png',
    //     'Red Lightsaber/textures/sable_laser_cuadrado_AlbedoTransparency.png',
    //     'Red Lightsaber/textures/sable_laser_cuadrado_MetallicSmoothness.png',
    //     'Red Lightsaber/textures/sable_laser_detalles_mango_AlbedoTranspare.png',
    //     'Red Lightsaber/textures/sable_laser_detalles_mango_MetallicSmoothn.png',
    //     'Red Lightsaber/textures/sable_laser_emision_AlbedoTransparency.png',
    //     'Red Lightsaber/textures/sable_laser_emision_Emission.png',
    //     'Red Lightsaber/textures/sable_laser_emision_MetallicSmoothness.png',
    //     'Red Lightsaber/textures/sable_laser_luz_AlbedoTransparency.png',
    //     'Red Lightsaber/textures/sable_laser_luz_Emission.png',
    //     'Red Lightsaber/textures/sable_laser_luz_MetallicSmoothness.png',
    //     'Red Lightsaber/textures/sable_laser_negro_AlbedoTransparency.png',
    //     'Red Lightsaber/textures/sable_laser_negro_MetallicSmoothness.png',
    //     'Red Lightsaber/textures/sable_laser_plateado_AlbedoTransparency.png',
    //     'Red Lightsaber/textures/sable_laser_plateado_MetallicSmoothness.png',
    // );


    // var loader = new THREE.FBXLoader();
    // loader.load('Red Lightsaber/source/sable laser.fbx', function(fbx) {
    //     // fbx.material.map = texture;
    //     fbx.scale.set(5, 5, 5);
    //     scene.add(fbx)

    //     // console.log(ev);
    // }, (e) => {
    //     // console.log(e);
    // });



    container = document.createElement('div');
    document.body.appendChild(container);

    // stats
    stats = new Stats();
    container.appendChild(stats.dom);


    camera.position.z = 655;
    camera.position.y = 200;

}


// Create the display and movement
function animate() {
    requestAnimationFrame(animate);
    if (mixers.length > 0) {
        for (var i = 0; i < mixers.length; i++) {
            mixers[i].update(clock.getDelta());
        }
    }
    // mtlLoader.loader.mesh.rotation.x += 0.01;
    // // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;

    renderer.render(scene, camera);
    stats.update();
}


//Window Resize 
function onWindowResize() {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onWindowResize, false)

//Call back Functions
init();
animate();