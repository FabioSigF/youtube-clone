import { createGlobalStyle } from "styled-components";

//Icons
import { FaYoutube } from 'react-icons/fa'
import { IoMenu } from 'react-icons/io5'
import { CiSearch } from 'react-icons/ci'

export const color = {
  text: "#0f0f0f",
  textLight: "#606060",
  textWhite: "#fff",
  title: "#0f0f0f",
  bgLight: "#fff",
  bgGray: "#f8f8f8",
  bgGrayHover: "#f0f0f0",
  buttonLight: "#f8f8f8",
  buttonLightHover: "#f0f0f0",
  buttonDark: "#0f0f0f",
  buttonDarkHover: "#272727",
  primary: "#f00",
  primaryDark: "#c00",
  grayBorder: "#d3d3d3",

}

export const iconList = {
  youtube: <FaYoutube />,
  search: <CiSearch />,
  share: <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style={{pointerEvents: "none", display: "block"}}><g mirror-in-rtl="" class="style-scope yt-icon"><path d="M15,5.63L20.66,12L15,18.37V15v-1h-1c-3.96,0-7.14,1-9.75,3.09c1.84-4.07,5.11-6.4,9.89-7.1L15,9.86V9V5.63 M14,3v6 C6.22,10.13,3.11,15.33,2,21c2.78-3.97,6.44-6,12-6v6l8-9L14,3L14,3z" class="style-scope yt-icon"></path></g></svg>,
  cam: <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style={{display: "block", pointerEvents:"none"}}><g><path d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z"></path></g></svg>,

  bell: <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: "none", display: "block"}}><g><path d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z"></path></g></svg>,
  menu: <IoMenu />,

  //SideBar Icons
  
  home: <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: "none", display: "block"}}><g><path d="M12,4.33l7,6.12V20H15V14H9v6H5V10.45l7-6.12M12,3,4,10V21h6V15h4v6h6V10L12,3Z"></path></g></svg>,

  shorts: <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: "none", display: "block"}}><g height="24" viewBox="0 0 24 24" width="24"><path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path></g></svg>,

  subscribes: <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: "none", display: "block"}}><g><path d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"></path></g></svg>,

  library: <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: "none", display: "block"}}><g><path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path></g></svg>,

  history: <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: "none", display: "block"}}><g><path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M22,12c0,5.51-4.49,10-10,10S2,17.51,2,12h1c0,4.96,4.04,9,9,9 s9-4.04,9-9s-4.04-9-9-9C8.81,3,5.92,4.64,4.28,7.38C4.17,7.56,4.06,7.75,3.97,7.94C3.96,7.96,3.95,7.98,3.94,8H8v1H1.96V3h1v4.74 C3,7.65,3.03,7.57,3.07,7.49C3.18,7.27,3.3,7.07,3.42,6.86C5.22,3.86,8.51,2,12,2C17.51,2,22,6.49,22,12z"></path></g></svg>,

  yourVideos: <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: "none", display: "block"}}><g><path d="M10,8l6,4l-6,4V8L10,8z M21,3v18H3V3H21z M20,4H4v16h16V4z"></path></g></svg>,

  seeLater: <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: "none", display: "block"}}><g><path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"></path></g></svg>,

  like: <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: "none", display: "block"}}><g><path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path></g></svg>,

  deslike: <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style={{pointerEvents: "none", display: "block"}}><g class="style-scope yt-icon"><path d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z" class="style-scope yt-icon"></path></g></svg>,

  trending: <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: "none", display: "block"}}><g><path d="M19,3.87v9.77C19,17.7,15.86,21,12,21c-3.86,0-7-3.3-7-7.37V13.5c0-1.06,0.22-2.13,0.62-3.09c0.5-1.19,1.29-2.21,2.27-2.97 c0.85-0.66,1.83-1.14,2.87-1.65c0.39-0.19,0.77-0.38,1.15-0.58c0.36-0.19,0.72-0.38,1.08-0.56V6v1.87l1.55-1.04L19,3.87 M20,2l-6,4 V3c-0.85,0.44-1.7,0.88-2.55,1.33c-1.41,0.74-2.9,1.34-4.17,2.32C6.15,7.52,5.26,8.7,4.7,10.02C4.24,11.11,4,12.31,4,13.5 c0,0.03,0,0.12,0,0.14C4,18.26,7.58,22,12,22c4.42,0,8-3.74,8-8.36V2L20,2z M9.45,12.89L14,10v5.7c0,1.82-1.34,3.3-3,3.3 s-3-1.47-3-3.3C8,14.51,8.58,13.47,9.45,12.89z"></path></g></svg>,

  shopping: <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: "none", display: "block"}}><g><path d="M7,8c0,2.76,2.24,5,5,5s5-2.24,5-5h-1c0,2.21-1.79,4-4,4s-4-1.79-4-4H7z M16.9,6c-0.46-2.28-2.48-4-4.9-4S7.56,3.72,7.1,6H4 v14c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V6H16.9z M12,3c1.86,0,3.43,1.27,3.87,3H8.13C8.57,4.27,10.14,3,12,3z M19,20 c0,0.55-0.45,1-1,1H6c-0.55,0-1-0.45-1-1V7h14V20z"></path></g></svg>,

  music: <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: "none", display: "block"}}><g><path d="M12,4v9.38C11.27,12.54,10.2,12,9,12c-2.21,0-4,1.79-4,4c0,2.21,1.79,4,4,4s4-1.79,4-4V8h6V4H12z M9,19c-1.66,0-3-1.34-3-3 s1.34-3,3-3s3,1.34,3,3S10.66,19,9,19z M18,7h-5V5h5V7z"></path></g></svg>,

  film: <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: "none", display: "block"}}><g><path d="M22.01,4.91l-0.5-2.96L1.64,5.19L2,8v13h20V8H3.06L22.01,4.91z M5,9l1,3h3L8,9h2l1,3h3l-1-3h2l1,3h3l-1-3h3v11H3V9H5z"></path></g></svg>,

  live: <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: "none", display: "block"}}><g><path d="M14,12c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2S14,10.9,14,12z M8.48,8.45L7.77,7.75C6.68,8.83,6,10.34,6,12 s0.68,3.17,1.77,4.25l0.71-0.71C7.57,14.64,7,13.39,7,12S7.57,9.36,8.48,8.45z M16.23,7.75l-0.71,0.71C16.43,9.36,17,10.61,17,12 s-0.57,2.64-1.48,3.55l0.71,0.71C17.32,15.17,18,13.66,18,12S17.32,8.83,16.23,7.75z M5.65,5.63L4.95,4.92C3.13,6.73,2,9.24,2,12 s1.13,5.27,2.95,7.08l0.71-0.71C4.02,16.74,3,14.49,3,12S4.02,7.26,5.65,5.63z M19.05,4.92l-0.71,0.71C19.98,7.26,21,9.51,21,12 s-1.02,4.74-2.65,6.37l0.71,0.71C20.87,17.27,22,14.76,22,12S20.87,6.73,19.05,4.92z"></path></g></svg>,
  
  game: <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: "none", display: "block"}}><g><path d="M10,12H8v2H6v-2H4v-2h2V8h2v2h2V12z M17,12.5c0-0.83-0.67-1.5-1.5-1.5S14,11.67,14,12.5c0,0.83,0.67,1.5,1.5,1.5 S17,13.33,17,12.5z M20,9.5C20,8.67,19.33,8,18.5,8S17,8.67,17,9.5c0,0.83,0.67,1.5,1.5,1.5S20,10.33,20,9.5z M16.97,5.15l-4.5,2.53 l-0.49,0.27l-0.49-0.27l-4.5-2.53L3,7.39v6.43l8.98,5.04l8.98-5.04V7.39L16.97,5.15 M16.97,4l4.99,2.8v7.6L11.98,20L2,14.4V6.8 L6.99,4l4.99,2.8L16.97,4L16.97,4z"></path></g></svg>,

  news: <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: "none", display: "block"}}><g><path d="M11,11v6H7v-6H11 M12,10H6v8h6V10L12,10z M3,3.03V21h14l4-4V3.03 M20,4v11.99L19.99,16H16v3.99L15.99,20H4V4H20z M18,8H6V6 h12V8z M18,15h-5v-2h5V15z M18,12h-5v-2h5V12z"></path></g></svg>,
  
  esports: <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: "none", display: "block"}}><g><path d="M17 3V5V6V10V10.51L16.99 10.97C16.94 13.1 15.66 14.94 13.74 15.67H13.72L13.66 15.69L13 15.95V16.65V19V20H14V21H15H10V20H11V19V16.65V15.95L10.34 15.71L10.26 15.68H10.25C8.33 14.95 7.05 13.11 7 10.98V10.51V10V6V5V3H17ZM18 2H6V5H4V6V10V11H6.01C6.07 13.53 7.63 15.78 9.97 16.64C9.98 16.64 9.99 16.64 10 16.65V19H9V20H8V22H16V20H15V19H14V16.65C14.01 16.65 14.02 16.65 14.03 16.64C16.36 15.78 17.93 13.54 17.99 11H20V10V6V5H18V2ZM18 10V6H19V10H18ZM5 10V6H6V10H5Z"></path></g></svg>,

  learn: <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: "none", display: "block"}}><g><path d="M16,21h-2.28c-0.35,0.6-0.98,1-1.72,1s-1.38-0.4-1.72-1H8v-1h8V21z M20,10c0,2.96-1.61,5.54-4,6.92V19H8v-2.08 C5.61,15.54,4,12.96,4,10c0-4.42,3.58-8,8-8S20,5.58,20,10z M15,18v-1.66l0.5-0.29C17.66,14.8,19,12.48,19,10c0-3.86-3.14-7-7-7 s-7,3.14-7,7c0,2.48,1.34,4.8,3.5,6.06L9,16.34V18H15z"></path></g></svg>,

  config: <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: "none", display: "block"}}><g><path d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,8c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4 S14.21,8,12,8L12,8z M13.22,3l0.55,2.2l0.13,0.51l0.5,0.18c0.61,0.23,1.19,0.56,1.72,0.98l0.4,0.32l0.5-0.14l2.17-0.62l1.22,2.11 l-1.63,1.59l-0.37,0.36l0.08,0.51c0.05,0.32,0.08,0.64,0.08,0.98s-0.03,0.66-0.08,0.98l-0.08,0.51l0.37,0.36l1.63,1.59l-1.22,2.11 l-2.17-0.62l-0.5-0.14l-0.4,0.32c-0.53,0.43-1.11,0.76-1.72,0.98l-0.5,0.18l-0.13,0.51L13.22,21h-2.44l-0.55-2.2l-0.13-0.51 l-0.5-0.18C9,17.88,8.42,17.55,7.88,17.12l-0.4-0.32l-0.5,0.14l-2.17,0.62L3.6,15.44l1.63-1.59l0.37-0.36l-0.08-0.51 C5.47,12.66,5.44,12.33,5.44,12s0.03-0.66,0.08-0.98l0.08-0.51l-0.37-0.36L3.6,8.56l1.22-2.11l2.17,0.62l0.5,0.14l0.4-0.32 C8.42,6.45,9,6.12,9.61,5.9l0.5-0.18l0.13-0.51L10.78,3H13.22 M14,2h-4L9.26,4.96c-0.73,0.27-1.4,0.66-2,1.14L4.34,5.27l-2,3.46 l2.19,2.13C4.47,11.23,4.44,11.61,4.44,12s0.03,0.77,0.09,1.14l-2.19,2.13l2,3.46l2.92-0.83c0.6,0.48,1.27,0.87,2,1.14L10,22h4 l0.74-2.96c0.73-0.27,1.4-0.66,2-1.14l2.92,0.83l2-3.46l-2.19-2.13c0.06-0.37,0.09-0.75,0.09-1.14s-0.03-0.77-0.09-1.14l2.19-2.13 l-2-3.46L16.74,6.1c-0.6-0.48-1.27-0.87-2-1.14L14,2L14,2z"></path></g></svg>,
  
  flag: <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: "none", display: "block"}}><g><path d="M13.18,4l0.24,1.2L13.58,6h0.82H19v7h-5.18l-0.24-1.2L13.42,11H12.6H6V4H13.18 M14,3H5v18h1v-9h6.6l0.4,2h7V5h-5.6L14,3 L14,3z"></path></g></svg>,

  help: <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: "none", display: "block"}}><g><path d="M15.36,9.96c0,1.09-0.67,1.67-1.31,2.24c-0.53,0.47-1.03,0.9-1.16,1.6L12.85,14h-1.75l0.03-0.28 c0.14-1.17,0.8-1.76,1.47-2.27c0.52-0.4,1.01-0.77,1.01-1.49c0-0.51-0.23-0.97-0.63-1.29c-0.4-0.31-0.92-0.42-1.42-0.29 c-0.59,0.15-1.05,0.67-1.19,1.34L10.32,10H8.57l0.06-0.42c0.2-1.4,1.15-2.53,2.42-2.87c1.05-0.29,2.14-0.08,2.98,0.57 C14.88,7.92,15.36,8.9,15.36,9.96z M12,18c0.55,0,1-0.45,1-1s-0.45-1-1-1s-1,0.45-1,1S11.45,18,12,18z M12,3c-4.96,0-9,4.04-9,9 s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"></path></g></svg>,

  feedback: <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: "none", display: "block"}}><g><path d="M13,14h-2v-2h2V14z M13,5h-2v6h2V5z M19,3H5v16.59l3.29-3.29L8.59,16H9h10V3 M20,2v15H9l-5,5V2H20L20,2z"></path></g></svg>,

}

export const padding = {
  container: '1rem',
}

export const fFamily = {
  title: "'Roboto', sans-serif",
  text: "'Roboto', sans-serif",
}

export const fSize = {
  small_xx: ".7rem",
  small_x: ".75rem",
  small: ".85rem",
  normal: ".875rem",

}

export const pseudoCfg = {
  content: '""',
  display: "block",
  position: "absolute"
}

export const GlobalStyle = createGlobalStyle`
  
  *
  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body
  {
    font-family: ${fFamily.text};
    color: ${color.text};
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6
  {
    font-family: ${fFamily.title};
    color: ${color.title};
  }

  a
  {
    text-decoration: none;
    color: inherit;
  }

  ul,
  li
  {
    list-style: none;
  }

  button
  {
    border: none;

    &:hover
    {
      cursor: pointer;
    }
  }

  input
  {
    border: none;
    border-radius: 0;
    outline: none;
  }
`

