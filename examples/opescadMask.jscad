function getParameterDefinitions() {
    return [
        { name: 'base_faccia', type: 'slider', min: 40, max: 140, caption: 'base faccia (mm)',initial: 110},
        { name: 'naso', type: 'slider', min: 0, max: 70, caption: 'naso (mm)', initial: 40},
        { name: 'nozzle', type: 'choice', caption: 'nozzle', values: [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2], captions: ['0.1','0.2','0.3','0.4','0.5','0.6','0.7','0.8','0.9','1.0','1.1','1.2'], initial: 0.8 },
        { name: 'rounded', type: 'choice', caption: 'spessore pareti maschera', values: [1, 2], captions: ['nozzle x 1', 'nozzle x 2'], initial: 2 },
    ];
}




function main(params){
    var base_faccia = params.base_faccia;
    var nasone = params.naso;
    var Dz = (params.naso+15);
    var filtro_standard = 110;
    var Dx = (filtro_standard/3.6);
    var Dy = (base_faccia/2);
    var Ex = params.nozzle;
    var Sp = 5;
    var kerf = 0.3; 


return CSG.cylinder({start: [0,0,0], end: [0,0,45],radiusStart: (Dx+Ex/2), radiusEnd: Dy, resolution: 100}).setColor(0,0.502,0)
            .translate([3,0,0])
                .translate([-3,0,0])
                    .union([CSG.cylinder({start: [0,0,0], end: [0,0,Sp],radiusStart: Dx, radiusEnd: Dx+(Ex/2), resolution: 100}).setColor(0,0.502,0)
                    .translate([3,0,-Sp])
                    .translate([-3,0,0]),CSG
                    .cube({center: [0,0,0],radius: [39.72222222222222,11.5,2.5], resolution: 16})
                    .rotateX(0).rotateY(0).rotateZ(-45)
                    .translate([3,0,-2.5])
                    .translate([-3,0,0]),CSG
                    .cube({center: [0,0,0],radius: [39.72222222222222,11.5,2.5], resolution: 16})
                    .rotateX(0).rotateY(0).rotateZ(45)
                    .translate([3,0,-2.5])
                    .translate([-3,0,0])])
                    .subtract([CSG.cylinder({start: [0,0,0], end: [0,0,45.1],radiusStart: 29.950555555555553, radiusEnd: 41.29, resolution: 100})
                    .translate([3,0,0])
                    .translate([-3,0,0])
                    .union([CSG.cube({center: [0,0,0],radius: [15.277777777777777,20.27777777777778,25], resolution: 16}).setColor(0,0.502,0).rotateX(0).rotateY(0).rotateZ(0)
                    .translate([3,0,0])
                    .translate([-3,0,0])]),
CSG.cube({center: [0,0,0],radius: [2.5,7.5,5.025], resolution: 16}).setColor(0,0.502,0).rotateX(0).rotateY(0).rotateZ(45)
.translate([23.80604053625562,23.80604053625562,-5]),
CSG.cube({center: [0,0,0],radius: [2.5,7.5,5.025], resolution: 16}).setColor(0,0.502,0).rotateX(0).rotateY(0).rotateZ(45)
.translate([23.80604053625562,23.80604053625562,-5])
.mirrored(CSG.Plane.fromNormalAndPoint([1,0,0], [0,0,0])),
CSG.cube({center: [0,0,0],radius: [2.5,7.5,5.025], resolution: 16}).setColor(0,0.502,0).rotateX(0).rotateY(0).rotateZ(45)
.translate([23.80604053625562,23.80604053625562,-5])
.mirrored(CSG.Plane.fromNormalAndPoint([0,1,0], [0,0,0])),
CSG.cube({center: [0,0,0],radius: [2.5,7.5,5.025], resolution: 16}).setColor(0,0.502,0).rotateX(0).rotateY(0).rotateZ(45)
.translate([23.80604053625562,23.80604053625562,-5])
.mirrored(CSG.Plane.fromNormalAndPoint([1,1,0], [0,0,0]))]);
}
