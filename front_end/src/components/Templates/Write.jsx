import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import SelectImage from "components/Molecules/SelectImage";
import ToggleFeeling from "components/Molecules/ToggleFeeling";

let check_file_type = new Array();
check_file_type = ["jpg", "jfif", "png", "jpeg", "pjpeg", "pjp"];

export default function Write() {
  const [file, setFile] = useState("");
  const [previewURL, setPreviewURL] = useState(
    "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9Ijg2IiB5MT0iMjYuMzc1MTMiIHgyPSI4NiIgeTI9IjE0NC44ODMxMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0xIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMxYTZkZmYiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNjODIyZmYiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMjEuNSIgeTE9IjMyLjI1IiB4Mj0iMjEuNSIgeTI9IjQzLjA1Mzc1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTIiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzhhYjRmZiI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2U0OTJmZiI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIxNTAuNSIgeTE9IjMyLjI1IiB4Mj0iMTUwLjUiIHkyPSI0My4wNTM3NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0zIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM4YWI0ZmYiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlNDkyZmYiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMjEuNSIgeTE9IjEyOSIgeDI9IjIxLjUiIHkyPSIxMzkuODAzNzUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItNCI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjOGFiNGZmIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZTQ5MmZmIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjE1MC41IiB5MT0iMTI5IiB4Mj0iMTUwLjUiIHkyPSIxMzkuODAzNzUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItNSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjOGFiNGZmIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZTQ5MmZmIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9Ijg2IiB5MT0iNTEuNTgzODgiIHgyPSI4NiIgeTI9IjEyMC41MjkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItNiI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjOGFiNGZmIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZTQ5MmZmIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9Ijg2IiB5MT0iMjYuMzc1MTMiIHgyPSI4NiIgeTI9IjE0NC44ODMxMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci03Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMxYTZkZmYiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNjODIyZmYiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMjEuNSIgeTE9IjMyLjI1IiB4Mj0iMjEuNSIgeTI9IjQzLjA1Mzc1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTgiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzhhYjRmZiI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2U0OTJmZiI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIxNTAuNSIgeTE9IjMyLjI1IiB4Mj0iMTUwLjUiIHkyPSI0My4wNTM3NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci05Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM4YWI0ZmYiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlNDkyZmYiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMjEuNSIgeTE9IjEyOSIgeDI9IjIxLjUiIHkyPSIxMzkuODAzNzUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMTAiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzhhYjRmZiI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2U0OTJmZiI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIxNTAuNSIgeTE9IjEyOSIgeDI9IjE1MC41IiB5Mj0iMTM5LjgwMzc1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTExIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM4YWI0ZmYiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlNDkyZmYiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iODYiIHkxPSI1MS41ODM4OCIgeDI9Ijg2IiB5Mj0iMTIwLjUyOSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0xMiI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjOGFiNGZmIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZTQ5MmZmIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjEzNy4wNjI1IiB5MT0iMTAyLjU3MzAxIiB4Mj0iMTM3LjA2MjUiIHkyPSIxNzEuNDQwMTkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMTMiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzFhNmRmZiI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2M4MjJmZiI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIxMzcuMDYyNSIgeTE9IjEwMi4xMjUiIHgyPSIxMzcuMDYyNSIgeTI9IjE3MiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0xNCI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMWE2ZGZmIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjYzgyMmZmIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMTcydi0xNzJoMTcydjE3MnoiIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSI+PC9wYXRoPjxnIGlkPSJvcmlnaW5hbC1pY29uIiBzdHJva2U9Im5vbmUiIG9wYWNpdHk9IjAiIHZpc2liaWxpdHk9ImhpZGRlbiI+PHBhdGggZD0iTTE1My4xODc1LDEyNC4wMDY2M3YtNzYuMDEzMjVjNC42MjUxOSwtMS4yMDEzMSA4LjA2MjUsLTUuMzc1IDguMDYyNSwtMTAuMzY4MzdjMCwtNS45Mjg2MiAtNC44MjEzNywtMTAuNzUgLTEwLjc1LC0xMC43NWMtNC45OTYwNiwwIC05LjE2NzA2LDMuNDQgLTEwLjM2ODM3LDguMDYyNWgtMTA4LjI2MzI1Yy0xLjIwMTMxLC00LjYyMjUgLTUuMzcyMzEsLTguMDYyNSAtMTAuMzY4MzcsLTguMDYyNWMtNS45Mjg2MiwwIC0xMC43NSw0LjgyMTM4IC0xMC43NSwxMC43NWMwLDQuOTkzMzggMy40MzczMSw5LjE2NzA2IDguMDYyNSwxMC4zNjgzOHY3Ni4wMTMyNWMtNC42MjUxOSwxLjIwMTMxIC04LjA2MjUsNS4zNzUgLTguMDYyNSwxMC4zNjgzN2MwLDUuOTI4NjMgNC44MjEzOCwxMC43NSAxMC43NSwxMC43NWM0Ljk5NjA2LDAgOS4xNjcwNiwtMy40NCAxMC4zNjgzOCwtOC4wNjI1aDEwOC4yNjMyNWMxLjIwMTMxLDQuNjIyNSA1LjM3MjMxLDguMDYyNSAxMC4zNjgzNyw4LjA2MjVjNS45Mjg2MywwIDEwLjc1LC00LjgyMTM3IDEwLjc1LC0xMC43NWMwLC00Ljk5MzM3IC0zLjQzNzMxLC05LjE2NzA2IC04LjA2MjUsLTEwLjM2ODM3ek0yNC4xODc1LDEyNC4wMDY2M3YtNzYuMDEzMjVjMy43NTk4MSwtMC45NzgyNSA2LjcwMjYyLC0zLjkyMTA2IDcuNjgwODgsLTcuNjgwODdoMTA4LjI2MzI1YzAuOTc4MjUsMy43NTk4MSAzLjkyMTA2LDYuNzAyNjIgNy42ODA4Nyw3LjY4MDg4djc2LjAxMzI1Yy0zLjc1OTgxLDAuOTc4MjUgLTYuNzAyNjIsMy45MjEwNiAtNy42ODA4Nyw3LjY4MDg3aC0xMDguMjYzMjVjLTAuOTc4MjUsLTMuNzU5ODEgLTMuOTIxMDYsLTYuNzAyNjIgLTcuNjgwODcsLTcuNjgwODd6IiBmaWxsPSJ1cmwoI2NvbG9yLTEpIj48L3BhdGg+PHBhdGggZD0iTTIxLjUsMzIuMjVjLTIuOTY4NTMsMCAtNS4zNzUsMi40MDY0NyAtNS4zNzUsNS4zNzVjMCwyLjk2ODUzIDIuNDA2NDcsNS4zNzUgNS4zNzUsNS4zNzVjMi45Njg1MywwIDUuMzc1LC0yLjQwNjQ3IDUuMzc1LC01LjM3NWMwLC0yLjk2ODUzIC0yLjQwNjQ3LC01LjM3NSAtNS4zNzUsLTUuMzc1eiIgZmlsbD0idXJsKCNjb2xvci0yKSI+PC9wYXRoPjxwYXRoIGQ9Ik0xNTAuNSwzMi4yNWMtMi45Njg1MywwIC01LjM3NSwyLjQwNjQ3IC01LjM3NSw1LjM3NWMwLDIuOTY4NTMgMi40MDY0Nyw1LjM3NSA1LjM3NSw1LjM3NWMyLjk2ODUzLDAgNS4zNzUsLTIuNDA2NDcgNS4zNzUsLTUuMzc1YzAsLTIuOTY4NTMgLTIuNDA2NDcsLTUuMzc1IC01LjM3NSwtNS4zNzV6IiBmaWxsPSJ1cmwoI2NvbG9yLTMpIj48L3BhdGg+PHBhdGggZD0iTTIxLjUsMTI5Yy0yLjk2ODUzLDAgLTUuMzc1LDIuNDA2NDcgLTUuMzc1LDUuMzc1YzAsMi45Njg1MyAyLjQwNjQ3LDUuMzc1IDUuMzc1LDUuMzc1YzIuOTY4NTMsMCA1LjM3NSwtMi40MDY0NyA1LjM3NSwtNS4zNzVjMCwtMi45Njg1MyAtMi40MDY0NywtNS4zNzUgLTUuMzc1LC01LjM3NXoiIGZpbGw9InVybCgjY29sb3ItNCkiPjwvcGF0aD48cGF0aCBkPSJNMTUwLjUsMTI5Yy0yLjk2ODUzLDAgLTUuMzc1LDIuNDA2NDcgLTUuMzc1LDUuMzc1YzAsMi45Njg1MyAyLjQwNjQ3LDUuMzc1IDUuMzc1LDUuMzc1YzIuOTY4NTMsMCA1LjM3NSwtMi40MDY0NyA1LjM3NSwtNS4zNzVjMCwtMi45Njg1MyAtMi40MDY0NywtNS4zNzUgLTUuMzc1LC01LjM3NXoiIGZpbGw9InVybCgjY29sb3ItNSkiPjwvcGF0aD48cGF0aCBkPSJNMzQuOTM3NSw1MS4wNjI1aDEwMi4xMjV2NjkuODc1aC0xMDIuMTI1eiIgZmlsbD0idXJsKCNjb2xvci02KSI+PC9wYXRoPjwvZz48ZyBpZD0ic3VidHJhY3RlZC1pY29uIiBzdHJva2U9Im5vbmUiPjxwYXRoIGQ9Ik0zMS44NjgzOCwxMzcuMDYyNWMtMS4yMDEzMSw0LjYyMjUgLTUuMzcyMzEsOC4wNjI1IC0xMC4zNjgzNyw4LjA2MjVjLTUuOTI4NjIsMCAtMTAuNzUsLTQuODIxMzcgLTEwLjc1LC0xMC43NWMwLC00Ljk5MzM3IDMuNDM3MzEsLTkuMTY3MDYgOC4wNjI1LC0xMC4zNjgzN3YtNzYuMDEzMjVjLTQuNjI1MTksLTEuMjAxMzEgLTguMDYyNSwtNS4zNzUgLTguMDYyNSwtMTAuMzY4MzdjMCwtNS45Mjg2MiA0LjgyMTM4LC0xMC43NSAxMC43NSwtMTAuNzVjNC45OTYwNiwwIDkuMTY3MDYsMy40NCAxMC4zNjgzOCw4LjA2MjVoMTA4LjI2MzI1YzEuMjAxMzEsLTQuNjIyNSA1LjM3MjMxLC04LjA2MjUgMTAuMzY4MzcsLTguMDYyNWM1LjkyODYzLDAgMTAuNzUsNC44MjEzOCAxMC43NSwxMC43NWMwLDQuOTkzMzggLTMuNDM3MzEsOS4xNjcwNiAtOC4wNjI1LDEwLjM2ODM4bDAsNTIuMTIyOWMtMS43MzE5MSwtMC43NTg4MSAtMy41MjcwMSwtMS4zOTkzIC01LjM3NSwtMS45MTExNmwwLC01MC4yMTE3NGMtMy43NTk4MSwtMC45NzgyNSAtNi43MDI2MiwtMy45MjEwNiAtNy42ODA4NywtNy42ODA4N2gtMTA4LjI2MzI1Yy0wLjk3ODI1LDMuNzU5ODEgLTMuOTIxMDYsNi43MDI2MiAtNy42ODA4Nyw3LjY4MDg4djc2LjAxMzI1YzMuNzU5ODEsMC45NzgyNSA2LjcwMjYyLDMuOTIxMDYgNy42ODA4OCw3LjY4MDg3bDY1LjIzODQ4LDBjLTAuMjM1MzQsMS43NTg3IC0wLjM1Njg2LDMuNTUyOTMgLTAuMzU2ODYsNS4zNzV6IiBmaWxsPSJ1cmwoI2NvbG9yLTcpIj48L3BhdGg+PHBhdGggZD0iTTIxLjUsMzIuMjVjLTIuOTY4NTMsMCAtNS4zNzUsMi40MDY0NyAtNS4zNzUsNS4zNzVjMCwyLjk2ODUzIDIuNDA2NDcsNS4zNzUgNS4zNzUsNS4zNzVjMi45Njg1MywwIDUuMzc1LC0yLjQwNjQ3IDUuMzc1LC01LjM3NWMwLC0yLjk2ODUzIC0yLjQwNjQ3LC01LjM3NSAtNS4zNzUsLTUuMzc1eiIgZmlsbD0idXJsKCNjb2xvci04KSI+PC9wYXRoPjxwYXRoIGQ9Ik0xNTAuNSwzMi4yNWMtMi45Njg1MywwIC01LjM3NSwyLjQwNjQ3IC01LjM3NSw1LjM3NWMwLDIuOTY4NTMgMi40MDY0Nyw1LjM3NSA1LjM3NSw1LjM3NWMyLjk2ODUzLDAgNS4zNzUsLTIuNDA2NDcgNS4zNzUsLTUuMzc1YzAsLTIuOTY4NTMgLTIuNDA2NDcsLTUuMzc1IC01LjM3NSwtNS4zNzV6IiBmaWxsPSJ1cmwoI2NvbG9yLTkpIj48L3BhdGg+PHBhdGggZD0iTTIxLjUsMTI5Yy0yLjk2ODUzLDAgLTUuMzc1LDIuNDA2NDcgLTUuMzc1LDUuMzc1YzAsMi45Njg1MyAyLjQwNjQ3LDUuMzc1IDUuMzc1LDUuMzc1YzIuOTY4NTMsMCA1LjM3NSwtMi40MDY0NyA1LjM3NSwtNS4zNzVjMCwtMi45Njg1MyAtMi40MDY0NywtNS4zNzUgLTUuMzc1LC01LjM3NXoiIGZpbGw9InVybCgjY29sb3ItMTApIj48L3BhdGg+PHBhdGggZD0iIiBmaWxsPSJ1cmwoI2NvbG9yLTExKSI+PC9wYXRoPjxwYXRoIGQ9Ik0zNC45Mzc1LDUxLjA2MjVoMTAyLjEyNXY0NS42ODc1Yy0xNi40OTgzNCwwIC0zMC43MTM3Miw5Ljk2MjQ2IC0zNi45NDYyMywyNC4xODc1aC02NS4xNzg3N3oiIGZpbGw9InVybCgjY29sb3ItMTIpIj48L3BhdGg+PC9nPjxnIHN0cm9rZT0ibm9uZSI+PGcgaWQ9IkxheWVyXzEiPjxwYXRoIGQ9Ik0xNTAuNSwxMzQuMzc1aC0xMC43NXYtMTAuNzVjMCwtMS40ODM1IC0xLjIwNCwtMi42ODc1IC0yLjY4NzUsLTIuNjg3NWMtMS40ODM1LDAgLTIuNjg3NSwxLjIwNCAtMi42ODc1LDIuNjg3NXYxMC43NWgtMTAuNzVjLTEuNDgzNSwwIC0yLjY4NzUsMS4yMDQgLTIuNjg3NSwyLjY4NzVjMCwxLjQ4MzUgMS4yMDQsMi42ODc1IDIuNjg3NSwyLjY4NzVoMTAuNzV2MTAuNzVjMCwxLjQ4MzUgMS4yMDQsMi42ODc1IDIuNjg3NSwyLjY4NzVjMS40ODM1LDAgMi42ODc1LC0xLjIwNCAyLjY4NzUsLTIuNjg3NXYtMTAuNzVoMTAuNzVjMS40ODM1LDAgMi42ODc1LC0xLjIwNCAyLjY4NzUsLTIuNjg3NWMwLC0xLjQ4MzUgLTEuMjA0LC0yLjY4NzUgLTIuNjg3NSwtMi42ODc1eiIgZmlsbD0idXJsKCNjb2xvci0xMykiPjwvcGF0aD48cGF0aCBkPSJNMTM3LjA2MjUsMTcyYy0xOS4yNjQsMCAtMzQuOTM3NSwtMTUuNjczNSAtMzQuOTM3NSwtMzQuOTM3NWMwLC0xOS4yNjQgMTUuNjczNSwtMzQuOTM3NSAzNC45Mzc1LC0zNC45Mzc1YzE5LjI2NCwwIDM0LjkzNzUsMTUuNjczNSAzNC45Mzc1LDM0LjkzNzVjMCwxOS4yNjQgLTE1LjY3MzUsMzQuOTM3NSAtMzQuOTM3NSwzNC45Mzc1ek0xMzcuMDYyNSwxMDcuNWMtMTYuMjk5NjksMCAtMjkuNTYyNSwxMy4yNjI4MSAtMjkuNTYyNSwyOS41NjI1YzAsMTYuMjk5NjkgMTMuMjYyODEsMjkuNTYyNSAyOS41NjI1LDI5LjU2MjVjMTYuMjk5NjksMCAyOS41NjI1LC0xMy4yNjI4MSAyOS41NjI1LC0yOS41NjI1YzAsLTE2LjI5OTY5IC0xMy4yNjI4MSwtMjkuNTYyNSAtMjkuNTYyNSwtMjkuNTYyNXoiIGZpbGw9InVybCgjY29sb3ItMTQpIj48L3BhdGg+PC9nPjxnIGlkPSJMYXllcl8xIiBmaWxsPSIjMDAwMDAwIiBvcGFjaXR5PSIwIj48cGF0aCBkPSJNMTM3LjA2MjUsOTYuNzVjLTIyLjIyODMxLDAgLTQwLjMxMjUsMTguMDg0MTkgLTQwLjMxMjUsNDAuMzEyNWMwLDIyLjIyODMxIDE4LjA4NDE5LDQwLjMxMjUgNDAuMzEyNSw0MC4zMTI1YzIyLjIyODMxLDAgNDAuMzEyNSwtMTguMDg0MTkgNDAuMzEyNSwtNDAuMzEyNWMwLC0yMi4yMjgzMSAtMTguMDg0MTksLTQwLjMxMjUgLTQwLjMxMjUsLTQwLjMxMjV6Ij48L3BhdGg+PC9nPjwvZz48cGF0aCBkPSJNMTAyLjEyNSwxNzJ2LTY5Ljg3NWg2OS44NzV2NjkuODc1eiIgaWQ9Im92ZXJsYXktZHJhZyIgZmlsbD0iI2ZmMDAwMCIgc3Ryb2tlPSJub25lIiBvcGFjaXR5PSIwIj48L3BhdGg+PC9nPjwvc3ZnPg=="
  );

  const handleFileOnChange = (event) => {
    event.preventDefault();

    let file = event.target.files[0];
    let file_dot = file.name.lastIndexOf(".");
    let file_type = file.name.substring(file_dot + 1, file.name.length);
    file_type = file_type.toLowerCase();

    if (check_file_type.indexOf(file_type) === -1) {
      alert("이미지 파일만 업로드해주세요!");
    } else {
      let reader = new FileReader();
      reader.onloadend = (e) => {
        setFile(file);
        setPreviewURL(reader.result);
      };
      if (file) reader.readAsDataURL(file);
    }
  };

  return (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      alignItems="center"
    >
      <SelectImage
        previewURL={previewURL}
        handleFileOnChange={handleFileOnChange}
      ></SelectImage>
      <ToggleFeeling />
      <textarea></textarea>
      <p>주소</p>
      <Box>
        <Button variant="contained" color="primary" component="span">
          취소
        </Button>
        <Button variant="contained" color="primary" component="span">
          확인
        </Button>
      </Box>
    </Box>
  );
}
