import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { loginStore } from "Store/loginStore";

const KakaoLoginRequest = async () => {
  const { setLoginData } = loginStore();
  try {
    const code = new URL(window.location.href).searchParams.get("code");
    const response = await axios.post("/account/kakaologinrequest", {
      code: code,
    });
    setLoginData(response.data.access_token, response.data.user_id);
    // console.log(response);
  } catch (err) {
    console.log(err);
  }
};

const KakaoCallback = () => {
  KakaoLoginRequest();

  const navigate = useNavigate();
  useEffect(() => {
    navigate("content", { replace: true });
  });

  return null;
};

export default KakaoCallback;
