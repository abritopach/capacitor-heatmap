import { Injectable } from '@angular/core';
import { HeatmapData } from 'capacitor-heatmap/dist/esm/models/models';

@Injectable({
  providedIn: 'root'
})
export class FakeHeatmapDataService {

  data: HeatmapData = [[38,20,2],[38,690,3],[48,30,1],[48,40,1],[48,670,1],[58,640,1],[58,680,1],[67,630,1],[86,10,1],
    [86,660,1],[96,0,1],[96,80,1],[96,530,1],[96,540,2],[96,560,1],[96,620,1],[96,640,1],[105,530,1],[105,560,3],
    [105,590,1],[105,610,1],[115,300,1],[115,310,4],[125,260,1],[125,280,1],[125,300,1],[125,500,1],[125,530,1],
    [134,250,1],[134,260,1],[134,280,1],[144,40,1],[144,260,1],[144,270,4],[144,320,1],[144,330,1],[153,220,1],
    [163,280,1],[173,120,2],[182,80,1],[182,120,2],[192,10,1],[192,120,1],[192,130,2],[192,190,1],[192,530,1],
    [201,120,2],[201,130,1],[201,150,1],[201,190,1],[201,240,1],[201,280,1],[201,290,1],[201,340,1],[201,390,3],
    [201,400,2],[201,420,1],[201,670,1],[201,710,1],[201,750,1],[211,160,2],[211,280,1],[211,320,1],[211,340,1],
    [211,800,2],[211,810,2],[221,80,1],[221,140,2],[221,170,1],[221,180,1],[221,230,1],[221,420,1],[221,490,2],
    [221,730,1],[230,150,1],[230,550,4],[230,670,1],[230,790,2],[240,100,1],[240,120,1],[240,150,1],[240,160,1],
    [240,220,1],[240,240,1],[240,300,1],[240,330,1],[240,460,1],[240,480,2],[240,550,1],[240,570,1],[240,840,2],
    [249,70,1],[249,120,1],[249,200,1],[249,210,1],[249,290,3],[249,340,1],[249,860,2],[249,870,2],[259,0,1],
    [259,90,1],[259,160,1],[259,180,1],[259,190,1],[259,270,1],[259,280,1],[259,290,2],[259,320,1],[259,360,1],
    [259,430,1],[259,480,1],[259,490,1],[259,860,1],[269,60,2],[269,150,1],[269,220,1],[269,260,1],[269,280,1],
    [269,290,1],[269,300,1],[269,320,1],[269,350,1],[269,450,3],[269,470,2],[269,480,3],[269,490,1],[278,120,1],
    [278,140,1],[278,150,2],[278,190,1],[278,220,1],[278,260,1],[278,290,2],[278,500,2],[278,680,2],[278,740,2],
    [288,0,1],[288,50,1],[288,150,2],[288,230,1],[288,260,1],[288,280,1],[288,290,2],[288,320,1],[288,330,1],
    [288,340,1],[288,460,1],[288,630,2],[288,720,2],[288,730,2],[288,750,2],[288,790,2],[288,840,1],[297,20,1],
    [297,120,2],[297,140,2],[297,150,1],[297,180,1],[297,250,4],[297,290,8],[297,300,4],[297,310,1],[297,340,2],
    [297,350,2],[297,360,1],[297,380,2],[297,410,1],[297,430,2],[297,440,5],[297,450,1],[297,460,8],[297,470,2],
    [297,480,4],[297,490,2],[297,500,3],[297,520,2],[297,530,1],[297,540,1],[297,550,1],[297,610,1],[297,620,2],
    [297,630,4],[297,640,1],[297,650,2],[297,660,3],[297,670,11],[297,690,1],[297,700,1],[297,710,2],[297,730,2],
    [297,770,3],[297,780,2],[297,790,2],[297,830,2],[307,0,1],[307,10,1],[307,70,1],[307,100,1],[307,120,3],
    [307,140,2],[307,150,2],[307,170,2],[307,180,1],[307,230,1],[307,250,1],[307,270,1],[307,290,1],[307,300,1],
    [307,320,1],[307,350,1],[307,680,2],[307,690,2],[307,700,2],[307,710,1],[307,730,1],[307,840,1],[307,850,2],
    [316,0,1],[316,140,1],[316,150,1],[316,270,1],[316,410,1],[316,420,1],[316,430,4],[316,440,1],[316,460,1],
    [316,490,1],[316,510,1],[316,530,2],[316,550,1],[316,690,1],[316,700,2],[316,730,1],[316,850,1],[316,880,1],
    [326,20,1],[326,90,1],[326,110,1],[326,130,1],[326,170,2],[326,190,1],[326,230,1],[326,260,1],[326,280,1],
    [326,290,1],[326,300,2],[326,310,1],[326,320,1],[326,330,1],[326,410,1],[326,460,1],[326,480,1],[326,530,1],
    [326,580,1],[326,680,1],[326,690,3],[326,750,2],[326,840,1],[326,870,1],[326,1010,2],[336,140,1],[336,170,1],
    [336,180,1],[336,190,1],[336,230,1],[336,240,1],[336,290,2],[336,310,1],[336,480,1],[336,510,1],[336,690,1],
    [336,730,1],[336,750,3],[336,810,1],[336,870,3],[336,880,1],[336,960,1],[336,990,1],[336,1000,1],[345,0,1],
    [345,150,3],[345,160,1],[345,190,2],[345,240,1],[345,260,1],[345,290,4],[345,400,1],[345,420,1],[345,440,1],
    [345,460,1],[345,500,1],[345,510,1],[345,530,1],[345,630,1],[345,650,1],[345,690,1],[345,710,1],[345,750,2],
    [345,820,1],[345,850,2],[345,900,1],[345,960,1],[355,20,1],[355,140,1],[355,150,1],[355,160,1],[355,180,2],
    [355,220,1],[355,250,1],[355,280,1],[355,290,3],[355,300,1],[355,310,2],[355,320,2],[355,330,4],[355,460,1],
    [355,470,1],[355,510,1],[355,680,1],[355,750,1],[355,800,2],[355,810,1],[355,850,1],[364,150,1],[364,160,1],
    [364,170,1],[364,200,1],[364,230,1],[364,250,1],[364,290,1],[364,310,1],[364,430,1],[364,520,1],[364,700,1],
    [364,720,1],[364,760,1],[364,780,4],[364,900,1],[364,980,1],[374,90,1],[374,140,1],[374,150,2],[374,180,2],
    [374,190,2],[374,250,1],[374,260,2],[374,340,1],[374,450,1],[374,480,1],[374,490,1],[374,690,1],[374,870,1],
    [384,30,3],[384,40,1],[384,50,1],[384,80,1],[384,120,1],[384,140,1],[384,150,1],[384,180,1],[384,210,1],
    [384,250,4],[384,270,1],[384,300,1],[384,310,1],[384,350,1],[384,390,1],[384,400,2],[384,550,1],[384,560,1],
    [384,730,1],[384,780,1],[393,50,1],[393,70,1],[393,100,1],[393,140,1],[393,150,2],[393,160,1],[393,180,2],
    [393,210,1],[393,290,1],[393,310,1],[393,400,2],[393,450,1],[393,480,1],[393,510,1],[393,520,1],[393,600,1],
    [393,610,1],[393,620,1],[393,630,1],[393,640,1],[393,660,1],[393,680,1],[393,710,1],[393,720,1],[393,850,1],
    [403,160,1],[403,230,2],[403,250,1],[403,280,1],[403,390,1],[403,400,2],[403,450,1],[403,470,1],[403,500,2],
    [403,570,1],[403,600,1],[403,610,1],[403,640,4],[403,690,3],[403,720,1],[403,750,1],[412,150,1],[412,160,1],
    [412,210,1],[412,220,1],[412,250,1],[412,270,1],[412,280,2],[412,330,1],[412,380,2],[412,400,4],[412,450,1],
    [412,470,1],[412,480,1],[412,490,1],[412,520,1],[412,530,1],[412,560,1],[412,620,2],[412,650,1],[412,680,1],
    [412,700,1],[412,750,1],[412,840,1],[412,870,1],[422,30,1],[422,40,1],[422,60,1],[422,160,1],[422,170,2],
    [422,180,1],[422,200,1],[422,220,1],[422,400,1],[422,420,1],[422,450,1],[422,460,1],[422,480,1],[422,490,2],
    [422,510,1],[422,560,1],[422,600,1],[422,610,1],[422,620,1],[422,630,1],[422,640,1],[422,700,1],[422,710,2],
    [422,780,1],[432,110,1],[432,150,1],[432,170,1],[432,180,1],[432,240,1],[432,250,1],[432,260,1],[432,310,1],
    [432,330,1],[432,380,1],[432,430,1],[432,460,1],[432,480,1],[432,510,1],[432,520,1],[432,530,1],[432,620,3],
    [432,630,5],[432,660,1],[432,670,2],[432,680,1],[432,690,1],[432,730,3],[432,740,1],[432,750,2],[441,50,1],
    [441,120,1],[441,140,1],[441,150,1],[441,190,2],[441,220,1],[441,290,1],[441,330,1],[441,400,1],[441,410,1],
    [441,450,1],[441,480,2],[441,500,2],[441,510,1],[441,540,1],[441,570,1],[441,600,2],[441,610,3],[441,620,1],
    [441,680,3],[441,690,2],[441,730,1],[441,850,1],[441,870,1],[451,140,1],[451,150,3],[451,160,1],[451,220,1],
    [451,400,1],[451,410,1],[451,450,1],[451,460,1],[451,480,2],[451,560,1],[451,570,1],[451,590,1],[451,600,1],
    [451,610,4],[451,620,2],[451,870,1],[451,950,2],[460,140,1],[460,150,1],[460,160,1],[460,230,1],[460,300,1],
    [460,310,3],[460,320,3],[460,330,5],[460,340,8],[460,350,2],[460,400,1],[460,410,1],[460,440,2],[460,450,1],
    [460,470,1],[460,520,1],[460,630,1],[460,670,1],[460,720,1],[460,850,1],[470,10,1],[470,130,1],[470,140,2],
    [470,150,1],[470,180,1],[470,220,1],[470,260,1],[470,300,1],[470,330,1],[470,340,1],[470,360,3],[470,400,1],
    [470,450,1],[470,520,1],[470,600,1],[470,670,1],[470,700,1],[470,850,3],[480,200,1],[480,220,1],[480,290,2],
    [480,320,2],[480,330,7],[480,410,1],[480,450,2],[480,510,1],[480,540,1],[480,620,2],[480,650,1],[480,670,2],
    [480,700,1],[480,730,1],[489,20,1],[489,130,1],[489,140,1],[489,150,2],[489,160,1],[489,170,1],[489,190,1],
    [489,220,2],[489,230,1],[489,240,2],[489,250,2],[489,260,1],[489,270,3],[489,280,1],[489,290,1],[489,430,1],
    [489,450,1],[489,510,1],[489,640,2],[489,770,1],[489,780,1],[489,840,2],[489,880,1],[499,100,1],[499,110,1],
    [499,120,1],[499,130,1],[499,140,2],[499,160,2],[499,170,1],[499,180,1],[499,210,1],[499,220,1],[499,240,1],
    [499,310,2],[499,380,1],[499,410,1],[499,450,1],[499,530,1],[499,540,1],[499,650,2],[499,720,1],[499,790,6],
    [499,810,1],[508,20,1],[508,120,1],[508,130,2],[508,140,2],[508,150,1],[508,190,1],[508,280,2],[508,360,1],
    [508,410,1],[508,450,2],[508,490,1],[508,510,2],[508,760,2],[508,860,1],[518,20,1],[518,60,1],[518,100,1],
    [518,120,1],[518,140,1],[518,150,1],[518,160,1],[518,180,1],[518,200,1],[518,210,1],[518,400,1],[518,410,1],
    [518,500,1],[527,120,1],[527,140,1],[527,150,1],[527,220,18],[527,230,3],[527,240,1],[527,270,1],[527,300,3],
    [527,380,1],[527,450,1],[527,470,1],[527,480,1],[527,490,2],[527,500,1],[527,510,2],[527,570,1],[527,580,1],
    [527,650,7],[527,830,1],[537,140,1],[537,150,1],[537,160,1],[537,170,1],[537,270,1],[537,410,1],[537,450,1],
    [537,470,2],[537,490,1],[537,630,1],[537,670,2],[537,760,1],[537,880,2],[547,80,2],[547,160,1],[547,180,4],
    [547,260,2],[547,270,1],[547,280,1],[547,380,1],[547,390,1],[547,410,1],[547,420,1],[547,520,1],[547,630,1],
    [547,750,3],[547,770,2],[547,860,4],[556,50,1],[556,70,1],[556,130,2],[556,140,1],[556,160,1],[556,190,1],
    [556,230,5],[556,290,1],[556,300,1],[556,330,1],[556,390,11],[556,450,2],[556,460,13],[556,500,13],[556,520,6],
    [556,530,14],[556,600,3],[556,660,4],[566,140,1],[566,170,1],[566,180,1],[566,230,1],[566,260,1],[566,320,3],
    [566,360,1],[566,490,1],[566,830,3],[575,20,1],[575,140,2],[575,150,2],[575,160,1],[575,180,1],[575,260,11],
    [575,330,1],[575,410,2],[575,450,1],[585,90,1],[585,100,1],[585,140,1],[585,160,1],[585,180,1],[585,190,1],
    [585,200,1],[585,250,1],[585,310,1],[585,330,1],[585,830,1],[595,30,1],[595,70,2],[595,80,1],[595,90,1],
    [595,140,1],[595,160,1],[595,180,1],[595,200,1],[595,250,1],[595,280,1],[595,450,1],[595,530,1],[595,540,1],
    [604,20,1],[604,150,2],[604,180,1],[604,200,1],[604,290,1],[604,410,1],[604,830,1],[614,0,3],[614,20,1],
    [614,40,1],[614,140,1],[614,160,1],[614,180,1],[614,230,1],[614,430,1],[614,510,1],[623,200,1],[623,230,2],
    [623,300,1],[623,330,1],[623,410,1],[623,420,1],[623,520,1],[623,530,2],[623,570,5],[633,60,1],[633,150,1],
    [633,170,1],[633,190,1],[633,260,2],[633,400,1],[633,570,4],[633,830,1],[643,0,1],[643,70,1],[643,150,1],
    [643,330,2],[643,570,10],[643,590,1],[652,0,2],[652,140,1],[652,160,1],[652,180,2],[652,400,1],[652,470,1],
    [652,570,4],[652,830,1],[662,170,1],[662,180,1],[662,290,2],[662,400,1],[662,570,2],[671,0,1],[671,30,1],
    [671,160,1],[671,170,1],[671,310,1],[671,400,1],[671,720,1],[681,0,1],[681,160,1],[681,280,1],[681,320,1],
    [700,80,1],[700,170,1],[700,850,1],[710,240,1],[710,450,1],[719,80,1],[719,140,1],[719,150,1],[719,710,1],
    [729,240,1],[729,840,1],[738,10,1],[738,40,1],[738,450,1],[748,0,1],[758,300,1],[758,660,1],[767,270,2],
    [796,160,1],[806,970,1],[815,280,1],[815,300,1],[815,360,1],[825,790,1],[844,470,1],[901,270,1],[921,220,1],
    [921,340,1],[921,720,1],[930,490,1],[930,500,1],[940,180,2],[940,430,1],[940,510,1],[940,580,1],[949,120,5],
    [949,150,1],[949,180,1],[949,370,1],[949,390,1],[949,570,2],[949,720,1],[949,770,2],[949,780,1],[949,860,1]];

  data1: HeatmapData = [
    {x: 38, y: 20, thickness: 2},
    {x: 38, y: 690, thickness: 3},
    {x: 48, y: 30, thickness: 1},
    {x: 48, y: 40, thickness: 1},
    {x: 48, y: 670, thickness: 1},
    {x: 58, y: 640, thickness: 1},
    {x: 58, y: 680, thickness: 1},
    {x: 67, y: 630, thickness: 1}
  ];

  dataGM = new google.maps.MVCArray<google.maps.LatLng>(
    [
    new google.maps.LatLng(37.782551, -122.445368),
    new google.maps.LatLng(37.782745, -122.444586),
    new google.maps.LatLng(37.782842, -122.443688),
    new google.maps.LatLng(37.782919, -122.442815),
    new google.maps.LatLng(37.782992, -122.442112),
    new google.maps.LatLng(37.783100, -122.441461),
    new google.maps.LatLng(37.783206, -122.440829),
    new google.maps.LatLng(37.783273, -122.440324),
    new google.maps.LatLng(37.783316, -122.440023),
    new google.maps.LatLng(37.783357, -122.439794),
    new google.maps.LatLng(37.783371, -122.439687),
    new google.maps.LatLng(37.783368, -122.439666),
    new google.maps.LatLng(37.783383, -122.439594),
    new google.maps.LatLng(37.783508, -122.439525),
    new google.maps.LatLng(37.783842, -122.439591),
    new google.maps.LatLng(37.784147, -122.439668),
    new google.maps.LatLng(37.784206, -122.439686),
    new google.maps.LatLng(37.784386, -122.439790),
    new google.maps.LatLng(37.784701, -122.439902),
    new google.maps.LatLng(37.784965, -122.439938),
    new google.maps.LatLng(37.785010, -122.439947),
    new google.maps.LatLng(37.785360, -122.439952),
    new google.maps.LatLng(37.785715, -122.440030),
    new google.maps.LatLng(37.786117, -122.440119),
    new google.maps.LatLng(37.786564, -122.440209),
    new google.maps.LatLng(37.786905, -122.440270),
    new google.maps.LatLng(37.786956, -122.440279),
    new google.maps.LatLng(37.800224, -122.433520),
    new google.maps.LatLng(37.800155, -122.434101),
    new google.maps.LatLng(37.800160, -122.434430),
    new google.maps.LatLng(37.800378, -122.434527),
    new google.maps.LatLng(37.800738, -122.434598),
    new google.maps.LatLng(37.800938, -122.434650),
    new google.maps.LatLng(37.801024, -122.434889),
    new google.maps.LatLng(37.800955, -122.435392),
    new google.maps.LatLng(37.800886, -122.435959),
    new google.maps.LatLng(37.800811, -122.436275),
    new google.maps.LatLng(37.800788, -122.436299),
    new google.maps.LatLng(37.800719, -122.436302),
    new google.maps.LatLng(37.800702, -122.436298),
    new google.maps.LatLng(37.800661, -122.436273),
    new google.maps.LatLng(37.800395, -122.436172),
    new google.maps.LatLng(37.800228, -122.436116),
    new google.maps.LatLng(37.800169, -122.436130),
    new google.maps.LatLng(37.800066, -122.436167),
    new google.maps.LatLng(37.784345, -122.422922),
    new google.maps.LatLng(37.784389, -122.422926),
    new google.maps.LatLng(37.784437, -122.422924),
    new google.maps.LatLng(37.784746, -122.422818),
    new google.maps.LatLng(37.785436, -122.422959),
    new google.maps.LatLng(37.786120, -122.423112),
    new google.maps.LatLng(37.786433, -122.423029),
    new google.maps.LatLng(37.786631, -122.421213),
    new google.maps.LatLng(37.786660, -122.421033),
    new google.maps.LatLng(37.786801, -122.420141),
    new google.maps.LatLng(37.786823, -122.420034),
    new google.maps.LatLng(37.786831, -122.419916),
    new google.maps.LatLng(37.787034, -122.418208),
    new google.maps.LatLng(37.787056, -122.418034),
    new google.maps.LatLng(37.787169, -122.417145),
    new google.maps.LatLng(37.787217, -122.416715),
    new google.maps.LatLng(37.786144, -122.416403),
    new google.maps.LatLng(37.785292, -122.416257),
    new google.maps.LatLng(37.780666, -122.390374),
    new google.maps.LatLng(37.780501, -122.391281),
    new google.maps.LatLng(37.780148, -122.392052),
    new google.maps.LatLng(37.780173, -122.391148),
    new google.maps.LatLng(37.780693, -122.390592),
    new google.maps.LatLng(37.781261, -122.391142),
    new google.maps.LatLng(37.781808, -122.391730),
    new google.maps.LatLng(37.782340, -122.392341),
    new google.maps.LatLng(37.782812, -122.393022),
    new google.maps.LatLng(37.783300, -122.393672),
    new google.maps.LatLng(37.783809, -122.394275),
    new google.maps.LatLng(37.784246, -122.394979),
    new google.maps.LatLng(37.784791, -122.395958),
    new google.maps.LatLng(37.785675, -122.396746),
    new google.maps.LatLng(37.786262, -122.395780),
    new google.maps.LatLng(37.786776, -122.395093),
    new google.maps.LatLng(37.787282, -122.394426),
    new google.maps.LatLng(37.787783, -122.393767),
    new google.maps.LatLng(37.788343, -122.393184),
    new google.maps.LatLng(37.788895, -122.392506),
    new google.maps.LatLng(37.789371, -122.391701),
    new google.maps.LatLng(37.789722, -122.390952),
    new google.maps.LatLng(37.790315, -122.390305),
    new google.maps.LatLng(37.790738, -122.389616),
    new google.maps.LatLng(37.779448, -122.438702),
    new google.maps.LatLng(37.779023, -122.438585),
    new google.maps.LatLng(37.778542, -122.438492),
    new google.maps.LatLng(37.778100, -122.438411),
    new google.maps.LatLng(37.777986, -122.438376),
    new google.maps.LatLng(37.777680, -122.438313),
    new google.maps.LatLng(37.777316, -122.438273),
    new google.maps.LatLng(37.777135, -122.438254),
    new google.maps.LatLng(37.776987, -122.438303),
    new google.maps.LatLng(37.776946, -122.438404),
    new google.maps.LatLng(37.776944, -122.438467),
    new google.maps.LatLng(37.776892, -122.438459),
    new google.maps.LatLng(37.776842, -122.438442),
    new google.maps.LatLng(37.776822, -122.438391),
    new google.maps.LatLng(37.776814, -122.438412),
    new google.maps.LatLng(37.776787, -122.438628),
    new google.maps.LatLng(37.776729, -122.438650),
    new google.maps.LatLng(37.776759, -122.438677),
    new google.maps.LatLng(37.776772, -122.438498),
    new google.maps.LatLng(37.776787, -122.438389),
    new google.maps.LatLng(37.776848, -122.438283),
    new google.maps.LatLng(37.776870, -122.438239),
    new google.maps.LatLng(37.777015, -122.438198),
    new google.maps.LatLng(37.777333, -122.438256),
    new google.maps.LatLng(37.777595, -122.438308),
    new google.maps.LatLng(37.777797, -122.438344),
    new google.maps.LatLng(37.778160, -122.438442),
    new google.maps.LatLng(37.778414, -122.438508),
    new google.maps.LatLng(37.778445, -122.438516),
    new google.maps.LatLng(37.778503, -122.438529),
    new google.maps.LatLng(37.778607, -122.438549),
    new google.maps.LatLng(37.778670, -122.438644),
    new google.maps.LatLng(37.778847, -122.438706),
    new google.maps.LatLng(37.779240, -122.438744),
    new google.maps.LatLng(37.779738, -122.438822),
    new google.maps.LatLng(37.780201, -122.438882),
    new google.maps.LatLng(37.780400, -122.438905),
    new google.maps.LatLng(37.780501, -122.438921),
    new google.maps.LatLng(37.780892, -122.438986),
    new google.maps.LatLng(37.781446, -122.439087),
    new google.maps.LatLng(37.781985, -122.439199),
    new google.maps.LatLng(37.782239, -122.439249),
    new google.maps.LatLng(37.782286, -122.439266),
    new google.maps.LatLng(37.797847, -122.429388),
    new google.maps.LatLng(37.797874, -122.429180),
    new google.maps.LatLng(37.797885, -122.429069),
    new google.maps.LatLng(37.797887, -122.429050),
    new google.maps.LatLng(37.797933, -122.428954),
    new google.maps.LatLng(37.798242, -122.428990),
    new google.maps.LatLng(37.798617, -122.429075),
    new google.maps.LatLng(37.798719, -122.429092),
    new google.maps.LatLng(37.798944, -122.429145),
    new google.maps.LatLng(37.799320, -122.429251),
    new google.maps.LatLng(37.799590, -122.429309),
    new google.maps.LatLng(37.799677, -122.429324),
    new google.maps.LatLng(37.799966, -122.429360),
    new google.maps.LatLng(37.800288, -122.429430),
    new google.maps.LatLng(37.800443, -122.429461),
    new google.maps.LatLng(37.800465, -122.429474),
    new google.maps.LatLng(37.800644, -122.429540),
    new google.maps.LatLng(37.800948, -122.429620),
    new google.maps.LatLng(37.801242, -122.429685),
    new google.maps.LatLng(37.801375, -122.429702),
    new google.maps.LatLng(37.801400, -122.429703),
    new google.maps.LatLng(37.801453, -122.429707),
    new google.maps.LatLng(37.801473, -122.429709),
    new google.maps.LatLng(37.801532, -122.429707),
    new google.maps.LatLng(37.801852, -122.429729),
    new google.maps.LatLng(37.802173, -122.429789),
    new google.maps.LatLng(37.802459, -122.429847),
    new google.maps.LatLng(37.802554, -122.429825),
    new google.maps.LatLng(37.802647, -122.429549),
    new google.maps.LatLng(37.802693, -122.429179),
    new google.maps.LatLng(37.802729, -122.428751),
    new google.maps.LatLng(37.766104, -122.409291),
    new google.maps.LatLng(37.766103, -122.409268),
    new google.maps.LatLng(37.766138, -122.409229),
    new google.maps.LatLng(37.766183, -122.409231),
    new google.maps.LatLng(37.766153, -122.409276),
    new google.maps.LatLng(37.766005, -122.409365),
    new google.maps.LatLng(37.765897, -122.409570),
    new google.maps.LatLng(37.765767, -122.409739),
    new google.maps.LatLng(37.765693, -122.410389),
    new google.maps.LatLng(37.765615, -122.411201),
    new google.maps.LatLng(37.765533, -122.412121),
    new google.maps.LatLng(37.765467, -122.412939),
    new google.maps.LatLng(37.765444, -122.414821),
    new google.maps.LatLng(37.765444, -122.414964),
    new google.maps.LatLng(37.765318, -122.415424),
    new google.maps.LatLng(37.763961, -122.415296),
    new google.maps.LatLng(37.763115, -122.415196),
    new google.maps.LatLng(37.762967, -122.415183),
    new google.maps.LatLng(37.762278, -122.415127),
    new google.maps.LatLng(37.761675, -122.415055),
    new google.maps.LatLng(37.760932, -122.414988),
    new google.maps.LatLng(37.759337, -122.414862),
    new google.maps.LatLng(37.773187, -122.421922),
    new google.maps.LatLng(37.773043, -122.422118),
    new google.maps.LatLng(37.773007, -122.422165),
    new google.maps.LatLng(37.772979, -122.422219),
    new google.maps.LatLng(37.772865, -122.422394),
    new google.maps.LatLng(37.772779, -122.422503),
    new google.maps.LatLng(37.772676, -122.422701),
    new google.maps.LatLng(37.772606, -122.422806),
    new google.maps.LatLng(37.772566, -122.422840),
    new google.maps.LatLng(37.772508, -122.422852),
    new google.maps.LatLng(37.772387, -122.423011),
    new google.maps.LatLng(37.772099, -122.423328),
    new google.maps.LatLng(37.771704, -122.423783),
    new google.maps.LatLng(37.771481, -122.424081),
    new google.maps.LatLng(37.771400, -122.424179),
    new google.maps.LatLng(37.771352, -122.424220),
    new google.maps.LatLng(37.771248, -122.424327),
    new google.maps.LatLng(37.770904, -122.424781),
    new google.maps.LatLng(37.770520, -122.425283),
    new google.maps.LatLng(37.770337, -122.425553),
    new google.maps.LatLng(37.770128, -122.425832),
    new google.maps.LatLng(37.769756, -122.426331),
    new google.maps.LatLng(37.769300, -122.426902),
    new google.maps.LatLng(37.769132, -122.427065),
    new google.maps.LatLng(37.769092, -122.427103),
    new google.maps.LatLng(37.768979, -122.427172),
    new google.maps.LatLng(37.768595, -122.427634),
    new google.maps.LatLng(37.768372, -122.427913),
    new google.maps.LatLng(37.768337, -122.427961),
    new google.maps.LatLng(37.768244, -122.428138),
    new google.maps.LatLng(37.767942, -122.428581),
    new google.maps.LatLng(37.767482, -122.429094),
    new google.maps.LatLng(37.767031, -122.429606),
    new google.maps.LatLng(37.766732, -122.429986),
    new google.maps.LatLng(37.766680, -122.430058),
    new google.maps.LatLng(37.766633, -122.430109),
    new google.maps.LatLng(37.766580, -122.430211),
    new google.maps.LatLng(37.766367, -122.430594),
    new google.maps.LatLng(37.765910, -122.431137),
    new google.maps.LatLng(37.765353, -122.431806),
    new google.maps.LatLng(37.764962, -122.432298),
    new google.maps.LatLng(37.764868, -122.432486),
    new google.maps.LatLng(37.764518, -122.432913),
    new google.maps.LatLng(37.763435, -122.434173),
    new google.maps.LatLng(37.762847, -122.434953),
    new google.maps.LatLng(37.762291, -122.435935),
    new google.maps.LatLng(37.762224, -122.436074),
    new google.maps.LatLng(37.761957, -122.436892),
    new google.maps.LatLng(37.761652, -122.438886),
    new google.maps.LatLng(37.761284, -122.439955),
    new google.maps.LatLng(37.761210, -122.440068),
    new google.maps.LatLng(37.761064, -122.440720),
    new google.maps.LatLng(37.761040, -122.441411),
    new google.maps.LatLng(37.761048, -122.442324),
    new google.maps.LatLng(37.760851, -122.443118),
    new google.maps.LatLng(37.759977, -122.444591),
    new google.maps.LatLng(37.759913, -122.444698),
    new google.maps.LatLng(37.759623, -122.445065),
    new google.maps.LatLng(37.758902, -122.445158),
    new google.maps.LatLng(37.758428, -122.444570),
    new google.maps.LatLng(37.757687, -122.443340),
    new google.maps.LatLng(37.757583, -122.443240),
    new google.maps.LatLng(37.757019, -122.442787),
    new google.maps.LatLng(37.756603, -122.442322),
    new google.maps.LatLng(37.756380, -122.441602),
    new google.maps.LatLng(37.755790, -122.441382),
    new google.maps.LatLng(37.754493, -122.442133),
    new google.maps.LatLng(37.754361, -122.442206),
    new google.maps.LatLng(37.753719, -122.442650),
    new google.maps.LatLng(37.753096, -122.442915),
    new google.maps.LatLng(37.751617, -122.443211),
    new google.maps.LatLng(37.751496, -122.443246),
    new google.maps.LatLng(37.750733, -122.443428),
    new google.maps.LatLng(37.750126, -122.443536),
    new google.maps.LatLng(37.750103, -122.443784),
    new google.maps.LatLng(37.750390, -122.444010),
    new google.maps.LatLng(37.750448, -122.444013),
    new google.maps.LatLng(37.750536, -122.444040),
    new google.maps.LatLng(37.750493, -122.444141),
    new google.maps.LatLng(37.790859, -122.402808),
    new google.maps.LatLng(37.790864, -122.402768),
    new google.maps.LatLng(37.790995, -122.402539),
    new google.maps.LatLng(37.791148, -122.402172),
    new google.maps.LatLng(37.791385, -122.401312),
    new google.maps.LatLng(37.791405, -122.400776),
    new google.maps.LatLng(37.791288, -122.400528),
    new google.maps.LatLng(37.791113, -122.400441),
    new google.maps.LatLng(37.791027, -122.400395),
    new google.maps.LatLng(37.791094, -122.400311),
    new google.maps.LatLng(37.791211, -122.400183),
    new google.maps.LatLng(37.791060, -122.399334),
    new google.maps.LatLng(37.790538, -122.398718),
    new google.maps.LatLng(37.790095, -122.398086),
    new google.maps.LatLng(37.789644, -122.397360),
    new google.maps.LatLng(37.789254, -122.396844),
    new google.maps.LatLng(37.788855, -122.396397),
    new google.maps.LatLng(37.788483, -122.395963),
    new google.maps.LatLng(37.788015, -122.395365),
    new google.maps.LatLng(37.787558, -122.394735),
    new google.maps.LatLng(37.787472, -122.394323),
    new google.maps.LatLng(37.787630, -122.394025),
    new google.maps.LatLng(37.787767, -122.393987),
    new google.maps.LatLng(37.787486, -122.394452),
    new google.maps.LatLng(37.786977, -122.395043),
    new google.maps.LatLng(37.786583, -122.395552),
    new google.maps.LatLng(37.786540, -122.395610),
    new google.maps.LatLng(37.786516, -122.395659),
    new google.maps.LatLng(37.786378, -122.395707),
    new google.maps.LatLng(37.786044, -122.395362),
    new google.maps.LatLng(37.785598, -122.394715),
    new google.maps.LatLng(37.785321, -122.394361),
    new google.maps.LatLng(37.785207, -122.394236),
    new google.maps.LatLng(37.785751, -122.394062),
    new google.maps.LatLng(37.785996, -122.393881),
    new google.maps.LatLng(37.786092, -122.393830),
    new google.maps.LatLng(37.785998, -122.393899),
    new google.maps.LatLng(37.785114, -122.394365),
    new google.maps.LatLng(37.785022, -122.394441),
    new google.maps.LatLng(37.784823, -122.394635),
    new google.maps.LatLng(37.784719, -122.394629),
    new google.maps.LatLng(37.785069, -122.394176),
    new google.maps.LatLng(37.785500, -122.393650),
    new google.maps.LatLng(37.785770, -122.393291),
    new google.maps.LatLng(37.785839, -122.393159),
    new google.maps.LatLng(37.782651, -122.400628),
    new google.maps.LatLng(37.782616, -122.400599),
    new google.maps.LatLng(37.782702, -122.400470),
    new google.maps.LatLng(37.782915, -122.400192),
    new google.maps.LatLng(37.783137, -122.399887),
    new google.maps.LatLng(37.783414, -122.399519),
    new google.maps.LatLng(37.783629, -122.399237),
    new google.maps.LatLng(37.783688, -122.399157),
    new google.maps.LatLng(37.783716, -122.399106),
    new google.maps.LatLng(37.783798, -122.399072),
    new google.maps.LatLng(37.783997, -122.399186),
    new google.maps.LatLng(37.784271, -122.399538),
    new google.maps.LatLng(37.784577, -122.399948),
    new google.maps.LatLng(37.784828, -122.400260),
    new google.maps.LatLng(37.784999, -122.400477),
    new google.maps.LatLng(37.785113, -122.400651),
    new google.maps.LatLng(37.785155, -122.400703),
    new google.maps.LatLng(37.785192, -122.400749),
    new google.maps.LatLng(37.785278, -122.400839),
    new google.maps.LatLng(37.785387, -122.400857),
    new google.maps.LatLng(37.785478, -122.400890),
    new google.maps.LatLng(37.785526, -122.401022),
    new google.maps.LatLng(37.785598, -122.401148),
    new google.maps.LatLng(37.785631, -122.401202),
    new google.maps.LatLng(37.785660, -122.401267),
    new google.maps.LatLng(37.803986, -122.426035),
    new google.maps.LatLng(37.804102, -122.425089),
    new google.maps.LatLng(37.804211, -122.424156),
    new google.maps.LatLng(37.803861, -122.423385),
    new google.maps.LatLng(37.803151, -122.423214),
    new google.maps.LatLng(37.802439, -122.423077),
    new google.maps.LatLng(37.801740, -122.422905),
    new google.maps.LatLng(37.801069, -122.422785),
    new google.maps.LatLng(37.800345, -122.422649),
    new google.maps.LatLng(37.799633, -122.422603),
    new google.maps.LatLng(37.799750, -122.421700),
    new google.maps.LatLng(37.799885, -122.420854),
    new google.maps.LatLng(37.799209, -122.420607),
    new google.maps.LatLng(37.795656, -122.400395),
    new google.maps.LatLng(37.795203, -122.400304),
    new google.maps.LatLng(37.778738, -122.415584),
    new google.maps.LatLng(37.778812, -122.415189),
    new google.maps.LatLng(37.778824, -122.415092),
    new google.maps.LatLng(37.778833, -122.414932),
    new google.maps.LatLng(37.778834, -122.414898),
    new google.maps.LatLng(37.778740, -122.414757),
    new google.maps.LatLng(37.778501, -122.414433),
    new google.maps.LatLng(37.778182, -122.414026),
    new google.maps.LatLng(37.777851, -122.413623),
    new google.maps.LatLng(37.777486, -122.413166),
    new google.maps.LatLng(37.777109, -122.412674),
    new google.maps.LatLng(37.776743, -122.412186),
    new google.maps.LatLng(37.776440, -122.411800),
    new google.maps.LatLng(37.776295, -122.411614),
    new google.maps.LatLng(37.776158, -122.411440),
    new google.maps.LatLng(37.775806, -122.410997),
    new google.maps.LatLng(37.775422, -122.410484),
    new google.maps.LatLng(37.775126, -122.410087),
    new google.maps.LatLng(37.775012, -122.409854),
    new google.maps.LatLng(37.775164, -122.409573),
    new google.maps.LatLng(37.775498, -122.409180),
    new google.maps.LatLng(37.775868, -122.408730),
    new google.maps.LatLng(37.776256, -122.408240),
    new google.maps.LatLng(37.776519, -122.407928),
    new google.maps.LatLng(37.776539, -122.407904),
    new google.maps.LatLng(37.776595, -122.407854),
    new google.maps.LatLng(37.776853, -122.407547),
    new google.maps.LatLng(37.777234, -122.407087),
    new google.maps.LatLng(37.777644, -122.406558),
    new google.maps.LatLng(37.778066, -122.406017),
    new google.maps.LatLng(37.778468, -122.405499),
    new google.maps.LatLng(37.778866, -122.404995),
    new google.maps.LatLng(37.779295, -122.404455),
    new google.maps.LatLng(37.779695, -122.403950),
    new google.maps.LatLng(37.779982, -122.403584),
    new google.maps.LatLng(37.780295, -122.403223),
    new google.maps.LatLng(37.780664, -122.402766),
    new google.maps.LatLng(37.781043, -122.402288),
    new google.maps.LatLng(37.781399, -122.401823),
    new google.maps.LatLng(37.781727, -122.401407),
    new google.maps.LatLng(37.781853, -122.401247),
    new google.maps.LatLng(37.781894, -122.401195),
    new google.maps.LatLng(37.782076, -122.400977),
    new google.maps.LatLng(37.782338, -122.400603),
    new google.maps.LatLng(37.782666, -122.400133),
    new google.maps.LatLng(37.783048, -122.399634),
    new google.maps.LatLng(37.783450, -122.399198),
    new google.maps.LatLng(37.783791, -122.398998),
    new google.maps.LatLng(37.784177, -122.398959),
    new google.maps.LatLng(37.784388, -122.398971),
    new google.maps.LatLng(37.784404, -122.399128),
    new google.maps.LatLng(37.784586, -122.399524),
    new google.maps.LatLng(37.784835, -122.399927),
    new google.maps.LatLng(37.785116, -122.400307),
    new google.maps.LatLng(37.785282, -122.400539),
    new google.maps.LatLng(37.785346, -122.400692),
    new google.maps.LatLng(37.765769, -122.407201),
    new google.maps.LatLng(37.765790, -122.407414),
    new google.maps.LatLng(37.765802, -122.407755),
    new google.maps.LatLng(37.765791, -122.408219),
    new google.maps.LatLng(37.765763, -122.408759),
    new google.maps.LatLng(37.765726, -122.409348),
    new google.maps.LatLng(37.765716, -122.409882),
    new google.maps.LatLng(37.765708, -122.410202),
    new google.maps.LatLng(37.765705, -122.410253),
    new google.maps.LatLng(37.765707, -122.410369),
    new google.maps.LatLng(37.765692, -122.410720),
    new google.maps.LatLng(37.765699, -122.411215),
    new google.maps.LatLng(37.765687, -122.411789),
    new google.maps.LatLng(37.765666, -122.412373),
    new google.maps.LatLng(37.765598, -122.412883),
    new google.maps.LatLng(37.765543, -122.413039),
    new google.maps.LatLng(37.765532, -122.413125),
    new google.maps.LatLng(37.765500, -122.413553),
    new google.maps.LatLng(37.765448, -122.414053),
    new google.maps.LatLng(37.765388, -122.414645),
    new google.maps.LatLng(37.765323, -122.415250),
    new google.maps.LatLng(37.765303, -122.415847),
    new google.maps.LatLng(37.765251, -122.416439),
    new google.maps.LatLng(37.765204, -122.417020),
    new google.maps.LatLng(37.765172, -122.417556),
    new google.maps.LatLng(37.765164, -122.418075),
    new google.maps.LatLng(37.765153, -122.418618),
    new google.maps.LatLng(37.765136, -122.419112),
    new google.maps.LatLng(37.765129, -122.419378),
    new google.maps.LatLng(37.765119, -122.419481),
    new google.maps.LatLng(37.765100, -122.419852),
    new google.maps.LatLng(37.765083, -122.420349),
    new google.maps.LatLng(37.765045, -122.420930),
    new google.maps.LatLng(37.764992, -122.421481),
    new google.maps.LatLng(37.764980, -122.421695),
    new google.maps.LatLng(37.764993, -122.421843),
    new google.maps.LatLng(37.764986, -122.422255),
    new google.maps.LatLng(37.764975, -122.422823),
    new google.maps.LatLng(37.764939, -122.423411),
    new google.maps.LatLng(37.764902, -122.424014),
    new google.maps.LatLng(37.764853, -122.424576),
    new google.maps.LatLng(37.764826, -122.424922),
    new google.maps.LatLng(37.764796, -122.425375),
    new google.maps.LatLng(37.764782, -122.425869),
    new google.maps.LatLng(37.764768, -122.426089),
    new google.maps.LatLng(37.764766, -122.426117),
    new google.maps.LatLng(37.764723, -122.426276),
    new google.maps.LatLng(37.764681, -122.426649),
    new google.maps.LatLng(37.782012, -122.404200),
    new google.maps.LatLng(37.781574, -122.404911),
    new google.maps.LatLng(37.781055, -122.405597),
    new google.maps.LatLng(37.780479, -122.406341),
    new google.maps.LatLng(37.779996, -122.406939),
    new google.maps.LatLng(37.779459, -122.407613),
    new google.maps.LatLng(37.778953, -122.408228),
    new google.maps.LatLng(37.778409, -122.408839),
    new google.maps.LatLng(37.777842, -122.409501),
    new google.maps.LatLng(37.777334, -122.410181),
    new google.maps.LatLng(37.776809, -122.410836),
    new google.maps.LatLng(37.776240, -122.411514),
    new google.maps.LatLng(37.775725, -122.412145),
    new google.maps.LatLng(37.775190, -122.412805),
    new google.maps.LatLng(37.774672, -122.413464),
    new google.maps.LatLng(37.774084, -122.414186),
    new google.maps.LatLng(37.773533, -122.413636),
    new google.maps.LatLng(37.773021, -122.413009),
    new google.maps.LatLng(37.772501, -122.412371),
    new google.maps.LatLng(37.771964, -122.411681),
    new google.maps.LatLng(37.771479, -122.411078),
    new google.maps.LatLng(37.770992, -122.410477),
    new google.maps.LatLng(37.770467, -122.409801),
    new google.maps.LatLng(37.770090, -122.408904),
    new google.maps.LatLng(37.769657, -122.408103),
    new google.maps.LatLng(37.769132, -122.407276),
    new google.maps.LatLng(37.768564, -122.406469),
    new google.maps.LatLng(37.767980, -122.405745),
    new google.maps.LatLng(37.767380, -122.405299),
    new google.maps.LatLng(37.766604, -122.405297),
    new google.maps.LatLng(37.765838, -122.405200),
    new google.maps.LatLng(37.765139, -122.405139),
    new google.maps.LatLng(37.764457, -122.405094),
    new google.maps.LatLng(37.763716, -122.405142),
    new google.maps.LatLng(37.762932, -122.405398),
    new google.maps.LatLng(37.762126, -122.405813),
    new google.maps.LatLng(37.761344, -122.406215),
    new google.maps.LatLng(37.760556, -122.406495),
    new google.maps.LatLng(37.759732, -122.406484),
    new google.maps.LatLng(37.758910, -122.406228),
    new google.maps.LatLng(37.758182, -122.405695),
    new google.maps.LatLng(37.757676, -122.405118),
    new google.maps.LatLng(37.757039, -122.404346),
    new google.maps.LatLng(37.756335, -122.403719),
    new google.maps.LatLng(37.755503, -122.403406),
    new google.maps.LatLng(37.754665, -122.403242),
    new google.maps.LatLng(37.753837, -122.403172),
    new google.maps.LatLng(37.752986, -122.403112),
    new google.maps.LatLng(37.751266, -122.403355)
  ]
  );

  data2GM = new google.maps.MVCArray<google.maps.visualization.WeightedLocation>( [
    {location: new google.maps.LatLng(37.782, -122.447), weight: 0.5},
    {location: new google.maps.LatLng(37.782, -122.443), weight: 2},
    {location: new google.maps.LatLng(37.782, -122.441), weight: 3},
    {location: new google.maps.LatLng(37.782, -122.439), weight: 2},
    {location: new google.maps.LatLng(37.782, -122.435), weight: 0.5},
    {location: new google.maps.LatLng(37.785, -122.447), weight: 3},
    {location: new google.maps.LatLng(37.785, -122.445), weight: 2},
    {location: new google.maps.LatLng(37.785, -122.441), weight: 0.5},
    {location: new google.maps.LatLng(37.785, -122.437), weight: 2},
    {location: new google.maps.LatLng(37.785, -122.435), weight: 3}
  ]
  );

  /* Data points defined as a mixture of WeightedLocation and LatLng objects */
  data3GM = new google.maps.MVCArray<google.maps.LatLng | google.maps.visualization.WeightedLocation>(
    [
      {location: new google.maps.LatLng(37.782, -122.447), weight: 0.5},
      new google.maps.LatLng(37.782, -122.445),
      {location: new google.maps.LatLng(37.782, -122.443), weight: 2},
      {location: new google.maps.LatLng(37.782, -122.441), weight: 3},
      {location: new google.maps.LatLng(37.782, -122.439), weight: 2},
      new google.maps.LatLng(37.782, -122.437),
      {location: new google.maps.LatLng(37.782, -122.435), weight: 0.5},
      {location: new google.maps.LatLng(37.785, -122.447), weight: 3},
      {location: new google.maps.LatLng(37.785, -122.445), weight: 2},
      new google.maps.LatLng(37.785, -122.443),
      {location: new google.maps.LatLng(37.785, -122.441), weight: 0.5},
      new google.maps.LatLng(37.785, -122.439),
      {location: new google.maps.LatLng(37.785, -122.437), weight: 2},
      {location: new google.maps.LatLng(37.785, -122.435), weight: 3}
    ]
  );

  dataLM = [
  [-37.8839, 175.3745188667, '571'],
  [-37.8869090667, 175.3657417333, '486'],
  [-37.8894207167, 175.4015351167, '807'],
  [-37.8927369333, 175.4087452333, '899'],
  [-37.90585105, 175.4453463833, '1273'],
  [-37.9064188833, 175.4441556833, '1258'],
  [-37.90584715, 175.4463564333, '1279'],
  [-37.9033391333, 175.4244005667, '1078'],
  [-37.9061991333, 175.4492620333, '1309'],
  [-37.9058955167, 175.4445613167, '1261'],
  [-37.88888045, 175.39146475, '734'],
  [-37.8950811333, 175.41079175, '928'],
  [-37.88909235, 175.3922956333, '740'],
  [-37.8889259667, 175.3938591667, '759'],
  [-37.8876576333, 175.3859563833, '687'],
  [-37.89027155, 175.3973178833, '778'],
  [-37.8864473667, 175.3806136833, '631'],
  [-37.9000262833, 175.4183242167, '1012'],
  [-37.90036495, 175.4189457, '1024'],
  [-37.9000976833, 175.4197312167, '1027'],
  [-37.90239975, 175.42371165, '1067'],
  [-37.9043379667, 175.42430325, '1080'],
  [-37.9026441, 175.4231055167, '1068'],
  [-37.8883536333, 175.3888573833, '718'],
  [-37.9029948833, 175.4237386167, '1070'],
  [-37.89824135, 175.4150421667, '982'],
  [-37.8976067833, 175.41510265, '983'],
  [-37.9023491333, 175.4225495, '1066'],
  [-37.8856157167, 175.3775632833, '608'],
  [-37.8963032667, 175.4132068, '951'],
  [-37.8922813667, 175.4073402333, '1/898'],
  [-37.88933345, 175.3956084333, '769'],
  [-37.8936148833, 175.4090577, '906'],
  [-37.8939398, 175.4094444833, '914'],
  [-37.8857355333, 175.3722297667, '542'],
  [-37.8931092167, 175.4083014, '898'],
  [-37.9008253167, 175.4198128, '1030'],
  [-37.9045052333, 175.4260735, '1100'],
  [-37.9053927167, 175.42822265, '1130'],
  [-37.90507935, 175.4313065, '1147'],
  [-37.9055749667, 175.4319092167, '1154'],
  [-37.9039034833, 175.4274736667, '1/1105'],
  [-37.9037633, 175.4261181833, '1093'],
  [-37.9038755, 175.42871045, '3/1105'],
  [-37.90369555, 175.4285285, '2/1105'],
  [-37.9056626, 175.4341078833, '1170'],
  [-37.9018736833, 175.438852, '1/1213'],
  [-37.9057596167, 175.4356650167, '1180'],
  [-37.9053502, 175.4361049333, '1185'],
  [-37.9053379167, 175.4366986167, '1195'],
  [-37.9058892333, 175.4381450333, '1204'],
  [-37.9060264167, 175.4400763167, '1220'],
  [-37.9056766833, 175.4412592, '1233'],
  [-37.9057312167, 175.4418380333, '1235'],
  [-37.9061575833, 175.4421068667, '1242'],
  [-37.9063946167, 175.4438004667, '1256'],
  [-37.8996027667, 175.43995055, '4/1215'],
  [-37.9006449667, 175.4395556833, '3/1215'],
  [-37.9009138167, 175.4394061333, '2/1215'],
  [-37.9034547, 175.4396315, '1219'],
  [-37.9055243, 175.4396033, '1221'],
  [-37.89952325, 175.4406619167, '5/1215'],
  [-37.90561525, 175.4404853167, '1225'],
  [-37.9045602333, 175.4477690333, '1285'],
  [-37.9040051667, 175.4388491833, '1213'],
  [-37.90588145, 175.4440349167, '1257'],
  [-37.90595915, 175.4389286833, '1212'],
  [-37.9059939667, 175.4398068833, '1218'],
  [-37.8868631833, 175.37991055, '630'],
  [-37.8878744833, 175.382179, '650'],
  [-37.8880764, 175.3839845667, '670'],
  [-37.8850457333, 175.3759821, '594'],
  [-37.88446045, 175.3762872667, '587'],
  [-37.8880782667, 175.38423415, '1/670'],
  [-37.8863533833, 175.3690698667, '515'],
  [-37.8861783167, 175.3710009833, '530'],
  [-37.885424, 175.3716677833, '541'],
  [-37.88524065, 175.3722141167, '547'],
  [-37.9022371333, 175.47991035, '10'],
  [-37.9020014833, 175.4799581667, '1'],
  [-37.9020824, 175.4802630167, '2'],
  [-37.9018589833, 175.4804760833, '3'],
  [-37.9018211333, 175.4806769667, '4'],
  [-37.9021543667, 175.4805538833, '5'],
  [-37.9022658, 175.4807579333, '6'],
  [-37.9024517833, 175.4806480667, '7'],
  [-37.9024251167, 175.48041985, '8'],
  [-37.9023317833, 175.4802119667, '9'],
  [-37.9321212167, 175.4555088, '39'],
  [-37.8956185167, 175.4719458667, '4'],
  [-37.8954566, 175.4728120333, '20'],
  [-37.8957231833, 175.4727906, '22A'],
  [-37.8956085833, 175.4726702, '22'],
  [-37.8956460167, 175.4718485167, '2'],
  [-37.8953487167, 175.47202915, '5'],
  [-37.8800121167, 175.4865467167, '9'],
  [-37.8803487833, 175.48595255, '3'],
  [-37.8802064167, 175.4861004, '5'],
  [-37.8800705167, 175.4862671167, '7'],
  [-37.8798887333, 175.4863712333, '7A'],
  [-37.8801676667, 175.4866722667, '10'],
  [-37.88029245, 175.4868499667, '8'],
  [-37.8803302167, 175.4865822167, '6'],
  [-37.88038715, 175.4864004167, '4'],
  [-37.8805029333, 175.4862314167, '2'],
  [-37.9127148667, 175.4710607833, '51'],
  [-37.9118609667, 175.4668648, '20'],
  [-37.9122010667, 175.47078695, '49A'],
  [-37.91191245, 175.4682913833, '29'],
  [-37.9112774333, 175.4668027333, '17A'],
  [-37.91244995, 175.4700709833, '41'],
  [-37.9149636, 175.4772568333, '98'],
  [-37.9128421833, 175.4702103167, '42'],
  [-37.91130515, 175.4650217667, '2'],
  [-37.9140405333, 175.4754503833, '85'],
  [-37.91155815, 175.4670938833, '21'],
  [-37.9144416167, 175.4754564, '86'],
  [-37.91149715, 175.4668828667, '19'],
  [-37.9155068167, 175.4784839167, '116'],
  [-37.9135311667, 175.4736794833, '69'],
  [-37.9146717667, 175.4773664833, '103'],
  [-37.9135175667, 175.4724437333, '62'],
  [-37.9117463, 175.4676612167, '23'],
  [-37.9136108833, 175.47263915, '64'],
  [-37.9118005167, 175.46788515, '25'],
  [-37.9142630167, 175.4748833333, '80'],
  [-37.9118481833, 175.4680930167, '27'],
  [-37.91519165, 175.47727755, '100'],
  [-37.9121701, 175.4679073167, '28'],
  [-37.9152358167, 175.4780924833, '112'],
  [-37.9122425667, 175.4681859167, '30'],
  [-37.9150027167, 175.47843285, '107'],
  [-37.91196865, 175.4684916833, '31'],
  [-37.9132330333, 175.4726685333, '61'],
  [-37.9123722, 175.4685087667, '32'],
  [-37.9151754667, 175.4790262, '113'],
  [-37.9120319833, 175.46868985, '33'],
  [-37.9151328167, 175.4788729, '111'],
  [-37.9124617167, 175.4687799833, '34'],
  [-37.9150617167, 175.4786454167, '109'],
  [-37.9120926, 175.4688931667, '35'],
  [-37.9132881333, 175.47285965, '63'],
  [-37.9119984333, 175.4691844, '37A'],
  [-37.9120311, 175.4673706667, '24'],
  [-37.91214925, 175.46909885, '37'],
  [-37.91408025, 175.4759690833, '91B'],
  [-37.9125366, 175.4691343, '38'],
  [-37.9134794833, 175.4739836167, '71A'],
  [-37.9122081167, 175.4674649333, '26A'],
  [-37.9140814333, 175.4736708667, '72A'],
  [-37.9120801, 175.4675947333, '26'],
  [-37.9113324167, 175.46512405, '4'],
  [-37.91185795, 175.4686138167, '31A'],
  [-37.9144403167, 175.4767387667, '101'],
  [-37.9125054167, 175.46896025, '36A'],
  [-37.9151334833, 175.4778022667, '106'],
  [-37.9126167833, 175.4688409667, '36B'],
  [-37.9111576, 175.4663765167, '13A'],
  [-37.9112960833, 175.4662379, '13'],
  [-37.9116252167, 175.46602135, '14'],
  [-37.9113666167, 175.4664507833, '15'],
  [-37.9117068333, 175.466336, '16'],
  [-37.9114338333, 175.4666576, '17'],
  [-37.9119338667, 175.4665694167, '18A'],
  [-37.9117808333, 175.4665752, '18'],
  [-37.9110205, 175.4652438667, '3'],
  [-37.9110742833, 175.4654501167, '5'],
  [-37.9111370833, 175.4656566833, '7'],
  [-37.9111865833, 175.4658542667, '9'],
  [-37.9112390333, 175.46602075, '11'],
  [-37.9118135167, 175.46543705, '6A'],
  [-37.9118572167, 175.46556135, '6B'],
  [-37.91145615, 175.4655286, '6'],
  [-37.9115389167, 175.4657957167, '8'],
  [-37.9127748333, 175.4699760667, '40'],
  [-37.9125127167, 175.4703133, '43'],
  [-37.9129274, 175.4704172833, '44'],
  [-37.9125759833, 175.4705303667, '45'],
  [-37.9129758667, 175.4706118, '46'],
  [-37.9126359667, 175.4707644, '47'],
  [-37.91226225, 175.47106665, '49'],
  [-37.9130937833, 175.4709588833, '50'],
  [-37.9131644667, 175.4711523, '52'],
  [-37.9132299667, 175.4713462167, '60'],
  [-37.9127690833, 175.4712279667, '53'],
  [-37.9133607167, 175.4730695833, '65'],
  [-37.91367805, 175.4728816667, '66'],
  [-37.9134211, 175.4732760667, '67'],
  [-37.9137477833, 175.4731176, '68'],
  [-37.9138932333, 175.4736511667, '70'],
  [-37.9135950667, 175.4738879833, '71'],
  [-37.9139430167, 175.4737982333, '72'],
  [-37.9136486, 175.4740868667, '73'],
  [-37.91400415, 175.4740125833, '74'],
  [-37.9140350333, 175.4741693833, '76'],
  [-37.91432385, 175.475081, '82'],
  [-37.9139975333, 175.47523055, '83'],
  [-37.9143889667, 175.47526065, '84'],
  [-37.9137640333, 175.47575135, '87'],
  [-37.91449875, 175.4756521167, '88'],
  [-37.9141123, 175.4756848833, '89'],
  [-37.9145492167, 175.4758458667, '90'],
  [-37.9141779667, 175.4758650667, '91'],
  [-37.9146104833, 175.4760345, '92'],
  [-37.9142320333, 175.4760478833, '93'],
  [-37.9146642167, 175.47621125, '94'],
  [-37.9142896667, 175.4762277667, '95'],
  [-37.9147136833, 175.4764402833, '96'],
  [-37.9143434167, 175.47639805, '97'],
  [-37.9143937167, 175.4765685, '99'],
  [-37.91501315, 175.4774403667, '102'],
  [-37.9154860667, 175.4774428167, '104'],
  [-37.9149432667, 175.4782801, '105'],
  [-37.9152651667, 175.47833035, '114'],
  [-37.9299333167, 175.55909085, '128'],
  [-37.9286782833, 175.5545978, '181'],
  [-37.9300747333, 175.5497311333, '3/193'],
  [-37.9276611167, 175.5543011333, '192'],
  [-37.9305557833, 175.5594630333, '129'],
  [-37.9280362, 175.5517895, '2/193'],
  [-37.9284764, 175.5616764333, '103'],
  [-37.93143935, 175.55390345, '165'],
  [-37.9288132, 175.5647016167, '61'],
  [-37.9275235, 175.5619954833, '94'],
  [-37.93081245, 175.5577222333, '149'],
  [-37.9300416667, 175.5566331333, '161'],
  [-37.92921255, 175.5684947, '16'],
  [-37.9304111667, 175.5673126333, '35'],
  [-37.9291729667, 175.5653647333, '55'],
  [-37.9289266333, 175.5656691333, '56'],
  [-37.92751825, 175.5531413167, '1/193'],
  [-37.9323321667, 175.5512635167, '1/165'],
  [-37.9045377667, 175.4827770167, '3'],
  [-37.9051343333, 175.4829339167, '10'],
  [-37.9045625, 175.4832139167, '4'],
  [-37.9052854167, 175.4828661667, '12'],
  [-37.9045012833, 175.4825234, '3A'],
  [-37.9054383, 175.4831963, '14'],
  [-37.9048575167, 175.4826078167, '7'],
  [-37.9050790667, 175.4825558167, '9A'],
  [-37.90496205, 175.4830191667, '8'],
  [-37.9050431833, 175.4823803833, '9B'],
  [-37.9047063167, 175.4826914667, '5'],
  [-37.9051649333, 175.4825182667, '11'],
  [-37.9047697333, 175.4831092667, '6'],
  [-37.9044120833, 175.4828407333, '1'],
  [-37.8987653333, 175.4845873667, '12'],
  [-37.89849935, 175.4843253333, '8'],
  [-37.8989808833, 175.4835699333, '13'],
  [-37.8982670333, 175.4839818167, '5'],
  [-37.89792805, 175.4841291833, '1'],
  [-37.8990696333, 175.48395625, '18'],
  [-37.8983429167, 175.4837488833, '7A'],
  [-37.8986908667, 175.4846387167, '10'],
  [-37.8985086333, 175.48330895, '9A'],
  [-37.8980756833, 175.4840675333, '3'],
  [-37.8984572667, 175.4838707, '7'],
  [-37.8988333833, 175.48411825, '16'],
  [-37.89797735, 175.4845139167, '2'],
  [-37.8988639833, 175.4832473, '9B'],
  [-37.8985740667, 175.4844548333, '8A'],
  [-37.8983953667, 175.4832022167, '9'],
  [-37.898132, 175.48448765, '4'],
  [-37.8983169333, 175.48441905, '6'],
  [-37.898835, 175.4848386, '12A'],
  [-37.8982524667, 175.4837739667, '5A'],
  [-37.7992683667, 175.4068494, '44D'],
  [-37.7973138333, 175.40680895, '37'],
  [-37.79798795, 175.4063265667, '41'],
  [-37.7983426667, 175.4060350833, '38'],
  [-37.7981863, 175.40728095, '45'],
  [-37.7985252667, 175.4070533167, '46'],
  [-37.7991710833, 175.4079073667, '44A'],
  [-37.7994488333, 175.4084595333, '44B'],
  [-37.7998703833, 175.4089765833, '44C'],
  [-37.7969343667, 175.4040572333, '15'],
  [-37.7991115833, 175.406026, '44E'],
  [-37.9108972667, 175.4737860333, '1'],
  [-37.9109227833, 175.4740157167, '3'],
  [-37.9110122167, 175.47419315, '5'],
  [-37.91133475, 175.4740478833, '6'],
  [-37.91125305, 175.4738936667, '4'],
  [-37.9111422333, 175.4736767667, '2'],
  [-37.9110952167, 175.47448295, '7'],
  [-37.9112131667, 175.4741245667, '8'],
  [-37.8804519333, 175.4809153167, '16A'],
  [-37.8808188333, 175.4804471833, '8'],
  [-37.8805619667, 175.4804252833, '10'],
  [-37.8810451833, 175.4809865167, '11'],
  [-37.8806955167, 175.4806394, '12'],
  [-37.8808969, 175.48108405, '13'],
  [-37.8806416, 175.4807763833, '14'],
  [-37.8807567, 175.48110125, '15'],
  [-37.8806444167, 175.4809707333, '16'],
  [-37.8805414833, 175.4812062167, '17'],
  [-37.8812994167, 175.4798864833, '1'],
  [-37.8810411333, 175.4798769333, '2'],
  [-37.8812669, 175.4801150167, '3'],
  [-37.8810092333, 175.4800721333, '4'],
  [-37.8811867333, 175.48041535, '5'],
  [-37.8809235, 175.4802776833, '6'],
  [-37.8811437833, 175.4806999667, '7'],
  [-37.8811760167, 175.4808741333, '9'],
  [-37.8778504833, 175.5246844167, '102'],
  [-37.8819230667, 175.52038225, '37'],
  [-37.8838481333, 175.5190955, '15'],
  [-37.8825636667, 175.5211268, '42'],
  [-37.8789988, 175.5217598167, '79'],
  [-37.8729074667, 175.5286693667, '167'],
  [-37.8760724333, 175.52502585, '127'],
  [-37.8745184833, 175.5278637167, '148'],
  [-37.8744641, 175.5268869667, '145'],
  [-37.8971449, 175.3967563, '82'],
  [-37.8943781833, 175.3977300667, '44'],
  [-37.9004613, 175.47640765, '13'],
  [-37.9004093667, 175.4762205333, '11'],
  [-37.9002790833, 175.4769703167, '16'],
  [-37.9003597167, 175.4772565, '20'],
  [-37.90090275, 175.4763007167, '15'],
  [-37.90094715, 175.4764403167, '17'],
  [-37.9006751333, 175.4771785333, '27'],
  [-37.90107225, 175.4768541333, '25'],
  [-37.9001119667, 175.4749271333, '1'],
  [-37.9006160667, 175.4769211667, '23'],
  [-37.9002628, 175.4757354, '3'],
  [-37.9005473333, 175.4767056, '19'],
  [-37.9002167333, 175.4750815167, '2'],
  [-37.8998862167, 175.4772123833, '18'],
  [-37.9003037333, 175.47596475, '9'],
  [-37.9000952167, 175.4752010833, '2A'],
  [-37.9006044167, 175.475943, '9A'],
  [-37.9085414, 175.47102025, '1'],
  [-37.90831215, 175.4705452333, '4'],
  [-37.9085338333, 175.4706769667, '2'],
  [-37.90815565, 175.470603, '5'],
  [-37.9082244667, 175.4708460167, '6'],
  [-37.9083062, 175.4711227667, '7'],
  [-37.9084509833, 175.47045035, '3'],
  [-37.8911392333, 175.4583220667, '8'],
  [-37.891127, 175.4585561667, '10'],
  [-37.8912095833, 175.4581187333, '7'],
  [-37.8910674833, 175.4575599333, '2'],
  [-37.8913220333, 175.4574411833, '1'],
  [-37.89159775, 175.4573200333, '1A'],
  [-37.8910451833, 175.4580652333, '6'],
  [-37.8913072667, 175.4576702667, '3'],
  [-37.8913322, 175.4579054333, '5'],
  [-37.8910210167, 175.45784865, '4'],
  [-37.8853014, 175.4629564833, '3'],
  [-37.88554135, 175.4629736, '2'],
  [-37.88541785, 175.46296925, '1'],
  [-37.9193531833, 175.54385725, '354'],
  [-37.9188882667, 175.5420886333, '355'],
  [-37.9192738333, 175.5435102833, '356'],
  [-37.9192985333, 175.5429392833, '358'],
  [-37.9193181167, 175.54233135, '360'],
  [-37.9192005, 175.5403558833, '130'],
  [-37.9186817333, 175.5404104667, '109'],
  [-37.9199342167, 175.5412764833, '260'],
  [-37.9193768333, 175.5412782167, '223'],
  [-37.91831485, 175.5400403333, '103'],
  [-37.91961875, 175.5408546833, '200'],
  [-37.9176805, 175.5413459167, '105'],
  [-37.9190955, 175.5408870167, '171'],
  [-37.9182861833, 175.5408937167, '107'],
  [-37.9195153, 175.5433797, '352'],
  [-37.92030865, 175.54192075, '264'],
  [-37.920463, 175.5417725, '262'],
  [-37.9197269667, 175.5432480167, '350'],
  [-37.9197592167, 175.5415707667, '266'],
  [-37.9195913167, 175.54231935, '348'],
  [-37.9183186167, 175.5393124667, '2'],
  [-37.9187989667, 175.53988695, '70'],
  [-37.9185694, 175.5418133, '353'],
  [-37.8994012, 175.3657659333, '821'],
  [-37.89971895, 175.3645648833, '835'],
  [-37.9139332167, 175.4090271667, '332'],
  [-37.8988464667, 175.3659825667, '828'],
  [-37.9022981, 175.38067085, '685'],
  [-37.9065350333, 175.4018221167, '434'],
  [-37.90028885, 175.3798328667, '697'],
  [-37.9084945333, 175.4050759167, '410'],
  [-37.89922135, 175.3740981833, '747'],
  [-37.9232422167, 175.4145657333, '185'],
  [-37.9245097667, 175.41242555, '187'],
  [-37.9159503333, 175.40778185, '303'],
  [-37.9094665, 175.4069157667, '388'],
  [-37.9231998333, 175.4170489, '158'],
  [-37.9102601, 175.4072221667, '383'],
  [-37.9207001, 175.4065603167, '257'],
  [-37.9102264, 175.4082195, '372'],
  [-37.9217580667, 175.4087488, '233'],
  [-37.9021599833, 175.3911428167, '598'],
  [-37.9229502667, 175.4127942667, '197'],
  [-37.90296435, 175.3924815167, '583'],
  [-37.9255960833, 175.4136194333, '2/187'],
  [-37.9245176, 175.4278129833, '59'],
  [-37.9249067167, 175.4263146667, '75'],
  [-37.92534045, 175.4130770333, '1/187'],
  [-37.9077678, 175.4038107833, '424'],
  [-37.9244162333, 175.4258990667, '76'],
  [-37.9237273333, 175.4194401833, '138'],
  [-37.9019339833, 175.3879181167, '625'],
  [-37.90920365, 175.4053418167, '397'],
  [-37.9057407667, 175.39478875, '540'],
  [-37.9243174333, 175.4220341833, '112'],
  [-37.8992012333, 175.3666729333, '815'],
  [-37.9110874833, 175.4102195833, '360'],
  [-37.9027096, 175.3913196333, '591'],
  [-37.9011183833, 175.38410915, '655'],
  [-37.9234701333, 175.4155696333, '181'],
  [-37.90254175, 175.3926162167, '582'],
  [-37.92450575, 175.4246711167, '90'],
  [-37.9242924167, 175.4289432833, '47'],
  [-37.8986079833, 175.3685293333, '801'],
  [-37.9030857, 175.3932839, '577'],
  [-37.90235535, 175.3894401667, '613'],
  [-37.9008578833, 175.3826145667, '675'],
  [-37.90071405, 175.3818195, '681'],
  [-37.8820639667, 175.4856738333, '4'],
  [-37.8811382833, 175.4847224333, '17'],
  [-37.8820705, 175.4859065167, '2'],
  [-37.8822594167, 175.4854946333, '5'],
  [-37.88230695, 175.4860176667, '1'],
  [-37.8816572833, 175.4846057667, '14'],
  [-37.8822931167, 175.4857413833, '3'],
  [-37.8820614833, 175.4849636833, '10'],
  [-37.8814784167, 175.4853259333, '20'],
  [-37.8820341167, 175.4854254, '6'],
  [-37.8814562667, 175.4855579, '22'],
  [-37.8820407667, 175.4852060167, '8'],
  [-37.88139725, 175.4857370167, '24'],
  [-37.8819474, 175.4846312, '12'],
  [-37.8812179833, 175.4855291833, '23'],
  [-37.8811665833, 175.4849644, '19'],
  [-37.8822871333, 175.4850344167, '9'],
  [-37.8822664667, 175.4852611, '7'],
  [-37.8813914667, 175.4847524, '16'],
  [-37.8812347667, 175.4852638167, '21'],
  [-37.8814556, 175.48509055, '18'],
  [-37.8811484833, 175.4844946, '15'],
  [-37.8823244833, 175.4848154333, '11'],
  [-37.8823452833, 175.4845833667, '13'],
  [-37.9599893167, 175.5018972167, '82'],
  [-37.9618358833, 175.4874459667, '18'],
  [-37.9618619, 175.50776785, '90'],
  [-37.9616283333, 175.4929460167, '64'],
  [-37.9611726167, 175.4984393667, '80'],
  [-37.9607851, 175.5016190333, '86'],
  [-37.9608416167, 175.4971466, '78'],
  [-37.9614436333, 175.5080607667, '92'],
  [-37.9643050333, 175.4953529167, '2/84'],
  [-37.9610803, 175.4864609, '7'],
  [-37.9606146667, 175.4939399, '83'],
  [-37.9609926167, 175.4857235333, '3'],
  [-37.96113465, 175.4948554, '84'],
  [-37.9613254333, 175.5047791833, '88'],
  [-37.8593059833, 175.5330650333, '10'],
  [-37.8596072333, 175.533587, '19'],
  [-37.90423375, 175.4844148, '107B'],
  [-37.9020309333, 175.4769959167, '49A'],
  [-37.9029281167, 175.4805014167, '81A'],
  [-37.9016197667, 175.4756437833, '37'],
  [-37.90101005, 175.4735379833, '21'],
  [-37.9016823667, 175.4760847833, '39A'],
  [-37.90178185, 175.4761837333, '41'],
  [-37.9011922667, 175.4725514167, '8'],
  [-37.9015593833, 175.4738315333, '26'],
  [-37.9015446833, 175.473388, '18A'],
  [-37.9024291, 175.4783928, '57'],
  [-37.9010319, 175.4736316167, '23'],
  [-37.9039576333, 175.4835641667, '103'],
  [-37.9011953333, 175.4741573333, '29A'],
  [-37.9042121, 175.4828802833, '100'],
  [-37.9010152, 175.4741578667, '29B'],
  [-37.9019761833, 175.4752665167, '34'],
  [-37.90256225, 175.4788024667, '71'],
  [-37.9031558833, 175.4793385, '68'],
  [-37.9043412833, 175.48477025, '109A-109D'],
  [-37.9030168667, 175.4803624833, '81'],
  [-37.9054432333, 175.48740955, '114'],
  [-37.9032955667, 175.4821555167, '93B'],
  [-37.9052043, 175.4875160667, '118'],
  [-37.9040282167, 175.4838154167, '105'],
  [-37.90498365, 175.4875592167, '120'],
  [-37.90388715, 175.4833244, '101'],
  [-37.90156105, 175.47306285, '1/14-5/14'],
  [-37.9028688, 175.4798400167, '77'],
  [-37.9017512, 175.4730746667, '16A'],
  [-37.9034353833, 175.48239905, '95A'],
  [-37.9018501333, 175.47294875, '16B'],
  [-37.9065120667, 175.4873521833, '114A'],
  [-37.9027523, 175.47799015, '58'],
  [-37.9029325833, 175.4801074833, '79'],
  [-37.9032525167, 175.4811784, '87'],
  [-37.9031822833, 175.4809204, '85'],
  [-37.9033394667, 175.4814522333, '89'],
  [-37.9011077167, 175.4738625833, '25'],
  [-37.9024641, 175.4756984333, '40'],
  [-37.9044449, 175.4836965167, '104'],
  [-37.9023471833, 175.47810245, '55'],
  [-37.9029669667, 175.4787094167, '62'],
  [-37.90442275, 175.4850982, '115'],
  [-37.9026089, 175.47587495, '44'],
  [-37.90264365, 175.4790681667, '73'],
  [-37.9035878333, 175.4823534, '95'],
  [-37.9024915, 175.4786270833, '67'],
  [-37.9031010167, 175.4812452667, '87A'],
  [-37.9030982, 175.47913305, '66'],
  [-37.9035099167, 175.4821307, '93A'],
  [-37.90079465, 175.4741973833, '33'],
  [-37.9040185667, 175.48229025, '96'],
  [-37.9023384167, 175.4765524833, '50'],
  [-37.9022154167, 175.4786401833, '59'],
  [-37.9018837333, 175.4765543333, '45'],
  [-37.9029163333, 175.4785064167, '60'],
  [-37.9022748167, 175.4763478167, '48'],
  [-37.9041422, 175.4826398833, '98'],
  [-37.9022017333, 175.4761212333, '46A'],
  [-37.9034542333, 175.4818904, '91'],
  [-37.9019505833, 175.4767386667, '47'],
  [-37.9018310833, 175.4763711167, '43'],
  [-37.9022245, 175.4761991, '46B'],
  [-37.9022058833, 175.4776710667, '51'],
  [-37.9011141167, 175.4738904667, '31'],
  [-37.90381365, 175.48307595, '99'],
  [-37.9013508667, 175.4731568833, '14'],
  [-37.9026744667, 175.4776618667, '54'],
  [-37.9013012667, 175.4729456, '12'],
  [-37.9016709167, 175.4758279833, '39'],
  [-37.9012509333, 175.4727291833, '10'],
  [-37.902262, 175.4778573167, '53'],
  [-37.9011626167, 175.4723885667, '6'],
  [-37.9015607167, 175.4753714333, '35'],
  [-37.9007910667, 175.47417145, '27'],
  [-37.9020738833, 175.47565455, '36'],
  [-37.9010502667, 175.4719555, '4'],
  [-37.9036689667, 175.4826166, '97'],
  [-37.90165275, 175.4742215833, '28'],
  [-37.9043576, 175.4834127, '102'],
  [-37.9014172833, 175.4734044167, '18'],
  [-37.90310965, 175.4806441333, '83'],
  [-37.90305305, 175.4810779, '85A'],
  [-37.9041825833, 175.4842419667, '107A'],
  [-37.9018864667, 175.4749266667, '32'],
  [-37.9018503333, 175.47696095, '49'],
  [-37.9030326167, 175.47892515, '64'],
  [-37.9017621333, 175.4733169667, '20'],
  [-37.89705485, 175.4732848667, '5'],
  [-37.8972060833, 175.4727957833, '1A'],
  [-37.8950392167, 175.47373745, '28B'],
  [-37.8965514333, 175.4726139833, '6'],
  [-37.8952181167, 175.4744414833, '33B'],
  [-37.8952637167, 175.47354965, '26A'],
  [-37.8951086667, 175.4742331167, '33A'],
  [-37.8966904333, 175.4729455, '11A'],
  [-37.8962754333, 175.4733100167, '17'],
  [-37.8968641333, 175.4728138667, '1/3-5/3'],
  [-37.8949580667, 175.4743396167, '35'],
  [-37.8973106167, 175.4729746, '1B'],
  [-37.8949376167, 175.47388345, '30'],
  [-37.89572315, 175.4732895, '18'],
  [-37.8958303167, 175.4731749333, '16'],
  [-37.8969656167, 175.4732634, '7'],
  [-37.896495, 175.4731159833, '13'],
  [-37.8968125667, 175.4731199333, '11B'],
  [-37.89640605, 175.4732035667, '15'],
  [-37.8952445667, 175.4736735667, '26'],
  [-37.8960091167, 175.47303035, '14'],
  [-37.896205, 175.47289145, '10'],
  [-37.8956152, 175.4738212833, '29'],
  [-37.8950829667, 175.4737896, '28A'],
  [-37.8955509167, 175.4734385333, '22'],
  [-37.8972144833, 175.4729756, '1C'],
  [-37.8970069167, 175.4727237833, '1D'],
  [-37.8964112667, 175.4727309333, '8'],
  [-37.89685155, 175.4723649167, '2'],
  [-37.8959909833, 175.4735371333, '19'],
  [-37.8968653333, 175.4732429833, '9'],
  [-37.8952936, 175.4740853667, '31'],
  [-37.8956491833, 175.47335855, '20'],
  [-37.8971588833, 175.4725988, '1'],
  [-37.95948505, 175.3813743167, '3/362'],
  [-37.9267924667, 175.3947664833, '790'],
  [-37.95374205, 175.3785110333, '417'],
  [-37.9270906333, 175.3962139333, '802'],
  [-37.95208085, 175.3790772833, '435'],
  [-37.9537863833, 175.37916715, '418'],
  [-37.9336977167, 175.3872475333, '660'],
  [-37.9370890667, 175.3861055333, '610'],
  [-37.9632177167, 175.37745245, '310'],
  [-37.9552044167, 175.3775981, '391'],
  [-37.95356905, 175.3785904167, '419'],
  [-37.9658669167, 175.3737947167, '273'],
  [-37.9591853, 175.37834395, '360'],
  [-37.95818485, 175.3776341167, '1/362'],
  [-37.9264044, 175.3933694833, '770'],
  [-37.94279195, 175.3830579333, '541'],
  [-37.9358610167, 175.3856405, '623'],
  [-37.92604605, 175.39188825, '762'],
  [-37.95893715, 175.3798225167, '2/362'],
  [-37.9257693333, 175.3904065167, '750'],
  [-37.9654268167, 175.3769618333, '308'],
  [-37.9323014833, 175.3868321333, '743'],
  [-37.93764955, 175.3850314, '599'],
  [-37.9095889, 175.4694829333, '13'],
  [-37.9099912333, 175.4694063167, '4'],
  [-37.9101332, 175.4693430167, '2'],
  [-37.90943375, 175.4691617333, '9'],
  [-37.90960705, 175.46916755, '7'],
  [-37.9100405, 175.4689760667, '1'],
  [-37.9095270167, 175.4693311, '11'],
  [-37.9098948167, 175.4690437, '3'],
  [-37.9097340167, 175.4696952667, '10'],
  [-37.9095571, 175.4697117833, '12'],
  [-37.90975285, 175.4691024667, '5'],
  [-37.9018515667, 175.47956045, '10'],
  [-37.9025733333, 175.4796073833, '1A'],
  [-37.90234615, 175.4792779, '4'],
  [-37.9027908167, 175.4795601333, '1'],
  [-37.9024103667, 175.47967745, '3'],
  [-37.90205615, 175.4794369167, '8'],
  [-37.89827985, 175.4664433333, '25'],
  [-37.8990345167, 175.4670508, '11'],
  [-37.8989251667, 175.4664513667, '17'],
  [-37.8990204833, 175.4665540333, '15'],
  [-37.8996123667, 175.4678836167, '10'],
  [-37.89873215, 175.4672828, '18'],
  [-37.89858465, 175.4666028667, '21'],
  [-37.8990743833, 175.4675788, '12A'],
  [-37.8984592, 175.4665057, '23'],
  [-37.89889965, 175.467451, '12'],
  [-37.9002081667, 175.46756315, '1'],
  [-37.9001357167, 175.4679316667, '4'],
  [-37.898277, 175.46726385, '24'],
  [-37.89978315, 175.46793515, '8'],
  [-37.8983929667, 175.4669553667, '26'],
  [-37.8991940667, 175.4672154167, '9'],
  [-37.8980936167, 175.4664998167, '27'],
  [-37.8995042, 175.4674747167, '7'],
  [-37.898334, 175.46731845, '22'],
  [-37.8999632833, 175.4679440333, '6'],
  [-37.89794665, 175.4665422333, '29'],
  [-37.8988821167, 175.4669019167, '13'],
  [-37.8980275167, 175.4668801333, '30'],
  [-37.89871525, 175.4676048667, '14'],
  [-37.8977558667, 175.4665362333, '31'],
  [-37.8986535, 175.4675602667, '16'],
  [-37.8979195833, 175.4667739667, '32'],
  [-37.89979585, 175.4675336833, '5'],
  [-37.8974943167, 175.46652485, '33'],
  [-37.8987147333, 175.46672835, '19'],
  [-37.8977257333, 175.4666500833, '34'],
  [-37.8985690333, 175.4671123833, '20'],
  [-37.9003081667, 175.46791995, '2'],
  [-37.8981989167, 175.4668991, '28'],
  [-37.8999918333, 175.4675733167, '3'],
  [-37.9085979, 175.47228295, '6'],
  [-37.9082979333, 175.4727952, '1'],
  [-37.9084415, 175.4723396833, '4'],
  [-37.9085185333, 175.4726990667, '3'],
  [-37.90870765, 175.4724272833, '8'],
  [-37.9082453167, 175.4725341667, '2'],
  [-37.9087162, 175.4725830333, '5'],
  [-37.8992527333, 175.46141755, '5A'],
  [-37.8974537333, 175.4597499, '30'],
  [-37.8990513167, 175.461357, '5'],
  [-37.89854655, 175.4618827833, '2'],
  [-37.8962418167, 175.4614646667, '69'],
  [-37.89729515, 175.4597868833, '32'],
  [-37.8986072, 175.4598125833, '18'],
  [-37.8990041, 175.4601224, '17'],
  [-37.8986801, 175.46007825, '16'],
  [-37.8976013667, 175.4596983333, '28'],
  [-37.8987992333, 175.4607934667, '10'],
  [-37.8961486, 175.4612296167, '65'],
  [-37.8987145333, 175.4602998667, '14'],
  [-37.8986250667, 175.4616027833, '6'],
  [-37.8985372, 175.4606703, '12A'],
  [-37.8990944833, 175.4618171167, '3A'],
  [-37.8987547833, 175.4605145833, '12'],
  [-37.8989327667, 175.46174375, '3'],
  [-37.89940475, 175.4614229833, '5B'],
  [-37.8981109833, 175.4595815167, '22'],
  [-37.8992761667, 175.4612548833, '7A'],
  [-37.89858635, 175.4617420167, '4'],
  [-37.89615355, 175.4610093667, '63'],
  [-37.8960633167, 175.4614357, '67'],
  [-37.8970480833, 175.4594701667, '47'],
  [-37.8964719167, 175.4610726, '46'],
  [-37.89942805, 175.4612639, '7B'],
  [-37.8969129333, 175.4595048833, '49'],
  [-37.8983810333, 175.4595983, '20'],
  [-37.8966503, 175.4601548, '40'],
  [-37.8965228167, 175.4605625667, '42'],
  [-37.8979410167, 175.4596252, '24'],
  [-37.89698365, 175.45986105, '36'],
  [-37.89909445, 175.46094265, '9'],
  [-37.8990747, 175.4611943333, '7'],
  [-37.8968194333, 175.4598978167, '38'],
  [-37.8990957833, 175.4607578667, '11'],
  [-37.8993121167, 175.4605309833, '13A'],
  [-37.8993347667, 175.4606526667, '11A'],
  [-37.8977427333, 175.4596749667, '26'],
  [-37.8964422833, 175.4608866833, '44'],
  [-37.897148, 175.4598171667, '34'],
  [-37.8964457667, 175.4614839667, '50'],
  [-37.8965226, 175.4613232333, '48'],
  [-37.89666225, 175.4616268167, '50A'],
  [-37.8967215667, 175.4614938667, '48A'],
  [-37.8961699833, 175.4606764833, '61'],
  [-37.8990274167, 175.4594845333, '21A'],
  [-37.8978044833, 175.4592938, '37'],
  [-37.89765145, 175.45932785, '39'],
  [-37.8972011167, 175.4594360833, '45'],
  [-37.89748945, 175.45936165, '41'],
  [-37.8973585333, 175.4594078333, '43'],
  [-37.8989135833, 175.4593674167, '23A'],
  [-37.8982502167, 175.4591910333, '31'],
  [-37.8980929167, 175.4592136833, '33'],
  [-37.8979576667, 175.4592540667, '35'],
  [-37.8987865, 175.459442, '23'],
  [-37.8983624667, 175.4591781333, '29'],
  [-37.89859365, 175.4592542667, '25'],
  [-37.8984648833, 175.4592043833, '27'],
  [-37.89599285, 175.4605853833, '61A'],
  [-37.8967193667, 175.4595488167, '51'],
  [-37.89895945, 175.45991735, '19'],
  [-37.8988903667, 175.4596039833, '21'],
  [-37.8991762833, 175.4598346833, '19A'],
  [-37.8990309833, 175.4603212, '15'],
  [-37.8992306667, 175.4600061667, '17A'],
  [-37.8990798333, 175.46053775, '13'],
  [-37.8960234, 175.46042255, '59A'],
  [-37.8961819167, 175.4595465333, '55A'],
  [-37.8965562167, 175.4596334167, '53'],
  [-37.8962467833, 175.4604475, '59'],
  [-37.8961687167, 175.459936, '57A'],
  [-37.8963601167, 175.4599881167, '57'],
  [-37.8964266, 175.4598209333, '55'],
  [-37.89876895, 175.4610164333, '8'],
  [-37.89888655, 175.46191985, '1'],
  [-37.8992657, 175.4618445667, '3B'],
  [-37.89942775, 175.46177925, '3C'],
  [-37.8994213333, 175.461939, '3D'],
  [-37.8877845667, 175.4769104167, '15A'],
  [-37.8884691333, 175.47652905, '9'],
  [-37.8876236833, 175.4762465333, '14'],
  [-37.8881092667, 175.4765359833, '11'],
  [-37.8870282333, 175.47689615, '21'],
  [-37.8878168667, 175.4761862, '12'],
  [-37.8869641167, 175.4766908333, '20'],
  [-37.88876965, 175.4761694167, '7'],
  [-37.8866340667, 175.4762948167, '20D'],
  [-37.8875209833, 175.4767726667, '17'],
  [-37.8878835333, 175.4766054, '13'],
  [-37.8870823167, 175.4763955, '18'],
  [-37.8885070833, 175.4758756667, '6'],
  [-37.8880108, 175.4760921833, '10'],
  [-37.8888735667, 175.4758855333, '5'],
  [-37.8879635, 175.4768245333, '13A'],
  [-37.8890102, 175.4753934667, '1'],
  [-37.887397, 175.4763382, '16'],
  [-37.8867165333, 175.4763817833, '20C'],
  [-37.8881819, 175.4760513167, '8'],
  [-37.886801, 175.4764408667, '20B'],
  [-37.8873439167, 175.4769787167, '19A'],
  [-37.88688675, 175.47651985, '20A'],
  [-37.8872187, 175.4769650667, '19'],
  [-37.8874603333, 175.4770461667, '19B'],
  [-37.8877107667, 175.4766732833, '15'],
  [-37.9028793667, 175.4694345, '9'],
  [-37.9027742, 175.4691508167, '5'],
  [-37.9027706333, 175.46934705, '7'],
  [-37.9030670833, 175.4689651833, '4'],
  [-37.903068, 175.4692231333, '6'],
  [-37.90282975, 175.4689251167, '2'],
  [-37.9030033, 175.4694327333, '8'],
  [-37.7979216167, 175.3709623333, '40'],
  [-37.7901529, 175.3755824, '144'],
  [-37.7907598333, 175.3744419, '134'],
  [-37.7937929667, 175.3664199167, '59C'],
  [-37.79439395, 175.3674624167, '59B'],
  [-37.7944289667, 175.3725634167, '82A'],
  [-37.7904513167, 175.3738425333, '131'],
  [-37.794607, 175.3745403833, '82B'],
  [-37.7921551167, 175.3768403, '132'],
  [-37.7926399833, 175.3722763, '102'],
  [-37.7967557, 175.3729791333, '60A'],
  [-37.7921326333, 175.37322975, '110'],
  [-37.8012874, 175.3703331, '14'],
  [-37.7948232167, 175.3716246, '74'],
  [-37.7979944667, 175.3703715167, '35'],
  [-37.7956465, 175.3714636167, '66'],
  [-37.7911951833, 175.3732412833, '123B'],
  [-37.7987651833, 175.3708161667, '32'],
  [-37.79171095, 175.3736367667, '112'],
  [-37.7976371833, 175.3704513833, '41'],
  [-37.7911877333, 175.3732945667, '123A'],
  [-37.7913029167, 175.37306835, '121'],
  [-37.7906186667, 175.3755869, '140'],
  [-37.7931244667, 175.3712613167, '93A'],
  [-37.7974290667, 175.3711039667, '42'],
  [-37.7936148167, 175.3719375667, '84'],
  [-37.8005517667, 175.3700387, '9'],
  [-37.7938986667, 175.3710440333, '77'],
  [-37.7965492333, 175.3713085167, '54'],
  [-37.8001176167, 175.3701064333, '13'],
  [-37.7930191667, 175.37129215, '93B'],
  [-37.7926151667, 175.37155955, '99A'],
  [-37.7950692833, 175.3686159167, '59A'],
  [-37.7969088, 175.37462925, '60B'],
  [-37.7951773167, 175.37087185, '75'],
  [-37.7921505, 175.3713529333, '99B'],
  [-37.7904565167, 175.3749809333, '138'],
  [-37.8006982167, 175.3700011, '7'],
  [-37.7991912, 175.3699700833, '29'],
  [-37.7967847667, 175.3705662167, '47'],
  [-37.792296, 175.3720602333, '99C'],
  [-37.7980087167, 175.36967245, '31'],
  [-37.7982152833, 175.3709274, '34'],
  [-37.9155702167, 175.4723301167, '4'],
  [-37.9159029, 175.4721897167, '8'],
  [-37.9157610833, 175.4726929667, '3'],
  [-37.9160956333, 175.4725375333, '7'],
  [-37.9153328, 175.4724436667, '2'],
  [-37.9164312667, 175.4723669167, '11'],
  [-37.9165995, 175.4722833833, '13'],
  [-37.9162671833, 175.4724523333, '9'],
  [-37.9162124833, 175.4720273, '12'],
  [-37.9160704833, 175.4720950333, '10'],
  [-37.9170187667, 175.4717177667, '22'],
  [-37.9164956667, 175.4718994167, '16'],
  [-37.9163615667, 175.4719599333, '14'],
  [-37.9155396833, 175.4728079667, '1'],
  [-37.9157325833, 175.4722579833, '6'],
  [-37.9159316, 175.47261835, '5'],
  [-37.8914888167, 175.4620999667, '21'],
  [-37.8837548, 175.4623328, '77B'],
  [-37.8930618833, 175.4622745, '11'],
  [-37.8852888667, 175.46116795, '76'],
  [-37.8913069667, 175.4621727167, '23'],
  [-37.8839160167, 175.4615298167, '75'],
  [-37.8883285167, 175.4618738833, '47'],
  [-37.8858521667, 175.46093185, '68B'],
  [-37.8853005333, 175.4610670333, '76A'],
  [-37.88383285, 175.4621270167, '75A'],
  [-37.8823235167, 175.4605504833, '110A'],
  [-37.8914899333, 175.46174725, '22'],
  [-37.8818567333, 175.4608746167, '116'],
  [-37.88353235, 175.4618320333, '77A'],
  [-37.88134175, 175.4613161333, '95'],
  [-37.8879809, 175.4618373667, '49'],
  [-37.88152115, 175.46131485, '93'],
  [-37.8885148667, 175.4618976167, '45'],
  [-37.8872325667, 175.4613256333, '54'],
  [-37.8877582, 175.4620199, '51A'],
  [-37.8837208833, 175.4615252, '77'],
  [-37.8879695167, 175.4611445833, '50A'],
  [-37.8933130333, 175.46192685, '6'],
  [-37.88794035, 175.46146015, '50'],
  [-37.8911399667, 175.4621445, '25'],
  [-37.8927127, 175.4625991167, '15'],
  [-37.8898722833, 175.4620120667, '37'],
  [-37.8817498333, 175.4605830833, '118A'],
  [-37.8856498167, 175.4611874667, '70'],
  [-37.8818152333, 175.4605837833, '118B'],
  [-37.8834546167, 175.4619323333, '1/79-3/79'],
  [-37.8817077833, 175.46087495, '120'],
  [-37.88566165, 175.4608763667, '70B'],
  [-37.8881064833, 175.4614714667, '48'],
  [-37.8883276833, 175.4614909, '46'],
  [-37.8900726, 175.4616307167, '34'],
  [-37.8824921167, 175.4614109333, '85'],
  [-37.8902574, 175.4620445833, '33'],
  [-37.8821857333, 175.4613799, '89'],
  [-37.8909901, 175.4620973667, '27'],
  [-37.8906249333, 175.4624066333, '31A'],
  [-37.8909031667, 175.4623998167, '27A'],
  [-37.8823715333, 175.4609577, '110'],
  [-37.8885618333, 175.4615104, '44'],
  [-37.8907907, 175.4624375833, '29A'],
  [-37.8911051167, 175.4615235333, '26A'],
  [-37.8912843667, 175.46171725, '24'],
  [-37.88775155, 175.4618187333, '51'],
  [-37.88202465, 175.4608939, '114'],
  [-37.8877833167, 175.4614137, '52'],
  [-37.8907810833, 175.462108, '29'],
  [-37.8910314667, 175.4617401833, '26'],
  [-37.882292, 175.4613977333, '87'],
  [-37.8906141333, 175.4621064667, '31'],
  [-37.8892757667, 175.4615758167, '38'],
  [-37.8904495, 175.4624898833, '33B'],
  [-37.8868235333, 175.461296, '58'],
  [-37.8904039167, 175.4622297, '33A'],
  [-37.8826623167, 175.4609461833, '106'],
  [-37.89295465, 175.4615430167, '14B'],
  [-37.8907016, 175.46165145, '28'],
  [-37.89291045, 175.4618812167, '14'],
  [-37.8854757, 175.461181, '74'],
  [-37.8930916667, 175.46189575, '12'],
  [-37.8856999, 175.4605845, '70A'],
  [-37.8928368667, 175.4622630833, '13'],
  [-37.8899615833, 175.4616178167, '36'],
  [-37.8925096667, 175.4618395167, '16A'],
  [-37.8927205667, 175.4618461, '16'],
  [-37.8925576333, 175.4622484333, '17'],
  [-37.8887964167, 175.4615352, '42'],
  [-37.8887897667, 175.4619157667, '43'],
  [-37.8813160833, 175.46082205, '124'],
  [-37.88148945, 175.46084125, '122'],
  [-37.8822301, 175.4605952667, '112B'],
  [-37.8821928667, 175.4609133167, '112A'],
  [-37.8825255, 175.4609447167, '108'],
  [-37.886356, 175.4607633833, '62A'],
  [-37.88384855, 175.46107535, '84'],
  [-37.8844810833, 175.46111955, '78'],
  [-37.8865957833, 175.4612863167, '60'],
  [-37.8870465333, 175.4613338333, '56'],
  [-37.8840136833, 175.4610932, '82'],
  [-37.8840612333, 175.4615617667, '73'],
  [-37.8858403667, 175.4612416667, '68A'],
  [-37.8863992833, 175.4612464333, '62'],
  [-37.88602145, 175.4612203, '66'],
  [-37.8862464, 175.4607918667, '64A'],
  [-37.8859472, 175.4606057333, '66A'],
  [-37.88617885, 175.4612264667, '64'],
  [-37.8841155833, 175.4606926667, '82A'],
  [-37.8842170667, 175.46156725, '71'],
  [-37.8843494167, 175.4615815167, '69'],
  [-37.8845482333, 175.4615789, '61'],
  [-37.8832313667, 175.4614822, '81'],
  [-37.8833854333, 175.46147585, '79'],
  [-37.8842273333, 175.4610982667, '80'],
  [-37.8842230833, 175.4607088333, '80A'],
  [-37.88898595, 175.4619261, '41'],
  [-37.8836924167, 175.4610583833, '86'],
  [-37.88897595, 175.4615556167, '40'],
  [-37.8835485833, 175.4610374, '88'],
  [-37.8812029, 175.4608328833, '126'],
  [-37.8834193333, 175.4610251833, '90'],
  [-37.8174314833, 175.3761889833, '28'],
  [-37.8175173333, 175.3745060667, '41A'],
  [-37.8189801, 175.3767644333, '19'],
  [-37.81721685, 175.3746944667, '40A'],
  [-37.8184217833, 175.3785756333, '7'],
  [-37.81727655, 175.3739209, '41C'],
  [-37.8169354333, 175.3751527667, '40B'],
  [-37.8183142667, 175.3745782, '39'],
  [-37.8177220333, 175.3774063833, '18'],
  [-37.8181192333, 175.3734650333, '41B'],
  [-37.8182567, 175.37774445, '15'],
  [-37.8177787833, 175.3756114, '31'],
  [-37.8171698, 175.37896375, '14'],
  [-37.8179103833, 175.3762068167, '27'],
  [-37.81816045, 175.3773152167, '17'],
  [-37.8187562833, 175.3765890167, '21'],
  [-37.81804885, 175.3788571, '6'],
  [-37.8184971667, 175.3750758833, '49'],
  [-37.8173303, 175.3796556667, '12'],
  [-37.8177653667, 175.3776830167, '16'],
  [-37.81610655, 175.3744603333, '40C'],
  [-37.8175659833, 175.3767630167, '24'],
  [-37.8857427167, 175.4668167833, '6'],
  [-37.8842291667, 175.46713325, '21'],
  [-37.88552105, 175.46728075, '7'],
  [-37.8822557833, 175.4671910833, '41A'],
  [-37.88573115, 175.4665300333, '6A'],
  [-37.8841256167, 175.4667261, '22'],
  [-37.8855689, 175.4668563667, '8'],
  [-37.8833609167, 175.4664140667, '30A'],
  [-37.8819612833, 175.4662849167, '42A'],
  [-37.8854916667, 175.4665621167, '8A'],
  [-37.88355305, 175.4666830167, '28'],
  [-37.8858997833, 175.46683345, '2'],
  [-37.88529365, 175.4675717333, '9A'],
  [-37.8853087167, 175.46724515, '9'],
  [-37.8858362167, 175.4668311, '4'],
  [-37.88501735, 175.4672261167, '13'],
  [-37.88173245, 175.4665125833, '44'],
  [-37.8819903833, 175.4669395333, '43'],
  [-37.8819599, 175.46652035, '42'],
  [-37.8821801667, 175.4669412, '41'],
  [-37.8820951, 175.4665340833, '40'],
  [-37.8822636667, 175.4665534167, '36'],
  [-37.8836934333, 175.4671131833, '27'],
  [-37.8817733333, 175.4669241, '45'],
  [-37.8811819833, 175.46709535, '49A'],
  [-37.8812991667, 175.4664858167, '48'],
  [-37.8815565333, 175.4668967167, '47'],
  [-37.8815367, 175.46651585, '46'],
  [-37.8837635333, 175.4667121, '26'],
  [-37.8811047333, 175.466856, '51'],
  [-37.8810985833, 175.4664679167, '50'],
  [-37.8813315833, 175.46687885, '49'],
  [-37.8838189667, 175.4665006, '26A'],
  [-37.8840672667, 175.46711675, '23'],
  [-37.8838811667, 175.4670993333, '25'],
  [-37.8839458833, 175.4667205667, '24'],
  [-37.8832529, 175.4673047167, '33A'],
  [-37.88359175, 175.4664604333, '28A'],
  [-37.8830642667, 175.4666342167, '32'],
  [-37.8835364167, 175.4675321, '29'],
  [-37.8834683333, 175.4670743667, '31'],
  [-37.883317, 175.4666640833, '30'],
  [-37.8851499333, 175.4667468, '12'],
  [-37.8851338167, 175.46723935, '11'],
  [-37.8828958667, 175.4666283167, '34'],
  [-37.88325825, 175.46707095, '33'],
  [-37.8853570333, 175.4667731167, '10'],
  [-37.88494775, 175.4672146833, '15'],
  [-37.8854012333, 175.466548, '10A'],
  [-37.88298215, 175.4670794667, '35'],
  [-37.9137448167, 175.4769976167, '9'],
  [-37.9139995, 175.4769421167, '1'],
  [-37.9137195833, 175.4762766333, '5'],
  [-37.9136874333, 175.4768144167, '8'],
  [-37.9138555833, 175.4762229167, '4'],
  [-37.9139553833, 175.4765034, '3'],
  [-37.9139429833, 175.4767303, '2'],
  [-37.91357485, 175.4763857833, '6'],
  [-37.91363055, 175.47658545, '7'],
  [-37.9070534333, 175.4673664667, '26'],
  [-37.9051596, 175.4668419167, '13'],
  [-37.9107910167, 175.4652498167, '70'],
  [-37.9049454167, 175.4681745833, '8'],
  [-37.9086697833, 175.466192, '46A'],
  [-37.9049889333, 175.4680154333, '8A'],
  [-37.90506145, 175.4674941833, '7'],
  [-37.9106372333, 175.4652995167, '68'],
  [-37.9083611333, 175.4663507667, '42'],
  [-37.9062177333, 175.4681393167, '16B'],
  [-37.91076535, 175.46463305, '71'],
  [-37.90610465, 175.46785555, '16A'],
  [-37.9054751167, 175.4677389667, '12'],
  [-37.9058089833, 175.4680032167, '14A'],
  [-37.9054853667, 175.4672854833, '17'],
  [-37.90856345, 175.4665805333, '44'],
  [-37.9088263, 175.4661217333, '48'],
  [-37.9101238833, 175.4655415667, '62'],
  [-37.908529, 175.4662483167, '46'],
  [-37.9056721833, 175.46797, '12A'],
  [-37.9057461833, 175.4675941167, '14'],
  [-37.90600145, 175.4670439167, '23'],
  [-37.9076178833, 175.4673104167, '34A'],
  [-37.90463895, 175.46807945, '3'],
  [-37.9049602667, 175.4669330833, '9'],
  [-37.90673685, 175.4671040833, '22'],
  [-37.907098, 175.4676191667, '32'],
  [-37.9076081833, 175.46671515, '38'],
  [-37.90916225, 175.4659552667, '52'],
  [-37.90454345, 175.4684433, '1'],
  [-37.90512805, 175.4671995667, '11A'],
  [-37.9059193, 175.4674994, '16'],
  [-37.9073133167, 175.4668277667, '34'],
  [-37.9102952667, 175.4654520833, '64'],
  [-37.9092774833, 175.46591125, '52A'],
  [-37.9052165167, 175.4674315333, '11'],
  [-37.9053672, 175.4671046, '17B'],
  [-37.9048409833, 175.46859545, '4'],
  [-37.905671, 175.46720995, '19'],
  [-37.9048928333, 175.4683727167, '6'],
  [-37.9058366833, 175.4671128, '21'],
  [-37.9071612667, 175.4678683, '30'],
  [-37.9089840667, 175.4660592667, '50'],
  [-37.90527545, 175.4667925333, '15'],
  [-37.90715615, 175.466917, '32A'],
  [-37.9061779167, 175.4669647333, '25'],
  [-37.9077133333, 175.4674576833, '36A'],
  [-37.9104661667, 175.4653805167, '66'],
  [-37.9051668667, 175.4678703167, '10'],
  [-37.89370395, 175.47271155, '11'],
  [-37.8921716167, 175.4721017, '26'],
  [-37.8935424167, 175.4728224833, '13A'],
  [-37.8935212, 175.4727174167, '13'],
  [-37.8937888333, 175.4722797667, '12'],
  [-37.89444175, 175.4723851667, '2'],
  [-37.89426415, 175.4731979833, '8/7'],
  [-37.8944458167, 175.4722873333, '1/2'],
  [-37.8940236833, 175.4722967667, '8'],
  [-37.8944464167, 175.47217745, '2/2'],
  [-37.89289535, 175.4722046, '20'],
  [-37.8940564, 175.4721777667, '1/8'],
  [-37.89387485, 175.47305145, '9A'],
  [-37.8941962833, 175.4734008333, '7/7'],
  [-37.8940251167, 175.4729672167, '3/7'],
  [-37.8940147167, 175.4733695833, '5/7'],
  [-37.8927664833, 175.4726649, '21'],
  [-37.8940957833, 175.4733820167, '6/7'],
  [-37.8942063833, 175.47275275, '11/7'],
  [-37.8938730167, 175.4727318667, '9'],
  [-37.8940384833, 175.4727499833, '1/7'],
  [-37.8916949833, 175.47255425, '29'],
  [-37.8940345667, 175.4728609333, '2/7'],
  [-37.8920309, 175.4720907167, '28'],
  [-37.8942669167, 175.4723162, '6'],
  [-37.8920657333, 175.4725813667, '27'],
  [-37.8924789, 175.4721364167, '22'],
  [-37.89162635, 175.4720620167, '34'],
  [-37.89420475, 175.4728706, '10/7'],
  [-37.8924279, 175.4726186167, '25'],
  [-37.89427175, 175.4730613833, '9/7'],
  [-37.8917478833, 175.4720685333, '32'],
  [-37.89359425, 175.4722612333, '14'],
  [-37.8919238167, 175.4717851167, '30A'],
  [-37.89358685, 175.47297855, '11A'],
  [-37.8917815667, 175.4717468667, '32A'],
  [-37.8940195667, 175.4730878667, '4/7'],
  [-37.89188475, 175.4720793833, '30'],
  [-37.8766258167, 175.4531757333, '63'],
  [-37.8793250667, 175.4531694667, '33'],
  [-37.87557575, 175.4531778333, '71'],
  [-37.8649285167, 175.4537918667, '194'],
  [-37.8758193333, 175.4536709167, '72'],
  [-37.8730099333, 175.4536885167, '104'],
  [-37.87537995, 175.4536875833, '76'],
  [-37.866365, 175.4537908667, '182'],
  [-37.8773983, 175.4531370667, '53'],
  [-37.8663474333, 175.4540325167, '182A'],
  [-37.8765353, 175.4536952667, '68'],
  [-37.8633266833, 175.4532383833, '213'],
  [-37.8748418833, 175.4536900667, '86'],
  [-37.8723979667, 175.4536811667, '112'],
  [-37.8789557167, 175.4531799167, '37'],
  [-37.8744338333, 175.45543435, '88'],
  [-37.8780606333, 175.4531695167, '49'],
  [-37.8613876667, 175.4533495833, '1/233'],
  [-37.8779126333, 175.449236, '4/51'],
  [-37.86132765, 175.4526138667, '2/233'],
  [-37.8779974333, 175.45063155, '3/51'],
  [-37.8629783167, 175.4532700667, '215'],
  [-37.8777104167, 175.4515755167, '2/51'],
  [-37.8811745, 175.4555028167, '4'],
  [-37.8779778833, 175.4521171, '1/51'],
  [-37.8619675333, 175.4532946667, '227'],
  [-37.8786639833, 175.4493194167, '5/51'],
  [-37.88057795, 175.4544579, '18'],
  [-37.86531615, 175.4531001833, '191'],
  [-37.8655207167, 175.4536965333, '186'],
  [-37.8646614333, 175.4537639667, '198'],
  [-37.8647871333, 175.4541422833, '196'],
  [-37.86771765, 175.4537268, '162'],
  [-37.8711387333, 175.4536879167, '124'],
  [-37.8611343167, 175.45330145, '235'],
  [-37.8624900167, 175.4532548833, '221'],
  [-37.86872715, 175.4532476, '151'],
  [-37.8703843667, 175.4532525, '131'],
  [-37.8692643833, 175.45371825, '150'],
  [-37.8699453833, 175.4537083667, '142'],
  [-37.88075845, 175.4546889, '14'],
  [-37.8810108833, 175.45510075, '8'],
  [-37.8808800833, 175.45486695, '12'],
  [-37.8810951, 175.45531175, '6'],
  [-37.8812414333, 175.4557114167, '2'],
  [-37.8737279833, 175.4537149833, '90'],
  [-37.8804315833, 175.4547993833, '2/16'],
  [-37.8806571333, 175.4551276833, '2/10'],
  [-37.8807296667, 175.4552756333, '1/10'],
  [-37.8805078333, 175.4548978667, '1/16'],
  [-37.8305417667, 175.4407137167, '106'],
  [-37.8305758833, 175.4444438667, '78'],
  [-37.8305754, 175.45156825, '18'],
  [-37.83063965, 175.45322105, '2'],
  [-37.8305728333, 175.4437875667, '82'],
  [-37.8690497667, 175.4740093167, '7'],
  [-37.86952375, 175.4790699, '60'],
  [-37.8713118667, 175.4763685667, '42'],
  [-37.8690602667, 175.4767549167, '47'],
  [-37.8957648333, 175.4773709167, '4A'],
  [-37.8971239167, 175.47716665, '16'],
  [-37.89663135, 175.4774846833, '10'],
  [-37.8972863333, 175.4770748833, '18'],
  [-37.8969474167, 175.4772745667, '14'],
  [-37.8963529167, 175.4776375333, '8'],
  [-37.8982169667, 175.4746382667, '44'],
  [-37.8958142, 175.4771743333, '4B'],
  [-37.89577995, 175.4770061667, '4C'],
  [-37.8956352667, 175.4772386167, '4'],
  [-37.89679325, 175.4773878, '12'],
  [-37.8956875333, 175.4769206, '4D'],
  [-37.8955368, 175.4771246333, '2'],
  [-37.9075869833, 175.4681207167, '5'],
  [-37.9076935833, 175.4688911, '1'],
  [-37.9078046833, 175.4683225333, '7'],
  [-37.9077261333, 175.4681354833, '6'],
  [-37.9078473333, 175.4685627833, '8'],
  [-37.9075310167, 175.46846565, '3'],
  [-37.9079180333, 175.46879245, '9'],
  [-37.90762245, 175.4686683, '2'],
  [-37.9074934833, 175.4682448, '4'],
  [-37.8065385167, 175.3969116167, '26'],
  [-37.8052316167, 175.3947853833, '1'],
  [-37.8054979333, 175.3951090333, '5'],
  [-37.8061355333, 175.3955903667, '12'],
  [-37.8057016167, 175.3950258333, '6'],
  [-37.8059893667, 175.3953958833, '10'],
  [-37.8068311167, 175.3965807, '22'],
  [-37.80583815, 175.3952011167, '8'],
  [-37.8067129833, 175.3967156, '24'],
  [-37.8062816833, 175.39578495, '14'],
  [-37.8056595, 175.3953378, '7'],
  [-37.80642775, 175.3959857667, '16'],
  [-37.8067297167, 175.39640035, '20'],
  [-37.8063663, 175.3962931167, '13'],
  [-37.8053626333, 175.3949338333, '3'],
  [-37.8065366, 175.3965265333, '15'],
  [-37.80539065, 175.394573, '2'],
  [-37.8065884, 175.39621225, '18'],
  [-37.8055506833, 175.39481855, '4'],
  [-37.8062047667, 175.3961045, '11'],
  [-37.91218215, 175.4768794167, '8'],
  [-37.9120288167, 175.4765747, '7B'],
  [-37.9122875167, 175.4765784167, '3'],
  [-37.9123338833, 175.4771329833, '6B'],
  [-37.9120254167, 175.4764380167, '5'],
  [-37.91246155, 175.4769255333, '4'],
  [-37.9125897333, 175.4768015, '2'],
  [-37.9121711333, 175.4767164667, '7'],
  [-37.9122827167, 175.4769958667, '6A'],
  [-37.8527505833, 175.53393255, '617'],
  [-37.8826752167, 175.5025520333, '9'],
  [-37.81291845, 175.5447496, '1161'],
  [-37.8788362167, 175.510149, '1/88'],
  [-37.81259405, 175.5447376, '1163'],
  [-37.8763215167, 175.5110032333, '115'],
  [-37.8751193167, 175.51276665, '134'],
  [-37.86748695, 175.5219444167, '272'],
  [-37.8793489167, 175.5093666167, '80'],
  [-37.8249454833, 175.5459290333, '1021'],
  [-37.87870795, 175.5090378667, '81'],
  [-37.8802461667, 175.5019911, '1/37'],
  [-37.8790009333, 175.5095332, '84'],
  [-37.8675435167, 175.51850165, '243'],
  [-37.8783544, 175.5094524833, '97'],
  [-37.8785864667, 175.5105412333, '2/88'],
  [-37.8565379167, 175.5340265667, '567'],
  [-37.8790696167, 175.5117932, '98'],
  [-37.8579882167, 175.5332226833, '557'],
  [-37.8228546333, 175.5478497667, '1043'],
  [-37.8111895167, 175.5446341667, '1177'],
  [-37.8670294, 175.5209776667, '265'],
  [-37.8111449, 175.5438866, '1179'],
  [-37.8810532167, 175.50530935, '39'],
  [-37.8107934667, 175.5438973833, '1183'],
  [-37.8766940333, 175.51263885, '2/110'],
  [-37.8094178833, 175.5439488333, '1195'],
  [-37.8484587833, 175.5342090667, '663'],
  [-37.81064835, 175.5445837167, '1187'],
  [-37.8744863, 175.5115857333, '139'],
  [-37.8099838, 175.54453645, '1191'],
  [-37.8787071333, 175.5051437667, '2/39'],
  [-37.8092644167, 175.54453125, '1199'],
  [-37.8361982667, 175.5463852167, '890'],
  [-37.8389412667, 175.5464548, '858'],
  [-37.8789616667, 175.5121996833, '100'],
  [-37.8336715167, 175.5454231, '919'],
  [-37.8289189, 175.5478054833, '986'],
  [-37.8323492833, 175.5460591, '928'],
  [-37.8320521833, 175.5459855, '930'],
  [-37.8251348833, 175.5480670667, '1016'],
  [-37.8561845167, 175.5327450833, '581'],
  [-37.8262207333, 175.5482595333, '996'],
  [-37.8083614833, 175.5449377833, '1211'],
  [-37.8172147667, 175.5457622333, '1107'],
  [-37.8461716667, 175.5348015333, '688'],
  [-37.8159882, 175.5454072833, '1119'],
  [-37.8801261, 175.5011647833, '37'],
  [-37.8788507333, 175.5071659, '5/39'],
  [-37.86353225, 175.5262979167, '392'],
  [-37.8087557667, 175.5460182, '1208'],
  [-37.8799249, 175.50989025, '70'],
  [-37.8087391167, 175.5453725167, '1206'],
  [-37.8368114333, 175.5449542167, '881'],
  [-37.8278101833, 175.5479474667, '990'],
  [-37.8144593833, 175.5446729333, '1143'],
  [-37.8763691667, 175.51261455, '1/110'],
  [-37.8141157667, 175.5446296, '1145'],
  [-37.8675668333, 175.5223205667, '276'],
  [-37.86875635, 175.5151021667, '207'],
  [-37.8785670167, 175.5058547667, '3/39'],
  [-37.8766803833, 175.5140811167, '6/110'],
  [-37.86696285, 175.5258656667, '302'],
  [-37.81135475, 175.5425439833, '1/1181'],
  [-37.8809864833, 175.5057107, '8/39'],
  [-37.8788209, 175.5065659833, '4/39'],
  [-37.8792938833, 175.5065692167, '7/39'],
  [-37.8139674667, 175.5456240667, '1146'],
  [-37.8611906333, 175.5269748, '432'],
  [-37.8402324, 175.5411414667, '809'],
  [-37.82010205, 175.5480512333, '1070'],
  [-37.8771378833, 175.51029235, '1/103'],
  [-37.8213269333, 175.54882125, '1052'],
  [-37.8089942, 175.5452704833, '1202'],
  [-37.8212039667, 175.5500653333, '1/1052'],
  [-37.86704345, 175.5199686167, '257'],
  [-37.8211860833, 175.55188125, '2/1052'],
  [-37.8732234167, 175.51193365, '151'],
  [-37.8231706667, 175.5483519, '1040'],
  [-37.8129427333, 175.54544965, '1158'],
  [-37.8398410833, 175.5429798, '817'],
  [-37.8774619667, 175.5081401333, '4/103'],
  [-37.8413094333, 175.5414880333, '796'],
  [-37.8734242333, 175.5114266833, '149'],
  [-37.8116329167, 175.54465065, '1173'],
  [-37.8790814667, 175.505419, '6/39'],
  [-37.8402537, 175.54399925, '830'],
  [-37.87415495, 175.5111152667, '1/139'],
  [-37.8090223833, 175.5446570333, '1201'],
  [-37.8809561333, 175.5036574833, '35'],
  [-37.8085440167, 175.5454961667, '1210'],
  [-37.8413132, 175.5395747333, '773'],
  [-37.87539025, 175.5146704167, '1/138'],
  [-37.83847385, 175.54218775, '2/815'],
  [-37.87580405, 175.5118973167, '126'],
  [-37.86917495, 175.5157794167, '1/208'],
  [-37.8082772667, 175.5455867333, '1212'],
  [-37.8096694667, 175.5450804833, '1194'],
  [-37.8787073667, 175.5083375, '79'],
  [-37.8763409333, 175.51340955, '3/110'],
  [-37.8080369167, 175.5450349667, '1213'],
  [-37.8093666167, 175.5451384833, '1196'],
  [-37.82245505, 175.5477440333, '1047'],
  [-37.8775422667, 175.5104792, '2/103'],
  [-37.8236463333, 175.5474525, '1033'],
  [-37.8814960667, 175.50479415, '33'],
  [-37.8245330667, 175.5471272667, '1023'],
  [-37.8403625, 175.5402170167, '1/809'],
  [-37.8678366667, 175.5195366167, '254'],
  [-37.8790242333, 175.5103504333, '4/88'],
  [-37.8218208, 175.5477814333, '1049'],
  [-37.8789700833, 175.5084782833, '77/1'],
  [-37.8704926333, 175.5137601667, '188'],
  [-37.87878565, 175.5106821667, '3/88'],
  [-37.871913, 175.5121444333, '163'],
  [-37.87933595, 175.5101975333, '6/88'],
  [-37.8748227833, 175.5121225, '136'],
  [-37.87947495, 175.5108712167, '5/88'],
  [-37.8753615167, 175.5127019833, '132'],
  [-37.8109761333, 175.5426080167, '1181'],
  [-37.8773393667, 175.5116264833, '104'],
  [-37.8370667667, 175.5458885833, '879'],
  [-37.8765559833, 175.5101962833, '103'],
  [-37.8253379167, 175.5472683, '989'],
  [-37.8793315833, 175.5086546167, '77'],
  [-37.8661602, 175.52487915, '316'],
  [-37.8776637333, 175.50929225, '3/103'],
  [-37.8092819667, 175.5456565833, '2/1200'],
  [-37.87534805, 175.5120049833, '128'],
  [-37.81204605, 175.5446423333, '1169'],
  [-37.8752625833, 175.5140794833, '138'],
  [-37.8766464333, 175.5134206667, '4/110'],
  [-37.8770230167, 175.5108992333, '113'],
  [-37.8406207, 175.5394538167, '2/809'],
  [-37.8770699833, 175.5116503167, '106'],
  [-37.8122078667, 175.5440270833, '1165'],
  [-37.87518925, 175.5112472667, '129'],
  [-37.8507412333, 175.5347013833, '633'],
  [-37.8759461833, 175.5110732833, '117'],
  [-37.8210931833, 175.5477387333, '1055'],
  [-37.87555235, 175.5111759667, '127'],
  [-37.8180744833, 175.5471867333, '1092'],
  [-37.8761638, 175.5118200833, '120'],
  [-37.8714445, 175.5188348833, '2/208'],
  [-37.8738533, 175.5117649, '141'],
  [-37.8083899, 175.5443001833, '1209'],
  [-37.8672468667, 175.5243000167, '295'],
  [-37.8395333333, 175.54262905, '1/815'],
  [-37.8093977833, 175.5456164833, '1/1200'],
  [-37.86778915, 175.5240579167, '290'],
  [-37.8151683, 175.5450954333, '1133'],
  [-37.8676913333, 175.5179285833, '235'],
  [-37.87977015, 175.5090145833, '66'],
  [-37.8785379333, 175.5043763, '1/39'],
  [-37.8764341333, 175.51407215, '5/110'],
  [-37.8740516, 175.5125295667, '146'],
  [-37.87401495, 175.47760185, '16'],
  [-37.8739528333, 175.4764705667, '31'],
  [-37.8739846167, 175.4768385667, '33'],
  [-37.8748585167, 175.4767720333, '11'],
  [-37.8736880333, 175.4772042167, '37'],
  [-37.8747492333, 175.4769483667, '9'],
  [-37.87503235, 175.4775088667, '3'],
  [-37.87489515, 175.4779213833, '6'],
  [-37.8748158667, 175.4774378, '5'],
  [-37.8750760667, 175.4779026, '4'],
  [-37.8746501167, 175.4773401167, '7'],
  [-37.8741460667, 175.4765724167, '27'],
  [-37.8739166167, 175.477184, '35'],
  [-37.8741975833, 175.47717515, '23'],
  [-37.8738094, 175.47760075, '18'],
  [-37.8749257833, 175.4765688833, '13'],
  [-37.8741402667, 175.4763856, '29'],
  [-37.8742506833, 175.4775977, '14'],
  [-37.8741505, 175.47681925, '25'],
  [-37.8747261167, 175.4778583667, '8'],
  [-37.8745555, 175.4777541667, '10'],
  [-37.8743982667, 175.4777232, '12'],
  [-37.87440735, 175.4772111833, '21'],
  [-37.8745958667, 175.47674675, '19'],
  [-37.8747628333, 175.47645865, '15'],
  [-37.8745715333, 175.4764928667, '17'],
  [-37.9116880667, 175.4711713833, '3'],
  [-37.9116604333, 175.4715114333, '1'],
  [-37.9118500667, 175.4714183, '5'],
  [-37.9122240667, 175.4713923, '11'],
  [-37.9118788833, 175.4710693167, '7'],
  [-37.9123174667, 175.4714676167, '10'],
  [-37.91227905, 175.4716167167, '8'],
  [-37.9117270667, 175.4718080667, '2'],
  [-37.91205, 175.4713633167, '9'],
  [-37.912161, 175.4717712, '6'],
  [-37.8859179333, 175.4582119667, '1'],
  [-37.8865885333, 175.4581321667, '6A'],
  [-37.88640305, 175.45807455, '6'],
  [-37.8860451667, 175.4578916833, '4D'],
  [-37.8863091167, 175.45790615, '5'],
  [-37.8861527, 175.4579021833, '4A'],
  [-37.8859058833, 175.4578780333, '3'],
  [-37.8861333333, 175.4577295167, '4B'],
  [-37.8859079333, 175.45834695, '1A'],
  [-37.8861985, 175.4582370667, '7'],
  [-37.8860742333, 175.4577260833, '4C'],
  [-37.8858135, 175.4580266333, '2'],
  [-37.8856798, 175.4576616167, '3B'],
  [-37.8857954333, 175.45773405, '3A'],
  [-37.8039755167, 175.3924264333, '588'],
  [-37.8024268333, 175.3891336167, '555'],
  [-37.80621375, 175.3790952, '476A'],
  [-37.8035793667, 175.3898201333, '565'],
  [-37.8041731333, 175.3674844, '348'],
  [-37.8035751833, 175.38904805, '559'],
  [-37.8013125167, 175.390194, '569A'],
  [-37.8039518333, 175.3880558333, '550'],
  [-37.7993036333, 175.3774681, '447B'],
  [-37.80163095, 175.39138825, '577'],
  [-37.8035939833, 175.3922268667, '583'],
  [-37.8034719167, 175.3864473333, '535A'],
  [-37.80612815, 175.3786574833, '476C'],
  [-37.80604375, 175.3653441833, '320'],
  [-37.8030940833, 175.3837668333, '515'],
  [-37.8017065167, 175.37966555, '471'],
  [-37.8032808167, 175.3824573833, '496C'],
  [-37.8023511333, 175.3675479833, '361'],
  [-37.8029974167, 175.38875325, '553B'],
  [-37.8013158, 175.3713298333, '400'],
  [-37.8069269167, 175.38494245, '522A'],
  [-37.8041518333, 175.3666512333, '342'],
  [-37.8035926, 175.3904181, '569B'],
  [-37.8022781333, 175.3782524667, '450A'],
  [-37.8010726667, 175.3710681167, '395'],
  [-37.80130715, 175.37668905, '445'],
  [-37.8010362667, 175.3712212667, '399'],
  [-37.8032196333, 175.36794415, '358'],
  [-37.80095265, 175.3727210333, '409'],
  [-37.8021615667, 175.3808655833, '481B'],
  [-37.80149165, 175.3733540167, '418'],
  [-37.8010327833, 175.3739455167, '419'],
  [-37.8037261333, 175.3859318333, '530'],
  [-37.8019531333, 175.36978095, '382'],
  [-37.8035854333, 175.3674296167, '352'],
  [-37.8035820667, 175.3681635, '358B'],
  [-37.8044532833, 175.3898220167, '562A'],
  [-37.8030543167, 175.3681729333, '360'],
  [-37.80023085, 175.3753558333, '429B'],
  [-37.8029366333, 175.3683441833, '362'],
  [-37.8046987, 175.38796795, '548'],
  [-37.80282455, 175.3684962, '364'],
  [-37.8016347167, 175.3738360667, '420'],
  [-37.8031052333, 175.3689649333, '366'],
  [-37.8026689, 175.3687241167, '368'],
  [-37.8025527333, 175.3689042333, '370'],
  [-37.8037381333, 175.3672040667, '350B'],
  [-37.8015959333, 175.37030475, '384'],
  [-37.8037429667, 175.3861631667, '532'],
  [-37.8056256, 175.3854121, '522D'],
  [-37.8074032833, 175.37890055, '476D'],
  [-37.8033627833, 175.3941313, '601'],
  [-37.8035645833, 175.3885777333, '553A'],
  [-37.8037265833, 175.3751864333, '438'],
  [-37.80393295, 175.3820938333, '496B'],
  [-37.8039961667, 175.3937407167, '600'],
  [-37.8016335, 175.3785741333, '455B'],
  [-37.8028840667, 175.3674978, '357'],
  [-37.8009541833, 175.3783785, '455C'],
  [-37.8061105, 175.3849712833, '518'],
  [-37.8041071, 175.3675672667, '350A'],
  [-37.8039732667, 175.3922047667, '586'],
  [-37.7970054833, 175.3806949833, '475B'],
  [-37.80154115, 175.3776200833, '455A'],
  [-37.7968634833, 175.3813122667, '475C'],
  [-37.8040230333, 175.3951761833, '610'],
  [-37.8004082667, 175.3807690333, '475D'],
  [-37.8020559, 175.3804593667, '481A'],
  [-37.8029026667, 175.3814678667, '490'],
  [-37.79877225, 175.3804673833, '475A'],
  [-37.8024990833, 175.3803016, '478'],
  [-37.80798195, 175.3848864167, '522B'],
  [-37.8032268667, 175.3820611833, '496A'],
  [-37.8039424333, 175.3900004667, '566'],
  [-37.8055885667, 175.3849529667, '508'],
  [-37.8039439833, 175.3902647333, '568'],
  [-37.8044673167, 175.3791537667, '476B'],
  [-37.8034701, 175.3861407833, '531'],
  [-37.80394855, 175.3905212833, '570'],
  [-37.8033434667, 175.3677650667, '356'],
  [-37.8039541167, 175.3897445, '564'],
  [-37.8044864833, 175.3894950833, '562B'],
  [-37.8023883667, 175.3792474, '468'],
  [-37.8037905667, 175.3868461833, '538'],
  [-37.80376065, 175.3848380167, '516'],
  [-37.8037788333, 175.3866195333, '536'],
  [-37.8013236667, 175.3867703833, '535B'],
  [-37.80376085, 175.3863884, '534'],
  [-37.8038128667, 175.38531645, '524'],
  [-37.8038359, 175.3875590667, '546'],
  [-37.8053126, 175.3651698, '328'],
  [-37.8038053833, 175.3870689, '540'],
  [-37.80589585, 175.3892222167, '560'],
  [-37.8035248667, 175.3876434167, '545'],
  [-37.8037198, 175.3949872, '609'],
  [-37.80381955, 175.38729175, '542'],
  [-37.8075598333, 175.3855587, '522C'],
  [-37.8039602167, 175.3917614333, '582'],
  [-37.80139505, 175.3727005667, '414'],
  [-37.8036690667, 175.3910398667, '575'],
  [-37.8039518833, 175.3910117167, '574'],
  [-37.80395405, 175.3914879333, '580'],
  [-37.8002672167, 175.3771908, '447A'],
  [-37.8039521833, 175.3907747167, '572'],
  [-37.8036402667, 175.3914460167, '579'],
  [-37.803952, 175.3912312333, '578'],
  [-37.8015263667, 175.3694650333, '383'],
  [-37.80400045, 175.3949203833, '608'],
  [-37.8039955333, 175.3935219167, '598'],
  [-37.8039738167, 175.3926465167, '590'],
  [-37.8034657167, 175.3675994, '354'],
  [-37.8039642833, 175.3919945, '584'],
  [-37.8039832667, 175.3932899167, '596'],
  [-37.7988289, 175.3754860833, '429C'],
  [-37.80369095, 175.3927310167, '591'],
  [-37.80233225, 175.3911433833, '571'],
  [-37.8039846667, 175.3930810833, '594'],
  [-37.8013068333, 175.37155805, '402'],
  [-37.80397775, 175.3928504167, '592'],
  [-37.8040068833, 175.3948069833, '608A'],
  [-37.8037325167, 175.3941101167, '603'],
  [-37.8021858833, 175.3685292167, '369'],
  [-37.8039958, 175.3939723167, '602'],
  [-37.8048039833, 175.3657911, '336'],
  [-37.80368355, 175.39362055, '599'],
  [-37.8039906833, 175.3668667833, '344'],
  [-37.8037408333, 175.39457725, '607'],
  [-37.8040022167, 175.3941957, '604'],
  [-37.80357305, 175.3683457167, '358A'],
  [-37.80400475, 175.3944321167, '606'],
  [-37.8037340667, 175.3943487167, '605'],
  [-37.8021156667, 175.3876556833, '543'],
  [-37.8012321, 175.3754553833, '429A'],
  [-37.8018551667, 175.3752511, '430'],
  [-37.8038677333, 175.3670357333, '346'],
  [-37.8037207167, 175.3857282667, '528'],
  [-37.89186715, 175.4802623167, '40'],
  [-37.8923304833, 175.4777135167, '13'],
  [-37.8929612833, 175.4756593333, '1'],
  [-37.8918642, 175.4800987833, '38'],
  [-37.8926700333, 175.4763031833, '5'],
  [-37.89194195, 175.47893395, '28A'],
  [-37.8924575833, 175.4767435167, '9'],
  [-37.8918917333, 175.47938125, '32'],
  [-37.8922351667, 175.4796796333, '27'],
  [-37.8916363333, 175.47957795, '34A'],
  [-37.8922002833, 175.48006775, '29'],
  [-37.8918962833, 175.4796114333, '34'],
  [-37.8923002333, 175.4783952667, '21'],
  [-37.89225505, 175.4790280833, '25'],
  [-37.8920123333, 175.4773945167, '10'],
  [-37.8919046167, 175.4791651833, '30'],
  [-37.89170475, 175.4789158833, '28B'],
  [-37.89166225, 175.4793545667, '32A'],
  [-37.8919418833, 175.4787236, '26'],
  [-37.89187395, 175.4798382833, '36'],
  [-37.89226945, 175.4788097167, '23'],
  [-37.8919833667, 175.47800955, '14'],
  [-37.88193185, 175.4866305833, '1'],
  [-37.8812478, 175.4878395, '20'],
  [-37.8819307, 175.48686775, '3'],
  [-37.8823734333, 175.4877629833, '8B'],
  [-37.8821842833, 175.48700355, '4'],
  [-37.8818976833, 175.4871309333, '5'],
  [-37.8821982333, 175.4867615167, '2'],
  [-37.8821772, 175.48722635, '6'],
  [-37.8809340667, 175.4875154, '24'],
  [-37.8815621333, 175.4870228333, '11B'],
  [-37.88080855, 175.4873367167, '26'],
  [-37.8810877167, 175.4876951, '22'],
  [-37.8806647833, 175.4872178, '25'],
  [-37.8815580667, 175.4875735333, '9'],
  [-37.88050695, 175.48709835, '23'],
  [-37.8823652833, 175.48799725, '10B'],
  [-37.8817490333, 175.4878626667, '12'],
  [-37.88214405, 175.4874454833, '8'],
  [-37.8816923833, 175.4878766167, '14'],
  [-37.8823520667, 175.4875880667, '8A'],
  [-37.8814424167, 175.48790665, '16'],
  [-37.8819485333, 175.48774405, '10'],
  [-37.8813723833, 175.4878899, '18'],
  [-37.8822010167, 175.4879131167, '10A'],
  [-37.8825377667, 175.48796795, '8C'],
  [-37.8808839, 175.4866251333, '17'],
  [-37.8807889, 175.4868384833, '19'],
  [-37.8806788833, 175.4869695333, '21'],
  [-37.8818035, 175.48743315, '7'],
  [-37.8810684667, 175.4871791, '13'],
  [-37.8809503667, 175.4869225, '15'],
  [-37.8812931167, 175.4874573167, '11'],
  [-37.8812351167, 175.4869114833, '13A'],
  [-37.8814375667, 175.4871747, '11A'],
  [-37.8813577333, 175.4869692333, '13B'],
  [-37.9359592833, 175.5576784333, '1/21'],
  [-37.9380472167, 175.5564234833, '20'],
  [-37.9388147833, 175.5583222333, '2/21'],
  [-37.9370746333, 175.55679275, '21'],
  [-37.9396807833, 175.5590516333, '4/21'],
  [-37.9321653667, 175.5586632333, '15'],
  [-37.93777925, 175.5607732333, '3/21'],
  [-37.93261665, 175.5577030167, '22'],
  [-37.9350610667, 175.5544772, '18'],
  [-37.9324680333, 175.55825425, '17'],
  [-37.93286725, 175.5580919667, '19'],
  [-37.9655341, 175.48344125, '228'],
  [-37.9662557833, 175.4823937167, '238'],
  [-37.9551121167, 175.4819800167, '74'],
  [-37.97145005, 175.4810869667, '298'],
  [-37.96511045, 175.4842071167, '226'],
  [-37.9597843, 175.4837558833, '1/144'],
  [-37.9542875333, 175.4787352833, '46'],
  [-37.96095, 175.4848569, '156'],
  [-37.9608395667, 175.4825922167, '144'],
  [-37.9665397, 175.4859805667, '227'],
  [-37.9546337667, 175.4780326167, '44'],
  [-37.9662588833, 175.48466365, '229'],
  [-37.9774811333, 175.4827824167, '367'],
  [-37.9532187667, 175.4778035833, '25'],
  [-37.9779600167, 175.4820124333, '380'],
  [-37.96688945, 175.4825700833, '244'],
  [-37.9724996333, 175.4816797, '317'],
  [-37.9551293333, 175.4882803333, '2/81'],
  [-37.9544212167, 175.4829611333, '79'],
  [-37.9552378333, 175.4835594, '3/81'],
  [-37.9551674833, 175.4873534333, '1/81'],
  [-37.8177678333, 175.36481165, '23'],
  [-37.8176856667, 175.36528815, '21'],
  [-37.81793065, 175.36431665, '24'],
  [-37.8188466, 175.3655251167, '13'],
  [-37.8183913167, 175.3654774833, '14'],
  [-37.8186506667, 175.3663757833, '8'],
  [-37.9091586833, 175.4806199667, '8'],
  [-37.9097846667, 175.4804238833, '5'],
  [-37.9095970833, 175.4803937333, '6'],
  [-37.90949585, 175.48088805, '2'],
  [-37.9097125667, 175.4807851667, '3'],
  [-37.9090767333, 175.4810419167, '1'],
  [-37.9098378, 175.4806015167, '4'],
  [-37.9094125333, 175.48047265, '7'],
  [-37.8987957167, 175.4867648167, '4'],
  [-37.8993040833, 175.48608325, '13A'],
  [-37.8986618667, 175.4863548, '3'],
  [-37.8990157167, 175.4866799667, '8'],
  [-37.8988486167, 175.48625515, '11'],
  [-37.89940275, 175.48652375, '12'],
  [-37.8990940333, 175.4857358333, '15'],
  [-37.8994477, 175.4860294167, '13'],
  [-37.8984905333, 175.4864897167, '1'],
  [-37.8910458667, 175.4604486167, '4A'],
  [-37.8909012833, 175.4603024667, '1'],
  [-37.8912700667, 175.4604892667, '4B'],
  [-37.8909202167, 175.4608893333, '3C'],
  [-37.8912779333, 175.4605982333, '4C'],
  [-37.8909172, 175.4610096, '3D'],
  [-37.8910309833, 175.46058295, '4D'],
  [-37.8909275167, 175.4607770667, '3B'],
  [-37.8908830667, 175.46040695, '2'],
  [-37.8907294667, 175.4603703, '2B'],
  [-37.8909360167, 175.4606728333, '3A'],
  [-37.8910318, 175.46011345, '5'],
  [-37.9038995167, 175.4740167833, '1'],
  [-37.9040010833, 175.4744881, '3'],
  [-37.9039700667, 175.4742456667, '2'],
  [-37.9041160333, 175.4738995667, '9'],
  [-37.9042205, 175.4746609667, '5'],
  [-37.90408835, 175.4746666167, '4'],
  [-37.9043300333, 175.4745611833, '6'],
  [-37.9042862667, 175.47435, '7'],
  [-37.9041895, 175.4741327333, '8'],
  [-37.8412972333, 175.51498905, '2/370'],
  [-37.85380915, 175.5048969, '197'],
  [-37.8393792167, 175.5185004833, '4/370'],
  [-37.8356004, 175.5155473833, '1/446'],
  [-37.8516975167, 175.5088596333, '230'],
  [-37.83493705, 175.5162245, '2/446'],
  [-37.8630868833, 175.5013258667, '77'],
  [-37.8341336333, 175.5147212667, '454'],
  [-37.8317585167, 175.511789, '495'],
  [-37.8378645667, 175.51179665, '422'],
  [-37.8482979667, 175.5057717167, '2/277'],
  [-37.8384529, 175.5107566, '1/413'],
  [-37.8543168833, 175.5057733167, '200'],
  [-37.8382859, 175.51004915, '2/413'],
  [-37.8302591667, 175.51099635, '520'],
  [-37.8430264833, 175.5117441667, '361'],
  [-37.8569890167, 175.50014995, '145'],
  [-37.8546612333, 175.51046255, '4/210'],
  [-37.8291138167, 175.5100652833, '537'],
  [-37.8644712, 175.5010749167, '57'],
  [-37.8537165667, 175.5061015667, '1/210'],
  [-37.8561494333, 175.5002218833, '151'],
  [-37.8531273167, 175.50591205, '207'],
  [-37.8661337333, 175.50044185, '39'],
  [-37.8572501333, 175.50068855, '142'],
  [-37.86749845, 175.4999983667, '31'],
  [-37.8311046167, 175.5124198667, '504'],
  [-37.8610681167, 175.5009140667, '99'],
  [-37.86009745, 175.5013829333, '110'],
  [-37.8635882333, 175.5025296333, '2/72'],
  [-37.8381455333, 175.5095623833, '415'],
  [-37.86345265, 175.5022295333, '1/72'],
  [-37.8535591333, 175.5063429, '3/210'],
  [-37.8428438667, 175.5239404333, '8/370'],
  [-37.8425296667, 175.5133880833, '1/370'],
  [-37.8415704667, 175.5230515333, '7/370'],
  [-37.8607450167, 175.5008543833, '101'],
  [-37.8402798167, 175.5220041667, '6/370'],
  [-37.8540611833, 175.5052768833, '198'],
  [-37.8457524833, 175.5094666, '314'],
  [-37.8379597667, 175.51065885, '417'],
  [-37.83947605, 175.5206863, '5/370'],
  [-37.8301105, 175.5103759, '521'],
  [-37.84097385, 175.5217665167, '9/370'],
  [-37.8408829167, 175.5157633333, '3/370'],
  [-37.8540650833, 175.5067036667, '2/210'],
  [-37.8541100167, 175.5042267333, '191'],
  [-37.8426532167, 175.5117339667, '365'],
  [-37.8483104167, 175.50609355, '1/277'],
  [-37.8610126167, 175.5014974, '98'],
  [-37.8409556, 175.5110372667, '383'],
  [-37.8563855167, 175.4999012333, '149'],
  [-37.8591389167, 175.5012515167, '118'],
  [-37.8622922667, 175.5017081, '86'],
  [-37.8279955333, 175.5107170333, '548'],
  [-37.8293633667, 175.5100288667, '535'],
  [-37.87412315, 175.36871325, '20'],
  [-37.8741985167, 175.3678984333, '25'],
  [-37.8744552833, 175.36791385, '23'],
  [-37.82354435, 175.3645601333, '31'],
  [-37.81426245, 175.3697857667, '140B'],
  [-37.8249820167, 175.36436295, '18A'],
  [-37.8247545333, 175.3644630667, '18B'],
  [-37.8196718, 175.3690864167, '74B'],
  [-37.8141992167, 175.3685047667, '140D'],
  [-37.8202965167, 175.3688420833, '74C'],
  [-37.8180317333, 175.3670563833, '97'],
  [-37.8166606, 175.3680389833, '116'],
  [-37.81378495, 175.3674693667, '143'],
  [-37.8140329833, 175.36750105, '141'],
  [-37.8230129333, 175.36477085, '33'],
  [-37.8181065333, 175.367528, '96A'],
  [-37.822355, 175.3651528333, '43'],
  [-37.8207430167, 175.37001735, '72'],
  [-37.8175852333, 175.36768535, '104'],
  [-37.8240652167, 175.3643383167, '25'],
  [-37.8208649167, 175.3708165167, '72C'],
  [-37.8158759333, 175.3699935167, '124A'],
  [-37.81611735, 175.3726213833, '124D'],
  [-37.8141102833, 175.3710208167, '140E'],
  [-37.8158552833, 175.3725671, '126C'],
  [-37.8172870667, 175.3672759333, '105'],
  [-37.8149043167, 175.3680942, '126A'],
  [-37.8156860667, 175.3714600667, '126B'],
  [-37.82234555, 175.3676551167, '58C'],
  [-37.8229201, 175.3663306333, '42B'],
  [-37.8217244667, 175.36615365, '56'],
  [-37.82168065, 175.3671740333, '58A'],
  [-37.8226533, 175.3656960667, '42A'],
  [-37.81969495, 175.3671185, '74A'],
  [-37.8139910833, 175.3680670333, '142'],
  [-37.8222810667, 175.36812165, '58B'],
  [-37.8160942833, 175.3717498333, '124C'],
  [-37.8210101167, 175.3697359333, '72D'],
  [-37.8199424667, 175.3700336667, '72A'],
  [-37.8162840333, 175.36763115, '115'],
  [-37.8169082, 175.3674243667, '109'],
  [-37.8231334167, 175.3666729833, '42C'],
  [-37.8211535833, 175.3664307, '66'],
  [-37.8159958, 175.3710006, '124B'],
  [-37.8230926333, 175.3654223667, '40'],
  [-37.8142580167, 175.3692795333, '140C'],
  [-37.8184104667, 175.3677529833, '96B'],
  [-37.8232137667, 175.3664941667, '42D'],
  [-37.8238653167, 175.3649438333, '30'],
  [-37.8210668833, 175.3659746167, '59'],
  [-37.8204322833, 175.3668945833, '70'],
  [-37.8141750667, 175.3703629167, '140A'],
  [-37.8203761167, 175.3663, '69'],
  [-37.8190875, 175.3666263, '83'],
  [-37.8206303833, 175.37079745, '72B'],
  [-37.8159921167, 175.36829495, '120'],
  [-37.8702900833, 175.4823576, '129'],
  [-37.8691575833, 175.4875552167, '174'],
  [-37.8752810167, 175.4785701333, '29'],
  [-37.8739353333, 175.4787035333, '71'],
  [-37.8694349833, 175.4853619333, '150'],
  [-37.86819925, 175.4904272667, '203'],
  [-37.8739757333, 175.4791716, '36'],
  [-37.8743164833, 175.47849545, '69'],
  [-37.8764327833, 175.4784211167, '18'],
  [-37.8772371, 175.47724965, '11'],
  [-37.8711581167, 175.4812798, '99'],
  [-37.8774015333, 175.4771253167, '9'],
  [-37.8747281, 175.4786202833, '35'],
  [-37.8769075, 175.47753225, '15'],
  [-37.8764091, 175.4779333667, '21'],
  [-37.8751066833, 175.47903655, '28'],
  [-37.8755713333, 175.4789569333, '24'],
  [-37.8767426833, 175.4776735667, '17'],
  [-37.87754365, 175.4769945167, '7'],
  [-37.8749176, 175.4790524, '30'],
  [-37.86789545, 175.4922832833, '215'],
  [-37.8762449333, 175.4780463833, '23'],
  [-37.8746104333, 175.4786632333, '37'],
  [-37.87535045, 175.4789887, '26'],
  [-37.8690190833, 175.4889257667, '188'],
  [-37.8766569, 175.4782477833, '16'],
  [-37.8777791667, 175.4743660833, '3F'],
  [-37.8760992833, 175.4781375667, '25'],
  [-37.8735414833, 175.4792975667, '40'],
  [-37.8749123833, 175.4786099333, '33'],
  [-37.8778868667, 175.4755309333, '3B'],
  [-37.8757382667, 175.4789290833, '22'],
  [-37.8690839, 175.4882992333, '182'],
  [-37.8778719167, 175.4752090167, '3C'],
  [-37.8692440333, 175.487114, '168'],
  [-37.87786735, 175.4759980333, '3A'],
  [-37.8750885833, 175.4785857167, '31'],
  [-37.8778593, 175.4767417, '1'],
  [-37.8770541, 175.4774016167, '13'],
  [-37.8693264333, 175.4864033167, '160'],
  [-37.8776720667, 175.47687455, '5'],
  [-37.87418305, 175.4791450333, '34'],
  [-37.8772782167, 175.4778079333, '12'],
  [-37.8694907, 175.48387845, '139'],
  [-37.8737682833, 175.4792036833, '38'],
  [-37.8780202167, 175.4743749, '3E'],
  [-37.87657365, 175.4778033833, '19'],
  [-37.8769227, 175.4780192833, '14'],
  [-37.8778372, 175.4747625833, '3D'],
  [-37.9058634167, 175.4818391833, '11'],
  [-37.90651765, 175.4816564, '7'],
  [-37.90600205, 175.4817922833, '10'],
  [-37.9065382667, 175.4819836667, '6'],
  [-37.9064549667, 175.48231495, '4'],
  [-37.9065751, 175.4821868667, '5'],
  [-37.9062895, 175.4822382667, '3'],
  [-37.9061909, 175.4817668, '9'],
  [-37.9058636333, 175.4821877667, '1'],
  [-37.90609375, 175.48208955, '2'],
  [-37.9063477667, 175.4818540833, '8'],
  [-37.9028285, 175.4830620667, '10'],
  [-37.9033403333, 175.4828242833, '4'],
  [-37.9026557833, 175.4836036833, '11'],
  [-37.9026651667, 175.4831392167, '12'],
  [-37.9024793, 175.4836898833, '13'],
  [-37.9024864833, 175.4832286333, '14'],
  [-37.9022771167, 175.4837931167, '15'],
  [-37.9023275333, 175.48331475, '16'],
  [-37.9021481167, 175.4833864333, '18'],
  [-37.9034164167, 175.48324155, '3'],
  [-37.9020819667, 175.4837508833, '17'],
  [-37.9032251, 175.4833323833, '5'],
  [-37.9031833833, 175.4829241667, '6'],
  [-37.9030398667, 175.4834288667, '7'],
  [-37.9030060333, 175.4827531167, '8A'],
  [-37.90303195, 175.4830065, '8'],
  [-37.90285465, 175.48352545, '9'],
  [-37.9030180333, 175.4855010667, '50'],
  [-37.90297345, 175.4847805333, '52'],
  [-37.90302055, 175.4852138333, '50A'],
  [-37.9006098833, 175.4854521833, '33'],
  [-37.9029307667, 175.485268, '48'],
  [-37.9014686667, 175.48551475, '36'],
  [-37.9017719833, 175.4853557833, '40'],
  [-37.9016177667, 175.4854306833, '38'],
  [-37.9023493667, 175.48468465, '47'],
  [-37.9027064667, 175.4842364667, '51A'],
  [-37.9019256667, 175.4852900333, '42'],
  [-37.9016388667, 175.4849819167, '41'],
  [-37.9014681667, 175.485061, '39'],
  [-37.9033233167, 175.48461845, '56'],
  [-37.9037893833, 175.4839462667, '63'],
  [-37.9031498833, 175.4846976667, '54'],
  [-37.9026018, 175.48495995, '44'],
  [-37.9030769833, 175.4842938, '55'],
  [-37.9027864167, 175.4848613, '46'],
  [-37.9037959667, 175.4843982667, '62'],
  [-37.90251565, 175.4845560333, '49'],
  [-37.9039613167, 175.4843144, '64'],
  [-37.9027125667, 175.4844694167, '51'],
  [-37.9034637167, 175.4841226, '59'],
  [-37.9028946833, 175.4843869, '53'],
  [-37.9036489333, 175.4840298833, '61'],
  [-37.90327315, 175.4842082833, '57'],
  [-37.90046945, 175.4855198667, '29'],
  [-37.9010344833, 175.4856939833, '34'],
  [-37.9013283667, 175.4851346333, '37'],
  [-37.9017672167, 175.4849186, '43'],
  [-37.8611247, 175.4102509167, '175'],
  [-37.8499004667, 175.4102191667, '47'],
  [-37.86802365, 175.4100161, '251'],
  [-37.8527479167, 175.4097375667, '82'],
  [-37.84663775, 175.41026955, '13'],
  [-37.8556193, 175.4102112167, '113'],
  [-37.8623374833, 175.4096021667, '188'],
  [-37.8570313833, 175.4097304667, '128'],
  [-37.8508672833, 175.4096890333, '58'],
  [-37.8633539667, 175.4102016833, '197'],
  [-37.8624295167, 175.4113314833, '187'],
  [-37.8643999167, 175.4142555167, '211A'],
  [-37.8674836667, 175.4109264333, '245A'],
  [-37.8645949333, 175.4142231333, '211B'],
  [-37.863722, 175.4116543667, '203'],
  [-37.8652689, 175.4102405667, '217'],
  [-37.8674028167, 175.4119272333, '245B'],
  [-37.8688986, 175.4071594333, '283'],
  [-37.8626189667, 175.4102669333, '191'],
  [-37.86890705, 175.4066821333, '285'],
  [-37.8638613833, 175.4102196333, '205'],
  [-37.8520415333, 175.4096858833, '74'],
  [-37.85366185, 175.4103740333, '91'],
  [-37.8541498167, 175.4102157, '99'],
  [-37.8481882167, 175.4096517333, '32'],
  [-37.8998180833, 175.4671585833, '1'],
  [-37.8994876333, 175.46689395, '4'],
  [-37.8995568833, 175.4671854, '2'],
  [-37.89982245, 175.4669492, '3'],
  [-37.8997823167, 175.4667780333, '5'],
  [-37.8993499, 175.4665456333, '6'],
  [-37.8994541, 175.4664421167, '8'],
  [-37.8996415, 175.4667272333, '7'],
  [-37.8916384833, 175.4630697, '40'],
  [-37.8913306, 175.4610441333, '24'],
  [-37.89161595, 175.4716677667, '133'],
  [-37.8914569167, 175.4754211833, '149'],
  [-37.89160835, 175.4718250167, '135'],
  [-37.89234715, 175.4585814667, '9'],
  [-37.8915247667, 175.4732450833, '137'],
  [-37.8916493667, 175.4628682, '36'],
  [-37.89127365, 175.4608001667, '1/20-3/20'],
  [-37.8922152167, 175.4605929667, '17'],
  [-37.89145415, 175.4607833333, '4/20-7/20'],
  [-37.8917261333, 175.4624021, '32'],
  [-37.8919335167, 175.45821125, '4C'],
  [-37.8922107833, 175.4609609833, '21'],
  [-37.8919453667, 175.4579664333, '4B'],
  [-37.8915077, 175.4658864333, '66'],
  [-37.8919506333, 175.4577320333, '4A'],
  [-37.8916613167, 175.4626608667, '34'],
  [-37.8919576833, 175.4575137, '2C'],
  [-37.89126035, 175.4701749167, '92'],
  [-37.8922950667, 175.4588386, '11'],
  [-37.8921412333, 175.4623956833, '31'],
  [-37.8918877167, 175.4588751167, '10'],
  [-37.8912372, 175.4708680333, '98'],
  [-37.8920993333, 175.4636887167, '43'],
  [-37.89223965, 175.4603451, '15'],
  [-37.8920777333, 175.4638900667, '43A'],
  [-37.89235135, 175.4580704, '5'],
  [-37.8916213667, 175.4634083333, '44'],
  [-37.8913535, 175.4751499333, '147'],
  [-37.8911645667, 175.4634580167, '46'],
  [-37.89154565, 175.460355, '16A'],
  [-37.8916286667, 175.4636265667, '48'],
  [-37.8914890667, 175.4661530833, '68'],
  [-37.8916243333, 175.46377045, '50A'],
  [-37.8921945667, 175.4613726833, '25'],
  [-37.8916212333, 175.4638566667, '50'],
  [-37.8917585833, 175.4617233333, '28'],
  [-37.8916201, 175.4640203, '52'],
  [-37.89219925, 175.46119465, '23'],
  [-37.891597, 175.46425765, '54'],
  [-37.8918353, 175.46017655, '14'],
  [-37.8919748667, 175.4649644667, '53'],
  [-37.8917905667, 175.4608055333, '22'],
  [-37.89131955, 175.4756406, '153'],
  [-37.8923704333, 175.4576240833, '3'],
  [-37.8905614333, 175.4758690167, '154'],
  [-37.8916816167, 175.4707503, '97'],
  [-37.8913018667, 175.4759012333, '155'],
  [-37.89253265, 175.4612154167, '23B'],
  [-37.8909466833, 175.4760167333, '156'],
  [-37.8920906167, 175.4634921, '41'],
  [-37.8912217, 175.4774480833, '165'],
  [-37.8921237833, 175.46277795, '35'],
  [-37.8908697333, 175.477294, '162'],
  [-37.8920948667, 175.4632665833, '39'],
  [-37.8912003333, 175.47770905, '167'],
  [-37.8914414833, 175.4678414, '76'],
  [-37.8908453833, 175.4777106667, '168'],
  [-37.8912160667, 175.4629456833, '38'],
  [-37.8911874, 175.4779408167, '169'],
  [-37.8919186333, 175.4584176833, '6'],
  [-37.89118215, 175.4781761167, '171'],
  [-37.8916446833, 175.4632172667, '42'],
  [-37.8911654333, 175.4784059833, '173'],
  [-37.8918217333, 175.4603906, '16'],
  [-37.8911525333, 175.47862755, '175'],
  [-37.8924511333, 175.4606313, '17B'],
  [-37.8907954, 175.4784089, '176'],
  [-37.8915381333, 175.46524225, '58'],
  [-37.8911355667, 175.478864, '177'],
  [-37.892167, 175.4617876833, '29'],
  [-37.8911190667, 175.4790793167, '179'],
  [-37.89148925, 175.47413605, '141'],
  [-37.891102, 175.4793148833, '181'],
  [-37.89174025, 175.4622023, '30'],
  [-37.8910930167, 175.4795416333, '183'],
  [-37.8923048, 175.4605938667, '17A'],
  [-37.8907614, 175.4793265833, '184'],
  [-37.8919164833, 175.45868485, '8'],
  [-37.89108015, 175.4797723833, '185'],
  [-37.8905659667, 175.4757830667, '152'],
  [-37.8910595667, 175.4800169167, '187'],
  [-37.8923372333, 175.4582542, '7'],
  [-37.8917307333, 175.46930505, '83'],
  [-37.8909663333, 175.4756883833, '150'],
  [-37.8909111167, 175.47660485, '160'],
  [-37.8916525667, 175.47116215, '129'],
  [-37.8909366167, 175.4762755333, '158'],
  [-37.8911956, 175.4715676333, '104'],
  [-37.8915429, 175.4650714667, '56'],
  [-37.8916859833, 175.45866365, '8A'],
  [-37.8919523, 175.4651683833, '55'],
  [-37.8915248667, 175.4654342167, '60'],
  [-37.8917482, 175.4613051333, '26'],
  [-37.89101255, 175.4753879, '148'],
  [-37.8925110833, 175.4608349833, '19'],
  [-37.89179885, 175.4605882333, '18'],
  [-37.8918582667, 175.4680386, '79'],
  [-37.8921763167, 175.461584, '27'],
  [-37.8914747833, 175.4665362167, '70'],
  [-37.8923905833, 175.4611956167, '23A'],
  [-37.8919975333, 175.4651655, '55A-55E'],
  [-37.8920026167, 175.45729865, '2B'],
  [-37.8920162667, 175.4570673, '2A'],
  [-37.8916384333, 175.4713722, '131'],
  [-37.8912288333, 175.4711408333, '102'],
  [-37.8915248167, 175.4656389833, '62'],
  [-37.8917611667, 175.46114545, '26A'],
  [-37.8921091, 175.4630288167, '37'],
  [-37.8209873167, 175.3760669333, '191C'],
  [-37.8249917, 175.3656036667, '91A'],
  [-37.8190006167, 175.3860204167, '254B'],
  [-37.818206, 175.38533, '254C'],
  [-37.8061591667, 175.3983436, '462'],
  [-37.8056489333, 175.3937574167, '423'],
  [-37.79713005, 175.40084965, '545'],
  [-37.79324805, 175.4048036667, '601'],
  [-37.8186617833, 175.3815952, '248A'],
  [-37.8090422833, 175.3906621333, '383B'],
  [-37.8183971667, 175.3818555667, '248B'],
  [-37.8027335833, 175.3963706167, '471'],
  [-37.8167087, 175.3801758333, '267D'],
  [-37.7975265333, 175.4015703333, '548'],
  [-37.8190651167, 175.3786646333, '229'],
  [-37.7903981, 175.4069922833, '639B'],
  [-37.8253436333, 175.3662536, '91B'],
  [-37.8085089, 175.3916918167, '406'],
  [-37.82507135, 175.36734685, '107A'],
  [-37.8243141667, 175.3677190167, '107B'],
  [-37.8240930167, 175.3684544333, '107C'],
  [-37.82428045, 175.3692349, '107D'],
  [-37.79320855, 175.4054745333, '606'],
  [-37.8210957833, 175.3758549, '191A'],
  [-37.8220672667, 175.3711244167, '155B'],
  [-37.7905658333, 175.40715725, '639A'],
  [-37.8219987167, 175.37182365, '155C'],
  [-37.79282425, 175.4050586, '605'],
  [-37.8217745833, 175.37222335, '155D'],
  [-37.80515685, 175.3938695, '437'],
  [-37.8076407333, 175.3900775, '397'],
  [-37.8237106, 175.3712966333, '131'],
  [-37.8015971, 175.3955181667, '479'],
  [-37.8227929, 175.3730921167, '157'],
  [-37.7961391167, 175.4003037, '549'],
  [-37.8233609833, 175.37310895, '152'],
  [-37.8219492667, 175.3745148667, '167'],
  [-37.8247903833, 175.3685883333, '109'],
  [-37.8248283, 175.3705193167, '126'],
  [-37.8109710333, 175.3856751167, '341'],
  [-37.82605485, 175.3651553667, '80'],
  [-37.8107359, 175.3894516833, '368'],
  [-37.8120085667, 175.3845064, '321'],
  [-37.8128636833, 175.38379265, '310'],
  [-37.81208235, 175.3843228, '319'],
  [-37.8046513333, 175.3956590833, '452'],
  [-37.8144067333, 175.3816008667, '275'],
  [-37.8102773, 175.3874213, '345B'],
  [-37.8144369, 175.38227185, '280'],
  [-37.8164895333, 175.3782892333, '267C'],
  [-37.8182382167, 175.3800216667, '240'],
  [-37.8173681833, 175.3806125, '248C'],
  [-37.8181792333, 175.3832736333, '254A'],
  [-37.8095723, 175.3899326833, '383A'],
  [-37.81761125, 175.3835261667, '254D'],
  [-37.8028805167, 175.3962506667, '469'],
  [-37.8185789, 175.3845444, '254'],
  [-37.8163547167, 175.3812859833, '258'],
  [-37.7930282167, 175.40572125, '608'],
  [-37.821138, 175.38039485, '216D'],
  [-37.81606355, 175.3793317167, '267B'],
  [-37.81934515, 175.3785087833, '225'],
  [-37.8050155667, 175.3943832667, '443A'],
  [-37.81861015, 175.379036, '235A'],
  [-37.8121421833, 175.3842917833, '317'],
  [-37.7913696833, 175.4063793, '623'],
  [-37.8205651167, 175.3768472333, '201'],
  [-37.8205108, 175.37795785, '212'],
  [-37.8231057, 175.3725295333, '155A'],
  [-37.8046846167, 175.3939956333, '443B'],
  [-37.7964915667, 175.40187745, '559'],
  [-37.80485815, 175.39453205, '443C'],
  [-37.8060723667, 175.3939798167, '428'],
  [-37.8047227, 175.3946713167, '445'],
  [-37.8048381667, 175.3949814667, '448'],
  [-37.8045786833, 175.3947850833, '449'],
  [-37.7981357, 175.3900883333, '461B'],
  [-37.8099047, 175.39060605, '388'],
  [-37.8043014333, 175.3950148, '453'],
  [-37.8043075833, 175.3954701167, '456'],
  [-37.79168895, 175.4068591833, '626'],
  [-37.8021525833, 175.39678165, '481'],
  [-37.8034197833, 175.39575665, '463'],
  [-37.8032362167, 175.3959217833, '467'],
  [-37.80216475, 175.3974925167, '484'],
  [-37.8203596833, 175.3755115833, '191B'],
  [-37.7993380667, 175.3999904667, '522'],
  [-37.8085763833, 175.3912222, '391'],
  [-37.7981168833, 175.4004628, '533'],
  [-37.7969743333, 175.4013795333, '553'],
  [-37.7970796333, 175.4021227667, '554'],
  [-37.7943688833, 175.4045175833, '590'],
  [-37.8073738833, 175.39222815, '419'],
  [-37.7955603667, 175.4027828667, '569'],
  [-37.8102608, 175.3842148333, '345A'],
  [-37.7958160167, 175.4031990833, '570'],
  [-37.7924329333, 175.4084768167, '630'],
  [-37.7956436833, 175.4033528333, '572'],
  [-37.7960458333, 175.4022678, '563'],
  [-37.8030297833, 175.3966600167, '472'],
  [-37.7963875, 175.4000470667, '547'],
  [-37.8052467, 175.39419005, '439'],
  [-37.8103165333, 175.38810555, '345C'],
  [-37.7987565833, 175.3998819167, '531A'],
  [-37.7982830833, 175.40023825, '531B'],
  [-37.79918855, 175.4000808833, '524'],
  [-37.7944693667, 175.4027557167, '577'],
  [-37.7950937833, 175.4031431333, '575'],
  [-37.7927918333, 175.4046828167, '603'],
  [-37.7947576333, 175.4034387833, '579'],
  [-37.8117228167, 175.38764085, '346B'],
  [-37.7911496667, 175.40664935, '629'],
  [-37.81588535, 175.3807131667, '267A'],
  [-37.7912028, 175.40724595, '634'],
  [-37.7908960167, 175.4074944, '638'],
  [-37.8108278167, 175.3873807333, '346A'],
  [-37.8109458667, 175.3868272333, '346'],
  [-37.8861902333, 175.4912457, '146'],
  [-37.8868429667, 175.4923818, '242'],
  [-37.8863162333, 175.4914635667, '150'],
  [-37.8866134167, 175.4930928167, '281'],
  [-37.8857069333, 175.49160115, '115'],
  [-37.88701045, 175.4928565167, '282'],
  [-37.8865745167, 175.4918085333, '196'],
  [-37.8847997667, 175.49160355, '1'],
  [-37.88530765, 175.49159645, '65'],
  [-37.8858858, 175.4924325333, '195'],
  [-37.88625505, 175.4922030167, '201'],
  [-37.8858815167, 175.49117815, '140'],
  [-37.8870972167, 175.4937585167, '370'],
  [-37.8871422667, 175.4932273333, '330'],
  [-37.8867199333, 175.4935654, '331'],
  [-37.88711285, 175.4670386167, '6'],
  [-37.8867336333, 175.4670516667, '3'],
  [-37.8867436833, 175.4669519, '1'],
  [-37.8869533833, 175.4669386667, '2'],
  [-37.8869398667, 175.46704125, '4'],
  [-37.8871175, 175.46692505, '5'],
  [-37.9008030333, 175.4861118167, '2'],
  [-37.90075285, 175.4859038833, '1'],
  [-37.9009336167, 175.4865805833, '4'],
  [-37.9008800167, 175.4863431167, '3'],
  [-37.90100455, 175.4868142, '5'],
  [-37.9014235667, 175.4873154667, '7B'],
  [-37.9010728, 175.4870406333, '6'],
  [-37.9012685833, 175.4873578833, '7A'],
  [-37.9011401833, 175.4872876833, '7'],
  [-37.8158733667, 175.37666665, '18A'],
  [-37.8161566833, 175.3760580333, '16'],
  [-37.8161400333, 175.3766246833, '18B'],
  [-37.81564025, 175.3760005833, '20'],
  [-37.9147940667, 175.4781293167, '2'],
  [-37.91445275, 175.477954, '5'],
  [-37.91432165, 175.4780204333, '7'],
  [-37.9142254833, 175.4781627667, '9'],
  [-37.9142594833, 175.4783362167, '11'],
  [-37.9140805833, 175.4785308167, '11A'],
  [-37.9141151333, 175.47861905, '10A'],
  [-37.91436635, 175.4784698833, '10'],
  [-37.9144396667, 175.4784653667, '8'],
  [-37.9147089667, 175.47783895, '1'],
  [-37.9145894, 175.4778914333, '3'],
  [-37.9146597833, 175.4781811833, '4'],
  [-37.9145286, 175.4783673833, '6'],
  [-37.9030873667, 175.47210575, '3'],
  [-37.9032704833, 175.472054, '5'],
  [-37.9032275333, 175.4724681, '4'],
  [-37.9029155167, 175.4722868333, '1'],
  [-37.9029878333, 175.4725947167, '2'],
  [-37.9033794333, 175.4723403167, '6'],
  [-37.9033877, 175.4721768833, '8'],
  [-37.9026622333, 175.5342312833, '2/60'],
  [-37.8962902167, 175.5377237833, '3/157'],
  [-37.9056577833, 175.5300138, '24'],
  [-37.8978118667, 175.53526435, '1/157'],
  [-37.9036869333, 175.5324068, '46'],
  [-37.8976678167, 175.5356030833, '2/157'],
  [-37.9025187, 175.53438235, '3/60'],
  [-37.8981575333, 175.5358635, '1/158'],
  [-37.9027801667, 175.5340282833, '1/60'],
  [-37.8979776333, 175.536204, '2/158'],
  [-37.9023776667, 175.5345600167, '4/60'],
  [-37.8853151833, 175.4743354167, '6'],
  [-37.8839096667, 175.4747028, '17'],
  [-37.8826408833, 175.4741236667, '44'],
  [-37.8835314167, 175.4746655333, '21'],
  [-37.88308945, 175.4737775333, '28'],
  [-37.8814453833, 175.4749238167, '41'],
  [-37.8829200333, 175.4741641167, '40'],
  [-37.8804728833, 175.4739323833, '66'],
  [-37.8824228667, 175.47455335, '33'],
  [-37.8849254333, 175.4748141333, '9'],
  [-37.8815074833, 175.4735321333, '54A'],
  [-37.8829310333, 175.4736918167, '38'],
  [-37.8836627167, 175.47426195, '20'],
  [-37.8818192, 175.4745435833, '35'],
  [-37.8816592833, 175.4740403, '48'],
  [-37.8816905333, 175.4745296167, '37'],
  [-37.8835084, 175.47420785, '22'],
  [-37.8810922833, 175.4739643833, '58'],
  [-37.8814526, 175.4737812167, '52'],
  [-37.8813118333, 175.4739949167, '56'],
  [-37.88347125, 175.4749025167, '21A'],
  [-37.88493785, 175.4743158, '10'],
  [-37.88273915, 175.4748604167, '29A'],
  [-37.8837637667, 175.4746886167, '19'],
  [-37.8833199667, 175.47417425, '24'],
  [-37.8838467, 175.4742672333, '18'],
  [-37.8833191167, 175.4746548333, '23'],
  [-37.8845514833, 175.4742861, '14'],
  [-37.8853397, 175.4748736833, '5'],
  [-37.8847559333, 175.4748089167, '11'],
  [-37.8829521167, 175.47379525, '36'],
  [-37.88450605, 175.4747736667, '13'],
  [-37.8851099333, 175.4747525667, '7'],
  [-37.8847199, 175.4743100333, '12'],
  [-37.8831416, 175.4741727333, '26'],
  [-37.8808951333, 175.47394745, '60'],
  [-37.8808293167, 175.4744251333, '49'],
  [-37.8806857667, 175.4739440333, '62'],
  [-37.8815219, 175.4745206667, '39'],
  [-37.88054725, 175.47393465, '64'],
  [-37.8851369667, 175.4743293333, '8'],
  [-37.8829415167, 175.4735765833, '34'],
  [-37.8813163167, 175.4745132667, '45'],
  [-37.8825621, 175.4745672, '31'],
  [-37.882743, 175.4745888, '29'],
  [-37.8849588833, 175.4740735333, '10A'],
  [-37.8830033833, 175.47362085, '32'],
  [-37.8814134833, 175.4735401, '54'],
  [-37.8829174167, 175.4746101833, '27'],
  [-37.881329, 175.4749196167, '43'],
  [-37.8818477833, 175.4741495167, '46'],
  [-37.8806645833, 175.474444, '51'],
  [-37.8835542, 175.4740686833, '22A'],
  [-37.8815817333, 175.4735421833, '54B'],
  [-37.8840175333, 175.4742836, '16'],
  [-37.8827733167, 175.4741382833, '42'],
  [-37.8831040167, 175.4746167333, '25'],
  [-37.88152945, 175.47402335, '50'],
  [-37.8810197, 175.4744641667, '47'],
  [-37.90035815, 175.4810595167, '6'],
  [-37.9004626167, 175.48148175, '5'],
  [-37.9004783333, 175.4807893167, '8'],
  [-37.90053035, 175.48110305, '10'],
  [-37.9001194333, 175.4813414167, '1'],
  [-37.9002854167, 175.4813794, '3'],
  [-37.9005929833, 175.4812279167, '12'],
  [-37.9005808667, 175.4813900667, '7'],
  [-37.90019795, 175.4810457333, '4'],
  [-37.9000177833, 175.4810738667, '2'],
  [-37.8970709833, 175.471412, '47'],
  [-37.8962267, 175.4699139833, '25'],
  [-37.8957546, 175.46976195, '14'],
  [-37.8960248333, 175.4695108167, '15'],
  [-37.8958360833, 175.4699171167, '16'],
  [-37.8960595667, 175.4695834167, '17'],
  [-37.8956411833, 175.46957925, '12'],
  [-37.8955700333, 175.46945925, '10'],
  [-37.8957725, 175.4690580833, '13'],
  [-37.8957180833, 175.4689838167, '11'],
  [-37.89593735, 175.4700870667, '18'],
  [-37.8960019667, 175.4702152333, '20'],
  [-37.8960897167, 175.4696367833, '21'],
  [-37.8960816667, 175.4703379833, '22'],
  [-37.8961728667, 175.4698312667, '23'],
  [-37.89611545, 175.4703987167, '24'],
  [-37.89616535, 175.4704619, '26'],
  [-37.8965143333, 175.4704345833, '31'],
  [-37.8965995, 175.4706005, '33'],
  [-37.8952596167, 175.46889415, '2'],
  [-37.8954856333, 175.4693051333, '8'],
  [-37.8953389167, 175.4690297167, '4'],
  [-37.8953875833, 175.469136, '6'],
  [-37.9194040167, 175.4783079, '10'],
  [-37.9197726333, 175.4782003, '12'],
  [-37.9194026167, 175.4796128167, '133'],
  [-37.9197761667, 175.47866625, '40'],
  [-37.9199951833, 175.4798155667, '148'],
  [-37.91981195, 175.47907645, '78'],
  [-37.9194262833, 175.4788171833, '59'],
  [-37.9196759333, 175.4798573833, '154'],
  [-37.9193148667, 175.48000435, '155'],
  [-37.9194418667, 175.479248, '95'],
  [-37.91985945, 175.47946575, '114'],
  [-37.8948282, 175.4632178833, '7'],
  [-37.8948541333, 175.4634539, '11'],
  [-37.8946653333, 175.46382725, '6A'],
  [-37.8942238167, 175.4629336667, '1A'],
  [-37.8942486167, 175.4635523667, '2'],
  [-37.8942641667, 175.4631693, '1'],
  [-37.8950186, 175.4640242, '8C'],
  [-37.8944589, 175.4631798333, '3'],
  [-37.8946294333, 175.4631902, '5'],
  [-37.89450815, 175.4635785333, '4'],
  [-37.8946479, 175.4635948, '6'],
  [-37.89498065, 175.4637099667, '8B'],
  [-37.8948863333, 175.4637035833, '8A'],
  [-37.89496985, 175.46325115, '9'],
  [-37.8947899667, 175.4637024167, '8'],
  [-37.89513905, 175.4640248667, '8D'],
  [-37.9428737167, 175.4654487167, '80'],
  [-37.9435976167, 175.4662367333, '85'],
  [-37.9406954, 175.4650713667, '60'],
  [-37.9443210167, 175.466494, '91'],
  [-37.9430113833, 175.4661685167, '79'],
  [-37.9423613, 175.4660200167, '73'],
  [-37.9217937167, 175.54130465, '1'],
  [-37.9214646833, 175.5409056667, '41'],
  [-37.9210630667, 175.5409307333, '86'],
  [-37.9211853667, 175.5410841, '66'],
  [-37.92096145, 175.5405598333, '83'],
  [-37.9206217333, 175.54086065, '133'],
  [-37.9216795, 175.5411416833, '21'],
  [-37.9213075167, 175.5412473167, '48'],
  [-37.9214208167, 175.54139905, '26'],
  [-37.9204421, 175.5405807833, '127'],
  [-37.8771340667, 175.4766456167, '17'],
  [-37.87582545, 175.4764970667, '2'],
  [-37.8772717167, 175.47651465, '19'],
  [-37.87616025, 175.47643495, '6'],
  [-37.87713215, 175.4761358333, '20'],
  [-37.8763702833, 175.4764765, '10'],
  [-37.8768617333, 175.4759845333, '18A'],
  [-37.87599415, 175.4764346167, '4'],
  [-37.8767086, 175.4760073, '18B'],
  [-37.8762125167, 175.4761083833, '8'],
  [-37.8771747, 175.4758428833, '22'],
  [-37.8774091, 175.4763950167, '21'],
  [-37.8764912333, 175.4760901, '18C'],
  [-37.8775394167, 175.47599195, '25'],
  [-37.8765312333, 175.47650495, '12'],
  [-37.8774804667, 175.47621635, '23'],
  [-37.8767157833, 175.4764832833, '14'],
  [-37.8776499, 175.4754748667, '26B'],
  [-37.8769073667, 175.4763486167, '16'],
  [-37.8774781667, 175.4755253167, '26A'],
  [-37.8769741333, 175.4767701, '15'],
  [-37.8761039, 175.4768351333, '3'],
  [-37.8767738333, 175.4768931333, '13'],
  [-37.8775332833, 175.4757816833, '27'],
  [-37.87661205, 175.4769204667, '11'],
  [-37.8773297333, 175.4756777167, '24'],
  [-37.8761442833, 175.47743145, '5B'],
  [-37.8761289667, 175.4772156167, '5A'],
  [-37.87642575, 175.47690055, '7'],
  [-37.87587225, 175.4768522667, '1'],
  [-37.8762655667, 175.4774301667, '5C'],
  [-37.8765258167, 175.4771421167, '9'],
  [-37.8775364167, 175.48049705, '9'],
  [-37.87721065, 175.48073405, '3'],
  [-37.8773645167, 175.48035315, '6'],
  [-37.8769231833, 175.4805237833, '2'],
  [-37.8776686, 175.4807239333, '7'],
  [-37.87711275, 175.4803929167, '4'],
  [-37.8774604167, 175.4807430667, '5'],
  [-37.87709625, 175.4808098667, '1'],
  [-37.8775519167, 175.48027995, '8'],
  [-37.8028734167, 175.5544968333, '64'],
  [-37.7908094, 175.55717225, '231'],
  [-37.8020794667, 175.5538755, '79'],
  [-37.8025875667, 175.5538326167, '73'],
  [-37.8788754667, 175.4246207833, '26'],
  [-37.8579076333, 175.423369, '257A'],
  [-37.8799908833, 175.4247353667, '14'],
  [-37.8576267333, 175.4217187, '257D'],
  [-37.8792310833, 175.4241302167, '21'],
  [-37.8560683833, 175.4248801833, '278'],
  [-37.8737989833, 175.42415875, '79'],
  [-37.8813433667, 175.42936065, '8/8'],
  [-37.8734102333, 175.4246495, '86'],
  [-37.8605645333, 175.42419905, '229'],
  [-37.8719786333, 175.4241769, '91'],
  [-37.8781270333, 175.4246374167, '34'],
  [-37.8720274833, 175.4248217833, '94'],
  [-37.8578687167, 175.4212873833, '257C'],
  [-37.87800375, 175.4263720167, '40'],
  [-37.8618965833, 175.4242119333, '213'],
  [-37.8801869167, 175.42773835, '1/8'],
  [-37.8779240167, 175.42463595, '36'],
  [-37.8743793333, 175.4246104667, '76'],
  [-37.8578661, 175.4218172, '257B'],
  [-37.8539269833, 175.4240546833, '293'],
  [-37.8767564, 175.4218264667, '49'],
  [-37.8598008833, 175.4242299667, '235'],
  [-37.8584386667, 175.42421145, '249'],
  [-37.8570034667, 175.4213275, '265'],
  [-37.8800888, 175.42631445, '10'],
  [-37.8771395667, 175.4240152, '43'],
  [-37.8781435167, 175.4240972, '33'],
  [-37.8767499333, 175.4247563, '52'],
  [-37.87567625, 175.42459055, '60'],
  [-37.8807013, 175.4246087167, '6'],
  [-37.8764337167, 175.42402455, '55'],
  [-37.8645742, 175.4242096833, '183'],
  [-37.88046835, 175.4241622833, '7'],
  [-37.8700695833, 175.4241415, '109'],
  [-37.87820565, 175.4227695333, '31'],
  [-37.86436995, 175.42472575, '184'],
  [-37.8712348833, 175.4199563167, '129'],
  [-37.8655708833, 175.4241920833, '163'],
  [-37.866108, 175.4247113333, '168'],
  [-37.85758825, 175.4248484667, '258'],
  [-37.8806747167, 175.4289119667, '3/8'],
  [-37.8808697333, 175.4291759167, '5/8'],
  [-37.8805498667, 175.4315314333, '7/8'],
  [-37.8805142333, 175.4283195667, '8'],
  [-37.8642561, 175.4211131, '185B'],
  [-37.8642016333, 175.4241768167, '185C'],
  [-37.8584019167, 175.4247333, '254'],
  [-37.8579075, 175.4247216333, '256'],
  [-37.85733205, 175.4242334, '261'],
  [-37.8572177833, 175.4231895, '263'],
  [-37.8643650167, 175.4220877667, '185A'],
  [-37.89998625, 175.4831132833, '33'],
  [-37.9028015, 175.4824331833, '62A'],
  [-37.9027069833, 175.4824823167, '60A'],
  [-37.8999237833, 175.48395105, '28'],
  [-37.8998797667, 175.4835940667, '30'],
  [-37.9000587333, 175.4835154167, '32'],
  [-37.9016412667, 175.48230395, '51'],
  [-37.901574, 175.4827421167, '52'],
  [-37.90194355, 175.4826111667, '54'],
  [-37.90215485, 175.4824878833, '56'],
  [-37.9003890667, 175.48224575, '41'],
  [-37.9005753833, 175.4833095667, '42'],
  [-37.9004801833, 175.4824322, '43'],
  [-37.90073175, 175.48323555, '44'],
  [-37.9007203833, 175.4827551667, '45'],
  [-37.9008984833, 175.4831199, '46'],
  [-37.9010707, 175.4830293333, '48'],
  [-37.9010407167, 175.4825866833, '49'],
  [-37.90236485, 175.4823782167, '58'],
  [-37.9025425, 175.4818774167, '59'],
  [-37.9025757167, 175.4822757667, '60'],
  [-37.9029402833, 175.4816723667, '61'],
  [-37.90278895, 175.4821800333, '62'],
  [-37.9031374667, 175.4822319333, '64A'],
  [-37.9030315833, 175.4820359667, '64'],
  [-37.9032178667, 175.4819789333, '66'],
  [-37.9019434, 175.48286115, '54A'],
  [-37.8818104333, 175.4707039833, '12'],
  [-37.8814851833, 175.4704820167, '9'],
  [-37.8810768333, 175.4699034, '5B'],
  [-37.8818488, 175.4702216, '1'],
  [-37.8816215667, 175.47092875, '11'],
  [-37.8816941833, 175.4701273667, '2'],
  [-37.8811842333, 175.4704525667, '7'],
  [-37.8813522667, 175.47002245, '4'],
  [-37.88194605, 175.4707180167, '13'],
  [-37.8813308, 175.4704956333, '8'],
  [-37.88115305, 175.4702513333, '6'],
  [-37.8811936167, 175.4700739, '5A'],
  [-37.8815373167, 175.4700831, '3'],
  [-37.8816521333, 175.4705540833, '10'],
  [-37.8088981167, 175.36906915, '77'],
  [-37.8088042833, 175.3655253833, '80'],
  [-37.8066999167, 175.3689073333, '52'],
  [-37.8042113, 175.3710341667, '21'],
  [-37.8035833, 175.3699288833, '17'],
  [-37.8043107833, 175.3697591667, '23'],
  [-37.8108776667, 175.3698460833, '87B'],
  [-37.8045451333, 175.3697163333, '25'],
  [-37.8104246167, 175.365628, '94B'],
  [-37.8047750833, 175.3692679333, '30'],
  [-37.80400095, 175.3716803333, '19B'],
  [-37.8025388833, 175.3693096833, '2'],
  [-37.8032552333, 175.3718025, '19A'],
  [-37.8027435333, 175.3695240333, '4'],
  [-37.8105842, 175.3663406667, '94A'],
  [-37.8028778167, 175.3696653833, '6'],
  [-37.8095059667, 175.37026555, '81'],
  [-37.8055475667, 175.3691296833, '36'],
  [-37.8101165833, 175.3695157, '87A'],
  [-37.8055532333, 175.3695431833, '41'],
  [-37.8068988, 175.3688744333, '54'],
  [-37.8059911667, 175.3690365333, '44'],
  [-37.8074588333, 175.36921695, '59'],
  [-37.8075005667, 175.3687474667, '60'],
  [-37.80836585, 175.3685797833, '64'],
  [-37.8060896833, 175.3724944167, '67A'],
  [-37.8079139, 175.3722770833, '67B'],
  [-37.8089385167, 175.3721465167, '67C'],
  [-37.81012905, 175.37175445, '67D'],
  [-37.8110090333, 175.3680073333, '96'],
  [-37.8103251, 175.3687031333, '89'],
  [-37.8101581667, 175.36820355, '88'],
  [-37.8097519333, 175.36879765, '85'],
  [-37.8084821, 175.37132025, '69'],
  [-37.8818073167, 175.4679643, '6'],
  [-37.8823003833, 175.4676866167, '1'],
  [-37.8818464333, 175.4675593, '5'],
  [-37.8822481333, 175.4679646833, '2'],
  [-37.8817913833, 175.4677682167, '7'],
  [-37.8821612333, 175.4674131167, '3A'],
  [-37.8821403, 175.46766325, '3'],
  [-37.8821458833, 175.4679535, '4'],
  [-37.9077193667, 175.4708605833, '32'],
  [-37.9105951, 175.4793621667, '98A'],
  [-37.9066916333, 175.4685963, '19'],
  [-37.9104376833, 175.4794448167, '98'],
  [-37.9064596833, 175.4678557333, '11'],
  [-37.9103041333, 175.479528, '100'],
  [-37.9090584167, 175.477976, '83'],
  [-37.9088679, 175.4779112, '81B'],
  [-37.90751235, 175.4701317833, '26'],
  [-37.9085779167, 175.4748978833, '57B'],
  [-37.9077844167, 175.4710735, '34'],
  [-37.9088840833, 175.4747589333, '60'],
  [-37.9063916833, 175.4676261333, '9'],
  [-37.9091791167, 175.47510015, '64A'],
  [-37.9090063, 175.4778273167, '81'],
  [-37.9094076667, 175.4749288167, '66'],
  [-37.9104649333, 175.4812665333, '111'],
  [-37.9094658167, 175.47513735, '66A'],
  [-37.9106371667, 175.4806045833, '108'],
  [-37.9085164667, 175.47469955, '57A'],
  [-37.9065306333, 175.4680931667, '13B'],
  [-37.90744655, 175.46992735, '24'],
  [-37.90669875, 175.4675042833, '10'],
  [-37.9063321167, 175.467451, '7'],
  [-37.9068232667, 175.4690555333, '23'],
  [-37.9064476333, 175.4682054167, '13A'],
  [-37.90728695, 175.4687101167, '20A'],
  [-37.90564665, 175.4665080833, '1B'],
  [-37.9095425167, 175.4780996, '87'],
  [-37.9055099333, 175.4665785667, '1C'],
  [-37.9064278333, 175.4685453667, '17'],
  [-37.9087755667, 175.4730346, '48A'],
  [-37.9092946833, 175.4772395333, '77'],
  [-37.9089289833, 175.4729708, '48B'],
  [-37.9070766, 175.4680242167, '14A'],
  [-37.9099299333, 175.4794760167, '97'],
  [-37.9060196667, 175.4664193167, '3'],
  [-37.9093701833, 175.4764340333, '78'],
  [-37.9088882, 175.4759446333, '71'],
  [-37.9071022833, 175.4688659833, '20'],
  [-37.9087805333, 175.4732292667, '50A'],
  [-37.9101438333, 175.4802177167, '103'],
  [-37.9100409167, 175.4805634167, '105A'],
  [-37.9103943, 175.4797851, '102'],
  [-37.9097405333, 175.4787679167, '95'],
  [-37.9093126667, 175.4762224667, '76'],
  [-37.9076596, 175.4706490167, '30'],
  [-37.9090636667, 175.4764674667, '75'],
  [-37.9091701167, 175.47836235, '89'],
  [-37.9089457333, 175.4761631167, '73'],
  [-37.9085522833, 175.4736826, '52'],
  [-37.9092411833, 175.4760100667, '74'],
  [-37.9079714833, 175.4729381333, '45'],
  [-37.9080979833, 175.4733453333, '49'],
  [-37.9069515333, 175.4683180833, '16'],
  [-37.9066421833, 175.4673182, '8'],
  [-37.90937045, 175.47757155, '79'],
  [-37.9081895333, 175.47364565, '51'],
  [-37.9086237333, 175.4750583333, '59'],
  [-37.9091840167, 175.4757918333, '72'],
  [-37.9087522333, 175.47547835, '63'],
  [-37.90689515, 175.46927105, '25'],
  [-37.9078795, 175.4713550833, '36'],
  [-37.9056039, 175.4664057333, '1A'],
  [-37.9106886833, 175.4808305833, '110'],
  [-37.9059434167, 175.4661582833, '1'],
  [-37.90686465, 175.4680447333, '14'],
  [-37.9100754167, 175.4799441333, '101'],
  [-37.9096307667, 175.4784052167, '93'],
  [-37.9103163333, 175.4807391667, '107'],
  [-37.9099907833, 175.47967445, '99'],
  [-37.9102545333, 175.4804980667, '105'],
  [-37.9067854667, 175.46778495, '12'],
  [-37.9087875, 175.4761555333, '73A'],
  [-37.9088226667, 175.4757288667, '69'],
  [-37.90860015, 175.4738656333, '54'],
  [-37.9084004667, 175.4731332667, '48'],
  [-37.9086524, 175.4734778333, '52A'],
  [-37.9070271167, 175.4685905333, '18'],
  [-37.9075912333, 175.47002045, '26A'],
  [-37.9089373833, 175.4749522333, '62'],
  [-37.90542545, 175.4648276667, '2'],
  [-37.9075973667, 175.4703872167, '28'],
  [-37.9084245, 175.4757077667, '65'],
  [-37.90912645, 175.4755800667, '70'],
  [-37.90927015, 175.4751967833, '68A'],
  [-37.9094690167, 175.4778629667, '85'],
  [-37.90713625, 175.4682970167, '16A'],
  [-37.9084881667, 175.4734576333, '50'],
  [-37.9071228167, 175.4684523333, '18A'],
  [-37.9066047833, 175.4683209, '15'],
  [-37.9086888833, 175.4752875667, '61'],
  [-37.9092166833, 175.4785048333, '91'],
  [-37.90675295, 175.4688188167, '21'],
  [-37.9089505167, 175.4731089667, '50B'],
  [-37.9090581667, 175.4753575833, '68'],
  [-37.9086879167, 175.47334805, '50C'],
  [-37.91039185, 175.48101575, '109'],
  [-37.9091127833, 175.4786399833, '91A'],
  [-37.90897975, 175.4751060667, '64'],
  [-37.8717186833, 175.4615598167, '102'],
  [-37.8620697167, 175.4558799667, '224'],
  [-37.8767515, 175.4619986833, '42'],
  [-37.8664140333, 175.4578848167, '168'],
  [-37.8778354833, 175.46234395, '32'],
  [-37.8624631167, 175.456142, '216'],
  [-37.8639001667, 175.4568719667, '194'],
  [-37.8719572167, 175.4602589, '100'],
  [-37.87530725, 175.46140325, '60'],
  [-37.86265385, 175.4563095333, '214'],
  [-37.8736987167, 175.46078595, '80'],
  [-37.8899623167, 175.4632323, '57A'],
  [-37.8891142333, 175.4571846167, '4'],
  [-37.8896277, 175.4633464833, '59'],
  [-37.88913275, 175.4644998167, '60'],
  [-37.8891977, 175.46335, '1/52'],
  [-37.8902417, 175.4604661, '25A'],
  [-37.8892224667, 175.4630494333, '50'],
  [-37.8904468333, 175.4604248, '25'],
  [-37.8899309167, 175.45755835, '7'],
  [-37.8893669667, 175.4601698, '26'],
  [-37.8891862667, 175.4573128833, '4B'],
  [-37.8897543167, 175.4603741167, '27A'],
  [-37.8895259333, 175.4573211667, '4A'],
  [-37.8899523167, 175.4603841667, '27B'],
  [-37.8887959333, 175.4610821833, '34'],
  [-37.8901048833, 175.4603943833, '27C'],
  [-37.8891028833, 175.4650312333, '64'],
  [-37.88868315, 175.4633466833, '52B'],
  [-37.8896881, 175.4624856667, '43'],
  [-37.8899772333, 175.46296325, '53'],
  [-37.8893557167, 175.4604985333, '28'],
  [-37.8887644667, 175.46359225, '54A'],
  [-37.8887913667, 175.46338915, '52A'],
  [-37.8891714, 175.4635651833, '54B'],
  [-37.8898920167, 175.4582737, '13'],
  [-37.8891619167, 175.46382635, '56'],
  [-37.8902644667, 175.4602963, '23B'],
  [-37.8903580333, 175.4578762167, '9A'],
  [-37.8895457333, 175.4571203833, '2'],
  [-37.8899171667, 175.4577745667, '9'],
  [-37.8891239833, 175.4610409833, '32'],
  [-37.8886105167, 175.4627844833, '48A'],
  [-37.8897850667, 175.4601521667, '23'],
  [-37.8885782833, 175.4630716, '48B'],
  [-37.8895879667, 175.4639701, '65'],
  [-37.88875245, 175.4628892667, '48C'],
  [-37.8897637667, 175.46090555, '29'],
  [-37.8898831667, 175.4584686167, '15'],
  [-37.8900645833, 175.4630566333, '57'],
  [-37.8894477833, 175.4587900667, '20'],
  [-37.8898162, 175.4597956833, '21'],
  [-37.8903147667, 175.4585830833, '15A'],
  [-37.8899451, 175.4573311, '5'],
  [-37.8892625, 175.46226515, '42'],
  [-37.88959655, 175.4636994833, '63'],
  [-37.8888289, 175.4626433167, '46B'],
  [-37.8897502167, 175.4611882333, '31'],
  [-37.8890874833, 175.4653801667, '66'],
  [-37.8896453667, 175.4629410333, '51'],
  [-37.88871155, 175.4626789833, '46A'],
  [-37.8889027, 175.4648962833, '64A'],
  [-37.8888759167, 175.4633533167, '2/52'],
  [-37.8903299167, 175.4581553, '13A'],
  [-37.8890716, 175.4657335833, '68'],
  [-37.8894647167, 175.4584316167, '16'],
  [-37.8889404333, 175.4574026, '6B'],
  [-37.8896737667, 175.4626918667, '45'],
  [-37.8899074, 175.4580168, '11'],
  [-37.8898575333, 175.4588148833, '17'],
  [-37.8896982167, 175.46224375, '1/41-7/41'],
  [-37.8895164167, 175.4575203, '6'],
  [-37.8899765333, 175.4602187333, '23A'],
  [-37.8891143, 175.4647213833, '62'],
  [-37.8892440667, 175.46252665, '46'],
  [-37.88890735, 175.4607073833, '30A'],
  [-37.88930945, 175.4612971, '36'],
  [-37.8892202667, 175.4574350833, '6A'],
  [-37.8891678667, 175.4639653333, '58'],
  [-37.8898663667, 175.4589170833, '19'],
  [-37.88937355, 175.4599354833, '24'],
  [-37.8893259833, 175.4609626833, '32A'],
  [-37.8899845333, 175.4624851, '49'],
  [-37.8700170667, 175.4425962167, '35'],
  [-37.87002395, 175.4440538333, '45'],
  [-37.8703417167, 175.4408183833, '19'],
  [-37.8704475833, 175.44446245, '48'],
  [-37.8705703667, 175.44211805, '32'],
  [-37.8712876167, 175.4401329, '8'],
  [-37.8706072, 175.4431831333, '40'],
  [-37.88103245, 175.43996055, '74'],
  [-37.8810238833, 175.44054185, '144'],
  [-37.8819540833, 175.44341985, '444'],
  [-37.8810368167, 175.4414257833, '218'],
  [-37.8836569833, 175.4449454, '695'],
  [-37.8805499, 175.44146635, '219'],
  [-37.88153545, 175.4435217, '409'],
  [-37.8805337667, 175.4422020167, '277'],
  [-37.8810820333, 175.4423189667, '302'],
  [-37.8826985333, 175.4431283833, '503'],
  [-37.8825451667, 175.4439081167, '533'],
  [-37.8834376, 175.4454858167, '694'],
  [-37.8806721167, 175.44412345, '397'],
  [-37.81387095, 175.45409265, '1'],
  [-37.821195, 175.4616223833, '104'],
  [-37.8211624833, 175.4682833, '181'],
  [-37.8178846167, 175.4588240333, '65'],
  [-37.8149536667, 175.4553629333, '15'],
  [-37.8197732667, 175.4671436, '167'],
  [-37.8161526333, 175.4563465, '35'],
  [-37.8209648833, 175.4674674, '178'],
  [-37.820487, 175.4606511167, '86'],
  [-37.9711954833, 175.3673120333, '66'],
  [-37.8927382667, 175.4630076, '2A'],
  [-37.8930191833, 175.4631100333, '1'],
  [-37.89302745, 175.4629626333, '1A'],
  [-37.8927669333, 175.46308965, '2'],
  [-37.8929038667, 175.46322235, '5'],
  [-37.8926603333, 175.4633015, '3A'],
  [-37.89273305, 175.4631913833, '3'],
  [-37.8928261167, 175.4632172333, '4'],
  [-37.8863257333, 175.3892431333, '29'],
  [-37.8828649833, 175.3942711333, '76'],
  [-37.88740485, 175.3880108167, '3'],
  [-37.8816477833, 175.39495895, '85'],
  [-37.9193026667, 175.46865615, '27'],
  [-37.9191047667, 175.4689871, '21'],
  [-37.9190031667, 175.4685222, '29'],
  [-37.9191244667, 175.4666619167, '55'],
  [-37.9187559333, 175.4673880833, '43'],
  [-37.9191856, 175.4667804333, '49'],
  [-37.9183846667, 175.4653317833, '75'],
  [-37.9186045833, 175.46662185, '59'],
  [-37.9191840167, 175.4678865167, '35'],
  [-37.9191584333, 175.4662006333, '61'],
  [-37.9188624, 175.4676419833, '39'],
  [-37.9184419667, 175.4657698, '69'],
  [-37.9178364167, 175.4627168667, '111'],
  [-37.9185242667, 175.4661814167, '63'],
  [-37.9191998, 175.4694479333, '17'],
  [-37.9190388167, 175.4654450833, '71'],
  [-37.91796485, 175.4632720833, '103'],
  [-37.91880005, 175.4653678333, '73'],
  [-37.9182357167, 175.4645811, '93'],
  [-37.9177229333, 175.4619539, '119'],
  [-37.91802955, 175.4624559167, '115'],
  [-37.9176650833, 175.4616779667, '123'],
  [-37.91870075, 175.4670770833, '45'],
  [-37.9176143667, 175.4613274, '125'],
  [-37.9189086667, 175.468155, '33'],
  [-37.9174097167, 175.4613318833, '127'],
  [-37.9190924, 175.4675234333, '41'],
  [-37.8068523167, 175.3939250833, '5'],
  [-37.8144720167, 175.4032648333, '122'],
  [-37.8070121667, 175.3941206333, '7'],
  [-37.8135841833, 175.40160315, '114'],
  [-37.8071723, 175.39433025, '9'],
  [-37.8073319667, 175.3945375, '13'],
  [-37.8088248333, 175.39658935, '35'],
  [-37.8150867, 175.4041908167, '138'],
  [-37.8087098667, 175.39797025, '45'],
  [-37.8153430833, 175.4043867333, '140'],
  [-37.8113713333, 175.3997835833, '77'],
  [-37.8128633667, 175.4026050333, '103'],
  [-37.8153182333, 175.404702, '142'],
  [-37.8136947667, 175.4026962667, '113'],
  [-37.8146717833, 175.4042277167, '133'],
  [-37.8132897167, 175.40224345, '105'],
  [-37.87318525, 175.5752061, '783'],
  [-37.87086625, 175.5605686167, '3/668'],
  [-37.8736095333, 175.5759500667, '791'],
  [-37.8846973333, 175.5128454333, '105'],
  [-37.882909, 175.5284399, '295'],
  [-37.8854251167, 175.50715345, '42'],
  [-37.8730277, 175.5735052333, '768'],
  [-37.8852305667, 175.5138063667, '116'],
  [-37.8765950833, 175.5441586167, '457'],
  [-37.8854819167, 175.51593135, '130'],
  [-37.8793962333, 175.5400538, '398'],
  [-37.8856814667, 175.5176310333, '146'],
  [-37.8850541667, 175.5122725, '94'],
  [-37.8859048, 175.5196622667, '158'],
  [-37.8839926333, 175.5070946667, '44'],
  [-37.8828246833, 175.5299873833, '300'],
  [-37.8835640333, 175.5073463, '47'],
  [-37.8812550167, 175.53308795, '338'],
  [-37.87624165, 175.5468433, '472'],
  [-37.8735672333, 175.5726554167, '2/766'],
  [-37.8756854833, 175.5468615167, '483'],
  [-37.8855889333, 175.5069699, '1/42'],
  [-37.8764352833, 175.55027325, '508'],
  [-37.88626155, 175.5222170833, '2/182'],
  [-37.8739916667, 175.5532237833, '537'],
  [-37.8790302167, 175.5397931667, '396'],
  [-37.8750138, 175.5530649833, '542'],
  [-37.8839209333, 175.5106114167, '79'],
  [-37.8790556833, 175.5364847667, '371'],
  [-37.8804106667, 175.5347674167, '348'],
  [-37.8843208, 175.50806425, '50'],
  [-37.8835448667, 175.50621025, '37'],
  [-37.8789683667, 175.5407611667, '400'],
  [-37.8819428333, 175.5302822333, '307'],
  [-37.8838573833, 175.5041196833, '26'],
  [-37.8728271833, 175.5730276667, '1/766'],
  [-37.8862517333, 175.5218569167, '1/182'],
  [-37.88592065, 175.52030825, '170'],
  [-37.8804488333, 175.5336723833, '345'],
  [-37.8724145667, 175.5722238833, '756'],
  [-37.8710689167, 175.5600702167, '2/668'],
  [-37.8749418667, 175.5762505333, '808'],
  [-37.88330185, 175.5037989167, '25'],
  [-37.8742985667, 175.5709469667, '766'],
  [-37.8855461833, 175.5169524167, '138'],
  [-37.8840771833, 175.5086316, '57'],
  [-37.8799641333, 175.5345286833, '351'],
  [-37.8747767833, 175.5703700833, '4/766'],
  [-37.8712547, 175.5595212, '1/668'],
  [-37.8852620333, 175.5203346333, '167'],
  [-37.87846535, 175.5402971, '407'],
  [-37.87451705, 175.5722616833, '3/766'],
  [-37.8865716667, 175.5064284333, '2/42'],
  [-37.8699697833, 175.5701625667, '725'],
  [-37.8850022833, 175.5119347333, '92'],
  [-37.9141589833, 175.4676254, '19'],
  [-37.9155973833, 175.46772575, '11/2'],
  [-37.91552955, 175.4660865, '36/2'],
  [-37.9156190333, 175.4673462667, '9/2'],
  [-37.9154039167, 175.4660434167, '35/2'],
  [-37.9155738333, 175.4664463167, '5/2'],
  [-37.91535915, 175.4658985167, '34/2'],
  [-37.9155678833, 175.4667106333, '6/2'],
  [-37.91544365, 175.4658299, '33/2'],
  [-37.9160503333, 175.4675822, '21/2'],
  [-37.9156064333, 175.4657751333, '32/2'],
  [-37.9147495167, 175.4662775167, '5'],
  [-37.9157566167, 175.46569785, '31/2'],
  [-37.9154667667, 175.4679029167, '12/2'],
  [-37.91585185, 175.4657343333, '30/2'],
  [-37.9152016333, 175.4653091167, '1'],
  [-37.9153522167, 175.4663997833, '4'],
  [-37.9156452333, 175.4675400833, '10/2'],
  [-37.9153521167, 175.4665981833, '4A'],
  [-37.91558475, 175.4671245833, '8/2'],
  [-37.9153486333, 175.4667996333, '6'],
  [-37.9155721333, 175.4669092, '7/2'],
  [-37.9152996667, 175.4669875833, '6A'],
  [-37.9150243, 175.46636625, '5A'],
  [-37.9162041333, 175.4675381333, '22/2'],
  [-37.9162005, 175.4673120333, '23/2'],
  [-37.9161440167, 175.4671061, '24/2'],
  [-37.9160962667, 175.4669004667, '25/2'],
  [-37.9160486333, 175.4666893333, '26/2'],
  [-37.9159963833, 175.46648905, '27/2'],
  [-37.91591785, 175.4662933333, '28/2'],
  [-37.9157758667, 175.4662000667, '38/2'],
  [-37.9157248667, 175.4659447167, '37/2'],
  [-37.9158606, 175.46592755, '29/2'],
  [-37.9159540833, 175.4673968833, '20/2'],
  [-37.91578295, 175.4674348167, '17/2'],
  [-37.91584205, 175.4677180167, '18/2'],
  [-37.9156962333, 175.4664396833, '13/2'],
  [-37.915699, 175.4667043333, '14/2'],
  [-37.9157030167, 175.4669139, '15/2'],
  [-37.9157118833, 175.4671016, '16/2'],
  [-37.9158802833, 175.4671848, '19/2'],
  [-37.9146419333, 175.4678385333, '16'],
  [-37.9149667, 175.46605435, '3'],
  [-37.9150279333, 175.4667922833, '7'],
  [-37.9141704333, 175.4678512833, '21'],
  [-37.9142653, 175.4673118833, '15'],
  [-37.91450075, 175.4674330833, '13'],
  [-37.9147242667, 175.46734925, '11'],
  [-37.9148913167, 175.4671297667, '9'],
  [-37.9151929833, 175.4672369167, '8'],
  [-37.9144812833, 175.4679524833, '18'],
  [-37.9149502167, 175.4675873667, '12'],
  [-37.9147979333, 175.4677301167, '14'],
  [-37.9140953833, 175.4682407667, '22'],
  [-37.9143135333, 175.4679806667, '20'],
  [-37.9139027667, 175.4673990667, '17'],
  [-37.91508455, 175.46743825, '10'],
  [-37.8207364833, 175.3925286333, '110'],
  [-37.8140913167, 175.3867786167, '31'],
  [-37.82388165, 175.3961648833, '164'],
  [-37.8149241833, 175.3869723167, '38'],
  [-37.8341317167, 175.4133935833, '364'],
  [-37.8244762167, 175.39859475, '186'],
  [-37.82108675, 175.3928284333, '112'],
  [-37.8257318, 175.4028302167, '236'],
  [-37.8213587333, 175.3930749333, '114'],
  [-37.8245402667, 175.3979335833, '184'],
  [-37.8216469333, 175.3939728667, '129'],
  [-37.8287610333, 175.4083265833, '302'],
  [-37.82049075, 175.3882675333, '92'],
  [-37.8209210167, 175.3876718333, '90B'],
  [-37.8243807167, 175.4009181, '207'],
  [-37.8210754833, 175.3869467167, '90A'],
  [-37.8142259167, 175.3862871667, '26'],
  [-37.8142241, 175.3891889667, '43'],
  [-37.8355967167, 175.4144058667, '382'],
  [-37.8263508333, 175.4048937333, '251'],
  [-37.8237985833, 175.3972016667, '173'],
  [-37.82187925, 175.3941376333, '137'],
  [-37.8159891667, 175.3862058833, '42'],
  [-37.8233059333, 175.3950369833, '156'],
  [-37.8224871333, 175.3939314167, '148'],
  [-37.8194135833, 175.3914179833, '100'],
  [-37.8149244, 175.38763835, '41'],
  [-37.8192395667, 175.3919598167, '103'],
  [-37.8202387167, 175.3879586, '90D'],
  [-37.81610515, 175.3888637333, '59'],
  [-37.8282481667, 175.4077297, '290'],
  [-37.81714775, 175.3892465833, '68'],
  [-37.8196078, 175.3887699667, '90'],
  [-37.817284, 175.39001715, '77'],
  [-37.81837465, 175.39045065, '86'],
  [-37.8277749, 175.4071191667, '272'],
  [-37.8265916333, 175.4056707167, '251A'],
  [-37.8128841167, 175.3855143833, '11'],
  [-37.8291297, 175.4098336167, '313'],
  [-37.8329969667, 175.4126325333, '358'],
  [-37.8322266, 175.4129321167, '347'],
  [-37.8348266833, 175.4139054, '372'],
  [-37.9099726167, 175.4757886667, '71'],
  [-37.9101903333, 175.4760631833, '73'],
  [-37.9152217167, 175.47371395, '131'],
  [-37.9059390167, 175.47854405, '32'],
  [-37.9097995667, 175.4753924833, '71B'],
  [-37.9044269833, 175.4792423333, '12'],
  [-37.9084252667, 175.4764496833, '49'],
  [-37.9086711167, 175.4772269833, '52'],
  [-37.9116987, 175.4759278667, '92'],
  [-37.9098638167, 175.47581795, '69'],
  [-37.9117964333, 175.4757621167, '94'],
  [-37.90989485, 175.47559865, '71A'],
  [-37.9073590833, 175.4778494167, '40A'],
  [-37.91330765, 175.47552755, '108'],
  [-37.9057401833, 175.4781938167, '25'],
  [-37.911296, 175.4748848167, '89'],
  [-37.9121108667, 175.4758530667, '98A'],
  [-37.9043787833, 175.4787889167, '13'],
  [-37.9083076667, 175.4766785667, '47A'],
  [-37.9036909333, 175.4791402667, '3'],
  [-37.91220345, 175.4755294, '100'],
  [-37.9053728833, 175.4783509333, '1/23'],
  [-37.90519915, 175.4784179, '21'],
  [-37.9052690667, 175.4783896667, '21A'],
  [-37.9114245, 175.4759148333, '88'],
  [-37.9081505833, 175.4774655, '46'],
  [-37.9142982833, 175.4745833, '120'],
  [-37.9131166, 175.4751412333, '106'],
  [-37.9083510667, 175.47694365, '47'],
  [-37.9065192667, 175.4778253667, '31'],
  [-37.9083240333, 175.47739375, '48'],
  [-37.9149526833, 175.4742867833, '126'],
  [-37.9103091667, 175.476032, '75'],
  [-37.9118749833, 175.4749764833, '101A'],
  [-37.9042161667, 175.4788623333, '11'],
  [-37.9129278167, 175.4752157333, '104'],
  [-37.9121256667, 175.4751926333, '103'],
  [-37.9112547, 175.4755432667, '85'],
  [-37.9142550667, 175.4741810667, '121'],
  [-37.9106238667, 175.4759059667, '77A'],
  [-37.9104479, 175.4759570167, '77'],
  [-37.9114070667, 175.4754850833, '87'],
  [-37.9113298833, 175.47516835, '87A'],
  [-37.9148737833, 175.4738503833, '127'],
  [-37.9112868667, 175.4759815833, '86'],
  [-37.9111339667, 175.4760538, '82'],
  [-37.91156375, 175.4758556833, '90'],
  [-37.9151142, 175.4742192667, '128'],
  [-37.9151403167, 175.4737436, '129'],
  [-37.915375, 175.4740628167, '130'],
  [-37.9144834167, 175.4745128333, '122'],
  [-37.9144913, 175.4737651167, '123A'],
  [-37.9144983167, 175.4740186167, '123'],
  [-37.9146270167, 175.4744201833, '124'],
  [-37.9126748, 175.4749461833, '105'],
  [-37.9128134833, 175.4748703333, '107'],
  [-37.9129492333, 175.4747718167, '109'],
  [-37.9131005833, 175.4746998, '111'],
  [-37.9132571833, 175.4746269833, '113'],
  [-37.9135018833, 175.4749717, '114'],
  [-37.91340395, 175.4745515, '115'],
  [-37.9136698, 175.4748826167, '116'],
  [-37.91356065, 175.4744797, '117'],
  [-37.91379245, 175.4748357, '118'],
  [-37.9136715833, 175.4744300167, '119'],
  [-37.9085906833, 175.4768593, '53'],
  [-37.9089448167, 175.47752235, '54A'],
  [-37.9088353, 175.4771584333, '54'],
  [-37.9087287167, 175.4767663333, '55'],
  [-37.9090036667, 175.4770825167, '56'],
  [-37.9065108833, 175.4773228833, '33'],
  [-37.90671225, 175.4781606833, '34'],
  [-37.90673975, 175.4777032, '35'],
  [-37.9068835, 175.4780653833, '36'],
  [-37.9067380833, 175.4772301167, '37'],
  [-37.9070569167, 175.47798485, '38'],
  [-37.9070025333, 175.4775753333, '39'],
  [-37.90721945, 175.47790165, '40'],
  [-37.9072522667, 175.4774842833, '41'],
  [-37.9073576167, 175.47744775, '43'],
  [-37.9055054167, 175.4782415167, '23'],
  [-37.9146826833, 175.4739228, '125'],
  [-37.9048823167, 175.4785375333, '17'],
  [-37.9120084333, 175.4756561667, '98'],
  [-37.9086973167, 175.4775292833, '52A'],
  [-37.90495545, 175.4780925667, '19A'],
  [-37.9115964667, 175.4754098667, '91'],
  [-37.9117456333, 175.4753338667, '93'],
  [-37.9047131167, 175.47861435, '15'],
  [-37.9166350333, 175.47304345, '141'],
  [-37.9119624833, 175.4752623, '101'],
  [-37.9039384833, 175.4785719, '9A'],
  [-37.9040451, 175.4789520667, '9'],
  [-37.9159567333, 175.4733394833, '133'],
  [-37.9133416833, 175.4750525833, '112'],
  [-37.9164713167, 175.4731105667, '139'],
  [-37.9162964833, 175.4731911, '137'],
  [-37.91611805, 175.4732665833, '135'],
  [-37.9050444167, 175.4785102333, '19'],
  [-37.9084974833, 175.47730975, '50'],
  [-37.9168131667, 175.4729816333, '143'],
  [-37.9088890667, 175.47665875, '51'],
  [-37.9169769833, 175.47291525, '145'],
  [-37.91109855, 175.4756779833, '83'],
  [-37.9036883833, 175.47891485, '5'],
  [-37.9038746333, 175.4790332667, '7'],
  [-37.9098547333, 175.4762237333, '67'],
  [-37.9134471167, 175.47558925, '110'],
  [-37.9091846167, 175.4769739333, '58'],
  [-37.9041253333, 175.47834505, '67'],
  [-37.9031156667, 175.47324245, '30'],
  [-37.9039179333, 175.4771832667, '57'],
  [-37.9027583833, 175.4732321833, '31'],
  [-37.9039296333, 175.4759913167, '1/48-5/48'],
  [-37.9031900333, 175.4735082833, '32'],
  [-37.9034018667, 175.4743276167, '36'],
  [-37.9023766833, 175.47196845, '7'],
  [-37.9032458833, 175.47560575, '49A'],
  [-37.9020863667, 175.4722218833, '9'],
  [-37.9043371833, 175.4768388333, '56B'],
  [-37.902459, 175.47222945, '15'],
  [-37.9037351, 175.47533715, '44'],
  [-37.9034826333, 175.4756647333, '51'],
  [-37.9036591, 175.47507465, '42'],
  [-37.90418945, 175.4769539167, '56'],
  [-37.9032979333, 175.4750164, '45'],
  [-37.9034232167, 175.47544545, '49'],
  [-37.9033578, 175.4752311833, '47'],
  [-37.9038201667, 175.4756474167, '46'],
  [-37.9022973167, 175.4729606, '25'],
  [-37.90414875, 175.4768183, '52'],
  [-37.90349885, 175.4745345833, '38'],
  [-37.9026894, 175.4730117167, '29'],
  [-37.9021493667, 175.47246275, '17'],
  [-37.9026062167, 175.47272955, '23'],
  [-37.9025311667, 175.4725057, '21'],
  [-37.9030380667, 175.47297935, '28'],
  [-37.9024547167, 175.4734671, '33'],
  [-37.9025374333, 175.4713386333, '2'],
  [-37.9032365, 175.4747976667, '43'],
  [-37.903545, 175.4758786333, '53'],
  [-37.9036348667, 175.47615225, '55'],
  [-37.9040838167, 175.4777189667, '61'],
  [-37.9044308, 175.4778047833, '62A'],
  [-37.9045770833, 175.4776408667, '62'],
  [-37.9041435833, 175.4779421667, '63'],
  [-37.9045395167, 175.4780827833, '64'],
  [-37.9042280667, 175.4782127, '65'],
  [-37.9046025833, 175.4783325333, '66'],
  [-37.9027241, 175.4719824833, '6'],
  [-37.9031429167, 175.4744526833, '41'],
  [-37.90234395, 175.4730909833, '27'],
  [-37.9035807667, 175.474814, '40'],
  [-37.9024965667, 175.4735884667, '35'],
  [-37.9028375333, 175.4735153, '37'],
  [-37.90263765, 175.4716923333, '4'],
  [-37.9021975, 175.47257235, '19'],
  [-37.9043748667, 175.4775318, '60'],
  [-37.90399325, 175.4774612167, '59'],
  [-37.9042882333, 175.4772585333, '58'],
  [-37.8844172167, 175.4672121, '84'],
  [-37.88526725, 175.4677498167, '89'],
  [-37.88475025, 175.4713889167, '129A'],
  [-37.8850106, 175.4704196167, '119B'],
  [-37.8848693167, 175.4653303833, '67A'],
  [-37.8849946167, 175.47052095, '119A'],
  [-37.8853588667, 175.4594981667, '21A'],
  [-37.8840973667, 175.4733293833, '140'],
  [-37.88468505, 175.4712750833, '127B'],
  [-37.8848600667, 175.47296205, '141'],
  [-37.8846001333, 175.4600292833, '26A'],
  [-37.8836016167, 175.4733639667, '142'],
  [-37.8834011333, 175.4735009333, '144A'],
  [-37.8836620833, 175.4735234, '144'],
  [-37.8836292333, 175.4677762333, '92A'],
  [-37.8848011, 175.4732428833, '145'],
  [-37.8848537, 175.4655050667, '67B'],
  [-37.8840610333, 175.4737371333, '146'],
  [-37.884338, 175.4684939, '106'],
  [-37.8844335167, 175.4733986333, '147'],
  [-37.88444615, 175.4731180167, '1/143'],
  [-37.8840384, 175.4739760167, '148'],
  [-37.8846361, 175.4730721, '2/143'],
  [-37.8847583667, 175.4735201333, '149'],
  [-37.8847493833, 175.4736688167, '151'],
  [-37.8846399333, 175.4737421667, '153A'],
  [-37.8844193833, 175.4737101333, '153'],
  [-37.8844016, 175.4739577167, '155'],
  [-37.8846051, 175.4703118167, '117'],
  [-37.8842630167, 175.4702309167, '118'],
  [-37.8845899833, 175.4706008833, '119'],
  [-37.8839889, 175.4702975, '120'],
  [-37.8845767833, 175.4708850333, '121'],
  [-37.8848939667, 175.471153, '125'],
  [-37.8845648, 175.4711997833, '127A'],
  [-37.8845397333, 175.4714559833, '129'],
  [-37.8845394, 175.4715708167, '131'],
  [-37.88370185, 175.4681742833, '100A'],
  [-37.8839465, 175.4681139833, '100'],
  [-37.8839286333, 175.4682708, '102'],
  [-37.8847414667, 175.4683697167, '101'],
  [-37.8843311333, 175.4683495167, '104'],
  [-37.8850005167, 175.468632, '105'],
  [-37.8847132167, 175.4687043167, '107'],
  [-37.88432375, 175.4686693, '108A'],
  [-37.8841027333, 175.4686521333, '108B'],
  [-37.8837668333, 175.4686217667, '108C'],
  [-37.8843156167, 175.4690232667, '110'],
  [-37.8844019333, 175.4676185833, '88'],
  [-37.8839683, 175.4676575, '90'],
  [-37.8839636333, 175.4677862833, '92'],
  [-37.8847523333, 175.4678389667, '93'],
  [-37.8843878667, 175.4678844833, '94'],
  [-37.8843912, 175.46807835, '96'],
  [-37.88488445, 175.4681411333, '97A'],
  [-37.8847461167, 175.4681295167, '97'],
  [-37.8850594333, 175.46849965, '103'],
  [-37.88521615, 175.46866015, '105A'],
  [-37.8852093833, 175.4680692333, '95B'],
  [-37.8844562, 175.4666664667, '82'],
  [-37.8844693167, 175.4664959833, '80'],
  [-37.8850079167, 175.4663639833, '77'],
  [-37.8850347667, 175.4662661667, '75A'],
  [-37.8845094, 175.46511225, '70'],
  [-37.8848360833, 175.46580235, '71'],
  [-37.8845048333, 175.4652718333, '72'],
  [-37.88484705, 175.4659848667, '73'],
  [-37.8846077667, 175.4632926667, '56'],
  [-37.8849583, 175.4636067667, '57'],
  [-37.8849358667, 175.46389605, '59'],
  [-37.8846143167, 175.4635059, '60'],
  [-37.8849265833, 175.4640693333, '61'],
  [-37.88458485, 175.4638039167, '62'],
  [-37.8846887167, 175.4620028833, '40'],
  [-37.8846763667, 175.4622161, '42'],
  [-37.88439555, 175.46253885, '50A'],
  [-37.8843140667, 175.4625245333, '50B'],
  [-37.8846659833, 175.4626401167, '50'],
  [-37.8843395, 175.4756649667, '165'],
  [-37.8843288167, 175.4758768167, '167'],
  [-37.8847458167, 175.47598175, '169'],
  [-37.8839907333, 175.4754077667, '154'],
  [-37.8832283833, 175.4761336167, '158A'],
  [-37.8834749667, 175.4760305, '158'],
  [-37.8839257333, 175.4761204333, '160'],
  [-37.8839105, 175.4763266167, '162'],
  [-37.8839068667, 175.4765393833, '164'],
  [-37.8839006667, 175.4766556333, '166A'],
  [-37.8838300333, 175.4766482833, '166B'],
  [-37.8837648667, 175.4766430667, '166C'],
  [-37.88370985, 175.4766495333, '166D'],
  [-37.88450305, 175.4759053833, '167A'],
  [-37.8843063833, 175.47627465, '173'],
  [-37.88481905, 175.4593686833, '20'],
  [-37.8848109, 175.4595419, '22'],
  [-37.8847686333, 175.4602303333, '28'],
  [-37.8847849, 175.4600010333, '26'],
  [-37.8847695, 175.4604640833, '30'],
  [-37.8847524167, 175.4606697667, '32A'],
  [-37.8846032167, 175.4607054667, '32'],
  [-37.8847437, 175.4609159, '34'],
  [-37.8847367167, 175.4610480333, '36'],
  [-37.8846226, 175.4597085, '24A'],
  [-37.88480055, 175.4597682833, '24'],
  [-37.8849988, 175.45680165, '4'],
  [-37.88498305, 175.4570515667, '6'],
  [-37.8852893167, 175.45737525, '9A'],
  [-37.8856279667, 175.4573165333, '9'],
  [-37.8852346167, 175.4583441167, '17'],
  [-37.8846999, 175.46184155, '38'],
  [-37.8842668333, 175.4699965667, '116'],
  [-37.8849434, 175.4633167, '55'],
  [-37.8849201333, 175.4582107833, '14'],
  [-37.8841963333, 175.4680842833, '98'],
  [-37.8850626333, 175.4680435333, '95A'],
  [-37.8849265167, 175.4579232, '12'],
  [-37.8849416333, 175.4576479667, '10'],
  [-37.88464885, 175.4628154667, '52'],
  [-37.88495495, 175.4630154, '53'],
  [-37.8841566, 175.46306945, '54C'],
  [-37.8843828833, 175.4631118167, '54B'],
  [-37.8846277833, 175.4630559167, '54A'],
  [-37.8852737333, 175.4576375667, '11'],
  [-37.8849684, 175.4572897333, '8'],
  [-37.8842156, 175.4664696, '80A'],
  [-37.8852629167, 175.4609307833, '31A'],
  [-37.88407215, 175.4664618, '80B'],
  [-37.8853292833, 175.4658178167, '69D'],
  [-37.8845638833, 175.4761256667, '171A'],
  [-37.8843256167, 175.4761031333, '171'],
  [-37.88461985, 175.4700835333, '115'],
  [-37.8852249667, 175.4591643, '19'],
  [-37.8850024667, 175.4655843667, '69A'],
  [-37.8853347667, 175.4565859833, '3'],
  [-37.8849291167, 175.4710324667, '123'],
  [-37.8850487333, 175.46776055, '91'],
  [-37.88518005, 175.4657751833, '69B'],
  [-37.8847597, 175.4703240833, '117A'],
  [-37.8838148667, 175.4733438, '140A'],
  [-37.8852627, 175.4581414167, '15'],
  [-37.8852686333, 175.4578723833, '13'],
  [-37.8843833333, 175.4628765333, '52A'],
  [-37.8846312667, 175.47258135, '135A'],
  [-37.8841268, 175.4727441333, '134'],
  [-37.8841223833, 175.4729087, '136'],
  [-37.8844595167, 175.4725233833, '135'],
  [-37.8844608, 175.4728356, '139'],
  [-37.88411085, 175.4730945167, '138'],
  [-37.8844061, 175.4674269333, '86'],
  [-37.8846697, 175.4623996833, '44'],
  [-37.8843516833, 175.4624326667, '46'],
  [-37.8845218833, 175.4609426833, '34A'],
  [-37.8845623833, 175.4649360333, '68'],
  [-37.8852556667, 175.46580475, '69C'],
  [-37.8853163833, 175.4638318667, '57A'],
  [-37.8841402833, 175.4725588333, '132'],
  [-37.8845058, 175.46627115, '78'],
  [-37.88520865, 175.4594427, '21'],
  [-37.88518675, 175.4597238, '23'],
  [-37.88516405, 175.4602253833, '27A'],
  [-37.8851860333, 175.4600092, '25'],
  [-37.8851601667, 175.4603894167, '27B'],
  [-37.8851518333, 175.4606064167, '29'],
  [-37.8851348833, 175.4608605667, '31'],
  [-37.8850809, 175.4610533333, '33'],
  [-37.8856552, 175.4571406667, '7A'],
  [-37.8853045167, 175.4571108167, '7'],
  [-37.88540295, 175.4658220667, '69E'],
  [-37.8853268167, 175.459619, '23A'],
  [-37.8836866, 175.4760956667, '160A'],
  [-37.8847632333, 175.4673442, '83'],
  [-37.8847711333, 175.4675412167, '85'],
  [-37.8848386167, 175.4661800667, '75'],
  [-37.8845198, 175.4660549333, '76'],
  [-37.8848257667, 175.46637395, '79'],
  [-37.88481345, 175.4665570333, '81'],
  [-37.8850432333, 175.4640734333, '61A'],
  [-37.8854814333, 175.46382035, '57B'],
  [-37.8853202, 175.45681275, '5'],
  [-37.88467615, 175.4756712, '165A'],
  [-37.8843590833, 175.4753791667, '163'],
  [-37.8854775, 175.4568292667, '5A'],
  [-37.8846230833, 175.4699498, '113'],
  [-37.8840125667, 175.47500995, '150'],
  [-37.8840018667, 175.4752078667, '152'],
  [-37.8846837667, 175.4753169, '163A'],
  [-37.8843619333, 175.4750396667, '161'],
  [-37.8840304667, 175.4794188333, '2A'],
  [-37.8807723833, 175.4785762167, '38'],
  [-37.8832733667, 175.4785025167, '14'],
  [-37.8805087833, 175.4795802, '39'],
  [-37.8825106167, 175.4792898667, '22'],
  [-37.8807048667, 175.4788063333, '40'],
  [-37.88040735, 175.47993645, '41'],
  [-37.8802707, 175.4795716333, '43'],
  [-37.8806401833, 175.4791473833, '46'],
  [-37.8805187667, 175.4791179667, '48'],
  [-37.8803874167, 175.47910085, '52A'],
  [-37.8832278833, 175.4793638667, '16'],
  [-37.8830907167, 175.4793476833, '18'],
  [-37.8821391833, 175.4796965667, '27'],
  [-37.8822759, 175.4797246333, '25'],
  [-37.88156645, 175.4792199667, '26'],
  [-37.88154905, 175.4796941667, '29'],
  [-37.8814046333, 175.4791842167, '28'],
  [-37.8841534, 175.4798770333, '1'],
  [-37.88124075, 175.47917795, '30'],
  [-37.8811993833, 175.4787023, '32'],
  [-37.8809580167, 175.4791391833, '34'],
  [-37.8809750667, 175.4788466833, '34A'],
  [-37.8835383667, 175.4798388, '9'],
  [-37.8831311167, 175.4801495667, '15'],
  [-37.88322745, 175.47980485, '13'],
  [-37.8806638833, 175.4795858667, '37'],
  [-37.88084555, 175.4786213833, '36'],
  [-37.88399585, 175.4798779833, '3'],
  [-37.8839041667, 175.4794138833, '2'],
  [-37.8837673333, 175.4794031833, '4'],
  [-37.8837132667, 175.4798593833, '7'],
  [-37.8808555833, 175.47961625, '35'],
  [-37.8835850167, 175.47938365, '8'],
  [-37.8838495167, 175.4798612, '5'],
  [-37.8837031833, 175.4801284167, '7A'],
  [-37.8836938167, 175.47892395, '6'],
  [-37.8833948833, 175.4788199167, '12'],
  [-37.8832576167, 175.4787911, '14A'],
  [-37.8834012333, 175.4798226333, '11'],
  [-37.8834290167, 175.4793790167, '10'],
  [-37.9152153667, 175.5551235833, '3/5'],
  [-37.91650135, 175.5636650667, '82'],
  [-37.9161045333, 175.5591854333, '41'],
  [-37.9154124667, 175.5548626, '2/5'],
  [-37.9166862333, 175.55784235, '32'],
  [-37.91602365, 175.5560715, '21'],
  [-37.91628925, 175.5653876833, '94'],
  [-37.9160243833, 175.55493095, '1/5'],
  [-37.91517585, 175.5660481167, '109'],
  [-37.91440645, 175.5544777167, '9'],
  [-37.9154713667, 175.56556335, '105'],
  [-37.9123841333, 175.5769109, '1/239'],
  [-37.9138841833, 175.5671444, '127'],
  [-37.916035, 175.5569371167, '25'],
  [-37.91497065, 175.5671545333, '1/114'],
  [-37.9146378167, 175.5673035, '2/114'],
  [-37.9176808667, 175.5727210167, '192'],
  [-37.91296825, 175.57312245, '1/192'],
  [-37.9165331, 175.56259155, '70'],
  [-37.9128700167, 175.5676242167, '135'],
  [-37.9127302333, 175.5677905167, '137'],
  [-37.9138889, 175.57603805, '212'],
  [-37.8834204167, 175.4653173333, '2/67'],
  [-37.8829550167, 175.4680045, '93A'],
  [-37.8815600333, 175.4786609667, '164C'],
  [-37.8830218167, 175.4623102, '41'],
  [-37.8817898333, 175.47891525, '166A'],
  [-37.8827127167, 175.46177765, '40'],
  [-37.8822979167, 175.4663795167, '74A'],
  [-37.8828493167, 175.4591475, '16'],
  [-37.88142475, 175.4786348833, '164D'],
  [-37.88306005, 175.4616891167, '37'],
  [-37.8820609167, 175.4740814833, '122'],
  [-37.8826992167, 175.4619383167, '42'],
  [-37.8821519667, 175.4815448333, '209A'],
  [-37.883041, 175.4620756167, '39'],
  [-37.8832654167, 175.4652926667, '1/67'],
  [-37.88272565, 175.4616287, '38'],
  [-37.8830076333, 175.4626069, '43'],
  [-37.8831357, 175.4601246167, '27'],
  [-37.8817307, 175.4761582, '146A'],
  [-37.8831685833, 175.4596908, '25'],
  [-37.8815906167, 175.4788964667, '166B'],
  [-37.88278065, 175.4602865167, '26'],
  [-37.8835589833, 175.4653321833, '3/67'],
  [-37.8825282667, 175.4646378, '60'],
  [-37.8813641333, 175.4755528333, '136A'],
  [-37.8823392167, 175.4748610333, '155'],
  [-37.8833277833, 175.46261325, '43A'],
  [-37.8815676833, 175.4731547, '114B'],
  [-37.8819471167, 175.4816728, '211'],
  [-37.8829108333, 175.4730159, '139'],
  [-37.8831197, 175.4654452, '69A'],
  [-37.8827723, 175.4605280167, '28'],
  [-37.8829114, 175.4647714833, '59'],
  [-37.88250115, 175.4649823, '64'],
  [-37.8829076, 175.46497065, '61'],
  [-37.88293875, 175.4727218, '135'],
  [-37.8824690167, 175.4726854833, '133'],
  [-37.88310945, 175.4604659833, '31'],
  [-37.8831059, 175.4608415833, '35'],
  [-37.8827654333, 175.4607287333, '30'],
  [-37.8831227667, 175.4602889167, '29'],
  [-37.8825220833, 175.4621568833, '44A'],
  [-37.88299765, 175.4628680167, '45'],
  [-37.8832516833, 175.4628885167, '45A'],
  [-37.8826944667, 175.46216875, '44'],
  [-37.8825202167, 175.46254835, '48A'],
  [-37.8833442667, 175.45699385, '5'],
  [-37.8829708667, 175.4632570667, '51'],
  [-37.8824811, 175.4725087833, '131'],
  [-37.8829959833, 175.4630565833, '49'],
  [-37.8826675833, 175.4625577, '48'],
  [-37.88331805, 175.45745235, '9'],
  [-37.8824531333, 175.47297485, '141'],
  [-37.8827041833, 175.45734235, '8'],
  [-37.8833336167, 175.4572248667, '7'],
  [-37.8829612, 175.4728780167, '137'],
  [-37.8823318333, 175.4686371167, '86'],
  [-37.8824054833, 175.4672578333, '78'],
  [-37.8823379667, 175.4683863333, '84A-84D'],
  [-37.8823962167, 175.4674496167, '80'],
  [-37.8824414833, 175.46633525, '74'],
  [-37.8827537667, 175.4672953, '85'],
  [-37.8822319333, 175.4661475333, '72'],
  [-37.8824802, 175.4658691833, '70'],
  [-37.8827660833, 175.4671242167, '83'],
  [-37.8823372667, 175.47505315, '157'],
  [-37.8826545167, 175.4751218167, '157A'],
  [-37.8820193333, 175.4750065167, '128'],
  [-37.8818626167, 175.4777718333, '152'],
  [-37.8819736, 175.47592125, '140'],
  [-37.8819698, 175.4757241667, '138'],
  [-37.8823149, 175.4754510833, '165'],
  [-37.8823264833, 175.4752907833, '163'],
  [-37.8827581167, 175.4752805833, '161'],
  [-37.8829257833, 175.4751779333, '159'],
  [-37.8822762, 175.4760006333, '167'],
  [-37.8821834, 175.4777217333, '177'],
  [-37.8822236833, 175.4803508667, '199'],
  [-37.8815487833, 175.4799515, '172A'],
  [-37.8821390333, 175.4785808167, '185'],
  [-37.8821657167, 175.4779489667, '179'],
  [-37.8821615, 175.47814015, '181'],
  [-37.8821482167, 175.4783480833, '183'],
  [-37.88205545, 175.4801785, '197'],
  [-37.8817139833, 175.48044315, '176'],
  [-37.8817403667, 175.4799308667, '172'],
  [-37.8817075, 175.4806324333, '176A'],
  [-37.8816647167, 175.4814856333, '184'],
  [-37.8817027333, 175.4808254167, '178'],
  [-37.8816651167, 175.48128865, '182'],
  [-37.8816775833, 175.4810764167, '180'],
  [-37.8821253667, 175.4788135833, '187'],
  [-37.88211265, 175.4790205167, '189'],
  [-37.88210465, 175.4792012833, '191'],
  [-37.8820355, 175.4804062667, '201'],
  [-37.88222755, 175.4806704167, '203A'],
  [-37.8820247167, 175.4806337333, '203'],
  [-37.8821983833, 175.4809817, '205A'],
  [-37.8820063, 175.4808974, '205'],
  [-37.8819872, 175.4811870167, '207'],
  [-37.88197265, 175.4814592667, '209'],
  [-37.8831150167, 175.4606360833, '33'],
  [-37.8827381667, 175.4614688333, '36'],
  [-37.88168275, 175.4731685667, '114A'],
  [-37.8825469333, 175.4624433, '46A'],
  [-37.8827017167, 175.4623766, '46'],
  [-37.8828950667, 175.4652071, '65'],
  [-37.88223365, 175.4708144, '98'],
  [-37.8826632333, 175.46886835, '99'],
  [-37.88294545, 175.4574472333, '10'],
  [-37.8820008, 175.47545635, '132'],
  [-37.8815931167, 175.4754940333, '134'],
  [-37.8815807333, 175.4756172833, '136'],
  [-37.8820043167, 175.4752607833, '130'],
  [-37.88218895, 175.4774782333, '175'],
  [-37.88172165, 175.4801884, '174'],
  [-37.8830567667, 175.4618380833, '37A'],
  [-37.88330235, 175.4576792167, '11'],
  [-37.8818654333, 175.4775383667, '150'],
  [-37.8826391333, 175.4630505, '50C'],
  [-37.8826306167, 175.4631781333, '50D'],
  [-37.8822323333, 175.46476475, '62'],
  [-37.8818249833, 175.4749363833, '128A'],
  [-37.8826051333, 175.4701299167, '109'],
  [-37.8822580667, 175.47622145, '169'],
  [-37.8821165333, 175.4729660833, '112'],
  [-37.8826087833, 175.4699331333, '107'],
  [-37.8819629, 175.4761853, '146'],
  [-37.8820175833, 175.4748403667, '126'],
  [-37.8825933333, 175.4704919167, '113'],
  [-37.8825976, 175.4703054667, '111'],
  [-37.8815316833, 175.4759537667, '142'],
  [-37.8815485667, 175.4760951167, '144'],
  [-37.8826667167, 175.4685696833, '97A'],
  [-37.8823006, 175.4698174167, '90'],
  [-37.8822800167, 175.4702989667, '96'],
  [-37.8819513333, 175.47633525, '148'],
  [-37.8828277833, 175.4687268667, '97'],
  [-37.8822974333, 175.469983, '92'],
  [-37.8828276667, 175.4593929667, '18'],
  [-37.8823263167, 175.4688898, '88'],
  [-37.8832137, 175.4589384833, '17'],
  [-37.8822883667, 175.4701519667, '94'],
  [-37.8826732, 175.4684589667, '97B'],
  [-37.8822189833, 175.47111545, '100'],
  [-37.8820588, 175.4799191833, '195'],
  [-37.8817857167, 175.4791120667, '168'],
  [-37.8815184167, 175.4779607667, '156'],
  [-37.8831976333, 175.4593128167, '21'],
  [-37.8823417833, 175.4681742167, '82'],
  [-37.8827111, 175.4679744667, '93'],
  [-37.8832019667, 175.4591213833, '19'],
  [-37.8815556333, 175.4802543833, '174A'],
  [-37.88215085, 175.4723449167, '108'],
  [-37.8815176167, 175.4778254833, '154'],
  [-37.8820986333, 175.4731788833, '114'],
  [-37.8820722833, 175.47386775, '120'],
  [-37.8821363667, 175.4725972667, '110'],
  [-37.8818740833, 175.47394495, '120A'],
  [-37.8820951167, 175.4734228167, '116'],
  [-37.88208125, 175.4736554333, '118'],
  [-37.8816796667, 175.4786736667, '164B'],
  [-37.88313585, 175.4678512667, '91'],
  [-37.8824046833, 175.4740707, '153'],
  [-37.8829457667, 175.45767015, '12A'],
  [-37.8825498667, 175.45756275, '12'],
  [-37.8832922167, 175.4578983333, '13'],
  [-37.8829356167, 175.4578815, '14'],
  [-37.8832731833, 175.4580626167, '15'],
  [-37.8833720833, 175.4564383833, '1'],
  [-37.8833604167, 175.4567315167, '3'],
  [-37.8828452833, 175.4659509, '75'],
  [-37.88283615, 175.4661431333, '77'],
  [-37.8828280833, 175.4662871833, '79'],
  [-37.8831762333, 175.4650671667, '63A'],
  [-37.8832807333, 175.4650862667, '63B'],
  [-37.8828784, 175.4654325333, '69'],
  [-37.88286845, 175.4656069833, '71'],
  [-37.8828541167, 175.4657729833, '73'],
  [-37.88225265, 175.4763298333, '171'],
  [-37.88244025, 175.4731903833, '143'],
  [-37.88277745, 175.4714596167, '123A'],
  [-37.8825218833, 175.4714168, '123'],
  [-37.8826166167, 175.4697419333, '105'],
  [-37.88317465, 175.4595099667, '23'],
  [-37.88146045, 175.47846145, '162'],
  [-37.8818026833, 175.47869275, '164A'],
  [-37.8825380333, 175.47125165, '121'],
  [-37.8821686667, 175.4812678167, '207A'],
  [-37.8825423167, 175.47107055, '119'],
  [-37.8818212833, 175.4783825, '160'],
  [-37.8825595667, 175.4708636, '117'],
  [-37.8822055167, 175.4713504167, '104'],
  [-37.8821969167, 175.4715105167, '106'],
  [-37.88270855, 175.4681556333, '95'],
  [-37.8818339, 175.4781130167, '158'],
  [-37.88248225, 175.4723453, '129'],
  [-37.8825806, 175.4706828667, '115'],
  [-37.8824171833, 175.47368635, '149'],
  [-37.8830100833, 175.4662410333, '77A'],
  [-37.88294835, 175.4681855, '95A'],
  [-37.8824262667, 175.4734592, '147'],
  [-37.88256465, 175.4739109667, '151A'],
  [-37.88265405, 175.4627631667, '50A'],
  [-37.88273475, 175.4676983, '89'],
  [-37.8826450667, 175.4629121333, '50B'],
  [-37.8827506167, 175.4674962833, '87'],
  [-37.8824087, 175.4738996167, '151'],
  [-37.8752754167, 175.4687945, '5'],
  [-37.8762403, 175.4685664667, '17'],
  [-37.8754141333, 175.46920485, '7'],
  [-37.87579005, 175.4687529833, '11B'],
  [-37.8756581167, 175.4691656167, '9'],
  [-37.8765213333, 175.4682912, '19D'],
  [-37.8756935167, 175.46956425, '10'],
  [-37.87642715, 175.46787445, '19B'],
  [-37.8755152333, 175.4695951833, '8'],
  [-37.8764289167, 175.46891995, '20'],
  [-37.8753332833, 175.4696019833, '6'],
  [-37.8751625833, 175.4692038167, '3'],
  [-37.8751427, 175.4696164667, '4'],
  [-37.8764386833, 175.46867495, '21'],
  [-37.87496015, 175.4696499, '2'],
  [-37.8756744167, 175.4688181667, '11A'],
  [-37.8749777333, 175.4692451667, '1'],
  [-37.8763775667, 175.4681980333, '19A'],
  [-37.87626605, 175.46911145, '16'],
  [-37.8765451333, 175.4678920167, '19C'],
  [-37.87614825, 175.4692725667, '14'],
  [-37.87655055, 175.4693377, '18'],
  [-37.8760211, 175.4693800167, '12'],
  [-37.87610675, 175.46867635, '15'],
  [-37.8759566833, 175.4689563167, '13'],
  [-37.8746548333, 175.4923337833, '108'],
  [-37.8761834667, 175.4925171833, '86'],
  [-37.8786149333, 175.4916796167, '61'],
  [-37.8767351, 175.4913667333, '83'],
  [-37.8802232333, 175.49233165, '48'],
  [-37.8775048833, 175.4913709, '75'],
  [-37.8754266, 175.4923112333, '98'],
  [-37.8778063333, 175.4924615667, '72'],
  [-37.8803238667, 175.49186235, '45'],
  [-37.8723323333, 175.49117315, '131'],
  [-37.8718419, 175.4924310167, '138'],
  [-37.8711135, 175.4946030167, '148'],
  [-37.8697698833, 175.4923552333, '166'],
  [-37.8688831, 175.4922950167, '176'],
  [-37.8789681333, 175.4925074, '58'],
  [-37.8820738333, 175.4926333167, '30'],
  [-37.8812172, 175.49178955, '37'],
  [-37.88069745, 175.4925708333, '42'],
  [-37.8787213167, 175.4903820667, '63'],
  [-37.8789726667, 175.4909397833, '59'],
  [-37.8796000667, 175.4917581167, '53'],
  [-37.8795261833, 175.49247645, '54'],
  [-37.8736368167, 175.4923986833, '124'],
  [-37.8727232333, 175.4924140333, '126'],
  [-37.87437165, 175.4674392167, '27'],
  [-37.8746732167, 175.4701863, '7'],
  [-37.8744574833, 175.4691624667, '17'],
  [-37.8743822167, 175.47024785, '9A'],
  [-37.8749997667, 175.4700487, '12'],
  [-37.8743498667, 175.4700893333, '9B'],
  [-37.8752501333, 175.4707564333, '4'],
  [-37.8746036167, 175.46989845, '11'],
  [-37.8744127333, 175.4663752333, '33'],
  [-37.87455375, 175.4696726333, '13'],
  [-37.87442195, 175.4683011333, '21'],
  [-37.87475005, 175.4704344167, '5'],
  [-37.8747738, 175.4664531833, '32'],
  [-37.8747376833, 175.4677991, '24'],
  [-37.8748038833, 175.4662112833, '34'],
  [-37.8743485, 175.4672374833, '29'],
  [-37.87475315, 175.4683317, '22'],
  [-37.8747034167, 175.4672897833, '28'],
  [-37.8751725667, 175.4705402833, '6'],
  [-37.8743703, 175.46656865, '31'],
  [-37.8747061667, 175.4675099333, '26'],
  [-37.8749663833, 175.4711516, '1'],
  [-37.8750729167, 175.4702726833, '10'],
  [-37.8747800333, 175.4687326833, '20'],
  [-37.8747974333, 175.468992, '18'],
  [-37.87484445, 175.4707471667, '3'],
  [-37.8754537333, 175.47035305, '8A'],
  [-37.8753716, 175.4710875, '2'],
  [-37.8749196, 175.4697604667, '14'],
  [-37.8744452, 175.4661277667, '35'],
  [-37.8744961833, 175.46941455, '15'],
  [-37.8747449667, 175.4666386167, '30'],
  [-37.87482605, 175.4692223833, '16'],
  [-37.8754105667, 175.4702048167, '8B'],
  [-37.8743849167, 175.4676931, '25'],
  [-37.8744337, 175.4689042667, '19'],
  [-37.8743984167, 175.4679389167, '23'],
  [-37.8778069667, 175.4712312167, '25'],
  [-37.8763120333, 175.4717215833, '44'],
  [-37.87672545, 175.4712506833, '41'],
  [-37.8772550667, 175.4717175167, '32'],
  [-37.8668511333, 175.4718110667, '166'],
  [-37.8767613667, 175.4717327167, '40'],
  [-37.8733181333, 175.47092935, '81'],
  [-37.86564525, 175.47179185, '172'],
  [-37.866566, 175.47182225, '170'],
  [-37.8709313833, 175.472052, '102'],
  [-37.8773583833, 175.4709902333, '33A'],
  [-37.8718238, 175.4719052833, '100'],
  [-37.8636636, 175.4713474333, '185'],
  [-37.8639432, 175.4718744833, '180'],
  [-37.87639895, 175.4712276333, '43'],
  [-37.86320725, 175.47180795, '190'],
  [-37.87736335, 175.4707706667, '33B'],
  [-37.8635744667, 175.4721996167, '1/186'],
  [-37.8770291667, 175.4712897833, '37'],
  [-37.8744578833, 175.4712959833, '63'],
  [-37.87760745, 175.4717249167, '30'],
  [-37.8748192, 175.47130365, '59'],
  [-37.8647013333, 175.4717920833, '174'],
  [-37.8754668167, 175.4712709333, '55'],
  [-37.8748770833, 175.4717543167, '62'],
  [-37.863631, 175.4717906, '186'],
  [-37.8759205833, 175.4712616667, '51'],
  [-37.86283285, 175.4713374833, '195'],
  [-37.8773474667, 175.4713414333, '35'],
  [-37.87610145, 175.4712462667, '47'],
  [-37.8736575, 175.4709245667, '75'],
  [-37.8743432333, 175.4718551833, '66'],
  [-37.86451155, 175.47179665, '176'],
  [-37.8735859667, 175.4719257333, '74'],
  [-37.8734058167, 175.47132365, '79'],
  [-37.8742359, 175.4712991333, '67'],
  [-37.87358325, 175.4713242167, '77'],
  [-37.87305765, 175.4719396833, '82'],
  [-37.8727949333, 175.4719115167, '86'],
  [-37.8722028667, 175.4741686, '90'],
  [-37.8675567167, 175.4711739833, '137'],
  [-37.8725890333, 175.46970215, '2/95'],
  [-37.8726248333, 175.4710150833, '1/95'],
  [-37.8702623, 175.4720475333, '116'],
  [-37.8780759667, 175.4717211333, '24'],
  [-37.8738727167, 175.4713038, '73'],
  [-37.8739672333, 175.4710486167, '71'],
  [-37.8935260167, 175.4748064, '10'],
  [-37.89273555, 175.4747373, '16'],
  [-37.8919345833, 175.4746388833, '24'],
  [-37.89328595, 175.4747852667, '12'],
  [-37.8938477333, 175.47430505, '8A'],
  [-37.8936160833, 175.47481635, '8'],
  [-37.8920694833, 175.4757293833, '23A'],
  [-37.89206575, 175.4752388667, '23'],
  [-37.8923724, 175.4746924667, '18'],
  [-37.89353315, 175.47444375, '10A'],
  [-37.8899805167, 175.4750166667, '41'],
  [-37.89167325, 175.4757043333, '27A'],
  [-37.89028415, 175.47505045, '39'],
  [-37.892463, 175.47526755, '17'],
  [-37.8918398667, 175.4752066, '25'],
  [-37.8908128167, 175.4750707333, '33'],
  [-37.8904636333, 175.4750504333, '37'],
  [-37.8906359833, 175.47507655, '35'],
  [-37.8916253, 175.47516515, '27'],
  [-37.8909492333, 175.47507265, '31'],
  [-37.8905761667, 175.4744542167, '1/30-5/30'],
  [-37.8881462333, 175.4754198167, '57'],
  [-37.88850555, 175.47524575, '53'],
  [-37.8894041667, 175.47498115, '45'],
  [-37.9014205, 175.4676039667, '9'],
  [-37.9052175667, 175.4691138833, '53'],
  [-37.90503895, 175.46905685, '51'],
  [-37.90533595, 175.4686957333, '55'],
  [-37.90163855, 175.46769255, '17'],
  [-37.9033958, 175.4683840167, '35'],
  [-37.9053689667, 175.46858075, '57'],
  [-37.9012599667, 175.4679458667, '12'],
  [-37.9014051333, 175.46801755, '14'],
  [-37.9015679, 175.4680723333, '16'],
  [-37.9031653, 175.4679986833, '31A'],
  [-37.9007696333, 175.46734585, '1'],
  [-37.9017356333, 175.4681344333, '18'],
  [-37.9019312333, 175.46780625, '19'],
  [-37.9019026, 175.4682113333, '20'],
  [-37.9023515833, 175.4679880667, '23'],
  [-37.9025247833, 175.4680511, '25'],
  [-37.9019499, 175.46872425, '26'],
  [-37.9027011167, 175.4680964167, '27'],
  [-37.90322595, 175.4683034667, '33'],
  [-37.9022090667, 175.46834225, '28'],
  [-37.9028740333, 175.4681630167, '29'],
  [-37.9009473167, 175.4678397833, '2'],
  [-37.9030474, 175.46823325, '31'],
  [-37.9024255333, 175.4684154833, '32'],
  [-37.9024751, 175.4690537, '34A'],
  [-37.9025607, 175.4684754, '34'],
  [-37.9047760167, 175.4688679333, '49'],
  [-37.9035690833, 175.46844705, '37'],
  [-37.9032248, 175.4687414833, '38'],
  [-37.9037398833, 175.4685398, '39'],
  [-37.90425835, 175.4687235833, '45'],
  [-37.9039185, 175.4686071, '41'],
  [-37.9040853333, 175.4686607667, '43'],
  [-37.9044377833, 175.46879205, '47'],
  [-37.9027932167, 175.4685815833, '36'],
  [-37.90099425, 175.46709335, '3'],
  [-37.90111195, 175.4678951333, '4'],
  [-37.9010127333, 175.4674434667, '5'],
  [-37.9012417333, 175.4675368333, '7'],
  [-37.9054492167, 175.4684984667, '59'],
  [-37.9055391, 175.4685278333, '61'],
  [-37.90550535, 175.46878055, '63'],
  [-37.9054566667, 175.46921805, '65'],
  [-37.90230745, 175.4676206667, '21A'],
  [-37.90216175, 175.4679036667, '21'],
  [-37.8808262333, 175.4773818, '55A'],
  [-37.8830005833, 175.4767448167, '16'],
  [-37.8828296667, 175.4767286, '18'],
  [-37.88259875, 175.4772334333, '31'],
  [-37.8824754, 175.47721195, '33'],
  [-37.8831398167, 175.4779190333, '17'],
  [-37.8825963167, 175.4777829, '29'],
  [-37.8842646833, 175.4768462333, '2'],
  [-37.8810851333, 175.476127, '36'],
  [-37.8806964, 175.47760075, '57'],
  [-37.8805952167, 175.4775984333, '59'],
  [-37.8813687667, 175.4765958833, '32'],
  [-37.8824115167, 175.4772049833, '35'],
  [-37.8811797, 175.4765765833, '34'],
  [-37.8815471667, 175.4766046333, '30'],
  [-37.88417235, 175.4773933667, '3'],
  [-37.88174695, 175.4772075667, '39'],
  [-37.8809885833, 175.47654575, '38'],
  [-37.8814635333, 175.4771838167, '43'],
  [-37.8816058667, 175.4771958, '41'],
  [-37.88064845, 175.4765253, '42'],
  [-37.8808178333, 175.4765337333, '40'],
  [-37.883982, 175.4773589667, '5'],
  [-37.8834955667, 175.4767355667, '10'],
  [-37.88350755, 175.4765409, '10A'],
  [-37.8836987667, 175.47736385, '7'],
  [-37.88321935, 175.4767625833, '12'],
  [-37.8833260667, 175.4773372, '13'],
  [-37.8830089, 175.4772931833, '19A'],
  [-37.8831393167, 175.4773106833, '19'],
  [-37.88264695, 175.47671705, '20'],
  [-37.88292945, 175.4775952333, '21'],
  [-37.8824614333, 175.4767002833, '22'],
  [-37.8828817167, 175.4779039, '23'],
  [-37.8823059167, 175.4766897833, '24'],
  [-37.8827997667, 175.4772721833, '25A'],
  [-37.8828034167, 175.4775536833, '25B'],
  [-37.8827016667, 175.4777941, '27'],
  [-37.8828062, 175.47779805, '27A'],
  [-37.8817341833, 175.4766062333, '28'],
  [-37.8813136167, 175.4771594167, '45'],
  [-37.8811630667, 175.4771457, '47'],
  [-37.8809942833, 175.4776755833, '51'],
  [-37.8804464667, 175.4764969833, '44'],
  [-37.8810737, 175.4776356667, '49'],
  [-37.8809778333, 175.4774265, '53A'],
  [-37.8810030333, 175.4771406667, '53'],
  [-37.88079105, 175.47712645, '55'],
  [-37.8835414333, 175.4773520667, '9'],
  [-37.8805955667, 175.4771014667, '61'],
  [-37.8804778167, 175.4770884667, '63'],
  [-37.8802896833, 175.4770558, '65'],
  [-37.8834467833, 175.4778119333, '11'],
  [-37.8878083, 175.4623779167, '49A'],
  [-37.8872817833, 175.45737585, '10'],
  [-37.8877537333, 175.4595533, '27A'],
  [-37.8884375167, 175.45748685, '11B'],
  [-37.8878958, 175.4596416167, '27B'],
  [-37.88824535, 175.45746395, '11A'],
  [-37.8875099833, 175.4575973667, '14'],
  [-37.8866716167, 175.4603215333, '36B'],
  [-37.8871296333, 175.4604902833, '36C'],
  [-37.8873681333, 175.4599526667, '30'],
  [-37.8880297, 175.4601033833, '31A'],
  [-37.8881606833, 175.4601333667, '31B'],
  [-37.8869335833, 175.4608386833, '40A'],
  [-37.8873096333, 175.4609038, '40'],
  [-37.8878578167, 175.4576188333, '13'],
  [-37.8871150667, 175.4574956333, '12'],
  [-37.8878406333, 175.45785455, '15'],
  [-37.8871478667, 175.4578061667, '16A'],
  [-37.8869680833, 175.4578044667, '16B'],
  [-37.8874965167, 175.4577967, '16'],
  [-37.8872507333, 175.4580158333, '18A'],
  [-37.88747815, 175.4580365167, '18'],
  [-37.8880638833, 175.45810725, '19A'],
  [-37.88784345, 175.4580772667, '19'],
  [-37.8877572333, 175.45932705, '25'],
  [-37.8879145667, 175.45669455, '1'],
  [-37.8873702833, 175.4595467333, '26'],
  [-37.8879238167, 175.4569262833, '1A'],
  [-37.8874736, 175.4582577833, '20'],
  [-37.8878260333, 175.4583038167, '21'],
  [-37.8873656333, 175.4597425833, '28'],
  [-37.8879435667, 175.4597720333, '29A'],
  [-37.8881376167, 175.45977945, '29B'],
  [-37.8883413667, 175.4597758333, '29C'],
  [-37.8884945333, 175.45978905, '29D'],
  [-37.8877360167, 175.45978725, '29'],
  [-37.8871679167, 175.4598937333, '30A'],
  [-37.8877368167, 175.45999715, '31'],
  [-37.8873456, 175.4602082167, '32'],
  [-37.8877073333, 175.4602192333, '33'],
  [-37.88687805, 175.4602032667, '34A'],
  [-37.8866636, 175.4602061833, '34B'],
  [-37.8868802667, 175.4603641333, '36A'],
  [-37.8877013333, 175.4604213, '35'],
  [-37.8875414167, 175.4568279333, '2'],
  [-37.8873298167, 175.4604643167, '36'],
  [-37.8876929833, 175.4606236833, '37'],
  [-37.8869503167, 175.4606911333, '38A'],
  [-37.8873173833, 175.46064935, '38'],
  [-37.8880788167, 175.46095015, '39A'],
  [-37.8876923833, 175.4607943167, '39'],
  [-37.88767155, 175.4610391833, '41'],
  [-37.8876050833, 175.4618428, '43'],
  [-37.8876116333, 175.4619894, '45'],
  [-37.88820765, 175.4571291333, '3A'],
  [-37.88840855, 175.4571648833, '3B'],
  [-37.8875992833, 175.4621293167, '47'],
  [-37.88757835, 175.4622876333, '49'],
  [-37.8875702, 175.4625005667, '51'],
  [-37.8875504, 175.46284035, '53'],
  [-37.8875351833, 175.46302475, '55'],
  [-37.88811905, 175.4635122, '57E'],
  [-37.88825965, 175.46351715, '57F'],
  [-37.8882625, 175.4633885, '57G'],
  [-37.8882589333, 175.4632448167, '57H'],
  [-37.8875218833, 175.4632180167, '57'],
  [-37.8875030667, 175.4634566667, '59'],
  [-37.8871363, 175.4643333667, '64'],
  [-37.88744265, 175.4645542333, '65'],
  [-37.8871286333, 175.4645791667, '66'],
  [-37.8876065667, 175.4648085833, '67A'],
  [-37.88744175, 175.4647992167, '67'],
  [-37.88711895, 175.4648136, '68'],
  [-37.8885710333, 175.4571354, '5A'],
  [-37.8886647667, 175.4571676667, '5B'],
  [-37.8874510667, 175.4649796333, '69A'],
  [-37.8875224833, 175.4649906833, '69B'],
  [-37.8878563833, 175.4571620833, '7A'],
  [-37.8880328667, 175.4571656833, '7B'],
  [-37.8875264167, 175.4573541, '8'],
  [-37.88804485, 175.4574312167, '9B'],
  [-37.8875345667, 175.4570015833, '6'],
  [-37.8878647667, 175.45740435, '9A'],
  [-37.8879745833, 175.4634900667, '57D'],
  [-37.8878037333, 175.4633596833, '57B'],
  [-37.8878387167, 175.4631928333, '57A'],
  [-37.8878102333, 175.46349065, '57C'],
  [-37.9019538167, 175.4671126833, '7A'],
  [-37.903244, 175.4676256333, '14A'],
  [-37.9020871667, 175.4668353167, '7'],
  [-37.9027623667, 175.4671213167, '11'],
  [-37.9025892667, 175.4670505333, '10'],
  [-37.9024684667, 175.4672691667, '10A'],
  [-37.90241945, 175.4669742667, '9'],
  [-37.9029300667, 175.4671840333, '12'],
  [-37.90311145, 175.4672579333, '13'],
  [-37.9032782833, 175.4673314833, '14'],
  [-37.9036218833, 175.4674643167, '16'],
  [-37.9037919667, 175.46753785, '17'],
  [-37.90344895, 175.4673941667, '15'],
  [-37.9039705667, 175.4676045333, '18'],
  [-37.9041435833, 175.467671, '19'],
  [-37.9010125167, 175.4664210333, '1A'],
  [-37.9007809667, 175.4663229167, '1'],
  [-37.9043140333, 175.4677303167, '20'],
  [-37.90448985, 175.46780755, '21'],
  [-37.9046493333, 175.4670530667, '23'],
  [-37.9048533833, 175.4675182833, '24'],
  [-37.9012388167, 175.46653205, '2'],
  [-37.9014534667, 175.46660645, '4'],
  [-37.9017320167, 175.4669518333, '5'],
  [-37.9018944667, 175.4667655333, '6'],
  [-37.9022384667, 175.46689735, '8'],
  [-37.90570045, 175.46976825, '72/91'],
  [-37.9051381333, 175.4722857333, '96'],
  [-37.9032204, 175.4703621333, '53'],
  [-37.9053162167, 175.4723414, '98'],
  [-37.9037962833, 175.4711215833, '5/91'],
  [-37.9055880667, 175.4707876167, '108/91'],
  [-37.9045404333, 175.4699855167, '46/91'],
  [-37.9016813667, 175.4703439167, '17'],
  [-37.9047542667, 175.4700433333, '48/91'],
  [-37.9038862333, 175.4703755167, '31/91'],
  [-37.9046661667, 175.4695472667, '56/91'],
  [-37.9033795167, 175.4706831, '10/91'],
  [-37.9049449167, 175.4696617167, '54/91'],
  [-37.90342665, 175.4705010167, '26/91'],
  [-37.9042283333, 175.4698824, '43/91'],
  [-37.9034820167, 175.4702482, '27/91'],
  [-37.9041029833, 175.471257, '3/91'],
  [-37.9035045167, 175.47071685, '11/91'],
  [-37.9034292833, 175.4709543667, '8/91'],
  [-37.9035455167, 175.4705136333, '25/91'],
  [-37.9044278, 175.4696974167, '52/91'],
  [-37.9036199667, 175.4702949333, '28/91'],
  [-37.9050604833, 175.4696742167, '53/91'],
  [-37.9035777167, 175.4701138, '29/91'],
  [-37.9047726833, 175.46981425, '49/91'],
  [-37.9037153, 175.4701772333, '30/91'],
  [-37.90366135, 175.4710693333, '6/91'],
  [-37.9036912333, 175.4708029167, '12/91'],
  [-37.9039544333, 175.4701398833, '39/91'],
  [-37.90384865, 175.4708670667, '13/91'],
  [-37.90441965, 175.4694715667, '58/91'],
  [-37.9039537167, 175.4709042667, '14/91'],
  [-37.9048014667, 175.46941845, '66/91'],
  [-37.90397155, 175.4704078333, '32/91'],
  [-37.9046743167, 175.4697731167, '50/91'],
  [-37.9040982, 175.4709554167, '15/91'],
  [-37.9049822333, 175.4694750833, '67/91'],
  [-37.9042064833, 175.4709969, '16/91'],
  [-37.9039450167, 175.4711861667, '4/91'],
  [-37.9043704167, 175.47106545, '17/91'],
  [-37.9045624167, 175.4693054333, '64/91'],
  [-37.90449515, 175.4711117167, '18/91'],
  [-37.9040047, 175.46996625, '40/91'],
  [-37.9038797333, 175.4706635, '24/91'],
  [-37.9035451833, 175.4710177667, '7/91'],
  [-37.9039780833, 175.4707046333, '23/91'],
  [-37.9045066833, 175.46972115, '51/91'],
  [-37.9041615833, 175.4707864333, '22/91'],
  [-37.9060640333, 175.4699358833, '91/91'],
  [-37.9042534333, 175.47082315, '21/91'],
  [-37.9047130333, 175.4693776833, '65/91'],
  [-37.9044305, 175.47089635, '20/91'],
  [-37.9043041167, 175.46989765, '44/91'],
  [-37.9041919167, 175.4691500833, '61/91'],
  [-37.9044746667, 175.46996645, '45/91'],
  [-37.9042904667, 175.4691828667, '62/91'],
  [-37.9040487167, 175.4697756833, '41/91'],
  [-37.90415055, 175.4693699833, '60/91'],
  [-37.90446065, 175.46926835, '63/91'],
  [-37.9042810333, 175.46945405, '59/91'],
  [-37.9032851, 175.4708958667, '9/91'],
  [-37.90451895, 175.4709371333, '19/91'],
  [-37.9045116833, 175.4694999333, '57/91'],
  [-37.9040854167, 175.4704954667, '33/91'],
  [-37.9043916, 175.4713621667, '1/91'],
  [-37.9041970167, 175.4705370833, '34/91'],
  [-37.9050893833, 175.46956665, '68/91'],
  [-37.9043310833, 175.4706087333, '35/91'],
  [-37.9040848, 175.4696433167, '42/91'],
  [-37.90443305, 175.4706374667, '36/91'],
  [-37.90476785, 175.4695885167, '55/91'],
  [-37.9045282833, 175.4706701333, '37/91'],
  [-37.9042286667, 175.471303, '2/91'],
  [-37.90462665, 175.4707112667, '38/91'],
  [-37.9046719667, 175.4700236667, '47/91'],
  [-37.9063787833, 175.47006835, '93/91'],
  [-37.9052918833, 175.4698329167, '76/91'],
  [-37.9052114833, 175.4700221833, '77/91'],
  [-37.9050883833, 175.4701973667, '79/91'],
  [-37.9053839167, 175.4698613, '75/91'],
  [-37.9052999333, 175.47006295, '78/91'],
  [-37.9051933667, 175.47023875, '80/91'],
  [-37.9052919167, 175.4702715333, '81/91'],
  [-37.9055609, 175.4699386667, '74/91'],
  [-37.9056495333, 175.4699711, '73/91'],
  [-37.9054736, 175.4701402167, '82/91'],
  [-37.9063660167, 175.4715132167, '102/91'],
  [-37.9062675667, 175.4719148667, '118/91'],
  [-37.9062345, 175.4720598833, '134/91'],
  [-37.9061993167, 175.4712732833, '104/91'],
  [-37.9061410333, 175.4715093, '117/91'],
  [-37.90608265, 175.4717494667, '119/91'],
  [-37.9060274833, 175.47199395, '133/91'],
  [-37.9059191, 175.4719566333, '132/91'],
  [-37.9059778667, 175.47169975, '120/91'],
  [-37.90603625, 175.4714595667, '116/91'],
  [-37.9061060667, 175.4711529667, '105/91'],
  [-37.9053162667, 175.4716843, '137/91'],
  [-37.9055131833, 175.4717582167, '136/91'],
  [-37.9055088, 175.471073, '112/91'],
  [-37.9056170833, 175.4711144833, '113/91'],
  [-37.9057647667, 175.4711699333, '114/91'],
  [-37.9058762667, 175.4712157167, '115/91'],
  [-37.9054861167, 175.4707589, '109/91'],
  [-37.9055522167, 175.4701764667, '83/91'],
  [-37.9057089833, 175.4702698167, '84/91'],
  [-37.9058203833, 175.4703197833, '85/91'],
  [-37.90590455, 175.4701097667, '89/91'],
  [-37.9059963, 175.4701506667, '88/91'],
  [-37.90573235, 175.4708471167, '107/91'],
  [-37.9061820167, 175.4702237333, '87/91'],
  [-37.9062864333, 175.4702866167, '86/91'],
  [-37.9058177667, 175.47087525, '106/91'],
  [-37.9064954833, 175.4701769667, '94/91'],
  [-37.9065182667, 175.4703407, '95/91'],
  [-37.90647405, 175.4705396167, '96/91'],
  [-37.906434, 175.4707011, '97/91'],
  [-37.9064003667, 175.47087115, '98/91'],
  [-37.9065184833, 175.4709171667, '100/91'],
  [-37.9053462, 175.4696260167, '69/91'],
  [-37.9054348333, 175.46965845, '70/91'],
  [-37.9056151167, 175.4697359333, '71/91'],
  [-37.9065477667, 175.4707929167, '99/91'],
  [-37.9063361667, 175.4716625167, '103/91'],
  [-37.9064024833, 175.47136415, '101/91'],
  [-37.9062771167, 175.4700270833, '92/91'],
  [-37.90561825, 175.4717954167, '135/91'],
  [-37.9052021167, 175.4714629667, '127/91'],
  [-37.9053039667, 175.4714958833, '128/91'],
  [-37.9055797833, 175.4715935333, '130/91'],
  [-37.9057338, 175.4716617333, '131/91'],
  [-37.9054388, 175.47153415, '129/91'],
  [-37.90521165, 175.4711876167, '126/91'],
  [-37.9053168167, 175.47122065, '125/91'],
  [-37.9054577833, 175.4712800167, '124/91'],
  [-37.9055496333, 175.47131675, '123/91'],
  [-37.9057004333, 175.47138065, '122/91'],
  [-37.9057989, 175.4714176167, '121/91'],
  [-37.9052758833, 175.4709810667, '110/91'],
  [-37.9053744333, 175.4710138667, '111/91'],
  [-37.9029642833, 175.4708119167, '49'],
  [-37.9013200667, 175.47020055, '9'],
  [-37.9059721, 175.4699033333, '90/91'],
  [-37.9009692833, 175.4700359167, '1'],
  [-37.9020093333, 175.4704903167, '25'],
  [-37.9028505, 175.4713808167, '42'],
  [-37.9026220667, 175.4707023167, '41'],
  [-37.9030775167, 175.47144105, '44'],
  [-37.9032627, 175.4715188333, '46'],
  [-37.90279945, 175.4707535, '47'],
  [-37.9034596333, 175.4715854667, '48'],
  [-37.9046305667, 175.4720644, '90'],
  [-37.9048369667, 175.472151, '92'],
  [-37.9049919, 175.4722146, '94'],
  [-37.9036494333, 175.4716701167, '50'],
  [-37.90358525, 175.4846141, '12'],
  [-37.9037579, 175.4852529, '6'],
  [-37.9038024667, 175.4850978, '7'],
  [-37.9037217667, 175.4849037333, '8'],
  [-37.90347035, 175.4850285667, '2'],
  [-37.9032276333, 175.48546265, '3'],
  [-37.9035196167, 175.4852706167, '4'],
  [-37.9036445667, 175.4853146167, '5'],
  [-37.893842, 175.4658828667, '14'],
  [-37.8942232167, 175.4658869, '10'],
  [-37.8942694, 175.4655608, '10A'],
  [-37.8939012167, 175.46629055, '11'],
  [-37.89414105, 175.46563135, '12A'],
  [-37.89403175, 175.4658608667, '12'],
  [-37.8928791667, 175.4657609, '18'],
  [-37.8920411833, 175.4656866167, '26'],
  [-37.8947138333, 175.46562585, '4A'],
  [-37.89482635, 175.4656405333, '4B'],
  [-37.8943928667, 175.4659067667, '8'],
  [-37.89417895, 175.4666384333, '7A'],
  [-37.8941652333, 175.4663256, '7'],
  [-37.8930164333, 175.4657825333, '16'],
  [-37.8945337167, 175.46636655, '3'],
  [-37.8947049667, 175.4662976667, '1'],
  [-37.8943467167, 175.4663510667, '5'],
  [-37.8945939667, 175.46589925, '6A'],
  [-37.8946026667, 175.4655432, '6B'],
  [-37.89400605, 175.4666357, '9A'],
  [-37.89400415, 175.4663002333, '9'],
  [-37.8947237, 175.4659225, '4'],
  [-37.8948905833, 175.4659464167, '2'],
  [-37.8926863, 175.465739, '20'],
  [-37.8923385, 175.4654623833, '24B'],
  [-37.89249375, 175.4657308833, '22'],
  [-37.8923111667, 175.4657147167, '24'],
  [-37.8815449167, 175.4655157, '12'],
  [-37.8822096833, 175.4655813667, '2'],
  [-37.88233595, 175.4651839667, '1'],
  [-37.8816413667, 175.4648852333, '9B'],
  [-37.88217595, 175.4651827, '3'],
  [-37.8816216167, 175.4650913833, '9A'],
  [-37.8814350167, 175.4653094667, '13'],
  [-37.8813971333, 175.4649169833, '11B'],
  [-37.8814120833, 175.4650868167, '11A'],
  [-37.8819977833, 175.4651571333, '5'],
  [-37.8818037833, 175.46516125, '7'],
  [-37.9272509333, 175.5707935167, '17'],
  [-37.92487165, 175.5688565167, '50'],
  [-37.9279805, 175.5715888167, '2/4'],
  [-37.9281482167, 175.57159225, '3/4'],
  [-37.9277371667, 175.5716141833, '1/4'],
  [-37.9283277667, 175.5715995333, '4/4'],
  [-37.9259907667, 175.5697310833, '41'],
  [-37.9139028667, 175.4794934333, '16'],
  [-37.9131072667, 175.4784122, '5'],
  [-37.913859, 175.4793484, '14'],
  [-37.9137596833, 175.4789706167, '10'],
  [-37.9129783833, 175.4779572167, '1'],
  [-37.9134818333, 175.4796230333, '13'],
  [-37.9134313, 175.47942965, '11'],
  [-37.9130481833, 175.4781893667, '3'],
  [-37.9136100333, 175.4785928, '8'],
  [-37.9137780667, 175.47816635, '6A'],
  [-37.9134069333, 175.4779523167, '2'],
  [-37.9134797167, 175.4781646167, '4'],
  [-37.9135479833, 175.4783853833, '6'],
  [-37.9074968667, 175.4759960667, '26'],
  [-37.90790835, 175.4788683333, '53'],
  [-37.9077523333, 175.47593355, '26A'],
  [-37.9075665667, 175.47624025, '30'],
  [-37.9073841167, 175.47837545, '45'],
  [-37.90830365, 175.4786741167, '52'],
  [-37.9087247333, 175.4801247333, '64'],
  [-37.9075075667, 175.4788175333, '51'],
  [-37.9088166, 175.4804266333, '66'],
  [-37.9082595167, 175.4801578667, '65'],
  [-37.9082304, 175.47843325, '50'],
  [-37.90781645, 175.4785779, '49'],
  [-37.9083352333, 175.48044785, '67'],
  [-37.9065845333, 175.4744138667, '15'],
  [-37.9069974, 175.47423525, '12'],
  [-37.9065571167, 175.4727805333, '2'],
  [-37.9066387833, 175.47305845, '4'],
  [-37.9068011, 175.4735746167, '8'],
  [-37.90669225, 175.47329415, '6'],
  [-37.9072826667, 175.4752864833, '18'],
  [-37.9081420333, 175.47812825, '44'],
  [-37.9076585, 175.47803815, '43'],
  [-37.9079773, 175.4776514, '42'],
  [-37.9080697, 175.4779212, '42A'],
  [-37.90758785, 175.4777916167, '41'],
  [-37.90774285, 175.4783192, '47'],
  [-37.9085469333, 175.47804035, '46'],
  [-37.907853, 175.4771642833, '40'],
  [-37.90694245, 175.4762600833, '27A'],
  [-37.90714115, 175.4762523167, '27'],
  [-37.9085940333, 175.4781931, '48'],
  [-37.90842915, 175.4807205833, '69'],
  [-37.90889165, 175.4806537667, '68'],
  [-37.9090825167, 175.4813461833, '72'],
  [-37.9085069833, 175.48098455, '71'],
  [-37.9091493333, 175.4815615167, '74'],
  [-37.9085867333, 175.4812446833, '73'],
  [-37.90638345, 175.4737115833, '9'],
  [-37.9073718833, 175.4770443667, '35'],
  [-37.9076616333, 175.47651175, '34'],
  [-37.9070147167, 175.4757612667, '19'],
  [-37.9080529667, 175.4794295333, '61'],
  [-37.9081081167, 175.4796110667, '63'],
  [-37.9067812333, 175.4766508667, '29'],
  [-37.90727425, 175.4767382167, '33'],
  [-37.9080598, 175.4763364, '32'],
  [-37.9080013, 175.4761604, '32A'],
  [-37.9072168667, 175.4765151833, '31'],
  [-37.9069078, 175.47611375, '21A'],
  [-37.9070925167, 175.4759961167, '21'],
  [-37.9073595833, 175.4755532, '20'],
  [-37.9078311, 175.47552015, '22'],
  [-37.9066715333, 175.4762365333, '23'],
  [-37.9074292167, 175.4757909, '24'],
  [-37.9067200667, 175.4763614333, '25'],
  [-37.9079507667, 175.47594195, '28'],
  [-37.9077839333, 175.4769487333, '38'],
  [-37.9087032167, 175.478581, '54'],
  [-37.90755175, 175.4791360667, '55'],
  [-37.9087507167, 175.47871815, '56'],
  [-37.9075607333, 175.4792694833, '57'],
  [-37.9085885667, 175.4789704, '58A'],
  [-37.908387, 175.47897535, '58'],
  [-37.9078259667, 175.4793328833, '59A'],
  [-37.90801855, 175.47915195, '59'],
  [-37.90845065, 175.4792147, '60'],
  [-37.9086727, 175.4815190333, '75'],
  [-37.9092022333, 175.4817325833, '76'],
  [-37.9087436333, 175.4817835, '77'],
  [-37.9068335333, 175.475831, '19A'],
  [-37.9064835, 175.4740658167, '11'],
  [-37.9068924667, 175.4738985333, '10'],
  [-37.90772245, 175.47673845, '36'],
  [-37.9153057833, 175.4700439333, '8'],
  [-37.9151920167, 175.470103, '7'],
  [-37.9154897833, 175.4704254667, '4'],
  [-37.91544255, 175.4701449833, '6'],
  [-37.9152406333, 175.4705098833, '3'],
  [-37.9155660833, 175.47067085, '2'],
  [-37.9153145667, 175.470762, '1'],
  [-37.915152, 175.4703036833, '5'],
  [-37.8753657, 175.4666292833, '7'],
  [-37.8752355833, 175.4664042833, '5'],
  [-37.8751239167, 175.4667343, '3'],
  [-37.8749005333, 175.4667724833, '1'],
  [-37.8759491, 175.4666146833, '13'],
  [-37.8761423333, 175.4666642667, '15'],
  [-37.8757443667, 175.46657535, '11'],
  [-37.8755500833, 175.4665719333, '9'],
  [-37.8762191, 175.4673812833, '18'],
  [-37.8764603333, 175.4671767333, '22'],
  [-37.87631595, 175.4667095833, '17'],
  [-37.8765421, 175.4670481833, '23'],
  [-37.8764974333, 175.4666557, '19'],
  [-37.8765351667, 175.46685605, '21'],
  [-37.8763332, 175.4671934833, '20'],
  [-37.8761136667, 175.4670612333, '16'],
  [-37.8759115833, 175.4670291, '14'],
  [-37.8757069333, 175.4669862167, '12'],
  [-37.87555015, 175.4673181667, '10'],
  [-37.8754323167, 175.4670474333, '8'],
  [-37.8752163333, 175.4671320667, '6'],
  [-37.8750437, 175.4671685, '4'],
  [-37.87486615, 175.4671727833, '2'],
  [-37.8836992833, 175.4725036, '23A'],
  [-37.8827955833, 175.47167325, '34'],
  [-37.88383525, 175.47247865, '21B'],
  [-37.8836711, 175.4721970333, '23'],
  [-37.88384845, 175.4721985333, '21A'],
  [-37.8832467333, 175.4721379, '31'],
  [-37.8852774167, 175.4718275333, '10'],
  [-37.8841115833, 175.4722314667, '17'],
  [-37.882555, 175.4720817333, '41'],
  [-37.8814569667, 175.4715107167, '46'],
  [-37.8826952667, 175.4720762667, '39'],
  [-37.8834193, 175.4725388, '27'],
  [-37.8834190667, 175.47216485, '29'],
  [-37.8835037667, 175.4725855, '25'],
  [-37.88308205, 175.4721211333, '33'],
  [-37.88081245, 175.47212895, '67A'],
  [-37.8808169167, 175.4719355833, '67'],
  [-37.8854703, 175.4715485833, '8A'],
  [-37.8854802667, 175.4723117333, '7'],
  [-37.8819775333, 175.4720601833, '45'],
  [-37.8820338, 175.4715768333, '38'],
  [-37.88505425, 175.4725552, '11A'],
  [-37.8816020167, 175.4715219833, '44'],
  [-37.8818502167, 175.4715604167, '40'],
  [-37.8817451, 175.4715327167, '42'],
  [-37.8817693333, 175.4720335, '47'],
  [-37.8826490167, 175.4716679, '36'],
  [-37.882937, 175.4720998667, '35'],
  [-37.8828116667, 175.4720924167, '37'],
  [-37.8851022, 175.4718166333, '12'],
  [-37.8817387667, 175.47236985, '49'],
  [-37.8812409667, 175.4710926333, '50'],
  [-37.8815675333, 175.4723074, '51A'],
  [-37.8816046833, 175.4720110833, '51'],
  [-37.8812419, 175.4709490833, '52'],
  [-37.8811635333, 175.4709188667, '54'],
  [-37.8814256833, 175.47197785, '55'],
  [-37.8811236333, 175.4712705167, '56'],
  [-37.8811993, 175.4719696333, '57'],
  [-37.88108405, 175.4714977167, '58'],
  [-37.8809842667, 175.4719474833, '59'],
  [-37.8809340167, 175.4725577, '61'],
  [-37.8808571667, 175.47147535, '62A'],
  [-37.8808698167, 175.4712961833, '62B'],
  [-37.88095885, 175.4727073167, '63'],
  [-37.8805953667, 175.471471, '64'],
  [-37.8808394, 175.4727179833, '65'],
  [-37.8856441667, 175.4723274, '5'],
  [-37.8856559833, 175.47193445, '6A'],
  [-37.8858045667, 175.4719521, '6'],
  [-37.8854608833, 175.4718410833, '8'],
  [-37.8852512333, 175.4722922833, '9'],
  [-37.8812897833, 175.47150895, '48'],
  [-37.8846497167, 175.4717921833, '18'],
  [-37.8850509167, 175.4722740667, '11'],
  [-37.8849657833, 175.4718045667, '14'],
  [-37.8863145, 175.47202075, '4'],
  [-37.8863136833, 175.4724193333, '3'],
  [-37.8848130833, 175.4725039833, '13A'],
  [-37.8848266333, 175.47225735, '13'],
  [-37.8839960167, 175.4722167, '19'],
  [-37.8848076833, 175.47180565, '16'],
  [-37.8847455833, 175.4722526833, '15'],
  [-37.8850477, 175.4726911167, '11B'],
  [-37.8941738167, 175.4707689, '84D'],
  [-37.8940840667, 175.4708939333, '84C'],
  [-37.8941785, 175.4709219, '84B'],
  [-37.8941324333, 175.47094385, '84A'],
  [-37.8935136, 175.4612187667, '11'],
  [-37.8939243167, 175.4608987333, '10'],
  [-37.8933340667, 175.4717043167, '100'],
  [-37.8936952, 175.4650319333, '42'],
  [-37.8932683, 175.4655177833, '41'],
  [-37.8936863667, 175.46521985, '44'],
  [-37.8936738833, 175.4655087667, '46'],
  [-37.8938362667, 175.4624257833, '22'],
  [-37.8937817, 175.4635414833, '30'],
  [-37.8938118, 175.4643993167, '40A'],
  [-37.8937340833, 175.4643627, '40'],
  [-37.8935297167, 175.4682022667, '68'],
  [-37.8932907833, 175.4653249667, '39'],
  [-37.8935900167, 175.4670001333, '54'],
  [-37.89330695, 175.4650841, '37'],
  [-37.8927154833, 175.4709052, '65B'],
  [-37.8927901, 175.4708936667, '65A'],
  [-37.8927898667, 175.4705552833, '63A'],
  [-37.8930308333, 175.461289, '13A'],
  [-37.8932869167, 175.46127415, '13'],
  [-37.89365705, 175.4657872833, '48'],
  [-37.8939401, 175.46390025, '32A'],
  [-37.8936144167, 175.4665801333, '52'],
  [-37.89383355, 175.4665993833, '52A'],
  [-37.8932530667, 175.47349375, '120'],
  [-37.8934369833, 175.4623886667, '19'],
  [-37.8942868333, 175.4610974, '12'],
  [-37.89390075, 175.46130575, '14'],
  [-37.8934877, 175.4615844, '15'],
  [-37.89438475, 175.4619340667, '16A'],
  [-37.89440795, 175.46167145, '16'],
  [-37.89348165, 175.4617730167, '17'],
  [-37.8938709333, 175.46165795, '18'],
  [-37.8933871167, 175.4633617, '27'],
  [-37.8934256333, 175.46270255, '21'],
  [-37.8934101, 175.4630095833, '23'],
  [-37.8938231667, 175.4626998167, '24'],
  [-37.8938185, 175.4629043667, '26'],
  [-37.8933327, 175.4599851667, '1'],
  [-37.8938655, 175.4619277667, '20'],
  [-37.8933737667, 175.4636349, '29'],
  [-37.8933599167, 175.4638405667, '31'],
  [-37.8937605833, 175.4638030667, '32'],
  [-37.8933501333, 175.4640728, '33'],
  [-37.89409735, 175.4639711333, '34'],
  [-37.89333535, 175.46433465, '35'],
  [-37.8937382833, 175.4641705, '36'],
  [-37.8938094833, 175.46310885, '28'],
  [-37.8937422833, 175.4642690333, '38'],
  [-37.8932706, 175.46028355, '3A'],
  [-37.8934162167, 175.4602382333, '3'],
  [-37.8935366333, 175.4605623667, '5'],
  [-37.8935312, 175.4607884833, '7'],
  [-37.89396845, 175.4602069333, '8'],
  [-37.8935128167, 175.4609781167, '9'],
  [-37.8932981167, 175.47301005, '108'],
  [-37.8932691667, 175.4732267667, '110'],
  [-37.8936267667, 175.47335325, '112A'],
  [-37.8938256167, 175.4733656, '112B'],
  [-37.8936103333, 175.4733669833, '112'],
  [-37.8937215333, 175.4735637667, '114'],
  [-37.89365715, 175.4738653167, '116'],
  [-37.8935390333, 175.4735507333, '118'],
  [-37.8934577667, 175.4693120833, '70'],
  [-37.8929881833, 175.4703184667, '59'],
  [-37.8929812667, 175.4706668833, '63'],
  [-37.8929615667, 175.47086305, '65'],
  [-37.8929371167, 175.4712434167, '69'],
  [-37.8929520667, 175.47105645, '67'],
  [-37.89367425, 175.46743525, '58A'],
  [-37.8937744667, 175.4673928, '58B'],
  [-37.8935667833, 175.46736855, '58'],
  [-37.89367375, 175.4675524167, '60A'],
  [-37.8937666333, 175.4676028333, '60B'],
  [-37.8935516833, 175.46756615, '60'],
  [-37.8935477333, 175.4677751333, '62'],
  [-37.8935387833, 175.4679283333, '64'],
  [-37.8935372333, 175.4680373167, '66'],
  [-37.8934518, 175.4694155833, '72'],
  [-37.8934506167, 175.4695295167, '74'],
  [-37.8934785833, 175.4697087167, '76'],
  [-37.8934174, 175.4705130167, '82'],
  [-37.8934133, 175.4707143833, '84'],
  [-37.89339765, 175.4708925667, '86'],
  [-37.8937520167, 175.4710181667, '88'],
  [-37.8933705, 175.47113315, '90'],
  [-37.8934223167, 175.4702347833, '78'],
  [-37.8933635, 175.4712602167, '92'],
  [-37.8933623333, 175.4713753167, '94'],
  [-37.89334455, 175.4715971333, '98'],
  [-37.8933610333, 175.4714828333, '96'],
  [-37.89307625, 175.4690541333, '2/53'],
  [-37.8930733667, 175.46912325, '3/53'],
  [-37.8930706333, 175.4691856, '4/53'],
  [-37.89306775, 175.4692547333, '5/53'],
  [-37.8930755833, 175.4687906833, '47'],
  [-37.8930806333, 175.4689783167, '1/53'],
  [-37.8937726, 175.46406345, '36A'],
  [-37.8940399167, 175.4626443667, '24A'],
  [-37.89306665, 175.4694318, '57A'],
  [-37.8929485833, 175.4694292, '57B'],
  [-37.893691, 175.4662858833, '50'],
  [-37.892929, 175.4695717833, '57C'],
  [-37.8818993667, 175.48831235, '10'],
  [-37.8819047, 175.4884493667, '9'],
  [-37.8818925167, 175.4887367833, '8'],
  [-37.8817909833, 175.4886448, '7'],
  [-37.88156225, 175.4884151333, '5'],
  [-37.8816410667, 175.4884968833, '6'],
  [-37.8817882667, 175.4881434333, '12'],
  [-37.8820450667, 175.4880255, '14'],
  [-37.8820399833, 175.4881601833, '13'],
  [-37.8817013833, 175.48815045, '11'],
  [-37.8814522333, 175.4882864667, '4'],
  [-37.88135345, 175.4881963833, '3'],
  [-37.89047955, 175.3660982833, '48'],
  [-37.8939863833, 175.3676102167, '84'],
  [-37.8908236333, 175.3668215167, '57'],
  [-37.8927242667, 175.3669994667, '72'],
  [-37.89707325, 175.3696241833, '111'],
  [-37.8951834, 175.3681841167, '96'],
  [-37.8891679333, 175.3661342, '25'],
  [-37.8990757167, 175.4813831667, '12'],
  [-37.8990598, 175.4826089667, '27'],
  [-37.8996862, 175.48382855, '34'],
  [-37.8998746167, 175.4868621833, '99'],
  [-37.9001283, 175.4864203833, '97'],
  [-37.90028175, 175.4875789833, '111'],
  [-37.9004845333, 175.4875032167, '113'],
  [-37.9005451667, 175.4877341667, '115'],
  [-37.8987095167, 175.48150085, '15'],
  [-37.8987892, 175.4817609, '17'],
  [-37.8991357, 175.48159105, '14'],
  [-37.89891375, 175.4808869667, '10'],
  [-37.8985199667, 175.4808965667, '11'],
  [-37.8985627833, 175.4811206333, '13'],
  [-37.8992842667, 175.4821156167, '18-20'],
  [-37.8988612333, 175.48195285, '19'],
  [-37.8993973833, 175.4824338, '22'],
  [-37.8989453833, 175.48216625, '23'],
  [-37.8994684833, 175.4826182833, '24'],
  [-37.8989983, 175.48239085, '25'],
  [-37.8995365667, 175.4828116833, '26'],
  [-37.8982566833, 175.4800233833, '1'],
  [-37.8995900333, 175.48303525, '28'],
  [-37.8991642833, 175.4829475167, '29'],
  [-37.8996510167, 175.4832267667, '30'],
  [-37.899284, 175.4832051333, '31'],
  [-37.8983305, 175.4802590667, '3'],
  [-37.8985982333, 175.4800186167, '2'],
  [-37.8995170333, 175.4845078667, '49'],
  [-37.8987404667, 175.4802334667, '4'],
  [-37.89943635, 175.4849588167, '77'],
  [-37.8983839667, 175.4804605, '5'],
  [-37.8987906833, 175.4804517, '6'],
  [-37.89971175, 175.4849414, '81'],
  [-37.8984425333, 175.4806757, '7'],
  [-37.8988546833, 175.4806650333, '8'],
  [-37.8982073167, 175.4808983833, '9'],
  [-37.9002304333, 175.4868039667, '101'],
  [-37.8997452667, 175.48737465, '103'],
  [-37.9001569667, 175.4873521333, '105A'],
  [-37.90035675, 175.4871693, '105'],
  [-37.89977645, 175.4853644833, '85'],
  [-37.8998911833, 175.4857328667, '93'],
  [-37.89830875, 175.4810073667, '11A'],
  [-37.8991998, 175.4818039833, '16'],
  [-37.9000736, 175.48765565, '109'],
  [-37.8998738833, 175.4877091, '107'],
  [-37.8584179167, 175.3917306, '28C'],
  [-37.8604560167, 175.3943771, '27'],
  [-37.8594062, 175.39328765, '22'],
  [-37.8602464667, 175.3945281333, '25'],
  [-37.8580738, 175.3913907167, '28B'],
  [-37.8588583833, 175.3948410167, '10'],
  [-37.8597253167, 175.3943257167, '20'],
  [-37.8594598667, 175.3949546667, '17'],
  [-37.85742675, 175.3934756833, '28D'],
  [-37.85779025, 175.3909575667, '28A'],
  [-37.8602461333, 175.39392145, '24'],
  [-37.8615513167, 175.3930931833, '30'],
  [-37.8615702833, 175.3936576333, '41'],
  [-37.8648762167, 175.391556, '85'],
  [-37.8669371833, 175.38969465, '116'],
  [-37.8656294833, 175.39053055, '96'],
  [-37.8627939333, 175.3928152833, '57'],
  [-37.8642163, 175.3938465167, '63B'],
  [-37.8633075167, 175.3925197167, '63A'],
  [-37.8752946833, 175.47600165, '16'],
  [-37.8752789, 175.4745710667, '26'],
  [-37.8752698667, 175.4741175667, '30'],
  [-37.8752788833, 175.4747855667, '24'],
  [-37.8753729833, 175.4773013667, '4'],
  [-37.8752503333, 175.47339515, '36'],
  [-37.8753239, 175.4768918333, '8'],
  [-37.8752590667, 175.4736461333, '34'],
  [-37.8756213167, 175.4747827833, '25'],
  [-37.8752682333, 175.4738759333, '32'],
  [-37.8752943, 175.47621685, '14'],
  [-37.8755946667, 175.4783229167, '2'],
  [-37.8757436, 175.47737735, '7'],
  [-37.8758519, 175.4778569167, '3'],
  [-37.8756174833, 175.4745228, '27'],
  [-37.8756574833, 175.4762356, '15'],
  [-37.8756050833, 175.4734895, '33'],
  [-37.875302, 175.4766701833, '10'],
  [-37.8756027333, 175.4736947333, '31'],
  [-37.8752780667, 175.4758057, '18'],
  [-37.8757905833, 175.477583, '5'],
  [-37.8756395833, 175.4758414333, '19'],
  [-37.8756402, 175.4760084333, '17'],
  [-37.8752715833, 175.4751979, '20'],
  [-37.8757130167, 175.4771411333, '9'],
  [-37.8752756833, 175.47501635, '22'],
  [-37.87527695, 175.47433525, '28'],
  [-37.8756425833, 175.4752112667, '21'],
  [-37.8752937833, 175.4764377, '12'],
  [-37.87559675, 175.4732172, '35'],
  [-37.8753504333, 175.477108, '6'],
  [-37.8755737333, 175.4729657167, '37'],
  [-37.8756244333, 175.4743205667, '29'],
  [-37.8755172667, 175.4727099833, '39'],
  [-37.8756327333, 175.4750188, '23'],
  [-37.8754463333, 175.4724567833, '41'],
  [-37.8753804667, 175.4721916167, '43'],
  [-37.8753413, 175.4719123167, '45'],
  [-37.8751775167, 175.4728065, '40'],
  [-37.87523985, 175.4731198167, '38'],
  [-37.9129636333, 175.47354695, '15'],
  [-37.9129915667, 175.4741582833, '10'],
  [-37.9130924, 175.4741147667, '12'],
  [-37.91301345, 175.4738697833, '14'],
  [-37.9125089, 175.47363755, '3'],
  [-37.9126150667, 175.4743185833, '4'],
  [-37.9126618333, 175.4735482833, '5'],
  [-37.9125892, 175.47392305, '6'],
  [-37.9127883167, 175.47388245, '8'],
  [-37.9126731333, 175.473192, '7'],
  [-37.91275485, 175.47314795, '9'],
  [-37.9128106333, 175.4733799667, '11'],
  [-37.9123932, 175.4739944667, '2'],
  [-37.9123316833, 175.4737106167, '1'],
  [-37.9838611667, 175.5750239333, '209'],
  [-37.9690023333, 175.5700330333, '12'],
  [-37.9711171, 175.5702027833, '25'],
  [-37.9779899, 175.570433, '1/122'],
  [-37.97820695, 175.57005845, '2/122'],
  [-37.9800575, 175.5723918333, '153'],
  [-37.9811843, 175.5731835, '177'],
  [-37.9754233167, 175.57078555, '95'],
  [-37.8838929167, 175.4818853167, '12'],
  [-37.8837344667, 175.4818862, '14'],
  [-37.8835817667, 175.4818741, '16'],
  [-37.8834241, 175.4818550667, '18'],
  [-37.8832506167, 175.48183555, '20'],
  [-37.8830817667, 175.4818428833, '22'],
  [-37.8828965167, 175.48182015, '24'],
  [-37.8827122833, 175.4817928, '26'],
  [-37.8814133667, 175.4817274333, '44'],
  [-37.8813040833, 175.48171155, '46'],
  [-37.8810746667, 175.4817141833, '48'],
  [-37.8809023, 175.4816841, '50'],
  [-37.8807272167, 175.4816891167, '52'],
  [-37.8805686833, 175.4816589167, '54'],
  [-37.8803979167, 175.4816530833, '56'],
  [-37.8801843833, 175.48158535, '58'],
  [-37.8825403667, 175.4813836167, '32A'],
  [-37.88253505, 175.4817773, '32'],
  [-37.8825069167, 175.48115065, '34'],
  [-37.88240895, 175.4812873333, '36'],
  [-37.8823411, 175.4817443167, '38'],
  [-37.8822324, 175.4817659167, '40'],
  [-37.8852853, 175.4825293667, '1'],
  [-37.8852325667, 175.4820864167, '2'],
  [-37.8856616, 175.4830290667, '3'],
  [-37.8851546, 175.4819058667, '4'],
  [-37.8853310833, 175.4831131333, '5'],
  [-37.8851287833, 175.4816127333, '6'],
  [-37.8827869667, 175.4815392833, '26B'],
  [-37.88484925, 175.4820581167, '8'],
  [-37.9024855, 175.4814230667, '6'],
  [-37.9027508667, 175.48132635, '2'],
  [-37.90267385, 175.4810493833, '3'],
  [-37.902509, 175.4810477333, '4'],
  [-37.90239855, 175.4812007, '5'],
  [-37.8861399167, 175.4659005167, '2A'],
  [-37.8858972, 175.4701092167, '36'],
  [-37.8867484667, 175.4678494333, '19'],
  [-37.8861574833, 175.46575525, '2'],
  [-37.8864493167, 175.4662703167, '3'],
  [-37.88622685, 175.47015215, '39'],
  [-37.88624375, 175.4699778833, '37'],
  [-37.8863943167, 175.4703065667, '39A'],
  [-37.8858773667, 175.4704395333, '38'],
  [-37.8866652833, 175.4663845667, '3A'],
  [-37.8862623667, 175.4706270167, '41'],
  [-37.8856218833, 175.4704532333, '40'],
  [-37.8854065833, 175.4706356333, '42B'],
  [-37.88625425, 175.4707564167, '43'],
  [-37.88541165, 175.4704709667, '42A'],
  [-37.8861368333, 175.47271145, '55'],
  [-37.886122, 175.4661553833, '4'],
  [-37.8863355167, 175.4685020667, '27'],
  [-37.8865969667, 175.4687519167, '29A'],
  [-37.8865831, 175.4689422667, '31A'],
  [-37.8860333167, 175.46789315, '20'],
  [-37.8858932167, 175.4702396667, '36A'],
  [-37.88643745, 175.4660770167, '1'],
  [-37.8857492, 175.46868685, '30A'],
  [-37.8855154167, 175.4686515333, '30B'],
  [-37.8856861, 175.46828205, '24A'],
  [-37.8860060667, 175.4682543333, '24'],
  [-37.8863518833, 175.4681365167, '23'],
  [-37.8860244, 175.4680726833, '22'],
  [-37.8860988667, 175.4665564833, '10'],
  [-37.8863865333, 175.4673575, '11'],
  [-37.8863826833, 175.4675404, '13'],
  [-37.8863788667, 175.4677124167, '15'],
  [-37.8860585833, 175.4674608333, '14'],
  [-37.8856044667, 175.46749745, '16A'],
  [-37.8857502, 175.46754885, '16'],
  [-37.8864570833, 175.4677168333, '17'],
  [-37.8860457333, 175.4676692, '18'],
  [-37.8867451667, 175.4680089167, '19A'],
  [-37.8858168333, 175.4717908, '58'],
  [-37.8866057333, 175.4666266833, '5A'],
  [-37.8864473333, 175.4665519333, '5'],
  [-37.88573305, 175.4662191833, '6'],
  [-37.8861234333, 175.4729670667, '57'],
  [-37.8861040833, 175.4732588, '59'],
  [-37.8857812833, 175.4727290333, '62'],
  [-37.8860733167, 175.47367975, '63'],
  [-37.8853214167, 175.47302445, '64A'],
  [-37.8857647, 175.4729568833, '64'],
  [-37.8860630667, 175.4741376333, '65'],
  [-37.8855514167, 175.4731432833, '66A'],
  [-37.8857605333, 175.4732639667, '66'],
  [-37.88604615, 175.4744234333, '67'],
  [-37.8857253333, 175.4734757667, '68'],
  [-37.8860271667, 175.4749003, '71'],
  [-37.8864273833, 175.4668194167, '7'],
  [-37.8861134167, 175.4663483833, '8'],
  [-37.88530955, 175.4734951667, '72A'],
  [-37.8853649167, 175.4735031333, '72'],
  [-37.8857145667, 175.47370235, '74'],
  [-37.88570935, 175.4738793833, '76'],
  [-37.8856962833, 175.4740871833, '78'],
  [-37.8855425, 175.4740492667, '80'],
  [-37.8855359667, 175.47421665, '82'],
  [-37.8856920333, 175.4742632667, '84'],
  [-37.88567285, 175.4743871833, '86'],
  [-37.8856348, 175.47498665, '88'],
  [-37.8864008667, 175.4671270833, '9'],
  [-37.8859601833, 175.47522375, '73'],
  [-37.8859930167, 175.4754003167, '75'],
  [-37.88563045, 175.4752063667, '90'],
  [-37.8856196667, 175.4754834167, '94'],
  [-37.8855985333, 175.4757720333, '98'],
  [-37.8852094333, 175.4756059333, '96'],
  [-37.8856225333, 175.4706336667, '44'],
  [-37.8863443167, 175.4711711167, '45A'],
  [-37.8862241333, 175.47112885, '45'],
  [-37.8858591, 175.4707636333, '46'],
  [-37.8862151, 175.4713376833, '47'],
  [-37.88584785, 175.4710055, '48'],
  [-37.8863784667, 175.4716221167, '49A'],
  [-37.88619305, 175.4716161667, '49'],
  [-37.8854010167, 175.4710779333, '50A'],
  [-37.8855194, 175.4710888, '50'],
  [-37.8861586167, 175.4718484, '51'],
  [-37.8855134333, 175.4712143833, '52'],
  [-37.8858417833, 175.4713232833, '54'],
  [-37.8858254, 175.4715816333, '56'],
  [-37.8859913, 175.4685190667, '28'],
  [-37.8863223167, 175.4686848833, '29'],
  [-37.8859773333, 175.46879095, '30'],
  [-37.8863225167, 175.4688814167, '31'],
  [-37.8859628333, 175.4690224667, '32'],
  [-37.8863278333, 175.4690195667, '33'],
  [-37.8860351333, 175.4746824, '69'],
  [-37.88563915, 175.4684005167, '26'],
  [-37.8863489, 175.4683084, '25'],
  [-37.8866069, 175.4673016, '11A'],
  [-37.8868120167, 175.4673208833, '11B'],
  [-37.88578115, 175.4680634667, '22A'],
  [-37.8863727, 175.4679364, '21'],
  [-37.8858363, 175.4659994, '4A'],
  [-37.88658795, 175.4674919167, '13A'],
  [-37.92234345, 175.4747052, '199'],
  [-37.92177305, 175.4769218333, '2'],
  [-37.9221347833, 175.47694995, '1'],
  [-37.9222941667, 175.47512075, '165'],
  [-37.9219244667, 175.4755311667, '126'],
  [-37.92194885, 175.4751084333, '164'],
  [-37.92227225, 175.4756573333, '109'],
  [-37.9226473833, 175.47590455, '105'],
  [-37.9217738833, 175.4766539667, '38'],
  [-37.9226126333, 175.4765605333, '45'],
  [-37.9221432333, 175.4762786, '51'],
  [-37.92185925, 175.4759778667, '80'],
  [-37.9219880167, 175.4744712833, '230'],
  [-37.9213271, 175.4744695667, '200'],
  [-37.9210363333, 175.4743909167, '210'],
  [-37.9206876333, 175.4744863, '220'],
  [-37.9212772667, 175.4748825167, '184'],
  [-37.9213329, 175.4754072167, '194'],
  [-37.92179965, 175.4763127667, '50'],
  [-37.9226488667, 175.4760626667, '101'],
  [-37.9224377167, 175.4742912, '231'],
  [-37.9222663833, 175.4741209667, '253'],
  [-37.9220891, 175.4742094833, '250'],
  [-37.8763709833, 175.4737251167, '6'],
  [-37.8762928, 175.4740830833, '7'],
  [-37.8757872, 175.47372185, '2'],
  [-37.8759274833, 175.4737143667, '4'],
  [-37.8761889833, 175.4744309833, '5B'],
  [-37.8760917667, 175.4744256833, '5A'],
  [-37.8760035, 175.47408515, '3'],
  [-37.8758006, 175.4741481167, '1'],
  [-37.8945807833, 175.4731283, '92'],
  [-37.8952838, 175.4659743667, '9'],
  [-37.8945913667, 175.47286075, '88'],
  [-37.8948307167, 175.4678840833, '26'],
  [-37.8946495333, 175.4715883833, '68'],
  [-37.8955784167, 175.4666195833, '17'],
  [-37.8950308833, 175.4707890333, '55'],
  [-37.8950268333, 175.4708643, '57'],
  [-37.8950210333, 175.4709645333, '59'],
  [-37.8950726167, 175.4692980667, '35'],
  [-37.8948167167, 175.4681206667, '28'],
  [-37.89480715, 175.4683576167, '30'],
  [-37.89448235, 175.47392275, '100'],
  [-37.8949025833, 175.4736886667, '101'],
  [-37.8944604833, 175.4740989333, '102'],
  [-37.8940345667, 175.4741795333, '104'],
  [-37.8948037, 175.4748156667, '105'],
  [-37.8944383833, 175.4744140333, '106'],
  [-37.8949698833, 175.4659329667, '10'],
  [-37.8949612167, 175.4663892333, '12'],
  [-37.8949153, 175.46660965, '14'],
  [-37.8948991667, 175.46678365, '16'],
  [-37.8947661, 175.46694865, '18A'],
  [-37.8944432333, 175.4669301, '18B'],
  [-37.8948852, 175.4669605667, '18'],
  [-37.8948780167, 175.46712785, '20'],
  [-37.8944023, 175.4672810833, '22B'],
  [-37.8947610167, 175.46729965, '22A'],
  [-37.8948679667, 175.46733215, '22'],
  [-37.8948783833, 175.46748345, '1/24-7/24'],
  [-37.8947230167, 175.4702766667, '42'],
  [-37.8946909667, 175.4707959333, '54'],
  [-37.8946726833, 175.4711023333, '60'],
  [-37.8946703833, 175.4712066833, '62'],
  [-37.8946656, 175.4712626667, '64'],
  [-37.8949888833, 175.4656431, '6'],
  [-37.89493175, 175.4729810833, '93'],
  [-37.8945739333, 175.47341895, '94'],
  [-37.8949277, 175.4731673, '95'],
  [-37.89438165, 175.4736724333, '96A'],
  [-37.8945503667, 175.4736765833, '96'],
  [-37.8949105333, 175.47340155, '97A'],
  [-37.8942335833, 175.4737639667, '98'],
  [-37.8946295667, 175.4718361, '72'],
  [-37.89462675, 175.4719766167, '74'],
  [-37.8949939167, 175.4719069333, '77'],
  [-37.8946185167, 175.4722803667, '82'],
  [-37.8949549, 175.4725255167, '87'],
  [-37.8949826333, 175.4657729, '8'],
  [-37.8952739667, 175.4662657333, '11'],
  [-37.8954714167, 175.4664023833, '13A'],
  [-37.8955781667, 175.46640275, '13B'],
  [-37.8952808167, 175.4663722, '13'],
  [-37.89527365, 175.4665192833, '15'],
  [-37.8956551167, 175.4661953667, '11B'],
  [-37.8953330833, 175.4650771, '1'],
  [-37.8950785667, 175.4691175167, '33'],
  [-37.8950110333, 175.4654238667, '2'],
  [-37.8950599167, 175.4704818, '45'],
  [-37.8950526167, 175.4705562667, '47'],
  [-37.8950517333, 175.4706304167, '49'],
  [-37.8950748667, 175.4694276667, '41'],
  [-37.8953314667, 175.4653118333, '3'],
  [-37.8950057833, 175.46551395, '4'],
  [-37.8950353, 175.4734756833, '97'],
  [-37.8950013, 175.4717792, '75'],
  [-37.8950426833, 175.4706778167, '51'],
  [-37.89503905, 175.4707278833, '53'],
  [-37.8950147333, 175.4710415167, '61'],
  [-37.8950166833, 175.4711306, '63'],
  [-37.8950141, 175.4712134833, '65'],
  [-37.8950130833, 175.4712694167, '67'],
  [-37.8950105, 175.4713271, '69'],
  [-37.8950101667, 175.4713877667, '71'],
  [-37.8950061333, 175.4714993167, '73'],
  [-37.8953044, 175.4655703333, '5'],
  [-37.8953043, 175.4657896167, '7'],
  [-37.8948314667, 175.46896985, '36'],
  [-37.8944233667, 175.4670945167, '20B'],
  [-37.89476705, 175.4671119, '20A'],
  [-37.8948155167, 175.46873695, '34'],
  [-37.8785435, 175.4391193, '108'],
  [-37.85482825, 175.43943885, '372'],
  [-37.8843674667, 175.44077705, '44'],
  [-37.8514708333, 175.44301855, '414'],
  [-37.8786210833, 175.4386722333, '107'],
  [-37.8536346167, 175.43854, '2/377'],
  [-37.88482555, 175.43861845, '37'],
  [-37.85393405, 175.4384665833, '1/377'],
  [-37.87792065, 175.43870995, '115'],
  [-37.8616766, 175.43942835, '296'],
  [-37.8758269167, 175.439114, '136'],
  [-37.8611102167, 175.4393358, '302'],
  [-37.8630311167, 175.4365396167, '279'],
  [-37.8653560833, 175.4373495833, '253'],
  [-37.8757949833, 175.4386379333, '137'],
  [-37.8786179833, 175.4342996333, '2/105'],
  [-37.8874004, 175.4391212667, '1/10-2/10'],
  [-37.8447363167, 175.43930545, '482'],
  [-37.88403545, 175.4386151333, '45'],
  [-37.8717442667, 175.4349390667, '183'],
  [-37.8767875333, 175.4386578667, '127'],
  [-37.8797060833, 175.4386293833, '93'],
  [-37.8866638167, 175.4390628, '18'],
  [-37.8791973, 175.4386315, '97'],
  [-37.88585575, 175.4362985167, '19'],
  [-37.8790987667, 175.4391399833, '100'],
  [-37.8771662, 175.43926595, '124'],
  [-37.8838361, 175.4391195833, '48'],
  [-37.8857025667, 175.4423457333, '30'],
  [-37.8854774667, 175.4423092, '3/30'],
  [-37.8449495333, 175.43932215, '480'],
  [-37.8540070333, 175.4394581833, '376'],
  [-37.8831838833, 175.4385145, '55'],
  [-37.8588749833, 175.4393561333, '326'],
  [-37.86279375, 175.4385341667, '281'],
  [-37.8445601333, 175.43930445, '484'],
  [-37.84437095, 175.43930065, '486'],
  [-37.8788133833, 175.4351573667, '1/105'],
  [-37.8800643333, 175.4356186, '1/93'],
  [-37.87918835, 175.4355875333, '2/93'],
  [-37.88086735, 175.4358693833, '83'],
  [-37.88697085, 175.4385406333, '15'],
  [-37.8505857167, 175.4386953333, '425'],
  [-37.8857656333, 175.4386266333, '21'],
  [-37.8517299333, 175.43952155, '404'],
  [-37.8859354667, 175.4391316833, '20'],
  [-37.8643110167, 175.43852915, '269'],
  [-37.8638944167, 175.4352222, '271'],
  [-37.8629044167, 175.4394276667, '280'],
  [-37.8636698333, 175.4384519167, '273'],
  [-37.87065885, 175.4387204333, '197'],
  [-37.870552, 175.4392104333, '198'],
  [-37.86847865, 175.4362560333, '215'],
  [-37.8682894833, 175.4387331667, '221'],
  [-37.8723437333, 175.4386659167, '179'],
  [-37.8713473833, 175.4386830333, '191'],
  [-37.8803684, 175.4391223, '84'],
  [-37.8801818167, 175.4386532333, '89'],
  [-37.8795138833, 175.4391232667, '98'],
  [-37.88233015, 175.4385688167, '67'],
  [-37.8822730833, 175.439127, '68'],
  [-37.8815140333, 175.4385229167, '75'],
  [-37.88161725, 175.43921275, '76'],
  [-37.88298115, 175.4391210167, '60'],
  [-37.88356985, 175.44183935, '54'],
  [-37.88688885, 175.4390723333, '16'],
  [-37.8854630667, 175.44062525, '1/30'],
  [-37.8857315833, 175.4406345667, '2/30'],
  [-37.8850814333, 175.4391024667, '32'],
  [-37.85615335, 175.4394051333, '358'],
  [-37.8484322833, 175.4386304333, '451'],
  [-37.849595, 175.4395278833, '438'],
  [-37.8685579333, 175.43929385, '222'],
  [-37.8673376667, 175.4387301333, '231'],
  [-37.8672263, 175.4391822833, '234'],
  [-37.8658104, 175.4384541833, '249'],
  [-37.8650818333, 175.4384285833, '257'],
  [-37.8572850833, 175.4388435667, '345'],
  [-37.8695889833, 175.4385987333, '207'],
  [-37.8444514833, 175.4388799167, '483'],
  [-37.8828889333, 175.4356993, '51'],
  [-37.8832340833, 175.4358504, '1/51'],
  [-37.8573635, 175.4392901833, '342'],
  [-37.86163445, 175.43881845, '295'],
  [-37.8624819833, 175.438809, '287'],
  [-37.84347995, 175.4385449833, '495'],
  [-37.85704685, 175.4422632333, '346'],
  [-37.8881785167, 175.4536787833, '11'],
  [-37.8876931833, 175.4532197833, '5'],
  [-37.8877175833, 175.4536870667, '7'],
  [-37.8883681, 175.4535562333, '2/10'],
  [-37.88862675, 175.4537201667, '4/10'],
  [-37.88857235, 175.4536184167, '3/10'],
  [-37.88834935, 175.45339255, '1/10'],
  [-37.8880737833, 175.4534382833, '9'],
  [-37.88862905, 175.4582377167, '8'],
  [-37.888388, 175.4577553167, '5A'],
  [-37.8890413167, 175.4584074, '10A'],
  [-37.8890455167, 175.45818135, '10'],
  [-37.8893714, 175.4579083667, '1'],
  [-37.8891550333, 175.4579009333, '2'],
  [-37.8889156, 175.45789245, '3'],
  [-37.8887209667, 175.4578687833, '4'],
  [-37.8885121, 175.45785425, '5'],
  [-37.8884355167, 175.4579579333, '6'],
  [-37.8884670667, 175.4581608667, '7'],
  [-37.88885115, 175.4581993167, '9'],
  [-37.88829695, 175.4581456, '7A'],
  [-37.89493095, 175.50293945, '2/207'],
  [-37.8939846833, 175.4919359167, '1/143'],
  [-37.9326599333, 175.5720857333, '946'],
  [-37.8940428667, 175.4929087, '2/143'],
  [-37.93985015, 175.5776648, '1006'],
  [-37.9234984333, 175.5621109333, '816'],
  [-37.9374057, 175.57533755, '1004'],
  [-37.92045495, 175.5594362667, '773'],
  [-37.9370037333, 175.5752245333, '1002'],
  [-37.9233134, 175.5619061667, '814'],
  [-37.9247701333, 175.5642938333, '838'],
  [-37.9091874667, 175.5318147333, '504'],
  [-37.90968075, 175.53436585, '525'],
  [-37.9100798667, 175.53351915, '518'],
  [-37.9137304333, 175.5349179, '560'],
  [-37.9131590333, 175.53488155, '558'],
  [-37.9072097667, 175.5257719, '458'],
  [-37.89594205, 175.4996267667, '178'],
  [-37.9372702, 175.57594035, '1013'],
  [-37.89638255, 175.5065894833, '246'],
  [-37.8968645833, 175.50876055, '259'],
  [-37.8980340833, 175.5096747833, '276'],
  [-37.8986749667, 175.5105449167, '280'],
  [-37.89924075, 175.5129982667, '295'],
  [-37.9015737, 175.515433, '324'],
  [-37.91571275, 175.5534373, '705'],
  [-37.9162442833, 175.5534827, '706'],
  [-37.9148016833, 175.54767885, '648'],
  [-37.9148501, 175.5499118333, '673'],
  [-37.9151485667, 175.5495203167, '660'],
  [-37.9197264, 175.5575957333, '748'],
  [-37.9212959167, 175.5604435167, '787'],
  [-37.9255722167, 175.5660694167, '852'],
  [-37.9026268333, 175.5172354667, '356'],
  [-37.8950368333, 175.5025268833, '1/207'],
  [-37.9122779833, 175.5393717167, '2/573'],
  [-37.9114679667, 175.5398593333, '3/573'],
  [-37.91540075, 175.5527015167, '699'],
  [-37.9012012167, 175.51619825, '335'],
  [-37.9168711667, 175.5553676, '719'],
  [-37.9175395667, 175.5561893167, '723'],
  [-37.9180392833, 175.5566833, '739'],
  [-37.9130946167, 175.5474586167, '637'],
  [-37.8940036333, 175.4831404833, '29'],
  [-37.8943207667, 175.4865820833, '69'],
  [-37.8943952833, 175.4886118, '71'],
  [-37.8951511833, 175.4905976667, '112'],
  [-37.90356905, 175.5202661333, '379'],
  [-37.9042539, 175.5213877833, '391'],
  [-37.9058724667, 175.5242790667, '427'],
  [-37.9355250333, 175.57499645, '987'],
  [-37.9134563333, 175.5426692667, '603'],
  [-37.9135913667, 175.54315755, '607'],
  [-37.91401355, 175.5428852833, '608'],
  [-37.9106131167, 175.5359661167, '539'],
  [-37.9111353167, 175.53571595, '542'],
  [-37.9113920167, 175.5360293167, '546'],
  [-37.9121793167, 175.5377621, '568'],
  [-37.9346634, 175.5743922333, '979'],
  [-37.9374423833, 175.5674758833, '972'],
  [-37.9156359, 175.55118655, '692'],
  [-37.9155415167, 175.5508029, '690'],
  [-37.90281625, 175.51905675, '373'],
  [-37.9027791333, 175.5175252833, '358'],
  [-37.8958690833, 175.5018481167, '190'],
  [-37.9789857333, 175.4405075667, '168'],
  [-37.9695422, 175.4324544167, '23'],
  [-37.9694634, 175.4313197333, '12'],
  [-37.9734056167, 175.4391843667, '105'],
  [-37.9748037833, 175.4419470833, '123'],
  [-37.9775236, 175.4415263333, '155'],
  [-37.9782757667, 175.44079755, '166'],
  [-37.9718126167, 175.4347789833, '54'],
  [-37.8974829, 175.4523839667, '11'],
  [-37.896949, 175.4538974333, '10'],
  [-37.8973599167, 175.4533428167, '3'],
  [-37.89717915, 175.4544804167, '4'],
  [-37.8973309833, 175.45308765, '5'],
  [-37.8972213833, 175.4542655167, '6'],
  [-37.8972975167, 175.452858, '7'],
  [-37.8971736167, 175.4540106333, '8'],
  [-37.8972301333, 175.4525011667, '9'],
  [-37.8962831, 175.4514132833, '40'],
  [-37.8962904167, 175.4509267333, '42'],
  [-37.8964889167, 175.4515006167, '44'],
  [-37.8966648, 175.4514576667, '46'],
  [-37.8963241333, 175.4516917333, '38'],
  [-37.8971486, 175.4537583167, '12'],
  [-37.8974914833, 175.4522686333, '13'],
  [-37.8968280167, 175.4517962167, '32'],
  [-37.8965602833, 175.4518541, '34'],
  [-37.8963553, 175.4518366333, '36'],
  [-37.8972173667, 175.4551419333, '2'],
  [-37.8970665667, 175.45323925, '14'],
  [-37.8971966, 175.4522688167, '15'],
  [-37.8968064, 175.4532278167, '16'],
  [-37.8967456833, 175.4531232333, '18'],
  [-37.8974595167, 175.4539856833, '1'],
  [-37.89702105, 175.4529966167, '20'],
  [-37.89697325, 175.4525840667, '22'],
  [-37.8966754833, 175.45262025, '24'],
  [-37.8965024, 175.4525581333, '26'],
  [-37.8967277167, 175.4524711167, '28'],
  [-37.8969411167, 175.4523854, '30'],
  [-37.8971252667, 175.4517190167, '17'],
  [-37.8973954333, 175.4516434667, '19'],
  [-37.89734885, 175.4512056667, '27'],
  [-37.8975603333, 175.4513639167, '23'],
  [-37.8975662667, 175.45155165, '21'],
  [-37.89758735, 175.45118755, '25'],
  [-37.8976514, 175.4505551833, '25A'],
  [-37.93618265, 175.4679452833, '99'],
  [-37.9364427, 175.47434405, '47'],
  [-37.93602995, 175.4635648833, '143'],
  [-37.9363754167, 175.4732709667, '55'],
  [-37.9364611, 175.47575415, '37'],
  [-37.9362570167, 175.4694700833, '89'],
  [-37.9356639667, 175.4542221333, '225'],
  [-37.9365317333, 175.4564987833, '201'],
  [-37.9357644333, 175.45652615, '1/201'],
  [-37.9356391667, 175.4555529667, '209'],
  [-37.9359229, 175.4614506167, '157'],
  [-37.9354519, 175.4510958, '245'],
  [-37.8043647667, 175.3646767, '9'],
  [-37.8033645333, 175.3644417333, '14'],
  [-37.8041373, 175.3641572833, '11'],
  [-37.9559902833, 175.4358548667, '1/3116'],
  [-37.9541933, 175.43567675, '3126'],
  [-37.9159823833, 175.4458315667, '2/3627'],
  [-37.91406535, 175.4497318167, '3668'],
  [-37.9555601667, 175.4360378833, '2/3116'],
  [-37.9139425833, 175.4497730667, '3666'],
  [-37.9160902, 175.4453786667, '1/3627'],
  [-37.9619189333, 175.4331309167, '3032'],
  [-37.9609963833, 175.4328218833, '3039'],
  [-37.9616219333, 175.4333006833, '3036'],
  [-37.9329983333, 175.4291615333, '3361'],
  [-37.9152040667, 175.4487561167, '3654'],
  [-37.9319928333, 175.4302175167, '3384'],
  [-37.91578065, 175.4478569, '3642'],
  [-37.9157454833, 175.4465326333, '3635'],
  [-37.9151056, 175.4479749833, '3643'],
  [-37.91545865, 175.4473662167, '3639'],
  [-37.9155843167, 175.4470310167, '3637'],
  [-37.9027715667, 175.45210165, '3794'],
  [-37.9032760833, 175.4549883, '3784'],
  [-37.9748930833, 175.4242103667, '2855'],
  [-37.9773033833, 175.42065365, '2829'],
  [-37.9444458667, 175.4188207667, '3217'],
  [-37.9012992833, 175.4500824333, '3807'],
  [-37.9127339333, 175.4503371, '3682'],
  [-37.90071495, 175.4536467833, '3829'],
  [-37.9048702167, 175.45171675, '2/3774'],
  [-37.9001265, 175.4627736833, '3910'],
  [-37.8984810667, 175.4580702, '2/3879'],
  [-37.8987156833, 175.45782225, '3/3879'],
  [-37.8996284833, 175.4598028333, '3886'],
  [-37.91662675, 175.4488524167, '3648'],
  [-37.9105417167, 175.4505777, '3714'],
  [-37.9047285333, 175.4517519, '1/3774'],
  [-37.98387015, 175.4128784667, '2/2724'],
  [-37.9836752333, 175.4125610667, '1/2724'],
  [-37.8997874, 175.4596524, '2/3886'],
  [-37.8999206167, 175.4595150667, '3/3886'],
  [-37.9052384833, 175.4516238333, '3/3774'],
  [-37.9009602667, 175.4546291667, '3846'],
  [-37.89997485, 175.4588545167, '3890'],
  [-37.9160101833, 175.4469321333, '3636'],
  [-37.9504464333, 175.43548145, '3164'],
  [-37.90139465, 175.4518174, '3808'],
  [-37.9003306333, 175.4547485333, '3831'],
  [-37.9150642, 175.4457459, '3631'],
  [-37.9700292833, 175.4302066, '2954'],
  [-37.9719347833, 175.4284579333, '2920'],
  [-37.9684611833, 175.4302354667, '2959'],
  [-37.9638249667, 175.4310026333, '3011'],
  [-37.9635499667, 175.4311723667, '3013'],
  [-37.9621262833, 175.4321201167, '3025'],
  [-37.9599553667, 175.4336584667, '3059'],
  [-37.9593913167, 175.4346581667, '3072'],
  [-37.9671775, 175.4315904833, '2978'],
  [-37.9654828167, 175.4323972833, '2996'],
  [-37.9304655333, 175.4298457167, '3403'],
  [-37.9397400667, 175.4320840667, '3292'],
  [-37.9397871333, 175.4311546, '3299'],
  [-37.93902, 175.4299714, '3301'],
  [-37.93884655, 175.4297564667, '3311'],
  [-37.9378664, 175.42977575, '3320'],
  [-37.9375432, 175.42891805, '3321'],
  [-37.9370408, 175.4289005833, '3331'],
  [-37.9364621167, 175.4289989833, '3337'],
  [-37.9358432667, 175.4290959667, '3339'],
  [-37.95477045, 175.4310178833, '3103'],
  [-37.9508932667, 175.4345944, '3163'],
  [-37.9502843833, 175.4345016333, '3169'],
  [-37.9476339333, 175.4348761333, '1/3200'],
  [-37.9459382167, 175.4300649167, '3215'],
  [-37.9294075333, 175.4304862, '3414'],
  [-37.9292768667, 175.4300710167, '3415'],
  [-37.9481910333, 175.43494365, '2/3200'],
  [-37.9276201333, 175.4302237167, '3433'],
  [-37.9263022167, 175.4323864333, '3456'],
  [-37.9577552167, 175.43514095, '3090'],
  [-37.9559199, 175.4356498167, '3110'],
  [-37.9556312, 175.4352157667, '3111'],
  [-37.9541667833, 175.4350528333, '3127'],
  [-37.924353, 175.43477375, '3488'],
  [-37.92140285, 175.4361990333, '3521'],
  [-37.9216205, 175.4367220333, '3522'],
  [-37.9199150167, 175.4372039667, '3537'],
  [-37.9191848333, 175.4377457167, '3553'],
  [-37.91800785, 175.4398907667, '3571'],
  [-37.9175554, 175.4427753167, '3596'],
  [-37.9167918667, 175.4434860333, '3611'],
  [-37.9154718333, 175.4484893833, '3650'],
  [-37.91254, 175.4489284667, '3693'],
  [-37.9096463167, 175.4500162167, '3715'],
  [-37.9095109, 175.45076725, '3718'],
  [-37.90312135, 175.4513793, '3791'],
  [-37.9025248833, 175.4514848833, '3797'],
  [-37.9027026, 175.4521118333, '3796'],
  [-37.9012756, 175.4523393333, '3809'],
  [-37.9000247833, 175.4550734667, '3847'],
  [-37.8996109167, 175.45623955, '3853'],
  [-37.8990466, 175.4570460167, '3861'],
  [-37.8982341833, 175.4584695333, '1/3879'],
  [-37.9037354333, 175.4513122, '3783'],
  [-37.9164707667, 175.4457016833, '3626'],
  [-37.9005404, 175.4554475167, '3838'],
  [-37.92350345, 175.4354481833, '3498'],
  [-37.92093435, 175.4372154, '3528'],
  [-37.9733884167, 175.4270654167, '2900'],
  [-37.9735011833, 175.426221, '2883'],
  [-37.9737880333, 175.4258421667, '2881'],
  [-37.9736479167, 175.4268099667, '2882'],
  [-37.8857180167, 175.4319128667, '1/1699'],
  [-37.8762356, 175.4124507167, '1498'],
  [-37.8760383833, 175.4119469333, '1494'],
  [-37.8881260667, 175.4328696, '2/1715'],
  [-37.8866376, 175.4333463667, '1/1715'],
  [-37.8884282, 175.4323350167, '1714'],
  [-37.8881726667, 175.44522875, '1835A'],
  [-37.8828618833, 175.42668015, '1643'],
  [-37.8875062667, 175.4321305667, '1713'],
  [-37.8891637, 175.4487508333, '1863'],
  [-37.8890458667, 175.4450934833, '1835'],
  [-37.8893503667, 175.4505826167, '1881'],
  [-37.8892833167, 175.4493800333, '1871'],
  [-37.88967995, 175.44903065, '1866'],
  [-37.8897650833, 175.45173775, '1894'],
  [-37.88972655, 175.4509517833, '1886'],
  [-37.8893972, 175.4519753167, '1895'],
  [-37.8893728833, 175.4515209833, '1891'],
  [-37.8893832667, 175.4517583333, '1893'],
  [-37.88975065, 175.4512729833, '1888'],
  [-37.8897555167, 175.4524542333, '1896'],
  [-37.8789651833, 175.4203288667, '1567'],
  [-37.8891086, 175.4330816833, '1716'],
  [-37.8749076, 175.4095179667, '1466'],
  [-37.8766546833, 175.41371075, '1510'],
  [-37.87762145, 175.4159128833, '1532'],
  [-37.8778396333, 175.41638935, '1534'],
  [-37.8784475833, 175.4175476, '1544'],
  [-37.8789228667, 175.4189449833, '1560'],
  [-37.8838774833, 175.4277925667, '1659'],
  [-37.8865829, 175.4310726667, '2/1699'],
  [-37.8869873, 175.4315526833, '1705'],
  [-37.8887145167, 175.4342103167, '1735'],
  [-37.8886082667, 175.4386434, '1786'],
  [-37.8888977833, 175.4397067833, '1788'],
  [-37.8889447833, 175.4399386, '1790'],
  [-37.8891184, 175.4403393, '1800'],
  [-37.8886052167, 175.44114285, '1811'],
  [-37.8890688833, 175.4442045667, '1829'],
  [-37.8894286667, 175.4442416167, '1830'],
  [-37.8894495167, 175.4447870333, '1832'],
  [-37.8894350833, 175.4526888167, '1903'],
  [-37.8898216167, 175.45284305, '1902'],
  [-37.8898244333, 175.45305355, '1906'],
  [-37.8895077667, 175.4534430333, '1907'],
  [-37.8895153, 175.4539427833, '1913'],
  [-37.8820731, 175.4246370667, '1/1628'],
  [-37.8829790333, 175.42515415, '2/1628'],
  [-37.8829182333, 175.42331235, '3/1628'],
  [-37.8846927167, 175.4287510833, '1669'],
  [-37.8857990667, 175.4293535333, '1682'],
  [-37.8859693167, 175.4303029167, '1/1689'],
  [-37.8861213333, 175.4304782, '1689'],
  [-37.9054227833, 175.4822613, '5'],
  [-37.90567515, 175.4819121167, '6'],
  [-37.9058446667, 175.4825176167, '10'],
  [-37.9057151167, 175.4832514, '11'],
  [-37.9059177, 175.4827449333, '12'],
  [-37.9062382833, 175.48278225, '14'],
  [-37.9059932667, 175.4830166333, '16'],
  [-37.90537935, 175.4821119, '3'],
  [-37.9055974, 175.4816880167, '4'],
  [-37.9055800167, 175.4827762667, '7'],
  [-37.9053443333, 175.4819134167, '1'],
  [-37.9056483167, 175.4830068333, '9'],
  [-37.9687541667, 175.5740302667, '1149'],
  [-37.9203192833, 175.5148173833, '4/319'],
  [-37.9566814833, 175.5624372, '1/978'],
  [-37.95688745, 175.5621776167, '2/978'],
  [-37.9580920167, 175.5647472333, '995'],
  [-37.92775475, 175.5378236667, '2/568'],
  [-37.92609085, 175.5347061333, '1/542'],
  [-37.9266186167, 175.5349056333, '2/542'],
  [-37.9269626167, 175.5353566167, '3/542'],
  [-37.9208396833, 175.5299344667, '422'],
  [-37.9207653333, 175.5242669667, '387'],
  [-37.9178039333, 175.49454775, '140'],
  [-37.9456599, 175.5548334167, '2/836'],
  [-37.9455115167, 175.5542481167, '1/836'],
  [-37.9194724833, 175.5061424833, '238'],
  [-37.9193864333, 175.5055969833, '232'],
  [-37.9175102167, 175.49730755, '159'],
  [-37.9307227667, 175.53812715, '1/618-10/618'],
  [-37.9369806, 175.5416204833, '648A'],
  [-37.93400485, 175.5405088167, '648'],
  [-37.9352812167, 175.5418752167, '656'],
  [-37.9261541333, 175.5367970667, '564'],
  [-37.9276279, 175.5381303167, '1/568'],
  [-37.9461318333, 175.5545134167, '842'],
  [-37.94315595, 175.5537148, '806'],
  [-37.9464287167, 175.5549129667, '844'],
  [-37.9713060833, 175.57780675, '1198'],
  [-37.9403528, 175.5492173333, '748'],
  [-37.9406445667, 175.5496667833, '1/750'],
  [-37.9282707, 175.5363209167, '7/568'],
  [-37.9188207333, 175.505113, '225'],
  [-37.9388163333, 175.5467693, '714'],
  [-37.9405476, 175.5503991667, '749'],
  [-37.94102555, 175.55021985, '750'],
  [-37.94425745, 175.5552436333, '819'],
  [-37.9459448333, 175.55501645, '838'],
  [-37.9465835833, 175.5559441, '845'],
  [-37.9472323167, 175.5550552833, '850'],
  [-37.9479511833, 175.5562512667, '1/861'],
  [-37.9481898667, 175.55635715, '2/861'],
  [-37.9500993333, 175.5559819167, '888'],
  [-37.95089095, 175.5580154, '899'],
  [-37.9289862833, 175.5364012833, '6/568'],
  [-37.9653755, 175.5702818667, '1099'],
  [-37.9299398667, 175.5377803667, '3/610'],
  [-37.9297131333, 175.5382649, '2/610'],
  [-37.92950415, 175.5389677333, '1/610'],
  [-37.9285464333, 175.53936505, '601'],
  [-37.92981565, 175.5365770833, '568'],
  [-37.9335473333, 175.5403341667, '646'],
  [-37.9331034167, 175.5400956, '642'],
  [-37.9327759167, 175.538732, '640'],
  [-37.9334526333, 175.5387036667, '638'],
  [-37.93320675, 175.5383744833, '636'],
  [-37.9336129167, 175.5375626, '634'],
  [-37.93288865, 175.5381226667, '632'],
  [-37.9327198833, 175.53720065, '630'],
  [-37.93255565, 175.53790585, '628'],
  [-37.93178035, 175.5394509333, '626'],
  [-37.9186410667, 175.5002110833, '182'],
  [-37.9172343667, 175.4951996667, '139'],
  [-37.9180053667, 175.5002946167, '183'],
  [-37.9174022167, 175.4964858167, '151'],
  [-37.9234301333, 175.5355513833, '516'],
  [-37.9434775667, 175.5532109833, '808'],
  [-37.93984305, 175.5484721667, '742'],
  [-37.9705266833, 175.57732895, '1175'],
  [-37.9272626167, 175.53717615, '3/568'],
  [-37.9532905667, 175.5580751833, '926'],
  [-37.9528798333, 175.5576940667, '924'],
  [-37.9659760333, 175.5710443833, '1/1111'],
  [-37.9396966667, 175.5481831, '740'],
  [-37.9128371, 175.4832793167, '19'],
  [-37.9140123833, 175.4838446333, '26'],
  [-37.9172423167, 175.4912675833, '106'],
  [-37.91736885, 175.4918037833, '110'],
  [-37.91754985, 175.4930980167, '120'],
  [-37.9169178833, 175.4926386, '121'],
  [-37.9163286667, 175.4889877833, '85'],
  [-37.9169649167, 175.4891728833, '86'],
  [-37.9165898167, 175.4905852833, '97'],
  [-37.9139972667, 175.4850735, '37'],
  [-37.9158482667, 175.48707945, '68'],
  [-37.9195504667, 175.5065384833, '240'],
  [-37.9197355333, 175.5077362, '256'],
  [-37.9187252667, 175.5091617167, '263'],
  [-37.9196476833, 175.5108055333, '277'],
  [-37.9202849333, 175.5111623667, '300'],
  [-37.9206995667, 175.5135292833, '1/314'],
  [-37.9207361, 175.5138259667, '2/314'],
  [-37.9562101, 175.5616106, '972'],
  [-37.9204318667, 175.5155629167, '1/319'],
  [-37.9203768167, 175.5151516333, '2/319'],
  [-37.91788475, 175.51599185, '3/319'],
  [-37.9208983667, 175.5150343667, '322'],
  [-37.9207446167, 175.5174052333, '355'],
  [-37.9213706667, 175.5182903833, '364'],
  [-37.9209673667, 175.5228385667, '381'],
  [-37.9121427, 175.48111095, '1'],
  [-37.9210744167, 175.526721, '398'],
  [-37.92060065, 175.5267811333, '421'],
  [-37.9203042167, 175.53031625, '441'],
  [-37.9205438667, 175.5322192667, '472'],
  [-37.95440025, 175.5603198167, '949'],
  [-37.9549745833, 175.5610077, '955'],
  [-37.9557622833, 175.5620862333, '971'],
  [-37.95699575, 175.56162575, '976'],
  [-37.96071475, 175.5671597833, '1043'],
  [-37.95945125, 175.5654647667, '1048'],
  [-37.9618459333, 175.56799375, '1/1049'],
  [-37.9616152833, 175.5678077833, '2/1049'],
  [-37.9661303667, 175.5708020833, '2/1111'],
  [-37.9667493333, 175.57131025, '1115'],
  [-37.96711415, 175.5715806667, '1117'],
  [-37.9675804833, 175.5719935, '1121'],
  [-37.9684296167, 175.5727105333, '1133'],
  [-37.9470393333, 175.5592361, '859'],
  [-37.91908795, 175.5034454, '1/222'],
  [-37.9190107333, 175.5030951833, '2/222'],
  [-37.9182063667, 175.4975724833, '162'],
  [-37.9215276333, 175.5398657167, '338'],
  [-37.9214903, 175.5403513167, '347'],
  [-37.9192073833, 175.5385113667, '60'],
  [-37.9194124167, 175.53863005, '70'],
  [-37.9202965333, 175.5390272333, '170'],
  [-37.9202201333, 175.5394256333, '187'],
  [-37.9200427667, 175.5393355, '165'],
  [-37.9196745333, 175.5387265333, '110'],
  [-37.9196443833, 175.5391287333, '113'],
  [-37.9200210333, 175.5388776, '148'],
  [-37.9198508167, 175.5392385667, '139'],
  [-37.9198443833, 175.53880195, '130'],
  [-37.92078415, 175.5393372, '240'],
  [-37.9203728, 175.5395211833, '205'],
  [-37.92054995, 175.5391807, '218'],
  [-37.9207016833, 175.53928345, '222'],
  [-37.9204983167, 175.5396219333, '225'],
  [-37.9206377, 175.5392380167, '220'],
  [-37.9209028833, 175.53941765, '1/258'],
  [-37.9206256667, 175.5397483667, '243'],
  [-37.92098855, 175.5394799, '2/258'],
  [-37.9211211, 175.54010905, '303'],
  [-37.9207808, 175.5398586, '261'],
  [-37.9209433167, 175.5399736333, '285'],
  [-37.9210710833, 175.53953355, '3/258'],
  [-37.9213220667, 175.54020665, '325'],
  [-37.9213740167, 175.5397642, '320'],
  [-37.9216746167, 175.5399703333, '356'],
  [-37.9217735667, 175.5401128333, '370'],
  [-37.9216458, 175.5405448833, '373'],
  [-37.92187255, 175.54025525, '386'],
  [-37.9219284333, 175.5408441667, '401'],
  [-37.9103304833, 175.4721328333, '10'],
  [-37.9102787167, 175.4719914, '11'],
  [-37.9108774833, 175.4715148, '1'],
  [-37.91067615, 175.4716186, '3'],
  [-37.9107711833, 175.4719261333, '4'],
  [-37.9105010667, 175.4716637167, '5'],
  [-37.9106344833, 175.4720128, '6'],
  [-37.9103480333, 175.4717653333, '7'],
  [-37.91015655, 175.4718258167, '9'],
  [-37.9104869167, 175.47212505, '8'],
  [-37.8164228, 175.5139775667, '1'],
  [-37.8062942167, 175.5133165, '174'],
  [-37.8153860333, 175.5132536167, '21'],
  [-37.8101489667, 175.5102431, '70'],
  [-37.81422025, 175.5124331667, '36'],
  [-37.8662685833, 175.38685585, '101'],
  [-37.8696932667, 175.3909689667, '156'],
  [-37.86591225, 175.38439815, '82'],
  [-37.8665148, 175.3851989333, '100'],
  [-37.8672423833, 175.385944, '102'],
  [-37.8633081833, 175.3778155667, '18'],
  [-37.8628883333, 175.3783555833, '20'],
  [-37.8633668167, 175.3794526667, '34'],
  [-37.8687968833, 175.3875604333, '124'],
  [-37.87375745, 175.4073473, '309'],
  [-37.871102, 175.3963777667, '206'],
  [-37.8643377167, 175.3813198167, '48A'],
  [-37.8647317667, 175.38235055, '62'],
  [-37.8653946, 175.3839015333, '72'],
  [-37.8691804167, 175.3885183, '136'],
  [-37.8695428667, 175.3900536333, '150'],
  [-37.8708532667, 175.3954820167, '200'],
  [-37.8696376833, 175.3931483, '165'],
  [-37.8708364167, 175.3980991167, '221'],
  [-37.8769260167, 175.3983096333, '256B'],
  [-37.8739190333, 175.4060778667, '298'],
  [-37.8736307833, 175.4070128, '307'],
  [-37.8743770667, 175.4077305, '316'],
  [-37.8703100667, 175.3894640833, '146'],
  [-37.8697010667, 175.39052375, '154'],
  [-37.8641413167, 175.3808931667, '48E'],
  [-37.8673080333, 175.3779883667, '48B'],
  [-37.8673718333, 175.3785550833, '48C'],
  [-37.8674977833, 175.3793694333, '48D'],
  [-37.86895095, 175.3799414833, '66B'],
  [-37.8626150667, 175.3776425167, '14'],
  [-37.87166565, 175.3986665667, '254A'],
  [-37.8723313833, 175.4007501, '256A'],
  [-37.8728116833, 175.4024396333, '276A'],
  [-37.8735445333, 175.4044031333, '276B'],
  [-37.8788183833, 175.3998753, '276C'],
  [-37.8700288, 175.39251035, '170'],
  [-37.8700618833, 175.3926480833, '172'],
  [-37.87032565, 175.3935790167, '182'],
  [-37.87129395, 175.3971019667, '210'],
  [-37.8684687167, 175.3787688, '66A'],
  [-37.86917345, 175.3816180667, '66'],
  [-37.8994036333, 175.46781995, '2'],
  [-37.89908445, 175.46789945, '3'],
  [-37.8992924, 175.46819555, '4'],
  [-37.8990193667, 175.4681169167, '5'],
  [-37.8994638333, 175.46840135, '6'],
  [-37.8988995167, 175.4683006333, '7'],
  [-37.8992033, 175.46852295, '8'],
  [-37.8866583833, 175.4532039667, '33F'],
  [-37.8864233833, 175.4521969667, '32'],
  [-37.8866203333, 175.4534927833, '33E'],
  [-37.88746175, 175.45179065, '24A'],
  [-37.8826686, 175.4521089833, '48'],
  [-37.8871881167, 175.4517683, '26A'],
  [-37.8891620833, 175.4522299333, '2A'],
  [-37.8870288833, 175.4517563333, '28A'],
  [-37.8847421333, 175.4521349667, '46'],
  [-37.8866198667, 175.4517700333, '30A'],
  [-37.8847517, 175.4530716833, '49'],
  [-37.8864979167, 175.4517625333, '32A'],
  [-37.8877413167, 175.4522157, '22'],
  [-37.8875273, 175.4522017833, '24'],
  [-37.8886485, 175.4522158667, '10'],
  [-37.8863276167, 175.4526999167, '39'],
  [-37.8872459167, 175.4521917333, '26'],
  [-37.8869694333, 175.4521850167, '28'],
  [-37.8884949833, 175.4526693667, '11'],
  [-37.8884365167, 175.4522167833, '12'],
  [-37.8883604667, 175.45266065, '13'],
  [-37.88909265, 175.4527732833, '1A'],
  [-37.8890918, 175.4526509167, '1'],
  [-37.8892247667, 175.4522300833, '2'],
  [-37.8889543167, 175.4526548333, '3'],
  [-37.88878835, 175.4526679667, '5'],
  [-37.8879826333, 175.4526516667, '17'],
  [-37.8879732333, 175.4522717, '18'],
  [-37.8876465167, 175.4529919333, '21'],
  [-37.8874666333, 175.4526953333, '23'],
  [-37.88718005, 175.45269155, '27'],
  [-37.88667215, 175.4527091167, '35'],
  [-37.8865333667, 175.452713, '37'],
  [-37.8869211167, 175.4527025667, '31'],
  [-37.8889064667, 175.45167665, '6'],
  [-37.8887104, 175.4530365333, '7'],
  [-37.8888331333, 175.45221635, '8'],
  [-37.8886320167, 175.4530411167, '9'],
  [-37.8866415, 175.4537552833, '33D'],
  [-37.8868032, 175.4537838167, '33C'],
  [-37.8868312167, 175.45354015, '33B'],
  [-37.88685175, 175.4532279333, '33A'],
  [-37.8867126, 175.4521915667, '30'],
  [-37.89138475, 175.4647044, '31'],
  [-37.8884147667, 175.4636648, '60B'],
  [-37.8944636333, 175.4644644833, '10A'],
  [-37.8944416833, 175.4645756833, '10'],
  [-37.8941219, 175.46491495, '11'],
  [-37.8943222167, 175.4642833333, '12A'],
  [-37.8930367667, 175.4648168, '15A'],
  [-37.8931255, 175.4648136167, '15B'],
  [-37.8931035167, 175.4644127333, '18'],
  [-37.89292315, 175.4648254167, '19'],
  [-37.8942371, 175.4645572667, '12'],
  [-37.89397735, 175.4649136, '13'],
  [-37.89409845, 175.4643458667, '14'],
  [-37.89391375, 175.4645277333, '16'],
  [-37.8929680833, 175.4643951, '20'],
  [-37.8927348833, 175.46480795, '21'],
  [-37.8928157667, 175.46437875, '22A'],
  [-37.8927337833, 175.4643644833, '22'],
  [-37.8925561167, 175.46478985, '23'],
  [-37.8923608833, 175.4647155, '25A'],
  [-37.8924641833, 175.46493565, '25'],
  [-37.8949511, 175.4649854, '1A'],
  [-37.8922117333, 175.4647047167, '27'],
  [-37.8915681667, 175.4646986833, '29'],
  [-37.8913701667, 175.4642759667, '30A-30D'],
  [-37.8913990167, 175.4642620667, '30'],
  [-37.8913092333, 175.46425895, '32'],
  [-37.8912003667, 175.46469755, '33'],
  [-37.8911230333, 175.4642383333, '34A'],
  [-37.8911486667, 175.46399235, '34B'],
  [-37.8911019, 175.4642380167, '34'],
  [-37.89098895, 175.4646725333, '35'],
  [-37.89084255, 175.4642192333, '36A'],
  [-37.8909496167, 175.46422895, '36B'],
  [-37.8908606333, 175.4642211667, '36'],
  [-37.8948280833, 175.46498935, '3'],
  [-37.8908666333, 175.4646632833, '37'],
  [-37.8907759333, 175.4646549833, '39A'],
  [-37.8907216667, 175.4646473167, '39B'],
  [-37.8906578833, 175.4646450333, '39C'],
  [-37.8905375667, 175.4646237167, '41'],
  [-37.8904761833, 175.4646328667, '43'],
  [-37.8902941833, 175.4641657667, '44A'],
  [-37.8902406833, 175.46415805, '44B'],
  [-37.8903436667, 175.4641675667, '44'],
  [-37.89028625, 175.46460345, '45'],
  [-37.8901877167, 175.4641515667, '46A'],
  [-37.89013315, 175.4641537667, '46B'],
  [-37.8949605167, 175.4645740333, '4'],
  [-37.8900607167, 175.4645841333, '47'],
  [-37.8900176, 175.4641449833, '48'],
  [-37.8899419667, 175.464572, '49A'],
  [-37.88987475, 175.4645733833, '49B'],
  [-37.8898110667, 175.4645667333, '49C'],
  [-37.8896632167, 175.4645695333, '49D'],
  [-37.8898541333, 175.46475255, '49E'],
  [-37.8897567333, 175.4647629, '49F'],
  [-37.8896634667, 175.4647669667, '49G'],
  [-37.8898924167, 175.4641263833, '50'],
  [-37.8897574667, 175.4641326833, '52'],
  [-37.8889242333, 175.4640623167, '54'],
  [-37.88865535, 175.4644431167, '55'],
  [-37.8887946833, 175.4638054667, '56A'],
  [-37.8946296667, 175.4649645, '5'],
  [-37.8887812167, 175.4640600833, '56'],
  [-37.8884208167, 175.46442915, '57'],
  [-37.8886385667, 175.4637760833, '58A'],
  [-37.8886053667, 175.4640482, '58'],
  [-37.8882043667, 175.4644158333, '59'],
  [-37.8885028333, 175.463677, '60A'],
  [-37.88839355, 175.4640293333, '60'],
  [-37.8879652167, 175.4644074, '61'],
  [-37.8877446333, 175.46437685, '63'],
  [-37.8881502667, 175.4640036667, '64'],
  [-37.8879700167, 175.4639859333, '66'],
  [-37.8878033167, 175.4639686667, '68'],
  [-37.8947931167, 175.4646081167, '6A'],
  [-37.8948649333, 175.4643251333, '6'],
  [-37.8944518833, 175.4649523167, '7'],
  [-37.8946088333, 175.4645449667, '8'],
  [-37.89429465, 175.4649376, '9'],
  [-37.8951769667, 175.4645875167, '2'],
  [-37.88757625, 175.46390195, '70'],
  [-37.8940272667, 175.4652238, '11A'],
  [-37.8929316167, 175.4651907833, '19A'],
  [-37.8910516167, 175.4651865667, '35A'],
  [-37.8950131667, 175.4649995667, '1'],
  [-37.8946681667, 175.4642288167, '8A'],
  [-37.8950832, 175.4643562167, '2A'],
  [-37.89289445, 175.4639297667, '1/22-11/22'],
  [-37.8839810833, 175.4856866167, '3'],
  [-37.8839609167, 175.4862087667, '4'],
  [-37.8813706667, 175.4859932667, '25'],
  [-37.8815762, 175.4860593167, '23'],
  [-37.88176925, 175.48611695, '21'],
  [-37.8819291833, 175.4861440667, '19'],
  [-37.8812535167, 175.48626755, '28'],
  [-37.8814419833, 175.486341, '26'],
  [-37.8816454, 175.486407, '24'],
  [-37.8817836833, 175.4864573167, '22'],
  [-37.8823392667, 175.4866145167, '20'],
  [-37.8824710167, 175.4866385333, '18'],
  [-37.8823897, 175.4862189833, '17'],
  [-37.8810208833, 175.4857673833, '27'],
  [-37.8809241333, 175.4860744, '32'],
  [-37.8810838833, 175.4862027833, '30'],
  [-37.8807501667, 175.4855223, '35'],
  [-37.8809029, 175.48565165, '33'],
  [-37.88077235, 175.4859607667, '34'],
  [-37.8805942833, 175.48538215, '37'],
  [-37.8806738833, 175.48500715, '39'],
  [-37.8804429167, 175.4856392833, '36'],
  [-37.8806746667, 175.48474885, '41'],
  [-37.8802171333, 175.4854475, '38'],
  [-37.8800456167, 175.4853260167, '40'],
  [-37.8805906167, 175.4847991833, '43'],
  [-37.8803164833, 175.4846505, '49'],
  [-37.8803990833, 175.4851850833, '45'],
  [-37.8802597333, 175.4850626167, '47'],
  [-37.8800347333, 175.4849136333, '53'],
  [-37.88023585, 175.4846241, '51'],
  [-37.87911725, 175.4844298333, '63'],
  [-37.8793032, 175.4845327167, '61'],
  [-37.8794998, 175.48456245, '59'],
  [-37.8796728333, 175.48464225, '57'],
  [-37.8798386, 175.4844502667, '55B'],
  [-37.87985855, 175.4847564333, '55'],
  [-37.8798501167, 175.4851561333, '42'],
  [-37.8792051, 175.48470885, '65'],
  [-37.8796635, 175.4850343667, '44'],
  [-37.8834352333, 175.4858534667, '5'],
  [-37.8832857667, 175.4859341667, '7'],
  [-37.88359745, 175.4863355833, '8'],
  [-37.8830905833, 175.4860275333, '9'],
  [-37.88377265, 175.48624865, '6'],
  [-37.8826329333, 175.4866849167, '16'],
  [-37.8825409333, 175.4862091167, '15'],
  [-37.8827294333, 175.4862135, '13'],
  [-37.8834279333, 175.4864298333, '10'],
  [-37.8832412, 175.4865308833, '12'],
  [-37.883058, 175.4865957667, '14'],
  [-37.8828529667, 175.4861158333, '11'],
  [-37.8834473167, 175.3733817, '7'],
  [-37.8821477, 175.3739511333, '17'],
  [-37.8835727833, 175.3742963167, '4'],
  [-37.8829996167, 175.37376495, '11'],
  [-37.8799677333, 175.3744603833, '49'],
  [-37.8801634167, 175.37443835, '43'],
  [-37.8131783667, 175.38169875, '10'],
  [-37.8129868833, 175.3819189, '8'],
  [-37.8122474333, 175.3825065833, '6C'],
  [-37.8130850833, 175.3823078833, '6A'],
  [-37.8124561333, 175.38300715, '6B'],
  [-37.81348525, 175.3804658333, '12'],
  [-37.81168165, 175.3801314, '16B'],
  [-37.8110145667, 175.3801371167, '16C'],
  [-37.8106325333, 175.3808725167, '16D'],
  [-37.8105196, 175.3799175, '16E'],
  [-37.8134586333, 175.37986425, '16A'],
  [-37.8608434833, 175.4499011, '43'],
  [-37.8612150667, 175.44990305, '45'],
  [-37.8618689167, 175.4498981167, '47'],
  [-37.86239125, 175.4505662333, '49'],
  [-37.8626794667, 175.4498931333, '51'],
  [-37.86272035, 175.4492676833, '53'],
  [-37.86160045, 175.4492898833, '55'],
  [-37.8830900667, 175.48706325, '2'],
  [-37.8833400667, 175.4873493167, '3'],
  [-37.88330455, 175.4870247333, '4'],
  [-37.8835654833, 175.4872303, '5'],
  [-37.8835200667, 175.48693185, '6'],
  [-37.8837668167, 175.4872335833, '7'],
  [-37.88372005, 175.48686615, '8'],
  [-37.88385335, 175.4870479667, '9'],
  [-37.8831409167, 175.4873846167, '1'],
  [-37.8838673, 175.4868328833, '10'],
  [-37.88305215, 175.4682743333, '2'],
  [-37.8832460833, 175.4683237, '3'],
  [-37.8833727333, 175.4683497167, '4'],
  [-37.8833539333, 175.4684306333, '5'],
  [-37.8832353667, 175.4684359833, '6'],
  [-37.8356606333, 175.4259896, '44'],
  [-37.8361144333, 175.4254149667, '39'],
  [-37.8298011333, 175.4247086333, '97'],
  [-37.8328783, 175.4254824333, '73'],
  [-37.8326006333, 175.42427305, '71'],
  [-37.831938, 175.42577585, '85'],
  [-37.8296909667, 175.4253358667, '98A'],
  [-37.8304079333, 175.42640705, '98B'],
  [-37.9136688833, 175.47027315, '11'],
  [-37.9136547333, 175.47069685, '10'],
  [-37.9138316333, 175.4708094833, '12'],
  [-37.9137826667, 175.4703954167, '16'],
  [-37.91318695, 175.4705625333, '1'],
  [-37.9132175333, 175.4701367, '3'],
  [-37.9134621167, 175.47077345, '4'],
  [-37.9134043833, 175.47044285, '5'],
  [-37.9136208, 175.4710819333, '6'],
  [-37.91350565, 175.47029995, '7'],
  [-37.9137004667, 175.4710525667, '8'],
  [-37.9135834833, 175.4699601167, '9'],
  [-37.8994691333, 175.46256515, '2'],
  [-37.8995118667, 175.4628252833, '2A'],
  [-37.8995123, 175.4630041667, '2B'],
  [-37.8994579333, 175.4622181667, '1'],
  [-37.8974378833, 175.4617671667, '28'],
  [-37.8974075167, 175.4619900333, '26'],
  [-37.89761855, 175.4608725333, '25'],
  [-37.8977565167, 175.4606562, '27'],
  [-37.8979072833, 175.4605283333, '29'],
  [-37.89808565, 175.4603934333, '31'],
  [-37.8982804333, 175.46037375, '33'],
  [-37.89837375, 175.4602651333, '35'],
  [-37.89802395, 175.46003665, '50'],
  [-37.8978844167, 175.4601356167, '48'],
  [-37.8977532, 175.4602402333, '46'],
  [-37.8976160167, 175.4603286167, '44'],
  [-37.89819545, 175.4599255167, '52'],
  [-37.8974890167, 175.4604333667, '42'],
  [-37.8973825833, 175.46056285, '40'],
  [-37.8984307833, 175.4623306333, '14'],
  [-37.8993176, 175.46225845, '3'],
  [-37.8982570167, 175.4622604, '16'],
  [-37.89807915, 175.4621847167, '18'],
  [-37.8979096167, 175.46211465, '20'],
  [-37.8977295167, 175.4620442, '22'],
  [-37.8983868833, 175.4619344833, '11'],
  [-37.8982446, 175.4618734, '13'],
  [-37.8980852, 175.46182235, '15'],
  [-37.8979221167, 175.4617471667, '17'],
  [-37.8977388167, 175.4616313167, '19'],
  [-37.8975900833, 175.4619512333, '24'],
  [-37.8976432833, 175.4613693, '21'],
  [-37.8976362833, 175.4611184667, '23'],
  [-37.8973338667, 175.4610383, '34'],
  [-37.89734735, 175.46128405, '32'],
  [-37.8973671167, 175.4615326833, '30'],
  [-37.8983740833, 175.4600625, '37'],
  [-37.8973341333, 175.46074505, '38'],
  [-37.8971390333, 175.46087135, '36'],
  [-37.8986548667, 175.4624186833, '12'],
  [-37.89883265, 175.462497, '10'],
  [-37.8990063167, 175.46257255, '8'],
  [-37.8991676833, 175.4626289833, '6'],
  [-37.8993200333, 175.4626184667, '4'],
  [-37.8990043833, 175.4621885667, '7'],
  [-37.8988871333, 175.4621417, '9'],
  [-37.8991505333, 175.4622658, '5'],
  [-37.9839604, 175.45833975, '21'],
  [-37.9833674167, 175.4588416833, '15'],
  [-37.8359882667, 175.4393378167, '84'],
  [-37.81988195, 175.4304131333, '303'],
  [-37.8180250667, 175.4265244667, '359'],
  [-37.8183922667, 175.42604195, '361'],
  [-37.8176359333, 175.4250678167, '377'],
  [-37.8345467667, 175.4387839833, '99'],
  [-37.83385615, 175.4387189, '107'],
  [-37.80686185, 175.4025271167, '621E'],
  [-37.8072254833, 175.4031670833, '621F'],
  [-37.8157959333, 175.4221578, '401B'],
  [-37.8061875667, 175.401462, '621A'],
  [-37.8058821833, 175.4010980167, '621B'],
  [-37.81469335, 175.4231989, '406'],
  [-37.8174082667, 175.4176129667, '413'],
  [-37.8141161167, 175.4226544167, '416'],
  [-37.8138467167, 175.4215990833, '419'],
  [-37.8135359833, 175.4220777667, '424'],
  [-37.81227475, 175.4238289333, '426'],
  [-37.81351715, 175.4209686667, '431'],
  [-37.8344727, 175.43943635, '100'],
  [-37.8341482167, 175.4394138833, '102'],
  [-37.8335249, 175.4387248167, '111'],
  [-37.8332444167, 175.4386937167, '113'],
  [-37.8258899667, 175.4354216333, '201'],
  [-37.8207155167, 175.4310458, '287'],
  [-37.82205395, 175.4322644, '273'],
  [-37.82211345, 175.4333285833, '268'],
  [-37.8116728667, 175.4194537167, '440A'],
  [-37.8113214333, 175.4130010333, '491A'],
  [-37.8163042833, 175.4288074167, '348B'],
  [-37.81563165, 175.4286594, '348A'],
  [-37.8059561833, 175.41024335, '566'],
  [-37.8054795833, 175.3996853333, '621D'],
  [-37.8049338667, 175.4001146333, '621C'],
  [-37.8194743833, 175.42997115, '315'],
  [-37.8179959833, 175.4296346167, '328'],
  [-37.8184434333, 175.4287788333, '327'],
  [-37.8064376833, 175.406161, '597B'],
  [-37.8062919333, 175.4056468333, '597C'],
  [-37.8165707167, 175.4301424, '336B'],
  [-37.8172738, 175.4285947167, '336A'],
  [-37.8189469333, 175.4303026167, '312A'],
  [-37.81940555, 175.4307701833, '312B'],
  [-37.8199143667, 175.4312459, '300'],
  [-37.8175767667, 175.4291582, '334'],
  [-37.8152067667, 175.4162956667, '441B'],
  [-37.8142325667, 175.4148164667, '441D'],
  [-37.8149509, 175.4159546667, '441C'],
  [-37.815999, 175.4175927333, '441A'],
  [-37.80413515, 175.4042530167, '612'],
  [-37.8036285, 175.4024796333, '627B'],
  [-37.8014316833, 175.4040596333, '636'],
  [-37.8026355333, 175.4024570667, '638'],
  [-37.8046866167, 175.4038756333, '613'],
  [-37.8028006833, 175.4016926167, '639A'],
  [-37.8015622167, 175.4017531, '652'],
  [-37.8004875333, 175.4008727667, '670'],
  [-37.7997891, 175.40002805, '676'],
  [-37.8083442333, 175.4139592833, '509'],
  [-37.8074935333, 175.4139840667, '532'],
  [-37.8072659167, 175.4124669333, '543'],
  [-37.8081279, 175.40823995, '567A'],
  [-37.8087099667, 175.4071535667, '567C'],
  [-37.804962, 175.4071512, '586'],
  [-37.8046189167, 175.4061273333, '598'],
  [-37.8052894167, 175.4083249, '576'],
  [-37.8060052167, 175.4083508333, '571'],
  [-37.8053679167, 175.4062368, '597A'],
  [-37.8051049667, 175.4051947167, '607'],
  [-37.8089437667, 175.4076931167, '567B'],
  [-37.8113679833, 175.4200005667, '440B'],
  [-37.8112042667, 175.4175891, '463'],
  [-37.8114033, 175.4191389167, '442'],
  [-37.81667955, 175.4240415167, '387'],
  [-37.8160871, 175.4248795, '390'],
  [-37.81503135, 175.4226562, '401A'],
  [-37.8158879667, 175.42335465, '393'],
  [-37.8104159333, 175.41701115, '477'],
  [-37.84176295, 175.4387852167, '25'],
  [-37.8394856333, 175.43871765, '53'],
  [-37.84315575, 175.4396268667, '4'],
  [-37.8382764833, 175.4387401333, '65'],
  [-37.8365486833, 175.4387233, '81'],
  [-37.83550145, 175.4387130167, '91'],
  [-37.8063373333, 175.40984385, '565A'],
  [-37.8068884167, 175.4101122333, '553'],
  [-37.8073266833, 175.40938595, '565B'],
  [-37.8022880667, 175.4015246833, '647'],
  [-37.8032717167, 175.3994722333, '649'],
  [-37.8125184833, 175.4206463, '432A'],
  [-37.8131087167, 175.4214898833, '432D'],
  [-37.81219155, 175.4220903333, '432B'],
  [-37.8123494833, 175.4226102667, '432C'],
  [-37.8323999167, 175.4388484167, '113/1'],
  [-37.8137884667, 175.4184721333, '439B'],
  [-37.8128705833, 175.4202196333, '439A'],
  [-37.8030845, 175.4029651, '634'],
  [-37.80229035, 175.4038689333, '634A'],
  [-37.8016416, 175.4044987167, '634B'],
  [-37.8040659833, 175.4028728333, '627A'],
  [-37.8039385667, 175.4012164167, '627C'],
  [-37.8041331833, 175.4011953333, '627D'],
  [-37.8104539833, 175.4114936333, '501'],
  [-37.8095276, 175.41551535, '491C'],
  [-37.8104942333, 175.4142607333, '491B'],
  [-37.8118822333, 175.4251615167, '426A'],
  [-37.9146426833, 175.46333945, '8'],
  [-37.9146966667, 175.4641698333, '12'],
  [-37.9148385667, 175.4646229167, '14'],
  [-37.9145846833, 175.4637018, '10'],
  [-37.9148759167, 175.4632119667, '6'],
  [-37.9150353667, 175.4631399, '4'],
  [-37.8791983833, 175.48491125, '1'],
  [-37.8794456833, 175.4852828333, '4'],
  [-37.8795405, 175.4855742333, '6'],
  [-37.8796772167, 175.4856965, '8'],
  [-37.87980185, 175.4857916833, '10'],
  [-37.8796864, 175.4861288, '15'],
  [-37.8797264167, 175.4859489333, '12'],
  [-37.8795614, 175.4860496167, '13'],
  [-37.8794049667, 175.4858653167, '11'],
  [-37.8792908167, 175.4856798667, '9'],
  [-37.8791893, 175.4854042167, '5'],
  [-37.879194, 175.4855697, '7'],
  [-37.87919295, 175.4851510333, '3'],
  [-37.9021503333, 175.4819923833, '1'],
  [-37.9020893333, 175.4817469667, '2'],
  [-37.90202325, 175.4814764333, '3'],
  [-37.90189885, 175.4813368167, '4'],
  [-37.9017681, 175.4813746667, '5'],
  [-37.9017408667, 175.4815826667, '6'],
  [-37.9018523, 175.4818607167, '7'],
  [-37.90192475, 175.4821145, '8'],
  [-37.91226175, 175.46593575, '11'],
  [-37.9122654667, 175.4666392333, '2'],
  [-37.9124824333, 175.4664875, '1'],
  [-37.9126646667, 175.4661762167, '3'],
  [-37.9121691, 175.4663371, '4'],
  [-37.9126312167, 175.4661364333, '5'],
  [-37.9121084167, 175.46614215, '6'],
  [-37.91239705, 175.46620525, '7'],
  [-37.912165, 175.4659997167, '8'],
  [-37.91234125, 175.4659673167, '9'],
  [-37.8640527833, 175.4896800333, '1/239'],
  [-37.8637439833, 175.4893278333, '2/239'],
  [-37.8399393, 175.4691242833, '563'],
  [-37.8403040167, 175.4695932333, '555'],
  [-37.8626741167, 175.4890199667, '250'],
  [-37.86235545, 175.4877547333, '263'],
  [-37.8621190833, 175.4881775833, '260'],
  [-37.8697908333, 175.4976855333, '2/143'],
  [-37.8696097167, 175.50222845, '109'],
  [-37.8650994667, 175.4906942667, '217'],
  [-37.8587062667, 175.4842270833, '308'],
  [-37.8585393667, 175.4832368167, '323'],
  [-37.856982, 175.4821791333, '337'],
  [-37.8557220333, 175.4813075, '357'],
  [-37.87269675, 175.51109805, '9'],
  [-37.86818685, 175.4965807167, '154'],
  [-37.8391881333, 175.4691244833, '570'],
  [-37.8392424167, 175.4682793833, '573'],
  [-37.8384787167, 175.4682486667, '580'],
  [-37.8380699833, 175.4677177667, '586'],
  [-37.83591845, 175.4652008167, '1/620'],
  [-37.8356297, 175.4656015333, '2/620'],
  [-37.85443655, 175.48126465, '362'],
  [-37.8543465667, 175.4803770667, '363'],
  [-37.8533677, 175.4796417833, '383'],
  [-37.8400570333, 175.4693165167, '559'],
  [-37.8701502, 175.5066921333, '58'],
  [-37.8688167, 175.5031792667, '94'],
  [-37.8633276833, 175.48971255, '240'],
  [-37.84499075, 175.47397555, '489'],
  [-37.8390078667, 175.4675286, '579'],
  [-37.8615817667, 175.4874484667, '272'],
  [-37.8611261, 175.48692335, '1/276'],
  [-37.8609821, 175.48677485, '2/276'],
  [-37.8443942167, 175.4735167, '491'],
  [-37.84453425, 175.4741157833, '490'],
  [-37.8728439333, 175.5114111333, '5'],
  [-37.8479137833, 175.47588805, '449'],
  [-37.8694130667, 175.5004653167, '118'],
  [-37.8381128333, 175.4689194667, '578'],
  [-37.8387493167, 175.4686557833, '576'],
  [-37.834946, 175.4616395, '648'],
  [-37.8355279667, 175.4648596667, '626'],
  [-37.8352287, 175.46082495, '670'],
  [-37.84359945, 175.4735256167, '500'],
  [-37.8437138833, 175.4730056833, '501'],
  [-37.8433661667, 175.4727594167, '511'],
  [-37.8429640667, 175.4725448333, '513'],
  [-37.8424090833, 175.4720656833, '517'],
  [-37.8419261, 175.4716311333, '529'],
  [-37.84138045, 175.4707106667, '535'],
  [-37.8407243, 175.4700550167, '551'],
  [-37.84032605, 175.4702964, '552'],
  [-37.8397895, 175.46968935, '562'],
  [-37.83966945, 175.4688137833, '567'],
  [-37.8458821833, 175.4743360167, '479'],
  [-37.8523557667, 175.4795548667, '394'],
  [-37.8519909833, 175.4785619833, '401'],
  [-37.85128865, 175.4790768167, '408'],
  [-37.8505837, 175.4777973667, '419'],
  [-37.8494416833, 175.4767902167, '429'],
  [-37.8501747833, 175.478082, '422'],
  [-37.8487495333, 175.477303, '446'],
  [-37.8613924167, 175.4866768333, '275'],
  [-37.8612592667, 175.48651665, '277'],
  [-37.8606625, 175.4863779, '280'],
  [-37.8602587667, 175.4860168333, '288'],
  [-37.8662275, 175.4932509, '192'],
  [-37.8656668, 175.4925030333, '206'],
  [-37.8718011, 175.50936105, '31'],
  [-37.871327, 175.50837775, '41'],
  [-37.8481012833, 175.4755436333, '455'],
  [-37.8662202833, 175.4971715833, '2/164'],
  [-37.8665327833, 175.4968656167, '1/164'],
  [-37.87262005, 175.5101317, '11'],
  [-37.8407464167, 175.4693628, '553'],
  [-37.8687301, 175.50368985, '92'],
  [-37.8576066333, 175.4826215667, '331'],
  [-37.867679, 175.4952846833, '164'],
  [-37.8698948833, 175.4990379333, '133'],
  [-37.8639344, 175.49046205, '230'],
  [-37.8645916667, 175.4912248333, '224'],
  [-37.8710460833, 175.50036065, '125'],
  [-37.8694796667, 175.4976021667, '1/143'],
  [-37.8733131, 175.4691004333, '3A'],
  [-37.87406055, 175.4694125667, '6A'],
  [-37.8735341167, 175.469327, '5'],
  [-37.8735109667, 175.46960345, '7'],
  [-37.87351105, 175.4698807333, '11'],
  [-37.8735358667, 175.47009225, '13'],
  [-37.8736709667, 175.4702864167, '17'],
  [-37.8737941667, 175.47025885, '16'],
  [-37.8738211333, 175.4693453167, '4'],
  [-37.8737987667, 175.46968045, '8'],
  [-37.8738769167, 175.4699632, '10'],
  [-37.8739402833, 175.4701521167, '12'],
  [-37.8732443833, 175.4692419333, '3B'],
  [-37.8740679833, 175.4695514833, '6B'],
  [-37.8739830167, 175.4704122667, '14'],
  [-37.8735580667, 175.4702317, '15'],
  [-37.87328745, 175.4697687167, '9'],
  [-37.8738628167, 175.46909085, '2'],
  [-37.8735833, 175.4690007, '1'],
  [-37.9140601833, 175.4734438833, '1'],
  [-37.91414235, 175.4726753, '7A'],
  [-37.9148196333, 175.4729240333, '4'],
  [-37.9145959167, 175.4727449, '5'],
  [-37.9144294, 175.4728081667, '6'],
  [-37.9142862333, 175.4729454, '7'],
  [-37.9140804667, 175.4729594, '8'],
  [-37.91442545, 175.4732771, '2A'],
  [-37.9146292, 175.47320695, '3'],
  [-37.9142898833, 175.4733283333, '2'],
  [-37.8924708, 175.4694829667, '3'],
  [-37.8921866833, 175.4690726, '4-6'],
  [-37.8744290667, 175.4729675333, '16'],
  [-37.8747743333, 175.4729266667, '17'],
  [-37.8743306833, 175.4749814667, '2'],
  [-37.8743712167, 175.4747777167, '4'],
  [-37.8743979833, 175.4745281667, '6'],
  [-37.8744096167, 175.47429405, '8'],
  [-37.8744245167, 175.4740094333, '10'],
  [-37.8744545333, 175.4736160667, '12'],
  [-37.8742322333, 175.47382395, '10A'],
  [-37.87422675, 175.47369315, '12A'],
  [-37.8742394, 175.4730406667, '16A'],
  [-37.8742450667, 175.4731634667, '14A'],
  [-37.8744790667, 175.4732784833, '14'],
  [-37.8747754833, 175.4731559, '15'],
  [-37.8747613167, 175.4734085833, '13'],
  [-37.8747389, 175.4736529667, '11'],
  [-37.8747211167, 175.47387885, '9'],
  [-37.8747006167, 175.4741313, '7'],
  [-37.8746909667, 175.4743708167, '5'],
  [-37.8746798167, 175.4746769, '3'],
  [-37.8748711167, 175.4748117167, '3A'],
  [-37.8748328833, 175.4749142833, '1A'],
  [-37.874621, 175.4750391, '1'],
  [-37.8755351667, 175.4795168667, '6A'],
  [-37.8754681, 175.4798997667, '6'],
  [-37.8756842833, 175.4798735833, '8'],
  [-37.8756412167, 175.4794951833, '8A'],
  [-37.8758023167, 175.4803141667, '5'],
  [-37.8757598667, 175.4801058, '7'],
  [-37.8757471833, 175.4799721833, '9'],
  [-37.8755322, 175.4802420833, '3'],
  [-37.8753549833, 175.47993535, '4'],
  [-37.8817592, 175.4617109667, '4A'],
  [-37.8820907333, 175.4622059833, '5'],
  [-37.8815066, 175.4617161667, '4B'],
  [-37.8817534333, 175.4618948333, '6A'],
  [-37.8815026667, 175.46184895, '6B'],
  [-37.8815932167, 175.46217415, '10A'],
  [-37.8817450167, 175.46226225, '10'],
  [-37.8818722667, 175.4626555167, '11'],
  [-37.8817309, 175.4624690333, '12'],
  [-37.8821211333, 175.4617608833, '1'],
  [-37.8817646833, 175.4615252167, '2A'],
  [-37.8815099, 175.4615357667, '2B'],
  [-37.88209615, 175.4619084, '3'],
  [-37.8820657333, 175.4624910833, '7'],
  [-37.8817491333, 175.4620671833, '8A'],
  [-37.8814882667, 175.4620343, '8B'],
  [-37.8820256333, 175.4626954, '9'],
  [-37.9011387, 175.4845455833, '11A'],
  [-37.9004465667, 175.4842316167, '6'],
  [-37.9006268333, 175.4836419, '1'],
  [-37.9005414333, 175.4845609667, '10'],
  [-37.9009292833, 175.4847187667, '11'],
  [-37.90099175, 175.48493945, '13'],
  [-37.900608, 175.4848214333, '14'],
  [-37.9002908667, 175.4835936167, '2'],
  [-37.9003859333, 175.4839906667, '4'],
  [-37.9007548667, 175.4840674, '5'],
  [-37.9008090833, 175.4842714333, '7'],
  [-37.90027845, 175.4844867667, '8'],
  [-37.90087325, 175.4844819167, '9'],
  [-37.9010882333, 175.4852001, '15'],
  [-37.9007465833, 175.4850981333, '16'],
  [-37.9008384, 175.48536275, '18'],
  [-37.9009003833, 175.4836903667, '3A'],
  [-37.9006948, 175.48386545, '3'],
  [-37.8352114167, 175.3932620667, '614'],
  [-37.8358616, 175.3932373667, '607'],
  [-37.8527932167, 175.4481416, '66'],
  [-37.8535776833, 175.4477748333, '59'],
  [-37.8513053333, 175.4468875167, '88'],
  [-37.8367923167, 175.39439545, '597'],
  [-37.8356857333, 175.39511535, '594'],
  [-37.8338485, 175.3905351667, '644'],
  [-37.8342344833, 175.3914293833, '636'],
  [-37.8349352, 175.39110985, '631'],
  [-37.8340942167, 175.3894187167, '647'],
  [-37.8361288, 175.3943564333, '603'],
  [-37.835456, 175.3923533167, '621'],
  [-37.8316758833, 175.3851704333, '690'],
  [-37.82606465, 175.3729124, '823A'],
  [-37.8360247333, 175.40845075, '472'],
  [-37.8367576167, 175.4058547167, '499'],
  [-37.8307850333, 175.3833224167, '716'],
  [-37.8297911333, 175.3838338167, '722A'],
  [-37.82856305, 175.3853371, '722B'],
  [-37.8366530833, 175.4158296167, '407'],
  [-37.8343563333, 175.3899946667, '645'],
  [-37.83378605, 175.3887814833, '649'],
  [-37.8383438833, 175.4167502667, '403A'],
  [-37.8269138333, 175.3707719, '823B'],
  [-37.8262433167, 175.37126425, '823C'],
  [-37.8278735833, 175.3745076, '791C'],
  [-37.82803615, 175.3751116833, '791B'],
  [-37.8284354167, 175.3743400333, '791D'],
  [-37.8283312333, 175.3722626167, '803H'],
  [-37.8308135833, 175.3857800333, '700A'],
  [-37.83039575, 175.3861873667, '700B'],
  [-37.8297918, 175.3866039833, '700C'],
  [-37.8323622833, 175.3869592167, '680A'],
  [-37.8317271833, 175.3872918333, '680B'],
  [-37.8320544167, 175.3863078833, '680C'],
  [-37.8265114833, 175.3737262, '811A'],
  [-37.8268406667, 175.37269475, '811B'],
  [-37.8272920833, 175.3716203, '811C'],
  [-37.8537437333, 175.4489413667, '62'],
  [-37.83192005, 175.3841341833, '695'],
  [-37.8368657833, 175.4028889833, '525'],
  [-37.83376425, 175.3968886333, '590B'],
  [-37.8299130333, 175.3859233667, '702C'],
  [-37.8305810833, 175.38512625, '702B'],
  [-37.8360455333, 175.4081179333, '474'],
  [-37.8276760833, 175.3808082167, '756C'],
  [-37.8283299333, 175.3802092167, '756B'],
  [-37.85043345, 175.4461019, '100'],
  [-37.8297131833, 175.38286445, '724A'],
  [-37.82929325, 175.383521, '724B'],
  [-37.8369757, 175.3983033667, '571'],
  [-37.8376989333, 175.4166211, '403B'],
  [-37.8368311167, 175.4050104667, '505'],
  [-37.8412127667, 175.4050228833, '491A'],
  [-37.83852105, 175.4062947, '491B'],
  [-37.8338348833, 175.3934827333, '622B'],
  [-37.8330032, 175.3939467333, '622C'],
  [-37.8282068, 175.376844, '775A'],
  [-37.8295163167, 175.3755049667, '775B'],
  [-37.828404, 175.37718215, '775C'],
  [-37.8362426, 175.39711805, '578'],
  [-37.8361603, 175.39675875, '580'],
  [-37.8424267833, 175.4340512167, '232'],
  [-37.84114775, 175.4311295833, '272'],
  [-37.82872315, 175.3709866833, '803A'],
  [-37.8285930667, 175.3703004167, '803B'],
  [-37.8294768667, 175.3691337, '803C'],
  [-37.8292017, 175.36888125, '803D'],
  [-37.8285291333, 175.36580345, '803E'],
  [-37.8298995333, 175.3673114167, '803F'],
  [-37.8302568833, 175.36760835, '803G'],
  [-37.8267714167, 175.3742385167, '807'],
  [-37.83126665, 175.3844291833, '702A'],
  [-37.83016355, 175.3818740833, '734'],
  [-37.8296635167, 175.3807643167, '742'],
  [-37.82974665, 175.3798092, '747'],
  [-37.829114, 175.3799039833, '752'],
  [-37.8288072833, 175.3779985667, '765'],
  [-37.8278203667, 175.3760339333, '789'],
  [-37.8274609333, 175.3753562, '791A'],
  [-37.8320049, 175.39796425, '592B'],
  [-37.8304380667, 175.3993220667, '592C'],
  [-37.8323366667, 175.3982387333, '592D'],
  [-37.8332103167, 175.39666495, '590A'],
  [-37.8362232667, 175.4049506333, '504'],
  [-37.83689715, 175.4034307333, '523'],
  [-37.8362677, 175.4030851833, '522'],
  [-37.8363718333, 175.4003976167, '548'],
  [-37.836423, 175.3953457167, '585'],
  [-37.83596855, 175.3959414667, '586'],
  [-37.8392194, 175.4133888333, '439'],
  [-37.8367003667, 175.4102236167, '461'],
  [-37.83586315, 175.4121175333, '442'],
  [-37.8387438833, 175.4244664667, '318'],
  [-37.8382094333, 175.42266185, '346'],
  [-37.8366223667, 175.4173578167, '396'],
  [-37.8405799833, 175.4294097167, '284'],
  [-37.8409799, 175.4286117333, '289'],
  [-37.8404157, 175.4273133667, '291'],
  [-37.8448297, 175.4386074, '188'],
  [-37.8445996333, 175.4385307833, '190'],
  [-37.8445953833, 175.4381869167, '192'],
  [-37.8462362333, 175.4406972, '162'],
  [-37.8453950333, 175.4394750167, '180'],
  [-37.8561178167, 175.4522334, '11'],
  [-37.8560307, 175.4511923667, '17'],
  [-37.8361288, 175.4061807167, '492'],
  [-37.83609445, 175.40683275, '490'],
  [-37.8545275667, 175.44950565, '40'],
  [-37.8375230333, 175.4199872333, '372'],
  [-37.8388781167, 175.4226393667, '343'],
  [-37.83701825, 175.41844345, '378'],
  [-37.8371192833, 175.4187303167, '376'],
  [-37.8373785667, 175.4194973167, '374'],
  [-37.8367387167, 175.4085570167, '473'],
  [-37.8318677333, 175.3858444, '688'],
  [-37.8327873167, 175.3878064833, '674'],
  [-37.83304365, 175.3883507667, '664'],
  [-37.8366133333, 175.4130614667, '427'],
  [-37.8508733333, 175.44641935, '94'],
  [-37.8433085667, 175.4359371667, '212'],
  [-37.8376679667, 175.3994774833, '549'],
  [-37.8388004167, 175.3998009833, '549C'],
  [-37.8369648167, 175.40033875, '549B'],
  [-37.8376661833, 175.3999770333, '549A'],
  [-37.8368055667, 175.3968196667, '575'],
  [-37.8369513667, 175.39729965, '573'],
  [-37.836328, 175.3975344167, '576'],
  [-37.8419685667, 175.4332863667, '240'],
  [-37.83147865, 175.3703224333, '781A'],
  [-37.8302962167, 175.3727004833, '781B'],
  [-37.8300511833, 175.3734676833, '781C'],
  [-37.9155750333, 175.4788872333, '103'],
  [-37.9080710333, 175.4815503833, '39C'],
  [-37.9081354167, 175.48171275, '39B'],
  [-37.90819845, 175.4819203833, '39A'],
  [-37.9165609667, 175.4784770333, '115'],
  [-37.91497395, 175.4792572167, '99'],
  [-37.9096164833, 175.4817164167, '49'],
  [-37.9116786667, 175.48074935, '69'],
  [-37.9140226, 175.479658, '85'],
  [-37.9069150833, 175.4829900333, '27A'],
  [-37.9069469833, 175.4828211667, '27B'],
  [-37.9141799333, 175.4796010667, '87'],
  [-37.9148269, 175.4793132333, '95'],
  [-37.9148061667, 175.47892315, '97'],
  [-37.9052287833, 175.4834456667, '7A'],
  [-37.9157397167, 175.4785532167, '107A'],
  [-37.9164115167, 175.4783404167, '113'],
  [-37.9162113333, 175.4786140333, '109'],
  [-37.9159243667, 175.4787397833, '107B'],
  [-37.91564195, 175.4783057333, '107'],
  [-37.9095836167, 175.48142755, '49A'],
  [-37.9097563, 175.4813824667, '51A'],
  [-37.9142505167, 175.47917545, '89A'],
  [-37.9143203667, 175.4795241, '89'],
  [-37.9143582167, 175.4791171833, '91A'],
  [-37.90809605, 175.4820482833, '37A'],
  [-37.9080426833, 175.4818123, '37B'],
  [-37.9079928333, 175.4816048, '37C'],
  [-37.9144982167, 175.4794426833, '91'],
  [-37.9146732833, 175.4793797, '93'],
  [-37.9046052333, 175.48406395, '1'],
  [-37.90479665, 175.4839646833, '3'],
  [-37.9049845333, 175.4838759833, '5'],
  [-37.9061106, 175.4833581667, '17'],
  [-37.9062431667, 175.4833112333, '19'],
  [-37.9063920333, 175.4832255333, '21'],
  [-37.9065708, 175.48314765, '23'],
  [-37.9067455333, 175.4830679333, '25'],
  [-37.90686575, 175.4825972667, '29'],
  [-37.9053759667, 175.4837128167, '11'],
  [-37.9055325, 175.4836456167, '13'],
  [-37.9057146333, 175.4835634667, '15'],
  [-37.9080300333, 175.4824985, '35'],
  [-37.9081798333, 175.4824187833, '37'],
  [-37.90842625, 175.4822687667, '39'],
  [-37.90871305, 175.4821525333, '43'],
  [-37.9071454167, 175.4828962333, '31'],
  [-37.90945405, 175.4818068167, '47'],
  [-37.9097787167, 175.4816407833, '51'],
  [-37.9101221667, 175.48147745, '55'],
  [-37.9099619333, 175.4815613833, '53'],
  [-37.9108703, 175.48113905, '57'],
  [-37.9111010167, 175.4810227833, '61'],
  [-37.9113033333, 175.4806476167, '63A'],
  [-37.9113063333, 175.4809305333, '63'],
  [-37.9113486333, 175.48054435, '65'],
  [-37.9115162333, 175.4808384167, '67'],
  [-37.9118321, 175.4806828667, '71'],
  [-37.912005, 175.4805931333, '73'],
  [-37.9126924, 175.4801856167, '75'],
  [-37.9128904333, 175.48013955, '77'],
  [-37.91306105, 175.4801038667, '79'],
  [-37.91323275, 175.4800307667, '81'],
  [-37.90504305, 175.48350075, '7'],
  [-37.9161411, 175.4791161, '104'],
  [-37.9052017167, 175.4837928833, '9'],
  [-37.9048593333, 175.4837002833, '5A'],
  [-37.9134008167, 175.4799760333, '83'],
  [-37.91608025, 175.4781871, '111A'],
  [-37.9159769333, 175.4778862, '111B'],
  [-37.91609255, 175.4778227833, '111C'],
  [-37.9162477333, 175.4781089667, '111D'],
  [-37.8954434833, 175.47689195, '1'],
  [-37.7968509833, 175.4409205333, '218'],
  [-37.7967954, 175.4415974333, '226'],
  [-37.79061135, 175.4311808833, '105'],
  [-37.7936930167, 175.4323678167, '144'],
  [-37.7936793, 175.4341171833, '169'],
  [-37.7906754167, 175.4300550333, '101'],
  [-37.7923387667, 175.4305234833, '114'],
  [-37.7921506667, 175.4312033333, '119'],
  [-37.79638115, 175.44350555, '244'],
  [-37.9026378, 175.4249371167, '6'],
  [-37.9018287167, 175.4251090167, '15'],
  [-37.9005140167, 175.4267575167, '32'],
  [-37.90030005, 175.4272810167, '36'],
  [-37.9000367833, 175.4266413167, '1/45'],
  [-37.8999172167, 175.4269248667, '2/45'],
  [-37.8998128167, 175.42722285, '3/45'],
  [-37.8997664167, 175.4278138333, '46'],
  [-37.89874045, 175.42933485, '47'],
  [-37.90246715, 175.4251130833, '8'],
  [-37.98415945, 175.5440391833, '1/398'],
  [-37.9842023, 175.5446759833, '398'],
  [-37.9673053833, 175.5493618, '1/200'],
  [-37.9595488167, 175.5503643667, '2/94'],
  [-37.9548066833, 175.5547442167, '41'],
  [-37.975043, 175.5502804667, '288'],
  [-37.9674483333, 175.54948405, '2/200'],
  [-37.9675936167, 175.54960055, '3/200'],
  [-37.9536896833, 175.5558200833, '21'],
  [-37.9537523333, 175.5551846667, '24'],
  [-37.9758721, 175.55151395, '297'],
  [-37.9715911333, 175.5505416, '246'],
  [-37.97615305, 175.5531409833, '1/299'],
  [-37.9759959833, 175.5531752167, '2/299'],
  [-37.9762314333, 175.5517778833, '3/299'],
  [-37.9789959667, 175.5511051167, '1/317'],
  [-37.9791978667, 175.5509703167, '2/317'],
  [-37.97016405, 175.5511682333, '233'],
  [-37.9840100667, 175.5422511833, '3/398'],
  [-37.9832081667, 175.5409176, '4/398'],
  [-37.9626150333, 175.5485202333, '1/142'],
  [-37.9620708667, 175.5493090333, '139'],
  [-37.9646945333, 175.5484742, '164'],
  [-37.95884865, 175.5515776333, '91'],
  [-37.9588039667, 175.5510064, '1/94'],
  [-37.9794108833, 175.5497014333, '332'],
  [-37.9806783167, 175.5477771, '352'],
  [-37.8757744167, 175.46972585, '1'],
  [-37.8758043667, 175.4700843, '3'],
  [-37.8758559833, 175.4703261667, '5'],
  [-37.8759855667, 175.4703921667, '7'],
  [-37.8761207333, 175.4703036833, '9'],
  [-37.8763731833, 175.4703581, '8B'],
  [-37.8763879, 175.4701746167, '8A'],
  [-37.8760971833, 175.4699428, '6'],
  [-37.8763947, 175.46978015, '4'],
  [-37.8760231167, 175.4695721, '2'],
  [-37.84887105, 175.5612401333, '268'],
  [-37.8480716667, 175.5605471, '1/271'],
  [-37.8481743833, 175.5599216, '2/271'],
  [-37.8475651333, 175.5602482833, '273'],
  [-37.8549548833, 175.5645155167, '187'],
  [-37.8590531333, 175.56929455, '111'],
  [-37.8579502, 175.5697828667, '1/128'],
  [-37.8577433333, 175.5697812167, '2/128'],
  [-37.8663423167, 175.5687757833, '25'],
  [-37.8659378833, 175.5701593333, '1/32'],
  [-37.8656144667, 175.5703594167, '2/32'],
  [-37.9075306667, 175.4735409, '8'],
  [-37.90741835, 175.4736250333, '12'],
  [-37.9077710167, 175.4736747, '3'],
  [-37.90756245, 175.4735306833, '7'],
  [-37.90776065, 175.4736345167, '4'],
  [-37.9076790833, 175.4734552333, '6'],
  [-37.90770165, 175.4734532167, '5'],
  [-37.90742555, 175.4736053833, '11'],
  [-37.9074725833, 175.4739170833, '14'],
  [-37.9074575333, 175.47388525, '13'],
  [-37.90752205, 175.4737226167, '10'],
  [-37.9075427667, 175.4737034667, '9'],
  [-37.9078406167, 175.4738848333, '1'],
  [-37.9078192667, 175.4738328667, '2'],
  [-37.9079175667, 175.4742687333, '19'],
  [-37.9076409333, 175.4739459, '15'],
  [-37.9077643333, 175.4742689, '18'],
  [-37.9077539833, 175.4742287, '17'],
  [-37.9076577333, 175.47400055, '16'],
  [-37.9079030333, 175.4742141667, '20'],
  [-37.9156256167, 175.4748749833, '78'],
  [-37.9146128333, 175.4721344167, '56A'],
  [-37.9151661833, 175.4733835167, '66'],
  [-37.9140138, 175.4694897, '30'],
  [-37.9140857167, 175.46969035, '32'],
  [-37.9144033, 175.4695158, '33'],
  [-37.91414165, 175.4698978167, '34'],
  [-37.91444875, 175.4697295833, '35'],
  [-37.9142653833, 175.4703260667, '38'],
  [-37.9142211667, 175.4701128667, '36'],
  [-37.9155440833, 175.4732913, '65'],
  [-37.9134283, 175.4674369333, '14'],
  [-37.9155934667, 175.4735220833, '67'],
  [-37.9151737667, 175.4721487333, '57'],
  [-37.9155787333, 175.4746912167, '76'],
  [-37.9143332167, 175.4693118167, '29'],
  [-37.9151155, 175.4718793167, '55'],
  [-37.9134783167, 175.4676862167, '16'],
  [-37.91350365, 175.4678403, '18'],
  [-37.9135371667, 175.4680652, '20'],
  [-37.9135827167, 175.4682467, '22'],
  [-37.9136676, 175.4684140667, '24'],
  [-37.91375, 175.4685284833, '26'],
  [-37.9144983333, 175.4699386333, '39'],
  [-37.9145579833, 175.4701247833, '41'],
  [-37.9146344333, 175.4703215833, '43'],
  [-37.9140692167, 175.4706085833, '46'],
  [-37.91469445, 175.47051275, '47'],
  [-37.9143359333, 175.4705744833, '48'],
  [-37.9147432833, 175.47069995, '49'],
  [-37.9146982, 175.4717894167, '54'],
  [-37.9147643333, 175.47204645, '56'],
  [-37.91485235, 175.4723157167, '58'],
  [-37.9149395167, 175.4725939833, '60'],
  [-37.9144000333, 175.4707812, '50'],
  [-37.9148043167, 175.4709096, '51'],
  [-37.9157513167, 175.4752532333, '82'],
  [-37.9158039333, 175.47545195, '84'],
  [-37.9156901667, 175.4750640167, '80'],
  [-37.9158563833, 175.4756482667, '86'],
  [-37.91508355, 175.4731087, '64'],
  [-37.9154807667, 175.4730812167, '63'],
  [-37.9154616667, 175.4742882833, '72'],
  [-37.91552175, 175.47449895, '74'],
  [-37.9790357333, 175.4624267667, '19'],
  [-37.9791358667, 175.4611471, '6'],
  [-37.9797030333, 175.4636025333, '30'],
  [-37.9790060167, 175.4621910833, '17'],
  [-37.9786417667, 175.4608476833, '5'],
  [-37.9804888333, 175.4691719, '83'],
  [-37.9793757333, 175.4644864667, '37'],
  [-37.9794654667, 175.4649678833, '39'],
  [-37.9815936, 175.4721696167, '104'],
  [-37.9806346333, 175.46753305, '62'],
  [-37.9801957667, 175.4694512667, '1/83'],
  [-37.9813943, 175.4789249667, '2/172'],
  [-37.9811831333, 175.4791219167, '1/172'],
  [-37.9815603333, 175.4787492833, '3/172'],
  [-37.9817079333, 175.4785843667, '4/172'],
  [-37.98098455, 175.4692836, '84'],
  [-37.9797661167, 175.4828635833, '209'],
  [-37.9819302167, 175.4751814833, '130'],
  [-37.9810331167, 175.4792768333, '172'],
  [-37.9791101833, 175.4807109667, '193'],
  [-37.9211995833, 175.54297615, '118'],
  [-37.9213446, 175.5421832, '105'],
  [-37.9211681167, 175.54216685, '107'],
  [-37.9209082667, 175.5425332333, '111'],
  [-37.9208103667, 175.542655, '113'],
  [-37.92117155, 175.5424739667, '109'],
  [-37.9206148667, 175.5429439167, '119'],
  [-37.9207782667, 175.5431801, '117'],
  [-37.9210005833, 175.542809, '115'],
  [-37.9223620333, 175.5419011, '44'],
  [-37.9221513667, 175.5414861833, '22'],
  [-37.9220122833, 175.54171955, '48'],
  [-37.9214541667, 175.5419499167, '103'],
  [-37.9216856333, 175.54226385, '110'],
  [-37.92188255, 175.54189345, '70'],
  [-37.9216037833, 175.5417236667, '79'],
  [-37.9217873667, 175.5420768833, '90'],
  [-37.9207292667, 175.5435594333, '127'],
  [-37.9215061833, 175.5424147833, '112'],
  [-37.9214096333, 175.5425683833, '114'],
  [-37.9212674167, 175.5427841667, '116'],
  [-37.9211160833, 175.5431952167, '120'],
  [-37.9210373167, 175.5434004167, '122'],
  [-37.9209575167, 175.5435602167, '124'],
  [-37.9206745667, 175.5433710667, '125'],
  [-37.92082745, 175.54361115, '128'],
  [-37.9209216, 175.5437402667, '126'],
  [-37.9205988167, 175.5431733333, '123'],
  [-37.9204654167, 175.54300295, '121'],
  [-37.9059849833, 175.4685779333, '10'],
  [-37.9063778167, 175.4688591, '11'],
  [-37.9057737333, 175.4693218333, '2'],
  [-37.9064842, 175.4693450167, '7'],
  [-37.9060801333, 175.46881255, '12'],
  [-37.9060230333, 175.46940395, '1'],
  [-37.9060816167, 175.4691977833, '3'],
  [-37.90581185, 175.4691003833, '4'],
  [-37.9063729333, 175.4693653667, '5'],
  [-37.9058748833, 175.4689197333, '6'],
  [-37.90586325, 175.46860955, '8'],
  [-37.9064269833, 175.4690855667, '9'],
  [-37.8955635667, 175.4714488333, '3'],
  [-37.89574055, 175.4716702667, '6'],
  [-37.8760291333, 175.4752209667, '4'],
  [-37.8761012667, 175.4756677333, '5'],
  [-37.8761172, 175.4749063833, '6A'],
  [-37.8762485667, 175.4748657167, '6B'],
  [-37.8765363167, 175.4750690167, '10'],
  [-37.87633255, 175.4751297667, '8'],
  [-37.8767972333, 175.4754502, '13'],
  [-37.8767630833, 175.4749863833, '12'],
  [-37.87581215, 175.4752698833, '2'],
  [-37.8757609167, 175.4757446833, '1'],
  [-37.8774312833, 175.4746756833, '25'],
  [-37.87757445, 175.4749078, '23'],
  [-37.8773315167, 175.4749104, '21'],
  [-37.8772196833, 175.4750822833, '19'],
  [-37.8771222167, 175.47521495, '17'],
  [-37.8769752, 175.4753515167, '15'],
  [-37.8766353, 175.47550835, '11'],
  [-37.8764627667, 175.4755687833, '9'],
  [-37.8762885333, 175.4756105, '7'],
  [-37.8759247333, 175.4757173667, '3'],
  [-37.8769794333, 175.4747672167, '14'],
  [-37.97891525, 175.4601520333, '772'],
  [-37.9464645333, 175.4822205167, '329'],
  [-37.9470361333, 175.4829135, '337'],
  [-37.9713491167, 175.4612835833, '684'],
  [-37.9615547167, 175.4636732, '578'],
  [-37.9642195, 175.4617228, '606'],
  [-37.9214648167, 175.4783231833, '49'],
  [-37.9212708833, 175.47781485, '1/49'],
  [-37.9230265, 175.478089, '65'],
  [-37.9669955167, 175.46143295, '653'],
  [-37.9801441, 175.4596936833, '784'],
  [-37.91909305, 175.4782088, '27'],
  [-37.9278700667, 175.4760814333, '122'],
  [-37.9393246667, 175.4798381833, '256'],
  [-37.98099395, 175.4594168167, '788'],
  [-37.9235198, 175.4765764833, '76'],
  [-37.9838248833, 175.4507092333, '885'],
  [-37.9840650667, 175.4492086167, '893'],
  [-37.9819271833, 175.4584667833, '812'],
  [-37.97680425, 175.4605180667, '746'],
  [-37.9772555, 175.4612509, '751'],
  [-37.9553357833, 175.4689185833, '484'],
  [-37.9549016, 175.4705773167, '469'],
  [-37.9549819, 175.4681984167, '492'],
  [-37.95610765, 175.4687586833, '495'],
  [-37.9558325167, 175.4681527833, '496'],
  [-37.9563786, 175.4673479667, '506'],
  [-37.9588897333, 175.4662872333, '549'],
  [-37.9374805167, 175.4792935833, '232'],
  [-37.9385204667, 175.4796240833, '250'],
  [-37.9418827167, 175.48053625, '282'],
  [-37.9422215667, 175.4814613667, '291'],
  [-37.9452781, 175.4815002, '318'],
  [-37.9482466667, 175.4790639833, '372'],
  [-37.9497215167, 175.47691875, '396'],
  [-37.9341688833, 175.4782591167, '196'],
  [-37.9265146833, 175.4765383667, '109'],
  [-37.93050445, 175.4778804333, '151'],
  [-37.9283181, 175.4771124167, '129'],
  [-37.9251162, 175.4762160667, '98'],
  [-37.92343355, 175.4771558167, '73'],
  [-37.9239441667, 175.4794231667, '75'],
  [-37.9241087667, 175.4769972833, '83'],
  [-37.9222823667, 175.4774759333, '61'],
  [-37.9199369167, 175.4774060333, '34'],
  [-37.9203899333, 175.475518, '36'],
  [-37.9203777167, 175.4773256, '40'],
  [-37.9206612167, 175.4765307833, '42'],
  [-37.9210448, 175.4771433833, '44'],
  [-37.9220389167, 175.47755095, '57'],
  [-37.91929535, 175.4775611167, '26'],
  [-37.9216718667, 175.4775874667, '55'],
  [-37.98317275, 175.4515617, '874'],
  [-37.9834542667, 175.449681, '890'],
  [-37.94112955, 175.48040145, '278'],
  [-37.9511382833, 175.4768400333, '401'],
  [-37.9529536833, 175.4734404167, '447'],
  [-37.9818127667, 175.4589793667, '794'],
  [-37.9216345833, 175.4771334167, '50'],
  [-37.9817718333, 175.4597500333, '789'],
  [-37.8840469167, 175.4595505333, '3A'],
  [-37.8836735833, 175.4604158333, '4B'],
  [-37.88403835, 175.4600429333, '5'],
  [-37.8834882, 175.4601379, '1A'],
  [-37.88367125, 175.4597893667, '1'],
  [-37.8835863, 175.4604458167, '2A'],
  [-37.8835968, 175.4601401333, '2'],
  [-37.88386135, 175.4597867, '3'],
  [-37.88376075, 175.4601527667, '4'],
  [-37.8838918833, 175.4601641667, '6'],
  [-37.8842726667, 175.4597851667, '5A'],
  [-37.8840725833, 175.4598049333, '3B'],
  [-37.8976647333, 175.4710761333, '3'],
  [-37.8975512333, 175.4708644667, '7'],
  [-37.8973241167, 175.4703941833, '15'],
  [-37.8972415667, 175.4702575667, '17'],
  [-37.8973903333, 175.4705850167, '13'],
  [-37.8974731667, 175.4707213, '9'],
  [-37.8976014, 175.4709784167, '5'],
  [-37.8973658833, 175.4713826333, '1'],
  [-37.88263055, 175.4789374667, '2'],
  [-37.88295785, 175.4787557167, '3'],
  [-37.88262705, 175.4787408333, '4'],
  [-37.8828655833, 175.47856665, '5'],
  [-37.8826968, 175.4785708667, '6'],
  [-37.8829381167, 175.4790952, '1'],
  [-37.8829405833, 175.4789477, '1A'],
  [-37.9471062833, 175.4443811, '285'],
  [-37.9482693333, 175.4618783667, '129'],
  [-37.9477489, 175.4616306833, '134'],
  [-37.94778825, 175.4623992333, '120'],
  [-37.9476318333, 175.4527723667, '205'],
  [-37.9487271, 175.47377555, '22'],
  [-37.9483278667, 175.4699560333, '64'],
  [-37.9505486833, 175.475507, '3'],
  [-37.9471956833, 175.45408385, '192'],
  [-37.9474878167, 175.4494432167, '241'],
  [-37.9465419167, 175.4494655333, '240'],
  [-37.8980432167, 175.4818800667, '20'],
  [-37.8980799167, 175.4813788167, '11'],
  [-37.8979071, 175.4814689833, '11A'],
  [-37.8976527, 175.4820540667, '10'],
  [-37.8978225833, 175.48198855, '12'],
  [-37.8980157833, 175.4823010833, '14'],
  [-37.8981133, 175.4825153333, '18'],
  [-37.8972657167, 175.48179755, '1'],
  [-37.8982001167, 175.4818174667, '22'],
  [-37.89831945, 175.48166055, '26'],
  [-37.8974300667, 175.4821601, '2'],
  [-37.8976037833, 175.4823142833, '6'],
  [-37.8975959167, 175.4816213167, '7'],
  [-37.8977532667, 175.48153515, '9'],
  [-37.8985379, 175.4825481, '24'],
  [-37.8966536667, 175.4826586833, '25A'],
  [-37.8984072, 175.48528765, '54A'],
  [-37.8960960167, 175.4812310167, '5'],
  [-37.8976620167, 175.4837889667, '38'],
  [-37.8957596833, 175.4808671833, '1'],
  [-37.896049, 175.4808353333, '1A'],
  [-37.89630705, 175.4808317833, '3'],
  [-37.8980094, 175.4834140167, '34'],
  [-37.89804835, 175.4835438167, '36'],
  [-37.8978337, 175.483244, '30'],
  [-37.8977234667, 175.4828271167, '26'],
  [-37.8974671333, 175.4832206833, '28'],
  [-37.89729555, 175.4826933167, '22'],
  [-37.8982734, 175.4859548167, '60'],
  [-37.8993387167, 175.4873577333, '76'],
  [-37.8971479167, 175.4808783833, '10'],
  [-37.8959557167, 175.48164725, '11'],
  [-37.8973392833, 175.4807942, '12'],
  [-37.8973916333, 175.4808756, '14'],
  [-37.8966921833, 175.4822478333, '21'],
  [-37.89642605, 175.4824713833, '23'],
  [-37.8967609167, 175.4825135833, '25'],
  [-37.8971820833, 175.4809704667, '16'],
  [-37.89693775, 175.4814169833, '18A'],
  [-37.8968612333, 175.4812093333, '18'],
  [-37.8968348, 175.4827666333, '27'],
  [-37.8969158833, 175.4829914167, '29'],
  [-37.8969838333, 175.4832029333, '31'],
  [-37.89760075, 175.4835397, '32'],
  [-37.8970568167, 175.48351615, '33'],
  [-37.8967365, 175.4807273, '2'],
  [-37.8979339167, 175.4848533, '44'],
  [-37.8967854, 175.4809565833, '4'],
  [-37.8958402333, 175.481278, '7'],
  [-37.8964383667, 175.4812642667, '9'],
  [-37.8980381167, 175.4851460667, '48'],
  [-37.8985301167, 175.4851492, '52'],
  [-37.8981529, 175.4855380167, '54'],
  [-37.8986448333, 175.4855899833, '56'],
  [-37.8985807833, 175.4870328333, '66'],
  [-37.8986987667, 175.4873079333, '68'],
  [-37.8987788167, 175.4875430667, '74'],
  [-37.89890085, 175.4879704667, '80'],
  [-37.8966231333, 175.4820502667, '17A'],
  [-37.8964502667, 175.4821239667, '17B'],
  [-37.896275, 175.48221365, '17'],
  [-37.8964864333, 175.4816180167, '15'],
  [-37.89829765, 175.4849233667, '48A'],
  [-37.8983503, 175.4862882, '62'],
  [-37.8963564333, 175.4817611, '15A'],
  [-37.8961816167, 175.4819250833, '15B'],
  [-37.8838324667, 175.4758307667, '1'],
  [-37.8836433833, 175.4758399333, '2'],
  [-37.8833977167, 175.47575535, '3'],
  [-37.8833314667, 175.4755896167, '4'],
  [-37.8834651, 175.4752073, '5A'],
  [-37.8833988833, 175.4754131, '5'],
  [-37.8836138833, 175.4754014333, '6'],
  [-37.88376315, 175.4754688833, '7'],
  [-37.8453489, 175.4520246, '12'],
  [-37.8453374333, 175.44998695, '30'],
  [-37.8456579, 175.4496963667, '33'],
  [-37.84527125, 175.4440318, '40'],
  [-37.8447595167, 175.4494073667, '38'],
  [-37.8453093333, 175.4489722667, '40'],
  [-37.8453195333, 175.4515149667, '16'],
  [-37.8833522167, 175.4662158833, '2/13'],
  [-37.8838213, 175.46524815, '10A'],
  [-37.88380855, 175.46613485, '7A'],
  [-37.8832769, 175.4662041167, '1/13'],
  [-37.88379275, 175.4654513833, '10'],
  [-37.88377815, 175.4658082667, '11'],
  [-37.88342395, 175.4662276833, '3/13'],
  [-37.883518, 175.4662264667, '4/13'],
  [-37.8836896667, 175.4656703833, '14'],
  [-37.8834471333, 175.4658730667, '15'],
  [-37.88344295, 175.46574735, '16'],
  [-37.8843819333, 175.4658316167, '1'],
  [-37.8844031667, 175.4655400167, '2'],
  [-37.8841441667, 175.4660546, '3A'],
  [-37.8841592333, 175.46611295, '3B'],
  [-37.8842008167, 175.4658206, '3'],
  [-37.8841960167, 175.4655438833, '4'],
  [-37.8840714, 175.4658066333, '5'],
  [-37.8840438, 175.4655440333, '6'],
  [-37.8839425167, 175.46582275, '7'],
  [-37.8839567167, 175.4654131167, '8'],
  [-37.8837516, 175.4660999833, '9'],
  [-37.883711, 175.4655393167, '12'],
  [-37.9413734667, 175.4995142833, '306'],
  [-37.9264553167, 175.4927426, '101'],
  [-37.9263942667, 175.495421, '93'],
  [-37.9367796667, 175.49396525, '218'],
  [-37.9306420333, 175.4927391167, '147'],
  [-37.9314740333, 175.4922045333, '156'],
  [-37.9346698333, 175.4939321167, '195'],
  [-37.9210469167, 175.49473535, '45'],
  [-37.9244517667, 175.4930819833, '76'],
  [-37.92482195, 175.4937379833, '85'],
  [-37.9278428667, 175.49133405, '116'],
  [-37.928097, 175.4920060333, '117'],
  [-37.9259406, 175.4921851333, '98'],
  [-37.9432639333, 175.5024320833, '321'],
  [-37.9478774167, 175.50590725, '360'],
  [-37.9006717, 175.3709368333, '24'],
  [-37.90793765, 175.3650150333, '121'],
  [-37.9056018833, 175.3671315333, '89'],
  [-37.9073516833, 175.3655189333, '119'],
  [-37.8986494833, 175.4611173667, '1'],
  [-37.8984617833, 175.4610480667, '3'],
  [-37.8983073667, 175.4609003333, '5'],
  [-37.8985554833, 175.4614893833, '2'],
  [-37.8983680333, 175.4614087, '4'],
  [-37.8981331333, 175.4608315333, '7'],
  [-37.8982140167, 175.4613434833, '6'],
  [-37.8979873167, 175.4611021667, '10'],
  [-37.8980203833, 175.4609355833, '9'],
  [-37.89806, 175.4612782333, '8'],
  [-37.9028616833, 175.4335225667, '29'],
  [-37.9031164833, 175.4331062, '27'],
  [-37.9017570667, 175.4336130833, '43'],
  [-37.9018962667, 175.4342030167, '42'],
  [-37.9035645333, 175.4334544, '21'],
  [-37.8997075167, 175.4313605167, '63'],
  [-37.9028940667, 175.4339966333, '28'],
  [-37.90126025, 175.43430315, '54'],
  [-37.9009420667, 175.4335351333, '57'],
  [-37.8997543667, 175.4328163667, '67'],
  [-37.9042664833, 175.4334384833, '9'],
  [-37.9004958, 175.4365008, '56'],
  [-37.8999357667, 175.4364970167, '58'],
  [-37.9193787167, 175.4035627667, '29'],
  [-37.9187184, 175.40134295, '50'],
  [-37.91970595, 175.4043742667, '21'],
  [-37.93012645, 175.3979479333, '179'],
  [-37.9287776167, 175.3984838, '167'],
  [-37.9244404833, 175.40003235, '125'],
  [-37.9182969, 175.4015440667, '46'],
  [-37.9198358, 175.4009195, '62'],
  [-37.9214928833, 175.4003147333, '82'],
  [-37.9276005833, 175.3979560333, '156'],
  [-37.9090980833, 175.47152255, '112B'],
  [-37.9100087667, 175.47027605, '121A'],
  [-37.90817245, 175.47139345, '103'],
  [-37.90884805, 175.4719748, '108A'],
  [-37.9089414167, 175.4722395833, '108B'],
  [-37.9084711833, 175.47177935, '104'],
  [-37.90863345, 175.47171425, '106'],
  [-37.9083213167, 175.47131235, '105'],
  [-37.9090004, 175.472447, '108C'],
  [-37.9028464833, 175.4753390167, '26B'],
  [-37.9078277833, 175.4723944833, '4/96'],
  [-37.90357775, 175.4740898333, '36'],
  [-37.90385065, 175.473554, '35A'],
  [-37.9035803667, 175.47369605, '35'],
  [-37.90815455, 175.4719365833, '100'],
  [-37.91190955, 175.4702316833, '138'],
  [-37.90756, 175.4722275333, '7/96'],
  [-37.9089549167, 175.47103335, '111'],
  [-37.9044076167, 175.4737216, '42'],
  [-37.9011103, 175.4747561, '13'],
  [-37.9113504333, 175.46916605, '135B'],
  [-37.90916025, 175.4717170833, '112A'],
  [-37.9104814167, 175.4713397667, '124B'],
  [-37.9113419667, 175.4696552833, '133A'],
  [-37.9116247167, 175.4707302833, '134A'],
  [-37.9118128833, 175.4706304, '134B'],
  [-37.9117777333, 175.46919275, '139A'],
  [-37.91172915, 175.4689741333, '139B'],
  [-37.9091821167, 175.47238525, '110C'],
  [-37.9112748167, 175.46989875, '131A'],
  [-37.9112112333, 175.46968315, '131B'],
  [-37.9018407333, 175.474509, '17'],
  [-37.9021059167, 175.4747859167, '18'],
  [-37.9022214333, 175.4747533667, '20'],
  [-37.9021081667, 175.4743658667, '21'],
  [-37.9024045833, 175.4746604333, '22'],
  [-37.90227905, 175.4742904, '23'],
  [-37.9025434333, 175.4745909167, '24'],
  [-37.9033884667, 175.4737883, '33'],
  [-37.9029568833, 175.4739659833, '31'],
  [-37.90244755, 175.4742011333, '25'],
  [-37.9026128, 175.4741282667, '27'],
  [-37.9027832333, 175.4740469833, '29'],
  [-37.9027372833, 175.4744949833, '30'],
  [-37.9028963667, 175.4744151167, '32'],
  [-37.9039784167, 175.4735005167, '39'],
  [-37.9041466, 175.47341055, '41'],
  [-37.9043180167, 175.4733317667, '43'],
  [-37.9044306, 175.4732717, '45'],
  [-37.9002813333, 175.4746537333, '3A'],
  [-37.9003363333, 175.4746345833, '3B'],
  [-37.9003208833, 175.4742427, '3C'],
  [-37.9004106, 175.47457215, '3D'],
  [-37.9008182333, 175.4749564333, '7'],
  [-37.9008622667, 175.4745689333, '9A'],
  [-37.9087553333, 175.47168745, '108'],
  [-37.9087847167, 175.47111335, '109'],
  [-37.9090482, 175.4718688667, '110A'],
  [-37.9089821833, 175.47162705, '110'],
  [-37.9097564, 175.47064845, '117'],
  [-37.90991065, 175.4711398333, '118'],
  [-37.9098192, 175.4703204, '119A'],
  [-37.9100781833, 175.4710667, '120'],
  [-37.9102616, 175.4713288833, '120A'],
  [-37.91019675, 175.4704249667, '121'],
  [-37.9102786333, 175.47095955, '122'],
  [-37.91061325, 175.47114525, '124A'],
  [-37.9104595333, 175.4709259167, '124'],
  [-37.9103273167, 175.4703685833, '125'],
  [-37.9009658333, 175.47489005, '9'],
  [-37.9106314167, 175.47081795, '126'],
  [-37.9105098833, 175.4702934833, '127'],
  [-37.9115283, 175.47038715, '132'],
  [-37.9114078, 175.4698388833, '133'],
  [-37.9117353833, 175.4702887167, '136'],
  [-37.91165515, 175.4697282333, '137'],
  [-37.91209905, 175.4701214833, '140'],
  [-37.91192095, 175.46961505, '141'],
  [-37.91209585, 175.4695346667, '143'],
  [-37.91223925, 175.4694837833, '145'],
  [-37.9129544, 175.46972655, '148'],
  [-37.9127850833, 175.46918905, '149'],
  [-37.9131046167, 175.4696231333, '150'],
  [-37.9129241667, 175.4691591333, '151'],
  [-37.9133420333, 175.4695050167, '152'],
  [-37.9134355667, 175.4694691333, '154'],
  [-37.9136254167, 175.4688124833, '155'],
  [-37.9135736667, 175.4693978333, '156'],
  [-37.9137485167, 175.4693549667, '158'],
  [-37.9144754, 175.46902505, '164'],
  [-37.9147488833, 175.4695174667, '166'],
  [-37.9147467167, 175.4689613833, '168'],
  [-37.9053532, 175.4735344167, '44A'],
  [-37.9052717667, 175.4733045167, '44'],
  [-37.90506265, 175.4729767833, '49'],
  [-37.9052035667, 175.4729156167, '51'],
  [-37.9053496, 175.4728617833, '53'],
  [-37.9054862667, 175.47279975, '55'],
  [-37.9071557, 175.47249445, '88'],
  [-37.9011584833, 175.47587265, '10'],
  [-37.9012260167, 175.4757750333, '12'],
  [-37.9011779333, 175.47526505, '14'],
  [-37.9024628, 175.4750374833, '22A'],
  [-37.9024647, 175.4751844167, '22B'],
  [-37.9004774333, 175.4751149333, '1'],
  [-37.9028335, 175.4750389333, '28'],
  [-37.9004664333, 175.4755579667, '2'],
  [-37.9005692, 175.4755242167, '4'],
  [-37.9006539333, 175.4750368333, '5'],
  [-37.9010841833, 175.4755968, '8A'],
  [-37.9008984167, 175.4753584833, '8'],
  [-37.9091240667, 175.4721442833, '110B'],
  [-37.9097632833, 175.47034635, '117A'],
  [-37.9082253333, 175.4719109833, '102'],
  [-37.9114097833, 175.4693441333, '135A'],
  [-37.9112057333, 175.4692141667, '135C'],
  [-37.91167365, 175.4687884833, '139D'],
  [-37.9112668833, 175.4694056333, '135'],
  [-37.9111444667, 175.4690280333, '135D'],
  [-37.9115951667, 175.4692708167, '139'],
  [-37.9115359, 175.4690900833, '139C'],
  [-37.9106014, 175.4702607333, '129'],
  [-37.9076115833, 175.4723767833, '98'],
  [-37.9075872333, 175.4722996, '8/96'],
  [-37.9076397833, 175.4724662167, '10/96'],
  [-37.9076588167, 175.4725362667, '11/96'],
  [-37.9076818333, 175.47261165, '12/96'],
  [-37.90787275, 175.4725516833, '6/96'],
  [-37.9078548167, 175.4724749, '5/96'],
  [-37.9078033833, 175.47231415, '3/96'],
  [-37.9077763833, 175.4722320833, '2/96'],
  [-37.9077493833, 175.4721500167, '1/96'],
  [-37.9027466667, 175.4750991167, '26A'],
  [-37.9013304167, 175.4746607667, '13A'],
  [-37.9012675, 175.4744082333, '13B'],
  [-37.9010857333, 175.4744788167, '13C'],
  [-37.91033795, 175.47011845, '125A'],
  [-37.90225545, 175.4739976167, '23A'],
  [-37.9099696333, 175.4705395667, '119'],
  [-37.9152684167, 175.4687266333, '176'],
  [-37.8767274167, 175.4498122333, '31'],
  [-37.8753801, 175.4141292833, '347'],
  [-37.8749301667, 175.4229940833, '269'],
  [-37.8780543667, 175.4318462667, '2/193'],
  [-37.87844965, 175.4315496667, '4/193'],
  [-37.877916, 175.4313673167, '3/193'],
  [-37.8772684667, 175.4313525833, '1/193'],
  [-37.8745261, 175.41460525, '336'],
  [-37.8730149167, 175.4139278833, '348'],
  [-37.8749023333, 175.4133807833, '357'],
  [-37.8748893, 175.4158492, '331'],
  [-37.87500415, 175.4305876333, '199'],
  [-37.8762052667, 175.4298853667, '209'],
  [-37.876837, 175.4272319333, '231'],
  [-37.8750526167, 175.4337470333, '173'],
  [-37.8750786167, 175.4326617667, '185'],
  [-37.8765961833, 175.4422767333, '1/101'],
  [-37.8765928833, 175.44146825, '2/101'],
  [-37.8766094667, 175.4450663167, '1/75'],
  [-37.8751227667, 175.4479436, '47'],
  [-37.8785082667, 175.4463698333, '59'],
  [-37.8749291833, 175.42188625, '275'],
  [-37.8750447, 175.4367026, '145'],
  [-37.8746106333, 175.4284329, '218'],
  [-37.8745961333, 175.4294403, '210'],
  [-37.8729241167, 175.4301093, '204'],
  [-37.8730751833, 175.4315361667, '192'],
  [-37.8764695333, 175.4360706167, '2/151'],
  [-37.8750668667, 175.4352073833, '161'],
  [-37.8745754667, 175.4496806333, '32'],
  [-37.87504855, 175.4370912, '141'],
  [-37.8745623, 175.4221763333, '276'],
  [-37.8745616667, 175.4217338333, '278'],
  [-37.8749560667, 175.4206555833, '291'],
  [-37.87457185, 175.42039215, '292'],
  [-37.8749318, 175.4195155667, '297'],
  [-37.8749193167, 175.4189609333, '301'],
  [-37.8745523667, 175.4178998833, '314'],
  [-37.87555895, 175.4169412167, '317'],
  [-37.8727607, 175.4172541833, '320'],
  [-37.87489075, 175.41689625, '325'],
  [-37.8762137833, 175.4211919167, '283'],
  [-37.8773094667, 175.4190741833, '295'],
  [-37.8766782167, 175.4177899333, '307'],
  [-37.87495795, 175.4292900167, '211'],
  [-37.87496815, 175.4277122333, '229'],
  [-37.87496315, 175.4270601833, '235'],
  [-37.87495715, 175.4262284667, '243'],
  [-37.87466625, 175.4340618833, '166'],
  [-37.8731281333, 175.43353715, '176'],
  [-37.8746368667, 175.43285965, '180'],
  [-37.8746353667, 175.4320823333, '188'],
  [-37.8746651833, 175.43837135, '134'],
  [-37.8746581, 175.4361343333, '152'],
  [-37.8766056667, 175.4444213667, '2/75'],
  [-37.8750381333, 175.4425046833, '95'],
  [-37.8758251333, 175.4478232833, '49'],
  [-37.87515175, 175.4469793167, '51'],
  [-37.8771227333, 175.4464864167, '57'],
  [-37.8750768, 175.445912, '61'],
  [-37.8750693833, 175.4452335333, '71'],
  [-37.8765724333, 175.4321372667, '191'],
  [-37.876819, 175.4318101833, '1/191'],
  [-37.8750694, 175.4518701667, '15'],
  [-37.8750833, 175.4512497167, '21'],
  [-37.87511365, 175.4491755667, '37'],
  [-37.8744741833, 175.4113393, '372'],
  [-37.87448925, 175.4111035167, '374'],
  [-37.8749085333, 175.4183780667, '309'],
  [-37.8748987, 175.4119560833, '371'],
  [-37.8754877, 175.4485419667, '43'],
  [-37.87489105, 175.4142969333, '1/347'],
  [-37.87509285, 175.4505922, '23'],
  [-37.8746456667, 175.4350032667, '162'],
  [-37.8817882333, 175.46555605, '1'],
  [-37.8817762333, 175.4657047, '2'],
  [-37.88177495, 175.4658300167, '3'],
  [-37.8818317167, 175.4659088333, '4'],
  [-37.8818769833, 175.4658514167, '5'],
  [-37.881892, 175.4657157833, '6'],
  [-37.8819030667, 175.4655528667, '7'],
  [-37.8249572667, 175.3822644167, '62C'],
  [-37.8241013167, 175.3830562833, '62B'],
  [-37.8235533667, 175.3836837833, '62A'],
  [-37.8232282333, 175.38113915, '42'],
  [-37.8216185167, 175.3801976167, '24'],
  [-37.8233693667, 175.3818881167, '50'],
  [-37.8238237167, 175.38163785, '48'],
  [-37.8223544167, 175.3807860167, '34'],
  [-37.8221907167, 175.38064385, '32'],
  [-37.7917540833, 175.4757575167, '369'],
  [-37.7917070167, 175.4768378667, '371'],
  [-37.7976220833, 175.4791485667, '310'],
  [-37.8026816667, 175.4738649167, '241'],
  [-37.8063079833, 175.4719216833, '198'],
  [-37.8127222, 175.46321975, '88'],
  [-37.79851905, 175.4782582, '298'],
  [-37.7982161667, 175.4784413833, '300'],
  [-37.7979628667, 175.4785954333, '304'],
  [-37.7989472167, 175.4770213333, '289'],
  [-37.8124759, 175.46149895, '66'],
  [-37.80813105, 175.4692921667, '133'],
  [-37.80903515, 175.4695616333, '164'],
  [-37.81169535, 175.4617913167, '77'],
  [-37.7931904667, 175.4771456167, '359'],
  [-37.90154435, 175.4820577833, '17A'],
  [-37.9023211333, 175.4866221333, '50'],
  [-37.9029791167, 175.4860176833, '43'],
  [-37.9018640167, 175.4839159667, '29'],
  [-37.9017065667, 175.4845584, '32'],
  [-37.9013472667, 175.4832850333, '20'],
  [-37.9022597667, 175.4852180667, '37'],
  [-37.90235635, 175.4855437333, '39'],
  [-37.9020226167, 175.48626825, '48A'],
  [-37.90219835, 175.4862075833, '48'],
  [-37.9028144833, 175.4859300667, '41A'],
  [-37.9019145833, 175.4857036333, '38'],
  [-37.9012494167, 175.4836438333, '22A'],
  [-37.90117625, 175.4832889167, '20A'],
  [-37.9013004333, 175.4831083, '18A'],
  [-37.9018345667, 175.48310725, '23A'],
  [-37.9014717833, 175.4845211, '30A'],
  [-37.9011141833, 175.4813179833, '11'],
  [-37.9012595833, 175.4829706167, '18'],
  [-37.9012063333, 175.4815285167, '13'],
  [-37.90106015, 175.48224675, '14'],
  [-37.9014018333, 175.4835019, '22'],
  [-37.90164195, 175.4831019333, '23'],
  [-37.9014562667, 175.4837066, '24'],
  [-37.9017002833, 175.48331585, '25'],
  [-37.9013501333, 175.4820586167, '17'],
  [-37.9017979167, 175.48370115, '27A'],
  [-37.9017437333, 175.4834995, '27'],
  [-37.9015959833, 175.4841416, '28'],
  [-37.9016565333, 175.4843582167, '30'],
  [-37.9019526833, 175.4841925, '31'],
  [-37.90202855, 175.4844477667, '33'],
  [-37.9008982667, 175.4817133, '8'],
  [-37.9024487833, 175.4858792167, '41'],
  [-37.9020930667, 175.4858615167, '42'],
  [-37.9025991167, 175.4863993167, '49'],
  [-37.9021011667, 175.4846921667, '35'],
  [-37.9014189333, 175.4823503167, '19'],
  [-37.90126485, 175.4817892167, '15'],
  [-37.9015360333, 175.4839226833, '26'],
  [-37.83531625, 175.4933037333, '196'],
  [-37.8352276167, 175.4927147833, '195'],
  [-37.8360773, 175.4912368, '187'],
  [-37.8346867167, 175.49328105, '201'],
  [-37.82529725, 175.5052682333, '361'],
  [-37.8370500167, 175.4896684, '163'],
  [-37.8396963333, 175.4849568, '1/133'],
  [-37.8292152667, 175.4972928333, '281'],
  [-37.8293017833, 175.4982716333, '300'],
  [-37.8282765333, 175.4989055, '307'],
  [-37.8274501333, 175.5007519833, '333'],
  [-37.8273441167, 175.5024751333, '2/336'],
  [-37.8261453167, 175.5047067667, '360'],
  [-37.8301054, 175.4958695333, '275'],
  [-37.8271283667, 175.5028555, '1/336'],
  [-37.8369560667, 175.4905711833, '172'],
  [-37.81904615, 175.5025335167, '7/369'],
  [-37.8218408167, 175.50377335, '4/369'],
  [-37.8209456333, 175.5022760833, '6/369'],
  [-37.8208349667, 175.5044007, '5/369'],
  [-37.8238658, 175.50523275, '2/369'],
  [-37.8190694, 175.5003232333, '8/369'],
  [-37.8120237667, 175.5010552833, '10/369'],
  [-37.8118820833, 175.50392555, '11/369'],
  [-37.8356394, 175.4927849, '192'],
  [-37.8452920167, 175.4770441167, '6'],
  [-37.8332265167, 175.4939223333, '232'],
  [-37.8297708, 175.4960635, '253'],
  [-37.8393579167, 175.4857046667, '2/133'],
  [-37.83878395, 175.48766725, '142'],
  [-37.8379286333, 175.4890502, '152'],
  [-37.8364941, 175.4914751, '186'],
  [-37.8248432833, 175.5066992833, '369'],
  [-37.82553745, 175.5068898833, '380'],
  [-37.83202985, 175.4941239333, '240'],
  [-37.82194035, 175.5057576833, '3/369'],
  [-37.8227608167, 175.5063209333, '1/369'],
  [-37.8141088167, 175.5037792333, '9/369'],
  [-37.8382942833, 175.48852635, '148'],
  [-37.8603913833, 175.4492696, '57'],
  [-37.8592938167, 175.42099095, '308C'],
  [-37.85984295, 175.42067725, '308B'],
  [-37.8598229167, 175.4210151667, '308A'],
  [-37.8598344333, 175.3976947833, '508'],
  [-37.8603243333, 175.4140272833, '369'],
  [-37.8603184, 175.4123881167, '385'],
  [-37.86106375, 175.4477743833, '67'],
  [-37.861365, 175.4476857667, '73'],
  [-37.8613431833, 175.4479565167, '69'],
  [-37.86191185, 175.44788405, '71'],
  [-37.8603987333, 175.4502737667, '53'],
  [-37.86045645, 175.4319935167, '209'],
  [-37.8603551333, 175.4258720333, '263'],
  [-37.8599289833, 175.4315900833, '210'],
  [-37.8604198833, 175.4334522667, '195'],
  [-37.8627496167, 175.42078385, '309B'],
  [-37.8609723167, 175.4515878667, '37'],
  [-37.8603717833, 175.4514413333, '39'],
  [-37.8609809, 175.4517044667, '35'],
  [-37.86096795, 175.45250335, '27'],
  [-37.8604741333, 175.4530975833, '17'],
  [-37.8603852667, 175.451807, '33'],
  [-37.8572038, 175.42770555, '246'],
  [-37.8604631667, 175.4363373667, '171'],
  [-37.8591713833, 175.4484903833, '62'],
  [-37.8604119667, 175.4340429333, '191'],
  [-37.8603663667, 175.4354625167, '179'],
  [-37.8603935, 175.4373993667, '161'],
  [-37.8600009, 175.44318935, '108'],
  [-37.8599224167, 175.4265426167, '256'],
  [-37.8612047333, 175.4464131333, '81B'],
  [-37.8599028667, 175.4231039167, '288'],
  [-37.8602706, 175.4220058333, '295'],
  [-37.8602638667, 175.4191497333, '323'],
  [-37.8609657667, 175.4187969, '327'],
  [-37.8602931, 175.4179491333, '329'],
  [-37.8598848667, 175.4176532167, '338'],
  [-37.8632475167, 175.4173751333, '339'],
  [-37.8599251667, 175.4255647333, '1/264'],
  [-37.8599279667, 175.4253799333, '2/264'],
  [-37.86045495, 175.4383567333, '157'],
  [-37.8604267333, 175.4421660333, '113'],
  [-37.8617114333, 175.4414719167, '125'],
  [-37.8603943167, 175.43982245, '143'],
  [-37.8604978, 175.4449393667, '89'],
  [-37.8603957167, 175.4488193667, '59'],
  [-37.8599959167, 175.4481568167, '64'],
  [-37.8603463333, 175.4481201667, '65'],
  [-37.8603207833, 175.44708855, '75'],
  [-37.8617075, 175.4464497667, '85'],
  [-37.8603354667, 175.4458761167, '87'],
  [-37.8603924833, 175.4529279333, '21'],
  [-37.8603805, 175.4522459167, '31'],
  [-37.8603894333, 175.4465241, '81'],
  [-37.8624513667, 175.4464558667, '2/85'],
  [-37.8603426, 175.42038605, '309A'],
  [-37.8597382167, 175.4030150833, '468'],
  [-37.8600008333, 175.4468853333, '78'],
  [-37.8600151833, 175.4476529333, '70'],
  [-37.8619444167, 175.4473194667, '77'],
  [-37.8604090333, 175.4206673167, '309'],
  [-37.8599482667, 175.4450833833, '90'],
  [-37.8599667333, 175.4439503167, '102'],
  [-37.8599639167, 175.4443829333, '98'],
  [-37.8604016667, 175.4435244167, '107'],
  [-37.8602872667, 175.4157777167, '357C'],
  [-37.8619551667, 175.4154903667, '357B'],
  [-37.8602759333, 175.41535695, '357'],
  [-37.8599460833, 175.4464074167, '82'],
  [-37.8585100167, 175.4461918667, '84'],
  [-37.8604238667, 175.4437588667, '105'],
  [-37.86030515, 175.4229068167, '289'],
  [-37.9165466667, 175.5400699667, '47'],
  [-37.9163835, 175.5395208667, '52'],
  [-37.9162024833, 175.5415235333, '4/35'],
  [-37.9138618, 175.5389959167, '20'],
  [-37.9147363, 175.5367299167, '4'],
  [-37.9171924833, 175.5398619667, '53'],
  [-37.9156216333, 175.5400467167, '1/35'],
  [-37.9156090167, 175.5406467667, '2/35'],
  [-37.9155483, 175.54130355, '3/35'],
  [-37.9161911333, 175.5412111333, '5/35'],
  [-37.9177019333, 175.5406090667, '57'],
  [-37.9172073167, 175.5390771667, '56'],
  [-37.8413934333, 175.3669168333, '185'],
  [-37.8417850333, 175.3689200833, '199'],
  [-37.8428339667, 175.3706989, '216'],
  [-37.8416074, 175.36479145, '164'],
  [-37.8409904167, 175.3645986833, '157'],
  [-37.84092815, 175.3644066167, '161'],
  [-37.8749487833, 175.4757354167, '4'],
  [-37.8748824667, 175.4752927333, '3'],
  [-37.8746354, 175.475246, '5'],
  [-37.8742075167, 175.4755986333, '10'],
  [-37.8743622667, 175.4759894667, '8A'],
  [-37.8744567667, 175.4756695333, '8'],
  [-37.8748683833, 175.4760352167, '4A'],
  [-37.8742254333, 175.47601205, '10A'],
  [-37.8747158167, 175.4760297167, '6A'],
  [-37.8746737833, 175.4757186333, '6'],
  [-37.9465236167, 175.3809737667, '672'],
  [-37.9005455, 175.4730509333, '22'],
  [-37.9003672167, 175.4684980833, '17'],
  [-37.9003614667, 175.4682696667, '13'],
  [-37.9009926333, 175.4714326, '18B'],
  [-37.9004931, 175.4733237333, '24'],
  [-37.90023555, 175.4663222333, '3'],
  [-37.9003731333, 175.4738848333, '30'],
  [-37.90041915, 175.4736641333, '28A'],
  [-37.9008516833, 175.47143275, '18A'],
  [-37.9009989333, 175.4716885333, '18C'],
  [-37.9011166833, 175.4715942833, '18D'],
  [-37.9013468667, 175.4716314833, '18E'],
  [-37.9013142333, 175.4713999333, '18F'],
  [-37.9007320667, 175.4678888833, '12'],
  [-37.9007490333, 175.4682728833, '14'],
  [-37.9002906, 175.4672436333, '11'],
  [-37.9005921667, 175.4728228833, '20'],
  [-37.9012265333, 175.4713549, '18G'],
  [-37.8998487333, 175.4663062167, '1'],
  [-37.9004667833, 175.4734721, '26'],
  [-37.9007287833, 175.4668388, '4'],
  [-37.9002529667, 175.4665572, '5'],
  [-37.9002680333, 175.4668009667, '7'],
  [-37.9002738833, 175.4670198667, '9'],
  [-37.90052665, 175.4737441167, '28B'],
  [-37.9202440833, 175.4647199333, '59'],
  [-37.9186491, 175.4631960333, '74'],
  [-37.9197376, 175.46404755, '63'],
  [-37.9209585333, 175.4715133667, '31'],
  [-37.92198325, 175.4719067667, '32'],
  [-37.9200168333, 175.4637374167, '64'],
  [-37.9199907667, 175.4714465333, '9'],
  [-37.91941015, 175.4649217833, '65'],
  [-37.9196411667, 175.4633694333, '66'],
  [-37.91916365, 175.4639929833, '67A'],
  [-37.9194144667, 175.4637018833, '67'],
  [-37.9193556833, 175.4631293833, '70'],
  [-37.9191286667, 175.4630976, '72'],
  [-37.9189485833, 175.4635427667, '69'],
  [-37.9201641167, 175.4662894167, '55'],
  [-37.9211940333, 175.4656174833, '56A'],
  [-37.920671, 175.4657966667, '56'],
  [-37.92006415, 175.4658042, '57A'],
  [-37.9213706, 175.4727426833, '23'],
  [-37.9214441667, 175.4732278667, '24'],
  [-37.9202821667, 175.4732763833, '18'],
  [-37.9204884667, 175.4729263, '19'],
  [-37.9211967, 175.47098555, '33'],
  [-37.92094835, 175.4706909167, '35'],
  [-37.9219078167, 175.47147535, '34'],
  [-37.9197843667, 175.46309625, '68'],
  [-37.9210935333, 175.46484215, '60A'],
  [-37.9212236167, 175.4704147167, '40'],
  [-37.9197908, 175.4659149333, '55A'],
  [-37.92033405, 175.4655102, '57'],
  [-37.9211895167, 175.46547285, '58A'],
  [-37.9207404, 175.46524515, '58'],
  [-37.91857275, 175.4635986167, '71'],
  [-37.9182674667, 175.46367495, '73'],
  [-37.9195246333, 175.4715611, '11'],
  [-37.9216761833, 175.4729861167, '26'],
  [-37.92162375, 175.4721619667, '27'],
  [-37.9218544, 175.4726169833, '28'],
  [-37.9215389333, 175.4715153167, '29'],
  [-37.9219467167, 175.4722808333, '30'],
  [-37.9193754, 175.4726740833, '12'],
  [-37.9195867667, 175.4721921667, '13'],
  [-37.9196743333, 175.4735581167, '14A'],
  [-37.91978385, 175.4729767167, '14'],
  [-37.9200549833, 175.4726106667, '15'],
  [-37.9197512333, 175.4737709, '16'],
  [-37.9204467, 175.4722458667, '17'],
  [-37.9199559, 175.4736553667, '18A'],
  [-37.9193368833, 175.4700432833, '1'],
  [-37.9218013667, 175.4711677833, '36'],
  [-37.9204076, 175.4708148667, '37'],
  [-37.9217517833, 175.4702188667, '38A'],
  [-37.9215826, 175.4708205333, '38'],
  [-37.9207000333, 175.4703961167, '39'],
  [-37.9205687167, 175.4700339833, '41'],
  [-37.9208976, 175.46987095, '42'],
  [-37.92033355, 175.4687946, '45'],
  [-37.91982325, 175.4679912667, '47A'],
  [-37.9209613833, 175.4677278167, '48A'],
  [-37.92131875, 175.4676346167, '48B'],
  [-37.9205986, 175.4680208, '48'],
  [-37.9196399667, 175.4679596667, '49B'],
  [-37.9202544833, 175.4681937167, '47'],
  [-37.9198937833, 175.4678851833, '49A'],
  [-37.9205374667, 175.46738275, '50'],
  [-37.9213241, 175.4675107, '50B'],
  [-37.9201188667, 175.4669429, '51'],
  [-37.92103205, 175.4665559333, '52A'],
  [-37.9205449167, 175.4668373833, '52'],
  [-37.9198923833, 175.46667, '53'],
  [-37.9210808167, 175.4664227833, '54A'],
  [-37.920561, 175.4662841333, '54'],
  [-37.91946705, 175.4707291667, '5'],
  [-37.9193920833, 175.47035955, '3'],
  [-37.9195288167, 175.4710633833, '7'],
  [-37.92069515, 175.4648828167, '60'],
  [-37.9209773667, 175.4675400333, '50A'],
  [-37.9201842667, 175.46752845, '49'],
  [-37.9200461167, 175.4643875333, '61'],
  [-37.9205402833, 175.4644506333, '62'],
  [-37.9196651333, 175.4646621833, '63A'],
  [-37.9211008833, 175.4733943, '22'],
  [-37.9207025167, 175.4734697333, '20'],
  [-37.9209406667, 175.47297795, '21'],
  [-37.9211156333, 175.4720907167, '25'],
  [-37.9221545333, 175.4731278833, '26A'],
  [-37.8946718167, 175.4691448667, '53'],
  [-37.8945620667, 175.46918055, '55'],
  [-37.8942623667, 175.4697152833, '52'],
  [-37.894203, 175.4688735167, '65'],
  [-37.89425415, 175.4689361333, '63'],
  [-37.89414905, 175.4688349167, '67'],
  [-37.8939181333, 175.4694227167, '64'],
  [-37.8938391333, 175.4693460667, '66'],
  [-37.8907021167, 175.4667148333, '93'],
  [-37.8906039, 175.4666683167, '95'],
  [-37.8902027167, 175.4664942833, '103'],
  [-37.8905652, 175.4673196167, '92'],
  [-37.8898694, 175.4663493333, '107'],
  [-37.8897077333, 175.4662881167, '113'],
  [-37.8897784833, 175.4663228, '111'],
  [-37.8956830333, 175.4710189333, '32'],
  [-37.8955352667, 175.4709092833, '36'],
  [-37.8954734333, 175.4708266833, '38'],
  [-37.8960418333, 175.47138995, '28'],
  [-37.8820345667, 175.46329545, '3/201'],
  [-37.8822174333, 175.46335335, '1/201'],
  [-37.8821085167, 175.4633248, '2/201'],
  [-37.8823766667, 175.4634171667, '197'],
  [-37.8841371, 175.46403415, '175A'],
  [-37.8841525333, 175.4636656, '175B'],
  [-37.8864762667, 175.4645354333, '151'],
  [-37.8863782833, 175.4644388833, '153'],
  [-37.8862153, 175.4648985833, '155'],
  [-37.8860901, 175.4648409833, '157'],
  [-37.8880628167, 175.4656834833, '133'],
  [-37.8878619333, 175.4655976667, '135'],
  [-37.8906979667, 175.4673655, '90'],
  [-37.8907991, 175.4667608667, '91'],
  [-37.8961849167, 175.4707743833, '25'],
  [-37.8836823667, 175.4638652167, '181'],
  [-37.8836385667, 175.4632253833, '183'],
  [-37.8838402, 175.4639201167, '179'],
  [-37.8982437333, 175.4734017333, '1'],
  [-37.8849776167, 175.46438955, '171'],
  [-37.8843719833, 175.4641355167, '173'],
  [-37.8839963167, 175.4632512833, '177'],
  [-37.88393085, 175.4634884, '179B'],
  [-37.8837384333, 175.4634720333, '181A'],
  [-37.8834786833, 175.4638174667, '185'],
  [-37.8834804667, 175.46322915, '187'],
  [-37.8833056667, 175.4637555833, '189'],
  [-37.88310485, 175.4633649667, '191A'],
  [-37.8831340833, 175.4636871, '191'],
  [-37.8830253167, 175.4636718333, '193'],
  [-37.8819504, 175.4632695667, '203'],
  [-37.88170725, 175.4631031, '205'],
  [-37.88149825, 175.4630156833, '207'],
  [-37.8813178333, 175.4626260667, '209A'],
  [-37.8813002167, 175.4629425167, '209'],
  [-37.8810862833, 175.4628550167, '211'],
  [-37.8884475, 175.46494685, '125A'],
  [-37.88836565, 175.4649932, '127A'],
  [-37.88680255, 175.4645032, '145'],
  [-37.8866910333, 175.4647031667, '147A'],
  [-37.8863981167, 175.4649715167, '149'],
  [-37.8859491, 175.4647828333, '159'],
  [-37.8857348333, 175.4647021333, '161'],
  [-37.8856289833, 175.4642462833, '163'],
  [-37.8854787333, 175.4646066833, '165'],
  [-37.8853169667, 175.4645344833, '167'],
  [-37.8851657167, 175.4644626667, '169'],
  [-37.89008265, 175.4664379167, '105'],
  [-37.8888476167, 175.4659953167, '117'],
  [-37.88862475, 175.4659086167, '121'],
  [-37.8884613833, 175.4658299, '123'],
  [-37.8884445167, 175.4652906, '125'],
  [-37.8883496833, 175.46527395, '127'],
  [-37.8882554833, 175.46575415, '129'],
  [-37.8881798833, 175.4652017833, '131'],
  [-37.8876298667, 175.4655107667, '137'],
  [-37.8874722667, 175.4654312667, '139'],
  [-37.8870441833, 175.4652550333, '141'],
  [-37.8868197, 175.46516795, '143'],
  [-37.8865865, 175.46503135, '147'],
  [-37.8944378167, 175.4698605333, '48'],
  [-37.8943299667, 175.4697972167, '50'],
  [-37.8946586167, 175.46927655, '51'],
  [-37.8942089833, 175.4696627, '54'],
  [-37.89410215, 175.46963495, '56'],
  [-37.8944861833, 175.4691251333, '57'],
  [-37.89410185, 175.4695671167, '58'],
  [-37.89440395, 175.4690316833, '59'],
  [-37.8940363833, 175.4695254833, '60'],
  [-37.8943071333, 175.4689793333, '61'],
  [-37.8939694333, 175.4694826, '62'],
  [-37.8937483667, 175.4692441333, '68'],
  [-37.8940153, 175.4687127667, '69'],
  [-37.8936944333, 175.4691774333, '70'],
  [-37.8939444833, 175.4686454167, '71'],
  [-37.8914311167, 175.4676565833, '78'],
  [-37.8914605833, 175.4668025833, '81'],
  [-37.8911125833, 175.467531, '82'],
  [-37.8913374667, 175.46691925, '83'],
  [-37.8909541667, 175.4674899167, '84'],
  [-37.8912424167, 175.4668760167, '85'],
  [-37.89086865, 175.4674540833, '86'],
  [-37.8911290333, 175.46682535, '87'],
  [-37.8908065333, 175.4674188167, '88'],
  [-37.8909961333, 175.4667623333, '89'],
  [-37.89043345, 175.4672657667, '98'],
  [-37.8976105333, 175.47313585, '10'],
  [-37.8975240667, 175.47213955, '17'],
  [-37.8964341, 175.4719897, '18'],
  [-37.8965768167, 175.4718193667, '20'],
  [-37.8964536167, 175.47098525, '21'],
  [-37.8965168, 175.4717821667, '22'],
  [-37.8963066833, 175.4708868167, '23'],
  [-37.8964117, 175.4716877833, '24'],
  [-37.8973729833, 175.4718744167, '19'],
  [-37.8961056167, 175.4707024167, '27'],
  [-37.89606105, 175.4706588333, '29'],
  [-37.8957499, 175.4710900333, '30'],
  [-37.8960081167, 175.4706084667, '31'],
  [-37.89595535, 175.4705515167, '33'],
  [-37.8962650667, 175.4715582333, '26'],
  [-37.8977395833, 175.4736163833, '2A'],
  [-37.8976182167, 175.4734736333, '2'],
  [-37.8950879167, 175.4697355, '49'],
  [-37.8953451167, 175.47080125, '40'],
  [-37.8952480833, 175.4706864833, '42'],
  [-37.8953311333, 175.4699905167, '43'],
  [-37.8951690167, 175.4705682833, '44'],
  [-37.8952598667, 175.4699087, '45'],
  [-37.8951447333, 175.4705209333, '46'],
  [-37.8951409333, 175.4698058667, '47'],
  [-37.8954689333, 175.4701014167, '41A'],
  [-37.8958601667, 175.4704608833, '35'],
  [-37.8957632833, 175.4703618, '37'],
  [-37.89565655, 175.4702728333, '39'],
  [-37.8955528, 175.4701858833, '41'],
  [-37.8976127167, 175.4736873167, '4A'],
  [-37.8974748, 175.4735857667, '4'],
  [-37.8973855833, 175.4735356667, '6'],
  [-37.8974473167, 175.4733615667, '8'],
  [-37.8896038, 175.4662530833, '115'],
  [-37.8938700833, 175.46857325, '73'],
  [-37.8913213333, 175.4676180667, '80'],
  [-37.89351535, 175.4690702167, '76'],
  [-37.8936501, 175.4683802833, '77'],
  [-37.8937599333, 175.4684853667, '75'],
  [-37.8935794833, 175.4691255, '72'],
  [-37.88384375, 175.4636547333, '179A'],
  [-37.8877088, 175.4661684833, '104'],
  [-37.8853223833, 175.4655525667, '128B'],
  [-37.88438085, 175.4648718667, '136C'],
  [-37.8841924667, 175.46482515, '138'],
  [-37.8840040333, 175.4647229667, '140'],
  [-37.8838259833, 175.4646471667, '142'],
  [-37.8836846833, 175.4645814167, '144'],
  [-37.8833978167, 175.4647726167, '146A'],
  [-37.88347465, 175.46450515, '146'],
  [-37.8832495667, 175.4646684333, '148B'],
  [-37.8833107333, 175.4644183167, '148A'],
  [-37.8830987333, 175.4643600833, '150'],
  [-37.88243095, 175.4641342, '152'],
  [-37.8822347333, 175.4643721667, '154A'],
  [-37.88231865, 175.4640810833, '154'],
  [-37.8820192, 175.4644994833, '156'],
  [-37.8820541833, 175.46428995, '158A'],
  [-37.8821268, 175.4640207, '158'],
  [-37.88190465, 175.4639371333, '160'],
  [-37.8817260167, 175.4638787833, '162'],
  [-37.8814407667, 175.4640942167, '164A'],
  [-37.8815740333, 175.46375875, '164'],
  [-37.8814061667, 175.4637101333, '166'],
  [-37.8812219167, 175.4636397667, '168'],
  [-37.8810714, 175.4635707167, '170'],
  [-37.8849612333, 175.4651687333, '134'],
  [-37.8867657833, 175.46587165, '116'],
  [-37.8873525667, 175.4663687, '108A'],
  [-37.8875141333, 175.46643145, '108B'],
  [-37.88740205, 175.4660429667, '108'],
  [-37.8872605, 175.46600665, '110'],
  [-37.8870516667, 175.4659278333, '114'],
  [-37.8859261833, 175.4657479333, '122A'],
  [-37.8859050667, 175.4659105167, '122B'],
  [-37.8859588, 175.4655614, '122'],
  [-37.88575615, 175.4657199833, '124A'],
  [-37.8857864167, 175.4655019333, '124'],
  [-37.8855956333, 175.46541875, '126'],
  [-37.8854599, 175.4652737833, '128'],
  [-37.8852678333, 175.46529905, '130'],
  [-37.8850946667, 175.4652269667, '132'],
  [-37.8878558833, 175.4662192833, '100'],
  [-37.88434005, 175.4648704833, '136B'],
  [-37.88430585, 175.4648585667, '136A'],
  [-37.9102085667, 175.47267125, '50B'],
  [-37.9116658, 175.4774299167, '86A'],
  [-37.91171815, 175.4771741167, '82A'],
  [-37.90942125, 175.47189105, '37'],
  [-37.91030625, 175.47526205, '63B'],
  [-37.9104127167, 175.4752166, '63A'],
  [-37.9095648833, 175.47290545, '49A'],
  [-37.9093032333, 175.4714794833, '35A'],
  [-37.90934235, 175.47164185, '35B'],
  [-37.9093857333, 175.4728978167, '47B'],
  [-37.9095356333, 175.4723232833, '43'],
  [-37.9094703333, 175.4721117667, '39'],
  [-37.9096594333, 175.4715342167, '40'],
  [-37.9080098833, 175.4672010667, '5'],
  [-37.9083293833, 175.4682696833, '13'],
  [-37.9089423167, 175.4690827667, '20'],
  [-37.9089409167, 175.4702961167, '29'],
  [-37.9081540667, 175.46658445, '2'],
  [-37.9097415167, 175.4717528833, '42'],
  [-37.9101694333, 175.4746051167, '57'],
  [-37.9080884, 175.4674672833, '7'],
  [-37.91215875, 175.4797119167, '102'],
  [-37.9118344667, 175.4799542, '103'],
  [-37.9106944, 175.4744461, '62A'],
  [-37.9113962667, 175.4772112333, '82'],
  [-37.90982995, 175.4733563, '51A'],
  [-37.9115914833, 175.4801362333, '107A'],
  [-37.9092558833, 175.4696357, '26B'],
  [-37.91002055, 175.4726635167, '50A'],
  [-37.90847515, 175.46755925, '10'],
  [-37.9082532667, 175.4680019333, '11'],
  [-37.9088822833, 175.4688571833, '18'],
  [-37.9086208167, 175.4692152333, '19'],
  [-37.9085374333, 175.4677686333, '12'],
  [-37.9086063833, 175.4679739333, '14'],
  [-37.9086596833, 175.4681819, '16'],
  [-37.9086889667, 175.4694297167, '21'],
  [-37.9089948667, 175.4692835833, '22'],
  [-37.9087513667, 175.4696475333, '23'],
  [-37.9090557667, 175.4694965167, '24'],
  [-37.9088116333, 175.4698680667, '25'],
  [-37.9091091, 175.46969345, '26'],
  [-37.907833, 175.4666559167, '1'],
  [-37.9091789833, 175.4699557667, '28'],
  [-37.9096087, 175.4713450667, '38'],
  [-37.9092433833, 175.4701392333, '30'],
  [-37.9090019833, 175.47051235, '31'],
  [-37.9093068333, 175.4703555833, '32'],
  [-37.9090940833, 175.4707707667, '33'],
  [-37.90938145, 175.4705582833, '34'],
  [-37.9094346667, 175.4707651333, '36'],
  [-37.9088761167, 175.47007805, '27'],
  [-37.9098069333, 175.4719604833, '44'],
  [-37.9098796833, 175.4721707667, '46'],
  [-37.909607, 175.4725725667, '45'],
  [-37.90920615, 175.4729688333, '47A'],
  [-37.9093402667, 175.4728171, '47'],
  [-37.9099493833, 175.4724105167, '48'],
  [-37.9096936333, 175.47284265, '49'],
  [-37.9079234833, 175.4669311833, '3'],
  [-37.9082463667, 175.4668155333, '4'],
  [-37.9097714167, 175.4731308333, '51'],
  [-37.9100506833, 175.4729631167, '52'],
  [-37.9101362833, 175.473234, '54'],
  [-37.9105130333, 175.4743347667, '60'],
  [-37.91028125, 175.4747888167, '59'],
  [-37.9105830167, 175.4745966167, '62'],
  [-37.9106531, 175.4748493333, '64'],
  [-37.90835855, 175.4671917333, '8'],
  [-37.9081653833, 175.4677261, '9'],
  [-37.9120752833, 175.4794866167, '100'],
  [-37.9117925167, 175.47970425, '101'],
  [-37.91190545, 175.4801769333, '105'],
  [-37.9122550333, 175.4799224833, '106'],
  [-37.9116940333, 175.48024145, '107'],
  [-37.9124476, 175.4801052833, '108'],
  [-37.9117246833, 175.4803671833, '109'],
  [-37.9103405167, 175.4750005667, '61'],
  [-37.9104726833, 175.4754203667, '65'],
  [-37.9107200333, 175.47506155, '66'],
  [-37.91053305, 175.4756331, '67'],
  [-37.9111229833, 175.476363, '74'],
  [-37.9114657833, 175.4764926, '76A'],
  [-37.911183, 175.4765541167, '76'],
  [-37.91150505, 175.47660575, '78A'],
  [-37.9112499833, 175.4767965667, '78'],
  [-37.9115982333, 175.4769201167, '80A'],
  [-37.9113175167, 175.4769843333, '80'],
  [-37.91152935, 175.4777795, '88'],
  [-37.9117877, 175.4784990667, '92'],
  [-37.9118644667, 175.4787878833, '94'],
  [-37.9121825833, 175.4787955833, '96A'],
  [-37.9119467333, 175.47904265, '96'],
  [-37.9119913167, 175.4792895833, '98'],
  [-37.9117365667, 175.47948695, '99'],
  [-37.9107912667, 175.4752822833, '68'],
  [-37.9108477833, 175.4754937167, '70'],
  [-37.9118233, 175.4773533, '86B'],
  [-37.9119954167, 175.47727035, '86C'],
  [-37.9115303833, 175.4774913167, '86'],
  [-37.9082149, 175.4684349833, '13A'],
  [-37.8870698333, 175.4663411167, '1-13'],
  [-37.8871554667, 175.4663601, '2-12'],
  [-37.9016082667, 175.4806621, '30'],
  [-37.9010984667, 175.4803028833, '22'],
  [-37.9012443833, 175.4808339333, '24'],
  [-37.9013056667, 175.4802206, '26'],
  [-37.90149895, 175.4805675833, '28'],
  [-37.9015629833, 175.4800562667, '32'],
  [-37.90147835, 175.4797437167, '45'],
  [-37.8996289167, 175.4806158667, '2A'],
  [-37.89956085, 175.4797871333, '11'],
  [-37.9009366167, 175.4793407667, '37'],
  [-37.9010581667, 175.4795131167, '39'],
  [-37.8992862833, 175.4802488833, '5'],
  [-37.90020145, 175.4797472, '10'],
  [-37.9003469333, 175.47964355, '12'],
  [-37.89972725, 175.47967295, '13'],
  [-37.9006396, 175.4794276, '14'],
  [-37.8998769167, 175.47947625, '15'],
  [-37.9007610667, 175.4795863833, '16'],
  [-37.9008528833, 175.47974655, '18'],
  [-37.9009693167, 175.4799194, '20'],
  [-37.90002065, 175.47947515, '17'],
  [-37.9001685333, 175.4793572, '19'],
  [-37.8993512667, 175.4806693, '1'],
  [-37.9003158833, 175.479241, '21'],
  [-37.9004667167, 175.4791244167, '23'],
  [-37.9006037, 175.4790302167, '25'],
  [-37.90070445, 175.4786061667, '27'],
  [-37.9007410667, 175.4788370167, '29'],
  [-37.9008196333, 175.4791513333, '31'],
  [-37.901124, 175.4788828667, '33'],
  [-37.90119195, 175.4790490333, '35'],
  [-37.9013381833, 175.4794026, '41'],
  [-37.8997734, 175.4805030333, '2'],
  [-37.8992978333, 175.4804472333, '3'],
  [-37.9012097667, 175.4797523667, '43'],
  [-37.8996789, 175.48033335, '4'],
  [-37.8998323667, 175.4800290167, '6'],
  [-37.8993387167, 175.4800615833, '7'],
  [-37.9000414667, 175.4798654, '8'],
  [-37.8994266333, 175.47991435, '9'],
  [-37.8172086167, 175.36975015, '17'],
  [-37.8189982167, 175.3714596333, '28C'],
  [-37.8174889333, 175.3716284333, '35'],
  [-37.8180339667, 175.3717238667, '36'],
  [-37.8172767, 175.3702897333, '25'],
  [-37.8183033167, 175.3704190333, '28A'],
  [-37.8177806167, 175.3709889833, '30'],
  [-37.8184724667, 175.3714858167, '34'],
  [-37.8172573833, 175.3723560333, '37'],
  [-37.8175974333, 175.3697317, '18'],
  [-37.8189201833, 175.3708153, '28B'],
  [-37.8170975, 175.3688759833, '7'],
  [-37.8174008333, 175.3711639167, '31'],
  [-37.8177271333, 175.3719905167, '39'],
  [-37.9105104667, 175.4696305667, '29'],
  [-37.9105738333, 175.4698784833, '33'],
  [-37.9119496333, 175.4744651, '75'],
  [-37.9124263667, 175.4747625167, '76'],
  [-37.9120037833, 175.47464375, '77A'],
  [-37.9103653167, 175.4676619667, '20'],
  [-37.9108393333, 175.4707173, '41'],
  [-37.91176765, 175.4719875333, '58A'],
  [-37.9116183, 175.4720772, '58'],
  [-37.9128712, 175.4761248167, '86'],
  [-37.9124839333, 175.47629265, '85'],
  [-37.9104650167, 175.4694600667, '27'],
  [-37.9109299, 175.4697178333, '40'],
  [-37.9109971667, 175.4699570333, '42'],
  [-37.9097695, 175.4672281333, '11'],
  [-37.9100539667, 175.4665771, '10'],
  [-37.91041835, 175.4666636, '12A'],
  [-37.9101176333, 175.4667979833, '12'],
  [-37.90983315, 175.4674340333, '13'],
  [-37.9104875, 175.4669176667, '14A'],
  [-37.9101736833, 175.4670051, '14'],
  [-37.9098833833, 175.46762845, '15'],
  [-37.9102367667, 175.4672218833, '16'],
  [-37.9099549667, 175.46780795, '17'],
  [-37.9105899, 175.46737165, '18A'],
  [-37.9102941833, 175.4674259333, '18'],
  [-37.91020335, 175.4685710333, '21'],
  [-37.9102757167, 175.4688396333, '23'],
  [-37.9105438167, 175.46821955, '22'],
  [-37.9105772667, 175.4685320333, '26'],
  [-37.9104076167, 175.4692623833, '25'],
  [-37.9094199667, 175.4660506333, '1'],
  [-37.9106404167, 175.4687469667, '28'],
  [-37.9107060667, 175.4689637167, '30'],
  [-37.9103114167, 175.4698414333, '31'],
  [-37.9110137167, 175.4690528333, '34A'],
  [-37.9107613667, 175.4691689333, '34'],
  [-37.91081495, 175.4693474, '36A'],
  [-37.9110468333, 175.46924275, '36B'],
  [-37.9108736, 175.4695344167, '38A'],
  [-37.9111242, 175.46941945, '38B'],
  [-37.9098216167, 175.4658393167, '2'],
  [-37.91088605, 175.4708887833, '43'],
  [-37.9112278167, 175.4705661167, '44'],
  [-37.9109336667, 175.47106555, '45'],
  [-37.91129165, 175.4707536333, '46'],
  [-37.9109882333, 175.4712586667, '47'],
  [-37.9113449167, 175.47095045, '48'],
  [-37.9110579667, 175.4714307833, '49'],
  [-37.9094612667, 175.4662574167, '3'],
  [-37.9114052833, 175.4711525333, '50'],
  [-37.9114515333, 175.4713499667, '52'],
  [-37.9111246333, 175.47187335, '51'],
  [-37.91170175, 175.4723085667, '60'],
  [-37.9117521667, 175.4724906333, '62'],
  [-37.91170015, 175.47359465, '63'],
  [-37.91175395, 175.4737979833, '65'],
  [-37.9120630333, 175.4735410667, '66A'],
  [-37.9122263, 175.47353625, '66B'],
  [-37.9118108167, 175.4740034667, '67'],
  [-37.9113339, 175.4743958833, '69'],
  [-37.90952435, 175.4664596667, '5'],
  [-37.90970875, 175.4670344667, '9'],
  [-37.91152875, 175.4743488, '71'],
  [-37.9123023, 175.47433295, '72'],
  [-37.9118344167, 175.4742989833, '73A'],
  [-37.9118896667, 175.4742717333, '73'],
  [-37.9123685833, 175.4745438, '74'],
  [-37.91204505, 175.4747885167, '77B'],
  [-37.9124726167, 175.4749395667, '78'],
  [-37.9120965167, 175.47493145, '79'],
  [-37.9099235167, 175.46615755, '6'],
  [-37.9099866, 175.4663651333, '8'],
  [-37.9126461, 175.4754722667, '80'],
  [-37.9123464833, 175.4758373333, '81'],
  [-37.9124222167, 175.4761109333, '83'],
  [-37.9129424833, 175.47629755, '88A'],
  [-37.91334525, 175.4762585833, '90A'],
  [-37.9134976667, 175.4761915, '90B'],
  [-37.9133118333, 175.47629305, '90'],
  [-37.9127142, 175.4769782833, '87'],
  [-37.9127630833, 175.4771701667, '89'],
  [-37.9131761, 175.47644985, '92A'],
  [-37.9131949667, 175.47653455, '92B'],
  [-37.9130077167, 175.4766852167, '94'],
  [-37.9131084667, 175.4770053833, '96'],
  [-37.9133594333, 175.4770784833, '98'],
  [-37.91309155, 175.4760073833, '86B'],
  [-37.9127336333, 175.4757125833, '82'],
  [-37.9128152667, 175.4759342833, '84'],
  [-37.9129075333, 175.4763391333, '88'],
  [-37.8906112, 175.4636290667, '8'],
  [-37.8906010667, 175.4641357833, '1A'],
  [-37.8905902667, 175.4639329, '4'],
  [-37.8905940833, 175.4640698, '2'],
  [-37.8906316167, 175.4632836667, '13'],
  [-37.8907058, 175.4633735833, '17'],
  [-37.8905923, 175.4640024833, '3'],
  [-37.8907071833, 175.4634437667, '18'],
  [-37.8906947667, 175.4635948667, '20'],
  [-37.8906874333, 175.4636836833, '21'],
  [-37.890681, 175.4637655167, '22'],
  [-37.8906765333, 175.4638413833, '23'],
  [-37.8906641, 175.4639166833, '24'],
  [-37.8906549, 175.4639912667, '25'],
  [-37.8906532333, 175.4640676833, '26'],
  [-37.8906518667, 175.46414095, '27'],
  [-37.8906011167, 175.4638605167, '5'],
  [-37.8906079667, 175.4637939167, '6'],
  [-37.8906326167, 175.4634340333, '11'],
  [-37.8906169667, 175.4635610833, '9'],
  [-37.8906290333, 175.46349725, '10'],
  [-37.8906352333, 175.4633559333, '12'],
  [-37.8906300833, 175.4632139167, '14'],
  [-37.8906897167, 175.4632274, '15'],
  [-37.8905997667, 175.46420885, '1'],
  [-37.8906515667, 175.4642292333, '28'],
  [-37.8905993833, 175.4637104667, '7'],
  [-37.8905424667, 175.4641317333, '1B'],
  [-37.8906997833, 175.4632963667, '16'],
  [-37.89069985, 175.4635183333, '19'],
  [-37.82488245, 175.3937114333, '107'],
  [-37.82511735, 175.3936415, '105'],
  [-37.8241600833, 175.3938937, '115'],
  [-37.8257229, 175.3934403167, '95'],
  [-37.8311935833, 175.39119285, '34'],
  [-37.8312837167, 175.3938057, '44'],
  [-37.8302991667, 175.3911272833, '39'],
  [-37.8298778833, 175.38838305, '33'],
  [-37.8260734, 175.3947714167, '94C'],
  [-37.8263358833, 175.3938421667, '94A'],
  [-37.8279937667, 175.394307, '72C'],
  [-37.8246244833, 175.3942836667, '110'],
  [-37.82928665, 175.3931185833, '58'],
  [-37.8239608833, 175.3939572, '117'],
  [-37.8307863167, 175.3929875333, '46B'],
  [-37.83183475, 175.3898969167, '19'],
  [-37.82823865, 175.3933544333, '72A'],
  [-37.82829215, 175.3941929833, '72B'],
  [-37.8278144167, 175.3934866833, '72D'],
  [-37.8263441833, 175.3946904167, '94B'],
  [-37.8258577167, 175.3939724833, '94D'],
  [-37.8252182667, 175.3953295167, '108'],
  [-37.8301352667, 175.3922486833, '46A'],
  [-37.8325430167, 175.3898667667, '14'],
  [-37.8327221167, 175.3897138833, '12'],
  [-37.91482215, 175.4749911167, '3'],
  [-37.9154439833, 175.4755851833, '12'],
  [-37.9151334833, 175.4758027, '13'],
  [-37.9152983167, 175.4757077333, '14'],
  [-37.9150524833, 175.4746568833, '2'],
  [-37.9147571833, 175.4747972, '1'],
  [-37.9151202833, 175.4748550667, '4'],
  [-37.9149427, 175.4758335, '11'],
  [-37.91488335, 175.4751902167, '5'],
  [-37.9149361833, 175.4753859667, '7'],
  [-37.9149649167, 175.475589, '9'],
  [-37.9153104333, 175.4754419667, '10'],
  [-37.9151775667, 175.4750489, '6'],
  [-37.91523395, 175.4752497167, '8'],
  [-37.8190687333, 175.3738382833, '23'],
  [-37.8189306833, 175.3733703333, '25'],
  [-37.8190215667, 175.37468215, '15'],
  [-37.8191251667, 175.3740887167, '21'],
  [-37.81873305, 175.3726976833, '27A-27C'],
  [-37.8806986667, 175.4693562667, '63'],
  [-37.8809032, 175.46938395, '61'],
  [-37.88419255, 175.4697289167, '25'],
  [-37.8840685833, 175.4692688833, '26A'],
  [-37.8849148667, 175.4692615167, '24'],
  [-37.8847644833, 175.4697682667, '23'],
  [-37.8813066833, 175.4696684167, '55A'],
  [-37.8841734833, 175.4692622667, '26'],
  [-37.8840862833, 175.46972585, '27'],
  [-37.883927, 175.46906515, '28A'],
  [-37.8838748833, 175.4692541667, '28'],
  [-37.8838499, 175.4696946333, '29'],
  [-37.88359805, 175.4692251167, '30'],
  [-37.8837043833, 175.4696835, '31'],
  [-37.8834259333, 175.4692035833, '32'],
  [-37.88355905, 175.4696786667, '33'],
  [-37.8832160667, 175.4691627833, '34'],
  [-37.8834721833, 175.4701433, '35'],
  [-37.8829353667, 175.4691514, '36'],
  [-37.8833598667, 175.4701280667, '37'],
  [-37.8821233833, 175.4690720167, '44'],
  [-37.8818720333, 175.4690515667, '46'],
  [-37.8816436667, 175.4690230167, '48'],
  [-37.8815636667, 175.4686263, '50'],
  [-37.8818555333, 175.4695200333, '51'],
  [-37.8812979333, 175.4689347, '52A'],
  [-37.8814706833, 175.46880395, '52'],
  [-37.8816095333, 175.46944925, '53'],
  [-37.8816625, 175.4696671833, '53A'],
  [-37.8811724833, 175.46894365, '54'],
  [-37.8833521, 175.46965845, '39'],
  [-37.882727, 175.4691108167, '40'],
  [-37.88320755, 175.4696409167, '41'],
  [-37.8830678333, 175.4696227833, '43'],
  [-37.8828830167, 175.4695893333, '45'],
  [-37.8827233167, 175.4695686167, '47'],
  [-37.88095035, 175.4689156, '56'],
  [-37.8811470667, 175.4694376833, '57'],
  [-37.8807286167, 175.4689006167, '58'],
  [-37.8809772667, 175.4695997, '59'],
  [-37.8855099667, 175.4700903333, '11A'],
  [-37.8863533667, 175.4694588667, '10'],
  [-37.8855251167, 175.46980435, '11'],
  [-37.8858918167, 175.4693764333, '12'],
  [-37.88541135, 175.46981195, '13'],
  [-37.8857694833, 175.4693831333, '14'],
  [-37.8853156333, 175.4697983, '15'],
  [-37.88556005, 175.4693647167, '16'],
  [-37.8851626, 175.4697849833, '17'],
  [-37.8853764833, 175.4693362333, '18'],
  [-37.8850294167, 175.4700537333, '19A'],
  [-37.8850045667, 175.4697427167, '19'],
  [-37.88522955, 175.4692991667, '20'],
  [-37.8869080667, 175.4699470333, '1'],
  [-37.8866734833, 175.4699262833, '3'],
  [-37.8868586667, 175.46949025, '4'],
  [-37.8866564167, 175.4694635, '6'],
  [-37.8864874833, 175.4690444333, '8A'],
  [-37.8864948, 175.4694661333, '8'],
  [-37.8857426, 175.4698434167, '9'],
  [-37.8813893667, 175.46946355, '55'],
  [-37.8757085833, 175.4720279333, '14'],
  [-37.8760134667, 175.4732799333, '4'],
  [-37.8762548333, 175.4722784667, '9'],
  [-37.87627795, 175.47290345, '5'],
  [-37.8759331333, 175.4720918833, '16'],
  [-37.8759628833, 175.47273515, '8'],
  [-37.8762970167, 175.4732576833, '3'],
  [-37.8762245833, 175.47260565, '7'],
  [-37.8760141333, 175.4735054833, '2'],
  [-37.87599385, 175.4730087667, '6'],
  [-37.8759230167, 175.4724739333, '10'],
  [-37.8762960167, 175.4734868833, '1'],
  [-37.8760504333, 175.4719608, '18'],
  [-37.8759146, 175.4722788167, '12'],
  [-37.8741210833, 175.4688841833, '4'],
  [-37.874194, 175.4684628667, '3'],
  [-37.8738320667, 175.467738, '7C'],
  [-37.8739506833, 175.4677262667, '7B'],
  [-37.8738354667, 175.4680554, '7D'],
  [-37.8739794167, 175.4680445667, '7A'],
  [-37.8738342833, 175.46848195, '9'],
  [-37.8740206, 175.4684673, '5'],
  [-37.8739604167, 175.4688864, '6'],
  [-37.8735957167, 175.4683405333, '11'],
  [-37.8734235667, 175.4681024, '13'],
  [-37.87339585, 175.4678321167, '15'],
  [-37.8733727667, 175.46763935, '17'],
  [-37.8728499833, 175.46814045, '18B'],
  [-37.8728848, 175.468283, '18A'],
  [-37.8730660667, 175.4686787667, '12B'],
  [-37.8734160167, 175.4687180167, '10'],
  [-37.87312285, 175.4687848, '12A'],
  [-37.8730669833, 175.4679829333, '20'],
  [-37.8731389833, 175.4682574833, '16'],
  [-37.8732649167, 175.4684832833, '14'],
  [-37.8732605833, 175.4675842167, '19'],
  [-37.8729366833, 175.4674852167, '24'],
  [-37.8730152333, 175.4677481333, '22'],
  [-37.87312065, 175.4675707, '21'],
  [-37.7940869167, 175.4650218, '53'],
  [-37.7987550833, 175.46275265, '10'],
  [-37.7930822167, 175.4661922833, '60'],
  [-37.9811612, 175.51623075, '170'],
  [-37.980836, 175.5157299167, '171'],
  [-37.9807136667, 175.5162809333, '172'],
  [-37.8615888667, 175.47847875, '25'],
  [-37.8612666833, 175.4791558, '31'],
  [-37.86047605, 175.48172545, '60'],
  [-37.8620611333, 175.4774431167, '13'],
  [-37.8607505167, 175.4799311167, '41'],
  [-37.8611511833, 175.4794658167, '35'],
  [-37.86108515, 175.4796282, '37'],
  [-37.8604406, 175.48091835, '55'],
  [-37.8595911333, 175.483664, '72'],
  [-37.8582950167, 175.4794636833, '1/55'],
  [-37.8599109167, 175.4805425167, '49'],
  [-37.86081285, 175.4790711333, '33'],
  [-37.9125544667, 175.4795344, '6A'],
  [-37.9129032667, 175.479114, '8'],
  [-37.9131012, 175.4790179333, '10'],
  [-37.9132466667, 175.4789829167, '11'],
  [-37.9130141, 175.4787519333, '1'],
  [-37.9128543833, 175.4788087167, '2'],
  [-37.9126783167, 175.47889955, '3'],
  [-37.9125031333, 175.47905685, '4'],
  [-37.91254025, 175.4792764833, '5'],
  [-37.9127399333, 175.4793322333, '7'],
  [-37.9130969667, 175.47952775, '9'],
  [-37.9126911167, 175.4796185, '6'],
  [-37.8188045667, 175.445279, '356B'],
  [-37.8182903167, 175.4447447333, '356A'],
  [-37.8086473833, 175.4195512167, '27'],
  [-37.8137567, 175.4426504333, '299'],
  [-37.8131862167, 175.4434878167, '297'],
  [-37.8157127333, 175.43953285, '300A'],
  [-37.8094742167, 175.4189907, '19'],
  [-37.80933355, 175.4191978667, '23'],
  [-37.8084224833, 175.4207951, '41'],
  [-37.8095742167, 175.43605105, '226'],
  [-37.81325255, 175.4410722, '291'],
  [-37.8149016667, 175.44148445, '310'],
  [-37.8155769667, 175.44213865, '316'],
  [-37.8161747167, 175.4426252167, '326A'],
  [-37.81712155, 175.4417707667, '326B'],
  [-37.8169698833, 175.4434206167, '332'],
  [-37.81770375, 175.4442239833, '346'],
  [-37.81930575, 175.4457899333, '370'],
  [-37.82310865, 175.4495740167, '422'],
  [-37.8103162667, 175.4344773833, '224B'],
  [-37.8100267333, 175.4348309167, '224A'],
  [-37.8072155167, 175.4256129167, '88B'],
  [-37.8070962167, 175.42278495, '59'],
  [-37.8044940333, 175.4270097, '105'],
  [-37.8046275667, 175.4276069, '110'],
  [-37.8047349, 175.43229485, '165'],
  [-37.8073398, 175.4232142167, '68'],
  [-37.8064126167, 175.4330381167, '188'],
  [-37.8063987833, 175.4339707667, '209'],
  [-37.8103206333, 175.4378506833, '241'],
  [-37.8117777667, 175.4393874, '269'],
  [-37.8074375833, 175.43233545, '192'],
  [-37.8099668167, 175.4365891667, '236'],
  [-37.8038524, 175.4307279167, '156'],
  [-37.808759, 175.4183171167, '17'],
  [-37.805885, 175.4246946333, '81'],
  [-37.8072272, 175.4225943333, '57'],
  [-37.8056120333, 175.4262290333, '98'],
  [-37.80400575, 175.4287991167, '122'],
  [-37.8162936333, 175.43817215, '300B'],
  [-37.80809795, 175.4212756, '49'],
  [-37.8102496667, 175.4184802, '8'],
  [-37.8057899167, 175.43198855, '174'],
  [-37.8060113, 175.4256459333, '88A'],
  [-37.8183982, 175.4416558, '336'],
  [-37.8108804, 175.4393530667, '257'],
  [-37.81106865, 175.4386178, '255'],
  [-37.816436, 175.4370654, '298'],
  [-37.8152743833, 175.4390058833, '298A'],
  [-37.8136452667, 175.44031535, '288'],
  [-37.8123581, 175.44091935, '285'],
  [-37.81283995, 175.4401099833, '283'],
  [-37.8198763333, 175.4462982, '382'],
  [-37.8164479167, 175.44390175, '331'],
  [-37.80775795, 175.4225746667, '62'],
  [-37.8039981833, 175.43163845, '161'],
  [-37.81343775, 175.4401047167, '286'],
  [-37.92047495, 175.46336425, '9'],
  [-37.9203008333, 175.4618285667, '10'],
  [-37.9198670667, 175.4617700333, '6'],
  [-37.9207259667, 175.4627925167, '18'],
  [-37.9204614, 175.4619784833, '12'],
  [-37.9205793667, 175.4621705667, '14'],
  [-37.9207471167, 175.463665, '22'],
  [-37.9208443, 175.4640230833, '24'],
  [-37.9207801667, 175.4632019667, '20'],
  [-37.919291, 175.4622796167, '1'],
  [-37.92066135, 175.4624384833, '16'],
  [-37.9203523333, 175.4637463, '11'],
  [-37.9192657167, 175.4618642833, '2'],
  [-37.9197237333, 175.4622129, '3'],
  [-37.91957955, 175.4618272333, '4'],
  [-37.9201776333, 175.4622242, '5'],
  [-37.9203935, 175.4628145667, '7'],
  [-37.9201192, 175.46174985, '8'],
  [-37.9031613333, 175.4779369333, '8'],
  [-37.90302285, 175.47799245, '9'],
  [-37.9033285333, 175.4778655833, '7'],
  [-37.90346695, 175.4777957167, '6B'],
  [-37.9031769667, 175.4783186167, '1'],
  [-37.9034699667, 175.47848295, '2A'],
  [-37.90334345, 175.4782583833, '2'],
  [-37.9035249833, 175.4781788667, '3'],
  [-37.9037982667, 175.4780497167, '4A'],
  [-37.9037089833, 175.4781017333, '4'],
  [-37.9035266667, 175.4777643667, '6A'],
  [-37.9036756833, 175.4778188333, '5'],
  [-37.9129985333, 175.4689246333, '3'],
  [-37.9132911, 175.4686436333, '4'],
  [-37.9127876667, 175.4680122167, '13'],
  [-37.9126336667, 175.46802445, '13A'],
  [-37.91304995, 175.4678746833, '10'],
  [-37.91280555, 175.4681958333, '11'],
  [-37.9127504833, 175.4677229167, '15'],
  [-37.9133710167, 175.4688942167, '2'],
  [-37.9129377, 175.4687422333, '5'],
  [-37.9128397333, 175.4683664833, '9'],
  [-37.9125584, 175.4677322333, '15A'],
  [-37.9132129833, 175.4683870333, '6'],
  [-37.9128774667, 175.4685356, '7'],
  [-37.9131322833, 175.4681105167, '8'],
  [-37.9164839667, 175.4695277167, '2/205'],
  [-37.9167949333, 175.4782119333, '287'],
  [-37.9086755, 175.4537326833, '37'],
  [-37.91527815, 175.4546945333, '2/88'],
  [-37.9142658167, 175.4551371, '1/88'],
  [-37.9145371, 175.4555229667, '88'],
  [-37.9167784167, 175.4698118167, '209'],
  [-37.91671315, 175.4695459, '207'],
  [-37.916654, 175.4692565, '203'],
  [-37.9168566667, 175.4764833167, '269'],
  [-37.9170098667, 175.4835371333, '332'],
  [-37.9109654167, 175.455206, '60'],
  [-37.9170810333, 175.4814135167, '310'],
  [-37.9168965667, 175.4758632667, '263'],
  [-37.9154102833, 175.46304445, '149'],
  [-37.9154961, 175.4634764667, '153'],
  [-37.9152487667, 175.4638892333, '157'],
  [-37.9156422333, 175.4641169833, '159'],
  [-37.9158050167, 175.4648025333, '165'],
  [-37.91375215, 175.4584178167, '106'],
  [-37.9147696833, 175.4594047833, '114'],
  [-37.91474835, 175.46019985, '121'],
  [-37.9158845167, 175.4586385833, '112'],
  [-37.9150857, 175.459884, '120'],
  [-37.9126885833, 175.4573289333, '82'],
  [-37.91648165, 175.4694261333, '1/205'],
  [-37.9168508333, 175.4701398833, '211'],
  [-37.9169940167, 175.4708593833, '219'],
  [-37.9170359, 175.4710790167, '221'],
  [-37.91708375, 175.4713339, '223'],
  [-37.9170401, 175.4721885167, '231'],
  [-37.9170336667, 175.4724657667, '233'],
  [-37.9169188667, 175.4749939667, '249'],
  [-37.9168660833, 175.4760673333, '265'],
  [-37.91686435, 175.4768689833, '271'],
  [-37.9166818667, 175.4769821, '273'],
  [-37.9168443333, 175.4772235167, '275'],
  [-37.9166369667, 175.4773580167, '277'],
  [-37.9165761667, 175.4777388, '279'],
  [-37.9168418833, 175.47757295, '281'],
  [-37.9168319167, 175.47791855, '283'],
  [-37.9165834833, 175.47804975, '285'],
  [-37.91697015, 175.4853758167, '344'],
  [-37.9180125667, 175.4811616, '316'],
  [-37.9169954833, 175.48221265, '318'],
  [-37.9157653333, 175.4543129833, '3/88'],
  [-37.9154571667, 175.4552445, '4/88'],
  [-37.8827312167, 175.4872892833, '5'],
  [-37.8831903667, 175.4877676167, '8'],
  [-37.8828024333, 175.4875113, '7'],
  [-37.8831045, 175.4875104167, '6'],
  [-37.8828241, 175.4877701, '9'],
  [-37.88302025, 175.4867592333, '2'],
  [-37.8827238667, 175.4870656, '3'],
  [-37.8832792333, 175.48802495, '10'],
  [-37.88271135, 175.4868632, '1'],
  [-37.8830189167, 175.4869722, '4'],
  [-37.8828316667, 175.4879782167, '11'],
  [-37.8831031667, 175.4879840167, '12'],
  [-37.8829747, 175.4879948833, '13'],
  [-37.88274605, 175.48484915, '21'],
  [-37.8834571667, 175.4855031833, '4'],
  [-37.8834955333, 175.4856944167, '2'],
  [-37.8838132333, 175.4854477333, '3'],
  [-37.8835369833, 175.4848281833, '11'],
  [-37.88336725, 175.48485965, '13'],
  [-37.8831959833, 175.48485645, '15'],
  [-37.8828621167, 175.48476675, '19'],
  [-37.8838400833, 175.4849657333, '7'],
  [-37.8837638167, 175.4848016167, '9'],
  [-37.8829594167, 175.4854216, '10'],
  [-37.8827830667, 175.4855451, '12'],
  [-37.88274165, 175.4853534, '14'],
  [-37.8827611667, 175.4850917, '16'],
  [-37.8830644, 175.48501895, '17'],
  [-37.8838288, 175.4856380833, '1'],
  [-37.8838275, 175.4852247167, '5'],
  [-37.883443, 175.4852514667, '6'],
  [-37.8831229667, 175.4853610833, '8'],
  [-37.8145997, 175.4058182333, '13'],
  [-37.8147182333, 175.4078123, '28'],
  [-37.81457405, 175.4067919, '23'],
  [-37.8140701667, 175.4071422833, '27'],
  [-37.8142806667, 175.4076163167, '29'],
  [-37.8149311167, 175.4068842833, '22'],
  [-37.8150038333, 175.4059631, '16'],
  [-37.7951609167, 175.3942458333, '200'],
  [-37.7911471333, 175.3929187167, '159B'],
  [-37.7905987667, 175.3938164667, '159C'],
  [-37.7912155833, 175.3932714167, '159A'],
  [-37.79397065, 175.3941075167, '190'],
  [-37.7944302667, 175.3943967333, '196'],
  [-37.7902842667, 175.3925200667, '151'],
  [-37.79289115, 175.3931896, '174'],
  [-37.7936966833, 175.3937764, '188'],
  [-37.7941318167, 175.3948274667, '191'],
  [-37.7978721333, 175.3984214333, '249'],
  [-37.7981105667, 175.39574825, '232A'],
  [-37.7938025333, 175.3924897, '178'],
  [-37.7985639333, 175.3952936333, '232B'],
  [-37.7918765, 175.3926438167, '162'],
  [-37.7908330333, 175.39227155, '154'],
  [-37.7962404, 175.3968673, '225'],
  [-37.7923051, 175.3933906333, '171A'],
  [-37.7927951833, 175.3942652333, '171B'],
  [-37.7901405833, 175.3919332833, '146'],
  [-37.7965292833, 175.396445, '226'],
  [-37.7989539333, 175.3987508667, '258'],
  [-37.7975085, 175.3942399167, '218A'],
  [-37.7982403667, 175.3938506167, '218B'],
  [-37.7947115833, 175.3953049, '203'],
  [-37.7925679167, 175.3935303833, '171C'],
  [-37.7951510667, 175.3951699667, '206'],
  [-37.7942058167, 175.39426, '192'],
  [-37.8151522, 175.3671718, '2'],
  [-37.8124476333, 175.3641774667, '38C'],
  [-37.8142324833, 175.3640258333, '36'],
  [-37.8147477833, 175.3658554333, '18'],
  [-37.8149241, 175.3663270333, '14'],
  [-37.8127630333, 175.3645959667, '38D'],
  [-37.8802473333, 175.4761364833, '161'],
  [-37.8803540333, 175.4775673167, '169A'],
  [-37.8808955167, 175.4678431, '87A'],
  [-37.8812967167, 175.45925645, '22A'],
  [-37.8801625833, 175.4788012833, '181'],
  [-37.8801798667, 175.4784953, '179'],
  [-37.8805060333, 175.4783115333, '175'],
  [-37.8802037167, 175.4779421333, '171'],
  [-37.8802002, 175.4782253667, '173'],
  [-37.88066575, 175.4696257, '105'],
  [-37.88142225, 175.4685359, '99D'],
  [-37.880149, 175.4790061333, '183'],
  [-37.8807033, 175.4684905333, '99A'],
  [-37.8811922, 175.4685214167, '99C'],
  [-37.8809802667, 175.4685055, '99B'],
  [-37.88134225, 175.4657706, '69'],
  [-37.8807472167, 175.46754285, '83'],
  [-37.8802148333, 175.4776531667, '169'],
  [-37.8802820833, 175.4763336, '163'],
  [-37.8802558333, 175.4772608667, '165'],
  [-37.8806246667, 175.4705465167, '113'],
  [-37.88113685, 175.4643511667, '53A'],
  [-37.88095905, 175.4643489, '53'],
  [-37.88154715, 175.4657577833, '67'],
  [-37.8809616167, 175.4639502667, '49'],
  [-37.8802025833, 175.48084275, '191A'],
  [-37.8806056333, 175.47098625, '117'],
  [-37.88044865, 175.47329545, '127'],
  [-37.8804726333, 175.47306075, '125'],
  [-37.8806984167, 175.4686680667, '101'],
  [-37.8805955167, 175.4711419833, '117A'],
  [-37.8806145167, 175.4707781333, '115'],
  [-37.88164575, 175.45804455, '16B'],
  [-37.88036875, 175.4755842, '153'],
  [-37.8806508333, 175.4700866667, '109'],
  [-37.8815960333, 175.4577537, '14'],
  [-37.88151485, 175.4579781667, '16A'],
  [-37.8813847833, 175.4644447333, '55'],
  [-37.8813670167, 175.4645692667, '57'],
  [-37.8809571333, 175.4641156833, '51'],
  [-37.8816293, 175.45738225, '10'],
  [-37.8818759333, 175.4575147, '12A'],
  [-37.8820464833, 175.4575854833, '12B'],
  [-37.8820319167, 175.4576747167, '12C'],
  [-37.8818586167, 175.4576652167, '12D'],
  [-37.8810945667, 175.46145875, '36'],
  [-37.8810898, 175.46167115, '38'],
  [-37.8810809667, 175.461937, '40'],
  [-37.8810701667, 175.4621895167, '42'],
  [-37.8812240833, 175.45898385, '20'],
  [-37.88121955, 175.45918975, '22'],
  [-37.8811737667, 175.45983295, '24'],
  [-37.88115855, 175.46004515, '26'],
  [-37.8811441, 175.46023075, '28'],
  [-37.8814057333, 175.4604056667, '30'],
  [-37.8811296167, 175.4604632667, '32'],
  [-37.88144325, 175.4580904667, '18'],
  [-37.88168545, 175.4564695667, '2'],
  [-37.8809346833, 175.4645998167, '59'],
  [-37.8809249833, 175.4648314, '61'],
  [-37.8810648667, 175.4624290833, '44'],
  [-37.8816609833, 175.4570327667, '8'],
  [-37.8804975333, 175.4721639167, '119'],
  [-37.8804971667, 175.4724005167, '121'],
  [-37.8806352, 175.4729319167, '123A'],
  [-37.8804951667, 175.4726299167, '123'],
  [-37.8806614, 175.4698499833, '107'],
  [-37.8806724167, 175.4731077667, '125A'],
  [-37.8808698667, 175.47335925, '129'],
  [-37.8808554167, 175.4735094333, '131'],
  [-37.8804224667, 175.4735332333, '133'],
  [-37.8804913, 175.47469655, '137B'],
  [-37.8803901, 175.4747040167, '137'],
  [-37.8803887333, 175.47486625, '139'],
  [-37.8807482167, 175.46714865, '77A'],
  [-37.8807597833, 175.4669996167, '77'],
  [-37.8807607667, 175.4673298667, '79'],
  [-37.88104675, 175.46741105, '81'],
  [-37.8812452833, 175.4676640333, '85'],
  [-37.8809039167, 175.4650308333, '63'],
  [-37.88112735, 175.4652241167, '65A'],
  [-37.8808660833, 175.4654164833, '65'],
  [-37.8811361, 175.4657563, '71'],
  [-37.8808503, 175.4658921167, '73'],
  [-37.8808297667, 175.4661495833, '75'],
  [-37.8807330167, 175.4677691667, '87'],
  [-37.8811556833, 175.46787915, '89'],
  [-37.88071555, 175.4680383167, '91A'],
  [-37.8807704167, 175.46804005, '91B'],
  [-37.88083325, 175.4680391667, '91C'],
  [-37.8809986, 175.4680511, '91'],
  [-37.8807155167, 175.46826605, '93'],
  [-37.8809702167, 175.4682232667, '95'],
  [-37.8807815333, 175.4750173333, '143'],
  [-37.8803783667, 175.4751021, '145'],
  [-37.88035755, 175.4753576667, '147'],
  [-37.8807471667, 175.47541785, '149'],
  [-37.8807513667, 175.4755767167, '151'],
  [-37.8803393, 175.4758476333, '159'],
  [-37.8802462333, 175.4774083333, '167'],
  [-37.8800620667, 175.4804408, '189'],
  [-37.8800557667, 175.48072595, '191'],
  [-37.88004135, 175.481018, '193'],
  [-37.8807389667, 175.47578795, '155'],
  [-37.88007905, 175.4799234833, '185'],
  [-37.88086485, 175.4703347667, '111A'],
  [-37.8806350333, 175.4703154167, '111'],
  [-37.8800789, 175.4801471833, '187'],
  [-37.8800045833, 175.4815507667, '197'],
  [-37.8800214333, 175.4812237167, '195'],
  [-37.8939151167, 175.4701667, '27'],
  [-37.8936762, 175.4701298, '31'],
  [-37.8924783167, 175.4700222667, '47'],
  [-37.8918865167, 175.469973, '51'],
  [-37.89367495, 175.4697996667, '24'],
  [-37.8943151667, 175.4702028667, '7'],
  [-37.8941286667, 175.4702044, '23'],
  [-37.8942378667, 175.4698431, '2'],
  [-37.8945567833, 175.47024855, '1/1-3/1'],
  [-37.8935522667, 175.4697719, '28'],
  [-37.8939433, 175.4703330667, '25'],
  [-37.8937860667, 175.4701428667, '29'],
  [-37.8935538167, 175.4701164833, '41'],
  [-37.8941460167, 175.46983875, '14'],
  [-37.8938438167, 175.46980825, '18'],
  [-37.8937419667, 175.4698073167, '22'],
  [-37.8944316, 175.4702330333, '3'],
  [-37.8943035167, 175.4704350167, '9'],
  [-37.8926233833, 175.4700377333, '43'],
  [-37.8922256167, 175.47000115, '49'],
  [-37.8917971667, 175.46961, '54'],
  [-37.8926854, 175.469645, '40'],
  [-37.8921227167, 175.4696225333, '48'],
  [-37.8939403167, 175.4698126, '16'],
  [-37.8909714667, 175.4681493667, '33'],
  [-37.89113605, 175.4681601333, '31'],
  [-37.8912736333, 175.4686223167, '26'],
  [-37.892202, 175.4686328333, '16'],
  [-37.8921055833, 175.46861625, '18'],
  [-37.8912406833, 175.4681574833, '27'],
  [-37.89073535, 175.4685119833, '32'],
  [-37.89037515, 175.4686127333, '36'],
  [-37.8907882833, 175.4681261167, '37-39'],
  [-37.8905470833, 175.46806415, '41'],
  [-37.8928384833, 175.4687398333, '4'],
  [-37.8927622667, 175.46885875, '8'],
  [-37.8926823333, 175.4687259, '10'],
  [-37.89258095, 175.4687121167, '12'],
  [-37.89248485, 175.4687019167, '14'],
  [-37.9064365333, 175.4541838333, '29'],
  [-37.9065554833, 175.4549096667, '1/35'],
  [-37.9060750333, 175.4550532833, '3/35'],
  [-37.9058351667, 175.4555274667, '5/35'],
  [-37.9055143333, 175.4559182333, '7/35'],
  [-37.9065810667, 175.4558807167, '36'],
  [-37.9065682333, 175.4553069, '37'],
  [-37.9064074667, 175.4522252167, '9'],
  [-37.9059521, 175.45592445, '2/35'],
  [-37.9108997167, 175.4805822667, '3'],
  [-37.9109122833, 175.47947205, '6A'],
  [-37.9109177167, 175.47936065, '8'],
  [-37.9111175, 175.4797094, '10'],
  [-37.9113005167, 175.4794321333, '12'],
  [-37.9111916333, 175.4793347333, '12A'],
  [-37.9112471833, 175.4797754667, '14'],
  [-37.9112473667, 175.4800788167, '11'],
  [-37.9113031333, 175.479914, '13'],
  [-37.91063835, 175.4803100333, '1'],
  [-37.9104951, 175.4800418667, '2'],
  [-37.9107454333, 175.4798887833, '4'],
  [-37.9108743667, 175.4802328833, '5'],
  [-37.9109565333, 175.4797847, '6'],
  [-37.9110407167, 175.4801576333, '7'],
  [-37.9112238167, 175.4804073167, '9'],
  [-37.921572, 175.4690554667, '8'],
  [-37.9210102667, 175.4691739667, '1'],
  [-37.9209054, 175.4687952333, '2'],
  [-37.92139265, 175.4695081333, '3'],
  [-37.9212156833, 175.4688233667, '4'],
  [-37.92161785, 175.4693603333, '5'],
  [-37.9215667, 175.4686771667, '6'],
  [-37.8971280667, 175.3833620167, '104'],
  [-37.8928069667, 175.3849023833, '58'],
  [-37.8960316833, 175.3834830167, '1/84'],
  [-37.8904228167, 175.38549425, '28'],
  [-37.8953458333, 175.3837370167, '84'],
  [-37.82145425, 175.3649986833, '7'],
  [-37.81972895, 175.3640394833, '24'],
  [-37.8211835333, 175.3645971667, '11'],
  [-37.8207776167, 175.3647366833, '14'],
  [-37.8209467167, 175.3640718167, '15'],
  [-37.8203904333, 175.3652387, '12'],
  [-37.9137399667, 175.3922778167, '2/73'],
  [-37.91124595, 175.39246205, '46'],
  [-37.9139008833, 175.3922517333, '3/73'],
  [-37.91350815, 175.39233345, '1/73'],
  [-37.9176178167, 175.4598785667, '19'],
  [-37.9184013833, 175.4603797833, '14'],
  [-37.9186543333, 175.4622474833, '6'],
  [-37.9173606667, 175.46006885, '19B'],
  [-37.9174988, 175.4603532, '19C'],
  [-37.9177378167, 175.4601680667, '19D'],
  [-37.91904695, 175.4627864167, '1'],
  [-37.91872175, 175.46300145, '2'],
  [-37.91901275, 175.46243355, '3'],
  [-37.9186912, 175.46265345, '4'],
  [-37.91856195, 175.4613744167, '10'],
  [-37.91851535, 175.4609194, '12'],
  [-37.9189516833, 175.4617426667, '5'],
  [-37.9188849, 175.4613117333, '7'],
  [-37.9186173667, 175.4618227833, '8'],
  [-37.9188575667, 175.4608533167, '9'],
  [-37.9173323833, 175.4597201333, '19A'],
  [-37.9178891, 175.4598711167, '17'],
  [-37.9180202833, 175.46025785, '16'],
  [-37.9016754833, 175.4689591, '10'],
  [-37.9008128667, 175.4686879833, '2'],
  [-37.9009759333, 175.46843985, '1'],
  [-37.9014464, 175.4685093167, '5'],
  [-37.90130095, 175.4688850167, '6'],
  [-37.9016211667, 175.4685312667, '7'],
  [-37.9014644167, 175.4690226833, '8'],
  [-37.9014864167, 175.4687479667, '9'],
  [-37.9010720333, 175.4687982333, '4'],
  [-37.9011746, 175.4685293333, '3'],
  [-37.9013743333, 175.4862629167, '3'],
  [-37.9017248, 175.48698725, '6'],
  [-37.9012848, 175.4859531833, '2'],
  [-37.9016014833, 175.4860586167, '10'],
  [-37.9014527667, 175.4865486167, '4'],
  [-37.90159855, 175.48677855, '5'],
  [-37.90183005, 175.4869517667, '7'],
  [-37.9017713833, 175.4866214167, '8'],
  [-37.9016935, 175.4863532333, '9'],
  [-37.90753, 175.46902475, '11'],
  [-37.9095893167, 175.4677886667, '39B'],
  [-37.9109792833, 175.4682655, '46A'],
  [-37.91108275, 175.4685749667, '46B'],
  [-37.91115625, 175.4686338833, '48C'],
  [-37.9110050167, 175.46807085, '48A'],
  [-37.91095895, 175.46781955, '48'],
  [-37.9108204, 175.4678798667, '46'],
  [-37.9110788833, 175.4683501, '48B'],
  [-37.9113655167, 175.4678862333, '52B'],
  [-37.9108344833, 175.4674433667, '45'],
  [-37.9080208833, 175.4692374833, '22'],
  [-37.9083263167, 175.4686353333, '27'],
  [-37.90844025, 175.4697672333, '26'],
  [-37.90818025, 175.4691643, '22A'],
  [-37.91258895, 175.4673144833, '64'],
  [-37.9123684167, 175.4671105167, '62'],
  [-37.9127896, 175.4663434833, '67'],
  [-37.91150695, 175.46757075, '54'],
  [-37.9098419667, 175.4683599167, '40'],
  [-37.91097155, 175.4673723, '47'],
  [-37.9078617667, 175.4693023667, '20'],
  [-37.9089053833, 175.4683338, '29'],
  [-37.9099875333, 175.46828695, '42'],
  [-37.9113045167, 175.4682282833, '50A'],
  [-37.9107373, 175.4665437833, '47C'],
  [-37.9108713, 175.4665006167, '49B'],
  [-37.9129575833, 175.4665350833, '69'],
  [-37.9108057333, 175.4667861, '47B'],
  [-37.9108904167, 175.4670609667, '47A'],
  [-37.9110041, 175.4668838667, '49A'],
  [-37.9111488833, 175.4673072667, '49'],
  [-37.9127369333, 175.46653495, '65'],
  [-37.91122205, 175.46770665, '52'],
  [-37.9113599, 175.467657, '52A'],
  [-37.9075002667, 175.4694598, '12'],
  [-37.9076741, 175.46939185, '14'],
  [-37.9078864833, 175.4699014333, '16'],
  [-37.9079676667, 175.46986515, '18'],
  [-37.90833225, 175.4695654167, '24'],
  [-37.9084313667, 175.4690023, '28'],
  [-37.9096631167, 175.46843925, '38'],
  [-37.9096189, 175.4680248667, '39'],
  [-37.911315, 175.4684015667, '50'],
  [-37.9073078333, 175.4691221167, '9'],
  [-37.9093386167, 175.4686052333, '34'],
  [-37.9091743667, 175.4682295833, '35'],
  [-37.90945425, 175.4681136333, '37'],
  [-37.90950645, 175.4685246333, '36'],
  [-37.9091745333, 175.4686900667, '32'],
  [-37.9127273333, 175.4669306667, '66'],
  [-37.913043, 175.4669127667, '68'],
  [-37.9113586333, 175.4672288167, '51'],
  [-37.9113531667, 175.4670099667, '51A'],
  [-37.9127951, 175.46667535, '71'],
  [-37.884095, 175.4568770667, '69A'],
  [-37.8838324333, 175.4568632333, '73A'],
  [-37.8866347667, 175.4565719833, '43'],
  [-37.8906992, 175.4569129667, '5'],
  [-37.8905596667, 175.4568912833, '7'],
  [-37.8892758333, 175.456777, '13A'],
  [-37.8901881167, 175.45687625, '1/11-11/11'],
  [-37.89070845, 175.4565194333, '1/4-3/4'],
  [-37.8902009333, 175.4563996667, '1/6-32/6'],
  [-37.8880562333, 175.4552566667, '26A'],
  [-37.8844905833, 175.4563941, '65'],
  [-37.8840861833, 175.45635875, '69'],
  [-37.8863777, 175.45685, '45A'],
  [-37.8909978167, 175.4569555833, '3'],
  [-37.8863633167, 175.4571221667, '45B'],
  [-37.8864835667, 175.4565624833, '45'],
  [-37.8881257667, 175.4569633333, '25A'],
  [-37.8905126667, 175.4574578833, '5A'],
  [-37.8907166167, 175.4575558333, '5B'],
  [-37.8866317167, 175.4572218, '41A'],
  [-37.8873822167, 175.4566324, '33'],
  [-37.8872964167, 175.4566407167, '35'],
  [-37.8866143833, 175.4569883667, '41'],
  [-37.8837334333, 175.45685885, '75A'],
  [-37.8860936, 175.4570698167, '49'],
  [-37.8855037167, 175.4564867333, '57'],
  [-37.8847617833, 175.4564164833, '59'],
  [-37.8844513167, 175.4566735333, '65A'],
  [-37.88419435, 175.45689485, '67A'],
  [-37.8842829333, 175.4563860333, '67'],
  [-37.88391675, 175.4563527, '73'],
  [-37.8837116667, 175.4563469333, '75'],
  [-37.889394, 175.4567865833, '13'],
  [-37.8890782333, 175.4567699333, '15'],
  [-37.8888433833, 175.4567615833, '17'],
  [-37.8886293333, 175.45674825, '19'],
  [-37.8884455333, 175.4567414833, '21'],
  [-37.8882809333, 175.45673085, '23'],
  [-37.8881163667, 175.456655, '25'],
  [-37.8880094667, 175.4562455667, '26'],
  [-37.89142225, 175.4569765, '1'],
  [-37.8914418, 175.4565121, '2'],
  [-37.8870694, 175.4566186333, '37'],
  [-37.8868689667, 175.45709495, '39A'],
  [-37.8868342167, 175.4565953333, '39'],
  [-37.8863517167, 175.4573732167, '45C'],
  [-37.8861983667, 175.4570712667, '47A'],
  [-37.8862286, 175.4568411833, '47B'],
  [-37.8880125833, 175.4547576833, '26B'],
  [-37.8860945833, 175.4565352167, '49A'],
  [-37.8904199167, 175.4568860167, '1/9-12/9'],
  [-37.8857833, 175.4565171833, '53'],
  [-37.8856455167, 175.45651885, '55'],
  [-37.8817373833, 175.4556858833, '72'],
  [-37.88593655, 175.45653005, '51'],
  [-37.8862765833, 175.4565127, '47'],
  [-37.8775379833, 175.4825127167, '28A'],
  [-37.87727315, 175.482376, '28'],
  [-37.87729155, 175.4821068667, '26'],
  [-37.8769019667, 175.4786293, '4C'],
  [-37.8767004333, 175.4787606, '4B'],
  [-37.8772910833, 175.4818029333, '24'],
  [-37.8771890667, 175.48153255, '22'],
  [-37.87708045, 175.4812278, '20'],
  [-37.8775351, 175.4826397667, '30A'],
  [-37.8772534167, 175.4827040167, '30'],
  [-37.877579, 175.4818970667, '24A'],
  [-37.876712, 175.4812017667, '21'],
  [-37.8773884333, 175.4832404167, '36'],
  [-37.8769804167, 175.4824093, '27'],
  [-37.8766636667, 175.482704, '31B'],
  [-37.8769937167, 175.4830107167, '31'],
  [-37.8767516667, 175.479482, '8A'],
  [-37.8769705667, 175.4818533667, '23'],
  [-37.8766017167, 175.48246365, '29A'],
  [-37.8764641833, 175.4825834, '29B'],
  [-37.8769964667, 175.4820980833, '25'],
  [-37.8769606333, 175.4826863833, '29'],
  [-37.87679475, 175.4828674667, '31A'],
  [-37.8770826, 175.4832520333, '33'],
  [-37.8772377, 175.48334835, '35'],
  [-37.8775367167, 175.48363695, '36A'],
  [-37.8775890833, 175.4831116, '34'],
  [-37.8773408667, 175.4829609, '32'],
  [-37.8762828667, 175.4801149667, '11'],
  [-37.87597055, 175.4792251167, '3'],
  [-37.8760466167, 175.4794375833, '5'],
  [-37.8761314, 175.4796617, '7'],
  [-37.8764699833, 175.48058085, '15'],
  [-37.8765455167, 175.4808159833, '17'],
  [-37.8767292667, 175.48028335, '14'],
  [-37.8765539833, 175.4798159833, '10'],
  [-37.87646245, 175.4795675, '8'],
  [-37.8763712167, 175.4793057167, '6'],
  [-37.8776228167, 175.481266, '20B'],
  [-37.8775729667, 175.482055, '26A'],
  [-37.8776195833, 175.4814085333, '22B'],
  [-37.8765414, 175.4790666667, '6A'],
  [-37.8773585333, 175.48356815, '38A'],
  [-37.8762120667, 175.4798686667, '9'],
  [-37.8766452667, 175.4800751167, '12'],
  [-37.8763675, 175.48034475, '13'],
  [-37.8766347833, 175.4810402667, '19'],
  [-37.8774052167, 175.4812147167, '20A'],
  [-37.8774057667, 175.4814070167, '22A'],
  [-37.8762723167, 175.479009, '4'],
  [-37.8761971167, 175.4787850833, '2'],
  [-37.8767849, 175.4796004667, '10A'],
  [-37.87648555, 175.47892075, '4A'],
  [-37.8767848, 175.4788595833, '6B'],
  [-37.8997092333, 175.48180175, '7'],
  [-37.8999472667, 175.4825543, '15'],
  [-37.8999358167, 175.4815958167, '4'],
  [-37.9000434833, 175.4825363833, '17'],
  [-37.9002215333, 175.4828014167, '16'],
  [-37.90002095, 175.4818578, '6'],
  [-37.9000853167, 175.48210025, '8'],
  [-37.8997820833, 175.4820087333, '9'],
  [-37.8998240167, 175.4822147833, '11'],
  [-37.8998576333, 175.48247455, '13'],
  [-37.8996422833, 175.4815878833, '5'],
  [-37.9002942833, 175.482764, '14'],
  [-37.9001676167, 175.4824792667, '12'],
  [-37.89953345, 175.4811912333, '1'],
  [-37.8997866833, 175.4810307833, '2'],
  [-37.8995802333, 175.4813792333, '3'],
  [-37.9001401333, 175.4822942333, '10'],
  [-37.8914648833, 175.4772108167, '7'],
  [-37.8919011833, 175.47723515, '1'],
  [-37.89187105, 175.47681175, '2'],
  [-37.8913584, 175.4765354167, '3/6'],
  [-37.8897734833, 175.47664395, '22'],
  [-37.8913508, 175.47668445, '1/6'],
  [-37.8915273667, 175.4762602, '12/6'],
  [-37.8916285, 175.4772315333, '5'],
  [-37.8913796, 175.4761122167, '7/6'],
  [-37.8915023833, 175.4767099333, '8/6'],
  [-37.89152, 175.4763519333, '11/6'],
  [-37.8915372, 175.4760592333, '14/6'],
  [-37.89153065, 175.4761616667, '13/6'],
  [-37.8915142333, 175.4764663667, '10/6'],
  [-37.8913717333, 175.4763199333, '5/6'],
  [-37.8905254833, 175.4766904, '14'],
  [-37.8903609333, 175.4766834833, '16'],
  [-37.88999105, 175.4766566833, '20'],
  [-37.8898741167, 175.4770700667, '21'],
  [-37.88946535, 175.4766037667, '24'],
  [-37.8890790333, 175.4764705833, '28'],
  [-37.88883405, 175.4767525667, '29'],
  [-37.8886383, 175.47663365, '31'],
  [-37.8913739667, 175.47622135, '6/6'],
  [-37.8913652833, 175.47641835, '4/6'],
  [-37.8901779667, 175.4766671167, '18'],
  [-37.8843281, 175.4794198167, '104'],
  [-37.88535045, 175.4866782167, '184'],
  [-37.8854485333, 175.4864475167, '182'],
  [-37.8867971833, 175.4705084167, '34'],
  [-37.8873998833, 175.4682775833, '20'],
  [-37.8873415667, 175.46844545, '22'],
  [-37.884267, 175.4871188333, '189'],
  [-37.8843410333, 175.4813043, '114A'],
  [-37.8836708667, 175.47833265, '90A'],
  [-37.88402285, 175.4784176667, '2/92'],
  [-37.8841246, 175.4784325, '1/92'],
  [-37.8874953667, 175.4680249333, '18'],
  [-37.8882076333, 175.4665346667, '2'],
  [-37.8847749, 175.4777212667, '89'],
  [-37.8847129167, 175.4883360167, '198'],
  [-37.8852412667, 175.4950174167, '258'],
  [-37.8851558333, 175.4809135167, '111A'],
  [-37.88425915, 175.490565, '219'],
  [-37.8843227167, 175.4792336667, '102'],
  [-37.8853703333, 175.47613215, '70'],
  [-37.8841992667, 175.4963818333, '267'],
  [-37.8839456333, 175.47862415, '96'],
  [-37.8849404833, 175.4785609167, '91B'],
  [-37.8834439167, 175.5003043667, '309'],
  [-37.8859648333, 175.4880242333, '2/194'],
  [-37.88679165, 175.4708238833, '36'],
  [-37.8846928333, 175.4966356667, '270'],
  [-37.8843265, 175.4790500333, '100'],
  [-37.8847626167, 175.48078795, '109'],
  [-37.88474565, 175.4788347167, '93'],
  [-37.8843263, 175.4786463833, '94'],
  [-37.8847555167, 175.4792519167, '95'],
  [-37.8847507833, 175.4802669333, '103'],
  [-37.8877261667, 175.4675846667, '1/14-8/14'],
  [-37.884759, 175.4805435333, '105'],
  [-37.8843192, 175.4802557667, '108'],
  [-37.8847632167, 175.4813335333, '113'],
  [-37.8880664667, 175.4668566667, '4'],
  [-37.8843192833, 175.4781745833, '88'],
  [-37.8842179667, 175.4927192667, '239'],
  [-37.8842136333, 175.4948947333, '257'],
  [-37.8841869, 175.4971351, '275'],
  [-37.8842592167, 175.487337, '191'],
  [-37.8842746, 175.4896256667, '213'],
  [-37.8842726, 175.4898100833, '1/213'],
  [-37.8846939167, 175.49589215, '264'],
  [-37.8847557667, 175.480013, '101'],
  [-37.8847654333, 175.4817589833, '117'],
  [-37.8843088167, 175.4819155, '120'],
  [-37.88495845, 175.4760208167, '74A'],
  [-37.8858546833, 175.48954395, '1/214'],
  [-37.8847226333, 175.49078585, '222'],
  [-37.8853824333, 175.4904875333, '220'],
  [-37.8851609, 175.4769312833, '75'],
  [-37.8832135333, 175.4966401667, '273'],
  [-37.8871125333, 175.4687638667, '24A'],
  [-37.8836533833, 175.49965535, '303'],
  [-37.8847623833, 175.4784197, '91'],
  [-37.8853003167, 175.4812587, '113B'],
  [-37.8839543333, 175.4780861333, '86'],
  [-37.8846811667, 175.49516135, '260'],
  [-37.8856284667, 175.4877555167, '1/194'],
  [-37.88470535, 175.4899576833, '1/218'],
  [-37.8858448, 175.4898961, '2/218'],
  [-37.8857487667, 175.4882389667, '3/194'],
  [-37.8858920833, 175.4886561833, '4/194'],
  [-37.8854131167, 175.4885925, '202'],
  [-37.8852231333, 175.48536035, '174'],
  [-37.88721395, 175.4674219167, '12A'],
  [-37.8850944, 175.4812663333, '113A'],
  [-37.8858759667, 175.4852820333, '172'],
  [-37.8843297167, 175.4777121167, '80'],
  [-37.8867259833, 175.4716590667, '42'],
  [-37.8841291333, 175.4812217833, '114'],
  [-37.8878423667, 175.46733415, '10'],
  [-37.8873731, 175.46722755, '12'],
  [-37.8873645167, 175.4677444, '16A'],
  [-37.8873792, 175.4676194833, '16B'],
  [-37.8871674667, 175.4675664, '16C'],
  [-37.8871631333, 175.4677062, '16D'],
  [-37.88761885, 175.4678307833, '16'],
  [-37.8872513, 175.4677940833, '18A'],
  [-37.8868627833, 175.4703096167, '32'],
  [-37.8866729333, 175.4725751667, '46'],
  [-37.8866649333, 175.4727545667, '48'],
  [-37.8866508833, 175.4729862833, '50'],
  [-37.8866308167, 175.4733044333, '52'],
  [-37.8866201167, 175.4735912, '54'],
  [-37.8866046, 175.4738994833, '56'],
  [-37.8867646333, 175.4710940833, '38'],
  [-37.8867434167, 175.4713738, '40'],
  [-37.8865795333, 175.471651, '42A'],
  [-37.8867192167, 175.4718726833, '44'],
  [-37.8879124167, 175.4671744, '8'],
  [-37.8847677333, 175.48104275, '111'],
  [-37.8842908, 175.4810946667, '112'],
  [-37.8847655167, 175.48152025, '115'],
  [-37.8842992333, 175.4815339, '116'],
  [-37.8843125167, 175.4817539167, '118'],
  [-37.8847685333, 175.4795402167, '97'],
  [-37.8847615667, 175.4797710333, '99'],
  [-37.8849925167, 175.48009295, '101A'],
  [-37.8850730167, 175.4803513167, '103A'],
  [-37.8850517667, 175.4806989167, '107'],
  [-37.8842659667, 175.4776982667, '80A'],
  [-37.8843255167, 175.4779083833, '82'],
  [-37.88372445, 175.4779537667, '84A'],
  [-37.88391925, 175.4779436333, '84'],
  [-37.8839372667, 175.4783140167, '90'],
  [-37.8849343833, 175.47834135, '91A'],
  [-37.8843215, 175.47842775, '92'],
  [-37.88379995, 175.4786243333, '96A'],
  [-37.8843308167, 175.47886585, '98'],
  [-37.8846524333, 175.4766493167, '76'],
  [-37.8845290833, 175.4764747667, '78A'],
  [-37.8845141833, 175.47672525, '78'],
  [-37.8847249, 175.4874558833, '192'],
  [-37.88422795, 175.4880656333, '197'],
  [-37.8842586167, 175.4888764, '205'],
  [-37.8847152, 175.4891847, '206'],
  [-37.8847452333, 175.48597775, '180'],
  [-37.8842725667, 175.4862342167, '181'],
  [-37.8842734167, 175.4864492, '183'],
  [-37.88427415, 175.4866713, '185'],
  [-37.8847306167, 175.48657095, '186'],
  [-37.88426915, 175.48689685, '187'],
  [-37.8842773667, 175.4856398, '179'],
  [-37.8852212833, 175.4924678, '236'],
  [-37.8854883167, 175.4880036333, '194'],
  [-37.8854214333, 175.48956085, '212'],
  [-37.8853153667, 175.4872245, '190'],
  [-37.8841928667, 175.4931503833, '241'],
  [-37.8844711667, 175.4984144, '290'],
  [-37.8842522667, 175.4992926333, '296'],
  [-37.88368415, 175.4993789667, '299'],
  [-37.8852287833, 175.49615515, '268'],
  [-37.8859148667, 175.4897217, '214'],
  [-37.8872887667, 175.4686820167, '24'],
  [-37.8862459167, 175.47553185, '66'],
  [-37.884721, 175.48537045, '176'],
  [-37.88427605, 175.4851847833, '175'],
  [-37.8842737833, 175.4854139833, '177'],
  [-37.88469795, 175.4945610167, '252'],
  [-37.8853844667, 175.47677695, '73'],
  [-37.8850111333, 175.4763984, '74'],
  [-37.8847382167, 175.4869962333, '188'],
  [-37.8872426333, 175.4689359833, '26'],
  [-37.8847101833, 175.4880854667, '196'],
  [-37.8850733, 175.4902483167, '218'],
  [-37.8865769333, 175.4741854167, '58'],
  [-37.8865507, 175.4747159333, '62'],
  [-37.88798625, 175.46700445, '6'],
  [-37.8865659, 175.4744709833, '60'],
  [-37.8865476667, 175.4748834667, '64'],
  [-37.8871864333, 175.4691891, '28'],
  [-37.8871582, 175.4693788167, '30'],
  [-37.8869467833, 175.4687736667, '26A'],
  [-37.8856446167, 175.4771148167, '71'],
  [-37.8851925333, 175.4762547833, '72'],
  [-37.8869292167, 175.4689437, '26B'],
  [-37.88426605, 175.48474735, '171'],
  [-37.884281, 175.4849628667, '173'],
  [-37.8847245167, 175.4848834667, '170'],
  [-37.8680607667, 175.4844529, '318'],
  [-37.86322315, 175.477174, '229'],
  [-37.86023885, 175.47171045, '177'],
  [-37.86190065, 175.4739293333, '200'],
  [-37.8673314333, 175.4835841, '306'],
  [-37.8671325167, 175.4839981167, '307'],
  [-37.8657566333, 175.4825140333, '287'],
  [-37.85661605, 175.4580103167, '35'],
  [-37.8584986667, 175.4693192667, '151'],
  [-37.86640715, 175.4833253333, '293'],
  [-37.8662972, 175.48401185, '301'],
  [-37.8615068, 175.4740312667, '197'],
  [-37.86248105, 175.4746844667, '208'],
  [-37.8654257333, 175.4789157833, '256'],
  [-37.86815405, 175.4856843833, '327'],
  [-37.8559617833, 175.4538523, '5'],
  [-37.8560217167, 175.4541485167, '7'],
  [-37.8545882, 175.4628883167, '73'],
  [-37.8623530667, 175.4756642667, '211'],
  [-37.8571193833, 175.46393905, '91'],
  [-37.8612014833, 175.47249975, '184'],
  [-37.8409288167, 175.37611985, '48'],
  [-37.8396866, 175.3762834833, '52'],
  [-37.840238, 175.3744657333, '75'],
  [-37.84304635, 175.3783802167, '24'],
  [-37.8407690333, 175.3753619333, '59'],
  [-37.8447812333, 175.3774333333, '5'],
  [-37.83956405, 175.3732069667, '82'],
  [-37.84004855, 175.3731001333, '83'],
  [-37.8401183167, 175.3739726667, '77B'],
  [-37.8406453, 175.3751587333, '63'],
  [-37.8435605667, 175.3793269333, '20'],
  [-37.8417591667, 175.3760676667, '49'],
  [-37.8413693, 175.3763867167, '46'],
  [-37.8399756833, 175.3748775, '74'],
  [-37.8421274167, 175.3758927833, '47'],
  [-37.8433708, 175.37858675, '22'],
  [-37.8410302333, 175.3737431833, '77A'],
  [-37.7912387167, 175.4809981333, '33'],
  [-37.7921037167, 175.48244855, '34'],
  [-37.7931116833, 175.4894669167, '108'],
  [-37.7922422833, 175.4888664333, '109'],
  [-37.8904655, 175.4340570833, '16'],
  [-37.8912684167, 175.4347386333, '38'],
  [-37.8918202833, 175.4356853333, '41'],
  [-37.9076504833, 175.4808292167, '2'],
  [-37.9077122167, 175.4810869667, '3'],
  [-37.9078427, 175.4811889667, '4'],
  [-37.9079905333, 175.4810739167, '5'],
  [-37.9079955, 175.4808534333, '6'],
  [-37.9078875833, 175.48062165, '7'],
  [-37.8624973167, 175.3995043333, '1302'],
  [-37.86458815, 175.3984334333, '1302B'],
  [-37.8495279667, 175.3855142, '1105'],
  [-37.8409388, 175.3715485333, '965'],
  [-37.8497607833, 175.3787181667, '1048D'],
  [-37.8474886167, 175.3815213, '1071'],
  [-37.8692470333, 175.4060449833, '1399'],
  [-37.86903025, 175.4050720333, '1410'],
  [-37.8720073, 175.4080915167, '1435'],
  [-37.8472647, 175.3801392333, '1050'],
  [-37.8484202, 175.37745075, '1048B'],
  [-37.8501358167, 175.37656745, '1048C'],
  [-37.8464420667, 175.3786923167, '1048A'],
  [-37.8636343667, 175.3989099167, '1302A'],
  [-37.86024445, 175.39640055, '1262B'],
  [-37.8455550167, 175.3768668, '1032'],
  [-37.8498453667, 175.3860935167, '1113'],
  [-37.8508258833, 175.3877938167, '1129'],
  [-37.8538246333, 175.3925789833, '1193'],
  [-37.8560212667, 175.3943255167, '1209'],
  [-37.8600963167, 175.39687755, '1262A'],
  [-37.8619671667, 175.398902, '1292'],
  [-37.8647795167, 175.4015556333, '1328A'],
  [-37.8641711, 175.40119575, '1328B'],
  [-37.8653665667, 175.4021896833, '1328'],
  [-37.8664159, 175.4057836, '1343'],
  [-37.8487010667, 175.3828026833, '1084B'],
  [-37.8487082, 175.3838392667, '1095'],
  [-37.84854995, 175.3826141833, '1084A'],
  [-37.8614933, 175.3962749667, '1262C'],
  [-37.8941389333, 175.4685426667, '1A'],
  [-37.8940808333, 175.46863395, '1C'],
  [-37.8941101167, 175.46858455, '1B'],
  [-37.8828690833, 175.4756987833, '2'],
  [-37.8829161167, 175.4758464333, '3'],
  [-37.8828703333, 175.47600365, '4'],
  [-37.8826165, 175.4759774167, '5'],
  [-37.8827374, 175.4756385167, '1'],
  [-37.8987844, 175.5778468, '196'],
  [-37.894548, 175.5752196167, '249'],
  [-37.8985254833, 175.5770166167, '3/207'],
  [-37.8979621333, 175.5725676167, '1/207'],
  [-37.9028557167, 175.5775770667, '1/159'],
  [-37.8968063833, 175.5714292167, '2/209'],
  [-37.8982935667, 175.5770144167, '4/207'],
  [-37.9069320167, 175.5687670833, '57'],
  [-37.89817425, 175.5708251167, '2/207'],
  [-37.90506995, 175.5738151167, '103'],
  [-37.9103484333, 175.57042275, '15'],
  [-37.8938830167, 175.57586675, '1/253'],
  [-37.8936416667, 175.5760817333, '2/253'],
  [-37.90255875, 175.5776407833, '2/159'],
  [-37.9004225167, 175.57797105, '178'],
  [-37.8969604, 175.5723327, '1/209'],
  [-37.8767003833, 175.4818637833, '31'],
  [-37.8757476333, 175.4817359, '21A'],
  [-37.87485205, 175.4797409167, '8'],
  [-37.87404295, 175.47989395, '5B'],
  [-37.8752598667, 175.4811949, '15A'],
  [-37.8760220833, 175.4807411167, '18A'],
  [-37.8743084667, 175.4802727, '7A'],
  [-37.8738682667, 175.4797568167, '3C'],
  [-37.8742434333, 175.47987315, '5A'],
  [-37.8759584333, 175.4806079667, '16A'],
  [-37.87510295, 175.48015575, '12'],
  [-37.8748438833, 175.48075465, '11A'],
  [-37.8763291167, 175.4819017667, '27'],
  [-37.8763574333, 175.4822859833, '29A'],
  [-37.8751449333, 175.48070945, '13'],
  [-37.8761885667, 175.4822191333, '27A'],
  [-37.8746679833, 175.4804258667, '9A'],
  [-37.87496675, 175.4808899333, '13A'],
  [-37.8757570833, 175.4808296833, '16'],
  [-37.8758986833, 175.4809562833, '18'],
  [-37.87612285, 175.4811980333, '20'],
  [-37.87624255, 175.4813098333, '22'],
  [-37.8748282667, 175.47948305, '4'],
  [-37.875127, 175.47954055, '6'],
  [-37.8765282333, 175.4819416667, '29'],
  [-37.87591735, 175.48192895, '23'],
  [-37.8759485667, 175.4815328667, '21'],
  [-37.87574945, 175.4813294167, '19'],
  [-37.8742483167, 175.4796583833, '3A'],
  [-37.8745132, 175.4795744833, '3'],
  [-37.8744832833, 175.4792603167, '1'],
  [-37.8745364667, 175.4798557, '5'],
  [-37.8746295, 175.4801628, '7'],
  [-37.8747969, 175.480295, '9'],
  [-37.8745014333, 175.48041985, '9B'],
  [-37.8740439, 175.4796883833, '3B'],
  [-37.8764163833, 175.48148435, '24'],
  [-37.8753753333, 175.4813299167, '17A'],
  [-37.8749682667, 175.4800068, '10'],
  [-37.8761475667, 175.481741, '25'],
  [-37.8755644, 175.4811591833, '17'],
  [-37.8753512333, 175.4809225, '15'],
  [-37.87494615, 175.4804919833, '11'],
  [-37.87563925, 175.4816151667, '19A'],
  [-37.8755416, 175.4806192667, '14'],
  [-37.9307413833, 175.4305783833, '8'],
  [-37.9316973167, 175.4500289833, '174'],
  [-37.9312246333, 175.4509272167, '183'],
  [-37.9317041167, 175.4519870667, '192'],
  [-37.9309645833, 175.4455487, '131'],
  [-37.9313707333, 175.4417409833, '106'],
  [-37.93144905, 175.4439987167, '124'],
  [-37.9312471833, 175.44044115, '90'],
  [-37.9310525167, 175.4572123333, '249'],
  [-37.9304025833, 175.4600948, '271'],
  [-37.9313988167, 175.4667548167, '330'],
  [-37.9317416, 175.4711342333, '370'],
  [-37.9311057, 175.4496502333, '171'],
  [-37.9307743333, 175.46711525, '333'],
  [-37.8983426, 175.4726432167, '6'],
  [-37.8982667833, 175.4723224167, '10'],
  [-37.8981903, 175.4719677667, '14'],
  [-37.8981034667, 175.4717559, '16'],
  [-37.8979483667, 175.47163995, '18'],
  [-37.8978498167, 175.4718887667, '9'],
  [-37.89804025, 175.4727496, '1'],
  [-37.8978692667, 175.4717117333, '11'],
  [-37.8982294833, 175.4721665, '12'],
  [-37.8983239333, 175.4724718833, '8'],
  [-37.89833275, 175.4728329, '4'],
  [-37.89817045, 175.4730263833, '2'],
  [-37.8979749667, 175.4721439333, '7'],
  [-37.8978645167, 175.4723602833, '5'],
  [-37.8980527833, 175.4724426, '3'],
  [-37.9118492167, 175.4777301333, '75'],
  [-37.9071599667, 175.48024025, '27A'],
  [-37.9070499833, 175.4802823167, '27'],
  [-37.9133935, 175.477312, '101'],
  [-37.9109577667, 175.4792493167, '58A'],
  [-37.9079175667, 175.4798474167, '35'],
  [-37.9057049167, 175.48129845, '18'],
  [-37.9045409833, 175.4821761, '8A'],
  [-37.9132981167, 175.47734815, '99'],
  [-37.9151731167, 175.4762851667, '115A'],
  [-37.9159149667, 175.4765031667, '128A'],
  [-37.9160620833, 175.4770954, '126'],
  [-37.91362925, 175.4775332333, '96'],
  [-37.9161206833, 175.47737745, '124'],
  [-37.9138744167, 175.4774362833, '98'],
  [-37.9159982167, 175.4768568, '126A'],
  [-37.9045271167, 175.4818595, '8'],
  [-37.9088441167, 175.4798303833, '40'],
  [-37.9080257833, 175.4798009667, '37'],
  [-37.9118080833, 175.4780394667, '73'],
  [-37.9120441667, 175.4783650167, '80'],
  [-37.9142880667, 175.4768798167, '107B'],
  [-37.9159508833, 175.4774919167, '122A'],
  [-37.9050646333, 175.4819231333, '14A'],
  [-37.9066002, 175.4808875, '28A'],
  [-37.90519225, 175.4815441667, '16'],
  [-37.91452115, 175.477165, '106'],
  [-37.90746095, 175.4804961333, '32'],
  [-37.91248555, 175.47814135, '86'],
  [-37.9158230167, 175.4760962167, '123'],
  [-37.9159919, 175.47604385, '125'],
  [-37.91623445, 175.4763621, '130'],
  [-37.90872535, 175.4791772, '41A'],
  [-37.9044587, 175.4821471167, '6A'],
  [-37.9075026667, 175.4797328167, '33A'],
  [-37.9109141167, 175.4788989667, '58'],
  [-37.9048600833, 175.4817091833, '12'],
  [-37.9156691333, 175.4761731833, '121'],
  [-37.9159156667, 175.4772401333, '120'],
  [-37.9158559667, 175.4770386667, '118'],
  [-37.9153897167, 175.4763100667, '117'],
  [-37.9155261333, 175.4762367333, '119'],
  [-37.9143680667, 175.4772159833, '104'],
  [-37.9091816833, 175.4799197, '44A'],
  [-37.9063697833, 175.4811747, '26B'],
  [-37.9055854667, 175.4813526667, '18B'],
  [-37.9140346667, 175.4774023333, '100'],
  [-37.9160233167, 175.4772866833, '122B'],
  [-37.9046896833, 175.4817846667, '10'],
  [-37.9078630333, 175.4802907167, '34'],
  [-37.9074586667, 175.4800447667, '31'],
  [-37.90766965, 175.4799655333, '33'],
  [-37.9121775667, 175.4782823667, '82'],
  [-37.91233785, 175.4782158167, '84'],
  [-37.9135061167, 175.47759595, '92'],
  [-37.9141940333, 175.4769194, '107A'],
  [-37.9047462167, 175.4820914167, '10A'],
  [-37.9071456333, 175.4806193333, '30'],
  [-37.9126591, 175.4780602, '88'],
  [-37.9043394833, 175.4819642167, '6'],
  [-37.9136969, 175.47784185, '96A'],
  [-37.9162752167, 175.4761951167, '132'],
  [-37.9120850833, 175.4778879333, '77'],
  [-37.9072933667, 175.48012235, '29'],
  [-37.9058775167, 175.4812227667, '20'],
  [-37.9060436, 175.48114975, '22'],
  [-37.90620285, 175.4810768167, '24'],
  [-37.9063685833, 175.4809921833, '26'],
  [-37.9065447667, 175.4809131167, '28'],
  [-37.91495335, 175.47652165, '111'],
  [-37.9087348, 175.4794214667, '41'],
  [-37.9089801333, 175.47978555, '42'],
  [-37.9089057333, 175.4793457667, '43'],
  [-37.9095931667, 175.4790578, '51'],
  [-37.9123723167, 175.4777452667, '81'],
  [-37.9126095167, 175.47765015, '91'],
  [-37.91277265, 175.4775717667, '93'],
  [-37.91509955, 175.4768812333, '110'],
  [-37.9152698333, 175.476794, '112'],
  [-37.9154395, 175.4767326333, '114'],
  [-37.91572125, 175.4765971833, '116'],
  [-37.9102388667, 175.47919135, '50'],
  [-37.9048902, 175.4819941833, '12A'],
  [-37.9091995333, 175.47891055, '47A'],
  [-37.9150900667, 175.4764547333, '113'],
  [-37.91524275, 175.4763963833, '115'],
  [-37.9094314833, 175.4791159333, '49'],
  [-37.9096957667, 175.4794569, '48A'],
  [-37.9091736667, 175.4796928333, '44'],
  [-37.9104137167, 175.4791214333, '52'],
  [-37.9095526333, 175.47951535, '48'],
  [-37.9092440667, 175.4791909833, '47'],
  [-37.905025, 175.4816333, '14'],
  [-37.91218695, 175.4778348667, '77A'],
  [-37.9105796, 175.4790363667, '54'],
  [-37.9142164167, 175.4773281, '102'],
  [-37.9093673833, 175.4796006833, '46'],
  [-37.9107540667, 175.4789564333, '56'],
  [-37.9090764333, 175.4792701333, '45'],
  [-37.9122119833, 175.4774975, '79'],
  [-37.9051519, 175.4770494, '5/37B'],
  [-37.9072341833, 175.4812645, '74'],
  [-37.90539015, 175.47753615, '21/37B'],
  [-37.9064404833, 175.4786360667, '52'],
  [-37.9053830667, 175.4751337333, '28'],
  [-37.9053326, 175.4740749833, '20A'],
  [-37.9055134833, 175.4740488, '20C'],
  [-37.90547225, 175.47397175, '20B'],
  [-37.9053470167, 175.4742053667, '20D'],
  [-37.9069486333, 175.4814998167, '73'],
  [-37.9051562667, 175.4778512167, '17/37B'],
  [-37.9052251333, 175.4746236833, '24'],
  [-37.9053746, 175.4777257833, '19/37B'],
  [-37.9071479667, 175.4809996833, '72'],
  [-37.9050343167, 175.47739, '24/37B'],
  [-37.9049808, 175.4775142667, '25/37B'],
  [-37.9051211333, 175.4773504667, '23/37B'],
  [-37.9068252833, 175.4810905167, '69'],
  [-37.9047089333, 175.4739594, '19'],
  [-37.9040900833, 175.4718856167, '1'],
  [-37.9048747833, 175.4744885333, '23'],
  [-37.90479065, 175.4742263667, '21'],
  [-37.905018, 175.47392355, '16'],
  [-37.9063578667, 175.4783819333, '50'],
  [-37.9049504167, 175.4747584333, '25'],
  [-37.9050288833, 175.47502195, '27'],
  [-37.9072899333, 175.48271985, '85'],
  [-37.9054541333, 175.4776966667, '20/37B'],
  [-37.90488845, 175.4772389833, '27/37B'],
  [-37.9047877333, 175.4775819667, '13/37B'],
  [-37.9049796, 175.4771942833, '28/37B'],
  [-37.9073132333, 175.4815289167, '76'],
  [-37.9050827, 175.47699535, '6/37B'],
  [-37.9061134667, 175.4770216167, '40A'],
  [-37.90611365, 175.4768269667, '38B'],
  [-37.9076197, 175.4825873167, '84'],
  [-37.9070038333, 175.4817050667, '75'],
  [-37.9047039333, 175.47730165, '11/37B'],
  [-37.9075484833, 175.4823327833, '82'],
  [-37.9054264167, 175.4753033833, '30'],
  [-37.9069885833, 175.47905425, '58'],
  [-37.906228, 175.477926, '48'],
  [-37.9058200667, 175.4765282833, '32'],
  [-37.9046413667, 175.4737464333, '17'],
  [-37.9050075333, 175.4778885167, '16/37B'],
  [-37.90499485, 175.4768944167, '7/37B'],
  [-37.9046556167, 175.4771346, '10/37B'],
  [-37.90527195, 175.47690975, '1/37B'],
  [-37.9052758833, 175.4771711833, '3/37B'],
  [-37.9052169, 175.4771015167, '4/37B'],
  [-37.90529785, 175.4770102333, '2/37B'],
  [-37.9058489333, 175.47780495, '45'],
  [-37.9048925167, 175.4769351667, '8/37B'],
  [-37.9043826, 175.4728787667, '15'],
  [-37.9049060333, 175.47352905, '12'],
  [-37.9056042667, 175.47696875, '37'],
  [-37.9049538167, 175.47372635, '14'],
  [-37.9048069667, 175.4730782, '10'],
  [-37.90405505, 175.4727157833, '11'],
  [-37.9043442, 175.4726702333, '13'],
  [-37.9039020833, 175.4723256667, '5'],
  [-37.9046807667, 175.4726619167, '6'],
  [-37.9047340667, 175.47286755, '8'],
  [-37.9050737, 175.4741203667, '18'],
  [-37.90621865, 175.47643995, '34'],
  [-37.9055253667, 175.4767246667, '35'],
  [-37.9062645167, 175.4765613333, '36'],
  [-37.9059193, 175.4768274667, '38'],
  [-37.90570735, 175.4773252333, '39'],
  [-37.9059801833, 175.4770579, '40'],
  [-37.9062604167, 175.4772333833, '42B'],
  [-37.9057853667, 175.4775903, '43'],
  [-37.9061028167, 175.4774772667, '44'],
  [-37.90589465, 175.47796755, '47'],
  [-37.9068853333, 175.48130165, '71'],
  [-37.9071345833, 175.4821319833, '79'],
  [-37.9074696333, 175.4820778, '80A'],
  [-37.90765195, 175.4820632833, '80B'],
  [-37.9071948, 175.4823366167, '81'],
  [-37.90725725, 175.4825442, '83'],
  [-37.9042386667, 175.4723893667, '7'],
  [-37.9049427667, 175.47739025, '26/37B'],
  [-37.9048325667, 175.4777169, '14/37B'],
  [-37.9048868, 175.4778717167, '15/37B'],
  [-37.9052664833, 175.4777734333, '18/37B'],
  [-37.9053551, 175.4774051333, '22/37B'],
  [-37.90398685, 175.4726027167, '9'],
  [-37.9047089333, 175.4770192, '9/37B'],
  [-37.9061652333, 175.4777069667, '46'],
  [-37.9067892667, 175.4808744667, '67'],
  [-37.9068334667, 175.47996825, '66'],
  [-37.9067120833, 175.4795692, '60'],
  [-37.9041594, 175.4721355, '3'],
  [-37.9046192333, 175.4724616667, '4'],
  [-37.9050749, 175.47524375, '29'],
  [-37.9068698, 175.4786657833, '54'],
  [-37.9057202, 175.4762706, '32B'],
  [-37.9051451333, 175.4743827, '22'],
  [-37.90625565, 175.4769934167, '40B'],
  [-37.90604295, 175.4772728667, '42A'],
  [-37.9047528, 175.4774456167, '12/37B'],
  [-37.9073914, 175.4817937167, '78'],
  [-37.9070766667, 175.4819295333, '77'],
  [-37.8755341, 175.4678237, '7'],
  [-37.87529185, 175.467879, '5'],
  [-37.8751691333, 175.4682586333, '6'],
  [-37.8759656, 175.4679058667, '13'],
  [-37.87506995, 175.4678763667, '3'],
  [-37.8749979833, 175.46825515, '4'],
  [-37.8748353667, 175.4678732833, '1'],
  [-37.8755232, 175.4682126833, '10'],
  [-37.87481615, 175.4682566167, '2'],
  [-37.8759362, 175.4677101333, '11'],
  [-37.8756999, 175.4681576833, '12'],
  [-37.87587545, 175.4680599833, '14'],
  [-37.8753491, 175.4682464333, '8'],
  [-37.8757606333, 175.46762115, '9'],
  [-37.8187813333, 175.5099677833, '62'],
  [-37.81924235, 175.5087604667, '49'],
  [-37.8177396167, 175.5119011167, '86'],
  [-37.8178875667, 175.51156545, '84'],
  [-37.8174387167, 175.51263255, '90'],
  [-37.83408825, 175.55531685, '1/1101'],
  [-37.8175450333, 175.51885165, '150'],
  [-37.8077506333, 175.541635, '400'],
  [-37.8136809, 175.5290861, '265'],
  [-37.8110874, 175.53251965, '304'],
  [-37.8095875, 175.5753655167, '2/729'],
  [-37.83343, 175.5554701333, '1101'],
  [-37.8173373833, 175.5201625167, '160'],
  [-37.80918625, 175.5753678333, '1/729'],
  [-37.8101949167, 175.5340213667, '320'],
  [-37.8114688333, 175.5313781167, '299'],
  [-37.8110666833, 175.5317111833, '301'],
  [-37.8174875833, 175.5162427833, '126'],
  [-37.8121336833, 175.5303464167, '289'],
  [-37.8180013167, 175.5178742, '2/138'],
  [-37.81761695, 175.51742335, '1/138'],
  [-37.8074874667, 175.5440482, '430'],
  [-37.80752155, 175.5425832333, '416'],
  [-37.8366309333, 175.5496806333, '1173'],
  [-37.8169579833, 175.5214218667, '179'],
  [-37.8298305, 175.5634204, '1007'],
  [-37.8149217167, 175.5283630333, '247'],
  [-37.8217308333, 175.5663090333, '910'],
  [-37.81460935, 175.5745359167, '797'],
  [-37.8234203333, 175.5658778, '924'],
  [-37.8319167167, 175.5559498, '1086'],
  [-37.8306048167, 175.5616193833, '1023'],
  [-37.81758865, 175.57007665, '851'],
  [-37.8329407, 175.55562365, '1099'],
  [-37.81693675, 175.5123568167, '95'],
  [-37.8182193, 175.5131360833, '88'],
  [-37.8130308833, 175.5297032667, '273'],
  [-37.8095776, 175.55597085, '544'],
  [-37.8072376833, 175.5452215833, '443'],
  [-37.81966705, 175.5090003167, '48'],
  [-37.8169615333, 175.5198118833, '159'],
  [-37.8169314, 175.51421915, '112'],
  [-37.8080136167, 175.5463236, '452'],
  [-37.807907, 175.5458772167, '448'],
  [-37.80796455, 175.5461119167, '450'],
  [-37.8168847833, 175.5220721833, '181'],
  [-37.8354269, 175.5522720333, '1145'],
  [-37.83545425, 175.5543820167, '1129'],
  [-37.8082469167, 175.5385727167, '376'],
  [-37.8076848, 175.5419475167, '408'],
  [-37.8162252667, 175.5265092167, '225'],
  [-37.8166361333, 175.52144, '1/179'],
  [-37.8070565833, 175.5441373667, '429'],
  [-37.8075943333, 175.5444878167, '432'],
  [-37.8221778667, 175.5667572, '911'],
  [-37.8179158667, 175.5105938667, '73'],
  [-37.807556, 175.5460459333, '447'],
  [-37.8080632333, 175.5465634, '454'],
  [-37.8070305833, 175.54991865, '483'],
  [-37.80831265, 175.5514465667, '526'],
  [-37.80744605, 175.5634000833, '603'],
  [-37.8164026833, 175.5278071167, '234'],
  [-37.80656415, 175.5705962833, '665'],
  [-37.81898205, 175.5685284167, '862'],
  [-37.8236973167, 175.56648815, '927'],
  [-37.8256295833, 175.5653636167, '965'],
  [-37.8142507167, 175.57521965, '789'],
  [-37.8094723167, 175.5346592, '349'],
  [-37.8098434333, 175.5333155167, '319'],
  [-37.8292230167, 175.5635525167, '1005'],
  [-37.8173514167, 175.5221399167, '180'],
  [-37.83840865, 175.5469221167, '1213'],
  [-37.8379536333, 175.5475567833, '1201'],
  [-37.81720545, 175.5149902333, '116'],
  [-37.8085928833, 175.5380488, '370'],
  [-37.80779995, 175.5386938833, '379'],
  [-37.8204958333, 175.50876015, '34'],
  [-37.82623815, 175.56358455, '970'],
  [-37.81448725, 175.5734910333, '804'],
  [-37.8222833167, 175.5659173667, '912'],
  [-37.8170449333, 175.5277756167, '1/232'],
  [-37.8176035333, 175.5269654167, '2/232'],
  [-37.8323760333, 175.5575159333, '1078'],
  [-37.83021075, 175.5612354667, '1024'],
  [-37.9305489, 175.5017878333, '90'],
  [-37.93116365, 175.5055481833, '122'],
  [-37.9319767167, 175.5109385, '168'],
  [-37.93029815, 175.4998441167, '72'],
  [-37.9291897167, 175.4957679, '35'],
  [-37.92986625, 175.4972463167, '50'],
  [-37.9290868833, 175.4948005167, '25'],
  [-37.9296040667, 175.4987881667, '63'],
  [-37.9309512167, 175.5043885167, '110'],
  [-37.9296868833, 175.4958722667, '38'],
  [-37.9295072167, 175.4977275833, '51'],
  [-37.9303624833, 175.5006042333, '74'],
  [-37.9319759, 175.5106025, '166'],
  [-37.9306431833, 175.5024661, '96'],
  [-37.9299079167, 175.4976426667, '52'],
  [-37.9312659333, 175.5064569833, '132'],
  [-37.93082875, 175.50372585, '106'],
  [-37.9320732833, 175.5108069, '167'],
  [-37.8443465167, 175.36530835, '32'],
  [-37.8448259333, 175.3650265167, '36'],
  [-37.8425576167, 175.3664466333, '8'],
  [-37.8925954833, 175.45710755, '3'],
  [-37.8930169167, 175.45739025, '13'],
  [-37.89310595, 175.4574966167, '17'],
  [-37.8931706667, 175.4571386, '19'],
  [-37.8930694833, 175.45792925, '15'],
  [-37.892484, 175.4570883333, '1'],
  [-37.8926542167, 175.4574440667, '5'],
  [-37.89269795, 175.4575341667, '7'],
  [-37.8926711333, 175.4579661, '9'],
  [-37.8929884833, 175.4571287, '11'],
  [-37.883121, 175.4810597, '11'],
  [-37.8827995833, 175.4808762167, '15'],
  [-37.8827993, 175.4810446833, '15A'],
  [-37.88305445, 175.4806939167, '14'],
  [-37.8832812833, 175.4806736333, '12'],
  [-37.8829723, 175.4809516, '13'],
  [-37.8836668, 175.4806524333, '8'],
  [-37.88350115, 175.4806812167, '10'],
  [-37.8838327667, 175.4806120333, '6'],
  [-37.8836368, 175.4810848667, '5'],
  [-37.8840162333, 175.4806070667, '4'],
  [-37.8841447, 175.4806001167, '2'],
  [-37.8837898, 175.4810769333, '3'],
  [-37.8834789167, 175.4810792167, '7'],
  [-37.8832999833, 175.4810661333, '9'],
  [-37.8839425333, 175.4810822667, '1'],
  [-37.8741644333, 175.466663, '1'],
  [-37.8741701833, 175.4671011667, '2'],
  [-37.8734758833, 175.4661548667, '11B'],
  [-37.8730602167, 175.4660412333, '17B'],
  [-37.8732532833, 175.4669407833, '12'],
  [-37.8736860667, 175.4670495333, '8'],
  [-37.8738914, 175.4662481167, '5B'],
  [-37.8740275667, 175.46708325, '4'],
  [-37.8728965, 175.4668399167, '16'],
  [-37.87401705, 175.4666682333, '3'],
  [-37.8740028333, 175.4662564, '5A'],
  [-37.8734885167, 175.467, '10'],
  [-37.8738630833, 175.4670664333, '6'],
  [-37.8737826, 175.4666489667, '7'],
  [-37.8735874, 175.46617485, '11A'],
  [-37.8736024167, 175.4666129, '9'],
  [-37.8730790167, 175.4668945167, '14'],
  [-37.8729272167, 175.4664146833, '19'],
  [-37.8733468333, 175.4665393167, '13'],
  [-37.8731517, 175.4664815167, '15'],
  [-37.8731441167, 175.4660683, '17A'],
  [-37.8825944667, 175.4798169833, '2'],
  [-37.8826055167, 175.4805495667, '10'],
  [-37.8825809333, 175.4800131333, '4'],
  [-37.8825441333, 175.4804278333, '8'],
  [-37.8828469, 175.4800110667, '3'],
  [-37.882842, 175.4802305333, '5'],
  [-37.8825584833, 175.4801972667, '6'],
  [-37.8828376, 175.4804269167, '7'],
  [-37.88275275, 175.4805278667, '9'],
  [-37.8828507833, 175.4798377667, '1'],
  [-37.8747543667, 175.3655736, '277'],
  [-37.8779646667, 175.3771985, '389'],
  [-37.8791017167, 175.3701385167, '1/326'],
  [-37.8809893667, 175.38422785, '458'],
  [-37.8801277667, 175.3840239333, '459'],
  [-37.8814240333, 175.3849688833, '468'],
  [-37.8806415333, 175.38358955, '452'],
  [-37.8785101, 175.3802812167, '409'],
  [-37.8796759167, 175.3830951167, '445'],
  [-37.8803115167, 175.3830208833, '446'],
  [-37.8778165333, 175.3759684833, '373'],
  [-37.88137445, 175.3862355333, '473'],
  [-37.8782752833, 175.3789725, '397'],
  [-37.8808287667, 175.3851571, '469'],
  [-37.87896095, 175.3695827167, '326'],
  [-37.8765604833, 175.3662541167, '288'],
  [-37.8818931667, 175.38581595, '474'],
  [-37.8775986, 175.3747133333, '2/359'],
  [-37.8769582833, 175.3713375, '331'],
  [-37.8843103667, 175.3914426833, '531'],
  [-37.87595675, 175.3649699833, '271'],
  [-37.8781325, 175.3739238833, '356'],
  [-37.8763472667, 175.36476045, '270'],
  [-37.87676475, 175.3676648667, '298'],
  [-37.8769505833, 175.36918955, '310'],
  [-37.8766704667, 175.36975, '313'],
  [-37.8777166, 175.3720850333, '334'],
  [-37.8773668333, 175.3733521333, '349'],
  [-37.8772966667, 175.3744940833, '1/359'],
  [-37.87831085, 175.3791264167, '399'],
  [-37.8778886833, 175.37662545, '377'],
  [-37.8784267667, 175.3770323833, '388'],
  [-37.8790059333, 175.3798270667, '408'],
  [-37.91994325, 175.4698456167, '5'],
  [-37.9200047, 175.4693797833, '6'],
  [-37.9195710333, 175.4694752833, '2'],
  [-37.9203742667, 175.4697562833, '7'],
  [-37.9196343, 175.4699295667, '3'],
  [-37.9198162, 175.4690209, '4'],
  [-37.8824037833, 175.4600990333, '5'],
  [-37.88208185, 175.4598317167, '9'],
  [-37.8826121667, 175.4600836333, '3'],
  [-37.8826033333, 175.45961605, '2'],
  [-37.8822431167, 175.4600865, '7'],
  [-37.8821465833, 175.4595746, '8'],
  [-37.8823125667, 175.45958745, '6'],
  [-37.8824702667, 175.4595934167, '4'],
  [-37.9092579167, 175.46735845, '6A'],
  [-37.9089322167, 175.4674924, '10'],
  [-37.90894585, 175.4672735167, '12'],
  [-37.9089078333, 175.46711725, '11'],
  [-37.9089631667, 175.4669939667, '9'],
  [-37.90904455, 175.4673255, '8'],
  [-37.9094559, 175.4668010167, '1'],
  [-37.9093255, 175.4673469667, '4A'],
  [-37.9093457833, 175.46717355, '4'],
  [-37.9095302167, 175.4670570667, '2'],
  [-37.9090935, 175.4664936667, '3'],
  [-37.90917125, 175.4672602333, '6'],
  [-37.90908325, 175.4669295667, '7'],
  [-37.9092908333, 175.4668895333, '5'],
  [-37.8593663833, 175.4539760167, '251'],
  [-37.8754824, 175.4604578167, '63'],
  [-37.8750289833, 175.4602931333, '67'],
  [-37.7985084167, 175.4478579333, '941'],
  [-37.842417, 175.4531796833, '443'],
  [-37.8085080333, 175.45099665, '810'],
  [-37.79048555, 175.44243815, '1063'],
  [-37.8492731667, 175.4532494833, '355'],
  [-37.8094198833, 175.4503523667, '819'],
  [-37.8728692167, 175.4594153667, '91'],
  [-37.8522977333, 175.4539347833, '344'],
  [-37.8484041333, 175.45409895, '372'],
  [-37.8479726833, 175.45304965, '387'],
  [-37.7948086, 175.4476616833, '994'],
  [-37.7914089, 175.4452872333, '1027'],
  [-37.8080105, 175.4498779333, '835'],
  [-37.8722349333, 175.4592175167, '99'],
  [-37.8091485667, 175.45085495, '821'],
  [-37.8594542833, 175.4549678833, '5/246'],
  [-37.8230668667, 175.4541309833, '660'],
  [-37.8316753333, 175.4539613167, '562'],
  [-37.8387429833, 175.4531928, '475'],
  [-37.8545740667, 175.4540875333, '294'],
  [-37.7900112167, 175.4442665, '1045'],
  [-37.8172833167, 175.4539773167, '724'],
  [-37.83503155, 175.453934, '542'],
  [-37.8607128667, 175.4548002, '2/241'],
  [-37.8380142833, 175.45391425, '490'],
  [-37.8275037167, 175.4529093833, '589'],
  [-37.8596196, 175.4542151, '249'],
  [-37.8595530167, 175.45479165, '3/246'],
  [-37.85959605, 175.45471705, '2/246'],
  [-37.8592503167, 175.4544837333, '252'],
  [-37.8713457667, 175.4587725833, '111'],
  [-37.8595053, 175.4548791833, '4/246'],
  [-37.79668195, 175.4482608333, '958'],
  [-37.8227231, 175.4540730167, '670'],
  [-37.8750904833, 175.4593735333, '71'],
  [-37.8190378833, 175.4540990167, '702'],
  [-37.86957775, 175.4580359, '129'],
  [-37.8662393833, 175.4567130667, '169'],
  [-37.8687158167, 175.4577150333, '141'],
  [-37.86791495, 175.4573792167, '151'],
  [-37.8089932167, 175.4507184167, '823'],
  [-37.8666422833, 175.4569389667, '167'],
  [-37.8738722833, 175.4598649833, '81'],
  [-37.8169442833, 175.4534629333, '727'],
  [-37.8185275, 175.4534621333, '709'],
  [-37.8059395833, 175.44899615, '859'],
  [-37.8327434833, 175.4540100333, '550'],
  [-37.8604312833, 175.4546856333, '1/241'],
  [-37.8610548833, 175.4549434167, '3/241'],
  [-37.8596720667, 175.45475175, '244'],
  [-37.8603010167, 175.4551234333, '238'],
  [-37.874473, 175.4600767667, '75'],
  [-37.8192958833, 175.4546863, '698'],
  [-37.80070935, 175.4483520333, '917'],
  [-37.8595345, 175.4546793167, '250'],
  [-37.8395576167, 175.4538942167, '470'],
  [-37.8600606333, 175.4551961167, '242'],
  [-37.8587876, 175.45357305, '261'],
  [-37.8202505167, 175.454168, '692'],
  [-37.83062305, 175.4541314, '574'],
  [-37.85965015, 175.4546251667, '1/246'],
  [-37.87094345, 175.4585491667, '115'],
  [-37.82367025, 175.4541148167, '654'],
  [-37.8761585333, 175.4607254667, '55'],
  [-37.8650849833, 175.4562546333, '183'],
  [-37.8104551333, 175.45176685, '803'],
  [-37.8601735167, 175.4545659833, '247'],
  [-37.8072936667, 175.4501624667, '842'],
  [-37.81121545, 175.4523795667, '795'],
  [-37.8082023667, 175.4500136333, '833'],
  [-37.8088097833, 175.4505667167, '825'],
  [-37.8073512333, 175.4494723833, '841'],
  [-37.8180043167, 175.45347675, '713'],
  [-37.8034810667, 175.44930745, '884A'],
  [-37.8133904167, 175.4533446667, '767'],
  [-37.7906012833, 175.4456008, '1032'],
  [-37.8036063333, 175.44934055, '884'],
  [-37.8086218, 175.4503990167, '827'],
  [-37.7990523833, 175.4480464, '931'],
  [-37.8435690667, 175.40554535, '296A'],
  [-37.84511005, 175.4057523167, '282'],
  [-37.8456481333, 175.4283544, '93'],
  [-37.8452106, 175.4213902167, '154'],
  [-37.8456685667, 175.4217703833, '151'],
  [-37.8450910333, 175.4066185167, '296B'],
  [-37.84556515, 175.3859519, '471'],
  [-37.8456769, 175.4356176167, '29'],
  [-37.8452146333, 175.4326596167, '54'],
  [-37.8456379667, 175.4318747833, '59'],
  [-37.8451947667, 175.4291500167, '82'],
  [-37.8456449667, 175.42712405, '103'],
  [-37.8452215333, 175.4202044833, '166'],
  [-37.84562355, 175.4192034833, '173'],
  [-37.84520295, 175.4171995667, '190'],
  [-37.8451047667, 175.41595175, '204'],
  [-37.84557985, 175.4160677, '201'],
  [-37.8451894667, 175.4139933167, '218'],
  [-37.8455275833, 175.4075856833, '277'],
  [-37.8455757667, 175.40668145, '281'],
  [-37.8451309667, 175.4038956667, '308'],
  [-37.8455923333, 175.40336095, '313'],
  [-37.8451457333, 175.4006193, '332'],
  [-37.8456046667, 175.3996052667, '345'],
  [-37.8450766, 175.3979973833, '362A'],
  [-37.8450326167, 175.3961487833, '376'],
  [-37.84556585, 175.3949421167, '389'],
  [-37.84503405, 175.3928639333, '406'],
  [-37.8450819, 175.3938952833, '398'],
  [-37.8449702833, 175.39000315, '430'],
  [-37.8455388, 175.3929698833, '403'],
  [-37.8455067667, 175.389923, '431'],
  [-37.8449729167, 175.38231105, '498'],
  [-37.8449880833, 175.38162075, '502'],
  [-37.8432495, 175.3824779667, '496'],
  [-37.8441658167, 175.4248163667, '122'],
  [-37.84258355, 175.3809411333, '512'],
  [-37.8451205833, 175.41321575, '228'],
  [-37.8454313833, 175.3813477333, '509'],
  [-37.8449337333, 175.3830211333, '494'],
  [-37.8456650333, 175.4344218333, '1/41'],
  [-37.8450306667, 175.3974560667, '362C'],
  [-37.8463207667, 175.4343822167, '2/42'],
  [-37.8450416833, 175.3967473667, '372'],
  [-37.8455358167, 175.4085091, '267'],
  [-37.8451470333, 175.4076077167, '276'],
  [-37.84420195, 175.39791495, '362B'],
  [-37.8452185667, 175.4259005667, '114'],
  [-37.8456212833, 175.4347298667, '39'],
  [-37.8452003167, 175.40904765, '262'],
  [-37.8451996667, 175.4122621833, '234'],
  [-37.84515415, 175.4098542167, '256'],
  [-37.8455715833, 175.4139006833, '223'],
  [-37.8455915333, 175.4136348333, '225'],
  [-37.8455279667, 175.3870696, '463'],
  [-37.8457080167, 175.4225169667, '145'],
  [-37.8450449333, 175.3784177833, '536'],
  [-37.8441582, 175.3843482, '480'],
  [-37.8441567667, 175.38280735, '494A'],
  [-37.8450534333, 175.3804865833, '516'],
  [-37.845458, 175.3819993833, '503'],
  [-37.8416720667, 175.4161419167, '202'],
  [-37.84561615, 175.4169546167, '193'],
  [-37.8456090833, 175.4248031, '127'],
  [-37.8452347167, 175.4210866, '156'],
  [-37.8452366333, 175.4236209667, '136'],
  [-37.8420864167, 175.3808174, '514'],
  [-37.9352309167, 175.4932222, '138'],
  [-37.9344554333, 175.48793725, '92'],
  [-37.93352515, 175.48479765, '59'],
  [-37.9333442833, 175.4806992167, '30'],
  [-37.9333265, 175.4832372833, '43'],
  [-37.9338463667, 175.4867482, '81'],
  [-37.9349315333, 175.4913314333, '109'],
  [-37.9335968833, 175.4853604, '63'],
  [-37.9316883, 175.48456045, '53'],
  [-37.9338528333, 175.4839506, '52'],
  [-37.8310454167, 175.5756857833, '775'],
  [-37.8312273667, 175.5775630667, '757'],
  [-37.8293654833, 175.5685721667, '851'],
  [-37.8285495833, 175.56486995, '881'],
  [-37.8309590333, 175.5733609, '801'],
  [-37.8305305333, 175.5736851833, '790'],
  [-37.8295682333, 175.56931885, '841'],
  [-37.83130275, 175.5782757167, '753'],
  [-37.8283176167, 175.5655312333, '879'],
  [-37.8540068167, 175.37670555, '34'],
  [-37.85430545, 175.3768498167, '32'],
  [-37.8549918167, 175.3798488333, '5'],
  [-37.85449605, 175.37689005, '33'],
  [-37.8547125333, 175.3802214167, '4'],
  [-37.8545867833, 175.3781517833, '28'],
  [-37.8547440667, 175.37743325, '31'],
  [-37.85420255, 175.3773112333, '30'],
  [-37.8879053333, 175.5233262333, '1/18'],
  [-37.8881771333, 175.5232950167, '2/18'],
  [-37.8834455333, 175.45836535, '92'],
  [-37.8863947167, 175.4586610667, '58B'],
  [-37.8866006667, 175.45961975, '55A'],
  [-37.8867239167, 175.4592584167, '55'],
  [-37.88667, 175.4586812, '56'],
  [-37.8817044333, 175.4588333167, '113'],
  [-37.8815483333, 175.4587898667, '115'],
  [-37.8814229167, 175.4587740833, '117'],
  [-37.8913856667, 175.4590918167, '18'],
  [-37.8915707667, 175.4591145167, '16'],
  [-37.8868740833, 175.4599066167, '53C'],
  [-37.88889255, 175.4599269833, '37B'],
  [-37.89262475, 175.4600617167, '7A'],
  [-37.8889847167, 175.4594067667, '37A'],
  [-37.8925890833, 175.4585589, '10B'],
  [-37.8824604, 175.4588691333, '105'],
  [-37.8836036333, 175.4583701, '90'],
  [-37.8908670667, 175.4585197333, '24A'],
  [-37.8826975167, 175.4583391, '98'],
  [-37.8835235167, 175.4590010333, '95'],
  [-37.8838230333, 175.4583829333, '88'],
  [-37.8845143667, 175.4579167, '80A'],
  [-37.8828394333, 175.4583557667, '96'],
  [-37.88251835, 175.4583208667, '100'],
  [-37.8926768167, 175.4583797667, '10C'],
  [-37.88716595, 175.4586927333, '50'],
  [-37.8883195667, 175.4593362333, '43'],
  [-37.8864967833, 175.4592373833, '59'],
  [-37.8871386833, 175.4592945833, '51'],
  [-37.8836205667, 175.4589701333, '91'],
  [-37.8870057667, 175.4587382167, '52'],
  [-37.8823566667, 175.4583266833, '102'],
  [-37.8867508, 175.45831015, '2/54'],
  [-37.88680585, 175.4583326167, '54B'],
  [-37.8869064, 175.4592745833, '53'],
  [-37.8836770667, 175.45788765, '90A'],
  [-37.88377685, 175.45896945, '91A'],
  [-37.8844059167, 175.4593669667, '83A'],
  [-37.8843895833, 175.4590283, '83'],
  [-37.88413765, 175.4580580833, '84A'],
  [-37.8909576167, 175.4590556833, '22'],
  [-37.8932342, 175.4592408833, '4'],
  [-37.8929272167, 175.45863745, '8B'],
  [-37.8929735167, 175.4583677333, '8C'],
  [-37.8859658167, 175.4592039, '71'],
  [-37.8881317333, 175.4593295333, '45'],
  [-37.88894835, 175.45890335, '36'],
  [-37.88873325, 175.4588844167, '38'],
  [-37.8885017167, 175.45935385, '41A'],
  [-37.8888022667, 175.4593873, '39'],
  [-37.88814385, 175.4586047333, '44A'],
  [-37.8854610167, 175.4585890667, '66'],
  [-37.89301925, 175.4597807333, '3'],
  [-37.8888152167, 175.4597877833, '37C'],
  [-37.88442445, 175.4579215333, '82A'],
  [-37.8841846833, 175.4584516, '84'],
  [-37.8858883833, 175.4596244167, '71A'],
  [-37.8911121167, 175.4596169167, '21'],
  [-37.8882564333, 175.4588584167, '42'],
  [-37.8839837, 175.4584101, '86'],
  [-37.8862705, 175.4595605667, '63'],
  [-37.8878208, 175.4588156833, '46'],
  [-37.8891674833, 175.4594178, '35'],
  [-37.8884817, 175.4588827667, '40'],
  [-37.8845497667, 175.4584736333, '80'],
  [-37.8908341667, 175.45958975, '23'],
  [-37.8926482, 175.4588475667, '10A'],
  [-37.8846152, 175.4590487333, '81'],
  [-37.8868875833, 175.4597079333, '53B'],
  [-37.8867661667, 175.4580206, '1/54'],
  [-37.8923631167, 175.4601005833, '11A'],
  [-37.8880116333, 175.4588415167, '44'],
  [-37.88179955, 175.4582856667, '108'],
  [-37.8819699667, 175.4588568833, '109'],
  [-37.8906476667, 175.4590157667, '28'],
  [-37.8846581333, 175.4584694833, '78'],
  [-37.8843345167, 175.4584402833, '82'],
  [-37.8841375167, 175.4590033, '85'],
  [-37.88394965, 175.4578898667, '86A'],
  [-37.88396905, 175.45758895, '86B'],
  [-37.8837848667, 175.4578930833, '88A'],
  [-37.8839426667, 175.4589834333, '89'],
  [-37.8923547333, 175.4596697667, '11'],
  [-37.8916483333, 175.45965705, '13'],
  [-37.89177585, 175.4591300667, '14'],
  [-37.8914522167, 175.459646, '15'],
  [-37.8912940833, 175.4596277667, '17'],
  [-37.8923723833, 175.4592214, '12'],
  [-37.8907689667, 175.4590306667, '24'],
  [-37.8904437833, 175.4595327, '25A'],
  [-37.8906071167, 175.4595718167, '25'],
  [-37.8902158167, 175.4595238167, '27'],
  [-37.8911627, 175.4590753167, '20'],
  [-37.8886534333, 175.4593824833, '41'],
  [-37.8930344167, 175.4600257833, '3A-3F'],
  [-37.8865167167, 175.4586738833, '58'],
  [-37.8863451667, 175.4592180667, '61'],
  [-37.88626165, 175.45980935, '65'],
  [-37.8862540167, 175.4586216, '60'],
  [-37.8858030167, 175.4586246, '62'],
  [-37.8856375333, 175.4586118667, '64'],
  [-37.89284255, 175.4600622333, '5A'],
  [-37.8928040667, 175.4597492333, '5'],
  [-37.8861293, 175.4592111833, '69'],
  [-37.8858680333, 175.4598526167, '71B'],
  [-37.885777, 175.4599270167, '71C'],
  [-37.8857422667, 175.4597478167, '71D'],
  [-37.88574365, 175.45918075, '73'],
  [-37.8855746833, 175.4591693833, '75'],
  [-37.8930622167, 175.4592157833, '6'],
  [-37.8925581, 175.4603171, '7B'],
  [-37.8926518167, 175.46025555, '7C'],
  [-37.8929233, 175.4588164167, '8A'],
  [-37.8928556667, 175.4592156833, '8'],
  [-37.8924033, 175.4602587333, '9'],
  [-37.8826857833, 175.4589041167, '103'],
  [-37.8868134333, 175.4586863667, '54'],
  [-37.8821768333, 175.4588641833, '107'],
  [-37.8925898333, 175.4596910333, '7'],
  [-37.8862095667, 175.46007345, '67'],
  [-37.8893183667, 175.4594386167, '33'],
  [-37.88182795, 175.4588519167, '111'],
  [-37.8853995, 175.4591325167, '77'],
  [-37.8819874833, 175.4582899, '106'],
  [-37.8868931667, 175.4594645667, '53A'],
  [-37.89067275, 175.4587377333, '28A'],
  [-37.88729905, 175.45870125, '48'],
  [-37.8872955667, 175.4593124, '49'],
  [-37.8926355167, 175.4591491667, '10'],
  [-37.8821580833, 175.45830775, '104'],
  [-37.8581124833, 175.3783852167, '535'],
  [-37.8652348667, 175.3746078, '454'],
  [-37.8528962667, 175.3764204333, '591C'],
  [-37.8658603333, 175.3777156333, '466B'],
  [-37.8561505333, 175.3796002833, '563'],
  [-37.8574877833, 175.3782657333, '557'],
  [-37.8648613667, 175.3759225833, '466A'],
  [-37.8680267, 175.3758790667, '422'],
  [-37.8679018667, 175.3731075, '420'],
  [-37.85081775, 175.3829343167, '643'],
  [-37.8671912, 175.36468055, '352'],
  [-37.86727615, 175.36543555, '360'],
  [-37.8501304, 175.3806456, '637'],
  [-37.8673357333, 175.3661331333, '366A'],
  [-37.8673979333, 175.3667809, '366B'],
  [-37.8526604333, 175.3775103333, '591B'],
  [-37.8590671, 175.3777331, '525'],
  [-37.8604441333, 175.37691195, '511A'],
  [-37.8674681167, 175.3678874333, '374'],
  [-37.8677148833, 175.3698444833, '402'],
  [-37.8666863, 175.3663322333, '365'],
  [-37.8675554, 175.3754905167, '424A'],
  [-37.8676465167, 175.37623815, '424'],
  [-37.86661535, 175.37609495, '442'],
  [-37.8598401833, 175.3771549167, '511B'],
  [-37.8661314333, 175.3647742667, '353'],
  [-37.8666274333, 175.3736697167, '434'],
  [-37.8662379333, 175.3738677667, '438'],
  [-37.8520614, 175.3823100833, '613'],
  [-37.8521965167, 175.3812996167, '607'],
  [-37.85242245, 175.3821009333, '605'],
  [-37.8520654833, 175.3761835667, '591A'],
  [-37.8547938667, 175.3751005167, '591D'],
  [-37.8600232, 175.3780412167, '516'],
  [-37.8504624833, 175.3807091333, '635B'],
  [-37.86694425, 175.3698350167, '387'],
  [-37.8512808, 175.3826955167, '635A'],
  [-37.8626598333, 175.3763083833, '480'],
  [-37.8631832667, 175.3759811, '478'],
  [-37.8597738, 175.3758612333, '511'],
  [-37.8669354833, 175.3734885833, '432'],
  [-37.8660254333, 175.3741769333, '440'],
  [-37.8677621333, 175.3708737667, '418'],
  [-37.86470325, 175.3749985333, '456'],
  [-37.8496086167, 175.3843649167, '660'],
  [-37.8533389167, 175.3814388333, '599'],
  [-37.8513108, 175.3833057167, '636'],
  [-37.8582031333, 175.3789229667, '536'],
  [-37.8049091167, 175.4582433833, '111'],
  [-37.79217, 175.4610993667, '235'],
  [-37.7912009, 175.46131515, '243'],
  [-37.8073855167, 175.4519374833, '17'],
  [-37.7901330667, 175.4618390333, '259'],
  [-37.7979543, 175.46169615, '186'],
  [-37.7953406667, 175.4605087333, '199'],
  [-37.8075016167, 175.4517328833, '15'],
  [-37.7944439333, 175.4604859167, '221'],
  [-37.8960575333, 175.47501025, '14'],
  [-37.8979342, 175.4745448, '31A'],
  [-37.8968049167, 175.47448785, '24A'],
  [-37.8974204333, 175.475026, '25'],
  [-37.8977612, 175.47473925, '29'],
  [-37.89678435, 175.4748293, '20'],
  [-37.89589205, 175.4749720833, '12'],
  [-37.8966669, 175.4743795667, '22'],
  [-37.8958911333, 175.4761947, '5'],
  [-37.8971542833, 175.4752421167, '21'],
  [-37.8960713, 175.4760678, '7'],
  [-37.8971206833, 175.47398845, '30'],
  [-37.8959413333, 175.4751180667, '10A'],
  [-37.89774365, 175.4741330667, '40'],
  [-37.8964759167, 175.4757599833, '13'],
  [-37.8956967, 175.4756972333, '6'],
  [-37.8969728167, 175.4746339333, '24'],
  [-37.8975985667, 175.4742274833, '38'],
  [-37.8964206167, 175.4764929, '9'],
  [-37.89591475, 175.4748164, '14A'],
  [-37.8963322333, 175.4747763333, '18A'],
  [-37.8962043333, 175.4746025333, '18B'],
  [-37.8969914833, 175.47434705, '26A'],
  [-37.8975744667, 175.4748792167, '27'],
  [-37.8979075667, 175.4740015333, '42'],
  [-37.89599185, 175.4754597167, '10'],
  [-37.89628205, 175.4758701, '11'],
  [-37.8966986167, 175.4755950667, '15'],
  [-37.8954172667, 175.4758408833, '2'],
  [-37.8955642833, 175.47581195, '4'],
  [-37.8957927167, 175.4756119833, '8'],
  [-37.8974439333, 175.4743467667, '36'],
  [-37.8954518167, 175.4753103, '6A'],
  [-37.89718045, 175.4745253167, '26'],
  [-37.89567315, 175.4763134667, '1'],
  [-37.8957657667, 175.4763043333, '3'],
  [-37.8965164667, 175.4750518, '18'],
  [-37.89807905, 175.47440185, '31'],
  [-37.8968958, 175.4754382833, '17'],
  [-37.89631735, 175.4752079667, '16'],
  [-37.8972125833, 175.4741699833, '34'],
  [-37.8970015667, 175.47401225, '28'],
  [-37.9133573833, 175.4717484667, '287'],
  [-37.9048133167, 175.47635, '104'],
  [-37.9049925, 175.4762745167, '106'],
  [-37.90467735, 175.4753654167, '107'],
  [-37.90048465, 175.4783948167, '58'],
  [-37.8992426833, 175.4793293167, '42'],
  [-37.9046434667, 175.4764180667, '102'],
  [-37.91292555, 175.47197745, '285'],
  [-37.9061096167, 175.4751589833, '127'],
  [-37.9059487333, 175.4760527167, '120B'],
  [-37.9058349, 175.4758649667, '120A'],
  [-37.9046025333, 175.47507605, '107A'],
  [-37.9043145167, 175.4765927167, '98'],
  [-37.9026473833, 175.4773607333, '80'],
  [-37.8985112833, 175.4791536, '37'],
  [-37.90029415, 175.4779031333, '57'],
  [-37.9157889333, 175.4706511667, '307'],
  [-37.9161504167, 175.4698894, '317'],
  [-37.9162483333, 175.47040295, '315'],
  [-37.9119694833, 175.4724158167, '273'],
  [-37.9127305, 175.4727451167, '280A'],
  [-37.910892, 175.4729321833, '257'],
  [-37.91104955, 175.4723925167, '261'],
  [-37.91155295, 175.4731748833, '260'],
  [-37.9104050667, 175.4728724167, '249'],
  [-37.91055955, 175.4730871, '251'],
  [-37.9074686167, 175.4751091833, '188'],
  [-37.9079151, 175.4751543167, '192A'],
  [-37.9060373, 175.4757691167, '136'],
  [-37.90429105, 175.4760343833, '97'],
  [-37.9123212333, 175.4728413167, '276'],
  [-37.91122575, 175.4733142333, '240'],
  [-37.9028192, 175.4767472833, '83'],
  [-37.8979333667, 175.4794421167, '31'],
  [-37.8977516, 175.4801524833, '28'],
  [-37.89934065, 175.4785610667, '47'],
  [-37.9103580667, 175.4731422667, '247'],
  [-37.9106933167, 175.4735704667, '238'],
  [-37.90118205, 175.4774954833, '65'],
  [-37.9051274833, 175.4765782667, '106A'],
  [-37.9001666333, 175.4786251833, '54'],
  [-37.8996917833, 175.4776611333, '53A'],
  [-37.9157449833, 175.4701549667, '311'],
  [-37.8998454833, 175.47809685, '53'],
  [-37.8999531167, 175.4780619, '55'],
  [-37.9123259333, 175.4731539833, '274'],
  [-37.91203635, 175.4729645833, '262'],
  [-37.9025673667, 175.4766802, '79A'],
  [-37.8995076667, 175.4784470167, '49'],
  [-37.9160592167, 175.4710586333, '316'],
  [-37.9045513333, 175.4752828833, '105'],
  [-37.901886, 175.4778055167, '74B'],
  [-37.9007665833, 175.4782302, '60'],
  [-37.9027685, 175.4767654333, '81'],
  [-37.9042667667, 175.47545395, '99'],
  [-37.90210725, 175.4776131, '76'],
  [-37.914356, 175.4712761333, '299'],
  [-37.9037502167, 175.4768480333, '94'],
  [-37.8975508667, 175.48021795, '22'],
  [-37.9126604333, 175.4720775, '281'],
  [-37.90140745, 175.4783687833, '66'],
  [-37.9008916333, 175.4774276833, '63'],
  [-37.91678785, 175.47071965, '322'],
  [-37.9088462667, 175.4738790833, '227'],
  [-37.9123182167, 175.4722337, '277'],
  [-37.90000635, 175.47873665, '52'],
  [-37.9015533, 175.47851885, '70'],
  [-37.9015025333, 175.4779211333, '72'],
  [-37.9159910833, 175.4705165167, '313'],
  [-37.9138507667, 175.4715170333, '293'],
  [-37.9090778667, 175.4737512667, '229'],
  [-37.9128195833, 175.4726191, '282'],
  [-37.9131350667, 175.4724749667, '286'],
  [-37.913967, 175.4720198833, '294'],
  [-37.9129905, 175.4725340833, '284'],
  [-37.90123535, 175.4772228667, '67'],
  [-37.9143479, 175.4719130833, '298'],
  [-37.9126444833, 175.4726878, '280'],
  [-37.9165660167, 175.4702721167, '323'],
  [-37.8989755, 175.4782464167, '45'],
  [-37.9093448667, 175.47364355, '233'],
  [-37.91447635, 175.4712330833, '301'],
  [-37.9095208333, 175.4735786833, '235'],
  [-37.9096743333, 175.4741524, '232'],
  [-37.89939865, 175.47921515, '44'],
  [-37.9151960833, 175.4709698167, '305'],
  [-37.9097280833, 175.4745849333, '228'],
  [-37.9013794667, 175.47741285, '69'],
  [-37.9162268667, 175.47098265, '318'],
  [-37.8990613333, 175.4787713333, '43'],
  [-37.89780295, 175.4806196167, '26'],
  [-37.91541455, 175.4713506833, '306'],
  [-37.9097875333, 175.4748558667, '228A'],
  [-37.9081311333, 175.4748058, '196A'],
  [-37.9150421333, 175.4709822167, '303'],
  [-37.9053254667, 175.47610225, '114'],
  [-37.9065445333, 175.4749703667, '173'],
  [-37.9098205333, 175.4741548833, '234'],
  [-37.9081538667, 175.4750639167, '196'],
  [-37.9096973, 175.4748021167, '226A'],
  [-37.9093885667, 175.4742162667, '224A'],
  [-37.9091188, 175.4743508333, '222A'],
  [-37.90953665, 175.4733968, '235A'],
  [-37.90795735, 175.4748888667, '194'],
  [-37.9014723, 175.47869265, '68'],
  [-37.9095686833, 175.4733282167, '237A'],
  [-37.9090926833, 175.47436235, '222'],
  [-37.9012697667, 175.4780105833, '64'],
  [-37.9165941667, 175.4699768667, '325'],
  [-37.8983101833, 175.4790199333, '35A'],
  [-37.8989313833, 175.4795513167, '38'],
  [-37.9020688, 175.4782522167, '74'],
  [-37.91629055, 175.4698086667, '321'],
  [-37.90362685, 175.4769062, '92'],
  [-37.8978983167, 175.480096, '30'],
  [-37.9095879, 175.4744869833, '226'],
  [-37.8988477333, 175.4788966333, '41'],
  [-37.9144792667, 175.47185395, '300'],
  [-37.90345575, 175.4769852667, '90'],
  [-37.90295525, 175.4772238333, '84'],
  [-37.9155634, 175.47150915, '308A'],
  [-37.9077980667, 175.4749606833, '192B'],
  [-37.9024718333, 175.47689145, '79'],
  [-37.9010265333, 175.4781286667, '62'],
  [-37.9051546167, 175.4761810167, '108'],
  [-37.9027743667, 175.4772973, '82'],
  [-37.9113692333, 175.4732625, '242'],
  [-37.9061175, 175.4761095667, '140'],
  [-37.9126536833, 175.4718492, '283'],
  [-37.89984655, 175.47884775, '50'],
  [-37.8996625, 175.4783593833, '51'],
  [-37.9096838, 175.4734820333, '237'],
  [-37.9163971333, 175.4703382333, '319'],
  [-37.9019659333, 175.47801565, '74C'],
  [-37.9017677, 175.4778972667, '74A'],
  [-37.9082934833, 175.4747193, '198'],
  [-37.9124935167, 175.4721662833, '279'],
  [-37.9112822667, 175.4727057, '263'],
  [-37.9088314833, 175.4744561333, '220'],
  [-37.9140193667, 175.4723065, '294A'],
  [-37.9151048833, 175.4715047667, '302'],
  [-37.9155721667, 175.4712705333, '308'],
  [-37.91564375, 175.4698925833, '309'],
  [-37.9157315333, 175.4712060333, '310'],
  [-37.9158956833, 175.4711298667, '312'],
  [-37.9044821667, 175.4765082167, '100'],
  [-37.9045073333, 175.4759204333, '101'],
  [-37.9046759167, 175.4758561667, '103'],
  [-37.8983034667, 175.4792230333, '35'],
  [-37.8987899833, 175.4796567167, '36'],
  [-37.89867985, 175.4790447, '39'],
  [-37.8990768667, 175.47943105, '40'],
  [-37.8981085333, 175.4793068333, '33'],
  [-37.89915065, 175.4781128333, '45A'],
  [-37.8995490167, 175.4791011167, '46'],
  [-37.8997315333, 175.47899365, '48'],
  [-37.900319, 175.4785061, '56'],
  [-37.9056642333, 175.4759370167, '118'],
  [-37.9063413, 175.4756213333, '150'],
  [-37.8988354833, 175.47962055, '36A'],
  [-37.9029526, 175.4760132333, '87'],
  [-37.90312265, 175.4771544, '86'],
  [-37.9034438667, 175.4764194333, '91'],
  [-37.91418395, 175.4719746167, '296'],
  [-37.9140091667, 175.4714322, '295'],
  [-37.9141795833, 175.4713487, '297'],
  [-37.9138469333, 175.4720815833, '292'],
  [-37.91351575, 175.4716747833, '289'],
  [-37.9136813667, 175.4716021833, '291'],
  [-37.9139259667, 175.4722800333, '292A'],
  [-37.9136332, 175.4722156, '290'],
  [-37.9093265, 175.4742351667, '224'],
  [-37.8977406167, 175.4806423167, '24'],
  [-37.9048411167, 175.4757695667, '109'],
  [-37.9032051, 175.4765243833, '89'],
  [-37.91528, 175.4714141667, '304'],
  [-37.9032850667, 175.4770679, '88'],
  [-37.9158238167, 175.4703065333, '313A'],
  [-37.9064744333, 175.4758051, '150A'],
  [-37.9046115, 175.4767234667, '100A'],
  [-37.9076618833, 175.4744580667, '197'],
  [-37.9076246167, 175.4750397167, '190'],
  [-37.9026504333, 175.4768196167, '79B'],
  [-37.9051801167, 175.4756040167, '115'],
  [-37.89852955, 175.47974005, '34'],
  [-37.9075004, 175.47452445, '187'],
  [-37.90501535, 175.4756865333, '111'],
  [-37.9068534667, 175.4753966333, '180'],
  [-37.9029671, 175.4766338333, '85'],
  [-37.9065173667, 175.4755659333, '158'],
  [-37.9066938833, 175.4754834833, '166'],
  [-37.9061558333, 175.4757093333, '142'],
  [-37.90567525, 175.4753235167, '119'],
  [-37.9124889333, 175.4727737833, '278']
  ];

  dataLM2 = [
  [-37.8210922667, 175.2209316333, '2'],
  [-37.8210819833, 175.2213903167, '3'],
  [-37.8210881833, 175.2215004833, '3A'],
  [-37.8211946833, 175.2213655333, '1'],
  [-37.8209458667, 175.2214051333, '5'],
  [-37.8208292333, 175.2214374833, '7'],
  [-37.8325816, 175.2238798667, '537'],
  [-37.8315855167, 175.2279767, '454'],
  [-37.8096336833, 175.2223743833, '176'],
  [-37.80970685, 175.2221815833, '178'],
  [-37.8102146667, 175.2211562833, '190'],
  [-37.8088037167, 175.2242227, '156'],
  [-37.8112330167, 175.2193425667, '210'],
  [-37.8116368667, 175.2193005167, '212'],
  [-37.80812645, 175.2255449333, '146'],
  [-37.8080231333, 175.2286383167, '125'],
  [-37.8089538667, 175.2222222333, '174'],
  [-37.8080905833, 175.2275400667, '129'],
  [-37.808811, 175.2227592833, '172'],
  [-37.80832975, 175.2276898167, '131'],
  [-37.8089395333, 175.2281710333, '133'],
  [-37.8093421, 175.2274883167, '135'],
  [-37.8084820833, 175.22601925, '137'],
  [-37.80881015, 175.22622865, '139'],
  [-37.8090947667, 175.2263585667, '141'],
  [-37.8092962333, 175.2244872333, '147'],
  [-37.8091016667, 175.2249140167, '145'],
  [-37.8088785167, 175.2253611667, '143'],
  [-37.80825965, 175.22530115, '148'],
  [-37.80995685, 175.2238554333, '153'],
  [-37.80975435, 175.2238417833, '151'],
  [-37.80950755, 175.2237912, '149'],
  [-37.8092772667, 175.2231980833, '170'],
  [-37.8082753833, 175.20672975, '4'],
  [-37.8078434833, 175.211822, '56'],
  [-37.8083775667, 175.2090812333, '30B'],
  [-37.8084588, 175.2058838167, '174'],
  [-37.8088788333, 175.2062702833, '175'],
  [-37.8091632833, 175.20514875, '182A'],
  [-37.8094891167, 175.20384695, '202'],
  [-37.8156715667, 175.2034881667, '277'],
  [-37.8109189333, 175.2024631, '220'],
  [-37.8108164333, 175.2039622, '219'],
  [-37.8125773667, 175.2026079667, '238'],
  [-37.8125799333, 175.2032824, '241A'],
  [-37.8125869, 175.2037423833, '241C'],
  [-37.8140266833, 175.2025706, '256'],
  [-37.80932, 175.2051094333, '182B'],
  [-37.8098799667, 175.2040444167, '197'],
  [-37.8094298833, 175.20561245, '189'],
  [-37.8172409333, 175.2035291167, '287'],
  [-37.8232166667, 175.22452865, '2028'],
  [-37.8225024333, 175.2249944667, '2022'],
  [-37.82334135, 175.2244748667, '2030'],
  [-37.8229725333, 175.2246809333, '2026'],
  [-37.8224034667, 175.22507345, '2020'],
  [-37.8227806, 175.2248285833, '2024'],
  [-37.8178801, 175.2181871667, '6'],
  [-37.81811315, 175.2180543667, '4'],
  [-37.8181739833, 175.21851995, '1'],
  [-37.81797515, 175.2186312, '3'],
  [-37.8181787, 175.2176995, '2A'],
  [-37.8183385333, 175.21812895, '2'],
  [-37.8293053167, 175.2105357833, '31'],
  [-37.8309444333, 175.21208735, '16'],
  [-37.8306726667, 175.2115020833, '19'],
  [-37.8300903, 175.2120791, '26'],
  [-37.8289416167, 175.2113778333, '33'],
  [-37.8274969167, 175.2113355167, '53'],
  [-37.8199192667, 175.2173622833, '5A'],
  [-37.8200392833, 175.2174100167, '3'],
  [-37.8196328, 175.2167642, '18'],
  [-37.81752585, 175.2155467667, '22C'],
  [-37.81766615, 175.2153714167, '22B'],
  [-37.8179022667, 175.2151616833, '22A'],
  [-37.8191980333, 175.21664245, '20A'],
  [-37.81799325, 175.21565925, '20C'],
  [-37.8187486333, 175.2165228667, '20B'],
  [-37.81964875, 175.2172874167, '7'],
  [-37.81925545, 175.2171617, '11'],
  [-37.8190491667, 175.2170928333, '13'],
  [-37.8194515667, 175.2172147167, '9'],
  [-37.81981045, 175.21733245, '5B'],
  [-37.81876595, 175.2172445167, '15B'],
  [-37.8185999167, 175.2172441, '17A'],
  [-37.81816745, 175.21725905, '21B'],
  [-37.8182157167, 175.2164626333, '24'],
  [-37.8180109667, 175.2173984167, '23A'],
  [-37.8179918, 175.217159, '23B'],
  [-37.8188473167, 175.2170330333, '15'],
  [-37.8186481333, 175.2169800667, '17'],
  [-37.8184132, 175.2169327333, '19'],
  [-37.8202288333, 175.2174746333, '1'],
  [-37.818193, 175.2169955667, '21'],
  [-37.8178000833, 175.21733275, '25'],
  [-37.8176839, 175.2168488333, '26'],
  [-37.8198172, 175.2204960667, '5'],
  [-37.819986, 175.22049635, '3'],
  [-37.8197666, 175.2200825, '4'],
  [-37.8193835833, 175.2191669667, '10'],
  [-37.8193426333, 175.2198626667, '11'],
  [-37.8192171667, 175.2191711, '12'],
  [-37.8192621333, 175.2196364167, '13'],
  [-37.8195289667, 175.2193943167, '8'],
  [-37.81946, 175.2201499167, '9'],
  [-37.8196037833, 175.219674, '6'],
  [-37.8194712, 175.2204032, '7A'],
  [-37.8196381, 175.2203709333, '7'],
  [-37.8200137667, 175.2201364333, '2'],
  [-37.8191725167, 175.2193772833, '14'],
  [-37.8214417333, 175.2256822167, '4'],
  [-37.8210291, 175.2259429667, '8'],
  [-37.8212328333, 175.2258132, '6'],
  [-37.8216819833, 175.2253209, '3'],
  [-37.8334697167, 175.2038651667, '326'],
  [-37.8322603667, 175.2028621167, '317'],
  [-37.8322013667, 175.2046802667, '1/341'],
  [-37.8320576167, 175.2165535833, '435'],
  [-37.8319540333, 175.20506915, '2/341'],
  [-37.8316975667, 175.2053442333, '3/341'],
  [-37.8328229833, 175.2062598, '346'],
  [-37.83161565, 175.2074915, '355'],
  [-37.83219305, 175.20629425, '347'],
  [-37.8328549, 175.2080619667, '362'],
  [-37.8321289667, 175.2084019333, '367'],
  [-37.8322225167, 175.2120427667, '397'],
  [-37.8321649, 175.21119325, '393'],
  [-37.8321458833, 175.2131246333, '407'],
  [-37.8327043833, 175.21377405, '416'],
  [-37.8321267167, 175.2144058167, '417'],
  [-37.83212555, 175.2096521333, '373'],
  [-37.8331028667, 175.20928495, '366'],
  [-37.82866875, 175.22177625, '563'],
  [-37.8295602, 175.21924335, '582'],
  [-37.8304707833, 175.2182986167, '590'],
  [-37.83086, 175.2180687667, '592'],
  [-37.8328604833, 175.2172892167, '618'],
  [-37.8342575667, 175.2168357833, '638'],
  [-37.8239713, 175.2245693667, '504'],
  [-37.8365260167, 175.2170911, '673'],
  [-37.8233928833, 175.2249669167, '492'],
  [-37.8248650167, 175.2246300833, '509'],
  [-37.8191798333, 175.2265331667, '435'],
  [-37.8143243333, 175.2310940167, '368'],
  [-37.81459255, 175.2320046, '363'],
  [-37.81127515, 175.2356499167, '311'],
  [-37.8126359667, 175.2340855167, '333'],
  [-37.8096158333, 175.2375218167, '293'],
  [-37.8315868667, 175.2177722833, '604'],
  [-37.8160177667, 175.2299268333, '391'],
  [-37.8204715667, 175.2265481833, '456'],
  [-37.8206352, 175.2265670333, '458'],
  [-37.8208412667, 175.2265323333, '460'],
  [-37.8210184333, 175.22648325, '462'],
  [-37.8212643833, 175.2270422167, '465'],
  [-37.82119945, 175.2264274333, '464'],
  [-37.82136485, 175.2263145667, '466'],
  [-37.8215261, 175.22684075, '467'],
  [-37.8215301833, 175.2262078, '468'],
  [-37.8217701667, 175.2266360167, '1/471'],
  [-37.8218376833, 175.22686725, '2/471'],
  [-37.8217084667, 175.2260839667, '472'],
  [-37.8219782333, 175.2265028333, '475'],
  [-37.8218988833, 175.2259723, '476'],
  [-37.8223939333, 175.2262447, '479'],
  [-37.8223048667, 175.2256582833, '480'],
  [-37.8226657, 175.2261230833, '481'],
  [-37.8224199, 175.2255487833, '482'],
  [-37.8229134167, 175.2259527833, '485'],
  [-37.8226937833, 175.2253693167, '486'],
  [-37.8231509667, 175.2258170333, '487'],
  [-37.82295265, 175.2252571167, '488'],
  [-37.8233779, 175.2256743833, '489'],
  [-37.8232052667, 175.2251109333, '490'],
  [-37.8236200333, 175.22553395, '493'],
  [-37.82385775, 175.2253390833, '495'],
  [-37.8203220167, 175.22650925, '454'],
  [-37.8179795333, 175.2262826, '428'],
  [-37.81038215, 175.2365298167, '303'],
  [-37.8161746667, 175.2297239833, '393'],
  [-37.8083635333, 175.233955, '294'],
  [-37.82029495, 175.2214968167, '39'],
  [-37.8204754333, 175.2247793333, '12B'],
  [-37.8205440833, 175.22344905, '23'],
  [-37.8195974333, 175.2254019333, '2'],
  [-37.8210801, 175.2237748667, '20A'],
  [-37.8209057333, 175.22389775, '18'],
  [-37.8208016833, 175.2221582833, '32'],
  [-37.8209372667, 175.2236919, '20'],
  [-37.8210586833, 175.22351925, '22B'],
  [-37.82092905, 175.2234855333, '22'],
  [-37.8208587333, 175.2231887667, '24'],
  [-37.8210241167, 175.2230882, '24B'],
  [-37.8208547833, 175.2229410667, '26'],
  [-37.8209917, 175.2228447667, '26B'],
  [-37.82097645, 175.2227176167, '28B'],
  [-37.8208099167, 175.2226765167, '28'],
  [-37.8207666833, 175.2224338833, '30'],
  [-37.8209508833, 175.2222094167, '32B'],
  [-37.82076515, 175.2219195167, '34A'],
  [-37.8207399667, 175.2218131667, '34B'],
  [-37.8203075833, 175.2240482833, '19'],
  [-37.8205368167, 175.2237746667, '21'],
  [-37.8205025833, 175.2231658, '25A'],
  [-37.820465, 175.2229733667, '27'],
  [-37.82043535, 175.2227387, '29'],
  [-37.8204582, 175.2225319667, '31'],
  [-37.82024115, 175.2224347833, '31B'],
  [-37.8203792333, 175.2222631667, '33'],
  [-37.82034095, 175.2219843, '35'],
  [-37.8201566167, 175.2219446, '35B'],
  [-37.82030575, 175.2217594333, '37'],
  [-37.8202966833, 175.2233158167, '25'],
  [-37.8192714167, 175.2253842667, '1'],
  [-37.81969695, 175.22516645, '4'],
  [-37.8194904667, 175.22468815, '5'],
  [-37.8198524333, 175.2249096667, '6'],
  [-37.8200581833, 175.2247122, '8'],
  [-37.8193447, 175.2244639667, '5C'],
  [-37.8208238, 175.2241340167, '16'],
  [-37.8193183667, 175.22515695, '1A'],
  [-37.81940575, 175.2249383333, '3'],
  [-37.8211855167, 175.2242545333, '18A'],
  [-37.8207094833, 175.22430275, '14'],
  [-37.82027725, 175.22488135, '10A'],
  [-37.8202305833, 175.2245652667, '10'],
  [-37.8205049667, 175.2244201333, '12'],
  [-37.8196320333, 175.2255586, '22'],
  [-37.8209711, 175.2250444667, '8'],
  [-37.82120665, 175.2252942833, '5'],
  [-37.8210184, 175.2254290333, '7'],
  [-37.8213430333, 175.2252086167, '3'],
  [-37.8207887833, 175.2251555667, '10'],
  [-37.82060805, 175.2257042333, '13'],
  [-37.8208330333, 175.22553905, '9'],
  [-37.8216988833, 175.2249665667, '1'],
  [-37.8215665833, 175.2246573333, '2'],
  [-37.8213729, 175.2247789333, '4'],
  [-37.8211700667, 175.2249324333, '6'],
  [-37.8205967667, 175.2252867, '12'],
  [-37.8204008833, 175.2254234667, '14'],
  [-37.82043265, 175.22582195, '15'],
  [-37.8202037333, 175.2255415833, '16'],
  [-37.8200154333, 175.2256547667, '18'],
  [-37.8197443167, 175.2256164833, '20'],
  [-37.8202814333, 175.22590955, '17'],
  [-37.8202967667, 175.21462555, '98'],
  [-37.82204485, 175.21819735, '61B'],
  [-37.8224241, 175.2179326667, '61C'],
  [-37.8215043167, 175.2227943833, '24'],
  [-37.8219082, 175.2255408167, '8'],
  [-37.8216963, 175.2240856667, '14'],
  [-37.8213418333, 175.2188135667, '55'],
  [-37.8204966333, 175.2183406333, '54A'],
  [-37.8221799833, 175.21122085, '139'],
  [-37.8217387, 175.22431625, '12'],
  [-37.8218650167, 175.2149734167, '107'],
  [-37.8214083333, 175.2220152667, '30'],
  [-37.8213738333, 175.2217301, '32'],
  [-37.8221598167, 175.2247839333, '9'],
  [-37.8216356, 175.2235610667, '18'],
  [-37.8212188167, 175.2221387333, '30B'],
  [-37.8200466667, 175.2166111, '84A'],
  [-37.8216679333, 175.2238393333, '16'],
  [-37.8211582833, 175.22031685, '34'],
  [-37.8221918667, 175.2250378333, '7'],
  [-37.8187410167, 175.2067290167, '170C'],
  [-37.8206532, 175.2170745667, '81'],
  [-37.8212348667, 175.2181024167, '67'],
  [-37.8213057667, 175.2185351167, '57'],
  [-37.8214571, 175.2145877333, '110'],
  [-37.82207085, 175.2136727167, '121'],
  [-37.82190125, 175.2123493, '130'],
  [-37.8207519667, 175.2102467333, '150'],
  [-37.8212159, 175.2096407, '159'],
  [-37.8208313833, 175.2067756, '172'],
  [-37.8214413333, 175.2222779833, '28'],
  [-37.8206921333, 175.2182549, '54'],
  [-37.82043975, 175.2181215, '56'],
  [-37.8218791, 175.2252452167, '10'],
  [-37.82029435, 175.2169818, '84'],
  [-37.8215885167, 175.22308725, '22'],
  [-37.8215897333, 175.2233113167, '20'],
  [-37.82167455, 175.2183345, '61A'],
  [-37.8217164667, 175.2179857333, '63'],
  [-37.82147385, 175.22253565, '26'],
  [-37.8206765333, 175.2160304333, '86'],
  [-37.8188941, 175.2069437, '170A'],
  [-37.8188068333, 175.2068104833, '170B'],
  [-37.8193742667, 175.2085580333, '170'],
  [-37.8214388167, 175.2200072, '45'],
  [-37.8209547167, 175.2157149167, '92'],
  [-37.82088565, 175.2164849333, '85'],
  [-37.82136235, 175.2159546667, '97'],
  [-37.8219607333, 175.2232987, '19'],
  [-37.8210501, 175.2179753833, '69'],
  [-37.8212466667, 175.2222175833, '28A'],
  [-37.8213836167, 175.22300555, '22A'],
  [-37.821339, 175.2227439167, '24A'],
  [-37.8208144333, 175.2173117167, '77'],
  [-37.8189363667, 175.2211582333, '25'],
  [-37.8196676167, 175.2209947333, '26B'],
  [-37.8194113, 175.2211991, '26'],
  [-37.81883205, 175.2209747, '27'],
  [-37.8186925833, 175.2207728833, '29'],
  [-37.8199931833, 175.2240802167, '2'],
  [-37.8191759333, 175.2208279333, '30'],
  [-37.81835395, 175.2196571667, '39'],
  [-37.8198807333, 175.2235938167, '6'],
  [-37.8194567833, 175.22349015, '7'],
  [-37.8200507833, 175.21933875, '58'],
  [-37.8197902167, 175.2182408, '59A'],
  [-37.81991635, 175.21797195, '59B'],
  [-37.8198223833, 175.2179361833, '59C'],
  [-37.8201049333, 175.2197347167, '60'],
  [-37.8199380333, 175.21836645, '61A'],
  [-37.82003775, 175.2182443833, '61B'],
  [-37.8200944167, 175.21803015, '61C'],
  [-37.8201259667, 175.2185610667, '63'],
  [-37.82026275, 175.2188001167, '65'],
  [-37.8188917833, 175.2203729333, '34'],
  [-37.8184921333, 175.2203832, '33'],
  [-37.8190387167, 175.2206181333, '32'],
  [-37.81968705, 175.2224253667, '16'],
  [-37.81981205, 175.223119, '10'],
  [-37.8193882833, 175.2229798333, '11'],
  [-37.8190901167, 175.2227829833, '13B'],
  [-37.8193593, 175.2227247833, '13'],
  [-37.81993935, 175.2226893333, '14B'],
  [-37.81842725, 175.2201474167, '35'],
  [-37.8187965833, 175.2200475333, '36'],
  [-37.8183878167, 175.2198735667, '37'],
  [-37.8188702167, 175.2196982333, '38B'],
  [-37.82027885, 175.2209890667, '82'],
  [-37.8199839667, 175.2190668, '56'],
  [-37.8187008333, 175.21973745, '38A'],
  [-37.8196820167, 175.22262455, '14'],
  [-37.8186528333, 175.2191018, '42'],
  [-37.8182912167, 175.21915535, '43'],
  [-37.81870525, 175.21945675, '40'],
  [-37.8195044333, 175.2214081833, '24'],
  [-37.81857075, 175.2205925167, '31'],
  [-37.8195656167, 175.2181396, '57'],
  [-37.8198411667, 175.2213911167, '24A'],
  [-37.8195851667, 175.2240869667, '3'],
  [-37.8192829167, 175.2239720167, '3A'],
  [-37.8193257, 175.2224725667, '15'],
  [-37.8197290167, 175.2224129833, '16A'],
  [-37.8196499333, 175.2221262667, '18'],
  [-37.8196755333, 175.2243193333, '1'],
  [-37.8192091667, 175.22166805, '21'],
  [-37.81957585, 175.22166585, '22'],
  [-37.8199106833, 175.2238436, '4'],
  [-37.81953715, 175.22372785, '5A'],
  [-37.8193377833, 175.22378105, '5'],
  [-37.8189702833, 175.2184597333, '46'],
  [-37.8185876167, 175.21821495, '47A'],
  [-37.8185706333, 175.2178869167, '47B'],
  [-37.8191945667, 175.21845965, '48'],
  [-37.8188482167, 175.2176680833, '49'],
  [-37.8194043667, 175.21852395, '50'],
  [-37.8196233333, 175.2186248333, '52'],
  [-37.81920055, 175.2179787167, '53'],
  [-37.8198255, 175.2188011167, '54'],
  [-37.8205994333, 175.2207248667, '81'],
  [-37.8193045333, 175.2222075667, '17'],
  [-37.8205621167, 175.2204520167, '79'],
  [-37.8180799333, 175.2194407, '41A'],
  [-37.8208301833, 175.2206735833, '81A'],
  [-37.8202558, 175.2206809333, '80'],
  [-37.81941275, 175.21804965, '55'],
  [-37.8190239, 175.2179808833, '51'],
  [-37.8187854, 175.2180712167, '47'],
  [-37.8187476667, 175.2186516333, '44'],
  [-37.8182977, 175.21889655, '45'],
  [-37.81831675, 175.2194069833, '41'],
  [-37.8192735167, 175.2219502167, '19'],
  [-37.8196219167, 175.22189825, '20'],
  [-37.81962665, 175.2216432667, '22A'],
  [-37.8192782833, 175.2209942, '28'],
  [-37.8208129833, 175.2209176833, '83A'],
  [-37.8206351167, 175.2209705667, '83'],
  [-37.8203109333, 175.2212402667, '84'],
  [-37.81909575, 175.22139795, '23'],
  [-37.8197787167, 175.2228814, '12'],
  [-37.8195628333, 175.21791605, '57A'],
  [-37.8198373833, 175.2233606833, '8'],
  [-37.8194342167, 175.22322975, '9']
  ];

  dataMB = [
    [
        -151.5129,
        63.1016,
        0
    ],
    [
        -150.4048,
        63.1224,
        105.5
    ],
    [
        -151.3597,
        63.0781,
        0
    ],
    [
        -118.497,
        34.299667,
        7.64
    ],
    [
        -87.6901,
        12.0623,
        46.41
    ],
    [
        -151.5053,
        63.0719,
        0
    ],
    [
        -178.4576,
        -20.2873,
        614.26
    ],
    [
        -148.789,
        63.1725,
        7.5
    ],
    [
        -120.993164,
        36.421833,
        6.37
    ],
    [
        -117.0155,
        33.656333,
        12.37
    ],
    [
        -151.512,
        63.0879,
        10.8
    ],
    [
        -151.4378,
        63.0933,
        0
    ],
    [
        -149.6538,
        63.2272,
        96.8
    ],
    [
        -151.5325,
        63.0844,
        0
    ],
    [
        -149.4752,
        61.8518,
        54.3
    ],
    [
        -150.8597,
        61.6214,
        50
    ],
    [
        -149.7142,
        62.9656,
        93.6
    ],
    [
        -151.2484,
        61.2705,
        69.1
    ],
    [
        -152.0732,
        65.5942,
        14.8
    ],
    [
        -90.5445,
        13.5146,
        54.36
    ],
    [
        -118.819504,
        37.605499,
        4.14
    ],
    [
        -118.930168,
        37.636833,
        -0.71
    ],
    [
        -117.509167,
        34.1555,
        16.34
    ],
    [
        -116.792167,
        33.5115,
        5.16
    ],
    [
        -150.9126,
        63.1812,
        150.4
    ],
    [
        -155.078659,
        19.374167,
        2.15
    ],
    [
        -147.3106,
        61.5726,
        26.9
    ],
    [
        -150.5846,
        60.2607,
        34.2
    ],
    [
        -116.929,
        34.254833,
        18.27
    ],
    [
        -151.5065,
        63.0847,
        0
    ],
    [
        -147.8929,
        63.5257,
        3.3
    ],
    [
        -175.7258,
        -18.9821,
        195.22
    ],
    [
        -151.3473,
        63.0775,
        0
    ],
    [
        -121.137497,
        36.579834,
        7.72
    ],
    [
        -151.1075,
        61.8312,
        71.7
    ],
    [
        -151.3769,
        63.0621,
        0
    ],
    [
        -94.8319,
        16.7195,
        58.84
    ],
    [
        -120.689833,
        47.049167,
        5.38
    ],
    [
        -151.5283,
        63.0785,
        0
    ],
    [
        -151.6683,
        60.7696,
        67.1
    ],
    [
        -149.7591,
        61.6478,
        30.6
    ],
    [
        -151.3458,
        63.0633,
        0
    ],
    [
        -151.4669,
        63.0675,
        3.4
    ],
    [
        -151.5169,
        63.083,
        1
    ],
    [
        -151.4771,
        63.0742,
        4.3
    ],
    [
        -151.458,
        63.1276,
        14.9
    ],
    [
        -94.9686,
        16.6087,
        69.65
    ],
    [
        -119.023666,
        37.605335,
        1.97
    ],
    [
        -116.793833,
        33.493,
        3.65
    ],
    [
        -117.225,
        34.0335,
        0.39
    ],
    [
        -151.0033,
        63.2623,
        0.9
    ],
    [
        -177.3179,
        -30.4302,
        10
    ],
    [
        -154.1913,
        58.5727,
        85.2
    ],
    [
        -113.140503,
        38.030666,
        7.29
    ],
    [
        -122.765663,
        38.789166,
        2.09
    ],
    [
        -121.678001,
        37.621498,
        4.39
    ],
    [
        -148.8813,
        63.1738,
        75.2
    ],
    [
        -149.531,
        61.7978,
        14.8
    ],
    [
        -155.423492,
        19.223499,
        34.62
    ],
    [
        -138.8317,
        59.7754,
        0
    ],
    [
        -122.793999,
        38.8255,
        2.24
    ],
    [
        -155.32016,
        19.338667,
        4.3
    ],
    [
        -158.4264,
        67.7636,
        0
    ],
    [
        -136.5725,
        59.8372,
        0
    ],
    [
        -71.7814,
        -32.4981,
        23.29
    ],
    [
        -115.9711,
        36.3094,
        7.8
    ],
    [
        -163.8046,
        65.9499,
        0
    ],
    [
        -147.8309,
        63.376,
        82
    ],
    [
        -122.724167,
        38.760334,
        1.16
    ],
    [
        -77.9778,
        -1.6647,
        147.34
    ],
    [
        -150.3324,
        62.9966,
        88.4
    ],
    [
        -146.4858,
        64.7593,
        11.3
    ],
    [
        -177.7469,
        -33.0092,
        10
    ],
    [
        -136.8133,
        59.8473,
        0
    ],
    [
        -116.673833,
        33.904333,
        35.76
    ],
    [
        -155.382172,
        19.23,
        34.41
    ],
    [
        -153.427,
        66.3947,
        5.8
    ],
    [
        -116.457667,
        34.326,
        2.73
    ],
    [
        -112.529833,
        46.865833,
        9.91
    ],
    [
        -122.791832,
        38.834835,
        1.65
    ],
    [
        -118.9071,
        38.405,
        11.4
    ],
    [
        -116.793833,
        33.486833,
        4.21
    ],
    [
        130.1291,
        -6.3628,
        156.49
    ],
    [
        -83.749833,
        36.150333,
        14.1
    ],
    [
        -120.900833,
        36.327168,
        6.31
    ],
    [
        -153.0276,
        62.5667,
        0
    ],
    [
        -138.5063,
        59.957,
        0
    ],
    [
        -122.792,
        38.834835,
        1.77
    ],
    [
        -112.530833,
        46.869333,
        10.71
    ],
    [
        -69.504,
        -16.7961,
        178.13
    ],
    [
        -118.831169,
        37.4585,
        2.53
    ],
    [
        -112.516333,
        46.8755,
        11.43
    ],
    [
        -118.816666,
        37.603832,
        4.04
    ],
    [
        -116.655333,
        34.632,
        5.34
    ],
    [
        -177.8808,
        51.3254,
        31.7
    ],
    [
        -115.1285,
        37.4041,
        0.5
    ],
    [
        -118.817169,
        37.604168,
        4.02
    ],
    [
        69.1471,
        -23.7671,
        10
    ],
    [
        -121.101166,
        40.842499,
        6.01
    ],
    [
        132.668,
        1.1151,
        7.01
    ],
    [
        -116.462667,
        33.466333,
        5.78
    ],
    [
        -141.2596,
        60.2328,
        0
    ],
    [
        -141.2013,
        60.2021,
        10.5
    ],
    [
        -149.7575,
        62.4396,
        50.8
    ],
    [
        -152.3178,
        60.5797,
        88.2
    ],
    [
        -116.460167,
        34.3335,
        2.89
    ],
    [
        -116.468167,
        34.333167,
        2.87
    ],
    [
        -116.793,
        33.490333,
        4.58
    ],
    [
        -118.566333,
        35.339667,
        7.86
    ],
    [
        -178.3171,
        -33.0297,
        10
    ],
    [
        -122.795998,
        38.826,
        2.32
    ],
    [
        -117.1247,
        37.3789,
        8.2
    ],
    [
        -147.2293,
        64.9749,
        0
    ],
    [
        152.3636,
        -10.0109,
        10
    ],
    [
        73.3529,
        39.6124,
        10
    ],
    [
        -152.4583,
        60.3395,
        72.9
    ],
    [
        138.9649,
        43.0121,
        217.94
    ],
    [
        -117.1198,
        37.3861,
        8.7
    ],
    [
        -116.955667,
        34.34,
        -0.29
    ],
    [
        -122.991667,
        46.572333,
        -0.3
    ],
    [
        -120.747,
        39.8477,
        10
    ],
    [
        -120.753833,
        39.8485,
        6.72
    ],
    [
        -121.127,
        36.566667,
        9.16
    ],
    [
        145.6471,
        17.7456,
        196.33
    ],
    [
        -108.8949,
        32.7663,
        5
    ],
    [
        -121.155667,
        36.5565,
        6.94
    ],
    [
        -116.991,
        32.578667,
        2.62
    ],
    [
        -98.7321,
        36.481,
        5.37
    ],
    [
        -122.178833,
        38.107,
        -0.02
    ],
    [
        -148.1644,
        62.2007,
        15.5
    ],
    [
        -150.5804,
        63.1717,
        121.4
    ],
    [
        -121.688667,
        37.5335,
        6.91
    ],
    [
        -117.516,
        33.860833,
        0.62
    ],
    [
        -136.6965,
        59.7754,
        0
    ],
    [
        -98.2269,
        36.6265,
        5.07
    ],
    [
        -146.3172,
        63.6837,
        3.7
    ],
    [
        -117.646667,
        36.148333,
        0.93
    ],
    [
        -118.1915,
        35.0025,
        -0.87
    ],
    [
        -118.803333,
        37.457667,
        -0.31
    ],
    [
        -121.7105,
        43.553333,
        7.02
    ],
    [
        -112.477167,
        45.9945,
        -2
    ],
    [
        -116.362,
        32.941333,
        10.15
    ],
    [
        -148.9279,
        62.7834,
        4.5
    ],
    [
        68.9568,
        -49.2119,
        13.54
    ],
    [
        -111.457,
        42.633167,
        4.91
    ],
    [
        -121.962333,
        37.920333,
        -0.33
    ],
    [
        86.7487,
        30.0165,
        10
    ],
    [
        -118.351667,
        35.052833,
        -1.01
    ],
    [
        -15.5503,
        -35.3171,
        10
    ],
    [
        -149.9372,
        62.1214,
        48.9
    ],
    [
        -118.6177,
        38.5802,
        5.9
    ],
    [
        143.7841,
        37.4191,
        31.5
    ],
    [
        -112.5305,
        46.867167,
        12.62
    ],
    [
        -111.460333,
        42.602667,
        6.75
    ],
    [
        -118.803333,
        37.457333,
        0.99
    ],
    [
        -116.2815,
        35.633833,
        6.15
    ],
    [
        -116.314167,
        34.0145,
        2.75
    ],
    [
        -150.0099,
        66.2332,
        1.8
    ],
    [
        -122.706,
        38.783667,
        2.5
    ],
    [
        -112.5315,
        46.8575,
        12.4
    ],
    [
        -117.019833,
        33.876,
        -0.6
    ],
    [
        -153.2441,
        60.1679,
        148.9
    ],
    [
        141.1969,
        37.0997,
        47.42
    ],
    [
        -156.519,
        67.5663,
        0
    ],
    [
        -115.894167,
        31.614,
        5.89
    ],
    [
        -152.1925,
        59.8037,
        20
    ],
    [
        -111.436333,
        42.554833,
        9.68
    ],
    [
        -119.9267,
        39.4223,
        8.7
    ],
    [
        -118.476667,
        35.752167,
        2.24
    ],
    [
        -118.9217,
        38.4131,
        8.7
    ],
    [
        95.0977,
        12.0039,
        21.82
    ],
    [
        -150.4456,
        63.3167,
        112
    ],
    [
        -149.6485,
        60.9026,
        21.1
    ],
    [
        -122.7755,
        38.805167,
        0.72
    ],
    [
        -117.445,
        34.226167,
        12.35
    ],
    [
        -122.797333,
        38.813499,
        2.36
    ],
    [
        -122.806167,
        38.822333,
        1.56
    ],
    [
        -147.164,
        63.5211,
        0
    ],
    [
        -122.600333,
        38.771667,
        0.05
    ],
    [
        -112.557667,
        46.894167,
        9.91
    ],
    [
        -118.798333,
        37.565333,
        -0.35
    ],
    [
        -117.757833,
        34.172833,
        6.62
    ],
    [
        -118.355667,
        35.822833,
        16.75
    ],
    [
        155.9405,
        -6.8684,
        106.51
    ],
    [
        -122.509333,
        45.6895,
        9.57
    ],
    [
        -116.8455,
        34.000333,
        9.47
    ],
    [
        -114.5795,
        44.259167,
        3.88
    ],
    [
        -110.322167,
        43.681333,
        9.95
    ],
    [
        -178.2949,
        51.2318,
        28
    ],
    [
        -156.0402,
        65.2966,
        0.1
    ],
    [
        -155.42366,
        19.2805,
        7.76
    ],
    [
        -155.248833,
        18.876833,
        12.183
    ],
    [
        -151.1519,
        63.251,
        0
    ],
    [
        119.9639,
        -0.4925,
        44.07
    ],
    [
        -150.7545,
        61.5105,
        70.6
    ],
    [
        -156.2205,
        19.380333,
        14.051
    ],
    [
        -115.2224,
        39.4096,
        5.7
    ],
    [
        -118.8245,
        37.483833,
        5.31
    ],
    [
        143.9537,
        37.485,
        10
    ],
    [
        -111.444,
        42.660667,
        5.95
    ],
    [
        -136.7235,
        59.8808,
        0
    ],
    [
        -115.997833,
        47.455667,
        1.73
    ],
    [
        146.6145,
        13.8504,
        10
    ],
    [
        -148.7833,
        64.8537,
        19.7
    ],
    [
        -67.92,
        49.06,
        22
    ],
    [
        -150.3206,
        61.7195,
        41
    ],
    [
        -115.557333,
        32.948833,
        3.78
    ],
    [
        -111.4493,
        42.6517,
        7.67
    ],
    [
        -122.801167,
        38.822,
        2.67
    ],
    [
        -122.478167,
        38.6015,
        12.1
    ],
    [
        178.4985,
        51.6139,
        71.76
    ],
    [
        -111.455333,
        42.652833,
        2.92
    ],
    [
        -148.2116,
        64.2744,
        14.8
    ],
    [
        -155.428833,
        19.329,
        10.185
    ],
    [
        -118.823167,
        37.607,
        4
    ],
    [
        -112.532167,
        46.873,
        11.23
    ],
    [
        -64.1261,
        -17.5702,
        36.33
    ],
    [
        -116.434833,
        33.0315,
        3.46
    ],
    [
        -122.7915,
        38.8195,
        1.42
    ],
    [
        -122.2,
        47.583333,
        23.03
    ],
    [
        -122.200333,
        47.583833,
        23.12
    ],
    [
        -111.494833,
        42.639667,
        0.79
    ],
    [
        -121.9235,
        39.599833,
        20.91
    ],
    [
        -118.831,
        37.5295,
        5.95
    ],
    [
        -122.403,
        38.364167,
        8.42
    ],
    [
        151.9528,
        -10.3953,
        10
    ],
    [
        -151.3718,
        63.0764,
        0
    ],
    [
        -121.744833,
        47.490167,
        16.4
    ],
    [
        -149.6057,
        63.4194,
        106.4
    ],
    [
        -122.822,
        38.814833,
        1.61
    ],
    [
        -125.777167,
        41.2375,
        7.51
    ],
    [
        -151.063,
        65.8813,
        12.8
    ],
    [
        -116.7975,
        33.5,
        5.36
    ],
    [
        -116.875167,
        33.957,
        3.47
    ],
    [
        -25.496,
        0.9934,
        10
    ],
    [
        152.1867,
        -9.9486,
        10
    ],
    [
        -111.414167,
        42.5485,
        6.65
    ],
    [
        -118.9395,
        37.636,
        5.66
    ],
    [
        -114.857,
        37.3396,
        3.9
    ],
    [
        -111.672333,
        39.4485,
        12.04
    ],
    [
        -140.6081,
        61.1327,
        14.5
    ],
    [
        -116.598667,
        33.450667,
        7.77
    ],
    [
        -117.0539,
        37.1082,
        8.1
    ],
    [
        -119.377167,
        34.427,
        9.46
    ],
    [
        -71.348,
        -29.925,
        48.8
    ],
    [
        -122.395167,
        45.685667,
        -0.74
    ],
    [
        -118.8105,
        37.472,
        6.12
    ],
    [
        -122.7825,
        38.7915,
        0.56
    ],
    [
        -112.529,
        46.871167,
        12.6
    ],
    [
        -147.2289,
        64.9761,
        0
    ],
    [
        -151.1245,
        62.4971,
        81.1
    ],
    [
        -122.808,
        38.822,
        1.64
    ],
    [
        -123.588667,
        40.652333,
        25.1
    ],
    [
        -149.857,
        61.9122,
        45
    ],
    [
        144.6063,
        21.8848,
        100.39
    ],
    [
        -152.192,
        61.0044,
        106
    ],
    [
        -149.939,
        62.7658,
        79.9
    ],
    [
        -111.418167,
        42.544333,
        6.24
    ],
    [
        -111.4355,
        42.5495,
        8.32
    ],
    [
        -110.965,
        43.357333,
        5.92
    ],
    [
        -120.549833,
        49.328833,
        -0.06
    ],
    [
        -140.5289,
        61.2012,
        0.4
    ],
    [
        -136.701,
        59.032,
        0
    ],
    [
        -117.817167,
        47.392167,
        -0.46
    ],
    [
        -118.8365,
        37.482833,
        1.23
    ],
    [
        -151.0124,
        65.8954,
        7.6
    ],
    [
        -116.794167,
        33.508667,
        6.47
    ],
    [
        -112.525667,
        46.872833,
        11.13
    ],
    [
        -145.3071,
        63.3209,
        6.3
    ],
    [
        -145.414,
        63.3343,
        0
    ],
    [
        -151.0004,
        65.8966,
        0
    ],
    [
        -152.6575,
        60.1339,
        106.4
    ],
    [
        -122.810167,
        38.8205,
        2.04
    ],
    [
        -127.192,
        40.163167,
        11.62
    ],
    [
        -155.289833,
        19.374,
        1.772
    ],
    [
        -151.0126,
        65.8742,
        0.1
    ],
    [
        -150.9865,
        65.9098,
        0
    ],
    [
        -118.837167,
        37.504167,
        0.07
    ],
    [
        -117.491,
        33.846167,
        -0.48
    ],
    [
        -122.104833,
        37.324833,
        -0.31
    ],
    [
        -147.7663,
        63.5209,
        14.5
    ],
    [
        -122.3835,
        40.709833,
        19.57
    ],
    [
        -151.0051,
        65.8735,
        0
    ],
    [
        -122.194667,
        40.598333,
        15.65
    ],
    [
        -116.072333,
        33.020667,
        -0.8
    ],
    [
        -150.785,
        60.8774,
        34.8
    ],
    [
        -117.720667,
        36.004,
        2.64
    ],
    [
        -122.8105,
        38.821167,
        1.64
    ],
    [
        -155.252167,
        18.903833,
        12.692
    ],
    [
        -163.5871,
        67.3896,
        1.2
    ],
    [
        -151.1613,
        62.9421,
        105.5
    ],
    [
        -112.711,
        37.088833,
        8.72
    ],
    [
        -111.413167,
        42.600333,
        6.09
    ],
    [
        -155.600174,
        19.477667,
        2.61
    ],
    [
        -112.4755,
        46.855833,
        10.1
    ],
    [
        -118.817667,
        37.607833,
        4.46
    ],
    [
        127.6953,
        -3.0506,
        46.98
    ],
    [
        -141.1068,
        64.723,
        3.3
    ],
    [
        -120.786667,
        35.167,
        4.77
    ],
    [
        -155.9487,
        67.1103,
        6
    ],
    [
        -118.2355,
        35.399833,
        11.83
    ],
    [
        -75.237833,
        44.094,
        4
    ],
    [
        -118.883667,
        37.539333,
        2.63
    ],
    [
        -121.924167,
        46.832167,
        9.6
    ],
    [
        -155.427667,
        19.767167,
        23.499
    ],
    [
        -112.482833,
        46.8195,
        2.22
    ],
    [
        -116.010667,
        33.179667,
        8.09
    ],
    [
        -111.086833,
        44.772167,
        11.73
    ],
    [
        -151.3491,
        63.087,
        0
    ],
    [
        -116.294333,
        34.679333,
        2.44
    ],
    [
        -159.6654,
        67.5326,
        0
    ],
    [
        -122.798167,
        38.793833,
        3.66
    ],
    [
        -146.4807,
        64.7367,
        8.7
    ],
    [
        -122.192333,
        47.183667,
        14.42
    ],
    [
        -178.1435,
        51.4576,
        12.9
    ],
    [
        -122.8035,
        38.791333,
        3.29
    ],
    [
        126.4874,
        7.3643,
        10
    ],
    [
        -114.476333,
        44.006167,
        5
    ],
    [
        -149.9384,
        64.5888,
        18.4
    ],
    [
        49.1899,
        31.277,
        10
    ],
    [
        -110.318333,
        46.1425,
        12.9
    ],
    [
        -110.317333,
        46.126333,
        14.98
    ],
    [
        -116.290167,
        34.678,
        2.65
    ],
    [
        178.5051,
        -25.068,
        564.41
    ],
    [
        -117.412333,
        35.621833,
        7.71
    ],
    [
        -110.989667,
        43.0535,
        5.98
    ],
    [
        -136.8165,
        59.7884,
        0
    ],
    [
        -110.3,
        46.1355,
        13.17
    ],
    [
        -136.8358,
        59.8781,
        1.7
    ],
    [
        -68.5742,
        -22.4118,
        112.87
    ],
    [
        -123.472,
        40.616833,
        21.52
    ],
    [
        -152.611,
        63.1832,
        11.4
    ],
    [
        -115.7095,
        33.2065,
        10.46
    ],
    [
        -155.2125,
        19.363,
        1.776
    ],
    [
        -122.236667,
        37.334333,
        8.36
    ],
    [
        -116.2315,
        32.416667,
        18.41
    ],
    [
        -111.442667,
        42.578833,
        3.5
    ],
    [
        -112.527833,
        46.866167,
        12.04
    ],
    [
        -155.470673,
        19.211,
        37.73
    ],
    [
        -122.572333,
        39.013167,
        -0.67
    ],
    [
        -111.301167,
        39.1075,
        2.75
    ],
    [
        -116.372167,
        33.358833,
        11.42
    ],
    [
        -116.366,
        33.357667,
        11.67
    ],
    [
        -122.191167,
        47.179833,
        15.66
    ],
    [
        -83.742167,
        35.985167,
        18.08
    ],
    [
        -118.819,
        37.603333,
        3.65
    ],
    [
        -117.394,
        35.618833,
        8.88
    ],
    [
        -151.3822,
        60.6535,
        53.1
    ],
    [
        -145.2677,
        63.314,
        4.9
    ],
    [
        -117.806833,
        36.043833,
        1.22
    ],
    [
        -117.807333,
        36.043167,
        1.21
    ],
    [
        -122.7625,
        38.821667,
        1.49
    ],
    [
        -118.319833,
        33.886333,
        15.24
    ],
    [
        -153.0253,
        59.7752,
        99.4
    ],
    [
        -150.9621,
        62.3999,
        67.6
    ],
    [
        -122.793167,
        38.814333,
        3.4
    ],
    [
        -122.792,
        38.813833,
        3.02
    ],
    [
        -151.5816,
        59.9877,
        48.6
    ],
    [
        -122.048833,
        48.836333,
        3.53
    ],
    [
        -112.526667,
        46.874333,
        12.15
    ],
    [
        -111.415167,
        42.5495,
        8.84
    ],
    [
        -116.846167,
        33.711167,
        14.99
    ],
    [
        -122.027667,
        48.845833,
        0.9
    ],
    [
        -112.880667,
        37.041,
        17
    ],
    [
        -122.7565,
        38.782501,
        0.82
    ],
    [
        -122.753167,
        38.775667,
        1.61
    ],
    [
        -151.2568,
        63.5162,
        8.6
    ],
    [
        -118.808667,
        37.467667,
        1.31
    ],
    [
        -116.3645,
        33.350667,
        11.33
    ],
    [
        -116.3545,
        33.3525,
        12.25
    ],
    [
        -152.901,
        58.3623,
        46.5
    ],
    [
        -117.805167,
        36.042,
        1.36
    ],
    [
        -150.1162,
        61.3056,
        37.1
    ],
    [
        -117.7192,
        37.7977,
        0
    ],
    [
        -98.7663,
        36.4461,
        6.31
    ],
    [
        -150.5337,
        60.8331,
        35.1
    ],
    [
        -116.435667,
        33.033167,
        6.13
    ],
    [
        -121.975,
        40.912333,
        6.11
    ],
    [
        -165.8816,
        53.7666,
        69.3
    ],
    [
        -98.755,
        36.45,
        7.23
    ],
    [
        -116.6665,
        33.961333,
        15.54
    ],
    [
        -124.311667,
        40.594833,
        17.71
    ],
    [
        -162.2549,
        67.5542,
        0
    ],
    [
        -112.529,
        46.873667,
        10.6
    ],
    [
        -114.8195,
        37.303,
        0
    ],
    [
        -117.801333,
        36.0425,
        0.57
    ],
    [
        -116.352833,
        33.1335,
        7.01
    ],
    [
        -116.758833,
        33.67,
        13.89
    ],
    [
        -150.7536,
        62.8345,
        98
    ],
    [
        -147.4466,
        64.9696,
        1.5
    ],
    [
        -151.3316,
        62.6072,
        87.5
    ],
    [
        -66.7169,
        -23.9861,
        195.32
    ],
    [
        -112.531,
        46.862667,
        9.74
    ],
    [
        -150.2126,
        62.1419,
        50.6
    ],
    [
        -110.326833,
        46.116,
        15.12
    ],
    [
        -98.7425,
        36.4507,
        4.85
    ],
    [
        -151.2414,
        61.1185,
        60.5
    ],
    [
        -117.803667,
        36.042,
        1.12
    ],
    [
        -112.529,
        46.875,
        11
    ],
    [
        -117.805667,
        36.044667,
        1.33
    ],
    [
        -118.821833,
        37.603167,
        4.37
    ],
    [
        -122.802,
        38.819667,
        3.31
    ],
    [
        -116.796667,
        33.506833,
        4.99
    ],
    [
        -117.805333,
        36.044167,
        1.08
    ],
    [
        -117.803833,
        36.0435,
        1.58
    ],
    [
        -117.986333,
        37.451833,
        11.44
    ],
    [
        -94.5193,
        15.6807,
        43.81
    ],
    [
        -112.249667,
        45.922167,
        -2
    ],
    [
        -114.5709,
        37.2677,
        5.8
    ],
    [
        -122.029167,
        48.8415,
        0.56
    ],
    [
        -156.904,
        54.6732,
        0
    ],
    [
        -116.937167,
        32.9105,
        -0.2
    ],
    [
        -155.0805,
        19.384667,
        3.233
    ],
    [
        -116.469333,
        33.481,
        7.42
    ],
    [
        -118.7775,
        34.859167,
        -1.14
    ],
    [
        -148.9048,
        62.8046,
        5.4
    ],
    [
        -149.3904,
        61.7684,
        33.4
    ],
    [
        -118.835,
        37.6255,
        3.28
    ],
    [
        -116.282833,
        33.307,
        10.02
    ],
    [
        -108.5682,
        23.7468,
        10
    ],
    [
        -124.101667,
        47.519667,
        24.66
    ],
    [
        -150.9792,
        59.2967,
        30
    ],
    [
        -118.590333,
        37.9535,
        3.71
    ],
    [
        -122.807335,
        38.823166,
        0.51
    ],
    [
        -118.191,
        34.995667,
        -0.84
    ],
    [
        -118.8315,
        37.459167,
        2.81
    ],
    [
        -121.127667,
        36.540667,
        3.02
    ],
    [
        -112.466667,
        46.003833,
        -2
    ],
    [
        -151.2987,
        62.9001,
        136.4
    ],
    [
        -121.125833,
        36.539667,
        3.42
    ],
    [
        -151.9517,
        60.4284,
        76.1
    ],
    [
        -147.4575,
        68.4924,
        0
    ],
    [
        69.2314,
        -22.7343,
        10
    ],
    [
        -95.0179,
        16.6332,
        10
    ],
    [
        -115.6247,
        38.6437,
        2.8
    ],
    [
        -117.480167,
        33.8245,
        -0.64
    ],
    [
        -118.843333,
        37.550333,
        -1.19
    ],
    [
        -121.9105,
        37.975,
        2.7
    ],
    [
        -118.839167,
        37.554167,
        -0.37
    ],
    [
        -118.848,
        37.565167,
        -0.65
    ],
    [
        -150.5043,
        63.2003,
        100.7
    ],
    [
        -120.0698,
        39.2152,
        9.9
    ],
    [
        -111.438667,
        42.623,
        -0.06
    ],
    [
        -148.7521,
        62.788,
        15
    ],
    [
        -98.036,
        37.001167,
        5.77
    ],
    [
        -117.469667,
        34.0245,
        -0.75
    ],
    [
        -121.407833,
        36.764667,
        10.33
    ],
    [
        -149.2816,
        62.4313,
        44.6
    ],
    [
        -116.797167,
        33.499,
        4.25
    ],
    [
        -118.9268,
        38.3958,
        7.6
    ],
    [
        -121.614333,
        36.881,
        6.94
    ],
    [
        -121.609333,
        36.8815,
        6.65
    ],
    [
        -151.032,
        63.5134,
        6.3
    ],
    [
        -94.7831,
        15.8774,
        9.59
    ],
    [
        -151.5468,
        62.9914,
        0
    ],
    [
        -150.8528,
        63.1143,
        130.4
    ],
    [
        -78.3466,
        -0.2479,
        10
    ],
    [
        -119.8623,
        39.6344,
        5.8
    ],
    [
        -94.219,
        14.9246,
        35
    ],
    [
        -116.979333,
        33.952,
        16.95
    ],
    [
        -117.153667,
        33.576,
        12.56
    ],
    [
        -154.0651,
        59.0371,
        113.6
    ],
    [
        -150.7431,
        61.7579,
        50
    ],
    [
        -145.2404,
        63.315,
        3.6
    ],
    [
        -117.047667,
        33.9995,
        14.99
    ],
    [
        -152.038,
        61.8748,
        115.1
    ],
    [
        -138.3287,
        60.8439,
        0
    ],
    [
        -112.520833,
        46.866833,
        12.33
    ],
    [
        -150.7265,
        59.549,
        35.9
    ],
    [
        -149.561,
        63.6903,
        125.8
    ],
    [
        -122.793,
        38.8355,
        1.85
    ],
    [
        -116.608833,
        33.080833,
        11.8
    ],
    [
        -120.942,
        36.506,
        4.31
    ],
    [
        -111.414333,
        42.55,
        7.34
    ],
    [
        -121.365667,
        36.7845,
        3.47
    ],
    [
        -112.527833,
        46.867833,
        13.28
    ],
    [
        -117.5975,
        34.0275,
        11.16
    ],
    [
        -122.59,
        39.034,
        1.81
    ],
    [
        -155.4053,
        65.8348,
        0
    ],
    [
        -116.243833,
        34.561167,
        7.55
    ],
    [
        -122.3995,
        47.466167,
        20.06
    ],
    [
        -151.3314,
        63.0932,
        0
    ],
    [
        -121.831667,
        37.479167,
        7.18
    ],
    [
        -94.0265,
        15.081,
        39.52
    ],
    [
        -113.109167,
        37.453,
        7.33
    ],
    [
        -118.886,
        37.634,
        6.9
    ],
    [
        -118.873,
        37.655,
        2.24
    ],
    [
        -136.6853,
        59.7843,
        0
    ],
    [
        -121.174833,
        36.7355,
        8.83
    ],
    [
        -152.599,
        58.1927,
        18
    ],
    [
        -149.1044,
        65.1213,
        20.9
    ],
    [
        -155.471,
        19.958167,
        34.056
    ],
    [
        -116.237333,
        33.3585,
        9.93
    ],
    [
        -152.4213,
        59.0929,
        75.6
    ],
    [
        -112.5195,
        46.889167,
        10.71
    ],
    [
        145.7448,
        18.3756,
        172.11
    ],
    [
        -155.7645,
        19.608333,
        19.406
    ],
    [
        -111.456667,
        42.600833,
        1.84
    ],
    [
        -152.8997,
        62.5624,
        2.5
    ],
    [
        -147.6239,
        61.9391,
        35.9
    ],
    [
        -155.6845,
        18.778833,
        34.132
    ],
    [
        -149.0205,
        61.3011,
        30.6
    ],
    [
        -149.1141,
        63.8125,
        0
    ],
    [
        -116.364,
        33.395667,
        5.23
    ],
    [
        -118.118,
        33.743333,
        14.37
    ],
    [
        -178.1517,
        -31.5827,
        35.55
    ],
    [
        -121.157333,
        36.593167,
        6.68
    ],
    [
        -122.718666,
        38.771667,
        2.16
    ],
    [
        -68.1988,
        -23.1056,
        126.96
    ],
    [
        -117.2313,
        37.1571,
        11.8
    ],
    [
        -146.3056,
        61.634,
        42.6
    ],
    [
        -118.847167,
        37.6515,
        3.01
    ],
    [
        -146.8168,
        61.2547,
        28.1
    ],
    [
        -118.112167,
        34.101167,
        8.93
    ],
    [
        -112.521833,
        46.872833,
        10.74
    ],
    [
        -112.5265,
        46.876167,
        11.17
    ],
    [
        -147.4064,
        60.3952,
        12.4
    ],
    [
        -119.5495,
        40.2609,
        8.3
    ],
    [
        -151.3311,
        63.2608,
        0.8
    ],
    [
        -155.6385,
        19.553667,
        11.424
    ],
    [
        -117.269,
        34.0685,
        15.7
    ],
    [
        -122.751333,
        47.996333,
        14.52
    ],
    [
        -82.7745,
        8.5663,
        30.59
    ],
    [
        -117.681,
        35.0345,
        -0.82
    ],
    [
        -151.2617,
        62.1345,
        75.8
    ],
    [
        -148.2839,
        61.0371,
        0
    ],
    [
        -120.616667,
        48.275333,
        6.9
    ],
    [
        -120.6095,
        48.259,
        5.47
    ],
    [
        -147.3354,
        64.9934,
        0
    ],
    [
        -122.805,
        38.822667,
        2.85
    ],
    [
        -122.808998,
        38.823166,
        1.74
    ],
    [
        -150.8464,
        63.0394,
        121.6
    ],
    [
        -117.445,
        37.5469,
        5.1
    ],
    [
        -122.739333,
        38.805667,
        1.44
    ],
    [
        -122.319167,
        46.078167,
        -1.11
    ],
    [
        -164.1558,
        67.7665,
        10.8
    ],
    [
        -148.3107,
        61.1448,
        20.1
    ],
    [
        -94.2992,
        15.6198,
        60.2
    ],
    [
        -116.446333,
        34.153333,
        6.34
    ],
    [
        -110.4045,
        43.682,
        5.87
    ],
    [
        -150.6733,
        65.2302,
        8.7
    ],
    [
        -118.0874,
        39.024,
        7.5
    ],
    [
        -116.347667,
        33.392,
        3.2
    ],
    [
        -111.412333,
        42.583667,
        5.9
    ],
    [
        -156.2687,
        57.0749,
        82.1
    ],
    [
        -161.3929,
        65.0131,
        16.1
    ],
    [
        -145.6212,
        63.3407,
        7
    ],
    [
        -151.0452,
        62.216,
        67.5
    ],
    [
        -121.4595,
        41.531833,
        2.93
    ],
    [
        -111.399,
        42.521333,
        8.16
    ],
    [
        -116.445833,
        34.1535,
        6.5
    ],
    [
        -118.8805,
        37.529167,
        1.8
    ],
    [
        -49.3194,
        13.4552,
        10
    ],
    [
        -122.767,
        38.799167,
        0.51
    ],
    [
        -145.5134,
        62.1795,
        23
    ],
    [
        -152.8761,
        60.5934,
        142.5
    ],
    [
        166.7231,
        55.3488,
        28.06
    ],
    [
        -116.4405,
        34.156167,
        8.27
    ],
    [
        -148.0856,
        61.3457,
        14.4
    ],
    [
        -150.9837,
        61.6046,
        61.8
    ],
    [
        -122.764831,
        38.788502,
        -0.61
    ],
    [
        -116.7955,
        33.4895,
        4.06
    ],
    [
        -152.6496,
        59.6816,
        88.6
    ],
    [
        -153.6613,
        58.3127,
        61.4
    ],
    [
        -119.9271,
        40.1731,
        13.8
    ],
    [
        -116.440833,
        34.1545,
        6.88
    ],
    [
        -118.1795,
        35.002,
        -0.83
    ],
    [
        -116.941667,
        32.908,
        -0.33
    ],
    [
        -28.8364,
        -55.2702,
        10
    ],
    [
        -112.503,
        46.830333,
        12.9
    ],
    [
        -154.6502,
        57.4998,
        47
    ],
    [
        -118.84,
        37.503833,
        0.26
    ],
    [
        -146.8175,
        61.6607,
        28.4
    ],
    [
        -155.324,
        19.406667,
        7.018
    ],
    [
        -116.44,
        34.157667,
        8.94
    ],
    [
        -111.424333,
        42.592167,
        6.15
    ],
    [
        -155.373667,
        20.034833,
        13.532
    ],
    [
        -111.609167,
        46.334833,
        -2
    ],
    [
        -150.9718,
        60.8946,
        14.9
    ],
    [
        -152.3579,
        61.0247,
        111.3
    ],
    [
        -118.787667,
        37.598833,
        5.1
    ],
    [
        -153.4244,
        59.8428,
        129.5
    ],
    [
        140.1126,
        -2.5625,
        21.57
    ],
    [
        -116.445167,
        33.264333,
        2.22
    ],
    [
        -114.2901,
        37.8049,
        7.5
    ],
    [
        -111.760333,
        39.998667,
        8.73
    ],
    [
        -147.9116,
        61.1262,
        0
    ],
    [
        -149.1084,
        64.9183,
        18.5
    ],
    [
        -116.446833,
        34.154333,
        7.94
    ],
    [
        -118.8285,
        37.455833,
        2.67
    ],
    [
        -121.5795,
        37.287833,
        7.31
    ],
    [
        -117.136833,
        34.054167,
        9.74
    ],
    [
        -121.464333,
        36.750833,
        7.57
    ],
    [
        -151.1249,
        62.9454,
        112.4
    ],
    [
        -149.2536,
        60.0003,
        13.7
    ],
    [
        -152.6674,
        59.3569,
        72.1
    ],
    [
        -153.0117,
        59.5043,
        89
    ],
    [
        -122.800667,
        38.820167,
        3.51
    ],
    [
        -151.3814,
        58.3192,
        13.1
    ],
    [
        -178.3915,
        51.6134,
        9.1
    ],
    [
        -150.1107,
        59.3023,
        7.9
    ],
    [
        -150.9147,
        62.9235,
        104.4
    ],
    [
        -153.0354,
        59.6428,
        85.1
    ],
    [
        -98.8228,
        36.4458,
        4.6
    ],
    [
        -151.2842,
        62.1118,
        75.7
    ],
    [
        -117.665167,
        35.975833,
        2.12
    ],
    [
        -155.370833,
        20.027333,
        12.259
    ],
    [
        175.9616,
        -39.6706,
        78.62
    ],
    [
        -118.979333,
        37.537333,
        3.49
    ],
    [
        -165.8047,
        53.5035,
        24.1
    ],
    [
        -178.1971,
        51.3674,
        18.8
    ],
    [
        94.7848,
        25.0488,
        74.86
    ],
    [
        -150.5284,
        62.2253,
        16.5
    ],
    [
        -162.9795,
        54.3692,
        39.6
    ],
    [
        -147.3659,
        61.871,
        45.6
    ],
    [
        -116.962167,
        34.044333,
        11.19
    ],
    [
        -179.8074,
        51.67,
        77.1
    ],
    [
        -162.3851,
        54.2478,
        11.5
    ],
    [
        -150.8594,
        61.9955,
        7.8
    ],
    [
        -120.496833,
        35.946833,
        9.32
    ],
    [
        -149.705,
        62.0401,
        40.9
    ],
    [
        -118.973167,
        37.635667,
        4.8
    ],
    [
        -156.1077,
        57.8662,
        5.2
    ],
    [
        -122.802002,
        38.825832,
        2.3
    ],
    [
        -152.0389,
        60.0214,
        78.4
    ],
    [
        -110.353833,
        43.520167,
        3.75
    ],
    [
        -118.887667,
        37.630333,
        6.72
    ],
    [
        -117.812833,
        34.096833,
        13.63
    ],
    [
        -117.808167,
        34.092333,
        14.9
    ],
    [
        -122.82267,
        38.807835,
        1.84
    ],
    [
        -178.4068,
        51.6479,
        12.1
    ],
    [
        -122.763168,
        38.789001,
        0.79
    ],
    [
        -149.5708,
        61.3679,
        26.2
    ],
    [
        -151.958,
        61.2532,
        105.4
    ],
    [
        -151.1195,
        62.8909,
        99
    ],
    [
        -178.3958,
        51.6323,
        10.7
    ],
    [
        -150.7855,
        61.7554,
        59.2
    ],
    [
        -166.7772,
        53.1343,
        25.6
    ],
    [
        -149.872,
        64.5325,
        18.4
    ],
    [
        -149.929,
        64.5216,
        18.2
    ],
    [
        -154.8923,
        58.4847,
        8.2
    ],
    [
        -116.791333,
        33.687167,
        16.23
    ],
    [
        -151.2158,
        61.698,
        77.3
    ],
    [
        -112.521333,
        46.873,
        11.92
    ],
    [
        -72.0212,
        -33.014,
        17.65
    ],
    [
        -152.1655,
        60.4739,
        86.3
    ],
    [
        -111.137833,
        42.522333,
        -0.39
    ],
    [
        -147.0756,
        60.1685,
        13.9
    ],
    [
        -121.486,
        36.378,
        5.97
    ],
    [
        -115.479,
        32.737333,
        7.83
    ],
    [
        -140.0368,
        61.1636,
        0.4
    ],
    [
        -151.4998,
        63.1031,
        5.3
    ],
    [
        -116.363333,
        34.832,
        3.07
    ],
    [
        -161.3923,
        54.6037,
        20.2
    ],
    [
        -136.7964,
        59.8936,
        15.8
    ],
    [
        -112.523,
        46.877333,
        10.49
    ],
    [
        -114.3199,
        37.7813,
        5
    ],
    [
        -151.264,
        62.5244,
        86.6
    ],
    [
        -178.4061,
        51.6742,
        14.8
    ],
    [
        -151.539,
        63.1068,
        11.2
    ],
    [
        -117.013833,
        33.662167,
        11.95
    ],
    [
        -116.047333,
        33.171,
        5.29
    ],
    [
        -175.4878,
        51.73,
        4.8
    ],
    [
        -178.3903,
        51.6732,
        5.4
    ],
    [
        -115.936833,
        33.147,
        7.23
    ],
    [
        -145.6337,
        63.3262,
        13.3
    ],
    [
        -115.4845,
        32.748667,
        13.78
    ],
    [
        -116.783833,
        33.267833,
        11.48
    ],
    [
        -93.9398,
        15.4089,
        62.32
    ],
    [
        -110.430667,
        43.6785,
        7.63
    ],
    [
        -112.5225,
        46.871167,
        10.98
    ],
    [
        -174.1659,
        51.8129,
        90.4
    ],
    [
        -150.7077,
        62.778,
        79.7
    ],
    [
        -116.790667,
        33.485333,
        4.63
    ],
    [
        -140.0237,
        61.1529,
        7.4
    ],
    [
        -112.529833,
        46.869,
        10.38
    ],
    [
        -167.6571,
        52.9982,
        32.2
    ],
    [
        -119.3057,
        38.4484,
        5.6
    ],
    [
        -150.3039,
        62.7285,
        79
    ],
    [
        -146.178,
        66.888,
        7.7
    ],
    [
        -112.528833,
        46.860333,
        12.25
    ],
    [
        -166.4948,
        53.5386,
        57.3
    ],
    [
        -151.3526,
        63.268,
        2.3
    ],
    [
        -166.5335,
        53.8446,
        6.9
    ],
    [
        -154.6125,
        58.9289,
        125.8
    ],
    [
        -122.847336,
        38.829834,
        1.06
    ],
    [
        -119.315667,
        37.487833,
        3.9
    ],
    [
        -116.334333,
        33.346333,
        9.65
    ],
    [
        -151.2536,
        62.5803,
        93.5
    ],
    [
        -151.155,
        61.9755,
        70.6
    ],
    [
        -151.7768,
        60.1335,
        76.2
    ],
    [
        -149.6738,
        61.6682,
        50.5
    ],
    [
        -155.565506,
        19.795834,
        15.58
    ],
    [
        -140.0156,
        64.7374,
        10.4
    ],
    [
        -122.803169,
        38.824001,
        2.33
    ],
    [
        -117.168667,
        34.0055,
        13.99
    ],
    [
        -122.044167,
        49.145,
        -1.01
    ],
    [
        -150.6324,
        61.3885,
        39.1
    ],
    [
        -89.444833,
        36.088167,
        13.18
    ],
    [
        91.8995,
        12.8626,
        27.25
    ],
    [
        -117.674,
        35.035333,
        -0.82
    ],
    [
        -97.6124,
        36.8167,
        5.123
    ],
    [
        -89.517167,
        36.232667,
        8.34
    ],
    [
        -116.2705,
        33.975833,
        4.84
    ],
    [
        -120.991833,
        40.153833,
        4.17
    ],
    [
        -123.4015,
        46.173833,
        -0.3
    ],
    [
        -68.7039,
        -22.2431,
        108.4
    ],
    [
        -121.930333,
        48.1035,
        -1.28
    ],
    [
        167.7345,
        -19.4817,
        10
    ],
    [
        -122.802,
        38.824833,
        2.33
    ],
    [
        -121.531667,
        37.139833,
        8.93
    ],
    [
        -121.444667,
        36.959667,
        6.72
    ],
    [
        -123.351667,
        39.5165,
        4.32
    ],
    [
        -113.9055,
        47.358667,
        13.73
    ],
    [
        -118.946833,
        37.590333,
        0.28
    ],
    [
        -117.503167,
        33.8695,
        -0.36
    ],
    [
        -102.3612,
        35.5909,
        5.45
    ],
    [
        -121.609167,
        36.880667,
        6.31
    ],
    [
        -112.5355,
        46.8805,
        12.28
    ],
    [
        -118.831833,
        37.455667,
        1.78
    ],
    [
        -118.192,
        34.993167,
        -0.84
    ],
    [
        -112.4715,
        45.995667,
        -2
    ],
    [
        -117.649167,
        35.932833,
        2.94
    ],
    [
        -122.308833,
        40.750667,
        -0.79
    ],
    [
        -120.932667,
        35.639,
        4.96
    ],
    [
        -122.679167,
        38.533833,
        5.88
    ],
    [
        -117.133167,
        34.279,
        6.09
    ],
    [
        102.3915,
        -7.056,
        10
    ],
    [
        -112.523167,
        46.87,
        10.71
    ],
    [
        -118.623333,
        33.912167,
        10.5
    ],
    [
        -118.880333,
        37.530667,
        2.11
    ],
    [
        94.5291,
        21.4218,
        96.74
    ],
    [
        -121.718167,
        40.935167,
        12.07
    ],
    [
        -152.9366,
        59.642,
        98.9
    ],
    [
        -115.4944,
        37.2386,
        0
    ],
    [
        -118.833,
        37.457667,
        1.76
    ],
    [
        -116.4615,
        34.328667,
        3.74
    ],
    [
        -116.466833,
        34.3255,
        4.39
    ],
    [
        -118.827833,
        37.456667,
        2.57
    ],
    [
        -112.528667,
        46.8625,
        13.48
    ],
    [
        -118.827833,
        37.457167,
        2.28
    ],
    [
        -118.827167,
        37.4555,
        1.91
    ],
    [
        -118.8265,
        37.456333,
        2.16
    ],
    [
        -118.829,
        37.453667,
        2.61
    ],
    [
        -117.0325,
        33.879333,
        -0.97
    ],
    [
        -120.371333,
        35.706833,
        1.86
    ],
    [
        -142.9837,
        67.1697,
        0
    ],
    [
        -113.8425,
        36.5559,
        8.1
    ],
    [
        -111.4145,
        42.546333,
        7.87
    ],
    [
        -120.997333,
        36.462667,
        5.69
    ],
    [
        -89.8025,
        36.5505,
        12.47
    ],
    [
        -146.8151,
        61.2492,
        19.9
    ],
    [
        -112.526167,
        46.870333,
        10.04
    ],
    [
        127.1289,
        2.6798,
        25.66
    ],
    [
        -118.822667,
        37.513833,
        8.22
    ],
    [
        -149.2609,
        64.6409,
        14.4
    ],
    [
        -122.751663,
        38.832832,
        0.68
    ],
    [
        51.6372,
        28.6895,
        10
    ],
    [
        -112.524667,
        46.868167,
        9.75
    ],
    [
        -112.523333,
        46.866667,
        11.08
    ],
    [
        -111.084,
        44.7795,
        11.23
    ],
    [
        -112.527333,
        46.855833,
        14
    ],
    [
        -155.592667,
        19.465333,
        0.033
    ],
    [
        -97.5037,
        36.2851,
        3.93
    ],
    [
        -112.527833,
        46.869833,
        10.17
    ],
    [
        -151.1189,
        63.1205,
        16.2
    ],
    [
        -120.885667,
        36.3165,
        6.48
    ],
    [
        -61.2682,
        13.209,
        136.91
    ],
    [
        176.4854,
        -37.3176,
        354.86
    ],
    [
        -112.533,
        46.869833,
        13.3
    ],
    [
        -111.218667,
        42.571667,
        3.5
    ],
    [
        -149.912,
        63.0196,
        66
    ],
    [
        -145.3257,
        63.3321,
        6.7
    ],
    [
        -118.510667,
        34.2985,
        9.93
    ],
    [
        -155.524002,
        19.919001,
        20.11
    ],
    [
        -110.33,
        46.119833,
        6
    ],
    [
        -88.2184,
        12.3486,
        35.55
    ],
    [
        -117.067167,
        34.208333,
        2.04
    ],
    [
        -117.064833,
        34.207833,
        2.06
    ],
    [
        -120.908833,
        36.368667,
        8.8
    ],
    [
        -152.1495,
        63.1057,
        3.5
    ],
    [
        -116.448833,
        33.481,
        8.33
    ],
    [
        -146.8806,
        64.6842,
        6.7
    ],
    [
        -90.1365,
        35.88,
        10.55
    ],
    [
        -111.480833,
        42.384833,
        5.67
    ],
    [
        -112.534333,
        46.8675,
        13.36
    ],
    [
        -112.529167,
        46.872333,
        11.44
    ],
    [
        -117.065667,
        34.2065,
        1.91
    ],
    [
        -94.8824,
        16.708,
        65.53
    ],
    [
        -116.460667,
        34.332333,
        5.88
    ],
    [
        -122.812667,
        38.805,
        2.29
    ],
    [
        -71.32,
        43.6653,
        7.15
    ],
    [
        -111.4165,
        42.520333,
        8.15
    ],
    [
        -111.414333,
        42.544333,
        7.62
    ],
    [
        -116.003333,
        33.1775,
        4.99
    ],
    [
        -151.5448,
        63.1998,
        0
    ],
    [
        -155.4204,
        67.3068,
        0
    ],
    [
        -112.523333,
        46.874,
        11.51
    ],
    [
        -148.829,
        65.5759,
        9.2
    ],
    [
        -155.412338,
        19.245501,
        33.84
    ],
    [
        -82.894667,
        34.9895,
        0.16
    ],
    [
        -148.5467,
        65.155,
        3.8
    ],
    [
        -112.528833,
        46.867167,
        11.58
    ],
    [
        -116.422833,
        33.04,
        10.21
    ],
    [
        -150.2817,
        61.9608,
        23.3
    ],
    [
        -112.033833,
        38.600333,
        7.01
    ],
    [
        -154.1032,
        58.7701,
        99
    ],
    [
        -111.409667,
        42.562167,
        7.8
    ],
    [
        174.3565,
        -41.7636,
        24.13
    ],
    [
        -116.589167,
        32.780833,
        12.71
    ],
    [
        -116.009833,
        33.179833,
        9.12
    ],
    [
        -179.4587,
        -21.8514,
        582.95
    ],
    [
        -116.010167,
        33.179,
        8.89
    ],
    [
        -122.8935,
        47.887833,
        54.22
    ],
    [
        -89.527833,
        36.243667,
        7.74
    ],
    [
        -117.0518,
        37.0814,
        8.8
    ],
    [
        72.4324,
        38.1132,
        115.18
    ],
    [
        -147.5212,
        66.5767,
        2.8
    ],
    [
        -120.524833,
        35.967333,
        10.71
    ],
    [
        -97.5118,
        36.9048,
        4.52
    ],
    [
        -122.245667,
        46.345833,
        7.97
    ],
    [
        -116.7985,
        33.500167,
        5.3
    ],
    [
        -111.411167,
        42.640167,
        -1.04
    ],
    [
        -116.43,
        33.028833,
        3.21
    ],
    [
        -116.048333,
        33.2415,
        5.47
    ],
    [
        -111.446167,
        42.608333,
        6.68
    ],
    [
        -118.482167,
        35.754,
        3.27
    ],
    [
        -155.021835,
        19.397499,
        0.02
    ],
    [
        -97.5196,
        36.2819,
        4.38
    ],
    [
        -154.9176,
        55.7636,
        20.8
    ],
    [
        -112.5073,
        46.8582,
        10.64
    ],
    [
        -113.017333,
        44.484667,
        7.23
    ],
    [
        -122.4705,
        40.704167,
        17.1
    ],
    [
        -111.418333,
        42.516667,
        6.74
    ],
    [
        -146.8167,
        61.2439,
        26.6
    ],
    [
        -111.411833,
        42.520667,
        7.35
    ],
    [
        -112.523167,
        46.872833,
        12.04
    ],
    [
        -151.5285,
        63.1691,
        0
    ],
    [
        -151.6012,
        59.5948,
        56.3
    ],
    [
        -111.4159,
        42.5178,
        6.97
    ],
    [
        -145.2312,
        63.3329,
        7.3
    ],
    [
        -122.426,
        38.404,
        7.4
    ],
    [
        -111.4175,
        42.518833,
        6.5
    ],
    [
        -111.422333,
        42.512667,
        7.8
    ],
    [
        -155.584503,
        19.484333,
        2.03
    ],
    [
        -149.7914,
        61.5177,
        34.2
    ],
    [
        -116.793667,
        33.502333,
        5.16
    ],
    [
        -118.5175,
        34.2865,
        7.02
    ],
    [
        -114.7954,
        37.1971,
        7.1
    ],
    [
        -124.506167,
        40.3085,
        21.45
    ],
    [
        -150.6022,
        63.105,
        120
    ],
    [
        -154.1198,
        58.9916,
        108.5
    ],
    [
        -138.1479,
        60.8928,
        4.5
    ],
    [
        -116.2755,
        33.976333,
        5.3
    ],
    [
        -122.810165,
        38.816834,
        1.1
    ],
    [
        -112.525833,
        46.891833,
        12.84
    ],
    [
        -141.9167,
        60.5402,
        8.8
    ],
    [
        -149.1362,
        61.9345,
        11
    ],
    [
        -149.9985,
        65.5166,
        15
    ],
    [
        -139.6538,
        59.9364,
        0
    ],
    [
        -116.830833,
        33.712,
        16.9
    ],
    [
        -97.905833,
        36.996333,
        9.62
    ],
    [
        -150.3425,
        61.0789,
        57.8
    ],
    [
        -119.6519,
        39.1963,
        5.8
    ],
    [
        -149.8709,
        61.4311,
        46.5
    ],
    [
        -120.567667,
        49.3235,
        -1.5
    ],
    [
        -153.8509,
        57.8862,
        54.2
    ],
    [
        -149.5477,
        60.1976,
        34.8
    ],
    [
        -112.515667,
        46.8785,
        11.55
    ],
    [
        -164.2618,
        53.748,
        49.3
    ],
    [
        -136.5485,
        59.782,
        2.5
    ],
    [
        -152.2691,
        59.2151,
        55.5
    ],
    [
        -149.1083,
        61.5648,
        11.6
    ],
    [
        -96.7952,
        35.9855,
        3.13
    ],
    [
        -121.619333,
        36.969667,
        5.21
    ],
    [
        -149.4052,
        62.336,
        46.1
    ],
    [
        -174.5246,
        51.8512,
        19.4
    ],
    [
        -112.525167,
        46.889833,
        12.19
    ],
    [
        -122.3795,
        40.710333,
        18.86
    ],
    [
        -97.4467,
        36.1992,
        5.42
    ],
    [
        -94.3923,
        15.6065,
        68.63
    ],
    [
        131.0709,
        30.4016,
        52.09
    ],
    [
        -122.806167,
        38.816833,
        2.01
    ],
    [
        -151.2184,
        62.3649,
        80.4
    ],
    [
        -121.676,
        37.612,
        3.61
    ],
    [
        -117.7983,
        37.0626,
        0
    ],
    [
        -152.4695,
        60.2829,
        104.2
    ],
    [
        -122.800835,
        38.831833,
        1.97
    ],
    [
        -149.7414,
        62.1039,
        54
    ],
    [
        -119.1156,
        38.2725,
        9.6
    ],
    [
        -155.408493,
        19.198166,
        32.85
    ],
    [
        -117.7769,
        37.082,
        5.7
    ],
    [
        -139.5344,
        59.9497,
        0
    ],
    [
        -152.7881,
        59.4532,
        86.2
    ],
    [
        -115.6588,
        -24.2867,
        10
    ],
    [
        -123.289333,
        46.525667,
        12.49
    ],
    [
        -76.1816,
        -45.7692,
        10
    ],
    [
        -118.8365,
        37.5015,
        0.38
    ],
    [
        -149.0123,
        63.225,
        1
    ],
    [
        -141.3476,
        60.399,
        0
    ],
    [
        -151.1025,
        62.0191,
        64.1
    ],
    [
        -173.7815,
        51.9812,
        27.7
    ],
    [
        -153.142,
        60.236,
        132.6
    ],
    [
        -177.8183,
        -18.2769,
        600.28
    ],
    [
        -118.736333,
        37.427833,
        11.17
    ],
    [
        -122.80983,
        38.822666,
        2.38
    ],
    [
        -119.018,
        37.4345,
        4.76
    ],
    [
        92.3426,
        12.898,
        30.37
    ],
    [
        -119.033833,
        37.4125,
        0.87
    ],
    [
        142.306,
        40.1598,
        57.26
    ],
    [
        -123.078833,
        44.103667,
        -0.53
    ],
    [
        -156.3848,
        56.4945,
        79.4
    ],
    [
        -174.5287,
        -22.8028,
        10
    ],
    [
        -140.7487,
        60.0824,
        8.2
    ],
    [
        -111.447833,
        42.650333,
        2.93
    ],
    [
        -112.525833,
        46.866,
        11.8
    ],
    [
        -155.633499,
        19.408501,
        4.16
    ],
    [
        -154.909,
        58.2689,
        5
    ],
    [
        -141.6138,
        60.5977,
        10
    ],
    [
        -153.1725,
        60.1804,
        135.1
    ],
    [
        -150.3672,
        61.3015,
        47
    ],
    [
        91.9129,
        12.7332,
        25.97
    ],
    [
        -157.0328,
        59.3749,
        6.2
    ],
    [
        -153.3802,
        59.7999,
        122.7
    ],
    [
        -155.3702,
        58.1855,
        1.8
    ],
    [
        -116.200333,
        33.034167,
        6.74
    ],
    [
        -122.793999,
        38.812668,
        3.13
    ],
    [
        -175.5366,
        51.4282,
        50.4
    ],
    [
        -153.7216,
        57.888,
        61
    ],
    [
        -119.6834,
        40.0949,
        13.6
    ],
    [
        -136.6219,
        59.7494,
        10.6
    ],
    [
        -116.46,
        34.330833,
        3.08
    ],
    [
        -112.509667,
        46.908167,
        15.76
    ],
    [
        -178.4679,
        51.6302,
        13.1
    ],
    [
        -154.0171,
        58.9928,
        112.8
    ],
    [
        -153.6069,
        60.035,
        157.2
    ],
    [
        -122.718,
        38.742333,
        1.86
    ],
    [
        -154.5011,
        64.299,
        14
    ],
    [
        -139.5182,
        59.9216,
        0
    ],
    [
        -116.731167,
        33.649,
        12.54
    ],
    [
        179.4705,
        51.8814,
        165.3
    ],
    [
        -156.485667,
        20.355333,
        14.282
    ],
    [
        -148.6332,
        59.9863,
        7.4
    ],
    [
        -118.984,
        37.5295,
        2.12
    ],
    [
        -149.0636,
        62.2825,
        41.1
    ],
    [
        -118.9213,
        38.3646,
        5.4
    ],
    [
        -116.791833,
        33.502167,
        4.66
    ],
    [
        -176.6916,
        -24.4751,
        87.71
    ],
    [
        -117.464167,
        36.311167,
        0.93
    ],
    [
        -154.4428,
        58.7981,
        124.3
    ],
    [
        -153.1498,
        59.6631,
        104.2
    ],
    [
        -118.452,
        37.402167,
        4.64
    ],
    [
        -93.8612,
        14.9405,
        53.39
    ],
    [
        -153.2003,
        60.1713,
        129.2
    ],
    [
        -136.7558,
        59.8604,
        10.3
    ],
    [
        -67.7814,
        18.4858,
        79.09
    ],
    [
        -117.651333,
        35.934333,
        2.81
    ],
    [
        -116.908333,
        35.5955,
        1.49
    ],
    [
        -169.7071,
        51.7987,
        13.4
    ],
    [
        -150.4859,
        61.0501,
        21.4
    ],
    [
        -77.5019,
        -1.5006,
        197.35
    ],
    [
        -149.6539,
        62.7976,
        71.1
    ],
    [
        -150.8258,
        61.6968,
        61
    ],
    [
        -112.459167,
        46.866,
        10.9
    ],
    [
        -119.2085,
        34.452833,
        11.88
    ],
    [
        -97.7785,
        37.328333,
        4.35
    ],
    [
        -152.7218,
        59.2315,
        9.7
    ],
    [
        -148.5055,
        59.3191,
        8.4
    ],
    [
        -98.7711,
        36.4532,
        6.9
    ],
    [
        -152.9474,
        62.6019,
        6.3
    ],
    [
        -118.8205,
        37.604,
        4.13
    ],
    [
        -118.8205,
        37.604333,
        4
    ],
    [
        -155.631836,
        19.188999,
        0.89
    ],
    [
        -141.345,
        60.1863,
        0
    ],
    [
        -112.578,
        38.7305,
        -0.01
    ],
    [
        146.1269,
        -6.2836,
        59.98
    ],
    [
        -85.5987,
        9.126,
        39.13
    ],
    [
        -149.6914,
        61.3678,
        29.1
    ],
    [
        -175.9412,
        51.6192,
        50.9
    ],
    [
        -150.577,
        62.7735,
        79.4
    ],
    [
        -116.833167,
        33.669167,
        16.1
    ],
    [
        -117.485,
        36.3695,
        1.6
    ],
    [
        -112.5235,
        46.889833,
        13.14
    ],
    [
        -156.095333,
        19.715167,
        33.794
    ],
    [
        -141.2898,
        60.1429,
        0
    ],
    [
        -121.157167,
        36.626,
        8.14
    ],
    [
        -112.526333,
        46.871,
        10.92
    ],
    [
        -121.228833,
        36.619333,
        4.82
    ],
    [
        -151.739,
        61.1833,
        86.4
    ],
    [
        -70.9053,
        41.6481,
        6.51
    ],
    [
        -118.3845,
        35.111667,
        5.93
    ],
    [
        -155.476502,
        19.216,
        37.47
    ],
    [
        -174.2232,
        51.7576,
        46.6
    ],
    [
        -121.9095,
        48.316167,
        1.09
    ],
    [
        -112.528833,
        46.877,
        11.86
    ],
    [
        -166.7866,
        53.1332,
        25.6
    ],
    [
        -173.6834,
        51.2465,
        35.3
    ],
    [
        -139.521,
        59.9658,
        0
    ],
    [
        -121.7125,
        37.351167,
        7.83
    ],
    [
        -73.1491,
        7.5135,
        142.73
    ],
    [
        -116.354833,
        33.961167,
        5.95
    ],
    [
        140.5685,
        36.9167,
        10
    ],
    [
        -169.8117,
        51.8357,
        61.8
    ],
    [
        -117.119167,
        33.9365,
        14.07
    ],
    [
        -153.8841,
        57.2184,
        46.9
    ],
    [
        -150.4019,
        63.1122,
        97.2
    ],
    [
        -118.939,
        37.635333,
        5.76
    ],
    [
        -152.9252,
        60.1498,
        112.5
    ],
    [
        -178.4432,
        51.7288,
        13.5
    ],
    [
        -166.7041,
        52.7581,
        14.9
    ],
    [
        -178.4546,
        51.7076,
        6.6
    ],
    [
        -169.6939,
        51.8802,
        15.5
    ],
    [
        126.9456,
        7.2071,
        68.13
    ],
    [
        -151.9899,
        60.0896,
        71.7
    ],
    [
        -147.3486,
        64.9885,
        0
    ],
    [
        -169.9474,
        51.9828,
        27.38
    ],
    [
        -155.123672,
        19.313999,
        2.22
    ],
    [
        -111.459167,
        42.663667,
        2.14
    ],
    [
        -111.4566,
        42.652,
        6.15
    ],
    [
        -111.4606,
        42.6545,
        4.98
    ],
    [
        -111.473,
        42.6754,
        3.19
    ],
    [
        -149.5092,
        62.3699,
        51
    ],
    [
        -116.455333,
        34.324167,
        2.96
    ],
    [
        128.5426,
        3.9405,
        10
    ],
    [
        -152.5291,
        59.2674,
        85.5
    ],
    [
        -152.7509,
        60.014,
        105.7
    ],
    [
        -149.1116,
        62.3522,
        7.1
    ],
    [
        -152.6933,
        62.6659,
        6.2
    ],
    [
        -115.9049,
        37.2915,
        0
    ],
    [
        -115.8999,
        37.2878,
        3.1
    ],
    [
        -115.9056,
        37.279,
        6.4
    ],
    [
        -115.9061,
        37.2885,
        0
    ],
    [
        -111.4515,
        42.661,
        2.56
    ],
    [
        -151.5204,
        63.352,
        8.1
    ],
    [
        -117.6755,
        40.2201,
        8.1
    ],
    [
        -147.3476,
        61.4217,
        25.5
    ],
    [
        -144.0067,
        60.9307,
        14.1
    ],
    [
        -152.2422,
        59.621,
        83.6
    ],
    [
        -151.7955,
        61.7318,
        98.9
    ],
    [
        139.9751,
        27.653,
        485.8
    ],
    [
        -123.056833,
        48.412333,
        50.6
    ],
    [
        -122.2745,
        38.558167,
        6.21
    ],
    [
        -120.780167,
        35.5105,
        3.92
    ],
    [
        -116.791,
        33.512,
        6.24
    ],
    [
        122.7108,
        -8.0939,
        216.64
    ],
    [
        -68.5125,
        17.7855,
        35
    ],
    [
        -155.469,
        19.209667,
        35.947
    ],
    [
        143.8145,
        21.6564,
        64.59
    ],
    [
        -116.363167,
        33.357333,
        10.38
    ],
    [
        -122.781,
        38.796667,
        3.44
    ],
    [
        -152.1783,
        59.7871,
        69.4
    ],
    [
        -150.6852,
        63.5864,
        3
    ],
    [
        -118.1362,
        38.2888,
        10.3
    ],
    [
        -143.1572,
        55.8639,
        11.9
    ],
    [
        -176.2132,
        52.0688,
        7.4
    ],
    [
        -112.525333,
        46.872833,
        11.78
    ],
    [
        -111.4618,
        42.6659,
        3.65
    ],
    [
        -152.5093,
        61.3123,
        6.1
    ],
    [
        -149.7901,
        63.2441,
        12.8
    ],
    [
        -94.8027,
        15.4984,
        19.41
    ],
    [
        -116.89,
        34.349167,
        2.93
    ],
    [
        -177.8619,
        51.4801,
        41.6
    ],
    [
        -151.5581,
        61.5616,
        72.2
    ],
    [
        -119.160667,
        34.4365,
        4.43
    ],
    [
        -94.9189,
        16.1602,
        51.93
    ],
    [
        -121.484167,
        40.699167,
        11.98
    ],
    [
        -141.6079,
        60.1354,
        9.8
    ],
    [
        -141.5942,
        60.1565,
        7.4
    ],
    [
        -178.119,
        51.4689,
        25.2
    ],
    [
        -90.9767,
        1.0533,
        10
    ],
    [
        -122.8085,
        38.817833,
        3.12
    ],
    [
        -122.3415,
        37.8225,
        -0.07
    ],
    [
        179.9778,
        51.4147,
        57.6
    ],
    [
        -154.7866,
        57.4545,
        53.8
    ],
    [
        -122.691,
        38.7405,
        1.44
    ],
    [
        -97.5446,
        36.2305,
        5.63
    ],
    [
        -150.7001,
        61.542,
        58.2
    ],
    [
        -112.531167,
        46.8685,
        11.42
    ],
    [
        -117.492667,
        34.216,
        5.74
    ],
    [
        -139.5985,
        59.916,
        0
    ],
    [
        -122.249667,
        37.864833,
        5.03
    ],
    [
        -118.819833,
        37.603833,
        4.12
    ],
    [
        -117.2715,
        34.059333,
        15.26
    ],
    [
        -122.452333,
        48.382667,
        22.31
    ],
    [
        -155.627833,
        19.405333,
        3.602
    ],
    [
        -143.5599,
        60.3017,
        2
    ],
    [
        -148.6949,
        63.8592,
        1.6
    ],
    [
        -150.4836,
        62.981,
        94.9
    ],
    [
        -116.461667,
        34.329167,
        3.88
    ],
    [
        -159.2124,
        67.8158,
        1.9
    ],
    [
        -115.658167,
        31.867,
        1.78
    ],
    [
        -116.768833,
        33.326833,
        12.3
    ],
    [
        -151.4069,
        62.3275,
        86
    ],
    [
        -118.82,
        37.605333,
        4.33
    ],
    [
        -163.7202,
        67.3687,
        4.2
    ],
    [
        -118.8976,
        38.3688,
        7.1
    ],
    [
        -163.7286,
        67.3815,
        8.4
    ],
    [
        -110.635,
        37.764167,
        13.14
    ],
    [
        -150.6494,
        63.1022,
        115.8
    ],
    [
        -153.8697,
        59.0106,
        105
    ],
    [
        -118.898833,
        37.522667,
        12.57
    ],
    [
        -74.5095,
        40.809333,
        11.51
    ],
    [
        -150.0654,
        62.1893,
        8.4
    ],
    [
        -148.3117,
        61.0872,
        0
    ],
    [
        -119.155,
        34.5615,
        2.13
    ],
    [
        -153.1722,
        60.0493,
        117.8
    ],
    [
        -111.4255,
        42.547,
        7.49
    ],
    [
        -149.9682,
        61.4708,
        39.5
    ],
    [
        128.7797,
        1.8973,
        37.67
    ],
    [
        -151.8184,
        60.0072,
        67.6
    ],
    [
        -122.800833,
        38.792667,
        2.88
    ],
    [
        -147.3164,
        61.6465,
        25.4
    ],
    [
        -94.0971,
        15.3765,
        35.53
    ],
    [
        -178.3876,
        51.6362,
        13.1
    ],
    [
        -111.411333,
        38.962833,
        -1.36
    ],
    [
        -120.1355,
        37.688333,
        25.77
    ],
    [
        -152.7222,
        59.2509,
        16
    ],
    [
        -149.0664,
        61.8814,
        35.7
    ],
    [
        -122.7435,
        38.788,
        0.74
    ],
    [
        -97.5543,
        36.2286,
        1.38
    ],
    [
        -116.3055,
        33.255167,
        10.3
    ],
    [
        -115.638333,
        33.165167,
        2.88
    ],
    [
        -179.9144,
        51.2732,
        19.4
    ],
    [
        -122.750832,
        38.806835,
        0.69
    ],
    [
        -123.270833,
        39.463167,
        6.67
    ],
    [
        -173.4581,
        50.7723,
        29.7
    ],
    [
        -151.2563,
        61.2042,
        65.4
    ],
    [
        -118.820833,
        37.604167,
        3.89
    ],
    [
        -121.095167,
        36.564333,
        8.65
    ],
    [
        -176.4734,
        51.7808,
        63.4
    ],
    [
        -152.7203,
        60.1564,
        96.7
    ],
    [
        -150.0463,
        62.4859,
        12.9
    ],
    [
        -147.4986,
        59.9398,
        15.9
    ],
    [
        -176.4214,
        51.6622,
        47.9
    ],
    [
        -122.7965,
        38.821167,
        2.97
    ],
    [
        -147.3389,
        63.5229,
        14.2
    ],
    [
        -118.784,
        34.512167,
        18.77
    ],
    [
        -118.9575,
        37.590333,
        -0.13
    ],
    [
        178.7893,
        -37.146,
        51.02
    ],
    [
        -94.1802,
        15.1606,
        44.16
    ],
    [
        105.0015,
        32.3196,
        10
    ],
    [
        -118.599667,
        37.407833,
        9.53
    ],
    [
        -118.076333,
        36.188833,
        2.55
    ],
    [
        -113.9725,
        47.5955,
        16.81
    ],
    [
        -112.2913,
        46.8038,
        7.79
    ],
    [
        -152.3454,
        60.3536,
        81.9
    ],
    [
        -169.3954,
        52.6671,
        7.6
    ],
    [
        146.5825,
        -6.071,
        46.79
    ],
    [
        -118.82,
        37.603833,
        3.81
    ],
    [
        -150.7455,
        63.2374,
        127.9
    ],
    [
        -111.416167,
        42.576,
        7.87
    ],
    [
        -176.3938,
        52.2402,
        166.1
    ],
    [
        -103.5373,
        31.4264,
        5
    ],
    [
        56.8179,
        27.8699,
        10
    ],
    [
        -151.0884,
        59.736,
        45.6
    ],
    [
        -118.833,
        37.493667,
        -0.44
    ],
    [
        -150.9578,
        61.9828,
        69.5
    ],
    [
        -153.6653,
        59.3044,
        110.5
    ],
    [
        -155.7167,
        57.5293,
        92.2
    ],
    [
        136.7409,
        -3.3243,
        53.79
    ],
    [
        -136.643,
        59.7863,
        2.1
    ],
    [
        -120.242833,
        34.689,
        2.49
    ],
    [
        -89.540333,
        36.441167,
        8.74
    ],
    [
        -136.6248,
        59.7789,
        3.9
    ],
    [
        -149.3855,
        61.2392,
        35.6
    ],
    [
        -175.4182,
        51.6603,
        65.4
    ],
    [
        -118.2269,
        38.6102,
        7.9
    ],
    [
        -153.4354,
        59.672,
        120.4
    ],
    [
        -94.1267,
        15.2552,
        35.18
    ],
    [
        -120.231333,
        34.69,
        2.26
    ],
    [
        -118.820667,
        37.604833,
        4.25
    ],
    [
        -136.8027,
        59.8685,
        4.1
    ],
    [
        -151.7993,
        62.6213,
        100.3
    ],
    [
        -178.5238,
        -17.429,
        578.55
    ],
    [
        -118.821,
        37.608667,
        4.18
    ],
    [
        -149.6362,
        63.7125,
        120.2
    ],
    [
        -152.6879,
        60.1242,
        106.3
    ],
    [
        -116.0465,
        33.1715,
        3.57
    ],
    [
        -148.9689,
        62.8827,
        10.6
    ],
    [
        -116.046167,
        33.172833,
        9.13
    ],
    [
        -174.2839,
        51.9212,
        67.7
    ],
    [
        -146.9672,
        64.4141,
        9
    ],
    [
        -149.1933,
        61.9028,
        3.7
    ],
    [
        120.696,
        13.6996,
        135.75
    ],
    [
        -140.6767,
        61.5138,
        15.3
    ],
    [
        -147.3628,
        64.9795,
        0
    ],
    [
        -118.822,
        37.604667,
        4.2
    ],
    [
        -116.794167,
        33.499833,
        4.55
    ],
    [
        -72.9693,
        6.7514,
        162.39
    ],
    [
        -118.819667,
        37.6045,
        3.92
    ],
    [
        -151.2194,
        60.3483,
        70.5
    ],
    [
        -118.7985,
        38.0515,
        10.15
    ],
    [
        -93.7775,
        14.8225,
        10
    ],
    [
        -72.1967,
        -31.7027,
        34.99
    ],
    [
        -110.33,
        44.419,
        8.43
    ],
    [
        -146.5236,
        61.0736,
        4.6
    ],
    [
        -110.331,
        44.419667,
        7.85
    ],
    [
        -178.3899,
        51.6225,
        6.6
    ],
    [
        -154.6224,
        58.8526,
        127.8
    ],
    [
        -119.2355,
        34.1175,
        22.24
    ],
    [
        -94.0878,
        15.2008,
        58.14
    ],
    [
        -126.71,
        43.4329,
        10
    ],
    [
        -96.8727,
        36.4662,
        8.25
    ],
    [
        -147.3481,
        63.5145,
        7.6
    ],
    [
        -116.9775,
        33.998333,
        5
    ],
    [
        -118.822,
        37.604667,
        3.82
    ],
    [
        -148.3588,
        61.6517,
        20.5
    ],
    [
        -122.352667,
        38.643167,
        5.77
    ],
    [
        -120.5572,
        49.4225,
        5
    ],
    [
        -94.8406,
        16.1453,
        55.29
    ],
    [
        -118.878667,
        37.535,
        2.9
    ],
    [
        -117.142333,
        33.336167,
        -0.44
    ],
    [
        -94.3377,
        14.7629,
        21.4
    ],
    [
        -122.722,
        38.777668,
        1.65
    ],
    [
        -112.210167,
        46.588333,
        0.3
    ],
    [
        -178.6762,
        51.2251,
        46.8
    ],
    [
        -117.174667,
        33.223167,
        -0.31
    ],
    [
        -178.4109,
        51.6654,
        14.9
    ],
    [
        -173.0656,
        51.6073,
        13.2
    ],
    [
        -153.0358,
        59.8156,
        103.9
    ],
    [
        -93.8244,
        14.6951,
        25.26
    ],
    [
        160.0808,
        53.2159,
        47.81
    ],
    [
        -118.839833,
        37.5695,
        1.15
    ],
    [
        -117.962833,
        36.582167,
        5.17
    ],
    [
        -149.7372,
        61.7159,
        11.2
    ],
    [
        -122.5445,
        46.492667,
        -1.15
    ],
    [
        -122.840332,
        38.841,
        1.28
    ],
    [
        -118.351833,
        35.050333,
        -1.01
    ],
    [
        -122.638,
        38.771,
        3.08
    ],
    [
        -118.813333,
        37.477,
        10.6
    ],
    [
        -126.9812,
        40.4991,
        10.41
    ],
    [
        -111.408333,
        42.627833,
        0.01
    ],
    [
        -150.1805,
        65.8694,
        11.3
    ],
    [
        -71.7041,
        -29.9428,
        24.5
    ],
    [
        -178.5133,
        51.924,
        29.7
    ],
    [
        -118.823167,
        37.608833,
        3.97
    ],
    [
        -161.5563,
        65.3108,
        1.7
    ],
    [
        -151.5157,
        60.0338,
        76.1
    ],
    [
        -146.4094,
        62.2086,
        43.2
    ],
    [
        -118.819833,
        37.604,
        4.23
    ],
    [
        -178.3979,
        51.6138,
        9.1
    ],
    [
        -150.7333,
        62.8722,
        95.5
    ],
    [
        -122.763167,
        38.815,
        1.59
    ],
    [
        -141.9223,
        60.0784,
        5.3
    ],
    [
        -67.2978,
        -24.5018,
        178.46
    ],
    [
        -141.3415,
        60.1469,
        0
    ],
    [
        -112.561,
        46.8309,
        5
    ],
    [
        -176.2265,
        52.0599,
        4
    ],
    [
        -118.8685,
        37.573667,
        2.96
    ],
    [
        -115.9525,
        33.161667,
        8.71
    ],
    [
        -118.822,
        37.604167,
        4.23
    ],
    [
        -155.601833,
        20.052667,
        34.47
    ],
    [
        -147.4859,
        61.9357,
        38.3
    ],
    [
        30.6565,
        36.9513,
        89.38
    ],
    [
        -121.628333,
        36.892667,
        -0.13
    ],
    [
        143.8294,
        21.3911,
        69.37
    ],
    [
        -153.3591,
        59.6184,
        107.1
    ],
    [
        -150.347,
        60.6887,
        39.3
    ],
    [
        -174.4266,
        51.6803,
        2.6
    ],
    [
        -178.523,
        51.6975,
        12.1
    ],
    [
        -178.5572,
        51.8006,
        17.4
    ],
    [
        -146.4554,
        63.4968,
        4.1
    ],
    [
        -94.674,
        15.7931,
        74.04
    ],
    [
        -120.190833,
        36.066,
        9.01
    ],
    [
        -118.820167,
        37.606167,
        4.24
    ],
    [
        -112.502167,
        42.0255,
        -0.68
    ],
    [
        -152.1692,
        61.0412,
        92.6
    ],
    [
        -118.8215,
        37.603833,
        3.81
    ],
    [
        -147.2498,
        63.4064,
        80.5
    ],
    [
        -153.7332,
        58.8106,
        5.8
    ],
    [
        -153.7502,
        58.8134,
        7.3
    ],
    [
        -98.0981,
        36.3324,
        6.543
    ],
    [
        -153.9597,
        58.9824,
        104.1
    ],
    [
        -112.506667,
        42.031167,
        2.68
    ],
    [
        -147.3879,
        63.5817,
        1.1
    ],
    [
        -176.2136,
        52.0676,
        4.5
    ],
    [
        -118.862333,
        37.5625,
        4.47
    ],
    [
        -148.0206,
        61.729,
        33.9
    ],
    [
        -118.270167,
        33.67,
        4.47
    ],
    [
        67.9437,
        39.8728,
        20.04
    ],
    [
        -118.821167,
        37.605667,
        4.05
    ],
    [
        -118.822,
        37.606167,
        4.07
    ],
    [
        -141.3697,
        60.1847,
        0
    ],
    [
        -111.431,
        42.543833,
        7
    ],
    [
        -112.531833,
        46.8625,
        13.38
    ],
    [
        -118.821,
        37.605667,
        4.02
    ],
    [
        -117.7002,
        37.7048,
        16.9
    ],
    [
        -176.2102,
        52.0495,
        4.8
    ],
    [
        -155.457667,
        19.1075,
        28.777
    ],
    [
        -118.030167,
        36.589833,
        2.83
    ],
    [
        -111.410833,
        42.548333,
        8.8
    ],
    [
        -118.292833,
        33.924,
        11.12
    ],
    [
        -111.451,
        42.651167,
        3.75
    ],
    [
        -119.1244,
        38.2711,
        14.1
    ],
    [
        -113.712667,
        47.670333,
        12.54
    ],
    [
        -155.030667,
        19.839833,
        12.705
    ],
    [
        -155.2959,
        57.1271,
        73.2
    ],
    [
        -94.0117,
        15.1312,
        54.94
    ],
    [
        -150.2101,
        65.8679,
        9.7
    ],
    [
        -105.3739,
        35.8708,
        5
    ],
    [
        -118.8685,
        37.5745,
        2.94
    ],
    [
        -170.2168,
        53.4134,
        215.5
    ],
    [
        -178.4342,
        51.6411,
        13.4
    ],
    [
        -120.248167,
        34.684167,
        3.67
    ],
    [
        -116.6475,
        32.295833,
        17.59
    ],
    [
        -121.713833,
        45.779,
        4.47
    ],
    [
        -119.1157,
        38.2921,
        8.5
    ],
    [
        -168.1308,
        51.5953,
        10
    ],
    [
        -120.236167,
        34.686333,
        2.51
    ],
    [
        -118.821833,
        37.606833,
        4.18
    ],
    [
        -111.408833,
        42.556667,
        7.57
    ],
    [
        -121.0275,
        36.556333,
        6.7
    ],
    [
        -116.798333,
        33.502667,
        4.26
    ],
    [
        -111.772667,
        41.2685,
        12.53
    ],
    [
        143.7467,
        21.3618,
        39.87
    ],
    [
        -149.7405,
        63.338,
        95.8
    ],
    [
        -115.671,
        33.215333,
        3.29
    ],
    [
        -122.721832,
        38.776001,
        1.56
    ],
    [
        -118.838167,
        37.489833,
        1
    ],
    [
        -119.2245,
        38.4923,
        40
    ],
    [
        -154.0102,
        58.492,
        85.1
    ],
    [
        -150.1298,
        60.9057,
        47.4
    ],
    [
        -93.929,
        14.9856,
        43.22
    ],
    [
        -112.7785,
        38.186667,
        4.92
    ],
    [
        -176.291,
        51.5518,
        1.2
    ],
    [
        -151.1687,
        63.2488,
        4.7
    ],
    [
        -118.898667,
        37.523167,
        12.92
    ],
    [
        -150.5017,
        66.1069,
        17.1
    ],
    [
        -117.4335,
        34.163833,
        7.61
    ],
    [
        90.3467,
        33.9272,
        10
    ],
    [
        -119.1177,
        38.2758,
        11.8
    ],
    [
        -116.978833,
        33.994167,
        4.88
    ],
    [
        -119.1188,
        38.2704,
        11.7
    ],
    [
        -122.8105,
        38.808833,
        0.67
    ],
    [
        -120.989667,
        36.427667,
        2.31
    ],
    [
        -118.540833,
        37.406667,
        8.01
    ],
    [
        -122.733667,
        47.824,
        24.16
    ],
    [
        55.3123,
        28.2886,
        10
    ],
    [
        -120.571833,
        36.012667,
        3.67
    ],
    [
        -145.5877,
        62.1976,
        22.9
    ],
    [
        -118.848167,
        37.6535,
        2.83
    ],
    [
        -118.838333,
        37.506167,
        0.64
    ],
    [
        -118.835333,
        37.507167,
        -1.01
    ],
    [
        -146.3945,
        61.6303,
        33.9
    ],
    [
        -149.1712,
        62.2695,
        52.6
    ],
    [
        -118.834167,
        37.5065,
        0.53
    ],
    [
        -96.6816,
        35.8653,
        6.569
    ],
    [
        -118.5308,
        38.52,
        7.8
    ],
    [
        -115.982833,
        33.1725,
        3.45
    ],
    [
        -145.485,
        62.1641,
        22.8
    ],
    [
        -118.8385,
        37.505167,
        1.37
    ],
    [
        -118.8355,
        37.5055,
        1.65
    ],
    [
        -168.5107,
        52.4839,
        24.7
    ],
    [
        -118.824833,
        37.605667,
        4.02
    ],
    [
        -139.9358,
        61.1521,
        6.2
    ],
    [
        -122.78717,
        38.829334,
        1.02
    ],
    [
        -89.653833,
        36.539667,
        9.66
    ],
    [
        -179.5233,
        -24.0812,
        546.3
    ],
    [
        -150.8708,
        60.1234,
        43.7
    ],
    [
        -111.55,
        41.1085,
        19.56
    ],
    [
        -118.846833,
        37.647833,
        3.02
    ],
    [
        -116.978,
        33.995,
        4.89
    ],
    [
        -150.4686,
        63.102,
        104.8
    ],
    [
        -165.0654,
        53.6407,
        46.2
    ],
    [
        -94.1021,
        14.8894,
        24.04
    ],
    [
        -122.826833,
        38.814,
        1.76
    ],
    [
        -96.6968,
        35.8549,
        5
    ],
    [
        -112.514,
        46.840833,
        13.41
    ],
    [
        -117.02,
        34.015,
        13.93
    ],
    [
        -150.311,
        64.8546,
        17.6
    ],
    [
        -94.0465,
        14.9039,
        21.66
    ],
    [
        -165.3696,
        53.5031,
        41.5
    ],
    [
        -118.835833,
        37.502333,
        -0.01
    ],
    [
        -97.887333,
        37.201833,
        5.03
    ],
    [
        -122.8045,
        38.832333,
        1.64
    ],
    [
        -122.758667,
        38.793499,
        0.77
    ],
    [
        -116.976,
        33.995833,
        3.45
    ],
    [
        -150.9369,
        62.1991,
        64.3
    ],
    [
        178.5129,
        51.845,
        110
    ],
    [
        -155.463667,
        19.481,
        6.56
    ],
    [
        -117.302333,
        34.099,
        15.05
    ],
    [
        141.7803,
        35.9821,
        42.36
    ],
    [
        -116.259833,
        32.454333,
        2.17
    ],
    [
        -115.569,
        31.324,
        4.82
    ],
    [
        -116.924833,
        33.976167,
        6.34
    ],
    [
        -116.1923,
        35.5727,
        11.6
    ],
    [
        -116.7885,
        33.494833,
        5.39
    ],
    [
        -116.791167,
        33.5105,
        6.09
    ],
    [
        -174.9834,
        51.7396,
        25.6
    ],
    [
        -122.720497,
        38.775501,
        1.87
    ],
    [
        -150.8838,
        61.8075,
        66.1
    ],
    [
        -111.687,
        41.150667,
        12.61
    ],
    [
        -111.936667,
        38.921333,
        10.59
    ],
    [
        -169.976,
        52.0498,
        29.97
    ],
    [
        -170.1717,
        52.3421,
        33.24
    ],
    [
        -147.0631,
        63.4906,
        4.2
    ],
    [
        -178.579,
        51.7059,
        15.4
    ],
    [
        -118.834333,
        37.504,
        -0.73
    ],
    [
        -115.570333,
        31.324667,
        4.82
    ],
    [
        -151.4881,
        63.0417,
        2.8
    ],
    [
        -156.135,
        67.8468,
        16.8
    ],
    [
        -122.876831,
        38.8405,
        2.17
    ],
    [
        -122.818333,
        38.816667,
        2.21
    ],
    [
        -117.313,
        34.094167,
        17.1
    ],
    [
        -116.7955,
        33.502667,
        3.76
    ],
    [
        -118.818,
        37.470667,
        1.87
    ],
    [
        -118.585667,
        37.234667,
        6.49
    ],
    [
        -148.3267,
        62.8222,
        57.1
    ],
    [
        -139.2144,
        60.0462,
        13.4
    ],
    [
        -155.3512,
        58.196,
        2.5
    ],
    [
        -178.3692,
        51.6466,
        12.3
    ],
    [
        -147.7379,
        61.4006,
        18.9
    ],
    [
        144.7489,
        19.052,
        30.59
    ],
    [
        -151.8862,
        61.8988,
        105.1
    ],
    [
        -148.9604,
        62.3327,
        42.9
    ],
    [
        -117.5187,
        36.978,
        7
    ],
    [
        -118.821,
        37.606667,
        4.1
    ],
    [
        -118.818833,
        37.608333,
        4.24
    ],
    [
        -122.0985,
        41.357,
        -1.69
    ],
    [
        -152.9034,
        59.5213,
        94.1
    ],
    [
        -175.6403,
        51.5228,
        41.23
    ],
    [
        -118.9062,
        38.3722,
        8.5
    ],
    [
        -179.7911,
        -24.8725,
        440.96
    ],
    [
        127.5676,
        1.0849,
        4.38
    ],
    [
        133.3331,
        2.9053,
        15.04
    ],
    [
        -153.3134,
        59.6717,
        111.4
    ],
    [
        -147.1768,
        68.4586,
        17
    ],
    [
        -118.834833,
        37.500333,
        -1.77
    ],
    [
        -178.5949,
        -34.0499,
        10
    ],
    [
        130.4998,
        -6.5326,
        108.74
    ],
    [
        -121.1135,
        35.6885,
        5.91
    ],
    [
        -118.878833,
        37.534,
        2.41
    ],
    [
        -121.417833,
        45.624333,
        -1.28
    ],
    [
        -112.521333,
        46.910833,
        10.76
    ],
    [
        -158.5454,
        67.5431,
        1.7
    ],
    [
        -153.4826,
        58.8115,
        4.9
    ],
    [
        -153.4008,
        59.8707,
        143.3
    ],
    [
        -151.2636,
        62.56,
        91.7
    ],
    [
        -122.710833,
        38.743,
        2.06
    ],
    [
        -149.2148,
        64.8337,
        24.2
    ],
    [
        -151.0761,
        62.868,
        105.4
    ],
    [
        19.9413,
        39.9063,
        10.29
    ],
    [
        -150.8044,
        63.1677,
        125.3
    ],
    [
        150.778,
        49.1768,
        363.15
    ],
    [
        -150.9288,
        61.8846,
        49.8
    ],
    [
        -150.7041,
        61.8689,
        59.8
    ],
    [
        -118.9234,
        38.4032,
        7.8
    ],
    [
        -145.6029,
        62.2054,
        19.5
    ],
    [
        -116.990833,
        33.765333,
        14.42
    ],
    [
        -119.1182,
        38.2802,
        11.5
    ],
    [
        -155.430333,
        19.4155,
        3.336
    ],
    [
        -149.484,
        61.7831,
        31.3
    ],
    [
        -97.3897,
        35.6755,
        5.86
    ],
    [
        129.2381,
        -7.2814,
        142.87
    ],
    [
        -150.5815,
        63.2958,
        125.3
    ],
    [
        -148.1989,
        60.9639,
        35.6
    ],
    [
        -116.131167,
        32.218833,
        17.71
    ],
    [
        -151.0033,
        63.1036,
        120.6
    ],
    [
        -112.525833,
        46.870167,
        10.85
    ],
    [
        -153.2274,
        59.9548,
        119.1
    ],
    [
        -152.4925,
        59.606,
        72.3
    ],
    [
        -120.631667,
        36.039167,
        2.5
    ],
    [
        -150.3296,
        60.9023,
        42.3
    ],
    [
        -84.1381,
        3.222,
        33.2
    ],
    [
        -111.457167,
        42.614667,
        6.24
    ],
    [
        -171.0327,
        52.1592,
        53.3
    ],
    [
        -116.118167,
        33.2435,
        12.25
    ],
    [
        -149.6565,
        62.7268,
        75.5
    ],
    [
        -116.0954,
        35.994,
        9.6
    ],
    [
        -151.596,
        60.994,
        73.2
    ],
    [
        -151.8361,
        62.7886,
        1.5
    ],
    [
        -118.530333,
        35.347,
        5.41
    ],
    [
        -152.5986,
        59.752,
        76.2
    ],
    [
        -155.122167,
        19.331,
        7.032
    ],
    [
        -136.8725,
        59.9048,
        16.1
    ],
    [
        -121.129833,
        36.62,
        9.54
    ],
    [
        -112.495833,
        46.896167,
        10.98
    ],
    [
        -146.5002,
        61.5482,
        31.5
    ],
    [
        -122.995833,
        39.427167,
        0.18
    ],
    [
        -153.0379,
        60.1776,
        121.7
    ],
    [
        -116.792167,
        33.506833,
        5.73
    ],
    [
        127.5691,
        2.1483,
        97.53
    ],
    [
        120.0401,
        6.0164,
        50.8
    ],
    [
        -150.7645,
        61.7278,
        64.1
    ],
    [
        -155.142167,
        19.3215,
        5.152
    ],
    [
        -147.8062,
        60.4189,
        2.2
    ],
    [
        -151.9273,
        61.5228,
        95.1
    ],
    [
        -150.3551,
        60.8947,
        43.2
    ],
    [
        -111.4394,
        42.5767,
        8.98
    ],
    [
        -121.0045,
        36.4415,
        0.06
    ],
    [
        -150.0408,
        63.589,
        132.5
    ],
    [
        -150.3231,
        63.0526,
        91.1
    ],
    [
        -136.3488,
        68.1439,
        6.8
    ],
    [
        -156.1177,
        57.8245,
        115.5
    ],
    [
        -118.833833,
        37.506167,
        0.46
    ],
    [
        -151.1247,
        62.197,
        80.3
    ],
    [
        -122.996667,
        39.425333,
        0.77
    ],
    [
        -154.4495,
        58.785,
        109.1
    ],
    [
        -140.6854,
        61.515,
        2.6
    ],
    [
        -98.1391,
        37.351,
        10.96
    ],
    [
        -147.9819,
        62.3692,
        40.1
    ],
    [
        -98.3926,
        36.3885,
        15.33
    ],
    [
        -148.7975,
        61.8375,
        20.1
    ],
    [
        -122.821335,
        38.808834,
        2.14
    ],
    [
        -122.995167,
        39.428167,
        0.76
    ],
    [
        -127.1635,
        40.137833,
        15.62
    ],
    [
        -174.9091,
        51.7632,
        40.8
    ],
    [
        -111.421333,
        42.593667,
        5.84
    ],
    [
        -118.821333,
        37.6065,
        3.9
    ],
    [
        -111.415667,
        42.591167,
        5.46
    ],
    [
        -153.4995,
        59.282,
        98.9
    ],
    [
        -149.5495,
        63.4604,
        104.2
    ],
    [
        -152.3463,
        61.0393,
        106.1
    ],
    [
        -150.1075,
        61.1056,
        49.5
    ],
    [
        -153.3566,
        59.8225,
        132.2
    ],
    [
        -118.4887,
        38.6992,
        5
    ],
    [
        -149.09,
        62.8911,
        77.4
    ],
    [
        -149.5382,
        63.0052,
        72.9
    ],
    [
        -119.023333,
        37.519667,
        2.73
    ],
    [
        -121.905,
        48.235833,
        11.65
    ],
    [
        -139.9752,
        64.7557,
        17.5
    ],
    [
        -122.078,
        37.663333,
        7.74
    ],
    [
        -152.42,
        61.0462,
        108
    ],
    [
        -111.440333,
        42.584,
        3.5
    ],
    [
        -143.596,
        66.821,
        3.1
    ],
    [
        -154.1565,
        57.9069,
        53.3
    ],
    [
        -147.3908,
        68.9058,
        5
    ],
    [
        -146.4079,
        61.6728,
        40
    ],
    [
        -150.8998,
        65.8646,
        6.1
    ],
    [
        -118.88,
        37.535,
        2.88
    ],
    [
        -148.174,
        61.7151,
        0
    ],
    [
        -122.825333,
        38.840167,
        1.73
    ],
    [
        -151.4189,
        62.1612,
        87.1
    ],
    [
        140.558,
        28.7786,
        10
    ],
    [
        -150.1805,
        63.0271,
        90
    ],
    [
        -119.485667,
        38.5015,
        5.55
    ],
    [
        -178.1313,
        51.5863,
        44.2
    ],
    [
        -150.9834,
        61.0931,
        56.8
    ],
    [
        176.7195,
        51.6195,
        25.6
    ],
    [
        -177.5238,
        51.5739,
        68.8
    ],
    [
        -121.096,
        36.553167,
        9.44
    ],
    [
        -151.338,
        63.1851,
        0
    ],
    [
        -117.6855,
        35.838833,
        4.14
    ],
    [
        -118.823333,
        37.607,
        4.05
    ],
    [
        -150.3689,
        61.3755,
        23.9
    ],
    [
        -115.834333,
        32.734667,
        5.37
    ],
    [
        -155.421333,
        19.392167,
        9.534
    ],
    [
        -122.2205,
        38.063167,
        9.05
    ],
    [
        -66.6261,
        -23.7242,
        196.73
    ],
    [
        -170.4192,
        52.1877,
        22.9
    ],
    [
        -116.7675,
        33.325167,
        12.65
    ],
    [
        -178.4957,
        51.6758,
        15.5
    ],
    [
        -149.7058,
        62.131,
        34.9
    ],
    [
        -143.6191,
        66.8364,
        10.5
    ],
    [
        -118.9118,
        38.3801,
        6.4
    ],
    [
        -147.4437,
        61.9903,
        29.6
    ],
    [
        -112.525167,
        46.868167,
        10.62
    ],
    [
        -118.880833,
        37.536333,
        3.07
    ],
    [
        117.1706,
        -10.7291,
        10
    ],
    [
        145.2449,
        20.2657,
        10
    ],
    [
        -149.7694,
        61.6101,
        47.2
    ],
    [
        -118.823,
        37.610167,
        4.21
    ],
    [
        -121.6315,
        48.074,
        -0.77
    ],
    [
        -119.6237,
        38.7874,
        8.5
    ],
    [
        -155.1681,
        58.2365,
        0.7
    ],
    [
        -155.865167,
        19.430333,
        13.243
    ],
    [
        -122.751,
        38.783,
        2.58
    ],
    [
        -166.0108,
        65.3932,
        8.2
    ],
    [
        -149.7632,
        61.6155,
        48.1
    ],
    [
        -119.6325,
        38.7911,
        6.5
    ],
    [
        -136.6957,
        59.8727,
        1.2
    ],
    [
        -112.525167,
        46.867333,
        10.81
    ],
    [
        -112.53,
        46.878167,
        13.02
    ],
    [
        -118.817833,
        34.8665,
        6.68
    ],
    [
        -153.2642,
        60.2053,
        132.7
    ],
    [
        -69.1659,
        45.241,
        4.82
    ],
    [
        141.4054,
        37.4649,
        44.08
    ],
    [
        -159.6189,
        67.5652,
        16.4
    ],
    [
        -150.1188,
        61.1485,
        13
    ],
    [
        -149.8057,
        66.0421,
        6
    ],
    [
        -118.88,
        37.5365,
        3.19
    ],
    [
        -149.0895,
        61.7515,
        17.4
    ],
    [
        -117.767667,
        36.025167,
        1.05
    ],
    [
        -117.884833,
        33.846833,
        11.18
    ],
    [
        -112.285833,
        41.514167,
        1.58
    ],
    [
        -111.4205,
        42.5195,
        5.83
    ],
    [
        -152.0285,
        60.9615,
        99.9
    ],
    [
        -151.4519,
        60.4702,
        49.5
    ],
    [
        -147.9371,
        64.4345,
        12
    ],
    [
        -94.9228,
        16.6784,
        58.25
    ],
    [
        -150.9601,
        61.6771,
        57.6
    ],
    [
        -96.8025,
        35.9915,
        5.225
    ],
    [
        -118.876833,
        37.531833,
        2.55
    ],
    [
        -147.1846,
        68.5953,
        17.3
    ],
    [
        -118.8255,
        37.454833,
        2.13
    ],
    [
        -121.088333,
        36.5915,
        6.51
    ],
    [
        178.6248,
        51.535,
        13.6
    ],
    [
        -154.1124,
        61.418,
        10.3
    ],
    [
        -98.1712,
        37.3741,
        5
    ],
    [
        -98.1535,
        37.3739,
        5
    ],
    [
        151.8102,
        -5.2471,
        64.55
    ],
    [
        -118.878833,
        37.5315,
        2.34
    ],
    [
        -120.191167,
        36.174833,
        16.31
    ],
    [
        -112.5215,
        46.872833,
        14.45
    ],
    [
        -120.970833,
        36.399167,
        0.33
    ],
    [
        -118.8805,
        37.535167,
        2.92
    ],
    [
        -120.0173,
        39.5809,
        8.3
    ],
    [
        -116.3855,
        33.309667,
        7.18
    ],
    [
        -150.7449,
        64.3314,
        9.4
    ],
    [
        -148.7299,
        60.5992,
        21.1
    ],
    [
        -1.5206,
        47.8948,
        7.47
    ],
    [
        -83.8862,
        9.972,
        12.77
    ],
    [
        -151.2038,
        62.3276,
        80.2
    ],
    [
        -174.5433,
        52.3165,
        175.4
    ],
    [
        -116.9255,
        33.975833,
        5.98
    ],
    [
        -148.3529,
        60.5442,
        7.3
    ],
    [
        -111.946,
        38.905,
        8.36
    ],
    [
        -117.812,
        36.016833,
        1.28
    ],
    [
        -115.939667,
        33.686667,
        9.17
    ],
    [
        -150.5701,
        61.4562,
        64.2
    ],
    [
        -123.2635,
        39.396667,
        0.45
    ],
    [
        -149.9128,
        61.7015,
        46.8
    ],
    [
        -118.089667,
        35.6985,
        2.41
    ],
    [
        -122.794,
        38.821167,
        2.63
    ],
    [
        -115.1041,
        37.378,
        3.6
    ],
    [
        -112.526333,
        46.874833,
        14.66
    ],
    [
        -117.059,
        37.1112,
        7.3
    ],
    [
        -166.4042,
        53.8015,
        12.7
    ],
    [
        -122.731667,
        38.760166,
        1.18
    ],
    [
        -153.0633,
        60.0089,
        114.1
    ],
    [
        119.4365,
        -8.2451,
        154.02
    ],
    [
        -122.738335,
        38.755333,
        0.36
    ],
    [
        -146.2845,
        60.8545,
        21.3
    ],
    [
        -150.1097,
        62.4437,
        13.6
    ],
    [
        -149.6125,
        61.555,
        35.5
    ],
    [
        -118.832,
        37.5385,
        4.78
    ],
    [
        -117.392833,
        34.878667,
        4.66
    ],
    [
        -159.5885,
        67.5732,
        17.6
    ],
    [
        -116.758833,
        33.666667,
        13.28
    ],
    [
        -151.6143,
        63.0496,
        5.8
    ],
    [
        -140.0102,
        64.7419,
        2.4
    ],
    [
        -178.4287,
        51.666,
        13.3
    ],
    [
        -112.297667,
        41.517833,
        3.93
    ],
    [
        -151.7318,
        63.2463,
        16.3
    ],
    [
        -116.792167,
        33.505667,
        5.04
    ],
    [
        123.4716,
        24.998,
        125.83
    ],
    [
        -177.4366,
        51.4823,
        54.4
    ],
    [
        -122.745331,
        38.788502,
        0.88
    ],
    [
        -112.294333,
        41.516333,
        2.01
    ],
    [
        140.5824,
        28.7476,
        33.11
    ],
    [
        -155.233167,
        19.411667,
        26.335
    ],
    [
        -150.5065,
        62.8856,
        85.5
    ],
    [
        -151.3499,
        60.4052,
        65
    ],
    [
        140.5529,
        28.769,
        38.59
    ],
    [
        -73.9242,
        -10.8691,
        104.23
    ],
    [
        -122.7435,
        38.775167,
        0.33
    ],
    [
        -112.533833,
        46.865333,
        12.52
    ],
    [
        -154.5993,
        58.8739,
        125.1
    ],
    [
        -120.852333,
        36.770333,
        5.22
    ],
    [
        -120.307333,
        35.890833,
        9.61
    ],
    [
        -123.103667,
        46.818167,
        -0.37
    ],
    [
        -71.6095,
        -15.1614,
        131.74
    ],
    [
        -147.6538,
        61.2784,
        0
    ],
    [
        -119.024,
        37.520333,
        2.59
    ],
    [
        -151.9637,
        61.5729,
        96.7
    ],
    [
        -151.1366,
        60.2787,
        53.2
    ],
    [
        -139.1298,
        59.8511,
        15
    ],
    [
        -179.8525,
        51.0507,
        13.6
    ],
    [
        -138.178,
        61.5488,
        2.4
    ],
    [
        -116.481833,
        33.471167,
        13.16
    ],
    [
        -150.501,
        61.2429,
        47.8
    ],
    [
        -118.197,
        34.992,
        -0.84
    ],
    [
        -112.472833,
        46.002167,
        -2
    ],
    [
        -122.4435,
        38.569833,
        7.29
    ],
    [
        -117.193167,
        34.018167,
        9.75
    ],
    [
        -116.929,
        33.395,
        16.07
    ],
    [
        -112.524833,
        46.870667,
        11.9
    ],
    [
        -112.525,
        46.873167,
        11.84
    ],
    [
        -118.313333,
        35.0755,
        -0.97
    ],
    [
        -153.2174,
        55.267,
        28.1
    ],
    [
        -155.5095,
        57.4219,
        64
    ],
    [
        -117.8595,
        37.1805,
        -1.52
    ],
    [
        -112.542833,
        46.867,
        15.39
    ],
    [
        -136.8081,
        59.8933,
        18.4
    ],
    [
        -122.1055,
        37.325167,
        -0.31
    ],
    [
        -114.8105,
        37.3086,
        1
    ],
    [
        -151.0074,
        62.0045,
        73.7
    ],
    [
        -152.1276,
        62.1421,
        107.7
    ],
    [
        -111.9895,
        46.553167,
        -2
    ],
    [
        -116.796333,
        33.501667,
        4.58
    ],
    [
        -165.5261,
        52.9317,
        19
    ],
    [
        -150.0546,
        62.1579,
        12.9
    ],
    [
        -153.0431,
        59.4743,
        92.8
    ],
    [
        -154.1368,
        59.6598,
        0
    ],
    [
        -150.1018,
        64.1209,
        3.3
    ],
    [
        -165.6494,
        52.9731,
        12.9
    ],
    [
        -114.0737,
        44.3257,
        12.14
    ],
    [
        -118.836,
        37.569167,
        1.23
    ],
    [
        -116.795833,
        33.502,
        4.86
    ],
    [
        -143.7065,
        67.422,
        11
    ],
    [
        -122.995833,
        39.432667,
        3.11
    ],
    [
        119.9926,
        -7.5373,
        611.74
    ],
    [
        129.0234,
        -7.2935,
        121.06
    ],
    [
        -121.231667,
        35.611,
        3.55
    ],
    [
        -152.9254,
        58.9648,
        66.9
    ],
    [
        -112.533333,
        46.866,
        13.41
    ],
    [
        -118.989167,
        37.558167,
        1.34
    ],
    [
        -153.7404,
        58.8609,
        4.5
    ],
    [
        -119.417833,
        34.440833,
        0.65
    ],
    [
        -118.8715,
        37.492667,
        3.48
    ],
    [
        -151.3466,
        59.8103,
        47.9
    ],
    [
        -155.561,
        57.6875,
        76.6
    ],
    [
        -121.941333,
        47.1825,
        15.72
    ],
    [
        -154.3316,
        56.7652,
        41.8
    ],
    [
        -139.533,
        60.0761,
        0
    ],
    [
        -155.401167,
        19.199167,
        32.961
    ],
    [
        -150.649,
        61.9693,
        57
    ],
    [
        -152.2196,
        59.6108,
        85.6
    ],
    [
        -150.3755,
        61.9643,
        42.4
    ],
    [
        -112.5215,
        46.870167,
        11.81
    ],
    [
        -151.5503,
        65.1678,
        11.6
    ],
    [
        -117.7233,
        40.1708,
        10.7
    ],
    [
        -117.935333,
        34.4565,
        9.26
    ],
    [
        -118.840667,
        37.5315,
        -1.51
    ],
    [
        -121.243667,
        39.398333,
        12.87
    ],
    [
        -122.745833,
        38.784333,
        1.01
    ],
    [
        -112.555,
        46.8463,
        8.48
    ],
    [
        179.4288,
        51.3519,
        42.3
    ],
    [
        -143.1318,
        60.4494,
        8.4
    ],
    [
        -150.0235,
        61.6238,
        41
    ],
    [
        -150.9213,
        61.1389,
        61.5
    ],
    [
        -112.528667,
        46.869667,
        13.01
    ],
    [
        -148.4582,
        62.4107,
        39
    ],
    [
        -168.2773,
        65.177,
        2.3
    ],
    [
        -153.1779,
        58.0206,
        30.7
    ],
    [
        -135.4027,
        59.1963,
        7.9
    ],
    [
        -151.9174,
        59.9564,
        76.1
    ],
    [
        -116.789667,
        33.489167,
        5.35
    ],
    [
        -112.526833,
        46.881,
        13.2
    ],
    [
        -103.2764,
        31.1697,
        5
    ],
    [
        -122.809,
        38.828833,
        0.37
    ],
    [
        -121.074167,
        36.490333,
        6.54
    ],
    [
        -136.664,
        59.7325,
        12.8
    ],
    [
        -121.621833,
        36.9715,
        5.05
    ],
    [
        -141.3194,
        60.198,
        0
    ],
    [
        -118.830667,
        37.480333,
        -1.14
    ],
    [
        -152.8154,
        59.9932,
        104.2
    ],
    [
        -152.1528,
        59.8387,
        71.2
    ],
    [
        -140.0126,
        61.1428,
        12.4
    ],
    [
        -143.6373,
        60.4592,
        9.8
    ],
    [
        -155.2035,
        19.597167,
        24.581
    ],
    [
        -117.2622,
        38.0846,
        9.6
    ],
    [
        -103.2693,
        31.1511,
        5
    ],
    [
        -118.819167,
        37.604333,
        4.32
    ],
    [
        -112.529667,
        46.8705,
        10.5
    ],
    [
        -111.067,
        42.665833,
        6.6
    ],
    [
        -116.0485,
        33.171333,
        5.5
    ],
    [
        -71.3374,
        -29.45,
        38.77
    ],
    [
        -135.4344,
        59.1851,
        6.2
    ],
    [
        -111.061667,
        42.664667,
        5
    ],
    [
        -116.052,
        33.172,
        6.03
    ],
    [
        -115.542667,
        32.944667,
        6.67
    ],
    [
        54.1871,
        28.1091,
        45.31
    ],
    [
        -152.4269,
        65.2147,
        15.4
    ],
    [
        179.5053,
        51.0555,
        12.3
    ],
    [
        -122.570833,
        38.927167,
        9.62
    ],
    [
        -179.1801,
        -21.2747,
        610.22
    ],
    [
        -118.8395,
        37.568167,
        1.44
    ],
    [
        -153.5535,
        59.8103,
        129.5
    ],
    [
        -97.776167,
        37.332333,
        4.84
    ],
    [
        -122.818169,
        38.816334,
        2.44
    ],
    [
        -154.5074,
        58.9707,
        125.1
    ],
    [
        -118.0035,
        38.4922,
        2.7
    ],
    [
        -175.3064,
        51.5599,
        38.1
    ],
    [
        -119.1202,
        38.2811,
        9.2
    ],
    [
        -150.4062,
        59.5783,
        46.7
    ],
    [
        -119.377,
        34.425667,
        6.94
    ],
    [
        -146.74,
        66.8722,
        13.4
    ],
    [
        -179.6222,
        51.5723,
        70.6
    ],
    [
        -150.3009,
        62.1686,
        20.4
    ],
    [
        -97.966167,
        37.277667,
        3.84
    ],
    [
        -148.227,
        67.4203,
        2.2
    ],
    [
        -112.53,
        46.8695,
        10.41
    ],
    [
        -150.2772,
        62.1792,
        19.3
    ],
    [
        -97.886,
        37.201833,
        5.78
    ],
    [
        -112.536833,
        46.867667,
        13.76
    ],
    [
        -119.114,
        38.2859,
        6
    ],
    [
        -119.3735,
        34.4205,
        2.68
    ],
    [
        -116.296833,
        33.257333,
        11.15
    ],
    [
        -122.492333,
        37.643167,
        10.59
    ],
    [
        -116.050333,
        33.1715,
        3.79
    ],
    [
        -117.1045,
        34.032667,
        6.24
    ],
    [
        -136.7916,
        59.8749,
        12.6
    ],
    [
        -151.8594,
        59.8596,
        52.6
    ],
    [
        -116.011667,
        33.275333,
        2.98
    ],
    [
        -116.796667,
        33.492,
        4.46
    ],
    [
        -119.372333,
        34.4215,
        3.6
    ],
    [
        -110.7735,
        44.765667,
        7.75
    ],
    [
        -122.784333,
        38.836667,
        1.36
    ],
    [
        139.7504,
        -3.5926,
        60.39
    ],
    [
        -119.6245,
        38.788,
        6.4
    ],
    [
        -43.5388,
        28.7234,
        10
    ],
    [
        -103.2078,
        31.1233,
        1.49
    ],
    [
        -119.004333,
        37.796167,
        1.79
    ],
    [
        -178.399,
        51.7067,
        17.6
    ],
    [
        -153.0454,
        59.6347,
        103.9
    ],
    [
        -122.555,
        44.547167,
        12.72
    ],
    [
        -121.683,
        45.372667,
        -1.63
    ],
    [
        -115.519833,
        32.888,
        10.14
    ],
    [
        -178.3801,
        51.6434,
        13.2
    ],
    [
        -122.880667,
        38.659333,
        5.9
    ],
    [
        -145.6852,
        64.9151,
        3.6
    ],
    [
        -118.4858,
        38.7006,
        5.4
    ],
    [
        -97.8806,
        37.2184,
        2.69
    ],
    [
        179.3827,
        51.4303,
        27.7
    ],
    [
        -116.628167,
        35.076167,
        10
    ],
    [
        -146.3878,
        61.6649,
        31.2
    ],
    [
        -149.6683,
        62.8518,
        73
    ],
    [
        -165.6565,
        53.4796,
        20
    ],
    [
        -68.4332,
        -21.409,
        120.07
    ],
    [
        -150.7491,
        63.2266,
        126.1
    ],
    [
        126.6287,
        4.6053,
        83.93
    ],
    [
        -155.2738,
        57.0675,
        69.2
    ],
    [
        -116.7765,
        33.325667,
        11.63
    ],
    [
        -89.549667,
        36.4815,
        9.25
    ],
    [
        -178.4471,
        51.7337,
        16.9
    ],
    [
        -152.0762,
        58.2594,
        21.7
    ],
    [
        142.4161,
        40.39,
        49.52
    ],
    [
        -150.7558,
        60.1282,
        31.9
    ],
    [
        -147.0546,
        60.9937,
        12.2
    ],
    [
        145.0971,
        14.1324,
        113.77
    ],
    [
        -149.0231,
        64.8914,
        16.1
    ],
    [
        -116.792667,
        33.506,
        6.88
    ],
    [
        -149.2412,
        61.8508,
        14.7
    ],
    [
        -118.873833,
        37.624833,
        2.99
    ],
    [
        -117.679333,
        35.033667,
        -0.8
    ],
    [
        -94.2432,
        15.0466,
        41.01
    ],
    [
        -151.6178,
        65.1477,
        10.9
    ],
    [
        -112.632,
        46.8715,
        5.29
    ],
    [
        -147.3996,
        64.9811,
        0
    ],
    [
        -152.0673,
        63.4886,
        10.1
    ],
    [
        -122.808502,
        38.832001,
        1.23
    ],
    [
        -152.9009,
        59.9001,
        97.4
    ],
    [
        -119.6252,
        38.7877,
        5.9
    ],
    [
        -11.6494,
        -2.0113,
        10
    ],
    [
        -123.953167,
        44.251833,
        24.14
    ],
    [
        -116.304167,
        33.253667,
        10.84
    ],
    [
        -116.216,
        33.010333,
        6.85
    ],
    [
        -72.2376,
        -31.7843,
        7.09
    ],
    [
        -119.6217,
        38.7826,
        6.1
    ],
    [
        -116.750667,
        33.516333,
        3.18
    ],
    [
        -127.0155,
        40.263833,
        11.96
    ],
    [
        -153.0128,
        59.6612,
        95.4
    ],
    [
        -153.3493,
        59.8886,
        123.7
    ],
    [
        -179.9476,
        -23.5856,
        538.01
    ],
    [
        -122.810333,
        38.8215,
        0.97
    ],
    [
        -112.496,
        46.8605,
        16.29
    ],
    [
        -151.0111,
        65.8632,
        12.1
    ],
    [
        -110.515167,
        43.545833,
        12.83
    ],
    [
        -136.56,
        59.8031,
        16.5
    ],
    [
        -146.6788,
        61.3357,
        16.8
    ],
    [
        -122.735333,
        38.789833,
        1.23
    ],
    [
        -155.471167,
        19.227667,
        34.865
    ],
    [
        -121.609667,
        36.888333,
        1.8
    ],
    [
        142.4059,
        40.3206,
        36.04
    ],
    [
        -151.1826,
        62.1538,
        80.2
    ],
    [
        -97.9668,
        37.2773,
        4.05
    ],
    [
        -152.8619,
        59.5574,
        79.6
    ],
    [
        -152.0714,
        61.2493,
        0
    ],
    [
        -150.6417,
        63.0711,
        110.3
    ],
    [
        -120.989167,
        35.677333,
        -0.35
    ],
    [
        -112.4975,
        46.900667,
        11.16
    ],
    [
        -120.6625,
        36.100833,
        0.94
    ],
    [
        -122.398833,
        46.488167,
        17.99
    ],
    [
        -116.897333,
        32.7725,
        -0.37
    ],
    [
        -111.413167,
        45.912833,
        -2
    ],
    [
        -116.797167,
        33.509,
        6.71
    ],
    [
        -119.4885,
        38.5144,
        10.4
    ],
    [
        -146.4352,
        61.6115,
        33
    ],
    [
        132.7412,
        1.2169,
        17.7
    ],
    [
        -122.783165,
        38.837833,
        0.59
    ],
    [
        -94.6352,
        16.5993,
        104.33
    ],
    [
        -150.9798,
        65.8633,
        10.8
    ],
    [
        -112.531667,
        46.869333,
        10.26
    ],
    [
        -148.2303,
        62.9438,
        64.9
    ],
    [
        -122.46,
        37.983333,
        -0.05
    ],
    [
        -150.9789,
        62.4498,
        80.4
    ],
    [
        -122.811,
        38.812,
        2.48
    ],
    [
        -116.7965,
        33.5035,
        6.49
    ],
    [
        -118.948,
        35.292167,
        17.31
    ],
    [
        -155.231,
        19.290833,
        8.96
    ],
    [
        -152.1914,
        59.4295,
        70.7
    ],
    [
        -117.813667,
        36.025833,
        1.31
    ],
    [
        -117.8115,
        36.028167,
        0.41
    ],
    [
        -148.1385,
        62.9479,
        63.9
    ],
    [
        -112.532,
        46.8605,
        12.58
    ],
    [
        -151.8207,
        61.1514,
        89.2
    ],
    [
        -122.884,
        43.419667,
        -0.5
    ],
    [
        -121.291667,
        36.660333,
        3.36
    ],
    [
        -161.7955,
        55.6327,
        123.4
    ],
    [
        -112.530333,
        46.872167,
        11.4
    ],
    [
        -155.0092,
        56.5802,
        60.1
    ],
    [
        -152.3757,
        60.912,
        119.8
    ],
    [
        -149.837,
        62.5503,
        9.8
    ],
    [
        -152.4629,
        59.6817,
        72.4
    ],
    [
        -148.3694,
        61.142,
        20.5
    ],
    [
        -150.0798,
        62.3953,
        8.2
    ],
    [
        -147.5248,
        63.5317,
        72.7
    ],
    [
        -111.442,
        42.558833,
        7.1
    ],
    [
        -115.823833,
        33.4855,
        7.53
    ],
    [
        -118.809833,
        37.472833,
        3.95
    ],
    [
        -112.498,
        46.901167,
        10.66
    ],
    [
        -122.182167,
        40.8515,
        3.06
    ],
    [
        -111.139833,
        42.7365,
        4.13
    ],
    [
        -116.289833,
        33.302833,
        10.93
    ],
    [
        -111.4364,
        42.61,
        9.35
    ],
    [
        -118.821,
        37.6035,
        4.3
    ],
    [
        -155.504837,
        19.188499,
        37
    ],
    [
        -146.3857,
        61.4705,
        26
    ],
    [
        -112.090667,
        41.940333,
        4.24
    ],
    [
        -139.9329,
        61.1528,
        1.5
    ],
    [
        -138.6533,
        59.6178,
        1.5
    ],
    [
        -110.9865,
        44.768833,
        6.31
    ],
    [
        177.8212,
        50.3055,
        25.6
    ],
    [
        -157.5906,
        57.0801,
        1.8
    ],
    [
        -155.617667,
        19.403833,
        11.352
    ],
    [
        -120.617833,
        36.045,
        5.05
    ],
    [
        -164.7207,
        53.0759,
        5.8
    ],
    [
        -71.3743,
        -28.3432,
        19.86
    ],
    [
        -148.9281,
        62.7345,
        65.1
    ],
    [
        -115.097167,
        32.109167,
        21.13
    ],
    [
        -116.275333,
        33.9755,
        2.98
    ],
    [
        -147.1982,
        63.4664,
        63.2
    ],
    [
        -120.2285,
        36.1555,
        11.25
    ],
    [
        -115.599833,
        33.196,
        3.24
    ],
    [
        -153.5507,
        57.5978,
        9.6
    ],
    [
        -150.7286,
        62.9807,
        109.5
    ],
    [
        -132.545,
        57.8313,
        1.5
    ],
    [
        -177.9939,
        51.4819,
        42.9
    ],
    [
        -179.9246,
        51.994,
        156.7
    ],
    [
        -74.1449,
        -37.4108,
        11.74
    ],
    [
        -156.8671,
        57.0274,
        77.7
    ],
    [
        -118.786167,
        37.594333,
        4.9
    ],
    [
        -153.0976,
        58.7839,
        68.4
    ],
    [
        -155.293667,
        19.364833,
        29.473
    ],
    [
        -112.524667,
        46.871167,
        11.47
    ],
    [
        -151.0017,
        63.0698,
        125.5
    ],
    [
        -140.0459,
        60.021,
        7.6
    ],
    [
        -122.737833,
        38.803333,
        1.75
    ],
    [
        168.1159,
        -17.1048,
        50.5
    ],
    [
        -166.412,
        53.8051,
        14.4
    ],
    [
        -152.7411,
        59.5065,
        69.7
    ],
    [
        -112.4815,
        38.756167,
        9.29
    ],
    [
        -111.387167,
        44.8185,
        11.24
    ],
    [
        -139.9572,
        61.1571,
        5.2
    ],
    [
        -118.8963,
        38.401,
        10.7
    ],
    [
        -153.2644,
        60.0718,
        129.8
    ],
    [
        -119.041333,
        37.633667,
        -1.57
    ],
    [
        -147.8181,
        63.4737,
        2.7
    ],
    [
        -152.9641,
        60.3111,
        134.7
    ],
    [
        -117.104333,
        34.0325,
        5.61
    ],
    [
        -118.931833,
        37.595833,
        0.06
    ],
    [
        -151.8017,
        59.9121,
        74.3
    ],
    [
        -148.402,
        60.1704,
        11.6
    ],
    [
        -153.871,
        57.3937,
        48.6
    ],
    [
        -150.6564,
        63.2669,
        130.1
    ],
    [
        -118.8949,
        38.3653,
        6.5
    ],
    [
        -119.0225,
        37.5205,
        2.13
    ],
    [
        -77.3187,
        -5.8706,
        42.3
    ],
    [
        -118.810667,
        37.473333,
        3.46
    ],
    [
        115.4547,
        -8.3437,
        7.77
    ],
    [
        -145.2525,
        63.3098,
        5.4
    ],
    [
        178.8693,
        -24.5502,
        549.9
    ],
    [
        -151.558,
        61.3722,
        73.1
    ],
    [
        -118.8996,
        38.399,
        10.5
    ],
    [
        -162.222,
        52.6448,
        36.78
    ],
    [
        -116.4375,
        33.438833,
        9.57
    ],
    [
        -146.6643,
        61.4913,
        19.2
    ],
    [
        -147.6643,
        61.6414,
        22.2
    ],
    [
        -152.2404,
        59.9305,
        72.2
    ],
    [
        -153.6597,
        58.8354,
        4.6
    ],
    [
        -118.914,
        37.573833,
        -1.62
    ],
    [
        -122.807833,
        38.8245,
        2.94
    ],
    [
        -135.8603,
        66.702,
        16.5
    ],
    [
        -152.82,
        59.4363,
        78.5
    ],
    [
        -149.778,
        62.2517,
        10.2
    ],
    [
        -110.651333,
        44.820667,
        6.96
    ],
    [
        -152.1721,
        59.3036,
        66.6
    ],
    [
        -152.737,
        59.5006,
        82.3
    ],
    [
        -118.498833,
        34.926833,
        12.29
    ],
    [
        101.3356,
        -5.7378,
        10
    ],
    [
        -66.5505,
        -21.3378,
        232.1
    ],
    [
        -112.522667,
        46.9085,
        12.2
    ],
    [
        -93.9602,
        15.0621,
        55.84
    ],
    [
        -153.1229,
        59.9191,
        124.6
    ],
    [
        -118.825667,
        37.454833,
        1.23
    ],
    [
        -122.798332,
        38.824833,
        2.56
    ],
    [
        -112.5275,
        46.880667,
        10.59
    ],
    [
        -117.061,
        34.207167,
        1.9
    ],
    [
        -117.064333,
        34.207333,
        2.74
    ],
    [
        -117.0413,
        37.0804,
        8.5
    ],
    [
        -143.4106,
        60.9055,
        24.6
    ],
    [
        -176.9366,
        -23.7135,
        98.07
    ],
    [
        -112.525167,
        46.8815,
        10.93
    ],
    [
        -153.643,
        58.8409,
        11.9
    ],
    [
        -153.6304,
        58.8355,
        8.8
    ],
    [
        -148.8611,
        62.7984,
        13.7
    ],
    [
        -118.823667,
        37.455333,
        2.55
    ],
    [
        -122.764167,
        38.956,
        1.48
    ],
    [
        -110.943167,
        39.753833,
        3.39
    ],
    [
        -153.7269,
        58.5151,
        73.1
    ],
    [
        -151.2988,
        62.3609,
        81.6
    ],
    [
        -122.737167,
        47.576333,
        17.19
    ],
    [
        -136.6717,
        59.8577,
        3.5
    ],
    [
        -97.620667,
        37.161167,
        4.48
    ],
    [
        -118.823833,
        37.4545,
        2.28
    ],
    [
        -136.5638,
        59.8105,
        0.8
    ],
    [
        -149.4631,
        62.5638,
        3.1
    ],
    [
        -148.2072,
        61.6959,
        2.7
    ],
    [
        -121.9235,
        46.755833,
        4.01
    ],
    [
        -153.9619,
        58.719,
        83.8
    ],
    [
        -151.393,
        62.6136,
        80.1
    ],
    [
        -140.6474,
        61.5055,
        2.1
    ],
    [
        -178.2892,
        -18.0618,
        578.88
    ],
    [
        -146.8119,
        61.2841,
        12.9
    ],
    [
        -150.616,
        62.8641,
        85.2
    ],
    [
        -68.2679,
        -38.2792,
        18.61
    ],
    [
        -143.7961,
        60.4358,
        8.6
    ],
    [
        -77.6296,
        -12.1347,
        37.62
    ],
    [
        -150.6406,
        61.6796,
        57.6
    ],
    [
        -148.0359,
        62.3774,
        41.7
    ],
    [
        -122.759667,
        38.955667,
        4.16
    ],
    [
        -118.0721,
        39.3599,
        7.9
    ],
    [
        130.4109,
        -4.9919,
        96.04
    ],
    [
        3.755,
        79.5651,
        10
    ],
    [
        -136.7759,
        59.8203,
        3.6
    ],
    [
        -155.826167,
        19.509167,
        12.397
    ],
    [
        -122.7125,
        38.7455,
        1.45
    ],
    [
        -120.579,
        36.013,
        4.29
    ],
    [
        -116.792667,
        33.508833,
        4.84
    ],
    [
        -117.681667,
        35.033833,
        -0.82
    ],
    [
        -119.320667,
        37.6445,
        0.55
    ],
    [
        -112.523833,
        46.872833,
        11.66
    ],
    [
        115.85,
        -10.6682,
        39.69
    ],
    [
        -116.0935,
        33.013167,
        -0.56
    ],
    [
        -122.7885,
        38.832167,
        1.97
    ],
    [
        -74.513833,
        40.798667,
        5
    ],
    [
        -153.4035,
        60.0163,
        139.3
    ],
    [
        -112.528833,
        46.865833,
        11.47
    ],
    [
        -98.154,
        37.3519,
        3.31
    ],
    [
        -154.034,
        64.3489,
        10.2
    ],
    [
        124.3318,
        0.8223,
        219.8
    ],
    [
        -111.460833,
        42.646667,
        2.74
    ],
    [
        -177.4659,
        -19.6395,
        545.66
    ],
    [
        -145.4807,
        65.756,
        6.2
    ],
    [
        -116.792333,
        33.492,
        4.2
    ],
    [
        -121.748833,
        46.851167,
        1.54
    ],
    [
        -116.200667,
        33.034833,
        4.46
    ],
    [
        -118.887667,
        37.572333,
        1.73
    ],
    [
        -149.2776,
        63.8003,
        116.2
    ],
    [
        -151.1161,
        63.268,
        1.6
    ],
    [
        -121.791667,
        37.454333,
        7.33
    ],
    [
        -147.0547,
        61.007,
        13.8
    ],
    [
        -117.492167,
        33.822333,
        -0.52
    ],
    [
        -115.220833,
        32.220833,
        20.46
    ],
    [
        152.7133,
        -6.2113,
        5.98
    ],
    [
        -155.421333,
        19.223333,
        34.311
    ],
    [
        -112.526,
        46.868,
        10.18
    ],
    [
        -99.1495,
        36.4119,
        5.948
    ],
    [
        107.7299,
        -5.8793,
        306.63
    ],
    [
        -112.530333,
        46.8795,
        12.77
    ],
    [
        -139.5073,
        60.0082,
        0
    ],
    [
        -150.5651,
        61.4244,
        63
    ],
    [
        -140.7001,
        61.5145,
        4.5
    ],
    [
        -127.1586,
        40.3587,
        11.36
    ],
    [
        -136.8124,
        59.8382,
        15.4
    ],
    [
        -122.785167,
        38.8375,
        1.88
    ],
    [
        179.3689,
        51.4218,
        56.7
    ],
    [
        -117.018667,
        33.163167,
        -0.77
    ],
    [
        -155.950667,
        19.540833,
        15.491
    ],
    [
        -178.478,
        51.697,
        15.5
    ],
    [
        -118.4445,
        35.5745,
        10.25
    ],
    [
        -116.862667,
        34.343333,
        -1.71
    ],
    [
        -112.712833,
        41.8725,
        4.98
    ],
    [
        -150.8085,
        63.1578,
        132.2
    ],
    [
        -116.790833,
        33.495667,
        4.4
    ],
    [
        -119.689,
        40.0864,
        4.7
    ],
    [
        -152.8848,
        59.5329,
        96.9
    ],
    [
        -112.5255,
        46.866667,
        10.23
    ],
    [
        -120.781833,
        36.209,
        7.55
    ],
    [
        -152.7347,
        60.3302,
        112.7
    ],
    [
        -112.525167,
        46.8665,
        10.3
    ],
    [
        -116.792667,
        33.4945,
        4.5
    ],
    [
        106.3876,
        -5.9298,
        150.05
    ],
    [
        -122.104,
        37.324,
        -0.31
    ],
    [
        -138.2167,
        63.9342,
        1.9
    ],
    [
        -111.615667,
        46.316833,
        -2
    ],
    [
        -153.1637,
        59.6819,
        106.7
    ],
    [
        -120.778667,
        36.215667,
        8.08
    ],
    [
        -127.3303,
        40.4414,
        11.43
    ],
    [
        -116.797167,
        33.486667,
        3.04
    ],
    [
        -174.7769,
        51.9886,
        24.6
    ],
    [
        -116.977,
        33.995333,
        18.14
    ],
    [
        -153.4355,
        59.7613,
        127.9
    ],
    [
        -121.679333,
        40.288667,
        4.66
    ],
    [
        -120.322,
        35.752333,
        11.93
    ],
    [
        -122.811333,
        38.794833,
        2.79
    ],
    [
        -116.858833,
        33.8575,
        16.19
    ],
    [
        -115.9285,
        31.688833,
        11.63
    ],
    [
        -112.534667,
        46.896,
        11.48
    ],
    [
        -112.531833,
        46.867,
        11.31
    ],
    [
        -150.8601,
        62.0271,
        60.3
    ],
    [
        -141.3984,
        60.1663,
        0
    ],
    [
        -143.1565,
        60.3908,
        0.4
    ],
    [
        -153.6264,
        58.8255,
        1.4
    ],
    [
        -150.0949,
        59.636,
        10.7
    ],
    [
        167.4691,
        -14.8531,
        132.07
    ],
    [
        -136.8449,
        59.8126,
        1.3
    ],
    [
        -112.521333,
        46.870833,
        11
    ],
    [
        -116.552,
        33.526167,
        13.79
    ],
    [
        -151.2671,
        59.9538,
        54.3
    ],
    [
        167.0258,
        -12.6224,
        229.97
    ],
    [
        -118.953833,
        34.8405,
        11.97
    ],
    [
        -94.1777,
        15.5423,
        60.99
    ],
    [
        -122.838333,
        38.837334,
        1.55
    ],
    [
        -147.0448,
        63.3492,
        76.8
    ],
    [
        -71.99,
        -32.683,
        24
    ],
    [
        -122.838,
        38.837833,
        1.83
    ],
    [
        -116.271667,
        33.976667,
        5.12
    ],
    [
        178.6657,
        -38.3887,
        23
    ],
    [
        -177.0765,
        51.5898,
        46.8
    ],
    [
        -140.7016,
        61.5212,
        15.4
    ],
    [
        -150.4545,
        63.1289,
        110.5
    ],
    [
        -120.787167,
        36.211667,
        7.46
    ],
    [
        -165.2595,
        53.699,
        44.2
    ],
    [
        -156.1793,
        57.6776,
        1.1
    ],
    [
        -118.862667,
        37.613167,
        7.06
    ],
    [
        -152.2424,
        60.321,
        83.8
    ],
    [
        -119.241667,
        34.439,
        7.98
    ],
    [
        -71.282,
        -28.2916,
        30.33
    ],
    [
        -121.000167,
        36.431,
        -0.28
    ],
    [
        -118.559,
        35.341833,
        7.37
    ],
    [
        -156.7013,
        64.8764,
        7.9
    ],
    [
        138.5087,
        34.8799,
        210.56
    ],
    [
        -120.256667,
        36.100167,
        9.6
    ],
    [
        -178.4582,
        -17.8551,
        595.96
    ],
    [
        -178.4978,
        -17.9975,
        539.99
    ],
    [
        -178.4489,
        51.676,
        14.4
    ],
    [
        -155.473667,
        19.201667,
        36.657
    ],
    [
        -117.471167,
        34.247833,
        12.2
    ],
    [
        -149.3115,
        62.9535,
        74.5
    ],
    [
        -119.938333,
        37.838667,
        4.07
    ],
    [
        -156.023667,
        19.815,
        11.479
    ],
    [
        -112.521667,
        46.869333,
        11.15
    ],
    [
        -146.8893,
        60.3211,
        15.1
    ],
    [
        -116.7915,
        33.506667,
        6.39
    ],
    [
        -118.6475,
        37.476667,
        8.18
    ],
    [
        -120.2805,
        36.094,
        6.76
    ],
    [
        -122.839333,
        38.843166,
        3.5
    ],
    [
        139.9741,
        -3.5898,
        72.65
    ],
    [
        -117.943,
        37.551,
        8.3
    ],
    [
        -112.523833,
        46.872333,
        11.79
    ],
    [
        -112.523,
        46.875167,
        11.91
    ],
    [
        154.0023,
        -5.3939,
        63.28
    ],
    [
        -139.8097,
        60.337,
        8.5
    ],
    [
        -177.9674,
        51.7565,
        11
    ],
    [
        -177.9649,
        51.7427,
        10.3
    ],
    [
        -121.401667,
        37.650667,
        3.17
    ],
    [
        -112.525833,
        46.879333,
        11.49
    ],
    [
        -118.9249,
        38.3947,
        7.3
    ],
    [
        -116.790167,
        33.497667,
        5.47
    ],
    [
        -178.4079,
        51.6208,
        15.5
    ],
    [
        -151.3579,
        60.2131,
        58.5
    ],
    [
        -147.4142,
        68.5865,
        13.2
    ],
    [
        -139.991,
        61.1695,
        1.9
    ],
    [
        -118.1098,
        39.0988,
        9.7
    ],
    [
        -148.9036,
        64.8595,
        12.5
    ],
    [
        -118.815,
        33.9555,
        13.94
    ],
    [
        -112.5238,
        46.8486,
        10.68
    ],
    [
        -118.568,
        35.1735,
        8.56
    ],
    [
        -118.8911,
        38.3811,
        7.8
    ],
    [
        -150.2932,
        60.6736,
        39.3
    ],
    [
        -152.8348,
        59.5881,
        89.7
    ],
    [
        -111.448333,
        38.993,
        -0.41
    ],
    [
        -154.6407,
        58.3143,
        7.7
    ],
    [
        129.4008,
        -4.8417,
        219.24
    ],
    [
        -111.448,
        42.620667,
        6.55
    ],
    [
        -97.968667,
        37.281833,
        5
    ],
    [
        -93.7801,
        14.8764,
        57.41
    ],
    [
        -118.818667,
        37.478667,
        0.05
    ],
    [
        -118.8175,
        37.479333,
        0.19
    ],
    [
        -160.5224,
        64.5882,
        8.3
    ],
    [
        -71.5244,
        -30.022,
        35
    ],
    [
        -94.1793,
        15.5215,
        66.49
    ],
    [
        -118.818167,
        37.478667,
        0.73
    ],
    [
        106.9645,
        -8.3755,
        34.69
    ],
    [
        -118.818833,
        37.478167,
        0.69
    ],
    [
        -119.5993,
        41.6963,
        11.8
    ],
    [
        -152.7721,
        59.5535,
        80.8
    ],
    [
        -116.738333,
        33.655,
        17.08
    ],
    [
        -25.7407,
        -59.0289,
        23.15
    ],
    [
        -119.604,
        41.7004,
        6.9
    ],
    [
        -112.538333,
        46.891333,
        11.64
    ],
    [
        -152.9967,
        59.5158,
        86
    ],
    [
        -155.2438,
        65.7781,
        4
    ],
    [
        -146.4148,
        69.0584,
        10.9
    ],
    [
        -117.909,
        37.334167,
        8.51
    ],
    [
        -122.705833,
        39.697,
        8.09
    ],
    [
        -155.0479,
        57.5544,
        76.8
    ],
    [
        -150.9489,
        61.4034,
        66.1
    ],
    [
        -116.8855,
        37.2234,
        7
    ],
    [
        -27.4466,
        -60.0959,
        87.69
    ],
    [
        -122.80867,
        38.800999,
        1.95
    ],
    [
        -122.810833,
        38.797667,
        3.49
    ],
    [
        -119.1325,
        38.050167,
        2.51
    ],
    [
        -145.1369,
        63.4162,
        5.3
    ],
    [
        -94.7839,
        15.5489,
        36.62
    ],
    [
        -150.5906,
        61.3427,
        45.2
    ],
    [
        -151.457,
        63.4294,
        4.6
    ],
    [
        -148.0928,
        61.1303,
        26.5
    ],
    [
        -151.7179,
        62.8463,
        7.1
    ],
    [
        -122.797501,
        38.824165,
        1.31
    ],
    [
        -153.8303,
        63.2243,
        16.3
    ],
    [
        -119.943833,
        48.589333,
        4.05
    ],
    [
        -150.6826,
        63.2689,
        133.7
    ],
    [
        -116.813167,
        34.048833,
        13.41
    ],
    [
        -148.6095,
        62.9432,
        11.3
    ],
    [
        -116.765333,
        33.325667,
        12.51
    ],
    [
        -141.6787,
        59.995,
        9.3
    ],
    [
        -141.667,
        59.9936,
        9.8
    ],
    [
        -155.050167,
        19.765,
        47.26
    ],
    [
        -152.57,
        59.4416,
        74.8
    ],
    [
        -149.5629,
        61.3391,
        37
    ],
    [
        -141.1978,
        60.2569,
        10.7
    ],
    [
        -151.6915,
        61.3592,
        87.6
    ],
    [
        -162.4539,
        55.424,
        127.9
    ],
    [
        -118.821,
        37.470667,
        1.2
    ],
    [
        -115.721333,
        32.171167,
        -0.08
    ],
    [
        -94.6458,
        15.9582,
        41.89
    ],
    [
        -122.760333,
        38.787333,
        2.66
    ],
    [
        -118.902833,
        37.434167,
        1.61
    ],
    [
        -111.028,
        44.797667,
        10.68
    ],
    [
        -151.0832,
        61.9049,
        66.6
    ],
    [
        -154.9051,
        57.7026,
        76.6
    ],
    [
        -152.9559,
        60.0816,
        113.8
    ],
    [
        -117.0863,
        37.3768,
        7.7
    ],
    [
        130.3868,
        31.2471,
        159.23
    ],
    [
        -94.3651,
        15.6767,
        54.03
    ],
    [
        -111.424667,
        42.575667,
        3.5
    ],
    [
        -150.934,
        60.3588,
        65.2
    ],
    [
        -118.799167,
        37.544833,
        8.63
    ],
    [
        -150.0019,
        62.1675,
        14.1
    ],
    [
        -150.9808,
        60.2626,
        58.2
    ],
    [
        -119.123,
        38.044833,
        2.62
    ],
    [
        -154.9667,
        58.2749,
        2.3
    ],
    [
        -111.027,
        44.7975,
        11.07
    ],
    [
        -122.80867,
        38.824501,
        1.89
    ],
    [
        -115.1188,
        37.3786,
        0
    ],
    [
        -148.5309,
        62.2207,
        4.8
    ],
    [
        -118.8205,
        37.474667,
        -0.27
    ],
    [
        -118.819667,
        37.477167,
        0.62
    ],
    [
        -152.4754,
        58.4123,
        46
    ],
    [
        -164.0291,
        52.8069,
        25.6
    ],
    [
        -153.3822,
        59.9552,
        133.4
    ],
    [
        -123.1525,
        38.965833,
        3.75
    ],
    [
        -120.849,
        36.277667,
        7.52
    ],
    [
        -152.5039,
        61.3116,
        7.5
    ],
    [
        137.7689,
        33.0106,
        343.06
    ],
    [
        -136.7694,
        59.8585,
        7.3
    ],
    [
        -178.4213,
        51.6336,
        12
    ],
    [
        -155.2325,
        19.4085,
        26.679
    ],
    [
        -89.900667,
        36.601833,
        4.15
    ],
    [
        -118.819,
        37.476167,
        0.74
    ],
    [
        -155.278503,
        19.407,
        0.61
    ],
    [
        102.0863,
        -3.3959,
        96.97
    ],
    [
        -151.1504,
        61.1564,
        63.1
    ],
    [
        -122.826836,
        38.841167,
        1.21
    ],
    [
        -119.113333,
        38.042667,
        2.45
    ],
    [
        -179.7022,
        51.6829,
        87.3
    ],
    [
        -120.777,
        35.512,
        0.74
    ],
    [
        -116.909333,
        33.494,
        13.21
    ],
    [
        -122.81,
        38.806833,
        2.17
    ],
    [
        -151.421,
        62.907,
        126.6
    ],
    [
        -119.010167,
        37.8015,
        1.31
    ],
    [
        -118.8185,
        37.474833,
        -0.18
    ],
    [
        -122.812333,
        48.284667,
        12.62
    ],
    [
        -116.038,
        33.0905,
        2.11
    ],
    [
        -118.818333,
        37.475833,
        0.78
    ],
    [
        -152.7731,
        59.4501,
        75.7
    ],
    [
        -155.4185,
        19.110833,
        41.621
    ],
    [
        -178.5363,
        51.7438,
        15.9
    ],
    [
        -141.4135,
        66.1088,
        7.6
    ],
    [
        -122.581833,
        47.593,
        24.95
    ],
    [
        -122.543167,
        38.264833,
        8.24
    ],
    [
        -118.885,
        38.3509,
        8.4
    ],
    [
        -118.492333,
        35.604833,
        5.99
    ],
    [
        -163.1998,
        53.9184,
        4.8
    ],
    [
        -147.1933,
        68.4549,
        18.3
    ],
    [
        -144.3135,
        68.0219,
        2.3
    ],
    [
        -179.0551,
        51.7225,
        6.8
    ],
    [
        -122.810333,
        38.836,
        1.98
    ],
    [
        -115.6642,
        36.4428,
        7.2
    ],
    [
        -120.502167,
        49.447833,
        -0.06
    ],
    [
        -66.369,
        -22.6476,
        261.5
    ],
    [
        -116.032333,
        33.096333,
        9.36
    ],
    [
        -118.880667,
        37.538167,
        3.63
    ],
    [
        27.2871,
        36.912,
        8.66
    ],
    [
        -121.677,
        48.245,
        8.69
    ],
    [
        -116.0285,
        33.096,
        10.24
    ],
    [
        -151.3105,
        62.8907,
        109.7
    ],
    [
        -150.2217,
        60.9895,
        43.1
    ],
    [
        -147.7754,
        66.4015,
        0.3
    ],
    [
        -119.3547,
        38.3427,
        11.5
    ],
    [
        -147.9052,
        64.2272,
        113
    ],
    [
        -140.0305,
        61.1531,
        0.9
    ],
    [
        -108.899,
        38.3125,
        1.61
    ],
    [
        -118.820667,
        37.604333,
        4.11
    ],
    [
        -155.553,
        19.106833,
        58.134
    ],
    [
        -118.978833,
        37.602333,
        0.75
    ],
    [
        -121.7565,
        46.8405,
        0.46
    ],
    [
        -112.045667,
        38.595,
        10.17
    ],
    [
        -120.359333,
        36.063833,
        13.03
    ],
    [
        -121.7535,
        46.835833,
        -0.06
    ],
    [
        -94.9623,
        16.5258,
        10
    ],
    [
        -139.7832,
        60.3293,
        15
    ],
    [
        -124.458,
        41.843167,
        29.32
    ],
    [
        -117.965667,
        33.074,
        3.01
    ],
    [
        -145.0762,
        68.8735,
        7.4
    ],
    [
        -154.4328,
        58.9133,
        119.1
    ],
    [
        -108.8955,
        38.308167,
        2.5
    ],
    [
        -121.757333,
        46.836833,
        0.83
    ],
    [
        -118.9076,
        39.4306,
        7.7
    ],
    [
        -149.2725,
        63.8369,
        122.9
    ],
    [
        -175.9271,
        51.4777,
        35
    ],
    [
        -140.1228,
        60.1784,
        0
    ],
    [
        -139.537,
        59.7654,
        0
    ],
    [
        -176.6787,
        -21.4068,
        6.58
    ],
    [
        -117.6935,
        33.4475,
        13.86
    ],
    [
        -155.326172,
        19.400499,
        6.36
    ],
    [
        -94.0503,
        15.0164,
        47.05
    ],
    [
        -150.1247,
        62.5252,
        67.7
    ],
    [
        -95.2151,
        16.4456,
        23.74
    ],
    [
        -99.7664,
        -36.2005,
        10
    ],
    [
        -94.8221,
        15.5422,
        39.51
    ],
    [
        -119.353833,
        38.334333,
        8.17
    ],
    [
        -166.7084,
        53.1628,
        25.6
    ],
    [
        -155.9705,
        58.4119,
        157.9
    ],
    [
        -114.3134,
        -22.0133,
        10
    ],
    [
        -115.573,
        33.198833,
        3.26
    ],
    [
        -178.541,
        51.1205,
        34.1
    ],
    [
        -115.547333,
        33.281167,
        1.13
    ],
    [
        -115.565833,
        33.2015,
        2.63
    ],
    [
        -94.2354,
        15.2643,
        10
    ],
    [
        -122.771164,
        38.839333,
        1.45
    ],
    [
        -155.4939,
        58.556,
        142.4
    ],
    [
        -115.577833,
        33.1915,
        3.45
    ],
    [
        101.4422,
        -3.5379,
        76.33
    ],
    [
        -150.6804,
        65.8304,
        4.9
    ],
    [
        -147.0578,
        61.0579,
        16.4
    ],
    [
        -155.282165,
        19.41,
        0.97
    ],
    [
        -94.0996,
        15.3335,
        55.04
    ],
    [
        -148.2731,
        60.4252,
        19.1
    ],
    [
        -146.4789,
        61.3979,
        20
    ],
    [
        -176.1457,
        52.299,
        147
    ],
    [
        -119.3825,
        46.455,
        17.05
    ],
    [
        -86.8213,
        11.9773,
        72.06
    ],
    [
        -147.1034,
        61.6735,
        30.1
    ],
    [
        -118.880333,
        37.529333,
        3.01
    ],
    [
        -140.6899,
        61.5181,
        15.2
    ],
    [
        -95.2276,
        16.4152,
        5.52
    ],
    [
        -151.0562,
        62.8873,
        108.5
    ],
    [
        -142.0331,
        60.0823,
        0
    ],
    [
        -150.7525,
        61.9971,
        13.3
    ],
    [
        -155.234167,
        19.416667,
        25.716
    ],
    [
        -150.7169,
        65.857,
        21.5
    ],
    [
        -118.8435,
        37.469667,
        2.92
    ],
    [
        -121.552333,
        36.824833,
        5.39
    ],
    [
        -151.2949,
        62.9113,
        106.9
    ],
    [
        -117.0385,
        33.996167,
        14.68
    ],
    [
        -111.4513,
        42.6043,
        5.23
    ],
    [
        -94.9034,
        16.4793,
        10
    ],
    [
        -152.1541,
        59.6562,
        69.5
    ],
    [
        -152.5249,
        57.6124,
        45.4
    ],
    [
        -112.523333,
        46.868,
        11.76
    ],
    [
        -120.1999,
        42.1841,
        0.9
    ],
    [
        -71.864,
        -35.1565,
        48.32
    ],
    [
        -150.8397,
        62.9467,
        106.5
    ],
    [
        -141.1115,
        61.3903,
        3.2
    ],
    [
        -111.028333,
        44.8,
        10.63
    ],
    [
        -120.845333,
        35.541667,
        5.98
    ],
    [
        -119.3545,
        38.341333,
        8.25
    ],
    [
        -176.5436,
        51.4418,
        21.3
    ],
    [
        -75.5466,
        -14.3043,
        33.52
    ],
    [
        -121.948167,
        41.046333,
        9.53
    ],
    [
        -118.8185,
        37.471333,
        1.25
    ],
    [
        -150.9435,
        61.261,
        59.9
    ],
    [
        -116.828167,
        33.977667,
        16.65
    ],
    [
        -173.3164,
        50.4387,
        10
    ],
    [
        -149.0067,
        67.8619,
        3.3
    ],
    [
        -155.438667,
        19.110833,
        40.565
    ],
    [
        -118.879667,
        37.536833,
        3.32
    ],
    [
        -118.880167,
        37.536833,
        3.36
    ],
    [
        -151.625,
        63.077,
        2.5
    ],
    [
        -178.4442,
        51.588,
        12.9
    ],
    [
        122.3102,
        23.9217,
        19.2
    ],
    [
        -140.6676,
        61.5229,
        16
    ],
    [
        -111.4686,
        42.6086,
        5.28
    ],
    [
        -117.65,
        35.937333,
        3.69
    ],
    [
        -118.880833,
        37.5355,
        3.17
    ],
    [
        -97.9698,
        16.526,
        14.16
    ],
    [
        -147.3609,
        60.3798,
        13.6
    ],
    [
        -120.708833,
        34.611167,
        -0.32
    ],
    [
        -156.1558,
        57.6827,
        0.6
    ],
    [
        -112.041833,
        38.6065,
        7.11
    ],
    [
        -112.063667,
        38.596667,
        13.4
    ],
    [
        -112.056,
        38.615,
        7.09
    ],
    [
        -115.754667,
        32.691333,
        7.72
    ],
    [
        -139.4813,
        59.9807,
        0
    ],
    [
        -155.284164,
        19.394167,
        2.71
    ],
    [
        -155.28067,
        19.403999,
        1.29
    ],
    [
        -69.2705,
        -18.0175,
        148.09
    ],
    [
        -176.4834,
        51.3236,
        13.2
    ],
    [
        -139.387,
        59.9979,
        0
    ],
    [
        -89.522833,
        36.477167,
        7.22
    ],
    [
        -122.720833,
        38.788,
        2.34
    ],
    [
        -149.3418,
        62.9812,
        77.2
    ],
    [
        -71.2801,
        -27.8834,
        30.1
    ],
    [
        -155.1268,
        57.8123,
        70.2
    ],
    [
        -118.8245,
        37.478833,
        1.34
    ],
    [
        -169.8092,
        52.1986,
        20.4
    ],
    [
        -125.023333,
        40.3465,
        9.33
    ],
    [
        -94.8425,
        16.574,
        39.83
    ],
    [
        -147.5769,
        68.6004,
        0.9
    ],
    [
        -118.819333,
        37.475,
        -0.04
    ],
    [
        -121.125,
        36.5355,
        3.43
    ],
    [
        179.8852,
        51.4616,
        53
    ],
    [
        -97.1371,
        36.3727,
        2.82
    ],
    [
        -121.141167,
        36.555,
        2.89
    ],
    [
        -116.450333,
        34.2865,
        7.66
    ],
    [
        161.7808,
        -10.6598,
        47.61
    ],
    [
        -150.6803,
        63.2188,
        129.3
    ],
    [
        -116.8005,
        33.996,
        18.05
    ],
    [
        -151.6167,
        63.06,
        7
    ],
    [
        -151.5807,
        63.0643,
        7.3
    ],
    [
        -151.5965,
        63.0635,
        4.5
    ],
    [
        -88.7877,
        12.9849,
        60.16
    ],
    [
        -118.836167,
        37.574667,
        1.65
    ],
    [
        -116.178333,
        33.195833,
        6.76
    ],
    [
        -116.430333,
        34.0525,
        9.6
    ],
    [
        -151.6255,
        61.4518,
        71.8
    ],
    [
        -140.5978,
        61.5229,
        17.2
    ],
    [
        -148.6346,
        63.8335,
        106.3
    ],
    [
        -149.5334,
        61.8507,
        43.6
    ],
    [
        -122.7145,
        38.772667,
        2.47
    ],
    [
        -116.801167,
        33.9745,
        17.62
    ],
    [
        -116.924333,
        33.9845,
        4.74
    ],
    [
        -94.9873,
        16.6593,
        8.9
    ],
    [
        -147.3702,
        64.9969,
        0
    ],
    [
        -111.304,
        44.720667,
        6.11
    ],
    [
        -122.735333,
        38.787167,
        1.28
    ],
    [
        -71.616,
        -33.7421,
        44.72
    ],
    [
        -115.609,
        33.181333,
        2.86
    ],
    [
        178.1771,
        51.8267,
        132.6
    ],
    [
        124.82,
        7.5438,
        10
    ],
    [
        124.8199,
        7.5946,
        10
    ],
    [
        -139.96,
        64.7531,
        1.8
    ],
    [
        124.8736,
        7.6285,
        31.39
    ],
    [
        -169.6652,
        52.5903,
        67.9
    ],
    [
        -118.821667,
        37.604333,
        4.01
    ],
    [
        -136.5445,
        59.7818,
        0.1
    ],
    [
        -121.684333,
        48.248,
        9.29
    ],
    [
        -178.0461,
        51.8485,
        92.8
    ],
    [
        -149.8099,
        64.7452,
        10.2
    ],
    [
        -118.403833,
        34.223333,
        11.34
    ],
    [
        -124.396167,
        40.494333,
        25.08
    ],
    [
        -118.835833,
        37.572667,
        1.63
    ],
    [
        -118.8365,
        37.574,
        1.71
    ],
    [
        -175.8992,
        51.3293,
        31.9
    ],
    [
        -136.8833,
        59.8983,
        14.4
    ],
    [
        -118.820833,
        37.6045,
        4.22
    ],
    [
        -150.4017,
        65.5315,
        14.2
    ],
    [
        -157.0611,
        67.1099,
        2.8
    ],
    [
        -111.4214,
        42.5566,
        9.03
    ],
    [
        -143.197,
        60.3011,
        0.2
    ],
    [
        -118.821667,
        37.604,
        4.22
    ],
    [
        -138.4442,
        -11.942,
        15.62
    ],
    [
        -116.415167,
        33.1465,
        4.6
    ],
    [
        -115.972,
        33.217167,
        7.81
    ],
    [
        -122.811833,
        38.821167,
        1.49
    ],
    [
        -148.742,
        64.4224,
        18.2
    ],
    [
        -163.1544,
        53.4208,
        25.6
    ],
    [
        -155.611167,
        19.4215,
        2.482
    ],
    [
        125.1457,
        7.0739,
        96.15
    ],
    [
        -118.7965,
        37.484667,
        7.75
    ],
    [
        -151.5715,
        58.1668,
        7.8
    ],
    [
        -151.6425,
        60.6215,
        67.6
    ],
    [
        -68.9096,
        -30.7535,
        117.2
    ],
    [
        -117.4515,
        34.231833,
        12.91
    ],
    [
        -121.3425,
        36.714,
        -0.57
    ],
    [
        -122.773834,
        38.833832,
        1.91
    ],
    [
        -117.848333,
        36.183167,
        3.2
    ],
    [
        -117.845167,
        36.179667,
        2.43
    ],
    [
        -118.807,
        38.052667,
        0.81
    ],
    [
        71.1291,
        36.4703,
        91.01
    ],
    [
        -69.21,
        -28.772,
        131.62
    ],
    [
        -120.9955,
        36.407667,
        6.86
    ],
    [
        -116.8015,
        33.498333,
        5.63
    ],
    [
        -117.261167,
        34.006833,
        14.43
    ],
    [
        -111.4447,
        42.5711,
        9.8
    ],
    [
        -94.7171,
        16.8156,
        10
    ],
    [
        -118.606833,
        37.170833,
        12.95
    ],
    [
        -118.606833,
        37.198667,
        10.68
    ],
    [
        -157.6342,
        57.1033,
        9.7
    ],
    [
        -152.8058,
        59.0921,
        75.1
    ],
    [
        -173.0149,
        52.3026,
        176.2
    ],
    [
        62.7519,
        26.1798,
        45.69
    ],
    [
        -150.7141,
        61.0689,
        15.9
    ],
    [
        -141.5959,
        60.5708,
        14.6
    ],
    [
        -118.623667,
        37.188167,
        10.74
    ],
    [
        -116.444,
        33.030667,
        2.87
    ],
    [
        -111.4292,
        42.5433,
        9.91
    ],
    [
        -95.0107,
        16.603,
        10
    ],
    [
        -112.525833,
        46.886,
        12.66
    ],
    [
        -121.0924,
        40.2311,
        5.5
    ],
    [
        -116.795667,
        33.495667,
        3.67
    ],
    [
        -94.8831,
        16.6905,
        10
    ],
    [
        -94.97,
        16.7939,
        10
    ],
    [
        -122.811667,
        38.818667,
        2.57
    ],
    [
        -118.0575,
        34.503333,
        8.9
    ],
    [
        -95.1269,
        16.7434,
        10
    ],
    [
        -139.8075,
        60.3407,
        9.1
    ],
    [
        -118.612,
        37.392833,
        13.92
    ],
    [
        -154.6324,
        58.8539,
        123.3
    ],
    [
        -118.817167,
        34.867667,
        4.67
    ],
    [
        -148.8881,
        64.8661,
        12.9
    ],
    [
        120.8176,
        13.6704,
        193.27
    ],
    [
        -94.9123,
        16.7308,
        10
    ],
    [
        -148.8726,
        64.8605,
        11.6
    ],
    [
        -148.8844,
        64.8563,
        10.3
    ],
    [
        129.9043,
        -2.9658,
        44.93
    ],
    [
        -112.890833,
        37.000833,
        18.28
    ],
    [
        -94.9509,
        16.7732,
        9.62
    ],
    [
        -148.8768,
        64.9158,
        8.5
    ],
    [
        -149.6941,
        64.6752,
        17.2
    ],
    [
        -148.9047,
        64.8585,
        16.1
    ],
    [
        142.1923,
        31.1823,
        10
    ],
    [
        -175.84,
        52.2553,
        189.02
    ],
    [
        -175.8612,
        51.6605,
        44.9
    ],
    [
        -111.340667,
        40.274333,
        3.24
    ],
    [
        154.9573,
        -5.8521,
        181.5
    ],
    [
        -151.7852,
        62.5649,
        5.8
    ],
    [
        -150.5567,
        63.2977,
        0.7
    ],
    [
        -118.112333,
        37.231,
        6.72
    ],
    [
        -170.4308,
        52.2784,
        36.52
    ],
    [
        -116.561667,
        32.957167,
        8.78
    ],
    [
        -141.3968,
        60.1913,
        0
    ],
    [
        -139.4355,
        60.0468,
        0
    ],
    [
        -177.3627,
        51.5307,
        19.4
    ],
    [
        -94.1625,
        15.6979,
        74.22
    ],
    [
        -154.4514,
        58.8323,
        121
    ],
    [
        -139.4379,
        59.9894,
        0
    ],
    [
        -118.827,
        37.610667,
        4.37
    ],
    [
        -148.9513,
        62.6833,
        55.4
    ],
    [
        -156.2999,
        57.8298,
        119.2
    ],
    [
        -143.0011,
        60.342,
        8.2
    ],
    [
        -151.2829,
        64.8808,
        8
    ],
    [
        -121.288667,
        36.670833,
        2.66
    ],
    [
        -77.7746,
        9.1385,
        52.29
    ],
    [
        -127.0845,
        40.348333,
        11.62
    ],
    [
        -122.313333,
        47.606333,
        8.75
    ],
    [
        -121.254167,
        36.643167,
        6.03
    ],
    [
        -140.5764,
        61.5311,
        0
    ],
    [
        129.0524,
        41.3116,
        5
    ],
    [
        152.0272,
        44.3731,
        31.79
    ],
    [
        -142.1159,
        65.4383,
        3.7
    ],
    [
        -151.6279,
        61.5946,
        79.6
    ],
    [
        -122.762,
        38.794,
        0.72
    ],
    [
        -116.4425,
        33.0265,
        5.8
    ],
    [
        -118.9167,
        38.4054,
        10.3
    ],
    [
        -170.3853,
        52.2081,
        31.9
    ],
    [
        -178.4175,
        51.6761,
        16.6
    ],
    [
        -116.324167,
        33.310833,
        12.5
    ],
    [
        -111.419667,
        42.565833,
        9.15
    ],
    [
        -94.2976,
        15.8203,
        61.65
    ],
    [
        -118.898167,
        37.524833,
        12.73
    ],
    [
        -94.3958,
        15.2768,
        10.51
    ],
    [
        -118.200167,
        33.893167,
        7.86
    ],
    [
        -116.2696,
        38.2952,
        0
    ],
    [
        144.8812,
        20.1804,
        76.9
    ],
    [
        -116.9395,
        33.982167,
        4.39
    ],
    [
        -87.0247,
        10.6523,
        19.49
    ],
    [
        -150.0613,
        61.3779,
        34.8
    ],
    [
        129.7584,
        -3.0863,
        34.1
    ],
    [
        -147.2865,
        68.6023,
        13.4
    ],
    [
        -122.281667,
        47.7015,
        25.73
    ],
    [
        -119.6555,
        36.061833,
        9.09
    ],
    [
        -179.8683,
        -24.2891,
        524.27
    ],
    [
        -116.616,
        33.586167,
        13.04
    ],
    [
        -142.2213,
        66.2475,
        7.6
    ],
    [
        -116.1876,
        38.2127,
        0
    ],
    [
        -117.4415,
        32.5255,
        16.12
    ],
    [
        -118.917,
        38.3346,
        11.4
    ],
    [
        -74.7175,
        9.7486,
        52.5
    ],
    [
        108.9322,
        -8.2399,
        66.53
    ],
    [
        -121.9835,
        40.89,
        15.76
    ],
    [
        -122.827667,
        38.837166,
        1.66
    ],
    [
        -122.848,
        38.839168,
        2.3
    ],
    [
        -121.177333,
        40.264333,
        3.77
    ],
    [
        -153.6246,
        59.199,
        103.8
    ],
    [
        -139.7807,
        60.3298,
        7
    ],
    [
        -119.2867,
        38.4929,
        10.3
    ],
    [
        -116.208667,
        33.3405,
        11.26
    ],
    [
        -151.2827,
        60.4409,
        47.8
    ],
    [
        -118.9021,
        38.3867,
        7.8
    ],
    [
        -119.2929,
        38.489,
        10.9
    ],
    [
        -119.285333,
        38.488,
        8.4
    ],
    [
        -122.735336,
        38.790001,
        1.8
    ],
    [
        -126.992667,
        40.335333,
        11.62
    ],
    [
        -94.9729,
        15.6003,
        33.69
    ],
    [
        -127.014,
        40.471167,
        11.62
    ],
    [
        -151.8458,
        58.348,
        0.3
    ],
    [
        -150.0957,
        61.7127,
        43.6
    ],
    [
        -151.4982,
        63.0889,
        5.6
    ],
    [
        -161.4425,
        54.2787,
        25.6
    ],
    [
        -153.3477,
        59.8339,
        130.6
    ],
    [
        -143.4939,
        67.7172,
        16.4
    ],
    [
        -161.1196,
        54.9637,
        82.8
    ],
    [
        -119.3283,
        38.6945,
        9.9
    ],
    [
        -124.4195,
        40.470333,
        27.65
    ],
    [
        -149.0373,
        62.0301,
        10.3
    ],
    [
        -111.4417,
        42.5563,
        10.5
    ],
    [
        -120.888333,
        36.006167,
        8.34
    ],
    [
        -148.7081,
        62.2652,
        36.6
    ],
    [
        -119.640167,
        36.048667,
        19.79
    ],
    [
        130.2316,
        -6.5899,
        129.05
    ],
    [
        -178.4878,
        -17.8955,
        579.93
    ],
    [
        -148.4306,
        62.433,
        39.3
    ],
    [
        -153.7156,
        59.1725,
        89.1
    ],
    [
        -122.8475,
        47.767167,
        17.62
    ],
    [
        74.5944,
        34.2131,
        35
    ],
    [
        -147.4554,
        62.0263,
        40.4
    ],
    [
        -156.1191,
        56.3855,
        12.5
    ],
    [
        -118.9048,
        38.3823,
        7.9
    ],
    [
        141.0234,
        31.3473,
        31.02
    ],
    [
        -147.3949,
        64.9801,
        0
    ],
    [
        -122.176833,
        48.224167,
        9.44
    ],
    [
        -135.8468,
        66.6906,
        13.5
    ],
    [
        -142.5552,
        60.2789,
        8.4
    ],
    [
        144.1488,
        -4.6487,
        111.7
    ],
    [
        159.6233,
        -7.7533,
        37.28
    ],
    [
        -122.362,
        45.695667,
        -0.73
    ],
    [
        -165.4507,
        53.4966,
        5.7
    ],
    [
        -124.417333,
        40.495333,
        26.88
    ],
    [
        -121.119,
        36.5365,
        3.92
    ],
    [
        -150.734,
        61.0547,
        12.8
    ],
    [
        -35.8191,
        7.4851,
        10
    ],
    [
        -112.649833,
        45.463833,
        2.97
    ],
    [
        -116.8015,
        33.496833,
        4.18
    ],
    [
        -118.939167,
        37.600667,
        1.08
    ],
    [
        128.7982,
        -5.8817,
        310.41
    ],
    [
        -153.1588,
        60.2166,
        143
    ],
    [
        -117.0015,
        34.316333,
        6.69
    ],
    [
        -122.8605,
        39.795333,
        0.38
    ],
    [
        -147.2941,
        60.3659,
        4.5
    ],
    [
        -121.262833,
        36.6425,
        4.8
    ],
    [
        -126.983667,
        40.3995,
        16.96
    ],
    [
        -155.434662,
        19.227833,
        33.59
    ],
    [
        -140.6992,
        61.5094,
        7.7
    ],
    [
        -153.1112,
        60.0903,
        117.8
    ],
    [
        -151.0777,
        62.5847,
        77.8
    ],
    [
        -178.1151,
        -17.7862,
        593.28
    ],
    [
        -165.0025,
        54.0581,
        74.5
    ],
    [
        -151.8129,
        59.8684,
        52.9
    ],
    [
        -122.793999,
        38.820167,
        2.73
    ],
    [
        -97.7172,
        36.3761,
        4.22
    ],
    [
        -158.1399,
        56.7494,
        112.8
    ],
    [
        -152.1371,
        60.4549,
        78.1
    ],
    [
        -146.3651,
        61.5158,
        28.1
    ],
    [
        -152.6595,
        59.6404,
        74.9
    ],
    [
        -155.825667,
        19.312167,
        8.904
    ],
    [
        -126.6543,
        40.4678,
        10.42
    ],
    [
        -153.4364,
        62.2279,
        3.6
    ],
    [
        -153.6978,
        58.82,
        10.8
    ],
    [
        -89.499167,
        36.239,
        6.94
    ],
    [
        -126.8342,
        40.4144,
        11.01
    ],
    [
        -119.0338,
        40.677,
        7
    ],
    [
        -121.041,
        35.58,
        -0.28
    ],
    [
        -140.752,
        61.522,
        5.7
    ],
    [
        -118.202333,
        34.987667,
        -0.83
    ],
    [
        -122.7205,
        38.773333,
        1.82
    ],
    [
        -136.7465,
        59.9075,
        2.4
    ],
    [
        -112.474333,
        46.006833,
        -2
    ],
    [
        -150.4734,
        63.1712,
        116.7
    ],
    [
        -118.345,
        35.0535,
        -1.01
    ],
    [
        163.2943,
        54.9226,
        10
    ],
    [
        -118.816833,
        37.4545,
        1.72
    ],
    [
        -121.945833,
        41.046833,
        10.15
    ],
    [
        -121.951833,
        41.047667,
        13.46
    ],
    [
        -156.5222,
        56.3354,
        50.1
    ],
    [
        -111.397333,
        42.534833,
        3.76
    ],
    [
        -116.9245,
        35.899167,
        6.51
    ],
    [
        -140.7358,
        61.509,
        12.2
    ],
    [
        -155.303667,
        18.980667,
        12.732
    ],
    [
        -166.8203,
        53.8611,
        6.5
    ],
    [
        -166.8262,
        53.8452,
        5.6
    ],
    [
        -121.8865,
        47.171,
        14.87
    ],
    [
        -148.8735,
        62.7643,
        9.8
    ],
    [
        -111.430167,
        42.589833,
        6.39
    ],
    [
        -175.9282,
        51.3815,
        44.4
    ],
    [
        -111.4775,
        42.630333,
        2.79
    ],
    [
        -153.2736,
        59.4158,
        101.2
    ],
    [
        -147.9781,
        63.2957,
        76
    ],
    [
        -112.555833,
        46.892333,
        9.34
    ],
    [
        -116.656667,
        34.638,
        3.99
    ],
    [
        -111.408833,
        42.514,
        6.63
    ],
    [
        -148.7965,
        62.8041,
        16.1
    ],
    [
        -122.816333,
        38.808833,
        2.84
    ],
    [
        -125.362167,
        40.3915,
        25.7
    ],
    [
        -142.4377,
        69.5097,
        14.2
    ],
    [
        -156.043667,
        19.653667,
        42.069
    ],
    [
        -152.9448,
        59.8191,
        95.1
    ],
    [
        -117.496667,
        33.561167,
        -0.73
    ],
    [
        -116.406,
        33.502167,
        13.49
    ],
    [
        -152.164,
        62.5769,
        121.6
    ],
    [
        -121.062,
        35.522667,
        1.15
    ],
    [
        -111.413333,
        42.546167,
        4.8
    ],
    [
        -111.424667,
        42.595,
        4.9
    ],
    [
        -118.874667,
        37.619833,
        8.25
    ],
    [
        -127.211833,
        40.581333,
        16.62
    ],
    [
        -111.447833,
        42.59,
        3.5
    ],
    [
        -116.7965,
        33.495167,
        4.57
    ],
    [
        -149.0265,
        62.027,
        12.7
    ],
    [
        -111.4395,
        42.584333,
        3.5
    ],
    [
        -118.9043,
        38.3654,
        6.9
    ],
    [
        -155.279333,
        18.952333,
        12.363
    ],
    [
        -111.456167,
        42.602333,
        3.17
    ],
    [
        -98.4231,
        36.6952,
        7.14
    ],
    [
        -151.3603,
        60.6882,
        68
    ],
    [
        -162.8719,
        54.5409,
        50.1
    ],
    [
        -158.2867,
        67.5064,
        1.5
    ],
    [
        -119.1113,
        38.2958,
        6.8
    ],
    [
        121.5573,
        18.5841,
        62.16
    ],
    [
        -155.7703,
        57.7311,
        11.6
    ],
    [
        -146.9318,
        61.3129,
        6.7
    ],
    [
        -179.4373,
        -23.752,
        560.01
    ],
    [
        -121.585167,
        40.4755,
        15.05
    ],
    [
        -118.375333,
        45.841833,
        -0.74
    ],
    [
        -151.6016,
        61.227,
        75.8
    ],
    [
        -140.7156,
        61.5096,
        6.4
    ],
    [
        -116.7945,
        33.498167,
        6.09
    ],
    [
        -122.772667,
        38.806833,
        -0.28
    ],
    [
        -122.822502,
        38.836666,
        -0.75
    ],
    [
        -150.3362,
        62.1574,
        11.2
    ],
    [
        179.5624,
        -22.5585,
        578.14
    ],
    [
        -152.1731,
        59.963,
        87.7
    ],
    [
        -116.2162,
        38.2627,
        3.6
    ],
    [
        127.2264,
        -0.3969,
        83
    ],
    [
        -177.4418,
        -19.1856,
        573.86
    ],
    [
        -151.0434,
        64.7457,
        4.7
    ],
    [
        -147.6021,
        60.5947,
        0.6
    ],
    [
        -122.773167,
        38.807167,
        -0.05
    ],
    [
        178.7372,
        51.5859,
        56.4
    ],
    [
        -122.771667,
        38.808833,
        0.14
    ],
    [
        -140.7611,
        61.5102,
        5.3
    ],
    [
        -155.465667,
        19.190833,
        35.257
    ],
    [
        -116.362833,
        33.373333,
        6.28
    ],
    [
        -140.7152,
        61.5125,
        7.3
    ],
    [
        -140.7017,
        61.5113,
        0
    ],
    [
        -153.1633,
        59.909,
        114.4
    ],
    [
        -118.503333,
        35.304167,
        5.36
    ],
    [
        -139.1121,
        59.2751,
        8.1
    ],
    [
        -149.9729,
        61.6318,
        32.9
    ],
    [
        -112.526167,
        46.879833,
        10.93
    ],
    [
        -122.73983,
        38.763668,
        1.53
    ],
    [
        -122.806,
        38.8165,
        3.19
    ],
    [
        -111.445,
        42.561833,
        8.05
    ],
    [
        -153.8777,
        58.9992,
        112.9
    ],
    [
        -148.8636,
        62.788,
        13.9
    ],
    [
        -139.923,
        64.7739,
        2.3
    ],
    [
        -115.5007,
        36.7388,
        7.5
    ],
    [
        -112.5235,
        46.871,
        11.97
    ],
    [
        -122.841333,
        38.844167,
        1.9
    ],
    [
        -118.8235,
        38.8303,
        13.3
    ],
    [
        -117.848,
        36.181833,
        2.23
    ],
    [
        -144.2241,
        61.5539,
        0
    ],
    [
        -149.3288,
        63.1852,
        90.1
    ],
    [
        -155.868333,
        20.063333,
        23.409
    ],
    [
        -148.5912,
        61.9919,
        28.6
    ],
    [
        -150.632,
        62.4195,
        64.2
    ],
    [
        -111.437167,
        42.637667,
        5.25
    ],
    [
        127.9846,
        3.8293,
        107.48
    ],
    [
        -153.7084,
        58.832,
        2.4
    ],
    [
        -108.901833,
        38.286167,
        1.02
    ],
    [
        -151.4502,
        59.8034,
        55.7
    ],
    [
        -92.239,
        35.7905,
        11.33
    ],
    [
        -159.9518,
        54.8173,
        3.3
    ],
    [
        -122.764833,
        38.786167,
        0.53
    ],
    [
        -124.402833,
        49.2735,
        17.7
    ],
    [
        -118.8225,
        37.524667,
        2.51
    ],
    [
        -139.1147,
        59.229,
        11
    ],
    [
        -111.417833,
        42.575667,
        8.31
    ],
    [
        -148.9184,
        63.4232,
        6.1
    ],
    [
        -110.338833,
        46.125333,
        6.03
    ],
    [
        151.9837,
        45.5973,
        22.46
    ],
    [
        -118.9097,
        38.416,
        7.5
    ],
    [
        -158.4396,
        55.4155,
        7.5
    ],
    [
        -151.1276,
        62.6705,
        84.6
    ],
    [
        -163.9814,
        52.5733,
        21.3
    ],
    [
        -155.4615,
        19.287167,
        7.924
    ],
    [
        -153.4546,
        56.5041,
        6.6
    ],
    [
        -111.447833,
        42.622833,
        5.33
    ],
    [
        -118.8235,
        38.8296,
        13.4
    ],
    [
        -117.648333,
        35.934,
        3.86
    ],
    [
        -118.570833,
        35.360833,
        4.84
    ],
    [
        -108.7724,
        23.5614,
        10
    ],
    [
        159.4959,
        54.788,
        131.21
    ],
    [
        -112.5285,
        46.885167,
        14.05
    ],
    [
        -151.7519,
        60.0539,
        56.2
    ],
    [
        -148.827,
        62.7929,
        14.4
    ],
    [
        -121.788667,
        37.456333,
        7.66
    ],
    [
        -152.9681,
        59.782,
        98.4
    ],
    [
        -11.1483,
        -6.3489,
        10
    ],
    [
        -118.821833,
        37.5205,
        2.2
    ],
    [
        26.2553,
        39.1304,
        10
    ],
    [
        -118.883167,
        37.538333,
        2.49
    ],
    [
        -116.797167,
        33.495167,
        4.61
    ],
    [
        -121.789333,
        37.455,
        7.99
    ],
    [
        -96.682,
        35.846,
        5
    ],
    [
        -148.7614,
        63.1414,
        9.7
    ],
    [
        -147.3642,
        64.8396,
        21.9
    ],
    [
        -136.6975,
        59.8426,
        2.9
    ],
    [
        -116.074333,
        32.868,
        9.32
    ],
    [
        -149.1502,
        60.9709,
        20
    ],
    [
        -150.6692,
        62.5598,
        11.7
    ],
    [
        -136.7111,
        59.884,
        14.5
    ],
    [
        -118.779667,
        37.392333,
        -2.31
    ],
    [
        -121.0265,
        36.559833,
        6.76
    ],
    [
        -174.992,
        51.8656,
        16.5
    ],
    [
        -110.026833,
        44.7755,
        7.13
    ],
    [
        -111.558333,
        46.402,
        3.35
    ],
    [
        -118.780833,
        37.389167,
        -2.29
    ],
    [
        -114.930333,
        44.292833,
        3.5
    ],
    [
        -151.0885,
        63.2553,
        2
    ],
    [
        165.3116,
        -15.6295,
        57.06
    ],
    [
        149.2095,
        43.8815,
        10
    ],
    [
        -97.6825,
        37.184,
        4.37
    ],
    [
        -120.171833,
        34.730667,
        1.72
    ],
    [
        -155.755667,
        19.862667,
        13.433
    ],
    [
        90.3605,
        2.1475,
        15.02
    ],
    [
        -148.7004,
        63.8605,
        6.4
    ],
    [
        -112.5671,
        46.8969,
        11.48
    ],
    [
        -165.0769,
        52.3761,
        10
    ],
    [
        -110.445667,
        43.5435,
        11.24
    ],
    [
        -116.764667,
        33.324167,
        13.64
    ],
    [
        -146.518,
        61.5639,
        31
    ],
    [
        -121.669,
        37.2905,
        3.04
    ],
    [
        -112.4995,
        46.8705,
        10.41
    ],
    [
        144.5809,
        38.0785,
        10
    ],
    [
        -148.8706,
        62.7902,
        14.7
    ],
    [
        -146.4937,
        61.5906,
        31.8
    ],
    [
        -97.5127,
        36.2915,
        7.461
    ],
    [
        -115.397167,
        32.383,
        12.07
    ],
    [
        -117.115667,
        34.625667,
        -1.28
    ],
    [
        -152.5062,
        64.6747,
        9.2
    ],
    [
        -111.420167,
        42.525833,
        7.93
    ],
    [
        -112.5215,
        46.8665,
        11.26
    ],
    [
        -167.0329,
        53.5528,
        17
    ],
    [
        -179.929,
        -23.7349,
        550.89
    ],
    [
        -122.821,
        38.814833,
        2.36
    ],
    [
        -151.5575,
        60.0344,
        58.7
    ],
    [
        -150.4889,
        59.8624,
        47.1
    ],
    [
        -155.7482,
        66.977,
        12.4
    ],
    [
        -148.8756,
        62.7831,
        20.3
    ],
    [
        -121.5285,
        36.803333,
        3.27
    ],
    [
        -121.526667,
        36.809667,
        4.3
    ],
    [
        -114.9225,
        44.303333,
        10.34
    ],
    [
        -111.747833,
        45.079167,
        3.5
    ],
    [
        -117.650167,
        35.935333,
        2.69
    ],
    [
        -155.552333,
        19.137667,
        49.513
    ],
    [
        -117.157,
        33.634167,
        -0.52
    ],
    [
        -155.419833,
        19.099167,
        42.057
    ],
    [
        -155.437167,
        19.160333,
        37.287
    ],
    [
        -120.9551,
        40.0739,
        10.9
    ],
    [
        -155.439167,
        19.1175,
        39.677
    ],
    [
        -116.241667,
        32.920333,
        11.27
    ],
    [
        -116.241167,
        32.916667,
        7.87
    ],
    [
        -139.8843,
        61.2141,
        1.8
    ],
    [
        -119.6985,
        39.7645,
        7.3
    ],
    [
        -118.189,
        38.4602,
        2.1
    ],
    [
        -118.371167,
        35.054,
        8.1
    ],
    [
        -152.75,
        60.0811,
        100.9
    ],
    [
        -122.827333,
        38.841167,
        1.96
    ],
    [
        -155.0904,
        58.6739,
        124.2
    ],
    [
        -97.888333,
        37.204167,
        6.25
    ],
    [
        -117.488667,
        33.850333,
        -0.48
    ],
    [
        -93.8962,
        15.2536,
        65.44
    ],
    [
        -116.882167,
        33.977333,
        19.48
    ],
    [
        -152.5203,
        61.3055,
        10.1
    ],
    [
        -111.4191,
        42.5686,
        11.52
    ],
    [
        -117.493667,
        33.846667,
        -0.48
    ],
    [
        -69.359,
        -24.593,
        89.2
    ],
    [
        -122.818337,
        38.807335,
        2.5
    ],
    [
        -163.8314,
        53.8887,
        16.2
    ],
    [
        -147.6752,
        67.929,
        13.1
    ],
    [
        -151.0122,
        60.6265,
        55.5
    ],
    [
        -118.821333,
        37.606,
        4.18
    ],
    [
        57.3957,
        30.689,
        10
    ],
    [
        -153.5339,
        56.4471,
        34.4
    ],
    [
        -150.3633,
        62.2263,
        8.3
    ],
    [
        -152.5458,
        60.2285,
        104.7
    ],
    [
        -116.4305,
        33.027167,
        7.61
    ],
    [
        -122.105167,
        37.325333,
        -0.31
    ],
    [
        -151.3313,
        62.0747,
        82.5
    ],
    [
        -116.240833,
        33.339,
        3.36
    ],
    [
        -116.238,
        33.341,
        5.25
    ],
    [
        -156.198,
        56.7455,
        55.8
    ],
    [
        -120.955667,
        36.390833,
        1.45
    ],
    [
        153.792,
        -5.2273,
        42.8
    ],
    [
        -152.3293,
        61.4367,
        9.3
    ],
    [
        -121.136833,
        36.591,
        7.95
    ],
    [
        -122.830667,
        38.841833,
        1.92
    ],
    [
        -139.9511,
        61.182,
        6.1
    ],
    [
        -94.1412,
        14.9651,
        31.77
    ],
    [
        -121.522667,
        37.119333,
        6.68
    ],
    [
        -121.523,
        37.119333,
        7.11
    ],
    [
        -111.416833,
        42.5455,
        6.54
    ],
    [
        -118.7985,
        38.024167,
        4.23
    ],
    [
        -136.8562,
        59.8876,
        14.9
    ],
    [
        -142.43,
        69.5255,
        6.5
    ],
    [
        -144.7448,
        65.4677,
        16.1
    ],
    [
        94.8925,
        24.9992,
        82.35
    ],
    [
        -152.0389,
        62.6945,
        1.1
    ],
    [
        -155.606333,
        19.988,
        0.02
    ],
    [
        -122.736,
        38.789501,
        1.6
    ],
    [
        -117.040833,
        34.932167,
        7.95
    ],
    [
        -108.899167,
        38.2825,
        1.23
    ],
    [
        -118.872833,
        37.542167,
        5.65
    ],
    [
        -157.7558,
        56.7802,
        85.5
    ],
    [
        -118.9071,
        38.404,
        8.4
    ],
    [
        -152.776,
        59.9457,
        96.3
    ],
    [
        -155.1472,
        58.225,
        2.8
    ],
    [
        -111.4287,
        42.5341,
        7.73
    ],
    [
        -141.1414,
        61.9718,
        7.4
    ],
    [
        -150.406,
        61.1636,
        56.5
    ],
    [
        -149.6121,
        60.6288,
        27.1
    ],
    [
        150.7163,
        -5.3996,
        143.64
    ],
    [
        -161.2107,
        54.658,
        25.6
    ],
    [
        -150.7877,
        63.0935,
        115.1
    ],
    [
        -141.3702,
        60.2093,
        0
    ],
    [
        -119.046,
        37.631,
        -2.49
    ],
    [
        -151.4947,
        65.9329,
        9
    ],
    [
        -136.8273,
        59.8914,
        16.6
    ],
    [
        -149.927,
        63.1123,
        88.8
    ],
    [
        -166.8959,
        53.8648,
        4.8
    ],
    [
        -119.040833,
        37.6325,
        -1.69
    ],
    [
        -118.854333,
        37.553667,
        -1.13
    ],
    [
        -119.009333,
        37.578833,
        2.18
    ],
    [
        -89.530833,
        36.304833,
        9.49
    ],
    [
        -151.8383,
        65.938,
        13.9
    ],
    [
        -150.912,
        65.5133,
        9.1
    ],
    [
        -122.196833,
        37.9145,
        9.67
    ],
    [
        -89.4975,
        36.289667,
        7.47
    ],
    [
        -93.2903,
        15.7805,
        100.11
    ],
    [
        -119.2534,
        40.7726,
        2.5
    ],
    [
        -112.834,
        37.5,
        12.34
    ],
    [
        -153.7102,
        59.2193,
        101.3
    ],
    [
        -122.821833,
        38.807833,
        2.57
    ],
    [
        -152.1289,
        60.9457,
        91.3
    ],
    [
        -116.893333,
        33.8875,
        12
    ],
    [
        -143.0672,
        60.3368,
        3.1
    ],
    [
        -139.0266,
        58.0197,
        4.1
    ],
    [
        -111.4339,
        42.5809,
        9.51
    ],
    [
        -122.7595,
        39.290333,
        11.74
    ],
    [
        -150.7623,
        63.2246,
        123.5
    ],
    [
        -118.8215,
        37.605333,
        4.11
    ],
    [
        -150.6774,
        60.3679,
        51.2
    ],
    [
        30.4877,
        39.7496,
        7.26
    ],
    [
        -151.1345,
        61.0202,
        12.5
    ],
    [
        -144.6331,
        69.6221,
        10.8
    ],
    [
        -153.6066,
        58.3406,
        70.2
    ],
    [
        -150.6496,
        63.2391,
        128.6
    ],
    [
        -152.9585,
        60.2394,
        134.3
    ],
    [
        -151.3398,
        60.0395,
        62.9
    ],
    [
        -148.5434,
        62.0196,
        9.7
    ],
    [
        -116.966,
        33.952667,
        12.57
    ],
    [
        -122.764333,
        38.786167,
        0.23
    ],
    [
        -139.9567,
        61.1836,
        3.9
    ],
    [
        -112.540333,
        46.865833,
        13.58
    ],
    [
        -155.471833,
        19.187167,
        6.497
    ],
    [
        -121.789167,
        37.455,
        8.23
    ],
    [
        -146.6995,
        61.302,
        18.1
    ],
    [
        -122.0545,
        37.976333,
        16.99
    ],
    [
        -73.683,
        -37.9104,
        6.87
    ],
    [
        -122.784164,
        38.838165,
        0.65
    ],
    [
        -119.235667,
        34.473,
        10.66
    ],
    [
        -153.5178,
        59.5615,
        114.3
    ],
    [
        -116.8585,
        33.885833,
        13.8
    ],
    [
        -147.7553,
        60.3904,
        17.6
    ],
    [
        -155.7415,
        56.6876,
        60.1
    ],
    [
        -160.4341,
        54.7916,
        41.7
    ],
    [
        -153.0439,
        60.1347,
        121.6
    ],
    [
        -122.775002,
        38.797669,
        2.77
    ],
    [
        -121.785833,
        37.46,
        8.35
    ],
    [
        -138.0133,
        60.1082,
        0
    ],
    [
        -151.3138,
        59.699,
        53.9
    ],
    [
        -151.4845,
        60.1615,
        61.1
    ],
    [
        -119.1193,
        38.2806,
        9.5
    ],
    [
        -177.15,
        51.5531,
        43.8
    ],
    [
        -119.6227,
        38.8065,
        14.1
    ],
    [
        -111.427333,
        42.584333,
        6.41
    ],
    [
        -147.1789,
        60.7931,
        15.4
    ],
    [
        -118.9138,
        38.4144,
        3.9
    ],
    [
        -118.9096,
        38.3591,
        10.4
    ],
    [
        -150.1806,
        62.1688,
        58.7
    ],
    [
        -158.3423,
        67.4818,
        11.5
    ],
    [
        -120.612,
        39.7777,
        13.3
    ],
    [
        -136.6084,
        59.8249,
        2.4
    ],
    [
        -116.392833,
        34.0695,
        3.63
    ],
    [
        -122.537333,
        45.623,
        3.45
    ],
    [
        -97.6319,
        35.02,
        3.66
    ],
    [
        -122.777664,
        38.821335,
        1.62
    ],
    [
        -136.4015,
        58.981,
        9.4
    ],
    [
        -122.778,
        38.822333,
        1.9
    ],
    [
        -149.7592,
        62.4966,
        63.3
    ],
    [
        -147.0959,
        69.101,
        9
    ],
    [
        -120.541,
        35.984333,
        10.27
    ],
    [
        -117.250167,
        34.038167,
        14.18
    ],
    [
        178.4863,
        51.2677,
        13.2
    ],
    [
        -146.7027,
        61.7499,
        26.8
    ],
    [
        -147.6955,
        63.1111,
        9.3
    ],
    [
        -118.416,
        33.868667,
        14.65
    ],
    [
        -155.279833,
        19.405667,
        1.328
    ],
    [
        -147.6742,
        63.0988,
        11.2
    ],
    [
        -177.9506,
        -18.3191,
        525.15
    ],
    [
        -147.6875,
        63.1114,
        10.6
    ],
    [
        -112.729167,
        46.9255,
        15.18
    ],
    [
        -117.389333,
        34.875667,
        4.87
    ],
    [
        -178.8238,
        52.2316,
        212.2
    ],
    [
        -141.3476,
        61.7239,
        1.8
    ],
    [
        -122.065833,
        37.977333,
        16.12
    ],
    [
        -175.3417,
        -18.3348,
        223.14
    ],
    [
        -161.1071,
        68.0646,
        14.2
    ],
    [
        -150.9186,
        60.9563,
        9.6
    ],
    [
        113.0028,
        -6.141,
        588.64
    ],
    [
        -117.513,
        33.929833,
        3.12
    ],
    [
        -147.307,
        64.9865,
        0
    ],
    [
        -122.830833,
        38.8385,
        2.22
    ],
    [
        -70.8955,
        -19.9851,
        13.88
    ],
    [
        -115.600667,
        32.8185,
        11.77
    ],
    [
        148.002,
        -5.1396,
        10
    ],
    [
        -150.5728,
        63.1811,
        118.6
    ],
    [
        147.9821,
        -5.1384,
        10
    ],
    [
        147.8337,
        -5.11,
        10
    ],
    [
        -147.7194,
        63.0772,
        10.8
    ],
    [
        -118.8235,
        37.532,
        3.23
    ],
    [
        -152.7597,
        60.286,
        105.1
    ],
    [
        -141.2822,
        60.1956,
        0
    ],
    [
        -152.7128,
        62.2758,
        1.9
    ],
    [
        -122.817497,
        38.818165,
        1.98
    ],
    [
        -112.3355,
        46.855167,
        12.51
    ],
    [
        -140.8648,
        61.3084,
        14.6
    ],
    [
        -148.1675,
        59.8496,
        11.5
    ],
    [
        -155.695496,
        19.176666,
        1.78
    ],
    [
        -117.92,
        47.376,
        -0.5
    ],
    [
        -148.4385,
        61.7606,
        10.4
    ],
    [
        -149.6592,
        62.5852,
        59.8
    ],
    [
        -120.59,
        36.021667,
        3.05
    ],
    [
        -141.3926,
        60.1466,
        0
    ],
    [
        169.0947,
        -18.7978,
        200.19
    ],
    [
        -155.033667,
        19.2375,
        39.578
    ],
    [
        -117.0765,
        32.813833,
        -0.2
    ],
    [
        -166.8359,
        53.871,
        5.2
    ],
    [
        -98.0579,
        36.6187,
        5.828
    ],
    [
        -148.8873,
        62.1092,
        41.4
    ],
    [
        -110.451,
        43.543667,
        10.41
    ],
    [
        -115.1139,
        37.3666,
        2.9
    ],
    [
        -118.751,
        34.839333,
        -1.28
    ],
    [
        -119.1164,
        38.3161,
        11.8
    ],
    [
        -122.592833,
        39.610333,
        2.9
    ],
    [
        -146.4033,
        69.0735,
        10
    ],
    [
        -150.2132,
        61.1317,
        38
    ],
    [
        -115.389167,
        32.380167,
        15.18
    ],
    [
        -121.428333,
        36.582667,
        0.68
    ],
    [
        -111.474333,
        42.6455,
        0.08
    ],
    [
        -121.9675,
        40.890167,
        14.69
    ],
    [
        -150.582,
        62.6618,
        78.5
    ],
    [
        -151.2216,
        61.5685,
        73.1
    ],
    [
        -121.983667,
        40.891333,
        16.86
    ],
    [
        -121.546833,
        36.829167,
        3.48
    ],
    [
        -136.6968,
        59.7895,
        4.9
    ],
    [
        144.6601,
        37.9814,
        11
    ],
    [
        -145.5787,
        62.1577,
        21.6
    ],
    [
        118.8822,
        -10.1961,
        10.84
    ],
    [
        135.4357,
        33.9578,
        44.93
    ],
    [
        -141.1746,
        60.1861,
        0
    ],
    [
        -117.593333,
        34.202833,
        4.57
    ],
    [
        166.9265,
        -14.913,
        39
    ],
    [
        -97.783,
        37.3255,
        5.27
    ],
    [
        -28.7481,
        43.6321,
        10
    ],
    [
        -111.455667,
        42.606,
        5.92
    ],
    [
        70.9001,
        36.5943,
        194.83
    ],
    [
        -82.8639,
        5.1272,
        10
    ],
    [
        -157.5285,
        56.3302,
        52.3
    ],
    [
        -146.5508,
        61.18,
        5.3
    ],
    [
        -114.1207,
        -17.9346,
        10
    ],
    [
        -117.514,
        33.93,
        3.08
    ],
    [
        -124.179,
        40.2545,
        10.1
    ],
    [
        121.7572,
        23.2931,
        22.03
    ],
    [
        -124.182833,
        40.246333,
        11.38
    ],
    [
        -111.4155,
        42.592833,
        6.06
    ],
    [
        -156.6193,
        67.4066,
        12.2
    ],
    [
        -150.2998,
        61.7353,
        47.3
    ],
    [
        -112.527333,
        46.886167,
        13.87
    ],
    [
        -116.453667,
        34.324833,
        9.66
    ],
    [
        -119.6465,
        36.06,
        20.18
    ],
    [
        -117.79,
        36.101,
        8.43
    ],
    [
        -115.197667,
        32.419333,
        10.66
    ],
    [
        -152.0983,
        64.9958,
        11.1
    ],
    [
        -148.9571,
        64.0729,
        125
    ],
    [
        132.5848,
        1.0854,
        36.12
    ],
    [
        -111.078167,
        44.806167,
        7.81
    ],
    [
        -111.4578,
        42.6105,
        7.92
    ],
    [
        -155.624833,
        19.4175,
        3.162
    ],
    [
        -150.4867,
        61.3624,
        40.7
    ],
    [
        -111.418333,
        42.6315,
        2.43
    ],
    [
        -117.6351,
        40.2652,
        7.9
    ],
    [
        -116.542167,
        33.157167,
        16.18
    ],
    [
        -122.887667,
        39.9645,
        5
    ],
    [
        -111.426833,
        42.575667,
        8.53
    ],
    [
        -155.275162,
        19.410833,
        10.08
    ],
    [
        -147.6927,
        60.366,
        14.4
    ],
    [
        -150.0351,
        61.9136,
        37.5
    ],
    [
        -119.802667,
        36.023667,
        14.48
    ],
    [
        -177.8205,
        51.5611,
        26.5
    ],
    [
        -123.257833,
        39.404167,
        3.7
    ],
    [
        -149.4101,
        61.9294,
        46
    ],
    [
        -89.502,
        36.239333,
        7.22
    ],
    [
        -136.81,
        59.8821,
        7.2
    ],
    [
        -93.4191,
        15.2723,
        57.48
    ],
    [
        -117.495167,
        35.975167,
        6.03
    ],
    [
        -111.424333,
        42.560333,
        7.63
    ],
    [
        -151.9125,
        61.7794,
        102.1
    ],
    [
        -149.2214,
        61.9475,
        35.2
    ],
    [
        -151.7292,
        62.9468,
        0
    ],
    [
        -136.7213,
        59.8967,
        2.1
    ],
    [
        -119.6593,
        38.6914,
        6.6
    ],
    [
        -122.810837,
        38.818668,
        2.51
    ],
    [
        -148.8825,
        63.8483,
        113.3
    ],
    [
        -155.477661,
        19.182333,
        34.15
    ],
    [
        -151.4004,
        63.1493,
        5.6
    ],
    [
        -160.1086,
        55.2931,
        60.27
    ],
    [
        -122.672,
        48.548667,
        -0.01
    ],
    [
        -117.512,
        33.929167,
        3.06
    ],
    [
        141.0335,
        30.5728,
        51.74
    ],
    [
        -139.4786,
        59.9819,
        0
    ],
    [
        -142.8777,
        60.4396,
        4
    ],
    [
        -116.797667,
        33.493667,
        4.26
    ],
    [
        -151.3632,
        62.9389,
        110.1
    ],
    [
        -118.840333,
        37.569333,
        1.25
    ],
    [
        -152.6591,
        59.7355,
        84.3
    ],
    [
        -111.409833,
        42.577333,
        5.18
    ],
    [
        -111.420167,
        42.597,
        5.54
    ],
    [
        -111.4288,
        42.5861,
        7.69
    ],
    [
        -155.2775,
        19.387833,
        2.782
    ],
    [
        -111.426333,
        42.581333,
        7.79
    ],
    [
        -156.1734,
        57.6592,
        5.1
    ],
    [
        -120.731,
        35.610333,
        5.63
    ],
    [
        -151.2468,
        62.4591,
        77.3
    ],
    [
        -111.445667,
        42.595833,
        3.5
    ],
    [
        -117.764667,
        36.027,
        1.93
    ],
    [
        -111.440667,
        42.600667,
        3.5
    ],
    [
        -155.6165,
        19.4305,
        3.542
    ],
    [
        -160.4523,
        53.0789,
        11
    ],
    [
        -111.435667,
        42.589167,
        3.5
    ],
    [
        -147.3481,
        59.8279,
        3.2
    ],
    [
        -162.4096,
        54.4777,
        11.3
    ],
    [
        -155.875167,
        19.494,
        13.771
    ],
    [
        -136.5895,
        59.7855,
        1.3
    ],
    [
        -148.8219,
        63.9434,
        110.5
    ],
    [
        -152.8317,
        59.5969,
        83.3
    ],
    [
        -111.4045,
        42.559,
        7.09
    ],
    [
        -155.1233,
        56.6112,
        35
    ],
    [
        -149.5943,
        62.8332,
        79.3
    ],
    [
        -96.7528,
        35.56,
        6.78
    ],
    [
        -115.1044,
        37.3927,
        2
    ],
    [
        -142.96,
        68.8119,
        5.7
    ],
    [
        -144.8653,
        65.3778,
        3.9
    ],
    [
        -155.5664,
        57.7913,
        90.2
    ],
    [
        -148.9661,
        63.2402,
        5.7
    ],
    [
        -71.3157,
        -16.2747,
        92.59
    ],
    [
        148.9933,
        44.304,
        47.06
    ],
    [
        -152.8016,
        59.167,
        62.3
    ],
    [
        -159.2848,
        54.6322,
        28.5
    ],
    [
        -150.3599,
        61.7927,
        48
    ],
    [
        -118.8997,
        38.3821,
        8.2
    ],
    [
        -153.3362,
        59.9873,
        134.6
    ],
    [
        -139.7317,
        59.9227,
        0
    ],
    [
        -151.2295,
        62.4633,
        79.7
    ],
    [
        -153.2105,
        59.7151,
        108.5
    ],
    [
        -118.3295,
        36.066833,
        4.96
    ],
    [
        -111.422667,
        42.523667,
        7.06
    ],
    [
        -118.328333,
        36.063333,
        2.53
    ],
    [
        -147.1296,
        60.1348,
        9.2
    ],
    [
        -153.2703,
        59.8732,
        126
    ],
    [
        -140.9406,
        59.985,
        1.6
    ],
    [
        -118.331167,
        36.0625,
        4.96
    ],
    [
        -118.3305,
        36.062833,
        2.62
    ],
    [
        -147.3801,
        60.7066,
        4.9
    ],
    [
        -94.8719,
        16.1444,
        48.73
    ],
    [
        -111.423167,
        42.581333,
        8.05
    ],
    [
        -178.4258,
        51.6886,
        13.3
    ],
    [
        -121.286167,
        36.776667,
        10.03
    ],
    [
        -116.752,
        33.713,
        15.96
    ],
    [
        -111.445,
        42.617667,
        6.11
    ],
    [
        -116.750333,
        33.961833,
        15.8
    ],
    [
        179.7511,
        -25.3193,
        527.05
    ],
    [
        174.3444,
        -41.5073,
        24.6
    ],
    [
        -90.9075,
        14.5711,
        178.93
    ],
    [
        -66.3401,
        18.9298,
        12
    ],
    [
        -152.1132,
        59.1631,
        57.5
    ],
    [
        -120.522667,
        35.964833,
        7.8
    ],
    [
        -136.6365,
        59.7836,
        5
    ],
    [
        -2.1386,
        37.4306,
        7.84
    ],
    [
        -121.103,
        36.606333,
        9.92
    ],
    [
        162.614,
        -50.7145,
        19.83
    ],
    [
        -152.323,
        61.0377,
        13.3
    ],
    [
        -143.0763,
        60.3456,
        0.4
    ],
    [
        -112.528,
        46.8965,
        11.33
    ],
    [
        -120.586,
        36.020333,
        4.08
    ],
    [
        141.5418,
        -3.912,
        43.33
    ],
    [
        -111.450167,
        42.612833,
        6.23
    ],
    [
        -111.415833,
        42.508,
        5.93
    ],
    [
        -98.7971,
        36.457,
        5.777
    ],
    [
        -121.668833,
        37.291667,
        4.46
    ],
    [
        57.4066,
        30.7208,
        10
    ],
    [
        -153.744,
        56.8763,
        33
    ],
    [
        -159.5947,
        55.8757,
        101.6
    ],
    [
        -153.0266,
        60.2087,
        122.6
    ],
    [
        -98.8008,
        36.4519,
        6.233
    ],
    [
        -112.407833,
        45.589,
        4.43
    ],
    [
        -111.4223,
        42.5909,
        9.63
    ],
    [
        -120.772333,
        46.652333,
        -0.79
    ],
    [
        123.9102,
        6.3611,
        38.14
    ],
    [
        -97.9891,
        36.9623,
        5.329
    ],
    [
        -94.8625,
        16.2348,
        45.26
    ],
    [
        -122.194333,
        46.983167,
        -0.67
    ],
    [
        -147.3714,
        64.9781,
        0
    ],
    [
        179.4478,
        -36.2513,
        47.77
    ],
    [
        -150.6706,
        62.0713,
        0.1
    ],
    [
        -111.4595,
        42.608,
        5
    ],
    [
        -98.7506,
        36.4396,
        1.92
    ],
    [
        -98.7831,
        36.4511,
        2.64
    ],
    [
        -116.475333,
        33.486667,
        14.73
    ],
    [
        -111.420667,
        42.524833,
        7.59
    ],
    [
        -143.6104,
        61.9413,
        2.9
    ],
    [
        -119.7943,
        38.658,
        7.9
    ],
    [
        -165.652,
        53.3989,
        20
    ],
    [
        -119.7768,
        38.66,
        6.5
    ],
    [
        -119.7817,
        38.6647,
        4.7
    ],
    [
        -147.06,
        61.1692,
        19.6
    ],
    [
        -111.4475,
        42.619,
        6.05
    ],
    [
        -135.5801,
        68.0241,
        10.8
    ],
    [
        -151.2245,
        61.5244,
        4.3
    ],
    [
        -115.1076,
        37.3659,
        0
    ],
    [
        -94.5112,
        15.3218,
        46.64
    ],
    [
        -117.8445,
        36.1795,
        2.3
    ],
    [
        -118.3633,
        38.1896,
        5.9
    ],
    [
        -150.9168,
        61.6291,
        63.4
    ],
    [
        -122.721832,
        38.778832,
        1.61
    ],
    [
        -153.2675,
        59.6779,
        106.8
    ],
    [
        -69.0339,
        -20.6057,
        107.88
    ],
    [
        -149.9751,
        62.3114,
        2.4
    ],
    [
        -153.476,
        59.9101,
        122.4
    ],
    [
        -158.8511,
        55.6543,
        46.3
    ],
    [
        -156.4847,
        57.8969,
        244.9
    ],
    [
        -123.194167,
        40.744,
        31.83
    ],
    [
        -111.439833,
        42.608667,
        6.41
    ],
    [
        -140.5411,
        60.0259,
        13.2
    ],
    [
        141.7668,
        37.2998,
        35.1
    ],
    [
        150.8423,
        -5.5637,
        99.91
    ],
    [
        -147.171,
        64.5345,
        7.6
    ],
    [
        -117.498833,
        33.866667,
        -0.49
    ],
    [
        -120.729333,
        36.3275,
        5.22
    ],
    [
        -156.3232,
        58.1622,
        6.6
    ],
    [
        -170.4901,
        52.1476,
        24.6
    ],
    [
        -111.421,
        42.579,
        5.88
    ],
    [
        -139.6328,
        59.921,
        0
    ],
    [
        -151.9009,
        61.545,
        3.9
    ],
    [
        -155.283829,
        19.389834,
        2.69
    ],
    [
        -117.7695,
        36.0195,
        2.35
    ],
    [
        -117.767,
        36.0195,
        2.27
    ],
    [
        -117.769833,
        36.019333,
        1.78
    ],
    [
        -155.249161,
        19.378334,
        1.88
    ],
    [
        -178.8186,
        52.0581,
        213.2
    ],
    [
        -122.104167,
        37.325333,
        -0.31
    ],
    [
        -118.359001,
        36.981335,
        8.57
    ],
    [
        -117.767333,
        36.019,
        1.55
    ],
    [
        -120.572167,
        35.430667,
        -0.58
    ],
    [
        -74.1913,
        -37.2281,
        5.95
    ],
    [
        -98.4952,
        18.5539,
        51
    ],
    [
        -157.026,
        67.0927,
        3.7
    ],
    [
        -117.846,
        36.179167,
        2.24
    ],
    [
        -117.768,
        36.018667,
        1.61
    ],
    [
        -89.646167,
        36.5445,
        7.49
    ],
    [
        -72.6161,
        -31.7548,
        29.84
    ],
    [
        -97.682,
        37.184833,
        3.97
    ],
    [
        -121.259833,
        36.753,
        11.5
    ],
    [
        128.1444,
        -7.5033,
        158.11
    ],
    [
        -111.426167,
        42.5295,
        8.11
    ],
    [
        -121.598167,
        36.752,
        -0.32
    ],
    [
        -117.766,
        36.02,
        1.86
    ],
    [
        -111.448833,
        42.606,
        3.56
    ],
    [
        -149.8949,
        63.2912,
        101.6
    ],
    [
        -111.458833,
        42.607,
        3.95
    ],
    [
        -111.469,
        42.6077,
        7.7
    ],
    [
        -120.485667,
        35.221333,
        6.04
    ],
    [
        -154.4077,
        58.8832,
        118.6
    ],
    [
        -116.3645,
        33.1855,
        10.21
    ],
    [
        -142.9995,
        67.1881,
        4.7
    ],
    [
        -111.4455,
        42.613833,
        1.76
    ],
    [
        -141.5253,
        60.121,
        0
    ],
    [
        -165.1883,
        53.9422,
        44.2
    ],
    [
        -118.833667,
        37.507667,
        1.79
    ],
    [
        -111.4431,
        42.6149,
        4.8
    ],
    [
        -111.455167,
        42.616,
        1.41
    ],
    [
        -111.4706,
        42.6154,
        8.81
    ],
    [
        -178.4914,
        51.7473,
        9.7
    ],
    [
        -147.6176,
        61.14,
        0
    ],
    [
        -152.259,
        60.5626,
        90.4
    ],
    [
        -97.5135,
        36.2854,
        4.17
    ],
    [
        -111.4724,
        42.6121,
        4.3
    ],
    [
        -178.4652,
        51.7084,
        16.1
    ],
    [
        -111.4508,
        42.6064,
        4.14
    ],
    [
        -149.0197,
        66.1072,
        6
    ],
    [
        -111.4429,
        42.6135,
        8.34
    ],
    [
        -98.7965,
        36.4516,
        6.125
    ],
    [
        -153.9141,
        57.1404,
        29.5
    ],
    [
        -117.763833,
        36.020667,
        1.88
    ],
    [
        -152.0429,
        60.6104,
        77.7
    ],
    [
        178.0168,
        52.0275,
        131.51
    ],
    [
        -137.534,
        58.7008,
        10
    ],
    [
        -117.765667,
        36.018833,
        1.51
    ],
    [
        -117.764833,
        36.019667,
        1.65
    ],
    [
        -72.4084,
        -31.8109,
        10
    ],
    [
        -136.7313,
        59.8087,
        0.9
    ],
    [
        -118.8959,
        38.3975,
        10.4
    ],
    [
        -147.6819,
        63.0946,
        10.5
    ],
    [
        -153.2865,
        59.7628,
        116.6
    ],
    [
        -148.3607,
        61.0755,
        0
    ],
    [
        -122.799667,
        38.815333,
        3.57
    ],
    [
        -118.96,
        37.587,
        -0.68
    ],
    [
        -67.596,
        19.2688,
        38
    ],
    [
        53.9953,
        27.9548,
        10
    ],
    [
        -122.801333,
        38.709667,
        3.88
    ],
    [
        -149.9795,
        61.8762,
        43.3
    ],
    [
        -152.1838,
        62.582,
        3.3
    ],
    [
        -116.804167,
        33.865333,
        14.31
    ],
    [
        -78.7564,
        -2.1725,
        112.59
    ],
    [
        -179.1381,
        51.2155,
        7.2
    ],
    [
        -115.0787,
        37.3317,
        0
    ],
    [
        -139.5369,
        59.9737,
        0
    ],
    [
        -149.0502,
        66.1255,
        9.3
    ],
    [
        -149.013,
        66.1279,
        12.2
    ],
    [
        -147.3053,
        64.2153,
        8.4
    ],
    [
        -145.2687,
        63.3135,
        1
    ],
    [
        -161.4683,
        54.3778,
        12.7
    ],
    [
        -122.809833,
        38.802,
        3.64
    ],
    [
        -87.909833,
        38.423833,
        11.68
    ],
    [
        -144.7265,
        65.4529,
        0.3
    ],
    [
        -170.3853,
        52.1246,
        33.1
    ],
    [
        -122.811333,
        38.8115,
        2.81
    ],
    [
        -115.0296,
        37.3121,
        0
    ],
    [
        -118.197333,
        34.085167,
        9.45
    ],
    [
        -171.074,
        52.1917,
        55.8
    ],
    [
        -72.3742,
        -31.7199,
        35
    ],
    [
        -148.7971,
        56.0595,
        12
    ],
    [
        178.3494,
        51.1124,
        9
    ],
    [
        -121.178833,
        36.5795,
        5.08
    ],
    [
        -121.177333,
        36.582833,
        3.53
    ],
    [
        -111.018167,
        44.796,
        9.74
    ],
    [
        -152.2511,
        57.9599,
        9
    ],
    [
        -149.8298,
        61.5636,
        56.7
    ],
    [
        -168.7444,
        52.8226,
        62.9
    ],
    [
        -67.7015,
        19.0933,
        25
    ],
    [
        178.6299,
        51.8122,
        76.9
    ],
    [
        -67.723,
        19.2006,
        9
    ],
    [
        -96.8094,
        35.9883,
        6.72
    ],
    [
        -115.0799,
        37.3335,
        2.3
    ],
    [
        -115.489167,
        32.91,
        3.69
    ],
    [
        -155.2385,
        19.383667,
        3.069
    ],
    [
        162.925,
        -10.7783,
        56.21
    ],
    [
        -167.747,
        56.8207,
        54.24
    ],
    [
        -147.6103,
        61.758,
        29.3
    ],
    [
        -116.053,
        33.079333,
        9.9
    ],
    [
        -142.3955,
        61.6352,
        5
    ],
    [
        -93.8135,
        15.201,
        45.46
    ],
    [
        -94.0446,
        15.1414,
        38.74
    ],
    [
        -179.2219,
        51.3226,
        34.2
    ],
    [
        -122.792335,
        38.809666,
        2.7
    ],
    [
        -118.473833,
        34.086,
        9.44
    ],
    [
        -119.786,
        38.6641,
        4.9
    ],
    [
        -94.5541,
        15.6968,
        62.85
    ],
    [
        -119.804667,
        38.658333,
        -1.93
    ],
    [
        162.5306,
        -11.0433,
        31.53
    ],
    [
        -152.8602,
        60.3455,
        116.4
    ],
    [
        -147.6967,
        63.0934,
        11.2
    ],
    [
        -118.475667,
        34.086667,
        10.48
    ],
    [
        -116.774833,
        34.169667,
        4.09
    ],
    [
        178.8368,
        51.4427,
        38.8
    ],
    [
        -149.7029,
        61.7782,
        46.8
    ],
    [
        -166.4992,
        53.7654,
        79
    ],
    [
        -124.194667,
        46.453167,
        40.56
    ],
    [
        -115.486333,
        32.916167,
        3.75
    ],
    [
        -151.0668,
        60.2297,
        58.9
    ],
    [
        -148.3206,
        62.3117,
        31.2
    ],
    [
        -122.682,
        46.13,
        13.15
    ],
    [
        -149.1655,
        62.2572,
        56.3
    ],
    [
        -115.1363,
        37.4312,
        0
    ],
    [
        -122.7385,
        38.757333,
        2.56
    ],
    [
        -139.2708,
        60.1059,
        0
    ],
    [
        -68.6603,
        17.4281,
        35
    ],
    [
        -160.7298,
        54.4321,
        27.3
    ],
    [
        -153.1948,
        59.7387,
        99.4
    ],
    [
        -167.4718,
        53.5765,
        9.9
    ],
    [
        -122.7735,
        38.656833,
        -0.04
    ],
    [
        -115.486333,
        32.9165,
        3.74
    ],
    [
        -115.484833,
        32.910667,
        3.6
    ],
    [
        -115.4825,
        32.916333,
        3.63
    ],
    [
        -118.840667,
        37.569167,
        0.74
    ],
    [
        -157.1719,
        66.2583,
        2.2
    ],
    [
        -153.3919,
        59.6211,
        106.4
    ],
    [
        -146.5941,
        61.448,
        35
    ],
    [
        -112.526833,
        46.8665,
        12.97
    ],
    [
        -136.8501,
        59.9025,
        11.5
    ],
    [
        -149.6396,
        62.818,
        76.1
    ],
    [
        -94.4373,
        15.5332,
        46.8
    ],
    [
        -111.714,
        41.274333,
        9.1
    ],
    [
        -111.707167,
        41.273,
        13.52
    ],
    [
        -155.457833,
        19.1825,
        36.457
    ],
    [
        -111.715333,
        41.2735,
        12.54
    ],
    [
        -150.6267,
        63.2162,
        130.7
    ],
    [
        -152.0202,
        60.2096,
        73.3
    ],
    [
        -122.827331,
        38.841667,
        1.75
    ],
    [
        -146.8182,
        61.2069,
        27.3
    ],
    [
        -122.7775,
        38.816,
        2.36
    ],
    [
        -139.4,
        60.0341,
        0
    ],
    [
        -139.8629,
        61.2326,
        1.6
    ],
    [
        -115.489333,
        32.905167,
        5.38
    ],
    [
        -115.488,
        32.911333,
        4.36
    ],
    [
        -150.9564,
        61.0148,
        51.3
    ],
    [
        -136.7113,
        59.8038,
        2.1
    ],
    [
        -178.4318,
        51.6727,
        27.8
    ],
    [
        -152.5948,
        59.4167,
        88.5
    ],
    [
        -117.855667,
        36.109333,
        3.89
    ],
    [
        -139.9455,
        64.7711,
        1.2
    ],
    [
        -117.852333,
        36.108833,
        4.09
    ],
    [
        -117.673833,
        35.0495,
        -0.79
    ],
    [
        -115.5662,
        37.4193,
        0
    ],
    [
        -147.3544,
        64.9878,
        0
    ],
    [
        -122.826164,
        38.803165,
        -0.67
    ],
    [
        -153.6811,
        59.3157,
        121.6
    ],
    [
        -123.3385,
        46.609,
        -0.26
    ],
    [
        150.1858,
        46.1638,
        102.95
    ],
    [
        -67.2122,
        -24.1635,
        187
    ],
    [
        -122.814667,
        38.797333,
        2.92
    ],
    [
        -161.33,
        54.9516,
        64.12
    ],
    [
        -141.3969,
        60.1593,
        0
    ],
    [
        -117.856,
        36.108833,
        3.8
    ],
    [
        -94.7554,
        15.1768,
        26.84
    ],
    [
        -153.3386,
        60.1473,
        141.4
    ],
    [
        -123.114667,
        39.267,
        3.8
    ],
    [
        -164.2489,
        54.4702,
        80.1
    ],
    [
        -123.128,
        39.249833,
        8.56
    ],
    [
        -150.6751,
        61.3285,
        49.9
    ],
    [
        -115.605,
        32.830833,
        11.11
    ],
    [
        -115.604667,
        32.8245,
        12
    ],
    [
        -115.606,
        32.822667,
        12.54
    ],
    [
        -66.496,
        19.0255,
        9
    ],
    [
        -152.5226,
        60.8929,
        114.7
    ],
    [
        -147.6844,
        60.3627,
        10
    ],
    [
        -155.602167,
        19.474,
        2.169
    ],
    [
        -117.024833,
        34.482,
        7.73
    ],
    [
        -117.472833,
        34.117167,
        12.54
    ],
    [
        -72.084,
        -30.3511,
        16.63
    ],
    [
        -160.4781,
        55.9976,
        142.8
    ],
    [
        -135.8292,
        66.9662,
        11.2
    ],
    [
        -117.581833,
        34.027833,
        15.24
    ],
    [
        -146.5833,
        61.5338,
        35.4
    ],
    [
        -119.54,
        46.3245,
        -0.47
    ],
    [
        -115.1157,
        37.3834,
        0
    ],
    [
        -119.1142,
        38.3008,
        12.5
    ],
    [
        -118.820667,
        37.543667,
        3.73
    ],
    [
        -94.6427,
        15.3134,
        31.07
    ],
    [
        -116.450667,
        34.371167,
        7.7
    ],
    [
        -111.4497,
        42.6436,
        9.31
    ],
    [
        -118.1565,
        35.016333,
        -1.02
    ],
    [
        -112.536167,
        46.875,
        12.74
    ],
    [
        -117.6987,
        37.801,
        0.9
    ],
    [
        -150.4688,
        62.7498,
        82
    ],
    [
        -115.1168,
        37.3993,
        0
    ],
    [
        -116.9445,
        34.324333,
        -1.41
    ],
    [
        -122.8455,
        38.818,
        2.33
    ],
    [
        -111.613667,
        40.6905,
        8.76
    ],
    [
        -149.838,
        63.3882,
        112.5
    ],
    [
        -116.656502,
        31.030666,
        5.16
    ],
    [
        -115.1288,
        37.4056,
        0
    ],
    [
        -151.4112,
        62.8303,
        102.1
    ],
    [
        -136.8004,
        59.9261,
        7.9
    ],
    [
        -115.635,
        33.146167,
        7.87
    ],
    [
        -118.418667,
        37.284667,
        6.16
    ],
    [
        -150.9735,
        60.9138,
        37.2
    ],
    [
        -149.0018,
        62.0064,
        13.7
    ],
    [
        -150.8926,
        61.2214,
        62.6
    ],
    [
        -66.5011,
        19.09,
        29
    ],
    [
        -95.2066,
        15.6332,
        53.99
    ],
    [
        -154.6398,
        58.3116,
        3.1
    ],
    [
        -115.0899,
        37.3433,
        2.7
    ],
    [
        -94.8487,
        15.9949,
        55.32
    ],
    [
        -111.609167,
        40.700833,
        10.96
    ],
    [
        -150.0364,
        64.4942,
        19.7
    ],
    [
        -120.869,
        36.443167,
        15.01
    ],
    [
        -97.819333,
        37.204,
        5.2
    ],
    [
        -122.779167,
        38.816834,
        1.68
    ],
    [
        -122.776833,
        38.818833,
        1.94
    ],
    [
        19.9297,
        40.1065,
        16.32
    ],
    [
        -155.220333,
        19.426333,
        30.266
    ],
    [
        -151.8846,
        59.8511,
        56.1
    ],
    [
        -175.9783,
        51.5536,
        48.5
    ],
    [
        -152.5148,
        59.7419,
        92.5
    ],
    [
        -179.173,
        52.0554,
        121.43
    ],
    [
        -110.8355,
        39.743833,
        1.73
    ],
    [
        -118.0248,
        38.8721,
        3.6
    ],
    [
        -118.8995,
        37.521833,
        -0.61
    ],
    [
        77.1478,
        40.9769,
        10
    ],
    [
        -150.3078,
        62.9046,
        85.6
    ],
    [
        -150.5131,
        62.8898,
        90.2
    ],
    [
        -72.1652,
        -31.8057,
        10
    ],
    [
        -177.7225,
        51.7093,
        41.5
    ],
    [
        -122.787498,
        38.798832,
        -0.32
    ],
    [
        -155.431667,
        19.343833,
        9.245
    ],
    [
        -115.1332,
        37.421,
        0
    ],
    [
        -94.5858,
        15.1833,
        36.89
    ],
    [
        -136.7568,
        59.8878,
        0
    ],
    [
        -156.9195,
        57.1996,
        98.3
    ],
    [
        -121.149,
        40.217,
        6.16
    ],
    [
        -164.7477,
        53.6076,
        54.8
    ],
    [
        -64.7745,
        18.8611,
        60
    ],
    [
        -151.6658,
        61.6841,
        99.5
    ],
    [
        -178.3907,
        51.552,
        15.01
    ],
    [
        -173.9092,
        -17.3471,
        45.41
    ],
    [
        -72.2186,
        -31.8431,
        10
    ],
    [
        -115.1135,
        37.3693,
        0
    ],
    [
        -94.5576,
        15.2537,
        10
    ],
    [
        -162.8697,
        55.3906,
        161.2
    ],
    [
        -72.147,
        -31.82,
        10
    ],
    [
        -112.5215,
        46.8389,
        9.05
    ],
    [
        -119.124,
        38.2695,
        11.4
    ],
    [
        167.9613,
        54.8175,
        10
    ],
    [
        -154.6727,
        58.1121,
        86.4
    ],
    [
        -150.4494,
        63.2584,
        114
    ],
    [
        -122.0555,
        37.236667,
        7.74
    ],
    [
        -140.9796,
        60.2252,
        8.2
    ],
    [
        -112.5825,
        46.902333,
        13.02
    ],
    [
        -120.378,
        36.3415,
        3.67
    ],
    [
        -147.1555,
        60.2089,
        8
    ],
    [
        -177.9085,
        -30.4189,
        35
    ],
    [
        -94.9784,
        16.2017,
        42.11
    ],
    [
        -122.784332,
        38.838333,
        0.08
    ],
    [
        -122.818001,
        38.813499,
        2.19
    ],
    [
        -152.3712,
        59.8705,
        71.6
    ],
    [
        -149.8742,
        61.715,
        45.4
    ],
    [
        -150.8392,
        63.0532,
        129.1
    ],
    [
        -112.518,
        46.853667,
        12.03
    ],
    [
        -112.487833,
        46.873667,
        12.76
    ],
    [
        -122.8005,
        38.805833,
        2.04
    ],
    [
        -147.5693,
        64.3804,
        8.3
    ],
    [
        -122.814163,
        38.801998,
        2.32
    ],
    [
        -170.7034,
        52.2855,
        34.99
    ],
    [
        -150.6388,
        61.2241,
        50.7
    ],
    [
        -116.924667,
        34.9205,
        5.15
    ],
    [
        -118.3425,
        35.462,
        3.59
    ],
    [
        -121.950333,
        41.046833,
        9.17
    ],
    [
        -161.5491,
        54.9912,
        67
    ],
    [
        -149.5426,
        63.5414,
        107.9
    ],
    [
        -155.608167,
        19.4375,
        2.822
    ],
    [
        -151.773,
        63.2917,
        2.1
    ],
    [
        -67.2451,
        18.1321,
        32
    ],
    [
        -120.034667,
        34.574333,
        8.17
    ],
    [
        -122.815002,
        38.806999,
        3
    ],
    [
        -150.5195,
        61.7191,
        48
    ],
    [
        -121.177167,
        36.580167,
        5.17
    ],
    [
        -146.0878,
        61.0048,
        19.3
    ],
    [
        -152.0016,
        62.7051,
        3.6
    ],
    [
        -150.7382,
        59.7002,
        39.4
    ],
    [
        -115.0964,
        37.3646,
        4.7
    ],
    [
        -154.3038,
        57.9653,
        66.7
    ],
    [
        -122.892833,
        39.342333,
        17.73
    ],
    [
        -151.9106,
        60.4014,
        74.9
    ],
    [
        -150.4141,
        63.186,
        102.9
    ],
    [
        -165.0917,
        53.5664,
        54.2
    ],
    [
        -152.705,
        62.5617,
        9
    ],
    [
        -139.5274,
        59.9845,
        0
    ],
    [
        -150.9157,
        63.5359,
        3.7
    ],
    [
        -121.157,
        36.5615,
        3.01
    ],
    [
        -164.5368,
        53.884,
        45.2
    ],
    [
        -147.8253,
        64.8958,
        12.3
    ],
    [
        -147.8755,
        64.8906,
        14.6
    ],
    [
        -151.6407,
        59.7861,
        56
    ],
    [
        -151.2909,
        61.9803,
        75.6
    ],
    [
        -150.7225,
        60.6284,
        40.3
    ],
    [
        -116.790667,
        33.495,
        4.99
    ],
    [
        -155.218167,
        19.4285,
        29.836
    ],
    [
        -122.0175,
        37.221333,
        9.74
    ],
    [
        -122.827167,
        38.8125,
        1.64
    ],
    [
        -161.2238,
        64.9935,
        6.8
    ],
    [
        -121.180167,
        36.585333,
        5.57
    ],
    [
        -140.0029,
        61.1046,
        1.6
    ],
    [
        -165.0451,
        53.5595,
        58.8
    ],
    [
        -114.576167,
        48.519,
        10.89
    ],
    [
        -115.6075,
        32.833667,
        11.71
    ],
    [
        -150.5838,
        63.1688,
        113.8
    ],
    [
        -140.6661,
        60.0063,
        5.7
    ],
    [
        -150.4484,
        61.3659,
        46.1
    ],
    [
        -112.529333,
        46.9025,
        12.6
    ],
    [
        -146.4235,
        61.487,
        4.6
    ],
    [
        -165.0259,
        53.5803,
        50.5
    ],
    [
        -12.7162,
        -18.5262,
        10
    ],
    [
        -118.9167,
        38.4153,
        9.7
    ],
    [
        179.4353,
        51.7384,
        88.4
    ],
    [
        -151.0383,
        61.8395,
        66.6
    ],
    [
        -125.213167,
        41.036,
        15.48
    ],
    [
        -111.457,
        42.6072,
        5.27
    ],
    [
        -111.024833,
        44.791,
        10.06
    ],
    [
        -167.234,
        53.4469,
        14
    ],
    [
        -116.797,
        33.496667,
        4.85
    ],
    [
        -89.764167,
        36.103833,
        7.78
    ],
    [
        -121.583,
        36.899833,
        6.75
    ],
    [
        -140.0127,
        61.0975,
        1.1
    ],
    [
        -150.5639,
        63.255,
        126.3
    ],
    [
        -153.0175,
        55.7675,
        33
    ],
    [
        -116.797,
        33.6865,
        17.69
    ],
    [
        -111.429167,
        42.593667,
        7.36
    ],
    [
        -152.8583,
        58.216,
        42.3
    ],
    [
        -155.2714,
        58.1899,
        5
    ],
    [
        -112.526333,
        46.8725,
        13.72
    ],
    [
        -150.9313,
        61.6519,
        67.6
    ],
    [
        -121.735167,
        37.656,
        5.91
    ],
    [
        -146.6172,
        61.5636,
        14.5
    ],
    [
        -116.919833,
        33.9785,
        4.46
    ],
    [
        -119.713,
        38.8287,
        9.8
    ],
    [
        -145.5107,
        62.1708,
        21
    ],
    [
        -94.3513,
        15.0304,
        10
    ],
    [
        -117.172167,
        34.033667,
        5.06
    ],
    [
        -150.8715,
        60.6663,
        44.3
    ],
    [
        -122.847333,
        47.759167,
        17.25
    ],
    [
        -94.2351,
        15.3068,
        42.58
    ],
    [
        -94.1304,
        14.9812,
        38.39
    ],
    [
        -145.5172,
        62.1736,
        24.2
    ],
    [
        -122.295333,
        37.912,
        2.97
    ],
    [
        159.3367,
        53.381,
        85.64
    ],
    [
        -116.7125,
        33.986833,
        15.48
    ],
    [
        -69.5275,
        -17.5255,
        167.68
    ],
    [
        -149.1193,
        62.3401,
        0.6
    ],
    [
        -117.650333,
        36.996833,
        -0.56
    ],
    [
        -152.1499,
        61.9617,
        114.4
    ],
    [
        -141.8744,
        60.2484,
        9.9
    ],
    [
        -94.5206,
        14.824,
        18.19
    ],
    [
        -149.4081,
        64.6136,
        20.7
    ],
    [
        -121.818833,
        37.41,
        -0.31
    ],
    [
        145.306,
        19.0286,
        202.23
    ],
    [
        119.3564,
        -8.1346,
        41.72
    ],
    [
        -115.3624,
        37.0509,
        0
    ],
    [
        -150.7281,
        60.3555,
        46.1
    ],
    [
        -136.7896,
        59.8626,
        4.6
    ],
    [
        -118.912833,
        37.621667,
        2.05
    ],
    [
        -149.791,
        61.7452,
        48.2
    ],
    [
        -112.522,
        46.869667,
        12.91
    ],
    [
        -117.673167,
        35.042833,
        -0.82
    ],
    [
        -153.4144,
        67.2216,
        11
    ],
    [
        -166.3972,
        53.7854,
        6.8
    ],
    [
        149.5672,
        -4.6379,
        588.19
    ],
    [
        -112.5195,
        46.899167,
        12.28
    ],
    [
        -151.5592,
        60.9727,
        72.2
    ],
    [
        -112.8165,
        46.9305,
        13.74
    ],
    [
        -121.026667,
        36.453333,
        2.98
    ],
    [
        -121.618333,
        36.970833,
        5.35
    ],
    [
        -147.3499,
        60.4807,
        6.2
    ],
    [
        -153.7406,
        64.6981,
        9.7
    ],
    [
        -147.3304,
        60.4706,
        9.6
    ],
    [
        -121.725333,
        47.439333,
        22.35
    ],
    [
        -169.006,
        52.386,
        9.1
    ],
    [
        -118.571833,
        37.947167,
        8.37
    ],
    [
        -147.6357,
        60.5724,
        2.9
    ],
    [
        -151.1167,
        59.7703,
        41.9
    ],
    [
        -146.4894,
        61.5289,
        25.6
    ],
    [
        -118.834,
        37.496,
        1.06
    ],
    [
        178.4711,
        51.686,
        75.7
    ],
    [
        -118.816167,
        37.455833,
        1.06
    ],
    [
        -150.5842,
        61.7746,
        3.7
    ],
    [
        -120.973667,
        36.395167,
        4.69
    ],
    [
        -122.809167,
        38.797667,
        3.52
    ],
    [
        -122.810167,
        38.799167,
        3.08
    ],
    [
        -151.1812,
        62.2538,
        76.5
    ],
    [
        -174.9501,
        -18.9829,
        129.26
    ],
    [
        -152.5209,
        60.1956,
        82.1
    ],
    [
        -118.293,
        35.488167,
        2.05
    ],
    [
        -151.2975,
        62.163,
        79.9
    ],
    [
        -174.8219,
        51.8825,
        86.4
    ],
    [
        -122.5365,
        47.603667,
        19.51
    ],
    [
        -115.608667,
        32.830167,
        11.82
    ],
    [
        -87.5905,
        12.0757,
        53.01
    ],
    [
        -70.2379,
        -31.7388,
        121.68
    ],
    [
        -115.605333,
        32.8245,
        11.96
    ],
    [
        -111.4244,
        42.5958,
        5.8
    ],
    [
        -119.12,
        38.2855,
        13.1
    ],
    [
        -121.059667,
        36.477833,
        6.98
    ],
    [
        -96.9818,
        35.7788,
        5
    ],
    [
        -151.7121,
        63.5719,
        4.3
    ],
    [
        -178.4976,
        51.6544,
        7.8
    ],
    [
        -112.6775,
        46.891833,
        15.96
    ],
    [
        -149.5592,
        62.857,
        82
    ],
    [
        -115.831333,
        32.775833,
        2.46
    ],
    [
        -153.4003,
        64.8531,
        2.7
    ],
    [
        -122.734667,
        38.788167,
        1.43
    ],
    [
        -155.0584,
        57.21,
        33
    ],
    [
        -115.833167,
        32.781833,
        2.39
    ],
    [
        -116.273667,
        33.981333,
        6.22
    ],
    [
        127.2591,
        0.908,
        157.83
    ],
    [
        -67.9698,
        19.0821,
        23
    ],
    [
        -111.4059,
        42.5497,
        11.14
    ],
    [
        -111.4107,
        42.5429,
        8.67
    ],
    [
        -122.04,
        46.880167,
        6.02
    ],
    [
        -111.025833,
        44.790333,
        9.98
    ],
    [
        -119.0921,
        41.885,
        0
    ],
    [
        -174.8489,
        51.9624,
        111.3
    ],
    [
        140.7612,
        44.1688,
        33.57
    ],
    [
        -112.516,
        46.881333,
        14.94
    ],
    [
        149.0118,
        -6.3464,
        35
    ],
    [
        -144.362,
        63.1318,
        2.6
    ],
    [
        148.9733,
        -6.4551,
        35
    ],
    [
        -146.6029,
        66.5697,
        13.3
    ],
    [
        -112.519,
        46.855,
        14.3
    ],
    [
        -173.6428,
        -16.6386,
        30.39
    ],
    [
        92.0846,
        12.809,
        27.48
    ],
    [
        -116.19,
        33.2585,
        9.58
    ],
    [
        -118.825,
        37.453,
        1.57
    ],
    [
        149.1591,
        -6.3567,
        35
    ],
    [
        24.0015,
        39.2721,
        10
    ],
    [
        -149.9309,
        62.6606,
        59.8
    ],
    [
        148.8708,
        -6.3113,
        18.92
    ],
    [
        -17.9505,
        64.5019,
        9.15
    ],
    [
        -94.5959,
        15.2169,
        35
    ],
    [
        -17.6137,
        64.4904,
        8.23
    ],
    [
        -136.8499,
        59.8804,
        5.2
    ],
    [
        -116.367,
        33.357167,
        9.18
    ],
    [
        -145.0876,
        69.5184,
        4.2
    ],
    [
        -122.818333,
        38.818167,
        2.23
    ],
    [
        -122.817001,
        38.8185,
        2.05
    ],
    [
        -152.8082,
        60.1773,
        106.4
    ],
    [
        -153.6293,
        59.5728,
        120.8
    ],
    [
        -115.882333,
        31.6215,
        9.25
    ],
    [
        126.5305,
        1.7746,
        37.54
    ],
    [
        -121.125667,
        36.566167,
        8.44
    ],
    [
        -178.9394,
        -17.3298,
        553.92
    ],
    [
        -85.053333,
        35.561333,
        15.47
    ],
    [
        -117.090333,
        33.473833,
        14.65
    ],
    [
        -148.7794,
        63.9496,
        114.9
    ],
    [
        -11.7611,
        -21.01,
        10
    ],
    [
        -177.7236,
        51.4933,
        34.35
    ],
    [
        -148.6722,
        62.9044,
        66.8
    ],
    [
        -116.922167,
        33.9755,
        4.94
    ],
    [
        -94.4533,
        15.5042,
        7.94
    ],
    [
        -152.3466,
        61.07,
        12.2
    ],
    [
        -118.835,
        37.479333,
        0.86
    ],
    [
        -155.6794,
        67.9633,
        14.6
    ],
    [
        -166.9646,
        53.8971,
        6.6
    ],
    [
        -116.2815,
        36.537,
        7.3
    ],
    [
        -147.7652,
        62.1126,
        23.7
    ],
    [
        -153.454,
        59.2923,
        97.5
    ],
    [
        -116.021167,
        33.921,
        2.44
    ],
    [
        -155.478668,
        19.212334,
        38.03
    ],
    [
        -143.7865,
        65.3345,
        13.3
    ],
    [
        -118.543833,
        37.339667,
        10.06
    ],
    [
        -154.7144,
        57.2975,
        42.8
    ],
    [
        166.6171,
        -11.7459,
        251.44
    ],
    [
        -135.7891,
        66.3882,
        37.6
    ],
    [
        -155.55,
        57.7487,
        89
    ],
    [
        -135.7412,
        66.3682,
        34.5
    ],
    [
        -148.4607,
        60.5815,
        14.5
    ],
    [
        -116.920667,
        33.972167,
        5.29
    ],
    [
        -67.3399,
        -21.9058,
        192.78
    ],
    [
        127.0437,
        3.6252,
        68.15
    ],
    [
        -178.4823,
        51.6608,
        13.2
    ],
    [
        -166.3827,
        53.8702,
        12.1
    ],
    [
        -122.041167,
        46.879167,
        6.84
    ],
    [
        -146.605,
        61.6723,
        29.6
    ],
    [
        -116.465667,
        34.376833,
        9.74
    ],
    [
        -116.358167,
        33.415667,
        12.48
    ],
    [
        92.0628,
        12.7773,
        33.35
    ],
    [
        -150.5971,
        61.5891,
        59.1
    ],
    [
        -144.0384,
        63.1445,
        14.8
    ],
    [
        -155.593167,
        19.476,
        2.731
    ],
    [
        -148.8915,
        64.848,
        8.2
    ],
    [
        -26.4288,
        -59.7896,
        35
    ],
    [
        -143.6831,
        60.3761,
        2
    ],
    [
        141.2485,
        37.3415,
        54.96
    ],
    [
        -13.5314,
        -7.0219,
        10
    ],
    [
        -176.1147,
        51.5611,
        45.65
    ],
    [
        -13.1689,
        -7.0877,
        10
    ],
    [
        -153.0719,
        60.2719,
        130.5
    ],
    [
        -152.2164,
        60.4788,
        97.5
    ],
    [
        -111.025833,
        44.786167,
        7.95
    ],
    [
        -121.879167,
        37.109167,
        2.16
    ],
    [
        -150.8564,
        60.3231,
        63
    ],
    [
        -122.737335,
        38.786167,
        0.85
    ],
    [
        -121.117,
        36.594333,
        6.98
    ],
    [
        -82.1696,
        7.5057,
        23.33
    ],
    [
        -151.8157,
        63.2668,
        2.3
    ],
    [
        -66.7666,
        -23.8893,
        236.18
    ],
    [
        -116.373667,
        32.9405,
        7.78
    ],
    [
        -118.8894,
        38.3778,
        11.1
    ],
    [
        -111.4463,
        42.5857,
        4.34
    ],
    [
        -152.7184,
        59.603,
        74.2
    ],
    [
        -118.834167,
        37.493833,
        1.09
    ],
    [
        -111.4391,
        42.6077,
        6.6
    ],
    [
        -115.605167,
        32.828333,
        10.94
    ],
    [
        -118.952833,
        37.588167,
        1.4
    ],
    [
        -71.6223,
        -35.7292,
        85.77
    ],
    [
        -148.7555,
        60.0405,
        18.2
    ],
    [
        -122.736667,
        38.757,
        1.79
    ],
    [
        -164.5935,
        53.8081,
        78.9
    ],
    [
        -111.4531,
        42.5908,
        5.17
    ],
    [
        -110.836,
        44.307333,
        7.31
    ],
    [
        -153.5848,
        64.1727,
        10.8
    ],
    [
        -94.9805,
        16.0409,
        45.23
    ],
    [
        -110.817667,
        44.294,
        7.61
    ],
    [
        -110.828167,
        44.305167,
        7.48
    ],
    [
        -95.0121,
        16.1058,
        52.57
    ],
    [
        -150.2,
        62.1778,
        6.7
    ],
    [
        -88.5423,
        14.4117,
        10
    ],
    [
        -118.0955,
        36.761167,
        1.69
    ],
    [
        -110.841667,
        44.302333,
        7.53
    ],
    [
        -110.822333,
        44.293667,
        7.53
    ],
    [
        -116.797833,
        33.501167,
        4.62
    ],
    [
        -86.4078,
        10.7018,
        35.32
    ],
    [
        -122.810165,
        38.820499,
        1.92
    ],
    [
        -116.928167,
        35.9015,
        5.28
    ],
    [
        -116.181,
        33.187833,
        5.86
    ],
    [
        -150.4712,
        59.8595,
        42.7
    ],
    [
        -121.8885,
        37.105,
        1.63
    ],
    [
        -163.1812,
        54.0118,
        9.5
    ],
    [
        -105.7123,
        17.7366,
        31.43
    ],
    [
        -136.7399,
        59.8813,
        5.7
    ],
    [
        -151.8141,
        63.2696,
        2.4
    ],
    [
        -158.3598,
        64.3838,
        13.9
    ],
    [
        -117.1755,
        33.965,
        15.93
    ],
    [
        -169.8861,
        52.4075,
        59.7
    ],
    [
        -146.3176,
        61.144,
        19.3
    ],
    [
        -151.1301,
        60.8625,
        64.2
    ],
    [
        -150.8794,
        60.7582,
        60.3
    ],
    [
        -136.7851,
        59.8817,
        2.3
    ],
    [
        -122.821167,
        38.807999,
        1.94
    ],
    [
        -165.9053,
        67.6564,
        13.7
    ],
    [
        -122.822502,
        38.808998,
        1.93
    ],
    [
        -118.147333,
        34.5405,
        9.83
    ],
    [
        -147.5056,
        61.4142,
        8
    ],
    [
        -152.6618,
        60.5653,
        6.2
    ],
    [
        -149.2146,
        64.7331,
        17.7
    ],
    [
        -116.709667,
        33.653333,
        15.82
    ],
    [
        -116.687167,
        33.6285,
        12.15
    ],
    [
        -116.927167,
        33.971833,
        17
    ],
    [
        -136.771,
        59.8672,
        1.4
    ],
    [
        -178.474,
        51.671,
        16
    ],
    [
        -156.177667,
        19.442,
        41.639
    ],
    [
        -178.3048,
        51.6525,
        97.4
    ],
    [
        -116.746333,
        33.887,
        16.59
    ],
    [
        -136.7659,
        59.8663,
        5.1
    ],
    [
        -136.7941,
        59.8509,
        5.2
    ],
    [
        -136.89,
        59.8885,
        15.4
    ],
    [
        -136.8821,
        59.8989,
        17.9
    ],
    [
        -136.8902,
        59.9059,
        15.4
    ],
    [
        -136.8916,
        59.9103,
        15.9
    ],
    [
        -136.9,
        59.889,
        12.6
    ],
    [
        -124.863333,
        45.526833,
        36.1
    ],
    [
        -136.7498,
        59.9037,
        10
    ],
    [
        -96.6989,
        35.8586,
        2.57
    ],
    [
        178.6017,
        51.905,
        128.2
    ],
    [
        -121.754167,
        46.857333,
        1.43
    ],
    [
        -14.0114,
        -17.7554,
        10
    ],
    [
        -151.1524,
        61.3778,
        62.1
    ],
    [
        -94.1822,
        15.4761,
        67.03
    ],
    [
        -121.616833,
        36.971,
        4.79
    ],
    [
        -156.5667,
        57.9908,
        15.9
    ],
    [
        -153.0011,
        60.0807,
        110.1
    ],
    [
        -147.7769,
        62.4045,
        59.6
    ],
    [
        -118.834167,
        37.493,
        0.66
    ],
    [
        -122.491167,
        46.067333,
        18.24
    ],
    [
        -116.431333,
        33.040167,
        10.42
    ],
    [
        -120.164333,
        35.816,
        11.62
    ],
    [
        139.4711,
        35.839,
        65.43
    ],
    [
        -124.606167,
        40.391,
        23.43
    ],
    [
        -156.1504,
        57.6803,
        1.9
    ],
    [
        -94.4078,
        15.1552,
        27.65
    ],
    [
        -150.8073,
        63.0653,
        123.5
    ],
    [
        -122.793999,
        38.805332,
        0.54
    ],
    [
        -116.179,
        33.192167,
        7.19
    ],
    [
        159.8208,
        52.9335,
        55.59
    ],
    [
        -118.832833,
        37.5715,
        2.76
    ],
    [
        -148.7782,
        63.4422,
        11.7
    ],
    [
        -151.0825,
        63.2217,
        0.4
    ],
    [
        -117.509667,
        36.069667,
        3.41
    ],
    [
        -115.217,
        32.373167,
        19.88
    ],
    [
        -66.6768,
        -23.7075,
        201.03
    ],
    [
        -119.9,
        39.4039,
        6.9
    ],
    [
        -118.504167,
        37.923833,
        7.96
    ],
    [
        -94.552,
        15.3031,
        17.06
    ],
    [
        -153.0556,
        59.9293,
        124
    ],
    [
        -111.020833,
        44.802,
        10.59
    ],
    [
        -116.973333,
        33.989,
        6.67
    ],
    [
        -156.7021,
        67.8201,
        4.3
    ],
    [
        -118.2045,
        34.993167,
        -0.8
    ],
    [
        -94.7095,
        15.6575,
        33.63
    ],
    [
        -153.2692,
        60.1941,
        137.5
    ],
    [
        -148.2984,
        62.5136,
        52.7
    ],
    [
        -116.791667,
        33.507667,
        4.61
    ],
    [
        -116.975667,
        33.992333,
        5.71
    ],
    [
        -122.8095,
        38.823167,
        1.14
    ],
    [
        -155.8156,
        57.4983,
        73.9
    ],
    [
        -95.5572,
        15.6925,
        24.12
    ],
    [
        142.7408,
        24.878,
        57.27
    ],
    [
        -151.0305,
        61.8843,
        68.3
    ],
    [
        -117.878167,
        35.360667,
        7.9
    ],
    [
        161.507,
        -10.1846,
        49.82
    ],
    [
        -111.4285,
        42.5847,
        7.15
    ],
    [
        -74.1918,
        -37.2167,
        6.3
    ],
    [
        -95.0682,
        16.1115,
        35.63
    ],
    [
        -122.337833,
        37.820167,
        -0.2
    ],
    [
        -157.7764,
        56.9377,
        2.3
    ],
    [
        -122.711,
        38.750833,
        1.46
    ],
    [
        -122.717167,
        38.752667,
        1.24
    ],
    [
        -119.0075,
        37.570667,
        2.07
    ],
    [
        -155.611,
        19.430167,
        2.332
    ],
    [
        -119.801833,
        34.514833,
        12.76
    ],
    [
        -151.7481,
        62.8102,
        9.5
    ],
    [
        -150.7871,
        61.8971,
        60.5
    ],
    [
        -112.489667,
        44.705667,
        13.34
    ],
    [
        -121.047,
        36.467,
        7.96
    ],
    [
        -117.9133,
        37.0358,
        0
    ],
    [
        -149.431,
        64.4709,
        16.8
    ],
    [
        -111.4328,
        42.5757,
        6.87
    ],
    [
        -118.895333,
        37.565,
        -1.35
    ],
    [
        -111.4287,
        42.5771,
        8.55
    ],
    [
        -139.8572,
        64.7619,
        12.6
    ],
    [
        -118.946833,
        37.638167,
        2.02
    ],
    [
        -153.3496,
        59.7545,
        127.1
    ],
    [
        -116.1775,
        33.193,
        4.38
    ],
    [
        -139.9009,
        64.7582,
        0.8
    ],
    [
        -111.424,
        42.5936,
        4.8
    ],
    [
        -152.9804,
        59.5744,
        87.3
    ],
    [
        -94.9072,
        16.226,
        27.8
    ],
    [
        -151.2424,
        62.5449,
        91.4
    ],
    [
        -122.0445,
        46.876833,
        6.67
    ],
    [
        -148.1823,
        62.4985,
        43.1
    ],
    [
        -118.931167,
        37.587167,
        0.64
    ],
    [
        -121.162,
        34.381,
        19.82
    ],
    [
        -153.1816,
        59.9775,
        117.4
    ],
    [
        -122.7105,
        38.752667,
        1.06
    ],
    [
        -67.1556,
        17.5196,
        8
    ],
    [
        -119.5538,
        38.7481,
        7.8
    ],
    [
        -115.609667,
        33.184833,
        2.89
    ],
    [
        -97.570167,
        37.344833,
        5.17
    ],
    [
        154.9693,
        -6.4027,
        84.07
    ],
    [
        -118.840833,
        37.499667,
        1.31
    ],
    [
        -122.827667,
        38.837502,
        1.89
    ],
    [
        -121.124,
        36.5485,
        6.91
    ],
    [
        -120.96,
        36.383333,
        5.84
    ],
    [
        -178.2643,
        51.2858,
        23.3
    ],
    [
        -153.0307,
        59.9768,
        107.6
    ],
    [
        -147.5632,
        63.5373,
        8.9
    ],
    [
        -87.3487,
        38.1953,
        7.98
    ],
    [
        -151.0358,
        63.0385,
        119
    ],
    [
        -179.2793,
        -17.0456,
        538.12
    ],
    [
        -94.0304,
        14.9269,
        46.15
    ],
    [
        -120.120167,
        35.9645,
        23.92
    ],
    [
        128.8254,
        -7.4355,
        134.05
    ],
    [
        -146.4578,
        61.5042,
        28
    ],
    [
        -96.8006,
        35.9908,
        5.836
    ],
    [
        -118.829167,
        37.4595,
        2.47
    ],
    [
        -94.162,
        15.1165,
        61.6
    ],
    [
        -115.1525,
        48.101667,
        7.53
    ],
    [
        -122.826,
        38.836333,
        2.51
    ],
    [
        -94.2297,
        14.9414,
        30.52
    ],
    [
        -121.998833,
        47.691333,
        5.06
    ],
    [
        83.5155,
        42.2053,
        16
    ],
    [
        -120.136,
        35.962667,
        25.16
    ],
    [
        122.1193,
        -10.8831,
        38.93
    ],
    [
        -118.918167,
        38.061667,
        8.48
    ],
    [
        -115.616167,
        33.169667,
        8.65
    ],
    [
        -136.7489,
        59.845,
        6
    ],
    [
        -141.7145,
        60.2604,
        9.4
    ],
    [
        -147.3921,
        63.5231,
        5.2
    ],
    [
        -151.4792,
        63.0863,
        5.5
    ],
    [
        -148.5868,
        63.8926,
        99.6
    ],
    [
        27.685,
        37.0689,
        6.9
    ],
    [
        -115.9555,
        33.145833,
        9.49
    ],
    [
        -118.053167,
        36.123167,
        1.12
    ],
    [
        -116.920833,
        33.975167,
        6.39
    ],
    [
        -139.9221,
        64.7554,
        18.3
    ],
    [
        -64.0526,
        18.4531,
        34
    ],
    [
        -120.0331,
        40.436,
        11.8
    ],
    [
        -150.9184,
        62.2903,
        70.9
    ],
    [
        -116.922833,
        33.978,
        5.2
    ],
    [
        178.5336,
        51.3744,
        18.2
    ],
    [
        -118.8995,
        37.518833,
        0.05
    ],
    [
        -157.487667,
        21.642167,
        10.046
    ],
    [
        -153.591,
        58.4419,
        63.5
    ],
    [
        -152.4461,
        59.504,
        85.4
    ],
    [
        -116.918833,
        33.976667,
        6.71
    ],
    [
        -146.8364,
        61.486,
        9.3
    ],
    [
        -90.4791,
        13.6017,
        52.75
    ],
    [
        -118.8325,
        37.540333,
        4.97
    ],
    [
        -122.181833,
        37.775667,
        14.71
    ],
    [
        -148.1125,
        62.0856,
        43
    ],
    [
        -122.8025,
        38.706667,
        3.14
    ],
    [
        -157.4333,
        66.2529,
        10.1
    ],
    [
        -154.4004,
        57.5066,
        48.2
    ],
    [
        -60.854,
        17.4925,
        32.6
    ],
    [
        -94.143,
        15.2335,
        36.21
    ],
    [
        -116.924667,
        33.976667,
        6.44
    ],
    [
        -111.4153,
        42.5716,
        8.12
    ],
    [
        -123.266667,
        39.366833,
        -0.52
    ],
    [
        -115.719,
        36.6783,
        6.3
    ],
    [
        -116.926333,
        33.9745,
        5.92
    ],
    [
        -77.9491,
        -1.4664,
        157.52
    ],
    [
        -122.777833,
        39.807833,
        8.29
    ],
    [
        -89.7094,
        13.2544,
        54.8
    ],
    [
        -148.8446,
        61.8774,
        13.6
    ],
    [
        -116.5347,
        38.3939,
        14.7
    ],
    [
        -119.682,
        35.141167,
        11.28
    ],
    [
        -115.516833,
        32.862,
        5.65
    ],
    [
        -146.8143,
        61.3719,
        31.3
    ],
    [
        -118.8735,
        37.542,
        7.25
    ],
    [
        -90.3315,
        35.6915,
        12.51
    ],
    [
        -117.105667,
        34.034,
        6.86
    ],
    [
        -153.2233,
        59.405,
        90.5
    ],
    [
        -165.7519,
        54.2192,
        117.7
    ],
    [
        -116.179,
        33.193833,
        7.41
    ],
    [
        -116.793333,
        33.493667,
        4.8
    ],
    [
        -100.0309,
        17.2785,
        69.28
    ],
    [
        -118.904167,
        37.519667,
        -0.32
    ],
    [
        -150.6449,
        63.5861,
        5.7
    ],
    [
        -152.4346,
        59.0192,
        66.8
    ],
    [
        -122.764168,
        38.786999,
        0.87
    ],
    [
        -119.395167,
        34.877167,
        11.59
    ],
    [
        -122.772833,
        38.807167,
        -0.11
    ],
    [
        -118.819167,
        37.545,
        3.75
    ],
    [
        -170.5872,
        52.0486,
        37
    ],
    [
        -150.6913,
        63.5749,
        10.4
    ],
    [
        -150.6368,
        63.6017,
        8.9
    ],
    [
        -120.806167,
        36.224833,
        7.5
    ],
    [
        -154.276,
        57.4142,
        39.6
    ],
    [
        -153.099,
        59.7523,
        100.4
    ],
    [
        -142.3705,
        66.2593,
        7.1
    ],
    [
        -150.8357,
        63.5631,
        6.8
    ],
    [
        69.6259,
        -23.9788,
        10
    ],
    [
        -74.2357,
        -37.2039,
        9.72
    ],
    [
        -111.4075,
        42.596,
        3.5
    ],
    [
        -147.7991,
        61.6212,
        38.4
    ],
    [
        -139.9628,
        64.7584,
        4.1
    ],
    [
        -148.3459,
        62.5868,
        57.7
    ],
    [
        -30.9669,
        2.8319,
        10
    ],
    [
        -139.8797,
        64.7729,
        8.4
    ],
    [
        -156.9613,
        56.0051,
        45.4
    ],
    [
        -139.9245,
        64.7851,
        9.3
    ],
    [
        -148.3927,
        62.7723,
        62.1
    ],
    [
        -155.6105,
        19.420833,
        2.212
    ],
    [
        142.9781,
        67.621,
        14.89
    ],
    [
        -175.046,
        51.6929,
        12.7
    ],
    [
        151.5667,
        -4.6769,
        135.04
    ],
    [
        -153.2666,
        60.2335,
        149.7
    ],
    [
        91.9514,
        12.8959,
        27.42
    ],
    [
        -153.1028,
        59.5574,
        89.2
    ],
    [
        -139.8103,
        64.7863,
        4
    ],
    [
        -153.1862,
        59.9258,
        120
    ],
    [
        -120.848,
        40.281,
        4.76
    ],
    [
        -164.4161,
        53.6697,
        25.19
    ],
    [
        -122.7085,
        38.747,
        1.29
    ],
    [
        -97.9688,
        37.279,
        4.85
    ],
    [
        -155.0818,
        58.2131,
        3.4
    ],
    [
        178.6723,
        51.5577,
        10
    ],
    [
        147.5618,
        -5.9077,
        108.71
    ],
    [
        -138.7109,
        60.4891,
        8.6
    ],
    [
        137.0445,
        34.5022,
        328.82
    ],
    [
        -111.4379,
        42.6057,
        6.23
    ],
    [
        -139.8926,
        64.7765,
        8.2
    ],
    [
        -151.1722,
        61.1116,
        68.8
    ],
    [
        -178.4835,
        51.7117,
        13.6
    ],
    [
        -121.217167,
        35.152667,
        7.27
    ],
    [
        -119.5746,
        38.7781,
        10.3
    ],
    [
        142.6832,
        12.6788,
        125.94
    ],
    [
        -118.3614,
        38.5819,
        3.5
    ],
    [
        -119.356667,
        34.4865,
        9.29
    ],
    [
        -140.8768,
        60.2433,
        18.6
    ],
    [
        -121.075333,
        36.496667,
        4.87
    ],
    [
        -111.4277,
        42.5599,
        9.59
    ],
    [
        -155.9781,
        57.0654,
        81.6
    ],
    [
        -122.801833,
        38.823167,
        2.59
    ],
    [
        -116.772667,
        33.326167,
        12.6
    ],
    [
        -136.6381,
        59.7681,
        10.4
    ],
    [
        -147.3557,
        64.9805,
        0
    ],
    [
        -152.8331,
        59.8732,
        91.8
    ],
    [
        -147.1896,
        63.4641,
        20.7
    ],
    [
        -122.407667,
        37.504333,
        1.03
    ],
    [
        -64.6295,
        19.1915,
        40
    ],
    [
        -150.6711,
        60.3885,
        41.7
    ],
    [
        -135.0254,
        58.4988,
        9.7
    ],
    [
        -147.5162,
        63.4918,
        1.6
    ],
    [
        -118.488333,
        37.450833,
        4.91
    ],
    [
        -116.796,
        33.503167,
        6.45
    ],
    [
        -28.3292,
        -55.4644,
        9
    ],
    [
        -122.725334,
        38.757,
        1.52
    ],
    [
        169.72,
        54.0122,
        10
    ],
    [
        -124.858667,
        48.515,
        37.88
    ],
    [
        -147.3749,
        60.4419,
        18.3
    ],
    [
        -111.420667,
        42.537167,
        7.15
    ],
    [
        -118.49,
        37.447667,
        5.54
    ],
    [
        -118.799667,
        37.462333,
        0.05
    ],
    [
        -118.445,
        37.379333,
        14.57
    ],
    [
        -152.4458,
        61.0059,
        4.9
    ],
    [
        -93.9892,
        15.1825,
        46.32
    ],
    [
        -138.7292,
        60.4845,
        7.5
    ],
    [
        -118.178169,
        35.602833,
        5.95
    ],
    [
        28.8132,
        -2.7314,
        12.98
    ],
    [
        -116.102833,
        33.170333,
        9.6
    ],
    [
        -152.3298,
        60.0961,
        93.1
    ],
    [
        -118.641667,
        37.477167,
        6.06
    ],
    [
        160.527,
        53.8618,
        60.06
    ],
    [
        -117.808,
        36.012167,
        1.77
    ],
    [
        -150.3827,
        63.102,
        108.2
    ],
    [
        -122.048333,
        47.3965,
        13.93
    ],
    [
        -122.807,
        38.822667,
        2.57
    ],
    [
        -122.0485,
        47.395833,
        13.68
    ],
    [
        -164.4354,
        53.7237,
        49.7
    ],
    [
        -66.7353,
        18.0013,
        7
    ],
    [
        -150.6843,
        60.3013,
        49.8
    ],
    [
        140.4948,
        -51.951,
        10
    ],
    [
        -162.4074,
        55.3684,
        134.2
    ],
    [
        -111.438833,
        42.587833,
        3.5
    ],
    [
        -117.491167,
        33.8525,
        -0.5
    ],
    [
        -97.96,
        37.276667,
        2.46
    ],
    [
        -151.4615,
        63.0908,
        2.8
    ],
    [
        -154.862333,
        19.450333,
        1.074
    ],
    [
        -163.5994,
        64.2424,
        10.6
    ],
    [
        -150.5105,
        60.533,
        54.5
    ],
    [
        -139.8399,
        59.9528,
        0
    ],
    [
        -112.528,
        46.898,
        12.92
    ],
    [
        118.2763,
        -7.0257,
        10
    ],
    [
        -115.6045,
        33.127833,
        7.81
    ],
    [
        -116.736833,
        33.222833,
        12.21
    ],
    [
        -116.742833,
        33.223833,
        11.67
    ],
    [
        -116.750167,
        33.221833,
        11.54
    ],
    [
        -119.536,
        39.4025,
        7.1
    ],
    [
        -138.734,
        60.477,
        7.6
    ],
    [
        -138.6866,
        60.4978,
        7.6
    ],
    [
        -97.9665,
        37.2798,
        4.9
    ],
    [
        177.1015,
        51.6899,
        62.37
    ],
    [
        -121.478833,
        36.923833,
        5.96
    ],
    [
        -164.6735,
        54.2139,
        72.3
    ],
    [
        -150.8074,
        61.6789,
        63
    ],
    [
        -116.172833,
        33.1885,
        5.98
    ],
    [
        99.4856,
        1.5915,
        160.08
    ],
    [
        178.6795,
        51.3691,
        28
    ],
    [
        -122.588,
        45.973333,
        13.92
    ],
    [
        -112.527,
        46.868167,
        11.01
    ],
    [
        -160.3237,
        54.8499,
        18.7
    ],
    [
        -122.799667,
        38.833832,
        2.01
    ],
    [
        -112.525,
        46.8611,
        10.18
    ],
    [
        -152.5946,
        57.6534,
        29.9
    ],
    [
        -66.7808,
        18.0135,
        13
    ],
    [
        -160.7994,
        54.9781,
        25
    ],
    [
        -161.753,
        54.3697,
        28.05
    ],
    [
        -122.723167,
        38.750667,
        1.87
    ],
    [
        -156.6709,
        67.7999,
        2
    ],
    [
        -150.9722,
        63.0999,
        131.7
    ],
    [
        -138.7297,
        60.4779,
        8.8
    ],
    [
        -111.4441,
        42.568,
        7.22
    ],
    [
        -118.804667,
        37.458833,
        0.13
    ],
    [
        -119.303167,
        35.032833,
        11.48
    ],
    [
        -118.7828,
        38.6088,
        8.3
    ],
    [
        -139.54,
        59.9657,
        0
    ],
    [
        -122.044333,
        46.870333,
        5.23
    ],
    [
        -122.040667,
        46.874167,
        5.89
    ],
    [
        -60.5703,
        14.9752,
        55.34
    ],
    [
        -155.7454,
        57.1664,
        7.6
    ],
    [
        -97.7775,
        37.328833,
        5.95
    ],
    [
        -150.0141,
        62.1581,
        7.8
    ],
    [
        -111.4507,
        42.5991,
        6.39
    ],
    [
        -147.5654,
        60.6122,
        4.1
    ],
    [
        -65.039,
        18.7165,
        49
    ],
    [
        -120.106167,
        36.291833,
        27.69
    ],
    [
        -153.0438,
        60.2245,
        124.3
    ],
    [
        -164.378,
        53.6654,
        25.8
    ],
    [
        -67.9741,
        18.1111,
        53
    ],
    [
        -152.1086,
        60.3742,
        87.3
    ],
    [
        -111.4369,
        42.5723,
        4.71
    ],
    [
        -116.601167,
        35.792,
        0.88
    ],
    [
        -155.473328,
        19.201,
        34.94
    ],
    [
        -66.746,
        17.9996,
        11
    ],
    [
        -111.4416,
        42.5753,
        5.34
    ],
    [
        -154.2829,
        57.3488,
        39.2
    ],
    [
        -117.4437,
        37.5652,
        30.3
    ],
    [
        -121.815833,
        37.416,
        -0.2
    ],
    [
        -120.027667,
        35.933167,
        12.08
    ],
    [
        -141.3735,
        59.7943,
        6.5
    ],
    [
        -139.8448,
        60.0925,
        0
    ],
    [
        -148.0593,
        61.7131,
        3.8
    ],
    [
        179.5767,
        -21.9172,
        640.49
    ],
    [
        -139.7132,
        60.0014,
        0
    ],
    [
        -153.4989,
        60.1125,
        151.7
    ],
    [
        -153.2519,
        60.1326,
        152.7
    ],
    [
        -121.814333,
        37.412167,
        -0.14
    ],
    [
        -150.0298,
        65.3407,
        11.3
    ],
    [
        -116.7685,
        33.327833,
        13.39
    ],
    [
        -146.3726,
        61.4994,
        31.9
    ],
    [
        -153.2513,
        60.1603,
        135.4
    ],
    [
        -122.810667,
        38.83,
        2.09
    ],
    [
        -146.9297,
        60.9306,
        19
    ],
    [
        -116.190167,
        33.332667,
        10.93
    ],
    [
        -152.8667,
        60.0997,
        103.9
    ],
    [
        -82.4676,
        -42.4862,
        10
    ],
    [
        -154.4902,
        57.7349,
        15
    ],
    [
        -148.3948,
        61.1147,
        0
    ],
    [
        -151.9039,
        61.8273,
        105.7
    ],
    [
        -97.7765,
        37.333333,
        5.53
    ],
    [
        -121.804667,
        37.415,
        2.65
    ],
    [
        -138.7346,
        60.4761,
        9.9
    ],
    [
        -71.42,
        45.73,
        18
    ],
    [
        -122.802333,
        38.8245,
        1.3
    ],
    [
        -143.0369,
        60.3155,
        0.6
    ],
    [
        -76.4066,
        -11.9189,
        10
    ],
    [
        -112.529333,
        46.896667,
        13.22
    ],
    [
        -153.1687,
        59.8152,
        101.9
    ],
    [
        -139.4451,
        60.022,
        0
    ],
    [
        -122.730835,
        38.793999,
        1.32
    ],
    [
        -108.831833,
        40.139667,
        5.96
    ],
    [
        -118.9033,
        38.4011,
        9.6
    ],
    [
        -122.039,
        46.879667,
        6.38
    ],
    [
        -142.9607,
        69.4522,
        5.6
    ],
    [
        -150.2585,
        60.8639,
        35.8
    ],
    [
        -151.9441,
        60.8403,
        88.2
    ],
    [
        -166.2335,
        53.7145,
        69.2
    ],
    [
        -93.5573,
        15.2748,
        63.05
    ],
    [
        -118.883667,
        37.553,
        2.17
    ],
    [
        -155.466833,
        19.197667,
        35.437
    ],
    [
        -153.4032,
        62.4253,
        2.2
    ],
    [
        -117.3195,
        34.068167,
        18.36
    ],
    [
        -112.5689,
        -26.6333,
        10
    ],
    [
        94.866,
        18.8304,
        42.15
    ],
    [
        -121.813833,
        37.412167,
        -0.2
    ],
    [
        -121.805667,
        37.414,
        -0.21
    ],
    [
        -119.260833,
        45.950833,
        -0.29
    ],
    [
        -97.5868,
        37.2136,
        5
    ],
    [
        -94.4079,
        15.6978,
        35
    ],
    [
        -149.7,
        64.3159,
        3.6
    ],
    [
        -178.8507,
        -18.1469,
        603.85
    ],
    [
        -116.729667,
        33.651667,
        14.16
    ],
    [
        -121.1895,
        36.589667,
        2.71
    ],
    [
        141.716,
        24.4725,
        93.7
    ],
    [
        -67.3134,
        -31.912,
        136.67
    ],
    [
        -139.4097,
        60.0357,
        0
    ],
    [
        -121.677167,
        47.835167,
        -0.74
    ],
    [
        -118.828167,
        37.448333,
        11.34
    ],
    [
        -163.6213,
        54.0704,
        37.5
    ],
    [
        -93.671,
        15.2225,
        53.79
    ],
    [
        -122.4815,
        38.607167,
        11.47
    ],
    [
        -121.8125,
        37.417833,
        0.06
    ],
    [
        -150.5301,
        63.0381,
        100.7
    ],
    [
        -172.7418,
        -15.3348,
        10
    ],
    [
        -122.842333,
        38.821,
        2.01
    ],
    [
        -139.6605,
        59.9169,
        0
    ],
    [
        -147.3686,
        64.993,
        0
    ],
    [
        -97.887667,
        37.203667,
        6.13
    ],
    [
        -139.3648,
        60.031,
        0
    ],
    [
        -147.7478,
        61.0185,
        13.6
    ],
    [
        -93.2168,
        15.3544,
        35
    ],
    [
        -118.454833,
        37.434333,
        10.05
    ],
    [
        -158.0714,
        56.1589,
        10.1
    ],
    [
        -140.0766,
        61.1472,
        0.6
    ],
    [
        170.1022,
        -13.8345,
        10
    ],
    [
        -116.866,
        34.011167,
        16.92
    ],
    [
        -118.0155,
        38.8648,
        4.3
    ],
    [
        129.1685,
        -7.2026,
        147.79
    ],
    [
        -155.012665,
        19.708,
        2.82
    ],
    [
        -112.738,
        38.746667,
        7.72
    ],
    [
        -139.4453,
        59.9712,
        0
    ],
    [
        -164.6154,
        53.6195,
        25.6
    ],
    [
        122.1651,
        -12.9278,
        10
    ],
    [
        -67.8618,
        18.9605,
        5
    ],
    [
        -98.1847,
        37.3761,
        9.38
    ],
    [
        -121.993,
        37.849,
        7.27
    ],
    [
        -120.516333,
        49.4855,
        -1.5
    ],
    [
        -148.9235,
        64.0866,
        5.1
    ],
    [
        -67.5351,
        18.7848,
        5
    ],
    [
        -122.038167,
        46.8785,
        6.64
    ],
    [
        -117.484667,
        33.852667,
        -0.55
    ],
    [
        -116.377,
        34.075,
        2.89
    ],
    [
        -116.9245,
        33.981667,
        6.59
    ],
    [
        -122.041833,
        46.875667,
        6.94
    ],
    [
        -117.481,
        33.8295,
        -0.53
    ],
    [
        -103.2947,
        31.1684,
        5
    ],
    [
        -139.541,
        59.9804,
        0
    ],
    [
        -114.5865,
        48.5185,
        11.24
    ],
    [
        -108.829333,
        40.126,
        5.93
    ],
    [
        -140.9798,
        59.9221,
        1.1
    ],
    [
        -118.838833,
        37.542333,
        4.28
    ],
    [
        -153.0345,
        59.5576,
        91.9
    ],
    [
        -118.825833,
        37.479167,
        0.95
    ],
    [
        -122.201667,
        47.657667,
        24.36
    ],
    [
        -121.815167,
        37.412167,
        -0.2
    ],
    [
        -162.9114,
        52.3919,
        7.2
    ],
    [
        -78.886167,
        43.172167,
        4.49
    ],
    [
        -97.5193,
        36.2853,
        5.18
    ],
    [
        -151.1135,
        61.6397,
        76.8
    ],
    [
        -166.7549,
        53.141,
        25.5
    ],
    [
        -152.9009,
        60.0386,
        108.3
    ],
    [
        -139.4567,
        60.0012,
        0
    ],
    [
        -122.106667,
        37.328833,
        -0.31
    ],
    [
        -141.2439,
        60.5671,
        11.9
    ],
    [
        -141.2344,
        60.5666,
        13.6
    ],
    [
        -139.6599,
        59.9119,
        0
    ],
    [
        -118.316167,
        35.0525,
        -0.97
    ],
    [
        -121.3855,
        45.629833,
        -1.63
    ],
    [
        -118.823167,
        37.5355,
        0.22
    ],
    [
        -122.808166,
        38.800167,
        2.65
    ],
    [
        -148.0556,
        61.0558,
        10.6
    ],
    [
        -150.8642,
        60.9198,
        10
    ],
    [
        145.732,
        18.6699,
        173.3
    ],
    [
        -121.8135,
        37.411667,
        -0.21
    ],
    [
        -111.434,
        42.5971,
        8.27
    ],
    [
        -116.795333,
        33.494833,
        5.03
    ],
    [
        -111.4403,
        42.586,
        8.7
    ],
    [
        -122.775333,
        47.590667,
        26.27
    ],
    [
        -94.3313,
        15.7247,
        66.16
    ],
    [
        -151.8183,
        60.7702,
        77.9
    ],
    [
        -97.0236,
        32.7967,
        6.19
    ],
    [
        -165.9733,
        53.4109,
        37.9
    ],
    [
        -67.1335,
        18.0533,
        14
    ],
    [
        -154.4291,
        57.7254,
        15
    ],
    [
        -168.4598,
        52.5561,
        41.6
    ],
    [
        147.122,
        -6.0228,
        63.06
    ],
    [
        -111.640167,
        41.675,
        10.23
    ],
    [
        -117.7005,
        36.071833,
        0.62
    ],
    [
        -154.3367,
        58.804,
        116.8
    ],
    [
        -116.6365,
        33.9595,
        15.51
    ],
    [
        -152.5012,
        61.3116,
        5.2
    ],
    [
        -164.5211,
        53.4862,
        2.6
    ],
    [
        -118.8115,
        37.473,
        1.65
    ],
    [
        -153.3242,
        59.9299,
        129.9
    ],
    [
        -94.8439,
        15.4623,
        51.01
    ],
    [
        -97.888167,
        37.203167,
        5.99
    ],
    [
        -148.6928,
        63.8584,
        11.4
    ],
    [
        -116.448167,
        33.465,
        11.86
    ],
    [
        -112.534833,
        46.870333,
        11.87
    ],
    [
        -139.464,
        59.9879,
        0
    ],
    [
        -111.4117,
        42.6047,
        6.9
    ],
    [
        -68.3985,
        17.9023,
        89
    ],
    [
        -164.7867,
        53.5505,
        48.9
    ],
    [
        -136.8149,
        59.8173,
        16
    ],
    [
        -118.833667,
        37.603833,
        3.53
    ],
    [
        -118.9328,
        38.4065,
        6.7
    ],
    [
        -139.5142,
        60.0065,
        0
    ],
    [
        -140.0247,
        61.1655,
        6
    ],
    [
        -140.0737,
        61.1407,
        3.8
    ],
    [
        -111.4339,
        42.5276,
        8.74
    ],
    [
        -118.8295,
        37.486167,
        1.89
    ],
    [
        -155.1037,
        58.6121,
        140.4
    ],
    [
        -118.811,
        37.47,
        1.05
    ],
    [
        -117.03,
        34.269167,
        1.91
    ],
    [
        -155.801498,
        20.135166,
        20.69
    ],
    [
        -165.6941,
        53.4145,
        21.6
    ],
    [
        -112.506167,
        37.5615,
        15.73
    ],
    [
        -141.5082,
        60.1407,
        0
    ],
    [
        -150.3654,
        61.4964,
        18.3
    ],
    [
        -178.3862,
        51.6162,
        20.9
    ],
    [
        -159.7931,
        54.8482,
        3.3
    ],
    [
        -150.3442,
        61.3489,
        49
    ],
    [
        -146.5528,
        61.7241,
        28.7
    ],
    [
        -148.3758,
        61.1701,
        24.7
    ],
    [
        -121.131,
        36.571833,
        9.94
    ],
    [
        -168.0082,
        52.3291,
        6.7
    ],
    [
        -139.5379,
        59.9886,
        0
    ],
    [
        -144.3238,
        66.4782,
        11.1
    ],
    [
        -164.851,
        54.0129,
        69.5
    ],
    [
        -155.223667,
        18.879,
        14.409
    ],
    [
        -151.4212,
        60.1553,
        64.8
    ],
    [
        -150.7269,
        61.5265,
        60.3
    ],
    [
        -122.720001,
        38.778168,
        1.63
    ],
    [
        -152.0471,
        60.1915,
        70.1
    ],
    [
        -162.8518,
        53.4455,
        2.8
    ],
    [
        -158.1582,
        56.2796,
        14.2
    ],
    [
        -108.827333,
        40.120667,
        -3.25
    ],
    [
        -116.181833,
        31.831667,
        18.32
    ],
    [
        -122.717499,
        38.774666,
        2.13
    ],
    [
        -122.714333,
        38.776667,
        1.68
    ],
    [
        -76.4481,
        -11.977,
        10
    ],
    [
        -97.570333,
        37.345667,
        5.05
    ],
    [
        -152.4585,
        60.3656,
        97.6
    ],
    [
        -122.799833,
        38.712667,
        4.08
    ],
    [
        -116.221833,
        32.924167,
        12.12
    ],
    [
        -144.7598,
        65.436,
        12
    ],
    [
        -72.6754,
        -34.2973,
        1.87
    ],
    [
        -139.5103,
        60.0002,
        0
    ],
    [
        -117.872333,
        36.502833,
        6.38
    ],
    [
        -150.8634,
        59.8384,
        41
    ],
    [
        -151.4454,
        63.0596,
        8.2
    ],
    [
        -115.625167,
        32.844,
        11.98
    ],
    [
        -141.1765,
        60.359,
        0
    ],
    [
        -94.6903,
        15.5507,
        43.43
    ],
    [
        -116.733,
        33.668167,
        13.69
    ],
    [
        -155.382,
        19.236,
        32.221
    ],
    [
        -116.731167,
        33.674333,
        14.82
    ],
    [
        -94.2582,
        14.9559,
        25.35
    ],
    [
        -121.1615,
        36.5675,
        3.55
    ],
    [
        -94.3229,
        15.1323,
        35.74
    ],
    [
        -94.7112,
        15.4856,
        25.87
    ],
    [
        -98.3656,
        36.7402,
        7.992
    ],
    [
        -155.425667,
        19.294167,
        8.845
    ],
    [
        -178.4046,
        51.5999,
        12.8
    ],
    [
        -93.0841,
        14.4266,
        49.2
    ],
    [
        148.0489,
        -1.356,
        10
    ],
    [
        -121.669167,
        40.386833,
        6.29
    ],
    [
        -93.0709,
        14.4637,
        52.71
    ],
    [
        -112.522,
        46.8975,
        13.3
    ],
    [
        -151.0097,
        62.5721,
        78.1
    ],
    [
        -116.405833,
        33.049333,
        3.39
    ],
    [
        -118.834,
        37.54,
        4.68
    ],
    [
        -121.942833,
        46.866667,
        10.19
    ],
    [
        -151.959,
        59.8075,
        60.6
    ],
    [
        -117.992833,
        33.957167,
        16.75
    ],
    [
        -116.864667,
        34.336333,
        2.71
    ],
    [
        -118.834167,
        37.540667,
        4.76
    ],
    [
        -149.1668,
        62.6309,
        61.1
    ],
    [
        -97.9406,
        37.3096,
        5
    ],
    [
        -151.2972,
        61.0176,
        70
    ],
    [
        -68.791,
        18.2223,
        133
    ],
    [
        -97.5112,
        36.2854,
        3.99
    ],
    [
        -117.6335,
        37.005167,
        1.55
    ],
    [
        -115.606667,
        32.828,
        12.41
    ],
    [
        -117.427667,
        34.225833,
        13.02
    ],
    [
        -111.4442,
        42.5241,
        6.99
    ],
    [
        -111.4212,
        42.5232,
        8.42
    ],
    [
        -111.4618,
        42.5096,
        5
    ],
    [
        -111.426833,
        42.522333,
        7.86
    ],
    [
        -152.8887,
        59.6609,
        90.7
    ],
    [
        -141.394,
        60.1683,
        0
    ],
    [
        -111.4263,
        42.5303,
        6.85
    ],
    [
        -116.8899,
        37.3603,
        8.3
    ],
    [
        -151.8776,
        62.7371,
        2.4
    ],
    [
        -122.737663,
        38.785168,
        2.12
    ],
    [
        -122.746833,
        38.787833,
        0.11
    ],
    [
        -153.2915,
        59.077,
        76.7
    ],
    [
        -121.139667,
        37.139,
        11.31
    ],
    [
        -141.3285,
        60.1933,
        0
    ],
    [
        22.899,
        42.6704,
        10
    ],
    [
        -118.543667,
        34.513833,
        6.53
    ],
    [
        -111.4312,
        42.6014,
        6.92
    ],
    [
        -148.644,
        62.6994,
        58.6
    ],
    [
        -160.5002,
        54.7664,
        27.4
    ],
    [
        -136.6619,
        59.8124,
        15.7
    ],
    [
        -67.141,
        18.0321,
        11
    ],
    [
        -161.3635,
        54.4582,
        4.8
    ],
    [
        -145.2989,
        65.668,
        14
    ],
    [
        139.6152,
        35.7719,
        48.83
    ],
    [
        -116.3345,
        33.3545,
        11.05
    ],
    [
        -174.3466,
        52.1109,
        79.8
    ],
    [
        -178.4123,
        51.617,
        13.3
    ],
    [
        -116.2715,
        33.976667,
        5.05
    ],
    [
        -155.394165,
        19.238333,
        32.54
    ],
    [
        -178.4,
        51.6505,
        10.1
    ],
    [
        -155.3835,
        19.243,
        32.131
    ],
    [
        -121.5475,
        37.143167,
        3.07
    ],
    [
        -122.458833,
        45.814167,
        -0.95
    ],
    [
        -151.3313,
        60.824,
        55.5
    ],
    [
        -115.610333,
        32.834,
        14.54
    ],
    [
        -115.613333,
        32.828,
        12.93
    ],
    [
        -150.1366,
        63.4085,
        115.9
    ],
    [
        -115.161833,
        48.091333,
        6.16
    ],
    [
        -150.9358,
        61.9565,
        65
    ],
    [
        -69.4183,
        -18.058,
        145.27
    ],
    [
        -178.3482,
        51.3154,
        44.3
    ],
    [
        -147.3403,
        64.9963,
        0
    ],
    [
        -112.5646,
        46.8793,
        10.55
    ],
    [
        -121.347833,
        44.090833,
        -1.55
    ],
    [
        -115.6105,
        32.832833,
        13.39
    ],
    [
        -97.966333,
        37.277833,
        4.1
    ],
    [
        -110.0425,
        44.6825,
        13.02
    ],
    [
        -116.2705,
        33.978,
        5.78
    ],
    [
        -159.6253,
        55.5692,
        53.6
    ],
    [
        -114.999333,
        33.073,
        -0.12
    ],
    [
        -118.367,
        38.5022,
        1.9
    ],
    [
        -115.612333,
        32.834667,
        12.8
    ],
    [
        -115.613,
        32.838667,
        12.07
    ],
    [
        -115.614,
        32.8335,
        12.31
    ],
    [
        -115.615833,
        32.843833,
        15.23
    ],
    [
        -155.213667,
        19.3035,
        2.2
    ],
    [
        -146.3859,
        61.6698,
        29.1
    ],
    [
        -118.841667,
        37.532167,
        -1.9
    ],
    [
        -154.5229,
        57.7401,
        52.1
    ],
    [
        -116.274,
        33.976333,
        5.08
    ],
    [
        -116.276,
        33.975333,
        3.91
    ],
    [
        -167.4531,
        53.5386,
        11.2
    ],
    [
        -166.5682,
        53.9212,
        8.1
    ],
    [
        -116.795167,
        33.507167,
        4.82
    ],
    [
        -112.622667,
        46.909667,
        10.61
    ],
    [
        -94.0086,
        15.1566,
        38.2
    ],
    [
        -115.614667,
        32.832167,
        10.18
    ],
    [
        -115.615333,
        32.843,
        15.01
    ],
    [
        -110.043833,
        44.678167,
        13.53
    ],
    [
        -94.9904,
        15.7092,
        39.9
    ],
    [
        -119.017333,
        37.5655,
        -0.37
    ],
    [
        -116.7965,
        33.504167,
        5.32
    ],
    [
        -110.075667,
        44.674,
        5.83
    ],
    [
        -117.498833,
        33.8575,
        -0.61
    ],
    [
        -112.7145,
        46.9035,
        15.16
    ],
    [
        -122.7985,
        38.833168,
        1.37
    ],
    [
        -122.811165,
        38.815666,
        2.78
    ],
    [
        -151.2791,
        60.1339,
        58.8
    ],
    [
        -122.814,
        38.8085,
        2.9
    ],
    [
        -118.817667,
        37.481167,
        0.23
    ],
    [
        -117.381833,
        35.980833,
        4.99
    ],
    [
        112.9501,
        -6.0986,
        590.53
    ],
    [
        -111.4525,
        42.6029,
        6.02
    ],
    [
        -141.8987,
        61.0912,
        0.1
    ],
    [
        -141.7682,
        61.1384,
        6.4
    ],
    [
        -152.7636,
        59.6753,
        80.6
    ],
    [
        -117.1445,
        33.667,
        -0.63
    ],
    [
        -118.850167,
        37.644667,
        5.63
    ],
    [
        -118.187167,
        34.993167,
        -0.82
    ],
    [
        -178.302,
        51.3949,
        36.9
    ],
    [
        -146.3078,
        61.2967,
        15.3
    ],
    [
        -122.745666,
        38.787834,
        1.52
    ],
    [
        -151.0157,
        63.5538,
        1.8
    ],
    [
        -120.0595,
        40.449667,
        16.29
    ],
    [
        -120.0005,
        35.943167,
        17.23
    ],
    [
        -120.600167,
        35.482,
        -0.46
    ],
    [
        -115.609,
        32.840667,
        14.81
    ],
    [
        -149.2438,
        62.4485,
        2.9
    ],
    [
        -118.841167,
        37.491667,
        -0.1
    ],
    [
        -80.703,
        37.472833,
        17.77
    ],
    [
        -151.7446,
        59.8908,
        41.3
    ],
    [
        -152.9553,
        59.6095,
        109.8
    ],
    [
        -153.5059,
        60.1768,
        153.1
    ],
    [
        -94.6803,
        15.7969,
        43.13
    ],
    [
        -174.8197,
        51.97,
        7.3
    ],
    [
        -124.704667,
        40.484,
        16.91
    ],
    [
        -174.4098,
        51.7491,
        29.3
    ],
    [
        -148.8143,
        62.8428,
        67.1
    ],
    [
        -155.485504,
        19.219,
        36.43
    ],
    [
        -151.4592,
        63.3484,
        0.8
    ],
    [
        152.1284,
        -4.88,
        54.06
    ],
    [
        -155.889333,
        19.9115,
        24.592
    ],
    [
        161.9266,
        -10.7647,
        46.64
    ],
    [
        -152.2966,
        59.7717,
        67.1
    ],
    [
        -89.672667,
        36.156667,
        9.37
    ],
    [
        -151.8055,
        59.8229,
        63.9
    ],
    [
        -149.627,
        60.7945,
        30.2
    ],
    [
        -117.791,
        36.012167,
        1.22
    ],
    [
        -118.9116,
        38.3879,
        15.2
    ],
    [
        -146.8896,
        60.3719,
        15.2
    ],
    [
        -157.3908,
        66.2048,
        11.9
    ],
    [
        -114.547833,
        44.257,
        9.7
    ],
    [
        -118.918167,
        37.593167,
        0.05
    ],
    [
        -148.4711,
        65.4989,
        11.1
    ],
    [
        -118.818,
        38.8311,
        8.7
    ],
    [
        -116.585667,
        35.139667,
        1.62
    ],
    [
        -115.6185,
        32.838,
        13.81
    ],
    [
        -155.298996,
        19.424334,
        6.6
    ],
    [
        -115.623,
        32.839333,
        10.27
    ],
    [
        -93.7023,
        15.8472,
        95.22
    ],
    [
        -114.642667,
        46.956667,
        13.27
    ],
    [
        -117.587333,
        36.179667,
        0.99
    ],
    [
        -122.820333,
        38.804,
        2.93
    ],
    [
        -163.6774,
        53.9359,
        13.8
    ],
    [
        -115.829167,
        32.782333,
        3.76
    ],
    [
        128.1783,
        2.9917,
        58.22
    ],
    [
        -121.082167,
        35.707667,
        6.66
    ],
    [
        -141.3182,
        60.2384,
        0
    ],
    [
        -177.6566,
        51.5758,
        56.9
    ],
    [
        -94.2516,
        14.855,
        22.24
    ],
    [
        -112.511667,
        46.9035,
        5.32
    ],
    [
        -139.9212,
        64.7545,
        3.8
    ],
    [
        -136.6225,
        59.7836,
        5.44
    ],
    [
        -110.8535,
        44.770833,
        7.9
    ],
    [
        -122.793,
        38.8215,
        3
    ],
    [
        -155.1134,
        57.8805,
        76.9
    ],
    [
        179.0008,
        50.1653,
        25.9
    ],
    [
        -119.8103,
        39.3643,
        9.1
    ],
    [
        -151.4897,
        63.0467,
        3.6
    ],
    [
        -164.0416,
        53.5692,
        24.5
    ],
    [
        -121.764333,
        48.271333,
        1.82
    ],
    [
        -147.7778,
        60.5002,
        3.8
    ],
    [
        -111.422,
        42.567833,
        7.73
    ],
    [
        -94.9055,
        15.639,
        35
    ],
    [
        -115.6215,
        32.831333,
        10.19
    ],
    [
        -94.7401,
        15.5449,
        31.41
    ],
    [
        -98.9039,
        36.2089,
        4.448
    ],
    [
        -158.2898,
        58.6446,
        4.6
    ],
    [
        179.5523,
        -23.5684,
        541.35
    ],
    [
        -166.5476,
        52.7346,
        39.4
    ],
    [
        -94.2348,
        15.2732,
        42.03
    ],
    [
        -155.356003,
        19.467167,
        4.72
    ],
    [
        -122.793831,
        38.822334,
        2.17
    ],
    [
        -111.4275,
        42.596,
        6.01
    ],
    [
        -148.4702,
        60.5679,
        7.7
    ],
    [
        -115.548,
        37.4198,
        12
    ],
    [
        -122.889333,
        39.366167,
        10.36
    ],
    [
        -153.8609,
        62.2453,
        3.1
    ],
    [
        -150.7566,
        62.9227,
        94.6
    ],
    [
        -146.7433,
        64.7476,
        3.4
    ],
    [
        -145.5871,
        61.6459,
        24.8
    ],
    [
        -149.9213,
        62.8983,
        79.6
    ],
    [
        -111.4494,
        42.6632,
        10.21
    ],
    [
        -153.0388,
        59.8755,
        109.6
    ],
    [
        -141.3111,
        60.5579,
        12.6
    ],
    [
        -118.8285,
        37.467,
        -1.65
    ],
    [
        -151.8651,
        62.2629,
        96.7
    ],
    [
        -111.4177,
        42.5618,
        8.28
    ],
    [
        -166.1432,
        53.7072,
        69.4
    ],
    [
        -179.084,
        -22.1327,
        549.09
    ],
    [
        -118.9094,
        38.3681,
        5.4
    ],
    [
        -148.8175,
        60.5189,
        13.7
    ],
    [
        147.6079,
        13.4506,
        10
    ],
    [
        -118.803833,
        37.486167,
        2.5
    ],
    [
        -116.795667,
        33.5045,
        6.22
    ],
    [
        -147.9732,
        60.9785,
        5.5
    ],
    [
        -112.5335,
        46.862167,
        10.42
    ],
    [
        -144.8464,
        60.3009,
        18.8
    ],
    [
        -93.453,
        15.3914,
        72.28
    ],
    [
        -117.108167,
        34.0375,
        6.71
    ],
    [
        -141.4202,
        60.2062,
        0
    ],
    [
        -112.529833,
        46.864167,
        11.03
    ],
    [
        -121.657667,
        37.1885,
        3.74
    ],
    [
        -122.886167,
        39.3655,
        10.44
    ],
    [
        -157.0455,
        67.102,
        9.7
    ],
    [
        -122.795,
        38.834667,
        1.79
    ],
    [
        -178.4947,
        51.6652,
        10.4
    ],
    [
        -122.793833,
        38.835667,
        1.89
    ],
    [
        -112.537,
        46.87,
        9.71
    ],
    [
        -122.795166,
        38.836666,
        1.37
    ],
    [
        -112.536167,
        46.872333,
        11.58
    ],
    [
        -66.4988,
        19.1065,
        25
    ],
    [
        -122.796669,
        38.836834,
        1.67
    ],
    [
        -122.798333,
        38.835167,
        1.85
    ],
    [
        -122.795667,
        38.835,
        1.82
    ],
    [
        -73.0946,
        9.5711,
        124.17
    ],
    [
        -112.532,
        46.864667,
        11.36
    ],
    [
        -94.5721,
        15.2889,
        34.84
    ],
    [
        -118.643667,
        34.5065,
        17.68
    ],
    [
        -150.6691,
        63.5608,
        10.3
    ],
    [
        -66.5123,
        19.091,
        21
    ],
    [
        -121.517833,
        36.804167,
        4.87
    ],
    [
        -148.2198,
        61.7575,
        9.7
    ],
    [
        -94.5276,
        15.1558,
        14.07
    ],
    [
        -112.540667,
        46.872333,
        11.48
    ],
    [
        -112.5535,
        46.8885,
        10.76
    ],
    [
        -151.2406,
        64.8451,
        3.5
    ],
    [
        -123.366833,
        40.4805,
        29.25
    ],
    [
        -66.5053,
        19.0955,
        25
    ],
    [
        -117.768667,
        33.774833,
        2.9
    ],
    [
        -141.4031,
        60.2216,
        0
    ],
    [
        -116.333667,
        32.933167,
        11.47
    ],
    [
        -147.5511,
        61.3707,
        12.3
    ],
    [
        -94.4234,
        15.3254,
        35.74
    ],
    [
        -146.5313,
        60.6712,
        14.9
    ],
    [
        -158.5006,
        65.2775,
        11.4
    ],
    [
        -95.3188,
        15.5954,
        29.98
    ],
    [
        -155.538167,
        19.256333,
        8.429
    ],
    [
        -120.273167,
        36.148167,
        8.47
    ],
    [
        -155.276672,
        19.404333,
        0.19
    ],
    [
        -120.865667,
        36.439667,
        6.7
    ],
    [
        -94.399,
        14.9659,
        29.81
    ],
    [
        -155.535,
        19.849,
        23.752
    ],
    [
        -117.165833,
        34.0375,
        5.82
    ],
    [
        -164.4757,
        53.3828,
        38.3
    ],
    [
        -144.5762,
        67.0334,
        2.1
    ],
    [
        -122.374667,
        45.693833,
        -0.9
    ],
    [
        -32.4621,
        58.0975,
        10
    ],
    [
        -117.675833,
        35.043,
        -0.82
    ],
    [
        -147.3463,
        64.994,
        0
    ],
    [
        -155.543333,
        19.851167,
        24.833
    ],
    [
        -164.4621,
        65.79,
        5.3
    ],
    [
        -148.3411,
        61.6898,
        7.2
    ],
    [
        -70.8843,
        -20.2485,
        15.05
    ],
    [
        -32.3543,
        58.0241,
        10
    ],
    [
        -122.794833,
        38.819333,
        2.91
    ],
    [
        -118.193167,
        34.9985,
        -0.8
    ],
    [
        -32.4259,
        58.0753,
        10
    ],
    [
        -141.907,
        60.3564,
        8.9
    ],
    [
        -32.4208,
        58.165,
        10
    ],
    [
        -118.819333,
        37.604167,
        3.81
    ],
    [
        -116.805333,
        33.691833,
        15.39
    ],
    [
        -118.3685,
        33.956333,
        12.98
    ],
    [
        -116.575167,
        33.465333,
        9.81
    ],
    [
        -174.19,
        -15.0799,
        144.26
    ],
    [
        -121.5795,
        39.603833,
        -0.21
    ],
    [
        -148.9811,
        64.7032,
        15.8
    ],
    [
        -98.3683,
        36.7446,
        14.63
    ],
    [
        -122.827333,
        38.839,
        2.11
    ],
    [
        -94.4239,
        15.7169,
        52.92
    ],
    [
        -121.876833,
        37.8095,
        14.44
    ],
    [
        -154.5902,
        57.2026,
        44.2
    ],
    [
        -117.759333,
        33.8575,
        5.49
    ],
    [
        -115.385,
        32.3285,
        10.39
    ],
    [
        -170.5817,
        52.3665,
        32.8
    ],
    [
        -147.4179,
        63.5705,
        4.4
    ],
    [
        -121.146667,
        40.211833,
        2.94
    ],
    [
        -122.875667,
        38.839667,
        2.2
    ],
    [
        -177.7715,
        -21.9227,
        347.97
    ],
    [
        -139.5267,
        60.0018,
        0
    ],
    [
        -159.2171,
        59.7927,
        8
    ],
    [
        -32.2455,
        58.0337,
        10
    ],
    [
        -94.6417,
        15.6677,
        51.24
    ],
    [
        -94.9743,
        16.3622,
        66.45
    ],
    [
        -123.244667,
        39.3805,
        3.22
    ],
    [
        -93.5996,
        15.3334,
        74.72
    ],
    [
        -94.0643,
        15.2212,
        44.65
    ],
    [
        -153.2159,
        59.366,
        81.6
    ],
    [
        -111.4572,
        42.5165,
        8.78
    ],
    [
        -141.1631,
        60.0754,
        0
    ],
    [
        -146.2683,
        61.5446,
        35.4
    ],
    [
        -155.247667,
        19.393167,
        36.582
    ],
    [
        -158.9785,
        55.7766,
        56.2
    ],
    [
        129.6779,
        -5.2108,
        218.06
    ],
    [
        -167.4402,
        53.5209,
        13.2
    ],
    [
        -148.4636,
        60.5717,
        9.3
    ],
    [
        -93.2449,
        15.2798,
        73.2
    ],
    [
        -167.5043,
        53.6304,
        25.8
    ],
    [
        -142.7095,
        60.5946,
        14.1
    ],
    [
        -118.444167,
        37.384167,
        12.11
    ],
    [
        -58.4081,
        13.9047,
        20.6
    ],
    [
        -148.7021,
        63.9919,
        0
    ],
    [
        -116.139333,
        35.857167,
        3.42
    ],
    [
        -151.8118,
        65.9855,
        3.7
    ],
    [
        -176.3915,
        52.0051,
        11.7
    ],
    [
        -121.976167,
        37.596833,
        8.18
    ],
    [
        129.3156,
        -7.5665,
        115.97
    ],
    [
        -117.031667,
        33.866,
        11.4
    ],
    [
        -118.821167,
        37.605,
        4.21
    ],
    [
        -171.7818,
        52.0274,
        61.84
    ],
    [
        -157.0909,
        55.1751,
        22.8
    ],
    [
        -179.919,
        -24.5557,
        553.9
    ],
    [
        -93.9204,
        15.0356,
        34.73
    ],
    [
        -116.794,
        33.505667,
        4.44
    ],
    [
        -94.4589,
        15.8693,
        40.82
    ],
    [
        -155.4729,
        57.3614,
        66
    ],
    [
        -177.2892,
        -30.4261,
        12.38
    ],
    [
        167.6472,
        -14.1046,
        43.3
    ],
    [
        -149.5591,
        61.6356,
        28.9
    ],
    [
        -152.5176,
        60.4846,
        107.4
    ],
    [
        -67.8866,
        18.066,
        112
    ],
    [
        -151.482,
        62.559,
        83.4
    ],
    [
        -117.166,
        34.036,
        5.82
    ],
    [
        -122.7255,
        38.788667,
        1.77
    ],
    [
        -152.5898,
        60.4951,
        99.5
    ],
    [
        -110.334667,
        44.621667,
        2.11
    ],
    [
        -171.3403,
        52.1694,
        67.96
    ],
    [
        -111.467,
        42.663667,
        3.54
    ],
    [
        -141.3559,
        60.1768,
        0
    ],
    [
        -141.1399,
        60.3035,
        0
    ],
    [
        -166.7846,
        53.7799,
        6.7
    ],
    [
        -151.7209,
        60.3452,
        65.8
    ],
    [
        -155.929167,
        19.870667,
        12.697
    ],
    [
        -141.314,
        60.1844,
        0
    ],
    [
        -111.443167,
        42.595,
        3.5
    ],
    [
        -146.0089,
        61.3182,
        28.6
    ],
    [
        -98.9201,
        36.2062,
        6.163
    ],
    [
        -150.9996,
        62.229,
        72.4
    ],
    [
        -112.5432,
        46.8852,
        12.06
    ],
    [
        -147.9544,
        67.3188,
        9.6
    ],
    [
        -141.0159,
        59.8987,
        11
    ],
    [
        -118.820667,
        37.602667,
        4.12
    ],
    [
        -116.819667,
        33.71,
        15.77
    ],
    [
        -178.4252,
        51.6857,
        14.4
    ],
    [
        -139.4876,
        60.0043,
        0
    ],
    [
        -151.4102,
        62.0418,
        78.9
    ],
    [
        -118.826333,
        37.602833,
        3.87
    ],
    [
        -148.1452,
        62.8895,
        56.9
    ],
    [
        -141.6326,
        60.2201,
        0
    ],
    [
        -148.0049,
        60.6518,
        14.8
    ],
    [
        -166.8093,
        53.7706,
        8
    ],
    [
        101.7514,
        27.9618,
        35
    ],
    [
        -147.0512,
        61.2674,
        7.5
    ],
    [
        -94.8032,
        16.1985,
        37.2
    ],
    [
        -112.430167,
        38.334333,
        2.58
    ],
    [
        -151.8883,
        61.2794,
        95
    ],
    [
        -118.861167,
        37.426667,
        3.97
    ],
    [
        -111.007333,
        44.7855,
        7.95
    ],
    [
        -136.7135,
        59.8217,
        2
    ],
    [
        -119.801833,
        35.832333,
        9.72
    ],
    [
        -121.728833,
        46.841667,
        -2.2
    ],
    [
        -150.7981,
        61.0848,
        49.4
    ],
    [
        -116.34,
        33.3915,
        3.45
    ],
    [
        -148.8733,
        61.5592,
        31.2
    ],
    [
        -173.31,
        -20.0675,
        10
    ],
    [
        -152.4588,
        61.074,
        107.6
    ],
    [
        -111.465333,
        42.608333,
        2.53
    ],
    [
        -153.2489,
        60.3172,
        132.5
    ],
    [
        -153.6819,
        58.4203,
        78
    ],
    [
        -94.7329,
        15.7927,
        47.14
    ],
    [
        -149.7269,
        62.2754,
        47.5
    ],
    [
        -67.6503,
        18.1753,
        12
    ],
    [
        -152.4161,
        60.188,
        103.5
    ],
    [
        -155.975333,
        19.557,
        44.801
    ],
    [
        -155.4164,
        57.0134,
        65.4
    ],
    [
        -174.2778,
        52.1101,
        228.97
    ],
    [
        -89.554167,
        36.472,
        8.99
    ],
    [
        147.4651,
        -4.9334,
        167.53
    ],
    [
        -140.1732,
        61.3766,
        3.5
    ],
    [
        -159.5128,
        54.8119,
        22.77
    ],
    [
        -117.019667,
        34.347833,
        1.32
    ],
    [
        -153.4302,
        65.4772,
        14.3
    ],
    [
        -169.335,
        52.1151,
        36.52
    ],
    [
        -118.919,
        38.3871,
        7.2
    ],
    [
        -139.8746,
        64.7668,
        2.4
    ],
    [
        -94.6261,
        15.7276,
        39.07
    ],
    [
        -140.6326,
        59.9341,
        17
    ],
    [
        -118.835833,
        37.502,
        -0.69
    ],
    [
        -68.7348,
        17.4213,
        58
    ],
    [
        175.9237,
        -40.6778,
        35.49
    ],
    [
        -150.0733,
        62.8571,
        78.1
    ],
    [
        -119.959667,
        36.079833,
        11.15
    ],
    [
        -157.0626,
        55.2018,
        8.4
    ],
    [
        -151.6431,
        63.3655,
        4.3
    ],
    [
        -118.0826,
        39.1124,
        11.2
    ],
    [
        -114.294,
        37.806,
        4.9
    ],
    [
        70.8701,
        -26.0946,
        10
    ],
    [
        -117.070833,
        34.124,
        7.32
    ],
    [
        -151.9514,
        59.3304,
        53.9
    ],
    [
        -111.435667,
        42.555167,
        6.85
    ],
    [
        -94.3657,
        15.4552,
        61.44
    ],
    [
        -166.7632,
        53.2354,
        44.5
    ],
    [
        -150.5938,
        63.2379,
        122
    ],
    [
        -112.527333,
        46.863,
        11.45
    ],
    [
        -122.735833,
        38.760833,
        1.36
    ],
    [
        -93.8716,
        15.0886,
        57.71
    ],
    [
        -166.7231,
        53.1426,
        25.6
    ],
    [
        -93.832,
        15.182,
        60.95
    ],
    [
        -112.5175,
        46.899833,
        10.92
    ],
    [
        -110.973833,
        43.2425,
        2.3
    ],
    [
        -141.4231,
        60.1297,
        0
    ],
    [
        -118.835,
        37.502667,
        -0.15
    ],
    [
        -121.788,
        37.455,
        7.56
    ],
    [
        -67.3923,
        18.5168,
        23
    ],
    [
        -152.3144,
        60.1274,
        78.3
    ],
    [
        -158.0362,
        56.0678,
        8.4
    ],
    [
        -111.059333,
        40.568667,
        7.12
    ],
    [
        -157.320667,
        21.633833,
        8.469
    ],
    [
        -67.3921,
        18.5325,
        19
    ],
    [
        -112.530167,
        46.8705,
        12.49
    ],
    [
        -97.492167,
        37.299667,
        4.92
    ],
    [
        -122.319833,
        40.4865,
        13.1
    ],
    [
        -117.287333,
        34.079667,
        14.28
    ],
    [
        -151.8075,
        61.2964,
        89.4
    ],
    [
        -141.2832,
        60.1725,
        0
    ],
    [
        -112.528833,
        46.863667,
        13.34
    ],
    [
        -116.797333,
        33.494667,
        4.01
    ],
    [
        -68.0131,
        19.0945,
        24
    ],
    [
        -118.821333,
        37.6055,
        4.17
    ],
    [
        -118.821333,
        37.468667,
        -0.39
    ],
    [
        -124.502,
        40.2965,
        19.04
    ],
    [
        -117.1715,
        34.0385,
        5.42
    ],
    [
        -118.820667,
        37.4715,
        -1.63
    ],
    [
        -150.3232,
        62.0502,
        60.9
    ],
    [
        -153.0397,
        60.1249,
        106.2
    ],
    [
        -68.7961,
        18.688,
        102
    ],
    [
        -111.445,
        42.5935,
        6.67
    ],
    [
        -152.6734,
        59.8319,
        93.2
    ],
    [
        -151.001,
        59.4008,
        36.7
    ],
    [
        -153.5196,
        59.9375,
        123.2
    ],
    [
        -149.8744,
        63.0936,
        89.7
    ],
    [
        -111.414167,
        42.53,
        3.5
    ],
    [
        -118.816,
        37.475,
        1.48
    ],
    [
        -118.025,
        36.311333,
        2.4
    ],
    [
        -118.820167,
        37.474167,
        -0.42
    ],
    [
        -94.097,
        15.4421,
        48.35
    ],
    [
        -151.8044,
        60.0035,
        75.6
    ],
    [
        -118.819667,
        37.471,
        -0.04
    ],
    [
        -94.2744,
        15.0853,
        44.38
    ],
    [
        -111.4236,
        42.5422,
        5.98
    ],
    [
        -116.796167,
        33.491167,
        3.15
    ],
    [
        -111.4213,
        42.5825,
        7.47
    ],
    [
        -118.82,
        37.473,
        0.51
    ],
    [
        -154.857,
        19.358667,
        41.774
    ],
    [
        -141.3458,
        60.155,
        0
    ],
    [
        -118.8195,
        37.4765,
        -0.54
    ],
    [
        -152.1737,
        62.7988,
        8.1
    ],
    [
        -111.450167,
        42.593667,
        3.5
    ],
    [
        -111.45,
        42.6006,
        6.65
    ],
    [
        -111.4619,
        42.5922,
        9.11
    ],
    [
        -173.0579,
        52.772,
        207.41
    ],
    [
        178.0407,
        51.8595,
        146.7
    ],
    [
        -149.9121,
        61.9185,
        44.8
    ],
    [
        -94.3251,
        15.4699,
        53.34
    ],
    [
        -119.012,
        37.426833,
        3.03
    ],
    [
        -94.6345,
        15.6178,
        38.83
    ],
    [
        -111.4698,
        42.6061,
        6
    ],
    [
        -178.4581,
        51.6497,
        9.7
    ],
    [
        -140.1659,
        59.9838,
        14.2
    ],
    [
        -153.2029,
        59.1798,
        77.3
    ],
    [
        -116.3355,
        32.933,
        10.81
    ],
    [
        -94.9567,
        15.7603,
        48.25
    ],
    [
        -151.4466,
        62.4273,
        81.1
    ],
    [
        152.2966,
        -4.9444,
        49.23
    ],
    [
        -118.544833,
        37.529,
        12.8
    ],
    [
        -178.3593,
        51.5235,
        54.7
    ],
    [
        -141.3213,
        60.2363,
        0
    ],
    [
        -93.1669,
        15.1965,
        62.3
    ],
    [
        -111.4105,
        42.5306,
        6.58
    ],
    [
        -156.8283,
        55.1229,
        12
    ],
    [
        -122.1755,
        46.198833,
        3.06
    ],
    [
        -120.939,
        35.641167,
        4.35
    ],
    [
        -94.6724,
        15.4385,
        31.22
    ],
    [
        -118.940167,
        35.427833,
        21.14
    ],
    [
        -94.0139,
        14.9074,
        27
    ],
    [
        -111.4202,
        42.5566,
        9
    ],
    [
        -173.4142,
        51.8321,
        32.9
    ],
    [
        -116.9785,
        32.6095,
        -0.36
    ],
    [
        -144.7591,
        65.4356,
        0
    ],
    [
        -118.9149,
        38.3846,
        5.4
    ],
    [
        -173.477,
        52.2896,
        65.69
    ],
    [
        -110.327667,
        46.1355,
        6.01
    ],
    [
        -167,
        53.2916,
        13
    ],
    [
        -167.8204,
        65.319,
        3.3
    ],
    [
        -150.8659,
        62.8899,
        99.8
    ],
    [
        -150.115,
        63.145,
        108.2
    ],
    [
        -112.540833,
        46.904833,
        11.87
    ],
    [
        -111.4306,
        42.5727,
        7.14
    ],
    [
        -112.524833,
        46.8675,
        11.01
    ],
    [
        -151.2022,
        60.4231,
        48.9
    ],
    [
        -148.5505,
        65.8017,
        12.5
    ],
    [
        -148.2439,
        66.0161,
        16.1
    ],
    [
        -118.8838,
        38.8119,
        4.7
    ],
    [
        -122.778,
        38.7915,
        3.48
    ],
    [
        -111.471,
        42.609,
        7.61
    ],
    [
        -151.3067,
        62.9071,
        5.6
    ],
    [
        -152.3368,
        59.849,
        84.9
    ],
    [
        -147.7252,
        63.4914,
        1.9
    ],
    [
        -151.9414,
        58.9343,
        71.6
    ],
    [
        -111.423167,
        42.524333,
        7.67
    ],
    [
        125.9192,
        10.9561,
        35
    ],
    [
        -153.0563,
        59.7893,
        104.3
    ],
    [
        -8.5745,
        37.1247,
        19.99
    ],
    [
        -153.1793,
        60.2771,
        148.8
    ],
    [
        -118.8175,
        38.8318,
        9.7
    ],
    [
        -118.8205,
        37.474,
        -0.34
    ],
    [
        142.3373,
        23.9529,
        35
    ],
    [
        -111.4259,
        42.5401,
        6.8
    ],
    [
        -112.515833,
        46.859,
        13.54
    ],
    [
        -150.8119,
        60.5833,
        13.5
    ],
    [
        -117.339833,
        33.717167,
        -0.52
    ],
    [
        -27.1014,
        -58.1449,
        29.22
    ],
    [
        141.7999,
        10.8571,
        10
    ],
    [
        93.763,
        11.1912,
        135.46
    ],
    [
        105.5216,
        28.9426,
        37.11
    ],
    [
        21.5733,
        39.2104,
        10
    ],
    [
        -111.425833,
        42.545833,
        6.7
    ],
    [
        -111.4221,
        42.5774,
        8.61
    ],
    [
        -117.870333,
        36.5125,
        7.71
    ],
    [
        169.8301,
        -18.5966,
        222.96
    ],
    [
        -116.721333,
        33.538833,
        2.61
    ],
    [
        -93.9232,
        15.0128,
        54.55
    ],
    [
        -156.3358,
        57.9354,
        144.8
    ],
    [
        -94.0414,
        15.1729,
        45.88
    ],
    [
        -136.6743,
        59.7685,
        0
    ],
    [
        -111.4647,
        42.6086,
        4.31
    ],
    [
        -111.462833,
        42.578167,
        3.5
    ],
    [
        -149.7738,
        62.154,
        53.3
    ],
    [
        -153.0859,
        60.2049,
        139
    ],
    [
        169.1802,
        54.2242,
        10
    ],
    [
        146.6506,
        -2.821,
        10
    ],
    [
        -111.4148,
        42.5413,
        9.05
    ],
    [
        -94.0513,
        14.8747,
        44.09
    ],
    [
        -94.3653,
        15.3524,
        32.65
    ],
    [
        -176.0928,
        -23.8876,
        37.16
    ],
    [
        -94.7122,
        15.3112,
        28.67
    ],
    [
        -112.532333,
        46.8915,
        13.58
    ],
    [
        -122.819168,
        38.845001,
        -0.69
    ],
    [
        -178.2937,
        51.4307,
        40.1
    ],
    [
        -122.526167,
        45.054,
        14.59
    ],
    [
        -94.4233,
        15.4024,
        50.36
    ],
    [
        -116.260667,
        32.865667,
        12.62
    ],
    [
        -121.98,
        37.905667,
        7.94
    ],
    [
        -67.1661,
        18.2745,
        22
    ],
    [
        -111.4329,
        42.6048,
        10.74
    ],
    [
        -111.440667,
        42.570833,
        6.17
    ],
    [
        -111.4268,
        42.5293,
        6.86
    ],
    [
        -33.2097,
        57.3966,
        10
    ],
    [
        -111.4261,
        42.5344,
        6.18
    ],
    [
        -111.4192,
        42.5317,
        7.87
    ],
    [
        -121.788833,
        37.4565,
        7.82
    ],
    [
        -111.4143,
        42.5438,
        7.19
    ],
    [
        -111.4164,
        42.5288,
        7.13
    ],
    [
        147.2941,
        49.241,
        567.61
    ],
    [
        -146.7415,
        61.4216,
        18.8
    ],
    [
        -111.4259,
        42.5325,
        7.14
    ],
    [
        95.9326,
        17.4028,
        10
    ],
    [
        -152.3857,
        59.1724,
        56.6
    ],
    [
        -111.4339,
        42.5419,
        8.21
    ],
    [
        -111.4362,
        42.5456,
        6.59
    ],
    [
        -111.4366,
        42.5476,
        10.03
    ],
    [
        94.6908,
        22.421,
        111.87
    ],
    [
        -175.5913,
        51.4481,
        48.1
    ],
    [
        -111.4397,
        42.547,
        8.42
    ],
    [
        -174.0316,
        -19.7635,
        35
    ],
    [
        -118.293,
        35.087333,
        5.54
    ],
    [
        -147.9083,
        64.6086,
        14
    ],
    [
        -142.9809,
        60.2846,
        15.6
    ],
    [
        -151.2227,
        61.5128,
        2
    ],
    [
        -115.0108,
        37.3174,
        5.6
    ],
    [
        -118.944,
        37.596667,
        2.35
    ],
    [
        -152.0572,
        63.3368,
        5.2
    ],
    [
        -118.804,
        37.487667,
        2.35
    ],
    [
        -146.6291,
        68.5279,
        7.8
    ],
    [
        179.5495,
        51.3476,
        48.9
    ],
    [
        -111.4384,
        42.5522,
        4.67
    ],
    [
        -111.424667,
        42.5545,
        3.92
    ],
    [
        -155.6145,
        19.417333,
        2.362
    ],
    [
        -111.4421,
        42.5481,
        9.98
    ],
    [
        -111.4364,
        42.5648,
        8.56
    ],
    [
        -149.8559,
        62.6857,
        65.3
    ],
    [
        -179.1594,
        -25.8043,
        396.76
    ],
    [
        -118.9061,
        38.3603,
        6.9
    ],
    [
        -148.8547,
        61.7247,
        43.6
    ],
    [
        -151.3277,
        62.9497,
        102.8
    ],
    [
        -111.4451,
        42.6131,
        6.65
    ],
    [
        -114.591167,
        48.595333,
        11.25
    ],
    [
        -143.0317,
        60.2939,
        13.2
    ],
    [
        -116.1345,
        33.263,
        3.81
    ],
    [
        -111.4364,
        42.5733,
        9.58
    ],
    [
        -147.1197,
        60.1444,
        17.1
    ],
    [
        -176.0508,
        -16.1442,
        368.85
    ],
    [
        -74.1346,
        -37.5234,
        25.58
    ],
    [
        -118.822,
        37.459167,
        1.9
    ],
    [
        -163.8371,
        52.7853,
        7.1
    ],
    [
        -149.0565,
        64.7051,
        17.4
    ],
    [
        -163.9834,
        54.7566,
        4.6
    ],
    [
        -155.28183,
        19.407,
        0.02
    ],
    [
        -118.712,
        33.879333,
        13.03
    ],
    [
        -152.853,
        59.6229,
        96
    ],
    [
        -146.6217,
        68.5348,
        1
    ],
    [
        -152.1251,
        64.9961,
        18.4
    ],
    [
        -164.5218,
        65.7316,
        2.7
    ],
    [
        -165.3884,
        53.8156,
        54.1
    ],
    [
        -122.753998,
        38.790165,
        3.35
    ],
    [
        -117.25,
        34.0295,
        14.73
    ],
    [
        -117.210667,
        33.964,
        14.98
    ],
    [
        -167.4191,
        53.5639,
        6.6
    ],
    [
        -111.4438,
        42.5496,
        7.43
    ],
    [
        -152.2865,
        60.4132,
        89.8
    ],
    [
        -146.3358,
        61.5763,
        29.1
    ],
    [
        -121.747167,
        37.409167,
        5.32
    ],
    [
        -136.8224,
        59.7877,
        2.4
    ],
    [
        -111.4237,
        42.5673,
        7.37
    ],
    [
        -111.4287,
        42.5544,
        2.24
    ],
    [
        -111.4315,
        42.546167,
        6.37
    ],
    [
        -117.268167,
        34.059667,
        16.34
    ],
    [
        -147.4598,
        60.9205,
        10
    ],
    [
        -143.565,
        68.8276,
        0.5
    ],
    [
        -116.577833,
        33.463,
        8.81
    ],
    [
        -122.494333,
        48.421333,
        23.39
    ],
    [
        -109.851333,
        41.686167,
        9.37
    ],
    [
        -67.9758,
        19.4726,
        83
    ],
    [
        -145.6659,
        62.2481,
        21.1
    ],
    [
        -169.5449,
        52.5632,
        40.2
    ],
    [
        -93.9806,
        15.3004,
        56.84
    ],
    [
        -116.2325,
        33.327833,
        10.93
    ],
    [
        -111.4585,
        42.6238,
        8.02
    ],
    [
        -111.4215,
        42.555167,
        8.21
    ],
    [
        -67.1399,
        -24.246,
        215.32
    ],
    [
        -150.8258,
        60.1009,
        45.2
    ],
    [
        -142.8676,
        59.0889,
        2.2
    ],
    [
        -112.529333,
        46.8645,
        12.3
    ],
    [
        -119.403,
        34.906,
        11.64
    ],
    [
        -142.1691,
        60.3968,
        3.4
    ],
    [
        -122.819168,
        38.807335,
        2.77
    ],
    [
        -111.4688,
        42.5774,
        5
    ],
    [
        -93.9711,
        15.3853,
        85.78
    ],
    [
        -121.298667,
        36.839667,
        6.48
    ],
    [
        -157.9816,
        56.0816,
        4.8
    ],
    [
        -111.4343,
        42.6729,
        8.91
    ],
    [
        -93.0235,
        15.4152,
        96.62
    ],
    [
        -166.0716,
        53.7182,
        69.4
    ],
    [
        -122.039333,
        46.874833,
        6.58
    ],
    [
        -122.0835,
        41.351667,
        6.69
    ],
    [
        -152.8937,
        61.0452,
        165.2
    ],
    [
        -153.1953,
        59.1308,
        77
    ],
    [
        -94.1177,
        14.9912,
        39.36
    ],
    [
        -111.4145,
        42.553333,
        8.78
    ],
    [
        -117.690333,
        36.111167,
        2.14
    ],
    [
        -110.917167,
        39.7665,
        0.9
    ],
    [
        -95.1678,
        15.2785,
        67.46
    ],
    [
        134.2896,
        -4.2452,
        11.73
    ],
    [
        -94.8401,
        15.5681,
        47.06
    ],
    [
        -153.9778,
        58.2872,
        74.3
    ],
    [
        -122.041833,
        46.873833,
        6.67
    ],
    [
        -122.041333,
        46.872667,
        6.52
    ],
    [
        -153.439,
        59.7864,
        127.3
    ],
    [
        -152.7785,
        59.9173,
        97.4
    ],
    [
        152.4651,
        -10.314,
        10
    ],
    [
        -117.693833,
        36.111833,
        2.19
    ],
    [
        -96.7392,
        35.5637,
        5
    ],
    [
        -33.3922,
        57.1877,
        10
    ],
    [
        -143.1984,
        60.4559,
        13.3
    ],
    [
        -112.536833,
        46.868167,
        13.72
    ],
    [
        -139.3852,
        59.9636,
        0
    ],
    [
        -151.2252,
        63.2571,
        2.9
    ],
    [
        -137.7551,
        60.3801,
        2.2
    ],
    [
        -137.7475,
        60.3735,
        5
    ],
    [
        134.3851,
        -4.1892,
        10
    ],
    [
        -150.6756,
        61.6922,
        62.5
    ],
    [
        -111.4685,
        42.672,
        9.46
    ],
    [
        -111.4535,
        42.6306,
        9.3
    ],
    [
        122.0697,
        24.7471,
        68.23
    ],
    [
        -94.9001,
        15.6517,
        51.53
    ],
    [
        -147.9046,
        61.531,
        28.4
    ],
    [
        -159.2586,
        62.549,
        5
    ],
    [
        -119.009667,
        37.590833,
        -0.07
    ],
    [
        -94.418,
        15.8113,
        56.97
    ],
    [
        -150.0357,
        62.0888,
        52.2
    ],
    [
        -116.502333,
        35.679,
        6.19
    ],
    [
        -119.535667,
        37.632333,
        19.33
    ],
    [
        -116.507333,
        34.488,
        1.46
    ],
    [
        143.5451,
        12.9836,
        114.29
    ],
    [
        -153.1537,
        59.7401,
        106.9
    ],
    [
        -116.798167,
        33.493667,
        3.61
    ],
    [
        -114.6589,
        37.3487,
        6.1
    ],
    [
        170.8111,
        53.8607,
        10
    ],
    [
        95.953,
        17.3198,
        10
    ],
    [
        -155.490333,
        19.339667,
        9.09
    ],
    [
        129.972,
        -6.9548,
        134.48
    ],
    [
        -152.3457,
        60.4497,
        89.7
    ],
    [
        -150.6719,
        63.2902,
        124.6
    ],
    [
        -111.440667,
        42.578333,
        7.23
    ],
    [
        -111.443,
        42.5904,
        7.61
    ],
    [
        -154.0095,
        58.5704,
        86
    ],
    [
        -118.832333,
        37.542333,
        4.8
    ],
    [
        -117.589167,
        36.0335,
        2.63
    ],
    [
        -178.554,
        51.5916,
        17.56
    ],
    [
        -118.831,
        37.541833,
        4.79
    ],
    [
        -93.9938,
        15.3932,
        58.95
    ],
    [
        -111.4151,
        42.563,
        8
    ],
    [
        -93.4901,
        14.0924,
        54.64
    ],
    [
        -150.3481,
        62.1328,
        10.2
    ],
    [
        -117.663167,
        35.044,
        -0.82
    ],
    [
        -111.4372,
        42.584,
        3.54
    ],
    [
        -153.0012,
        60.1398,
        104.9
    ],
    [
        -111.4614,
        42.6018,
        5.02
    ],
    [
        -111.4583,
        42.5935,
        5
    ],
    [
        -150.9225,
        60.1912,
        51.8
    ],
    [
        -68.7241,
        19.5025,
        24
    ],
    [
        -117.164,
        34.038833,
        6
    ],
    [
        -117.166167,
        34.037667,
        6.01
    ],
    [
        -117.166667,
        34.039167,
        6.08
    ],
    [
        -97.877167,
        37.229167,
        3.02
    ],
    [
        -118.290167,
        35.090833,
        2.62
    ],
    [
        -111.439,
        42.5855,
        3.5
    ],
    [
        -150.2261,
        62.1899,
        53.2
    ],
    [
        -146.8636,
        68.2355,
        2.3
    ],
    [
        -111.4511,
        42.5959,
        5
    ],
    [
        -121.790333,
        37.452833,
        8.21
    ],
    [
        -154.9101,
        57.044,
        46.2
    ],
    [
        -33.6765,
        57.1272,
        10
    ],
    [
        -118.937667,
        37.601667,
        1.02
    ],
    [
        -118.806,
        37.5175,
        -2.34
    ],
    [
        -111.4509,
        42.5792,
        6.22
    ],
    [
        -122.011167,
        46.792,
        5.12
    ],
    [
        -111.422167,
        42.554167,
        8
    ],
    [
        -153.0938,
        58.0932,
        50.1
    ],
    [
        -118.941333,
        37.642833,
        0.01
    ],
    [
        -118.946167,
        37.638667,
        -0.65
    ],
    [
        -121.394833,
        36.9325,
        8.56
    ],
    [
        -66.714,
        18.0166,
        7
    ],
    [
        -118.881833,
        37.512333,
        -0.07
    ],
    [
        -154.5368,
        58.8361,
        122.2
    ],
    [
        -94.2595,
        15.0768,
        55.96
    ],
    [
        -115.9555,
        40.8314,
        10.3
    ],
    [
        -151.1907,
        63.4845,
        0.8
    ],
    [
        -111.4239,
        42.5436,
        5
    ],
    [
        -115.8807,
        36.8036,
        7.4
    ],
    [
        -152.7422,
        60.0074,
        102.5
    ],
    [
        -151.4194,
        63.2783,
        7.1
    ],
    [
        -111.4599,
        42.5711,
        10.61
    ],
    [
        -155.273331,
        19.413166,
        0.54
    ],
    [
        -111.42,
        42.5453,
        7.37
    ],
    [
        -151.7217,
        63.3651,
        4.1
    ],
    [
        -69.114,
        -23.6018,
        85.28
    ],
    [
        13.2839,
        42.1689,
        5
    ],
    [
        -117.162,
        34.035333,
        6.06
    ],
    [
        -97.6178,
        36.1361,
        5.301
    ],
    [
        -112.527667,
        46.862667,
        10.3
    ],
    [
        -111.4094,
        42.5488,
        7.85
    ],
    [
        -111.4249,
        42.5451,
        9.42
    ],
    [
        -122.784833,
        38.824667,
        1.65
    ],
    [
        -121.153,
        37.129167,
        12.33
    ],
    [
        -118.891,
        37.544167,
        1.7
    ],
    [
        -162.4505,
        54.6854,
        60.7
    ],
    [
        -111.4177,
        42.5563,
        13
    ],
    [
        -121.149,
        37.1305,
        12.32
    ],
    [
        -111.4181,
        42.5449,
        7.46
    ],
    [
        -65.0411,
        19.2021,
        48
    ],
    [
        -155.104167,
        19.329333,
        5.178
    ],
    [
        -111.4153,
        42.5555,
        7.28
    ],
    [
        -153.6404,
        58.5519,
        66.4
    ],
    [
        -104.9924,
        37.0464,
        6.8
    ],
    [
        -121.315667,
        36.955833,
        7.62
    ],
    [
        -97.1711,
        35.6565,
        7.54
    ],
    [
        -111.4388,
        42.6003,
        7.21
    ],
    [
        -117.169667,
        34.037167,
        4.29
    ],
    [
        -117.163333,
        34.028,
        2.94
    ],
    [
        -170.5732,
        52.3355,
        35
    ],
    [
        -152.7536,
        59.2097,
        68
    ],
    [
        -122.764168,
        38.833,
        0.66
    ],
    [
        -122.759667,
        38.833667,
        1.17
    ],
    [
        -149.3745,
        62.1772,
        42.1
    ],
    [
        -117.166333,
        34.044667,
        5.25
    ],
    [
        -117.163333,
        34.041167,
        5.54
    ],
    [
        -153.7529,
        58.6862,
        17
    ],
    [
        -117.163833,
        34.040667,
        6.08
    ],
    [
        -151.0268,
        60.5262,
        19.4
    ],
    [
        -111.4209,
        42.5639,
        8.61
    ],
    [
        -119.2325,
        34.474333,
        11
    ],
    [
        -151.2942,
        63.1472,
        1
    ],
    [
        -117.172667,
        34.034333,
        5.23
    ],
    [
        -118.295,
        35.088667,
        4.44
    ],
    [
        -145.1889,
        65.0868,
        19.8
    ],
    [
        82.4969,
        41.9157,
        28.96
    ],
    [
        -111.4577,
        42.6058,
        5.68
    ],
    [
        -111.415333,
        42.567,
        9.66
    ],
    [
        -117.165167,
        34.041667,
        6.46
    ],
    [
        -121.157167,
        37.135667,
        10.29
    ],
    [
        -120.774667,
        35.547833,
        5.09
    ],
    [
        -119.238167,
        34.467833,
        11.17
    ],
    [
        -111.4296,
        42.5627,
        11.62
    ],
    [
        -122.801833,
        38.789333,
        3.19
    ],
    [
        -111.444,
        42.594667,
        6.67
    ],
    [
        -111.432167,
        42.5965,
        4.48
    ],
    [
        -117.167,
        34.038667,
        4.49
    ],
    [
        -117.165,
        34.039333,
        4.98
    ],
    [
        -117.164167,
        34.037667,
        5.25
    ],
    [
        -117.165667,
        34.038667,
        5.34
    ],
    [
        -142.1509,
        60.3803,
        7
    ],
    [
        -119.893,
        35.343333,
        5.39
    ],
    [
        -141.731,
        60.0161,
        6.5
    ],
    [
        -117.167333,
        34.040167,
        4.42
    ],
    [
        -173.3264,
        52.5377,
        96.17
    ],
    [
        -119.8935,
        35.3405,
        5.83
    ],
    [
        -178.4433,
        51.6859,
        21
    ],
    [
        -148.1384,
        63.4871,
        1.4
    ],
    [
        -169.3922,
        52.3983,
        21.1
    ],
    [
        -118.943667,
        37.596167,
        2.31
    ],
    [
        139.1945,
        35.7377,
        54.25
    ],
    [
        -123.046333,
        38.9295,
        0.46
    ],
    [
        -96.7958,
        35.9926,
        4.398
    ],
    [
        -154.9025,
        57.4691,
        48.4
    ],
    [
        -116.3395,
        34.014333,
        2.3
    ],
    [
        141.9272,
        37.8866,
        41.94
    ],
    [
        -151.7035,
        58.208,
        3
    ],
    [
        -94.4383,
        15.2976,
        42.92
    ],
    [
        -111.4289,
        42.5593,
        7.96
    ],
    [
        -178.4181,
        51.7014,
        6.6
    ],
    [
        -94.2576,
        14.9344,
        12.93
    ],
    [
        -97.7823,
        37.3283,
        5.9
    ],
    [
        -154.8679,
        57.3821,
        46.4
    ],
    [
        -111.4498,
        42.5804,
        5.9
    ],
    [
        -149.1402,
        60.9584,
        19.6
    ],
    [
        -111.4462,
        42.5738,
        5.62
    ],
    [
        146.6784,
        14.1109,
        10
    ],
    [
        -117.169167,
        34.0425,
        5.43
    ],
    [
        -111.4185,
        42.5625,
        9.41
    ],
    [
        -151.7386,
        61.4915,
        80.1
    ],
    [
        -111.4151,
        42.55,
        7.52
    ],
    [
        -150.9361,
        60.2731,
        64.5
    ],
    [
        -119.442,
        37.695667,
        4.15
    ],
    [
        -67.2868,
        18.1121,
        18
    ],
    [
        -112.5162,
        46.8743,
        14.72
    ],
    [
        -118.824333,
        38.060667,
        1
    ],
    [
        -140.8767,
        61.5617,
        10
    ],
    [
        -114.410667,
        44.4485,
        6.72
    ],
    [
        -136.7235,
        59.8179,
        4.3
    ],
    [
        -90.3498,
        13.069,
        35
    ],
    [
        -174.3526,
        52.4771,
        237.56
    ],
    [
        -153.6731,
        59.5546,
        120.2
    ],
    [
        -98.529,
        15.6631,
        10
    ],
    [
        -94.4173,
        15.2922,
        52.65
    ],
    [
        128.1836,
        -7.5542,
        159.39
    ],
    [
        -98.6306,
        15.7653,
        20.71
    ],
    [
        -116.7985,
        33.504667,
        4.53
    ],
    [
        -111.4232,
        42.5578,
        7.16
    ],
    [
        -136.6348,
        59.8194,
        14.2
    ],
    [
        -111.4182,
        42.5509,
        7.02
    ],
    [
        -167.3116,
        53.3278,
        13
    ],
    [
        -111.4688,
        42.6115,
        6.14
    ],
    [
        -112.521667,
        46.8615,
        12.53
    ],
    [
        -112.521167,
        46.853,
        11.49
    ],
    [
        -150.2292,
        62.187,
        56.1
    ],
    [
        -87.8604,
        12.4905,
        60.22
    ],
    [
        -111.4283,
        42.5536,
        6.44
    ],
    [
        -111.4487,
        42.6011,
        5.82
    ],
    [
        -111.4433,
        42.6033,
        3.94
    ],
    [
        -169.4897,
        52.4554,
        37.93
    ],
    [
        -111.4503,
        42.6011,
        4.5
    ],
    [
        -153.3819,
        59.8907,
        133
    ],
    [
        -111.4091,
        42.5736,
        10.02
    ],
    [
        -111.4617,
        42.6284,
        4.97
    ],
    [
        -111.427,
        42.59,
        6.81
    ],
    [
        -146.3496,
        69.231,
        1.2
    ],
    [
        -97.1554,
        14.0483,
        13.91
    ],
    [
        -98.4915,
        15.8549,
        21.45
    ],
    [
        -152.966,
        59.8093,
        102.9
    ],
    [
        -111.5652,
        42.6019,
        9.42
    ],
    [
        120.6016,
        12.9144,
        38.64
    ],
    [
        -178.3635,
        51.6272,
        0.6
    ],
    [
        -111.4487,
        42.6201,
        8.65
    ],
    [
        -168.5488,
        52.6471,
        37
    ],
    [
        -111.4464,
        42.565,
        8.31
    ],
    [
        -119.2044,
        38.3052,
        10.6
    ],
    [
        -111.4252,
        42.5577,
        5.15
    ],
    [
        -146.2918,
        69.235,
        1
    ],
    [
        -111.4318,
        42.5604,
        7.18
    ],
    [
        -155.211833,
        19.916833,
        13.349
    ],
    [
        -146.3271,
        69.2374,
        3.8
    ],
    [
        -111.4701,
        42.6074,
        4.56
    ],
    [
        -111.4553,
        42.6057,
        2.2
    ],
    [
        -118.8863,
        39.0228,
        11.8
    ],
    [
        -66.305,
        18.603,
        82
    ],
    [
        -111.4404,
        42.601,
        4.73
    ],
    [
        -111.4423,
        42.5705,
        7.5
    ],
    [
        -116.192167,
        33.778,
        3.52
    ],
    [
        -122.040167,
        46.875333,
        6.45
    ],
    [
        -175.8004,
        51.946,
        193.7
    ],
    [
        -111.4234,
        42.6126,
        8
    ],
    [
        -97.878333,
        37.226333,
        2.17
    ],
    [
        -111.4475,
        42.5965,
        6.66
    ],
    [
        -116.297667,
        34.7275,
        4.7
    ],
    [
        -116.206167,
        33.030167,
        5.66
    ],
    [
        -94.5926,
        15.8657,
        62.07
    ],
    [
        -111.4649,
        42.5713,
        2.8
    ],
    [
        -111.3389,
        42.5698,
        5.91
    ],
    [
        -111.4134,
        42.5966,
        2.41
    ],
    [
        -121.680333,
        36.934833,
        10.93
    ],
    [
        -98.9657,
        36.5378,
        5.921
    ],
    [
        -111.4216,
        42.6147,
        2.61
    ],
    [
        -155.244,
        19.404333,
        38.634
    ],
    [
        -111.4155,
        42.5629,
        9.83
    ],
    [
        -118.9198,
        38.3864,
        5
    ],
    [
        -176.8674,
        50.427,
        38
    ],
    [
        -118.9445,
        37.642333,
        -0.52
    ],
    [
        147.742,
        44.4006,
        89.5
    ],
    [
        -93.8669,
        15.7031,
        37.36
    ],
    [
        -150.9107,
        62.993,
        122.8
    ],
    [
        -166.6897,
        53.169,
        25.5
    ],
    [
        -151.9911,
        60.3931,
        86
    ],
    [
        -143.0313,
        60.3066,
        10.2
    ],
    [
        -122.818001,
        38.801998,
        2.52
    ],
    [
        -111.484,
        42.6096,
        5
    ],
    [
        -163.0563,
        54.0093,
        14.8
    ],
    [
        -116.362167,
        33.154333,
        11.24
    ],
    [
        -165.7762,
        53.453,
        28.1
    ],
    [
        142.8932,
        41.7813,
        45
    ],
    [
        -94.5035,
        15.7644,
        57.6
    ],
    [
        -162.8991,
        53.5788,
        15.9
    ],
    [
        -112.524667,
        46.889167,
        14.06
    ],
    [
        -104.9548,
        37.0369,
        5
    ],
    [
        -177.852,
        -18.159,
        601.21
    ],
    [
        22.3039,
        38.0722,
        10
    ],
    [
        -117.1615,
        34.0365,
        4.44
    ],
    [
        170.788,
        53.8251,
        10
    ],
    [
        -178.4988,
        51.6871,
        9.2
    ],
    [
        179.9123,
        -25.0133,
        508.03
    ],
    [
        -155.376,
        19.109,
        42.633
    ],
    [
        -116.528667,
        33.143833,
        8.22
    ],
    [
        -121.1025,
        35.652333,
        4.49
    ],
    [
        -118.4795,
        34.347667,
        6.85
    ],
    [
        -146.6864,
        61.2792,
        33.7
    ],
    [
        -150.8811,
        62.6834,
        89.8
    ],
    [
        -149.9656,
        62.9587,
        88.3
    ],
    [
        -141.3315,
        60.2265,
        0
    ],
    [
        -116.793833,
        33.508,
        4.77
    ],
    [
        -175.9799,
        52.0013,
        156.3
    ],
    [
        179.9129,
        -24.5931,
        503.92
    ],
    [
        -94.5866,
        15.1076,
        24.87
    ],
    [
        -96.804,
        35.9918,
        5.961
    ],
    [
        -111.4316,
        42.5611,
        7.33
    ],
    [
        -177.9481,
        51.2072,
        22.2
    ],
    [
        -151.0079,
        59.5892,
        41.8
    ],
    [
        -148.0949,
        62.0857,
        37.5
    ],
    [
        -116.798333,
        33.501167,
        3.42
    ],
    [
        -113.170167,
        47.328333,
        19.23
    ],
    [
        -148.2865,
        62.4037,
        46.1
    ],
    [
        -147.8107,
        60.5943,
        2.7
    ],
    [
        -120.260333,
        36.150833,
        8.23
    ],
    [
        -94.5354,
        15.0816,
        39.42
    ],
    [
        -178.4031,
        51.77,
        19.4
    ],
    [
        -143.0051,
        60.2926,
        12
    ],
    [
        -117.871,
        36.511333,
        7.6
    ],
    [
        -117.1219,
        37.3848,
        6.9
    ],
    [
        -118.766333,
        37.576333,
        4.92
    ],
    [
        -94.2661,
        15.0962,
        47.3
    ],
    [
        -152.9863,
        59.5419,
        87.3
    ],
    [
        -150.7645,
        61.916,
        63.9
    ],
    [
        -150.6083,
        61.2662,
        54.7
    ],
    [
        -115.1529,
        37.0254,
        0.2
    ],
    [
        -140.1305,
        61.3941,
        3.7
    ],
    [
        -67.0151,
        18.2211,
        26
    ],
    [
        -117.1665,
        34.037667,
        5.07
    ],
    [
        -97.6874,
        36.6964,
        8
    ],
    [
        -117.168833,
        34.037667,
        4.71
    ],
    [
        -122.712167,
        38.750333,
        2.07
    ],
    [
        -122.038167,
        46.874333,
        6.38
    ],
    [
        -173.3705,
        67.5564,
        10
    ],
    [
        -95.0925,
        15.7467,
        34.06
    ],
    [
        -94.9037,
        15.4311,
        74.4
    ],
    [
        -117.169833,
        34.0395,
        6
    ],
    [
        -153.4944,
        60.3044,
        178.8
    ],
    [
        -94.8225,
        15.3927,
        47.72
    ],
    [
        -117.169,
        34.039333,
        6.34
    ],
    [
        -151.3287,
        63.2644,
        12.8
    ],
    [
        -117.034167,
        34.268333,
        -0.16
    ],
    [
        -153.915,
        59.1941,
        109.4
    ],
    [
        -117.167,
        34.037833,
        5.81
    ],
    [
        -150.4096,
        62.1404,
        0.2
    ],
    [
        -153.3522,
        59.8641,
        133.9
    ],
    [
        -97.572167,
        37.347167,
        4.85
    ],
    [
        -147.4153,
        61.11,
        0
    ],
    [
        141.7252,
        38.0198,
        68.12
    ],
    [
        -151.7877,
        59.5199,
        52.1
    ],
    [
        -122.711998,
        38.755501,
        2.76
    ],
    [
        -94.7509,
        15.2659,
        43.51
    ],
    [
        -146.8561,
        61.3045,
        25.3
    ],
    [
        -147.2491,
        60.9757,
        43.4
    ],
    [
        -173.2187,
        67.6427,
        10
    ],
    [
        -122.600667,
        43.836167,
        3.82
    ],
    [
        -112.520333,
        46.896167,
        10.28
    ],
    [
        -94.5278,
        15.3896,
        29
    ],
    [
        -146.0253,
        66.769,
        24.1
    ],
    [
        -147.452,
        60.9238,
        15.1
    ],
    [
        178.5196,
        51.817,
        106.7
    ],
    [
        -94.9747,
        15.1883,
        59.97
    ],
    [
        -67.1073,
        18.2203,
        79
    ],
    [
        -93.3515,
        14.9239,
        35.26
    ],
    [
        -111.403,
        42.6058,
        5
    ],
    [
        -146.5055,
        61.4008,
        14.7
    ],
    [
        -111.4779,
        42.6737,
        2.46
    ],
    [
        -94.442,
        15.7739,
        41.92
    ],
    [
        -94.3811,
        14.9456,
        27.79
    ],
    [
        -152.7452,
        63.1544,
        9.3
    ],
    [
        -137.9725,
        59.1241,
        13
    ],
    [
        -118.9112,
        38.3937,
        7.8
    ],
    [
        -116.383167,
        33.193,
        7.75
    ],
    [
        -152.6807,
        59.9356,
        95
    ],
    [
        -94.689,
        16.7045,
        39.46
    ],
    [
        -94.7157,
        15.408,
        32.22
    ],
    [
        -94.5751,
        15.5308,
        63.49
    ],
    [
        -94.4987,
        15.3526,
        47.21
    ],
    [
        -129.358,
        44.2464,
        10
    ],
    [
        -143.3005,
        58.2485,
        10
    ],
    [
        -178.3901,
        51.6935,
        13.2
    ],
    [
        -129.0417,
        44.4745,
        10
    ],
    [
        -152.9635,
        59.4036,
        98.3
    ],
    [
        -178.4592,
        51.7361,
        18.3
    ],
    [
        -149.5578,
        62.0025,
        41.6
    ],
    [
        -112.508667,
        46.879833,
        9.14
    ],
    [
        -172.5775,
        -16.7183,
        10
    ],
    [
        -178.0694,
        51.6811,
        2.6
    ],
    [
        -111.427,
        42.5803,
        7.86
    ],
    [
        -155.501,
        19.948333,
        38.213
    ],
    [
        -159.5442,
        56.1065,
        5.5
    ],
    [
        -129.0754,
        44.3952,
        10
    ],
    [
        -122.709167,
        38.768333,
        1.44
    ],
    [
        -122.424167,
        38.768,
        7.71
    ],
    [
        -151.0175,
        59.5958,
        36.9
    ],
    [
        -151.9885,
        60.7112,
        87.3
    ],
    [
        -136.3619,
        57.7499,
        9.3
    ],
    [
        -155.28717,
        19.4025,
        1.54
    ],
    [
        -150.1873,
        63.1024,
        94.1
    ],
    [
        -157.4513,
        66.9866,
        0.9
    ],
    [
        -147.3555,
        64.9906,
        0
    ],
    [
        -161.5776,
        54.9813,
        70.97
    ],
    [
        -158.4861,
        55.435,
        25.1
    ],
    [
        -111.4595,
        42.6646,
        8.07
    ],
    [
        -139.5516,
        60.1674,
        10.1
    ],
    [
        -99.3253,
        36.95,
        2.161
    ],
    [
        -122.883167,
        39.862333,
        5.12
    ],
    [
        -73.6167,
        -36.1497,
        25.35
    ],
    [
        -116.927167,
        35.897667,
        6.49
    ],
    [
        -153.6439,
        60.0021,
        159.1
    ],
    [
        -122.744499,
        38.774666,
        1.39
    ],
    [
        -111.767667,
        45.618,
        0.67
    ],
    [
        -121.4355,
        39.501833,
        12.05
    ],
    [
        -95.0655,
        15.7772,
        34.99
    ],
    [
        -111.014167,
        44.781833,
        8.11
    ],
    [
        -122.732833,
        38.768167,
        0.83
    ],
    [
        -122.879,
        39.861333,
        5.75
    ],
    [
        -122.712667,
        38.913333,
        2.6
    ],
    [
        -177.6127,
        -27.7277,
        147.22
    ],
    [
        -96.8073,
        35.9883,
        6.228
    ],
    [
        -96.8015,
        35.9914,
        5.85
    ],
    [
        -95.0828,
        15.537,
        19.56
    ],
    [
        -152.0546,
        60.3983,
        79.6
    ],
    [
        -122.201333,
        37.802667,
        8.55
    ],
    [
        -152.8158,
        59.9912,
        96.3
    ],
    [
        -97.5041,
        36.2908,
        8.103
    ],
    [
        -155.279159,
        19.391001,
        0.54
    ],
    [
        -94.5518,
        15.0779,
        35.94
    ],
    [
        -94.8925,
        15.5513,
        33.85
    ],
    [
        -158.4077,
        55.6085,
        30.8
    ],
    [
        -151.7854,
        60.1774,
        76.8
    ],
    [
        -94.8055,
        15.4862,
        41.24
    ],
    [
        -152.6984,
        60.153,
        94.6
    ],
    [
        -155.446,
        20.027167,
        8.137
    ],
    [
        -111.206,
        39.282333,
        -3.32
    ],
    [
        -155.281998,
        19.411833,
        2.05
    ],
    [
        -150.4114,
        60.0877,
        56
    ],
    [
        -122.723667,
        38.753833,
        1.93
    ],
    [
        -157.1285,
        55.2452,
        28.63
    ],
    [
        -174.2291,
        50.8322,
        17.6
    ],
    [
        -111.4504,
        42.6494,
        10.91
    ],
    [
        -118.8284,
        38.06,
        3.2
    ],
    [
        -178.5288,
        51.7278,
        12.4
    ],
    [
        -122.881,
        38.833667,
        2
    ],
    [
        -111.417167,
        42.555833,
        8.52
    ],
    [
        -94.4218,
        15.787,
        57.77
    ],
    [
        -155.274333,
        18.915833,
        7.212
    ],
    [
        -166.1975,
        53.2518,
        21.4
    ],
    [
        -118.9058,
        38.3558,
        8.8
    ],
    [
        -122.480833,
        38.843833,
        10.34
    ],
    [
        155.7383,
        49.4785,
        59.88
    ],
    [
        -152.857,
        67.7643,
        14.4
    ],
    [
        -178.4071,
        51.6082,
        9.4
    ],
    [
        -117.307667,
        34.0925,
        16.16
    ],
    [
        -151.043,
        60.3576,
        52.2
    ],
    [
        -94.459,
        15.3004,
        36.6
    ],
    [
        -154.8616,
        58.3062,
        104.2
    ],
    [
        -94.1719,
        15.1363,
        19.92
    ],
    [
        -120.621667,
        39.523333,
        4.94
    ],
    [
        -178.3606,
        51.5729,
        20.05
    ],
    [
        -120.5835,
        49.325,
        -0.06
    ],
    [
        -119.9184,
        39.4189,
        9.4
    ],
    [
        -118.9128,
        38.3555,
        7.9
    ],
    [
        -178.3563,
        51.6531,
        13.1
    ],
    [
        -111.071,
        44.717,
        8.3
    ],
    [
        -178.3417,
        51.6239,
        10.4
    ],
    [
        -175.3148,
        51.695,
        47.7
    ],
    [
        -94.1553,
        15.4199,
        68.05
    ],
    [
        -111.4403,
        42.5514,
        9.99
    ],
    [
        -116.274333,
        33.977333,
        4.89
    ],
    [
        -152.6619,
        59.5746,
        73.5
    ],
    [
        -148.0742,
        62.1419,
        37.4
    ],
    [
        -155.013167,
        19.393333,
        2.338
    ],
    [
        -115.497167,
        32.741,
        8.5
    ],
    [
        -178.4283,
        51.6859,
        9
    ],
    [
        -94.8484,
        15.8296,
        39.05
    ],
    [
        -118.944833,
        37.598167,
        1.8
    ],
    [
        -94.5822,
        15.0866,
        46.84
    ],
    [
        -93.9636,
        15.3251,
        65.27
    ],
    [
        -118.855667,
        37.658833,
        2.53
    ],
    [
        -177.13,
        51.4897,
        41.3
    ],
    [
        -148.3618,
        61.0444,
        0
    ],
    [
        -94.193,
        15.2562,
        35
    ],
    [
        -150.7868,
        63.1355,
        123.4
    ],
    [
        -141.7112,
        60.6453,
        16.4
    ],
    [
        -116.275,
        33.978333,
        4.74
    ],
    [
        -160.4388,
        54.8237,
        32
    ],
    [
        -94.1556,
        16.3217,
        115.13
    ],
    [
        -152.6252,
        59.9753,
        101.9
    ],
    [
        -154.7649,
        56.8018,
        3.4
    ],
    [
        -177.4826,
        51.2597,
        23.7
    ],
    [
        -119.012333,
        37.593667,
        0.37
    ],
    [
        -119.3553,
        40.6574,
        6.9
    ],
    [
        -116.386667,
        33.320333,
        5.46
    ],
    [
        -111.431,
        42.5704,
        9.32
    ],
    [
        -110.785167,
        43.612,
        -3.47
    ],
    [
        -164.4265,
        54.015,
        30.3
    ],
    [
        -152.0471,
        60.762,
        82.8
    ],
    [
        -152.7554,
        59.5701,
        80.5
    ],
    [
        -94.118,
        15.2555,
        36.22
    ],
    [
        -93.9764,
        15.3921,
        63.93
    ],
    [
        -155.8765,
        58.9325,
        12.9
    ],
    [
        -97.8555,
        37.210833,
        3.69
    ],
    [
        -94.1507,
        15.2159,
        54.84
    ],
    [
        -120.2615,
        36.143,
        9.79
    ],
    [
        -136.5542,
        59.755,
        14.4
    ],
    [
        -94.2891,
        15.5969,
        67.38
    ],
    [
        -158.2315,
        55.4677,
        18.9
    ],
    [
        -111.3875,
        42.5392,
        5
    ],
    [
        -94.4075,
        16.1573,
        92.03
    ],
    [
        -136.5009,
        59.7863,
        1.7
    ],
    [
        -151.6279,
        61.013,
        77
    ],
    [
        -66.1721,
        -22.4546,
        222.22
    ],
    [
        -117.871333,
        36.511,
        7.46
    ],
    [
        -118.943333,
        37.597,
        2.4
    ],
    [
        -150.7877,
        61.7723,
        59.6
    ],
    [
        -111.4749,
        42.5793,
        8
    ],
    [
        -94.4489,
        15.7338,
        63.09
    ],
    [
        -118.822667,
        37.604833,
        3.8
    ],
    [
        -111.4515,
        42.5732,
        7.4
    ],
    [
        -97.7026,
        36.641,
        8.008
    ],
    [
        -163.0448,
        53.9738,
        19.7
    ],
    [
        -94.601,
        15.854,
        69.04
    ],
    [
        -111.4242,
        42.579,
        6.95
    ],
    [
        126.8292,
        3.6504,
        59.54
    ],
    [
        -118.832333,
        37.5415,
        4.76
    ],
    [
        -178.3602,
        51.5792,
        17.2
    ],
    [
        -70.2262,
        -15.3425,
        224.81
    ],
    [
        -111.006167,
        44.792,
        10.46
    ],
    [
        -67.2761,
        18.0591,
        19
    ],
    [
        -116.930333,
        35.903,
        6.17
    ],
    [
        -94.5053,
        15.7495,
        68.22
    ],
    [
        -111.447,
        46.021167,
        0.93
    ],
    [
        -118.871,
        37.554833,
        4.73
    ],
    [
        -116.988,
        36.408833,
        5.76
    ],
    [
        140.9766,
        44.5128,
        265.04
    ],
    [
        -115.3876,
        37.2486,
        0
    ],
    [
        -116.931667,
        34.0345,
        15.2
    ],
    [
        -149.7897,
        67.3419,
        11.3
    ],
    [
        133.9356,
        -4.9459,
        10
    ],
    [
        -67.0237,
        -24.161,
        169.64
    ],
    [
        -152.1724,
        62.5675,
        9.9
    ],
    [
        -140.6065,
        60.0265,
        7.6
    ],
    [
        -163.0371,
        53.9395,
        13
    ],
    [
        -122.642667,
        38.4305,
        9.02
    ],
    [
        -95.1532,
        14.9116,
        21.58
    ],
    [
        -120.008833,
        39.729667,
        5.67
    ],
    [
        -153.187,
        59.0211,
        72.2
    ],
    [
        -152.0279,
        61.4535,
        96.1
    ],
    [
        169.3876,
        -19.5742,
        213.81
    ],
    [
        -150.0341,
        61.6767,
        50.7
    ],
    [
        -157.3563,
        55.6967,
        21.9
    ],
    [
        -111.4451,
        42.6157,
        5.99
    ],
    [
        -121.982833,
        37.917667,
        10.7
    ],
    [
        -173.2987,
        51.7726,
        13
    ],
    [
        -152.5944,
        59.4202,
        75.5
    ],
    [
        -94.5388,
        15.3559,
        54.35
    ],
    [
        -115.892667,
        32.718333,
        8.72
    ],
    [
        -111.4224,
        42.5665,
        6.74
    ],
    [
        -111.4255,
        42.5806,
        6
    ],
    [
        -111.4298,
        42.5744,
        7.17
    ],
    [
        -111.4585,
        42.6108,
        6.88
    ],
    [
        -111.4277,
        42.5592,
        9.39
    ],
    [
        -111.4155,
        42.5631,
        8.48
    ],
    [
        -178.5064,
        51.8445,
        13.1
    ],
    [
        -116.470167,
        34.3615,
        1.96
    ],
    [
        -111.4221,
        42.5799,
        5.91
    ],
    [
        145.5761,
        18.7533,
        262.64
    ],
    [
        -111.4167,
        42.5619,
        7.19
    ],
    [
        130.0828,
        -6.9776,
        133.54
    ],
    [
        -111.427,
        42.5842,
        7.06
    ],
    [
        -94.0129,
        15.2713,
        53.97
    ],
    [
        -25.2724,
        -59.2757,
        10
    ],
    [
        -155.2485,
        19.386833,
        31.012
    ],
    [
        -111.4304,
        42.5789,
        7.2
    ],
    [
        74.9524,
        38.8091,
        10
    ],
    [
        -111.4353,
        42.5792,
        9.03
    ],
    [
        -111.4364,
        42.5726,
        8.45
    ],
    [
        146.7566,
        13.8193,
        16.98
    ],
    [
        -146.6119,
        68.4897,
        9.7
    ],
    [
        -146.6435,
        68.4109,
        0
    ],
    [
        -94.7031,
        15.6436,
        38.39
    ],
    [
        -150.6116,
        61.8175,
        55.8
    ],
    [
        -119.027333,
        34.440333,
        12.46
    ],
    [
        -123.4665,
        48.458667,
        29.09
    ],
    [
        -118.9216,
        38.3812,
        6.9
    ],
    [
        -94.4368,
        15.1947,
        59.18
    ],
    [
        -148.2717,
        59.963,
        19.9
    ],
    [
        -146.5829,
        68.5268,
        13.9
    ],
    [
        -115.4375,
        32.7105,
        7.58
    ],
    [
        -94.6092,
        15.0415,
        60.74
    ],
    [
        -93.9169,
        15.1747,
        62.25
    ],
    [
        -94.7579,
        15.8771,
        50.37
    ],
    [
        -120.951833,
        36.388167,
        3.8
    ],
    [
        -115.433333,
        32.708,
        11.7
    ],
    [
        -115.650333,
        32.557,
        11.77
    ],
    [
        -94.536,
        15.7206,
        33.37
    ],
    [
        -94.4987,
        15.6186,
        49.66
    ],
    [
        -94.2803,
        15.4532,
        53.46
    ],
    [
        -112.5255,
        46.891167,
        14.63
    ],
    [
        -25.7043,
        -59.8211,
        10
    ],
    [
        -94.4429,
        15.8428,
        39.5
    ],
    [
        -150.7939,
        63.1602,
        125.5
    ],
    [
        -149.9696,
        65.5175,
        9.8
    ],
    [
        -116.5673,
        40.9452,
        13.7
    ],
    [
        -170.4837,
        52.2353,
        39
    ],
    [
        -152.2112,
        59.8068,
        77.5
    ],
    [
        -94.7033,
        15.6728,
        51.46
    ],
    [
        -94.6748,
        15.2159,
        35.55
    ],
    [
        -93.7794,
        15.3776,
        67.05
    ],
    [
        -94.0338,
        15.1325,
        37.84
    ],
    [
        -94.8516,
        15.6769,
        64.29
    ],
    [
        -146.6303,
        68.5196,
        9.9
    ],
    [
        -153.3862,
        58.1118,
        65.6
    ],
    [
        -178.2638,
        51.342,
        32.1
    ],
    [
        -94.0613,
        15.0808,
        29
    ],
    [
        119.1423,
        -8.6068,
        144.45
    ],
    [
        -155.238,
        65.7544,
        14.1
    ],
    [
        -121.051167,
        36.471667,
        6.53
    ],
    [
        -136.9441,
        58.6028,
        4.9
    ],
    [
        -94.6151,
        15.175,
        41.76
    ],
    [
        -97.5107,
        36.2919,
        8.117
    ],
    [
        -112.527833,
        46.862667,
        11.76
    ],
    [
        -118.507167,
        33.653,
        1.9
    ],
    [
        -152.2765,
        60.0722,
        83.8
    ],
    [
        -94.4593,
        15.3365,
        41.87
    ],
    [
        -116.8695,
        34.238,
        8.73
    ],
    [
        -146.646,
        68.5258,
        6.2
    ],
    [
        -154.1393,
        61.7136,
        2.3
    ],
    [
        -94.4341,
        15.1257,
        27.87
    ],
    [
        -146.6499,
        68.5284,
        16.7
    ],
    [
        -154.1907,
        61.6985,
        2.3
    ],
    [
        -87.913,
        38.425,
        11.76
    ],
    [
        -112.491667,
        46.891833,
        11.66
    ],
    [
        -94.9352,
        15.3169,
        41.53
    ],
    [
        -94.5559,
        15.8989,
        56.13
    ],
    [
        -146.6125,
        68.5273,
        8.3
    ],
    [
        -146.6164,
        68.5069,
        15.1
    ],
    [
        -94.2125,
        15.079,
        10
    ],
    [
        -169.2368,
        51.9836,
        19.57
    ],
    [
        -152.2744,
        61.3017,
        122.1
    ],
    [
        -95.0181,
        16.0961,
        38.88
    ],
    [
        -67.4461,
        18.7428,
        10
    ],
    [
        -94.4711,
        15.1531,
        65.5
    ],
    [
        -152.3303,
        60.1916,
        78
    ],
    [
        -146.6189,
        68.5221,
        13.6
    ],
    [
        -146.6431,
        68.5555,
        3.3
    ],
    [
        -94.3472,
        15.9092,
        62.55
    ],
    [
        -94.338,
        15.4947,
        53.82
    ],
    [
        -148.5619,
        63.1355,
        67.4
    ],
    [
        -94.644,
        15.4622,
        58.54
    ],
    [
        -94.0747,
        15.195,
        43.36
    ],
    [
        -163.2524,
        54.0919,
        10
    ],
    [
        -67.2748,
        -24.2322,
        205.92
    ],
    [
        -94.7923,
        15.6429,
        57.68
    ],
    [
        -146.6215,
        68.5087,
        13.6
    ],
    [
        -94.2803,
        15.0759,
        19.62
    ],
    [
        -146.6908,
        68.536,
        4
    ],
    [
        -153.1588,
        59.9206,
        119.8
    ],
    [
        -116.197667,
        33.036667,
        6.54
    ],
    [
        -151.8869,
        60.0725,
        77.8
    ],
    [
        -148.9394,
        63.4575,
        10.2
    ],
    [
        -118.095167,
        35.773167,
        10.47
    ],
    [
        -122.234,
        46.341167,
        11.49
    ],
    [
        -116.930333,
        35.896833,
        5.72
    ],
    [
        -153.5605,
        58.7828,
        14.7
    ],
    [
        -146.7065,
        68.5298,
        8.6
    ],
    [
        -93.8933,
        15.7086,
        79.65
    ],
    [
        -94.5492,
        15.7942,
        35.56
    ],
    [
        -149.8278,
        67.3421,
        14.8
    ],
    [
        -153.593,
        58.7481,
        11.2
    ],
    [
        -82.4369,
        7.7941,
        13.81
    ],
    [
        -94.098,
        15.37,
        28.41
    ],
    [
        -122.797167,
        38.8195,
        2.74
    ],
    [
        -155.300507,
        19.404333,
        13.76
    ],
    [
        -93.5371,
        15.6773,
        67.69
    ],
    [
        -94.4561,
        15.2969,
        47.01
    ],
    [
        -121.63,
        40.262167,
        3.32
    ],
    [
        -94.5874,
        15.6439,
        12.93
    ],
    [
        -147.7901,
        64.8033,
        13.5
    ],
    [
        -165.1288,
        53.4202,
        28.2
    ],
    [
        -111.438333,
        42.574167,
        3.5
    ],
    [
        -151.671,
        59.1673,
        61.6
    ],
    [
        -94.3911,
        16.0661,
        39.18
    ],
    [
        -111.4281,
        42.5718,
        5.53
    ],
    [
        -111.4338,
        42.5822,
        5.38
    ],
    [
        -153.3277,
        59.285,
        86
    ],
    [
        -149.056,
        67.2634,
        8.1
    ],
    [
        -163.713,
        53.9765,
        25.6
    ],
    [
        -116.2745,
        33.978,
        4.17
    ],
    [
        -94.6805,
        16.8287,
        106
    ],
    [
        -136.6323,
        59.8055,
        11.1
    ],
    [
        -151.43,
        61.3236,
        75.8
    ],
    [
        -115.598333,
        33.300667,
        5.25
    ],
    [
        -115.24,
        32.322667,
        6.67
    ],
    [
        -152.3632,
        60.1661,
        90.3
    ],
    [
        -155.314,
        18.895833,
        12.72
    ],
    [
        -119.003833,
        37.588667,
        1.64
    ],
    [
        -150.2504,
        62.3109,
        15.1
    ],
    [
        -155.1821,
        58.2348,
        101.9
    ],
    [
        -152.1655,
        60.5722,
        86.3
    ],
    [
        -153.597,
        58.7696,
        12.5
    ],
    [
        -94.1585,
        15.0785,
        47.75
    ],
    [
        -111.417833,
        42.557333,
        7.29
    ],
    [
        82.6815,
        44.316,
        35
    ],
    [
        -147.3769,
        64.9856,
        0
    ],
    [
        -146.7587,
        61.2722,
        29.5
    ],
    [
        -139.4893,
        60.1552,
        7.8
    ],
    [
        -148.7194,
        62.6908,
        57.2
    ],
    [
        -156.0231,
        58.2214,
        149.2
    ],
    [
        -121.8175,
        37.486333,
        -0.46
    ],
    [
        -97.5076,
        36.2848,
        8.171
    ],
    [
        -93.8865,
        15.3302,
        30.08
    ],
    [
        -152.3127,
        62.4824,
        115.8
    ],
    [
        -97.5069,
        36.2872,
        6.887
    ],
    [
        -112.500333,
        46.870333,
        14.95
    ],
    [
        -119.04,
        37.6285,
        -2.07
    ],
    [
        -94.0113,
        15.4861,
        55.1
    ],
    [
        -150.8637,
        60.6448,
        52.5
    ],
    [
        -116.201167,
        33.035167,
        5.64
    ],
    [
        -119.038667,
        37.624833,
        -2.91
    ],
    [
        -94.5854,
        15.5735,
        35
    ],
    [
        -119.040167,
        37.63,
        -1.66
    ],
    [
        -94.4976,
        15.7473,
        55.06
    ],
    [
        -94.0707,
        15.2209,
        55.42
    ],
    [
        -94.3905,
        15.4318,
        56.37
    ],
    [
        -122.451,
        37.990333,
        1.49
    ],
    [
        -94.2669,
        15.5886,
        57.93
    ],
    [
        -152.3787,
        62.4883,
        7.5
    ],
    [
        -168.4787,
        52.748,
        40.9
    ],
    [
        -122.756167,
        39.273333,
        4.85
    ],
    [
        -151.8681,
        59.9024,
        67.7
    ],
    [
        -94.4812,
        15.6987,
        35
    ],
    [
        -144.7621,
        65.5089,
        13.7
    ],
    [
        -150.811,
        61.2391,
        56.6
    ],
    [
        -121.065167,
        44.442833,
        -1.58
    ],
    [
        -122.7535,
        39.279333,
        8.66
    ],
    [
        -153.2239,
        60.1717,
        139.6
    ],
    [
        -153.2392,
        60.1979,
        145.3
    ],
    [
        -94.7805,
        15.528,
        44.33
    ],
    [
        -164.6706,
        53.1595,
        47.8
    ],
    [
        -112.961667,
        44.423667,
        7.65
    ],
    [
        -117.243333,
        34.049667,
        14.94
    ],
    [
        169.1397,
        -18.9749,
        151.93
    ],
    [
        -94.4084,
        14.947,
        20.03
    ],
    [
        -112.5325,
        46.863333,
        12.44
    ],
    [
        122.6478,
        18.4195,
        10
    ],
    [
        -150.5122,
        61.5519,
        57.6
    ],
    [
        -151.7722,
        60.316,
        70.9
    ],
    [
        -111.4383,
        42.5694,
        8.27
    ],
    [
        -119.013,
        37.593167,
        0.27
    ],
    [
        -111.4363,
        42.571,
        9.27
    ],
    [
        -111.4289,
        42.5733,
        13.75
    ],
    [
        -141.1502,
        60.3533,
        10
    ],
    [
        -152.5601,
        59.2544,
        64
    ],
    [
        -115.561833,
        31.0585,
        5.61
    ],
    [
        -150.6296,
        61.6699,
        64.1
    ],
    [
        -117.184167,
        34.008167,
        14.79
    ],
    [
        -118.191833,
        34.995167,
        -0.8
    ],
    [
        -94.1128,
        15.0427,
        38.05
    ],
    [
        -94.6162,
        15.5292,
        52.13
    ],
    [
        -111.4362,
        42.5723,
        6.2
    ],
    [
        151.0589,
        51.6006,
        526.16
    ],
    [
        -94.9814,
        16.231,
        63.24
    ],
    [
        166.9803,
        -12.2109,
        239.13
    ],
    [
        -94.4237,
        15.0921,
        33.24
    ],
    [
        -150.517,
        62.887,
        92.9
    ],
    [
        -95.0247,
        15.6158,
        25.92
    ],
    [
        -119.369,
        37.616167,
        3.76
    ],
    [
        -118.34,
        35.0645,
        -0.97
    ],
    [
        -117.5283,
        37.177,
        14.2
    ],
    [
        -121.9525,
        37.9215,
        -0.25
    ],
    [
        -94.339,
        15.3801,
        37.31
    ],
    [
        -157.7656,
        56.9755,
        12.7
    ],
    [
        -93.8739,
        15.6809,
        69.44
    ],
    [
        -116.792333,
        33.504167,
        6.36
    ],
    [
        -153.2184,
        60.0235,
        132.9
    ],
    [
        54.7094,
        14.7125,
        10
    ],
    [
        -153.5364,
        59.0829,
        80.6
    ],
    [
        -115.8858,
        39.5547,
        16.6
    ],
    [
        -116.084,
        33.233167,
        9.85
    ],
    [
        -112.5415,
        46.8995,
        11.59
    ],
    [
        -94.495,
        15.1404,
        36.22
    ],
    [
        -147.3249,
        60.9139,
        26.3
    ],
    [
        133.2388,
        -6.8416,
        19.98
    ],
    [
        -94.7297,
        15.3343,
        19.17
    ],
    [
        54.7693,
        14.6837,
        10
    ],
    [
        -154.153,
        61.7092,
        3.2
    ],
    [
        -122.1045,
        37.325167,
        -0.31
    ],
    [
        -116.463833,
        34.355833,
        3
    ],
    [
        -94.6852,
        15.6184,
        20.97
    ],
    [
        -94.3813,
        15.1628,
        10
    ],
    [
        130.804,
        -6.0426,
        126.88
    ],
    [
        -93.8822,
        15.7603,
        70.11
    ],
    [
        -111.4688,
        42.6127,
        7.46
    ],
    [
        -116.931,
        35.8975,
        5.55
    ],
    [
        -94.1176,
        15.3478,
        50.28
    ],
    [
        -174.8013,
        51.3347,
        33.06
    ],
    [
        -94.834,
        15.2659,
        31.94
    ],
    [
        121.5842,
        0.5634,
        87.49
    ],
    [
        -94.4164,
        15.3325,
        55.79
    ],
    [
        -94.237,
        15.3669,
        61.33
    ],
    [
        -147.7913,
        61.8643,
        40.7
    ],
    [
        -94.4908,
        15.0663,
        10
    ],
    [
        -154.1717,
        61.2338,
        0
    ],
    [
        -45.1832,
        25.2517,
        10
    ],
    [
        121.1544,
        13.7011,
        115.66
    ],
    [
        -117.863167,
        36.514,
        1.6
    ],
    [
        -119.029167,
        37.64,
        1.33
    ],
    [
        -94.8299,
        15.2537,
        51.49
    ],
    [
        -126.4015,
        40.656167,
        4.61
    ],
    [
        -120.594833,
        36.036167,
        3.51
    ],
    [
        -120.600833,
        36.033,
        2.98
    ],
    [
        51.6373,
        29.0196,
        32.54
    ],
    [
        -172.4529,
        -15.2805,
        10
    ],
    [
        -117.447333,
        34.149,
        10.6
    ],
    [
        -123.168167,
        39.1465,
        -0.58
    ],
    [
        -94.7985,
        15.5213,
        35.36
    ],
    [
        -151.0626,
        62.8988,
        105.6
    ],
    [
        -117.499333,
        33.723667,
        12.91
    ],
    [
        -94.3384,
        15.544,
        53.27
    ],
    [
        -94.4062,
        15.406,
        49.05
    ],
    [
        -94.1626,
        15.9178,
        78.53
    ],
    [
        -165.7019,
        53.1531,
        4
    ],
    [
        -93.9379,
        15.4789,
        51.37
    ],
    [
        -118.805,
        37.519,
        0.63
    ],
    [
        -92.5495,
        15.2436,
        49.04
    ],
    [
        -118.807167,
        37.5155,
        -1.34
    ],
    [
        -94.3291,
        15.5119,
        43.4
    ],
    [
        -94.3775,
        15.3318,
        55.57
    ],
    [
        -149.7176,
        61.7913,
        43
    ],
    [
        -122.826833,
        38.884833,
        0.43
    ],
    [
        -94.2597,
        15.3155,
        57.11
    ],
    [
        -94.3617,
        15.3594,
        72.43
    ],
    [
        -150.4859,
        62.9279,
        91.4
    ],
    [
        -94.2794,
        15.5765,
        57.44
    ],
    [
        140.4519,
        39.5355,
        14.54
    ],
    [
        -122.493333,
        38.505333,
        9.95
    ],
    [
        -151.1326,
        61.9648,
        66.9
    ],
    [
        -168.9923,
        52.3567,
        17.2
    ],
    [
        -122.476833,
        38.505667,
        10.55
    ],
    [
        -122.487833,
        38.504167,
        11.24
    ],
    [
        -148.8024,
        62.2347,
        27
    ],
    [
        -93.9526,
        15.348,
        66.08
    ],
    [
        -115.1528,
        36.3422,
        12.5
    ],
    [
        -142.2249,
        66.2606,
        1.6
    ],
    [
        -177.5174,
        51.2619,
        22.7
    ],
    [
        -114.2814,
        37.8092,
        5.1
    ],
    [
        -121.509333,
        40.482667,
        4.94
    ],
    [
        -116.717833,
        33.649333,
        15.22
    ],
    [
        -115.568167,
        33.822667,
        8.77
    ],
    [
        -94.4203,
        15.4936,
        64.61
    ],
    [
        -120.0794,
        39.7864,
        6.3
    ],
    [
        -94.752,
        15.6687,
        34.52
    ],
    [
        -94.251,
        15.2604,
        43.78
    ],
    [
        -116.5185,
        33.500333,
        13.87
    ],
    [
        -94.5788,
        16.0581,
        67.6
    ],
    [
        -121.437833,
        39.504833,
        12.47
    ],
    [
        -94.7875,
        15.7988,
        32.83
    ],
    [
        -122.485667,
        38.504833,
        10.49
    ],
    [
        -111.4645,
        42.6225,
        8.36
    ],
    [
        -94.4825,
        15.1089,
        36.59
    ],
    [
        -94.798,
        15.8932,
        52.08
    ],
    [
        -149.6965,
        62.1823,
        44.5
    ],
    [
        -122.486333,
        38.5055,
        8.02
    ],
    [
        -122.482833,
        38.504333,
        10.56
    ],
    [
        -122.491833,
        38.504667,
        9.32
    ],
    [
        -122.489,
        38.504333,
        8.33
    ],
    [
        -160.4655,
        55.6664,
        99.6
    ],
    [
        -147.0732,
        60.0832,
        7.7
    ],
    [
        125.9223,
        5.4358,
        106
    ],
    [
        -151.3276,
        61.5525,
        10.3
    ],
    [
        -120.0784,
        39.7853,
        6.9
    ],
    [
        -122.476167,
        38.507167,
        9.38
    ],
    [
        -155.466833,
        19.2065,
        36.007
    ],
    [
        -97.7805,
        37.3255,
        5.78
    ],
    [
        -140.1592,
        61.3969,
        4.3
    ],
    [
        -140.1624,
        61.4081,
        5
    ],
    [
        -123.050833,
        48.9275,
        23.48
    ],
    [
        -178.4879,
        51.7374,
        21.1
    ],
    [
        -154.9215,
        58.7206,
        119.4
    ],
    [
        -94.4387,
        15.3946,
        52.08
    ],
    [
        -118.8075,
        37.512833,
        1.14
    ],
    [
        -94.4897,
        15.3898,
        66.84
    ],
    [
        -94.5329,
        15.609,
        39.64
    ],
    [
        -116.622833,
        33.107167,
        12.71
    ],
    [
        -157.5627,
        66.997,
        11.1
    ],
    [
        -123.456,
        39.646667,
        9.55
    ],
    [
        -94.7484,
        15.3716,
        56.33
    ],
    [
        -121.938,
        37.831333,
        7.32
    ],
    [
        -94.834,
        15.3232,
        49.34
    ],
    [
        -94.0811,
        15.785,
        52.87
    ],
    [
        -93.9132,
        15.2837,
        68.08
    ],
    [
        -94.1725,
        15.2148,
        50.77
    ],
    [
        -159.0839,
        54.9712,
        35.5
    ],
    [
        -117.4838,
        37.3947,
        8.6
    ],
    [
        -149.4759,
        63.0882,
        87.9
    ],
    [
        -94.3904,
        15.121,
        30.23
    ],
    [
        -115.0405,
        37.2978,
        0
    ],
    [
        -94.6852,
        15.833,
        76.27
    ],
    [
        -111.444167,
        42.664333,
        8.83
    ],
    [
        -169.2139,
        52.5352,
        91.97
    ],
    [
        -110.647,
        44.396167,
        2.58
    ],
    [
        -94.4738,
        14.8297,
        45.65
    ],
    [
        -95.0003,
        15.7457,
        35.1
    ],
    [
        -94.801,
        14.8524,
        28.84
    ],
    [
        -94.7758,
        15.5339,
        42.45
    ],
    [
        -115.0136,
        37.3074,
        0
    ],
    [
        -157.4697,
        58.6313,
        13.4
    ],
    [
        -119.7805,
        38.6696,
        7.4
    ],
    [
        -94.6759,
        15.5537,
        36.84
    ],
    [
        -111.4101,
        42.5653,
        6.35
    ],
    [
        -117.778,
        36.031333,
        2.15
    ],
    [
        -94.7738,
        15.4661,
        38.21
    ],
    [
        -150.538,
        63.3273,
        125.9
    ],
    [
        -94.6365,
        15.5777,
        47.53
    ],
    [
        -111.446,
        42.6598,
        6.58
    ],
    [
        -94.7956,
        15.6082,
        34.65
    ],
    [
        -94.2068,
        15.1108,
        51.65
    ],
    [
        -164.0677,
        53.8832,
        50.9
    ],
    [
        -135.611,
        66.2631,
        33.8
    ],
    [
        -94.9743,
        15.126,
        35.68
    ],
    [
        -121.3305,
        41.068,
        11.84
    ],
    [
        -111.500667,
        45.881,
        8.81
    ],
    [
        -142.7701,
        57.7458,
        12
    ],
    [
        -118.882167,
        37.522833,
        -2.2
    ],
    [
        -155.447167,
        19.4775,
        2.47
    ],
    [
        -94.7971,
        14.6019,
        44.25
    ],
    [
        -93.8774,
        14.8705,
        34.98
    ],
    [
        -94.8976,
        15.4459,
        61.28
    ],
    [
        -104.9507,
        36.9956,
        6.27
    ],
    [
        -148.2544,
        63.717,
        83.4
    ],
    [
        -118.982833,
        37.5425,
        1.67
    ],
    [
        -148.715,
        63.9895,
        0
    ],
    [
        -94.2381,
        15.5108,
        43.98
    ],
    [
        -116.789,
        33.501333,
        5.44
    ],
    [
        -94.3508,
        15.2654,
        45.29
    ],
    [
        -122.736,
        38.759167,
        1.73
    ],
    [
        -93.7954,
        14.8479,
        70.92
    ],
    [
        -116.2104,
        36.4921,
        0
    ],
    [
        3.8455,
        72.6309,
        10
    ],
    [
        -122.8065,
        38.792167,
        2.94
    ],
    [
        -94.627,
        15.4476,
        46.76
    ],
    [
        -152.4392,
        60.165,
        78.3
    ],
    [
        -93.9103,
        15.3461,
        69.88
    ],
    [
        -152.7947,
        60.1163,
        106
    ],
    [
        -94.5535,
        15.437,
        48.5
    ],
    [
        -94.9041,
        15.1749,
        40.34
    ],
    [
        -156.0257,
        67.0569,
        3.6
    ],
    [
        -95.1989,
        15.0884,
        40.99
    ],
    [
        -94.7531,
        15.4362,
        36.4
    ],
    [
        -122.802333,
        38.820667,
        3.26
    ],
    [
        -94.1219,
        15.2941,
        54.75
    ],
    [
        -93.9647,
        15.304,
        72.81
    ],
    [
        -94.712,
        15.4284,
        47.14
    ],
    [
        -122.800667,
        38.847667,
        0.54
    ],
    [
        -94.8795,
        15.668,
        47.2
    ],
    [
        -122.8005,
        38.846333,
        0.64
    ],
    [
        -122.801666,
        38.847332,
        0.61
    ],
    [
        -94.7228,
        15.5333,
        34.69
    ],
    [
        -94.0216,
        15.4454,
        53.87
    ],
    [
        -122.761002,
        38.832501,
        0.49
    ],
    [
        -114.9828,
        37.2854,
        2.6
    ],
    [
        -93.9438,
        15.1471,
        68.27
    ],
    [
        -94.8391,
        15.6629,
        60.73
    ],
    [
        -94.0987,
        14.9089,
        42.35
    ],
    [
        -98.4714,
        36.5024,
        6.91
    ],
    [
        -94.4082,
        15.2843,
        45.81
    ],
    [
        -93.9331,
        15.1504,
        39.51
    ],
    [
        -122.800835,
        38.847832,
        0.49
    ],
    [
        -94.5946,
        15.2029,
        49.18
    ],
    [
        -122.802,
        38.848167,
        0.48
    ],
    [
        -115.8669,
        37.2911,
        8.9
    ],
    [
        -94.6096,
        15.9617,
        41.51
    ],
    [
        -94.5672,
        15.5726,
        51.13
    ],
    [
        -122.752167,
        39.287167,
        10.78
    ],
    [
        -122.765663,
        38.848667,
        6.01
    ],
    [
        -122.80883,
        38.829666,
        0.99
    ],
    [
        -68.2905,
        19.3283,
        52
    ],
    [
        -93.8789,
        15.4565,
        61.03
    ],
    [
        128.5159,
        2.4289,
        235.24
    ],
    [
        -122.805833,
        38.815333,
        2.23
    ],
    [
        -122.766,
        38.8255,
        0.39
    ],
    [
        -122.7555,
        38.775667,
        0.02
    ],
    [
        -122.7715,
        38.817333,
        -0.11
    ],
    [
        -122.771167,
        38.819333,
        -0.31
    ],
    [
        -122.556,
        38.807,
        15.91
    ],
    [
        -122.806,
        38.822,
        1.41
    ],
    [
        -122.739667,
        38.774,
        -0.49
    ],
    [
        -122.817833,
        38.815167,
        0.34
    ],
    [
        -122.800667,
        38.83,
        1.81
    ],
    [
        -94.2707,
        15.1746,
        35.87
    ],
    [
        -151.0631,
        61.4229,
        6.8
    ],
    [
        -112.541833,
        46.857167,
        12.55
    ],
    [
        -93.9067,
        15.0356,
        56.67
    ],
    [
        -163.4753,
        53.7845,
        22.98
    ],
    [
        -118.8105,
        37.463833,
        -1.37
    ],
    [
        178.621,
        51.2706,
        13.2
    ],
    [
        -116.899167,
        34.321833,
        9.91
    ],
    [
        179.0405,
        51.3724,
        44.9
    ],
    [
        -165.0538,
        52.2197,
        10.6
    ],
    [
        -150.7807,
        61.7731,
        61.9
    ],
    [
        -149.5616,
        61.4081,
        45.5
    ],
    [
        -173.812,
        51.8664,
        11.6
    ],
    [
        -154.717,
        58.7435,
        117.7
    ],
    [
        -150.7323,
        60.5323,
        52.2
    ],
    [
        -116.7945,
        33.496333,
        3.33
    ],
    [
        -169.0592,
        52.1619,
        10
    ],
    [
        -153.81,
        64.7157,
        15.2
    ],
    [
        -174.7414,
        52.1837,
        13.2
    ],
    [
        -169.2407,
        52.3318,
        38.5
    ],
    [
        -154.978833,
        19.772,
        43.163
    ],
    [
        -97.887167,
        37.203,
        6.15
    ],
    [
        -118.945167,
        34.213667,
        19.49
    ],
    [
        -97.683,
        36.6996,
        6.073
    ],
    [
        -150.6982,
        63.5777,
        11.7
    ],
    [
        -122.568333,
        48.699167,
        3.29
    ],
    [
        -111.4569,
        42.6238,
        5
    ],
    [
        -122.053667,
        37.835167,
        7.59
    ],
    [
        -163.7652,
        67.5597,
        6.1
    ],
    [
        -155.011833,
        19.399333,
        2.609
    ]
]

  constructor() {}

  public getData() {
    return this.data;
  }

  public getData1() {
    return this.data1;
  }

  public getGoogleMapsData() {
    return this.dataGM;
  }

  public getGoogleMapsData2() {
    return this.data2GM;
  }

  public getGoogleMapsData3() {
    return this.data3GM;
  }

  getLeafletMapsData() {
    return this.dataLM;
  }

  getLeafletMapsData2() {
    return this.dataLM2;
  }

  getMapboxMapsData() {
    return this.dataMB;
  }
}
