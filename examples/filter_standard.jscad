function main(){


//filtro standard

filter = CSG.cylinder({start: [0,0,0], end: [0,0,40],radiusStart: 25.462962962962962, radiusEnd: 30.555555555555554, resolution: 100})
.translate([0,0,-40])
.translate([0,0,2])
.union([CSG.cylinder({start: [0,0,0], end: [0,0,34],radiusStart: 16.975308641975307, radiusEnd: 36.28333333333334, resolution: 100})

.translate([0,0,-30])
.translate([0,0,2]),


//CSG.cube({center: [0,0,0],radius: [5,10,20], resolution: 16}).setColor(0,0.402,0)
//.rotateX(0).rotateY(10).rotateZ(0)
//.translate([15,0,-35]),

//X superiore filtro
CSG.cube({center: [0,0,0],radius: [30,11.5,2.5], resolution: 16}).setColor(0,0.502,0).rotateX(0).rotateY(0).rotateZ(-60).translate([0,0,-37.5])
.translate([0,0,2]),

CSG.cube({center: [0,0,0],radius: [30,11.5,2.5], resolution: 16}).setColor(0,0.502,0).rotateX(0).rotateY(0).rotateZ(60).translate([0,0,-37.5])

.translate([0,0,2])])

//oring interno filtro
.subtract([CSG.cylinder({start: [0,0,0], end: [0,0,5],radiusStart: 29, radiusEnd: 27, resolution: 100}).setColor(0,0.505,0).subtract([CSG.cylinder({start: [0,0,0], end: [0,0,5],radiusStart: 22, radiusEnd: 24, resolution: 100})])
.translate([0,0,-4]),

//.subtract([CSGcylinder({start:[0,0,0], end:[0,0,16],radiusStart: 20, radiusEnd: 20, resolution: 100})]),

//.subtract([CSG.cube({center: [0,0,0],radius: [18.77777777777778,24.77777777777778,1], resolution: 16})
//.subtract([CSG.cube({center: [0,0,0],radius: [17.27777777777778,23.27777777777778,1], resolution: 16})]),

//foro filtro 
CSG.cylinder({start: [0,0,0], end: [0,0,28],radiusStart: 19, radiusEnd: 19, resolution: 100}).translate([0,0,-34]),
CSG.cylinder({start: [0,0,0], end: [0,0,8],radiusStart: 19, radiusEnd: 17, resolution: 100}).translate([0,0,-6]),
//CSG.cube({center: [0,0,0],radius: [15.277777777777777,20.27777777777778,25], resolution: 16}).translate([0,0,-7]),

CSG.cylinder({start: [0,0,0], end: [0,0,5.3],radiusStart: 30.855555555555554, radiusEnd: 30.855555555555554, resolution: 100}).translate([0,0,1]),
//incastro filtro con maschera
CSG.cube({center: [0,0,0],radius: [39.87222222222222,13,2.65], resolution: 16}).rotateX(0).rotateY(0).rotateZ(90).translate([0,0,3.65]),

CSG.cube({center: [0,0,0],radius: [39.87222222222222,13,2.65], resolution: 16}).rotateX(0).rotateY(0).rotateZ(-60).translate([0,0,3.65]),

CSG.cube({center: [0,0,0],radius: [39.87222222222222,13,2.65], resolution: 16}).rotateX(0).rotateY(0).rotateZ(60).translate([0,0,3.65]),

//spazio ulteriore per elastici parte vicino maschera
CSG.cube({center: [0,0,0],radius: [3.5,13,5.025], resolution: 16}).setColor(0,0.502,0).rotateX(0).rotateY(0).rotateZ(60)
.translate([17,20.5+9,-2]),

CSG.cube({center: [0,0,0],radius: [3.5,13,5.025], resolution: 16}).setColor(0,0.502,0).rotateX(0).rotateY(0).rotateZ(60)
.translate([17,20.5+9,2])
.mirrored(CSG.Plane.fromNormalAndPoint([1,0,0], [0,0,0])),

CSG.cube({center: [0,0,0],radius: [3.5,13,5.025], resolution: 16}).setColor(0,0.502,0).rotateX(0).rotateY(0).rotateZ(60)
.translate([17,20.5+9,2])
.mirrored(CSG.Plane.fromNormalAndPoint([0,1,0], [0,0,0])),

CSG.cube({center: [0,0,0],radius: [3.5,13,5.025], resolution: 16}).setColor(0,0.502,0).rotateX(0).rotateY(0).rotateZ(60)
.translate([17,20.5+9,2])
.mirrored(CSG.Plane.fromNormalAndPoint([0,1,0], [0,0,0]))
.mirrored(CSG.Plane.fromNormalAndPoint([1,0,0], [0,0,0])),

//fori esterni per elastici parte lontano maschera
CSG.cube({center: [0,0,0],radius: [1.5,7.5,5.025], resolution: 16}).setColor(0,0.402,0)
.rotateX(0).rotateY(38).rotateZ(60)
.translate([12.5,22,-35]),

CSG.cube({center: [0,0,0],radius: [1.5,7.5,5.025], resolution: 16}).setColor(0,0.502,0)
.rotateX(0).rotateY(38).rotateZ(60)
.translate([12.5,22,-35])
.mirrored(CSG.Plane.fromNormalAndPoint([1,0,0], [0,0,0])),

CSG.cube({center: [0,0,0],radius: [1.5,7.5,5.025], resolution: 16}).setColor(0,0.502,0)
.rotateX(0).rotateY(38).rotateZ(60)
.translate([12.5,22,-35])
.mirrored(CSG.Plane.fromNormalAndPoint([0,1,0], [0,0,0])),

CSG.cube({center: [0,0,0],radius: [1.5,7.5,25.025], resolution: 16}).setColor(0,0.502,0).rotateX(0)
.rotateY(38).rotateZ(60)
.translate([12.5,22,-35])
.mirrored(CSG.Plane.fromNormalAndPoint([0,1,0], [0,0,0]))
.mirrored(CSG.Plane.fromNormalAndPoint([1,0,0], [0,0,0])),
// alleggerimento


CSG.cube({center: [0,0,0],radius: [0.75,42,12.5], resolution: 16})

.transform(CSG.Matrix4x4.rotation([0,0,0], [0,0,1], 0))
.translate([0,0,-19])
.union([CSG.cube({center: [0,0,0],radius: [0.75,42,12.5], resolution: 16})
.transform(CSG.Matrix4x4.rotation([0,0,0], [0,0,1], 9))
.translate([0,0,-19])])
.union([CSG.cube({center: [0,0,0],radius: [0.75,42,12.5], resolution: 16})
.transform(CSG.Matrix4x4.rotation([0,0,0], [0,0,1], 18))
.translate([0,0,-19])])
.union([CSG.cube({center: [0,0,0],radius: [0.75,42,12.5], resolution: 16})
.transform(CSG.Matrix4x4.rotation([0,0,0], [0,0,1], 27))
.translate([0,0,-19])])
.union([CSG.cube({center: [0,0,0],radius: [0.75,42,12.5], resolution: 16})
.transform(CSG.Matrix4x4.rotation([0,0,0], [0,0,1], 36))
.translate([0,0,-19])])
.union([CSG.cube({center: [0,0,0],radius: [0.75,42,12.5], resolution: 16})
.transform(CSG.Matrix4x4.rotation([0,0,0], [0,0,1], 45))
.translate([0,0,-19])])
.union([CSG.cube({center: [0,0,0],radius: [0.75,42,12.5], resolution: 16})
.transform(CSG.Matrix4x4.rotation([0,0,0], [0,0,1], 54))
.translate([0,0,-19])])
.union([CSG.cube({center: [0,0,0],radius: [0.75,42,12.5], resolution: 16})
.transform(CSG.Matrix4x4.rotation([0,0,0], [0,0,1], 63))
.translate([0,0,-19])])
.union([CSG.cube({center: [0,0,0],radius: [0.75,42,12.5], resolution: 16})
.transform(CSG.Matrix4x4.rotation([0,0,0], [0,0,1], 72))
.translate([0,0,-19])])
.union([CSG.cube({center: [0,0,0],radius: [0.75,42,12.5], resolution: 16})
.transform(CSG.Matrix4x4.rotation([0,0,0], [0,0,1], 81))
.translate([0,0,-19])])
.union([CSG.cube({center: [0,0,0],radius: [0.75,42,12.5], resolution: 16})
.transform(CSG.Matrix4x4.rotation([0,0,0], [0,0,1], 90))
.translate([0,0,-19])])
.union([CSG.cube({center: [0,0,0],radius: [0.75,42,12.5], resolution: 16})
.transform(CSG.Matrix4x4.rotation([0,0,0], [0,0,1], 99))
.translate([0,0,-19])])
.union([CSG.cube({center: [0,0,0],radius: [0.75,42,12.5], resolution: 16})
.transform(CSG.Matrix4x4.rotation([0,0,0], [0,0,1], 108))
.translate([0,0,-19])])
.union([CSG.cube({center: [0,0,0],radius: [0.75,42,12.5], resolution: 16})
.transform(CSG.Matrix4x4.rotation([0,0,0], [0,0,1], 117))
.translate([0,0,-19])])
.union([CSG.cube({center: [0,0,0],radius: [0.75,42,12.5], resolution: 16})
.transform(CSG.Matrix4x4.rotation([0,0,0], [0,0,1], 126))
.translate([0,0,-19])])
.union([CSG.cube({center: [0,0,0],radius: [0.75,42,12.5], resolution: 16})
.transform(CSG.Matrix4x4.rotation([0,0,0], [0,0,1], 135))
.translate([0,0,-19])])
.union([CSG.cube({center: [0,0,0],radius: [0.75,42,12.5], resolution: 16})
.transform(CSG.Matrix4x4.rotation([0,0,0], [0,0,1], 144))
.translate([0,0,-19])])
.union([CSG.cube({center: [0,0,0],radius: [0.75,42,12.5], resolution: 16})
.transform(CSG.Matrix4x4.rotation([0,0,0], [0,0,1], 153))
.translate([0,0,-19])])
.union([CSG.cube({center: [0,0,0],radius: [0.75,42,12.5], resolution: 16})
.transform(CSG.Matrix4x4.rotation([0,0,0], [0,0,1], 162))
.translate([0,0,-19])])
.union([CSG.cube({center: [0,0,0],radius: [0.75,42,12.5], resolution: 16})
.transform(CSG.Matrix4x4.rotation([0,0,0], [0,0,1], 171))
.translate([0,0,-19])])
.union([CSG.cube({center: [0,0,0],radius: [0.75,42,12.5], resolution: 16})
.transform(CSG.Matrix4x4.rotation([0,0,0], [0,0,1], 180))
.translate([0,0,-19])])]).translate([0,0,-6.4]);

    return [filter];
    
}
