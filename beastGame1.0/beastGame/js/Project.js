// import { OrbitControls } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js'

const scene = new THREE.Scene();
var selectBala;
// const cylinderBala1 = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 1, 8), new THREE.MeshBasicMaterial({
//   color: 0xFF0000
// }));

// cylinderBala1.position.set(0, 2, 22);
// cylinderBala1.rotation.set(0, 0, 0);
// scene.add(cylinderBala1)

var activeBalaR = 0;
var activeBalaL = 0;

const BoxC = new THREE.Mesh(
    new THREE.CylinderGeometry(1, 1, 1, 8),
    new THREE.MeshBasicMaterial({
        color: 0x5555ff,
    })
);

// BoxC.position.z = 22
BoxC.rotation.set(90, 0, 0);
// scene.add(BoxC)
var keyMap = [];

const cameraMovel = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100
); //Perspective cam

const cameraTop = new THREE.OrthographicCamera(
    window.innerWidth / -25,
    window.innerWidth / 25,
    window.innerHeight / 20,
    window.innerHeight / -20, -80,
    80
); //Orthographic Top

const cameraFrontal = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100
); // Perspective Front

const cameraLateral = new THREE.PerspectiveCamera(
    60.5,
    window.innerWidth / window.innerHeight,
    0.1,
    150
); //Perspective Rigth

cameraTop.position.x = 0;
cameraTop.position.y = 0;
cameraTop.position.z = 1;
cameraTop.rotation.x = 30;

cameraFrontal.position.z = 45;
cameraFrontal.position.y = 10;
cameraFrontal.position.x = 0;

cameraLateral.position.y = 100;

cameraMovel.position.set(0.0, 7.3, 39);

const positionMainCamara = 0.35;

const rendererTop = new THREE.WebGLRenderer();
rendererTop.setSize(window.innerWidth, window.innerHeight);
const rendererFrontal = new THREE.WebGLRenderer();
rendererFrontal.setSize(window.innerWidth, window.innerHeight);
const rendererLateral = new THREE.WebGLRenderer();
rendererLateral.setSize(window.innerWidth, window.innerHeight);
const rendererMovel = new THREE.WebGLRenderer();
rendererMovel.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(rendererFrontal.domElement);
scene.add(new THREE.AxesHelper(9));

const Beast = beast();

Beast.position.set(0, -4.3, 25);
Beast.rotation.set(0, 0, 0);

const Al1 = alvo1();
const Al2 = alvo1();
const Al3 = alvo1();
const Al4 = alvo1();
const Al5 = alvo1();
const Al6 = alvo1();
const Al7 = alvo1();
var iR = 0;
var iL = 0;
var BalaR = [];
BalaR.push(
    new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.1, 1, 8),
        new THREE.MeshBasicMaterial({
            color: 0xffd700,
        })
    )
);

BalaR[iR].position.z = 22;
BalaR[iR].position.x = 0.5;
BalaR[iR].rotation.x = 90;
scene.add(BalaR[iR]);

var BalaL = [];
BalaL.push(
    new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.1, 1, 8),
        new THREE.MeshBasicMaterial({
            color: 0xff1493,
        })
    )
);

BalaL[iL].position.z = 22;
BalaL[iL].position.x = -0.5;
BalaL[iL].rotation.x = 90;
scene.add(BalaL[iL]);

Al1.position.set(-47, 0, -15);
Al2.position.set(-33, 0, -15);
Al3.position.set(-20, 0, -15);
Al4.position.set(0, 0, -15);
Al5.position.set(20, 0, -15);
Al6.position.set(33, 0, -15);
Al7.position.set(47, 0, -15);

var moveDirection1 = 0;
var moveDirection2 = 1;
var moveDirection3 = 0;
var moveDirection4 = 1;
var moveDirection5 = 1;
var moveDirection6 = 0;
var moveDirection7 = 1;

//movimento dos alvos

var moveAlvos = function() {
    if (moveDirection1 == 0) {
        if (Al1.position.x <= 47) {
            Al1.position.x += 0.2;
        } else {
            moveDirection1 = 1;
        }
    } else if (moveDirection1 == 1) {
        if (Al1.position.x >= -47) {
            Al1.position.x -= 0.2;
        } else {
            moveDirection1 = 0;
        }
    }

    if (moveDirection2 == 0) {
        if (Al2.position.x <= 47) {
            Al2.position.x += 0.2;
        } else {
            moveDirection2 = 1;
        }
    } else if (moveDirection2 == 1) {
        if (Al2.position.x >= -47) {
            Al2.position.x -= 0.2;
        } else {
            moveDirection2 = 0;
        }
    }

    if (moveDirection3 == 0) {
        if (Al3.position.x <= 47) {
            Al3.position.x += 0.2;
        } else {
            moveDirection3 = 1;
        }
    } else if (moveDirection3 == 1) {
        if (Al3.position.x >= -47) {
            Al3.position.x -= 0.2;
        } else {
            moveDirection3 = 0;
        }
    }

    if (moveDirection4 == 0) {
        if (Al4.position.x <= 47) {
            Al4.position.x += 0.2;
        } else {
            moveDirection4 = 1;
        }
    } else if (moveDirection4 == 1) {
        if (Al4.position.x >= -47) {
            Al4.position.x -= 0.2;
        } else {
            moveDirection4 = 0;
        }
    }

    if (moveDirection5 == 0) {
        if (Al5.position.x <= 47) {
            Al5.position.x += 0.2;
        } else {
            moveDirection5 = 1;
        }
    } else if (moveDirection5 == 1) {
        if (Al5.position.x >= -47) {
            Al5.position.x -= 0.2;
        } else {
            moveDirection5 = 0;
        }
    }

    if (moveDirection6 == 0) {
        if (Al6.position.x <= 47) {
            Al6.position.x += 0.2;
        } else {
            moveDirection6 = 1;
        }
    } else if (moveDirection6 == 1) {
        if (Al6.position.x >= -47) {
            Al6.position.x -= 0.2;
        } else {
            moveDirection6 = 0;
        }
    }

    if (moveDirection7 == 0) {
        if (Al7.position.x <= 47) {
            Al7.position.x += 0.2;
        } else {
            moveDirection7 = 1;
        }
    } else if (moveDirection7 == 1) {
        if (Al7.position.x >= -47) {
            Al7.position.x -= 0.2;
        } else {
            moveDirection7 = 0;
        }
    }
};

/**************************** creation of the game arena ****************************/

const BoxLeft = new THREE.Mesh(
    new THREE.BoxGeometry(1, 10, 60),
    new THREE.MeshBasicMaterial({
        color: 0x5555ff,
    })
);
BoxLeft.position.set(-50.0, 0.0, 0.0);

const BoxRight = new THREE.Mesh(
    new THREE.BoxGeometry(1, 10, 60),
    new THREE.MeshBasicMaterial({
        color: 0x5555ff,
    })
);
BoxRight.position.set(50.0, 0.0, 0.0);

const BoxFront = new THREE.Mesh(
    new THREE.BoxGeometry(1, 5, 15),
    new THREE.MeshBasicMaterial({
        color: 0x5555ff,
    })
);
BoxFront.rotation.set(0.0, 80.111, 0.0);
BoxFront.position.set(0.0, 0.0, -30.0);
BoxFront.scale.set(2.0, 2.0, 6.7);

const chao = new THREE.Mesh(
    new THREE.BoxGeometry(100, 1, 60),
    new THREE.MeshBasicMaterial({
        color: 0x55ff55,
    })
);
chao.position.set(0.0, -5.0, 0.0);

scene.add(BoxLeft);
scene.add(BoxRight);
scene.add(BoxFront);
scene.add(chao);
/**************************** creation of the game arena(end) ****************************/
function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomvelocity(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var velocRotacao = 0.2;
var update = function() {
    window.addEventListener('resize', onWindowResize, true);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    checkGameKeys();
};

//Função que renderiza as cameras
var render = function() {
    rendererTop.render(scene, cameraTop);
    rendererFrontal.render(scene, cameraFrontal);
    rendererMovel.render(scene, cameraMovel);
    rendererLateral.render(scene, cameraLateral);
};
var rotate = 0;

// const caixote = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({
//   color: 0x5555ff
// }));
// scene.add(caixote)

// var a = -3 * (10**(-3))
// var v
// const grav =(S0, v ,t) => S0 + v * t + 0.5 * a * (t**2)

// setInterval(() => {
//   const bottom = caixote
//   const newBottom = grav(bottom,v,1)
//   v +=a

//   bottom = `${newBottom}`
// },1)

//
const clock = new THREE.Clock();

var Gameloop = function() {
    requestAnimationFrame(Gameloop);
    update();
    render();
    moveAlvos();

    // BoxC.rotation.y +=0.08
    // Bala[0].position.z -= 0.2
    // This parte is reponsible to make the camera rotate
    const tempo = clock.getElapsedTime() * 0.1;
    cameraLateral.position.z = Math.cos(tempo) * 10 - Math.sin(tempo) * 10;
    cameraLateral.position.x = Math.sin(tempo) * 10 + Math.cos(tempo) * 10;
    cameraLateral.lookAt(scene.position);
    //this part is responsible to shoot
    for (let index = 0; index < BalaR.length; index++) {
        if (BalaR[index].position.z < 22 && BalaR[index].position.z > -27) {
            // while(Bala[i-1].position.z>-50){
            BalaR[index].position.z -= 0.8;
            BalaR[index].position.x += 0.1;
            BalaR[index].rotation.y += 0.08;
            // move bullet
            if (cameraMovel.position.z < 40 && cameraMovel.position.z > -40) {
                cameraMovel.position.z -= 0.8;
                if (cameraMovel.position.z == -8.999999999999998) {
                    updateCameraMovel();
                }
            }
            // }
        }
    }

    for (let index = 0; index < BalaL.length; index++) {
        if (BalaL[index].position.z < 22 && BalaL[index].position.z > -27) {
            // while(Bala[i-1].position.z>-50){
            BalaL[index].position.z -= 0.8;
            BalaL[index].position.x -= 0.1;
            BalaL[index].rotation.y += 0.08;
            // move bullet
            if (cameraMovel.position.z < 40 && cameraMovel.position.z > -40) {
                cameraMovel.position.z -= 0.8;
                if (cameraMovel.position.z == -8.999999999999998) {
                    updateCameraMovel();
                }
            }
            // }
        }
    }

    var VetAlvos = [Al1, Al2, Al3, Al4, Al5, Al6, Al7];
    BalaCol(VetAlvos);

};

// função que se encarrega de atualizar a camera movel
let updateCameraMovel = () => {
    cameraMovel.position.set(0.0, 7.3, 39);
};

//chamada do GameLoop
Gameloop();

//Função que trata do redimensionamento do jogo
function onWindowResize() {
    cameraFrontal.aspect = window.innerWidth / window.innerHeight;
    cameraFrontal.updateProjectionMatrix();
    rendererFrontal.setSize(window.innerWidth, window.innerHeight);
    render();
}
/******************************************** beast ************************************************/
function beast() {
    var cubeN,
        cubeS,
        cubeCentral,
        cubeLateral1,
        cubeLateral2,
        cubeLateral3,
        cubeLateral4,
        cubeSuperior,
        cubeSuportBracal,
        cylinderBracalL,
        cylinderBracalR,
        cubeUnion1,
        cubeUnion2,
        cubeUnion3,
        cubeUnion4,
        cubeUnion5,
        cylinderBracalBL,
        cylinderBracalBR,
        material;

    material = new THREE.MeshLambertMaterial({
        color: 0xbfa065,
        wireframe: false,
    });

    cubeS = new THREE.Mesh(new THREE.BoxGeometry(5, 0.5, 0.5), material);
    cubeS.rotation.set(0, 0, 0);
    cubeS.position.set(0, 0, 0);

    cubeN = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 5), material);
    cubeN.position.set(0, 0, 0);
    cubeN.rotation.set(0, 0, 0);

    /*************************** creation of the beast(instruction end) *********************************/
    /******************************************************************************/
    /*************************** creation of the central column of the beast *********************************/

    cubeCentral = new THREE.Mesh(new THREE.BoxGeometry(0.5, 3, 0.5), material);
    cubeCentral.position.set(0, 1.5, 0);
    cubeCentral.rotation.set(0, 0, 0);

    /*************************** creation of the central column of the beast(instruction end) *********************************/
    /***********************************************************************/
    /*************************** creation of the side column of the beast *********************************/

    cubeLateral1 = new THREE.Mesh(
        new THREE.BoxGeometry(0.46, 0.25, 3.2),
        new THREE.MeshBasicMaterial({
            color: 0xff8000,
        })
    );
    cubeLateral1.position.set(0, 1.32, 1.11);
    cubeLateral1.rotation.set(45, 0, 0);

    cubeLateral2 = new THREE.Mesh(
        new THREE.BoxGeometry(0.46, 0.25, 3.2),
        new THREE.MeshBasicMaterial({
            color: 0xff8000,
        })
    );
    cubeLateral2.position.set(0, 1.32, -1.11);
    cubeLateral2.rotation.set(-45, 0, 0);

    cubeLateral3 = new THREE.Mesh(
        new THREE.BoxGeometry(0.25, 3.2, 0.46),
        new THREE.MeshBasicMaterial({
            color: 0xff8000,
        })
    );
    cubeLateral3.position.set(-1.3, 1.4, 0);
    cubeLateral3.rotation.set(0, 0, 15);

    cubeLateral4 = new THREE.Mesh(
        new THREE.BoxGeometry(0.25, 3.2, 0.46),
        new THREE.MeshBasicMaterial({
            color: 0xff8000,
        })
    );
    cubeLateral4.position.set(1.3, 1.4, 0);
    cubeLateral4.rotation.set(0, 0, -15);

    /*************************** creation of the side column of the beast(instruction end) *********************************/
    /***********************************************************************/
    /*************************** crossbow top bar creation *********************************/

    cubeSuperior = new THREE.Mesh(
        new THREE.BoxGeometry(0.5, 0.5, 5),
        new THREE.MeshBasicMaterial({
            color: 0xff8000,
        })
    );
    cubeSuperior.position.set(0, 3, -2.255);
    cubeSuperior.rotation.set(0, 0, 0);

    /*************************** crossbow top bar creation(end) *********************************/

    /*************************** crossbow bracer support bar creation  *********************************/

    cubeSuportBracal = new THREE.Mesh(
        new THREE.BoxGeometry(3.84, 0.37, 1.12),
        new THREE.MeshBasicMaterial({
            color: 0xff8000,
        })
    );
    cubeSuportBracal.position.set(0, 3, 0);
    cubeSuportBracal.rotation.set(0, 0, 0);

    /*************************** crossbow bracer support bar creation(end) *********************************/

    /*************************** bracal  *********************************/

    cylinderBracalL = new THREE.Mesh(
        new THREE.CylinderGeometry(0.4, 0.4, 2, 10),
        new THREE.MeshBasicMaterial({
            color: 0xff8000,
        })
    );
    cylinderBracalL.position.set(-1.4, 3.7, 0);
    cylinderBracalL.rotation.set(0, 0, 0);

    cylinderBracalR = new THREE.Mesh(
        new THREE.CylinderGeometry(0.4, 0.4, 2, 10),
        new THREE.MeshBasicMaterial({
            color: 0xff8000,
        })
    );
    cylinderBracalR.position.set(1.4, 3.7, 0);
    cylinderBracalR.rotation.set(0, 0, 0);

    cubeUnion1 = new THREE.Mesh(
        new THREE.BoxGeometry(0.7, 0.15, 0.15),
        new THREE.MeshBasicMaterial({
            color: 0xff8000,
        })
    );
    cubeUnion1.position.set(-0.868, 4, -0.01);
    cubeUnion1.rotation.set(0, 0, 0);

    cubeUnion2 = new THREE.Mesh(
        new THREE.BoxGeometry(0.7, 0.15, 0.15),
        new THREE.MeshBasicMaterial({
            color: 0xff8000,
        })
    );
    cubeUnion2.position.set(0.868, 4, -0.01);
    cubeUnion2.rotation.set(0, 0, 0);

    cubeUnion3 = new THREE.Mesh(
        new THREE.BoxGeometry(0.15, 0.5, 0.15),
        new THREE.MeshBasicMaterial({
            color: 0xff8000,
        })
    );
    cubeUnion3.position.set(-0.449, 4.18, -0.01);
    cubeUnion3.rotation.set(0, 0, 0);

    cubeUnion4 = new THREE.Mesh(
        new THREE.BoxGeometry(0.15, 0.5, 0.15),
        new THREE.MeshBasicMaterial({
            color: 0xff8000,
        })
    );
    cubeUnion4.position.set(0.449, 4.18, -0.01);
    cubeUnion4.rotation.set(0, 0, 0);

    cubeUnion5 = new THREE.Mesh(
        new THREE.BoxGeometry(1.05, 0.15, 0.15),
        new THREE.MeshBasicMaterial({
            color: 0xff8000,
        })
    );
    cubeUnion5.position.set(0, 4.4, -0.01);
    cubeUnion5.rotation.set(0, 0, 0);

    cylinderBracalBL = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.1, 1.5, 8),
        new THREE.MeshBasicMaterial({
            color: 0xbfa065,
        })
    );
    cylinderBracalBL.position.set(-1.917, 3.5, -0.783);
    cylinderBracalBL.rotation.set(-30, 0, 90);

    cylinderBracalBR = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.1, 1.5, 8),
        new THREE.MeshBasicMaterial({
            color: 0xbfa065,
        })
    );
    cylinderBracalBR.position.set(1.917, 3.5, -0.783);
    cylinderBracalBR.rotation.set(30, 0, 90);

    const groupBeast = new THREE.Group();
    groupBeast.add(cubeN);
    groupBeast.add(cubeS);
    groupBeast.add(cubeCentral);
    groupBeast.add(cubeLateral1);
    groupBeast.add(cubeLateral2);
    groupBeast.add(cubeLateral3);
    groupBeast.add(cubeLateral4);
    groupBeast.add(cubeSuperior);
    groupBeast.add(cubeSuportBracal);
    groupBeast.add(cylinderBracalL);
    groupBeast.add(cylinderBracalR);
    groupBeast.add(cubeUnion1);
    groupBeast.add(cubeUnion2);
    groupBeast.add(cubeUnion3);
    groupBeast.add(cubeUnion4);
    groupBeast.add(cubeUnion5);
    groupBeast.add(cylinderBracalBL);
    groupBeast.add(cylinderBracalBR);
    scene.add(groupBeast);
    return groupBeast;
}
/******************************************* beast **********************************************/

/******************************************* alvo 1 *********************************************/
function alvo1() {
    const cylinderAlvo1 = new THREE.Mesh(
        new THREE.CylinderGeometry(1.7, 1.7, 0.2, 8),
        new THREE.MeshBasicMaterial({
            color: 0xffffff,
        })
    );
    cylinderAlvo1.position.set(0, 1.15, -6.471);
    cylinderAlvo1.rotation.set(90, 0, 0);

    const cylinderAlvo2 = new THREE.Mesh(
        new THREE.CylinderGeometry(1.5, 1.5, 0.2, 8),
        new THREE.MeshBasicMaterial({
            color: 0xff0000,
        })
    );
    cylinderAlvo2.position.set(0, 1.15, -6.471);
    cylinderAlvo2.rotation.set(90, 0, 0);

    const cylinderAlvo3 = new THREE.Mesh(
        new THREE.CylinderGeometry(1.3, 1.3, 0.2, 8),
        new THREE.MeshBasicMaterial({
            color: 0xffffff,
        })
    );
    cylinderAlvo3.position.set(0, 1.15, -6.461);
    cylinderAlvo3.rotation.set(90, 0, 0);

    const cylinderAlvo4 = new THREE.Mesh(
        new THREE.CylinderGeometry(1.1, 1.1, 0.2, 8),
        new THREE.MeshBasicMaterial({
            color: 0xff0000,
        })
    );
    cylinderAlvo4.position.set(0, 1.15, -6.458);
    cylinderAlvo4.rotation.set(90, 0, 0);

    const cylinderAlvo5 = new THREE.Mesh(
        new THREE.CylinderGeometry(0.9, 0.9, 0.2, 8),
        new THREE.MeshBasicMaterial({
            color: 0xffffff,
        })
    );
    cylinderAlvo5.position.set(0, 1.15, -6.455);
    cylinderAlvo5.rotation.set(90, 0, 0);

    const cylinderAlvo6 = new THREE.Mesh(
        new THREE.CylinderGeometry(0.7, 0.7, 0.2, 8),
        new THREE.MeshBasicMaterial({
            color: 0xff0000,
        })
    );
    cylinderAlvo6.position.set(0, 1.15, -6.452);
    cylinderAlvo6.rotation.set(90, 0, 0);

    const cylinderAlvo7 = new THREE.Mesh(
        new THREE.CylinderGeometry(0.5, 0.5, 0.2, 8),
        new THREE.MeshBasicMaterial({
            color: 0xffffff,
        })
    );
    cylinderAlvo7.position.set(0, 1.15, -6.449);
    cylinderAlvo7.rotation.set(90, 0, 0);

    const cylinderAlvo8 = new THREE.Mesh(
        new THREE.CylinderGeometry(0.3, 0.3, 0.2, 8),
        new THREE.MeshBasicMaterial({
            color: 0xff0000,
        })
    );
    cylinderAlvo8.position.set(0, 1.15, -6.446);
    cylinderAlvo8.rotation.set(90, 0, 0);

    const Alvo1 = new THREE.Group();
    Alvo1.add(cylinderAlvo1);
    Alvo1.add(cylinderAlvo2);
    Alvo1.add(cylinderAlvo3);
    Alvo1.add(cylinderAlvo4);
    Alvo1.add(cylinderAlvo5);
    Alvo1.add(cylinderAlvo6);
    Alvo1.add(cylinderAlvo7);
    Alvo1.add(cylinderAlvo8);

    scene.add(Alvo1);
    return Alvo1;
}
/******************************************** alvo 1(end) *******************************************************/
// flecha
// function flecha() {

//   // cylinderBala1.scale.set(0.05,3,0.05)

//   const cylinderBala2 = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 1, 8), new THREE.MeshBasicMaterial({
//     color: 0xFF0000
//   }));
//   cylinderBala2.position.set(-0.5, 0, 0);
//   // cylinderBala2.rotation.set(90, 0, 0);
//   cylinderBala2.scale.set(0.05,3,0.05)
//   // const ball = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({
//   //   color: 0xff8000
//   // }));
//   // ball.position.set(0, 0, 22);
//   // ball.rotation.set(0, 0, 0);

//   const flecha = new THREE.Group();
//   flecha.add(cylinderBala2)
//   // flecha.add(cylinderBala2)

//   scene.add(flecha)
//   return flecha
// }

function handleKeyDown(e) {
    if (!keyMap.includes(e.keyCode)) {
        keyMap.push(e.keyCode);
    }

    /* ativaçao da camera do topo */
    if (e.keyCode == 49) {
        //tecla 1
        const child = document.querySelector('body > canvas');
        document.body.removeChild(child);
        document.body.appendChild(rendererTop.domElement);
        // new OrbitControls(cameraTop, rendererTop.domElement);
    }

    /** ativação da camera frontal **/
    if (e.keyCode == 50) {
        //tecla 2
        const child = document.querySelector('body > canvas');
        document.body.removeChild(child);
        document.body.appendChild(rendererFrontal.domElement);
        // new OrbitControls(cameraFrontal, rendererFrontal.domElement);
    }

    /** ativação da camera Movel **/
    if (e.keyCode == 51) {
        //tecla 3
        const child = document.querySelector('body > canvas');
        document.body.removeChild(child);
        document.body.appendChild(rendererMovel.domElement);
        // new OrbitControls(cameraLateral, rendererLateral.domElement);
    }
    if (e.keyCode == 52) {
        //tecla 4
        const child = document.querySelector('body > canvas');
        document.body.removeChild(child);
        document.body.appendChild(rendererLateral.domElement);
        // new OrbitControls(cameraLateral, rendererLateral.domElement);
    }

    /* representação visual no modelo de arames e sólida 
    if (e.keyCode == 52) {
        //tecla 4
        scene.traverse(function (node) {
            if (node instanceof THREE.Mesh) {
                node.material.wireframe = !node.material.wireframe;
            }
        });
    }*/
    if (e.keyCode == 32) {
        //tecla space

        if (activeBalaR == 1) {
            if (BalaR[iR].position.z > -27) {
                console.log(BalaR[0].position.z);
                BalaR[iR].position.z -= 1;
                iR++;
                // Bala.push(BoxC)
                BalaR.push(
                    new THREE.Mesh(
                        new THREE.CylinderGeometry(0.1, 0.1, 1, 8),
                        new THREE.MeshBasicMaterial({
                            color: 0xffd700,
                        })
                    )
                );
                BalaR[iR].position.x = Beast.position.x + 0.5;
                BalaR[iR].position.z = 22;

                BalaR[iR].rotation.x = 90;
                scene.add(BalaR[iR]);
            }
        } else if (activeBalaL == 1) {
            console.log(iL);
            if (BalaL[iL].position.z > -27) {
                console.log(BalaL[iL].position.z);
                BalaL[iL].position.z -= 1;
                iL++;
                // Bala.push(BoxC)
                BalaL.push(
                    new THREE.Mesh(
                        new THREE.CylinderGeometry(0.1, 0.1, 1, 8),
                        new THREE.MeshBasicMaterial({
                            color: 0xff1493,
                        })
                    )
                );
                BalaL[iL].position.x = Beast.position.x - 0.5;
                BalaL[iL].position.z = 22;

                BalaL[iL].rotation.x = 90;
                scene.add(BalaL[iL]);
            }
        }
    }
    if (e.keyCode == 87) {
        activeBalaR = 1;
        activeBalaL = 0;
    }

    if (e.keyCode == 81) {
        activeBalaL = 1;
        activeBalaR = 0;
    }
}

function handleKeyUp(e) {
    if (keyMap.includes(e.keyCode)) {
        keyMap.splice(keyMap.indexOf(e.keyCode), 1);
    }
}

function key(x) {
    return keyMap.includes(x);
}

function checkGameKeys() {
    if (key(68) || key(39)) {
        //D
        if (Math.ceil(Beast.position.x) === 35) {} else {
            Beast.position.x += 0.4; //* aceleration;
            if (BalaR[iR].position.z == 22) {
                BalaR[iR].position.x += 0.4;
            }
            if (BalaL[iL].position.z == 22) {
                BalaL[iL].position.x += 0.4;
            }
        }
    }

    if (key(65) || key(37)) {
        if (Math.ceil(Beast.position.x) === -35) {} else {
            Beast.position.x -= 0.4; //* aceleration;
            if (BalaR[iR].position.z == 22) {
                BalaR[iR].position.x -= 0.4;
            }
            if (BalaL[iL].position.z == 22) {
                BalaL[iL].position.x -= 0.4;
            }
        }
    } //A

    if (key(38)) {
        cameraFrontal.position.z -= 0.8;
        cameraFrontal.position.y -= 0.1;
    }
    if (key(40)) {
        cameraFrontal.position.z += 0.8;
    }
}



//---------------------------------------------------------------------------------------------------------//
// -------------------------------------------Colision-----------------------------------------------------//
//---------------------------------------------------------------------------------------------------------//
//Verify collisions between 2 objetcts
var isCollision = function(obj1, obj2) {

    //Create Bounding Box
    var ob1 = new THREE.Box3().setFromObject(obj1);
    var ob2 = new THREE.Box3().setFromObject(obj2);

    var BBob1 = {
        MaxX: ob1.min.x,
        MaxX: ob1.max.x,
        MinY: ob1.min.y,
        MaxY: ob1.max.y,
        MinZ: ob1.min.z,
        MaxZ: ob1.max.z,
    };

    var BBob2 = {
        MinX: ob2.min.x,
        MaxX: ob2.max.x,
        MinY: ob2.min.y,
        MaxY: ob2.max.y,
        MinZ: ob2.min.z,
        MaxZ: ob2.max.z,
    };

    if ((BBob2.MinX <= BBob1.xMax && BBob2.xMax >= BBob1.MinX) &&
        (BBob2.MinY <= BBob1.yMax && BBob2.yMax >= BBob1.MinY) &&
        (BBob2.MinZ <= BBob1.zMax && BBob2.zMax >= BBob1.MinZ)
    ) {
        return true;
    }
    return false;

}

//_____________________Collisions Arrow-Targets______________
var mov = [];
var movI = [];

function BalaCol(alvos) {
    if (activeBalaR == 1) {
        alvos.forEach((alvo, indexA) => {
            fl.forEach((bala, indexB) => {
                if (isCollision(alvo, bala) && vida[indexA] < 3) {
                    const clonado = BalaL.clone();
                    clonado.position.set(bala.position.x, bala.position.y, bala.position.z);
                    clonado.rotation.set(bala.rotation.x, bala.rotation.y, bala.rotation.z)

                    vida[indexA] += 1;
                    mov.push(clonado);
                    movI.push(indexA);
                    fl.splice(indexB, 1);
                    scene.remove(bala);
                    scene.add(clonado);
                    setTimeout(function() { scene.remove(clonado); }, 300)
                }
            });
        });
    }


}

var ALvosCol = function() {
    //Alvo1
    if ((isCollision(Al1, Al2) == true) || (isCollision(Al1, Al3) == true) || (isCollision(Al1, Al4) == true) ||
        (isCollision(Al1, Al5) == true) || (isCollision(Al1, Al6) == true) || (isCollision(Al1, Al7) == true)) {
        console.log("Entrou");
    }
    //Alvo2
    if (isCollision(Al2, Al1) == (isCollision(Al2, Al3) == true) || (isCollision(Al2, Al4) == true) ||
        (isCollision(Al2, Al5) == true) || (isCollision(Al2, Al6) == true) || (isCollision(Al2, Al7) == true)) {
        if (moveDirection2 == 0) {
            if (Al2.position.x <= 47) {
                Al2.position.x += 0.2;
            } else {
                moveDirection2 = 1;
            }
        } else if (moveDirection2 == 1) {
            if (Al2.position.x >= -47) {
                Al2.position.x -= 0.2;
            } else {
                moveDirection2 = 0;
            }
        }
    }
    //Alvo3
    if (isCollision(Al3, Al1) == (isCollision(Al3, Al2) == true) || (isCollision(Al3, Al4) == true) ||
        (isCollision(Al3, Al5) == true) || (isCollision(Al3, Al6) == true) || (isCollision(Al3, Al7) == true)) {
        if (moveDirection3 == 0) {
            if (Al3.position.x <= 47) {
                Al3.position.x += 0.2;
            } else {
                moveDirection3 = 1;
            }
        } else if (moveDirection3 == 1) {
            if (Al3.position.x >= -47) {
                Al3.position.x -= 0.2;
            } else {
                moveDirection3 = 0;
            }
        }
    }

    //Alvo4
    if (isCollision(Al4, Al1) == (isCollision(Al4, Al2) == true) || (isCollision(Al4, Al3) == true) ||
        (isCollision(Al4, Al5) == true) || (isCollision(Al4, Al6) == true) || (isCollision(Al4, Al7) == true)) {
        if (moveDirection4 == 0) {
            if (Al4.position.x <= 47) {
                Al4.position.x += 0.2;
            } else {
                moveDirection4 = 1;
            }
        } else if (moveDirection4 == 1) {
            if (Al4.position.x >= -47) {
                Al4.position.x -= 0.2;
            } else {
                moveDirection4 = 0;
            }
        }
    }
    //Alvo5
    if (isCollision(Al5, Al1) == (isCollision(Al5, Al2) == true) || (isCollision(Al5, Al3) == true) ||
        (isCollision(Al5, Al4) == true) || (isCollision(Al5, Al6) == true) || (isCollision(Al5, Al7) == true)) {
        if (moveDirection5 == 0) {
            if (Al5.position.x <= 47) {
                Al5.position.x += 0.2;
            } else {
                moveDirection5 = 1;
            }
        } else if (moveDirection5 == 1) {
            if (Al5.position.x >= -47) {
                Al5.position.x -= 0.2;
            } else {
                moveDirection5 = 0;
            }
        }
    }

    //Alvo6
    if (isCollision(Al6, Al1) == (isCollision(Al6, Al2) == true) || (isCollision(Al6, Al3) == true) ||
        (isCollision(Al6, Al4) == true) || (isCollision(Al6, Al5) == true) || (isCollision(Al6, Al7) == true)) {
        if (moveDirection6 == 0) {
            if (Al6.position.x <= 47) {
                Al6.position.x += 0.2;
            } else {
                moveDirection6 = 1;
            }
        } else if (moveDirection6 == 1) {
            if (Al6.position.x >= -47) {
                Al6.position.x -= 0.2;
            } else {
                moveDirection6 = 0;
            }
        }
    }

    //Alvo7
    if (isCollision(Al7, Al1) == (isCollision(Al7, Al2) == true) || (isCollision(Al7, Al3) == true) ||
        (isCollision(Al7, Al4) == true) || (isCollision(Al7, Al5) == true) || (isCollision(Al7, Al6) == true)) {
        if (moveDirection7 == 0) {
            if (Al7.position.x <= 47) {
                Al7.position.x += 0.2;
            } else {
                moveDirection7 = 1;
            }
        } else if (moveDirection7 == 1) {
            if (Al7.position.x >= -47) {
                Al7.position.x -= 0.2;
            } else {
                moveDirection7 = 0;
            }
        }
    }
}