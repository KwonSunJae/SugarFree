/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react'
import React from 'react';
const img_ls=["","candy_candyBall_250.png","candy_cane_250.png","candy_chup_250.png","candy_chupa_250.png",
"candy_lollipop_250.png","candy_plastick_250.png","candy_roll_250.png","candy_stick_250.png",
"chocolate_bar_250.png","chocolate_bar2_250.png","chocolate_box_250.png","chocolate_boxgift_250.png","chocolate_chocolate_250.png",
"chocolate_gana_250.png","chocolate_mush_250.png","chocolate_snack_250.png","etc_airpod_250.png","etc_bbbear_250.png","etc_doll_250.png",
"etc_goldring_250.png","etc_lipstick_250.png","etc_pebriz_250.png","etc_perfume_250.png","etc_ring_250.png","humor_100_250.png",
"humor_apple_250.png","humor_bulga_250.png","humor_concrete_250.png","humor_fish_250.png","humor_mosquito_250.png","humor_soju_250.png",
"humor_yourgf_250.png"]

function Bounce(props) {
    return (
        <div>
            <div className="wrap">
                <img className="box" css={boxStyle} src={'/img/'+img_ls[props.emoji_num]}></img>
            </div>
        </div>
    )
}

const floating = keyframes`
    0 {
        transform: translateY(0);    
    }
    50% {
        transform: translateY(-15px);
    }
    100% {
        transform: translateY(0);
    }
`

const boxStyle = css`
    width: 50px; 
    height: 50px; 
    border-radius: 100%;
    animation: ${floating} 2s ease infinite;
`


export default Bounce