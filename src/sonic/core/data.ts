import { v2d_t } from "./v2d"

export interface data_config_t {
  [key: string]: string
}

export interface data_language_t {
  [key: string]: string
}

export interface data_level_t {
  name: string,
  act: number,
  theme: string,
  bgtheme: string,
  spawn_point: v2d_t,
  music: string,
  bricklist: data_level_bricklist_t[],
  itemlist: data_level_itemlist_t[],
  enemylist: data_level_enemylist_t[],
  dialogbox: data_level_dialogbox_t[]
}

export interface data_level_bricklist_t {
  id: number,
  xpos: number,
  ypos: number
}

export interface data_level_itemlist_t {
  id: number,
  xpos: number,
  ypos: number
}

export interface data_level_enemylist_t {
  id: number,
  xpos: number,
  ypos: number
}

export interface data_level_dialogbox_t {
  xpos: number,
  ypos: number,
  width: number,
  height: number,
  title: string,
  message: string

}

export interface data_objects_t {
  [key: string]: data_object_t
}

export interface data_object_t {
  requires: string,
  state: {
    name: string,
    list: any[]
  }
}

export interface data_quest_t {
  name: string,
  description: string,
  image: string,
  show_ending: boolean,
  levels: string[]
}

export interface data_sprite_t {
  [key: string]: {
    source_file: string,
    source_rect: {
      xpos: number,
      ypos: number,
      width: number,
      height: number
    },
    frame_size: {
      width: number,
      height: number
    },
    hot_spot: {
      xpos: number,
      ypos: number
    },
    animations: data_sprite_animation_t[]
  }  
}

export interface data_sprite_animation_t {
  repeat: boolean,
  fps: number,
  data: number[]
}

export interface data_theme_t {
  bg: data_theme_bg_t[]
  bricks: data_theme_bricks_t[]
}

export interface data_theme_bg_t {
  initial_position: {
    xpos: number,
    ypos: number
  },
  scroll_speed: {
    xspeed: number,
    yspeed: number
  },
  behavior: string,
  repeat_x: boolean,
  repeat_y: boolean,
  zindex: number,
  sprite: {
    source_rect: {
      xpos: number,
      ypos: number,
      width: number,
      height: number
    },
    frame_size: {
      width: number,
      height: number
    },
    animations: {
      repeat: boolean,
      fps: number,
      data: number[]
    }
  }
}

export interface data_theme_bricks_t {
  type: string,
  behavior: string,
  angle: number,
  zindex: number
  sprite: {
    source_rect: {
      xpos: number,
      ypos: number,
      width: number,
      height: number
    },
    frame_size: {
      width: number,
      height: number
    },
    animations: {
      repeat: boolean,
      fps: number,
      data: number[]
    }
  }
}