function getParameterDefinitions() {
    return [
        { name: 'base_faccia', type: 'float', caption: 'base faccia (mm)',initial: 110},
        { name: 'naso', type: 'float', caption: 'naso (mm)', initial: 40},
        { name: 'nozzle', type: 'choice', caption: 'nozzle', values: [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2], captions: ['0.1','0.2','0.3','0.4','0.5','0.6','0.7','0.8','0.9','1.0','1.1','1.2'], initial: 0.8 },
        { name: 'rounded', type: 'choice', caption: 'spessore pareti maschera', values: [1, 2, 3], captions: ['nozzle x 1', 'nozzle x 2', 'nozzle x 3'], initial: 2 },
    ];
}




function main(params){
    
    if(params.base_faccia <= 62) throw new Error("il valore deve essere maggiore di 62 mm!");
    if(params.base_faccia >= 140) throw new Error("il valore deve essere minore di 140 mm!");

    if(params.naso <= 0) throw new Error("il valore deve essere maggiore di 0 mm!");
    if(params.naso >= 70) throw new Error("il valore deve essere minore di 70 mm!");
    
    
    var base_faccia = params.base_faccia*1.07;
    var nasone = params.naso*1.25;
    var Dz = (params.naso+(15)); //sostituire nasone con DZ
    var filtro_standard = 110;
    var Dx = (filtro_standard/3.6);
    var Dy = (base_faccia/2);
    var Ex = params.nozzle*params.rounded;
    var Sp = 5;
    var kerf = 0.3; 


return CSG.cylinder({start: [0,0,0], end: [0,0,nasone],radiusStart: Dx+(Ex/2), radiusEnd: Dy, resolution: 100}).setColor(0,0.502,0)
            .translate([3,0,0])
                .translate([-3,0,0])
                    .union([CSG.cylinder({start: [0,0,0], end: [0,0,Sp],radiusStart: Dx, radiusEnd: Dx+(Ex/2), resolution: 100})
                    .translate([3,0,-Sp])
                    .translate([-3,0,0]),CSG
                    .cube({center: [0,0,0],radius: [Dx/0.76,11.5,Sp/2], resolution: 16}).setColor(0,0.505,0)
                    .rotateX(0).rotateY(0).rotateZ(-60)
                    .translate([3,0,-2.5])
                    .translate([-3,0,0]),CSG
                    .cube({center: [0,0,0],radius: [Dx/0.76,11.5,Sp/2], resolution: 16}).setColor(0,0.505,0)
                    .rotateX(0).rotateY(0).rotateZ(60)
                    .translate([3,0,-Sp/2])
                    .translate([-3,0,0])])
                    .subtract([CSG.cylinder({start: [0,0,0], end: [0,0,nasone*1.01],radiusStart: Dx-(Ex/2), radiusEnd: Dy-Ex, resolution: 100})
                    .translate([3,0,0])
                    .translate([-3,0,0])
                    .union([CSG.cube({center: [0,0,0],radius: [15.277777777777777,20.27777777777778,25], resolution: 16}).setColor(0,0.502,0).rotateX(0).rotateY(0).rotateZ(0)
                    .translate([3,0,0])
                    .translate([-3,0,0])]),
CSG.cube({center: [0,0,0],radius: [2.5,7.5,5.025], resolution: 16}).setColor(0,0.502,0).rotateX(0).rotateY(0).rotateZ(60)
.translate([17,20.5+9,-5]),
CSG.cube({center: [0,0,0],radius: [2.5,7.5,5.025], resolution: 16}).setColor(0,0.502,0).rotateX(0).rotateY(0).rotateZ(60)
.translate([17,20.5+9,-5])
.mirrored(CSG.Plane.fromNormalAndPoint([1,0,0], [0,0,0])),
CSG.cube({center: [0,0,0],radius: [2.5,7.5,5.025], resolution: 16}).setColor(0,0.502,0).rotateX(0).rotateY(0).rotateZ(60)
.translate([17,20.5+9,-5])
.mirrored(CSG.Plane.fromNormalAndPoint([0,1,0], [0,0,0])),
CSG.cube({center: [0,0,0],radius: [2.5,7.5,5.025], resolution: 16}).setColor(0,0.502,0).rotateX(0).rotateY(0).rotateZ(60)
.translate([17,(20.5+9),-5]).mirrored(CSG.Plane.fromNormalAndPoint([0,1,0], [0,0,0]))
.mirrored(CSG.Plane.fromNormalAndPoint([1,0,0], [0,0,0]))]);
}
