import react from "react";
import { useState } from "react";

const ReportPage = () => {
    const reportOption = ["신고 내용을 선택해주세요","혐오 발언 또는 상징" , "성희롱 또는 성적인 발언", "따돌림 또는 괴롭힘", "폭력적 발언","스팸 또는 오해의 소지가 있는 발언", "기타"];
    const EmailOption = ["직접입력","@naver.com", "@gmail.com", "@hanmail.net", "@nate.com"];
    const [reportedname ,  setReportedname] = useState("");
    const [reportedOption ,  setReportedOption] = useState(0);
    const [reportedcontent ,  setReportedcontent] = useState("");
    const [reporterEmail ,  setReporterEmail] = useState("");
    const [emailOption ,  setEmailOption] = useState(0);
    
    const handleChange = (e) => {
        setReportedname(e.target.value);
    }
    const onselectChange = (e)  => {
        setReportedOption(e.target.value);
    }
    const ontextchange = (e) => {
        setReportedcontent(e.target.value);
    }

    const onEmailchange = (e) => {
        setReporterEmail(e.target.value);
    }

    const onEmailOption = (e) => {
        setEmailOption(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        if(reportedname === ""){
            alert("신고할 닉네임을 입력해주세요");
        }
        else{
            alert("정상적으로 신고가 접수 되었습니다.");
        }
        console.log("신고할 닉네임 : "+reportedname+", content : "+ reportOption[reportedOption] + " / " +reportedcontent + 
        " 받을 연락처 : "+reporterEmail+EmailOption[emailOption]);
        setReportedname("");
        setReportedOption('0');
        setReportedcontent("");
        setReporterEmail("");
        setEmailOption('0');
    } 
    return(
        <form>
            <label htmlFor="reportedName"> 신고할 닉네임 </label>
            <input
            value={reportedname}
            id="reportedName"
            placeholder = "신고할 닉네임을 적어주세요"
            onChange = {handleChange}
            required
            >
            </input>
            <br/>
            <label htmlFor="reportedContent">신고 내용</label>
            <br/>
            <select onChange = {onselectChange}  value={reportedOption}>
               <option value={'0'}>{reportOption[0]}</option>
               <option value={'1'}>{reportOption[1]}</option>
               <option value={'2'}>{reportOption[2]}</option>
               <option value={'3'}>{reportOption[3]}</option>
               <option value={'4'}>{reportOption[4]}</option>
               <option value={'5'}>{reportOption[5]}</option>
               <option value={'6'}>{reportOption[6]}</option>
               <option value={'7'}>{reportOption[7]}</option>
            </select>
            <br/>
            <textarea
            value={reportedcontent}
            id = "reportedContent"
            cols = "50"
            rows = "10"
            placeholder = "신고할 내용을 적어주세요"
            onChange = {ontextchange}
            ></textarea>
            <br/>
            <label> 답변 받을 이메일 </label>
            <input
            value={reporterEmail}
            id = "reporterEmail"
            type = "text"
            placeholder="ex)Hong1234@naver.com"
            onChange = {onEmailchange}
            />
            <select onChange={onEmailOption} value={emailOption}>
                <option value={'0'}>{EmailOption[0]}</option>
                <option value={'1'}>{EmailOption[1]}</option>
                <option value={'2'}>{EmailOption[2]}</option>
                <option value={'3'}>{EmailOption[3]}</option>
                <option value={'4'}>{EmailOption[4]}</option>
            </select>
            <br/>
            <button onClick={submit}>신고하기</button>
        </form>
    );
};

export default ReportPage;