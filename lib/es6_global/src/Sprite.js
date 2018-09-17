

import * as Caml_obj from "../../../node_modules/bs-platform/lib/es6/caml_obj.js";
import * as Caml_int32 from "../../../node_modules/bs-platform/lib/es6/caml_int32.js";

function setup_sprite($staropt$star, $staropt$star$1, $staropt$star$2, img_src, max_frames, max_ticks, frame_size, src_offset) {
  var loop = $staropt$star ? $staropt$star[0] : true;
  var bbox_offset = $staropt$star$1 ? $staropt$star$1[0] : /* tuple */[
      0,
      0
    ];
  var bbox_size = $staropt$star$2 ? $staropt$star$2[0] : /* tuple */[
      0,
      0
    ];
  var bbox_size$1 = Caml_obj.caml_equal(bbox_size, /* tuple */[
        0,
        0
      ]) ? frame_size : bbox_size;
  var img_src$1 = "./sprites/" + img_src;
  return /* record */[
          /* max_frames */max_frames,
          /* max_ticks */max_ticks,
          /* img_src */img_src$1,
          /* frame_size */frame_size,
          /* src_offset */src_offset,
          /* bbox_offset */bbox_offset,
          /* bbox_size */bbox_size$1,
          /* loop */loop
        ];
}

function make_enemy(param) {
  var dir = param[1];
  switch (param[0]) {
    case 0 : 
        return setup_sprite(/* None */0, /* Some */[/* tuple */[
                      1,
                      1
                    ]], /* Some */[/* tuple */[
                      14,
                      14
                    ]], "enemies.png", 2, 10, /* tuple */[
                    16,
                    16
                  ], /* tuple */[
                    0,
                    128
                  ]);
    case 1 : 
        if (dir) {
          return setup_sprite(/* None */0, /* Some */[/* tuple */[
                        1,
                        10
                      ]], /* Some */[/* tuple */[
                        11,
                        16
                      ]], "enemies.png", 2, 10, /* tuple */[
                      16,
                      27
                    ], /* tuple */[
                      32,
                      69
                    ]);
        } else {
          return setup_sprite(/* None */0, /* Some */[/* tuple */[
                        4,
                        10
                      ]], /* Some */[/* tuple */[
                        11,
                        16
                      ]], "enemies.png", 2, 10, /* tuple */[
                      16,
                      27
                    ], /* tuple */[
                      0,
                      69
                    ]);
        }
    case 2 : 
        if (dir) {
          return setup_sprite(/* None */0, /* Some */[/* tuple */[
                        1,
                        10
                      ]], /* Some */[/* tuple */[
                        11,
                        16
                      ]], "enemies.png", 2, 10, /* tuple */[
                      16,
                      27
                    ], /* tuple */[
                      32,
                      5
                    ]);
        } else {
          return setup_sprite(/* None */0, /* Some */[/* tuple */[
                        4,
                        10
                      ]], /* Some */[/* tuple */[
                        11,
                        16
                      ]], "enemies.png", 2, 10, /* tuple */[
                      16,
                      27
                    ], /* tuple */[
                      0,
                      5
                    ]);
        }
    case 3 : 
        return setup_sprite(/* None */0, /* Some */[/* tuple */[
                      2,
                      2
                    ]], /* Some */[/* tuple */[
                      12,
                      13
                    ]], "enemies.png", 4, 10, /* tuple */[
                    16,
                    16
                  ], /* tuple */[
                    0,
                    96
                  ]);
    case 4 : 
        return setup_sprite(/* None */0, /* Some */[/* tuple */[
                      2,
                      2
                    ]], /* Some */[/* tuple */[
                      12,
                      13
                    ]], "enemies.png", 4, 10, /* tuple */[
                    16,
                    16
                  ], /* tuple */[
                    0,
                    32
                  ]);
    
  }
}

function make_particle(param) {
  switch (param) {
    case 0 : 
        return setup_sprite(/* None */0, /* None */0, /* None */0, "enemies.png", 1, 0, /* tuple */[
                    16,
                    16
                  ], /* tuple */[
                    0,
                    144
                  ]);
    case 1 : 
        return setup_sprite(/* None */0, /* None */0, /* None */0, "chunks.png", 1, 0, /* tuple */[
                    8,
                    8
                  ], /* tuple */[
                    0,
                    0
                  ]);
    case 2 : 
        return setup_sprite(/* None */0, /* None */0, /* None */0, "chunks.png", 1, 0, /* tuple */[
                    8,
                    8
                  ], /* tuple */[
                    8,
                    0
                  ]);
    case 3 : 
        return setup_sprite(/* None */0, /* None */0, /* None */0, "score.png", 1, 0, /* tuple */[
                    12,
                    8
                  ], /* tuple */[
                    0,
                    0
                  ]);
    case 4 : 
        return setup_sprite(/* None */0, /* None */0, /* None */0, "score.png", 1, 0, /* tuple */[
                    12,
                    9
                  ], /* tuple */[
                    0,
                    9
                  ]);
    case 5 : 
        return setup_sprite(/* None */0, /* None */0, /* None */0, "score.png", 1, 0, /* tuple */[
                    12,
                    9
                  ], /* tuple */[
                    0,
                    18
                  ]);
    case 6 : 
        return setup_sprite(/* None */0, /* None */0, /* None */0, "score.png", 1, 0, /* tuple */[
                    12,
                    9
                  ], /* tuple */[
                    0,
                    27
                  ]);
    case 7 : 
        return setup_sprite(/* None */0, /* None */0, /* None */0, "score.png", 1, 0, /* tuple */[
                    14,
                    9
                  ], /* tuple */[
                    13,
                    0
                  ]);
    case 8 : 
        return setup_sprite(/* None */0, /* None */0, /* None */0, "score.png", 1, 0, /* tuple */[
                    14,
                    9
                  ], /* tuple */[
                    13,
                    9
                  ]);
    case 9 : 
        return setup_sprite(/* None */0, /* None */0, /* None */0, "score.png", 1, 0, /* tuple */[
                    14,
                    9
                  ], /* tuple */[
                    13,
                    18
                  ]);
    case 10 : 
        return setup_sprite(/* None */0, /* None */0, /* None */0, "score.png", 1, 0, /* tuple */[
                    14,
                    9
                  ], /* tuple */[
                    13,
                    27
                  ]);
    
  }
}

function make_type(typ, dir) {
  switch (typ.tag | 0) {
    case 0 : 
        var pt = typ[0];
        var spr_type = /* tuple */[
          typ[1],
          dir
        ];
        if (pt) {
          var param = spr_type;
          var typ$1 = param[0];
          if (param[1]) {
            switch (typ$1) {
              case 0 : 
                  return setup_sprite(/* None */0, /* Some */[/* tuple */[
                                1,
                                1
                              ]], /* Some */[/* tuple */[
                                11,
                                15
                              ]], "mario-small.png", 1, 0, /* tuple */[
                              16,
                              16
                            ], /* tuple */[
                              0,
                              32
                            ]);
              case 1 : 
                  return setup_sprite(/* None */0, /* Some */[/* tuple */[
                                2,
                                1
                              ]], /* Some */[/* tuple */[
                                13,
                                15
                              ]], "mario-small.png", 2, 10, /* tuple */[
                              16,
                              16
                            ], /* tuple */[
                              16,
                              48
                            ]);
              case 2 : 
              case 3 : 
                  return setup_sprite(/* None */0, /* Some */[/* tuple */[
                                2,
                                1
                              ]], /* Some */[/* tuple */[
                                12,
                                15
                              ]], "mario-small.png", 3, 5, /* tuple */[
                              16,
                              16
                            ], /* tuple */[
                              16,
                              32
                            ]);
              case 4 : 
                  return setup_sprite(/* None */0, /* Some */[/* tuple */[
                                1,
                                5
                              ]], /* Some */[/* tuple */[
                                14,
                                10
                              ]], "mario-small.png", 1, 0, /* tuple */[
                              16,
                              16
                            ], /* tuple */[
                              0,
                              64
                            ]);
              
            }
          } else {
            switch (typ$1) {
              case 0 : 
                  return setup_sprite(/* None */0, /* Some */[/* tuple */[
                                3,
                                1
                              ]], /* Some */[/* tuple */[
                                11,
                                15
                              ]], "mario-small.png", 1, 0, /* tuple */[
                              16,
                              16
                            ], /* tuple */[
                              0,
                              0
                            ]);
              case 1 : 
                  return setup_sprite(/* None */0, /* Some */[/* tuple */[
                                2,
                                1
                              ]], /* Some */[/* tuple */[
                                13,
                                15
                              ]], "mario-small.png", 2, 10, /* tuple */[
                              16,
                              16
                            ], /* tuple */[
                              16,
                              16
                            ]);
              case 2 : 
              case 3 : 
                  return setup_sprite(/* None */0, /* Some */[/* tuple */[
                                2,
                                1
                              ]], /* Some */[/* tuple */[
                                12,
                                15
                              ]], "mario-small.png", 3, 5, /* tuple */[
                              16,
                              16
                            ], /* tuple */[
                              16,
                              0
                            ]);
              case 4 : 
                  return setup_sprite(/* None */0, /* Some */[/* tuple */[
                                1,
                                5
                              ]], /* Some */[/* tuple */[
                                14,
                                10
                              ]], "mario-small.png", 1, 0, /* tuple */[
                              16,
                              16
                            ], /* tuple */[
                              0,
                              64
                            ]);
              
            }
          }
        } else {
          var param$1 = spr_type;
          var typ$2 = param$1[0];
          if (param$1[1]) {
            switch (typ$2) {
              case 0 : 
                  return setup_sprite(/* None */0, /* Some */[/* tuple */[
                                1,
                                1
                              ]], /* Some */[/* tuple */[
                                13,
                                25
                              ]], "mario-big.png", 1, 0, /* tuple */[
                              16,
                              26
                            ], /* tuple */[
                              16,
                              69
                            ]);
              case 1 : 
                  return setup_sprite(/* None */0, /* Some */[/* tuple */[
                                2,
                                1
                              ]], /* Some */[/* tuple */[
                                12,
                                25
                              ]], "mario-big.png", 1, 0, /* tuple */[
                              16,
                              26
                            ], /* tuple */[
                              48,
                              70
                            ]);
              case 2 : 
              case 3 : 
                  return setup_sprite(/* None */0, /* Some */[/* tuple */[
                                2,
                                1
                              ]], /* Some */[/* tuple */[
                                13,
                                25
                              ]], "mario-big.png", 4, 10, /* tuple */[
                              16,
                              27
                            ], /* tuple */[
                              0,
                              101
                            ]);
              case 4 : 
                  return setup_sprite(/* None */0, /* Some */[/* tuple */[
                                2,
                                10
                              ]], /* Some */[/* tuple */[
                                13,
                                17
                              ]], "mario-big.png", 1, 0, /* tuple */[
                              16,
                              27
                            ], /* tuple */[
                              32,
                              69
                            ]);
              
            }
          } else {
            switch (typ$2) {
              case 0 : 
                  return setup_sprite(/* None */0, /* Some */[/* tuple */[
                                2,
                                1
                              ]], /* Some */[/* tuple */[
                                13,
                                25
                              ]], "mario-big.png", 1, 0, /* tuple */[
                              16,
                              27
                            ], /* tuple */[
                              16,
                              5
                            ]);
              case 1 : 
                  return setup_sprite(/* None */0, /* Some */[/* tuple */[
                                2,
                                1
                              ]], /* Some */[/* tuple */[
                                12,
                                25
                              ]], "mario-big.png", 1, 0, /* tuple */[
                              16,
                              26
                            ], /* tuple */[
                              48,
                              6
                            ]);
              case 2 : 
              case 3 : 
                  return setup_sprite(/* None */0, /* Some */[/* tuple */[
                                2,
                                1
                              ]], /* Some */[/* tuple */[
                                13,
                                25
                              ]], "mario-big.png", 4, 10, /* tuple */[
                              16,
                              27
                            ], /* tuple */[
                              0,
                              37
                            ]);
              case 4 : 
                  return setup_sprite(/* None */0, /* Some */[/* tuple */[
                                2,
                                10
                              ]], /* Some */[/* tuple */[
                                13,
                                17
                              ]], "mario-big.png", 1, 0, /* tuple */[
                              16,
                              27
                            ], /* tuple */[
                              32,
                              5
                            ]);
              
            }
          }
        }
    case 1 : 
        return make_enemy(/* tuple */[
                    typ[0],
                    dir
                  ]);
    case 2 : 
        var param$2 = typ[0];
        switch (param$2) {
          case 0 : 
              return setup_sprite(/* None */0, /* Some */[/* tuple */[
                            2,
                            0
                          ]], /* Some */[/* tuple */[
                            12,
                            16
                          ]], "items.png", 1, 0, /* tuple */[
                          16,
                          16
                        ], /* tuple */[
                          0,
                          0
                        ]);
          case 1 : 
              return setup_sprite(/* None */0, /* None */0, /* None */0, "items.png", 1, 0, /* tuple */[
                          16,
                          16
                        ], /* tuple */[
                          0,
                          188
                        ]);
          case 2 : 
              return setup_sprite(/* None */0, /* None */0, /* None */0, "items.png", 1, 0, /* tuple */[
                          16,
                          16
                        ], /* tuple */[
                          16,
                          48
                        ]);
          case 3 : 
              return setup_sprite(/* None */0, /* Some */[/* tuple */[
                            3,
                            0
                          ]], /* Some */[/* tuple */[
                            12,
                            16
                          ]], "items.png", 3, 15, /* tuple */[
                          16,
                          16
                        ], /* tuple */[
                          0,
                          80
                        ]);
          
        }
    case 3 : 
        var param$3 = typ[0];
        if (typeof param$3 === "number") {
          switch (param$3) {
            case 0 : 
                return setup_sprite(/* None */0, /* None */0, /* None */0, "blocks.png", 1, 0, /* tuple */[
                            16,
                            16
                          ], /* tuple */[
                            0,
                            32
                          ]);
            case 1 : 
                return setup_sprite(/* None */0, /* None */0, /* None */0, "blocks.png", 5, 10, /* tuple */[
                            16,
                            16
                          ], /* tuple */[
                            0,
                            0
                          ]);
            case 2 : 
                return setup_sprite(/* None */0, /* None */0, /* None */0, "blocks.png", 1, 0, /* tuple */[
                            16,
                            16
                          ], /* tuple */[
                            0,
                            48
                          ]);
            case 3 : 
                return setup_sprite(/* None */0, /* None */0, /* None */0, "blocks.png", 1, 0, /* tuple */[
                            16,
                            16
                          ], /* tuple */[
                            0,
                            64
                          ]);
            case 4 : 
                return setup_sprite(/* None */0, /* None */0, /* None */0, "panel.png", 3, 15, /* tuple */[
                            26,
                            26
                          ], /* tuple */[
                            0,
                            0
                          ]);
            case 5 : 
                return setup_sprite(/* None */0, /* None */0, /* None */0, "ground.png", 1, 0, /* tuple */[
                            16,
                            16
                          ], /* tuple */[
                            0,
                            32
                          ]);
            
          }
        } else {
          return setup_sprite(/* None */0, /* None */0, /* None */0, "blocks.png", 4, 15, /* tuple */[
                      16,
                      16
                    ], /* tuple */[
                      0,
                      16
                    ]);
        }
    
  }
}

function make_from_params(params, context) {
  var img = document.createElement("img");
  img.src = params[/* img_src */2];
  return /* record */[
          /* params */params,
          /* context */context,
          /* frame */[0],
          /* ticks */[0],
          /* img */img
        ];
}

function make(spawn, dir, context) {
  var params = make_type(spawn, dir);
  return make_from_params(params, context);
}

function make_bgd(context) {
  var params = setup_sprite(/* None */0, /* None */0, /* None */0, "bgd-1.png", 1, 0, /* tuple */[
        512,
        256
      ], /* tuple */[
        0,
        0
      ]);
  return make_from_params(params, context);
}

function make_particle$1(ptyp, context) {
  var params = make_particle(ptyp);
  return make_from_params(params, context);
}

function transform_enemy(enemy_typ, spr, dir) {
  var params = make_enemy(/* tuple */[
        enemy_typ,
        dir
      ]);
  var img = document.createElement("img");
  img.src = params[/* img_src */2];
  spr[/* params */0] = params;
  spr[/* img */4] = img;
  return /* () */0;
}

function update_animation(spr) {
  var curr_ticks = spr[/* ticks */3][0];
  if (curr_ticks >= spr[/* params */0][/* max_ticks */1]) {
    spr[/* ticks */3][0] = 0;
    if (spr[/* params */0][/* loop */7]) {
      spr[/* frame */2][0] = Caml_int32.mod_(spr[/* frame */2][0] + 1 | 0, spr[/* params */0][/* max_frames */0]);
      return /* () */0;
    } else {
      return 0;
    }
  } else {
    spr[/* ticks */3][0] = curr_ticks + 1 | 0;
    return /* () */0;
  }
}

export {
  setup_sprite ,
  make ,
  make_bgd ,
  make_particle$1 as make_particle,
  transform_enemy ,
  update_animation ,
  
}
/* No side effect */
