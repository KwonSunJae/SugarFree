import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'

const GiftOption = ["사탕", "초콜릿", "기타", "유머"];
const GiftList = ["candyList","chocoList","etcList","humorList"];
const candyList = ["candy_candyBall_250.png","candy_cane_250.png","candy_chup_250.png","candy_chupa_250.png","candy_lollipop_250.png","candy_plastick_250.png"
,"candy_roll_250.png","candy_stick_250.png"];
const chocoList = ["chocolate_bar_250.png", "chocolate_bar2_250.png", "chocolate_box_250.png", "chocolate_boxgift_250.png", "chocolate_chocolate_250.png",
"chocolate_gana_250.png","chocolate_mush_250.png","chocolate_snack_250.png"];
const etcList = ["etc_airpod_250.png", "etc_bbbear_250.png", "etc_doll_250.png", "etc_goldring_250.png", "etc_lipstick_250.png", "etc_pebriz_250.png",
"etc_perfume_250.png", "etc_ring_250.png"];
const humorList = ["humor_100_250.png", "humor_apple_250.png", "humor_bulga_250.png", "humor_concrete_250.png", "humor_fish_250.png", "humor_mosquito_250.png",
"humor_soju_250.png", "humor_yourgf_250.png"];


const SelectGift = () =>{
    const navigate = useNavigate();
    const [choiceGift, setChoiceGift] = useState("");
    const [giftoption, setGiftoption] = useState("0");
    const choiceGiftOption = (e) => {
        setGiftoption(e.target.value);
    }
    const clickitem = (e) => {
        //여기에 css 추가 : 배경색 변경
        setChoiceGift(e.target);
        console.log(e.target);
        console.log(e.target.alt);
    }

    const WriteMessage = () => {
        if(choiceGift === ""){
            alert("선물을 선택하지 않았어요. 선물을 골라주세요!");
        }else {
            navigate("/givecandy/write-message");
            setChoiceGift("");
            setGiftoption("0");
        }
    }
    return(
        <div>
          <style>
             @import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&display=swap');
          </style>
          <br></br>
          <p className="font1">선물 보내기</p>
          <div>
             {/* userid 추가해주세요 */}
            <p>님에게 줄 선물을 골라주세요</p>
            <br/>
            <form onChange={choiceGiftOption}>
                <input type="radio" id="candy" name="gift" value="0" hidden/>
                <label htmlFor="candy">{GiftOption[0]}</label>
                <span> | </span>
                <input type="radio" id="choco" name="gift" value="1" hidden/>
                <label htmlFor="choco">{GiftOption[1]}</label>
                <span> | </span>
                <input type="radio" id="etc" name="gift" value="2" hidden/>
                <label htmlFor="etc">{GiftOption[2]}</label>
                <span> | </span>
                <input type="radio" id="humor" name="gift" value="3" hidden/>
                <label htmlFor="humor">{GiftOption[3]}</label>
            </form>
            <div className="showgift">
                {giftoption === "0" ? candyList.map((item, index)=> <img width="100" height="100" onClick={clickitem} key={index} src={"/img/"+item} alt={GiftList[0]+"["+index+"]"} />) : null}
                {giftoption === "1" ? chocoList.map((item, index)=> <img width="100" height="100" onClick={clickitem} key={index} src={"/img/"+item} alt={GiftList[1]+"["+index+"]"}/>) : null}
                {giftoption === "2" ? etcList.map((item, index)=> <img width="100" height="100" onClick={clickitem} key={index} src={"/img/"+item} alt={GiftList[2]+"["+index+"]"}/>) : null}
                {giftoption === "3" ? humorList.map((item, index)=> <img width="100" height="100" onClick={clickitem} key={index} src={"/img/"+item} alt={GiftList[3]+"["+index+"]"} />) : null}
            </div>
        </div>
          <button className="imgbutton" onClick={WriteMessage}><img src={"/img/btn_next_light_250.png"} height="150" width="150" /></button>
        </div>
    );
}

export default SelectGift;