import react from "react";

const SettingPage = () => {

    const quit = () => {
        alert("탈퇴 완료");
    }
    return (
        <div>
            <h3>정말 떠나실 건 가요?</h3>
            <button onClick={quit}>탈퇴</button>
        </div>
    );
};

export default SettingPage;