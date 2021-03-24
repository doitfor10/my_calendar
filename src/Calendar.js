import React from "react";
import styled from "styled-components";
import {useState} from 'react'; 
import moment from 'moment';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux';
import { completeList } from './redux/modules/todo';
//리덕스 훅을 사용해서 액션 생성 함수를 불러와서 스토어에 저장된 값을 사용한다. 
import Daily from './Daily.js'



  //달력
  const Calendar = (props) => { 
  //완료 리스트, 전체 리스트 토글용 변수
  const [btnChange, setBtnChange] = useState(false);
  const [getMoment, setMoment] = useState(moment());
  const today = getMoment;
  const dispatch = useDispatch();
  //1년 단위로 계산, 1년 중에서 오늘이?
  const firstWeek = today.clone().startOf('month').week(); //시작하는 week() 주.
  const lastweek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();//끝나는 week()주

    
  const calendarArr = () => {
  //3월 기준 5개의 테이블 열이 생긴다.
    

    
  let result = [];
  let week = firstWeek;
  for (week; week <= lastweek; week++) {
    
      result = result.concat(
        <ThisDay key={week}>
          {
            Array(7).fill(0).map((data, index) => {
              let days =  today.clone().startOf('year').week(week).startOf('week').add(index, 'day');

              //오늘이 달력 표기일과 같다.
              if (moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
                return <Daily day={days.format('D')} key={index} today={'yes'} month={days.format('MM')} date={days.format('YYYY.MM.DD')} />
              
                //이번달이 아니라면 일자만 보내자. 
                //day 컴포넌트를 두개로 조건문으로 분리하자.
              } else if (days.format('MM') !== today.format('MM')) {
                return <Daily day={days.format('D')} key={index} notThisMonth={true} date={days.format('YYYY.MM.DD')}/>
              
                //평범한 날들.
              } else {
                return <Daily day={days.format('D')} key={index} today={'no'} month={days.format('MM')} date={days.format('YYYY.MM.DD')}/>
              }
            })
          }
        </ThisDay>

      )
    }//for
    return result;
  }
 
    
    
    return (
    
      
    // 헤더 컨트롤
    <CalendarWrap> 
      <Top>
        <FontAwesomeIcon icon={faChevronCircleLeft} size="1x" className="month-btn"
          onClick={()=>{ setMoment(getMoment.clone().subtract(1, 'month')) } }/>
        <Month>{today.format('MMMM YYYY')}</Month>
        <FontAwesomeIcon icon={faChevronCircleRight} size="1x" className="month-btn"
        onClick={()=>{ setMoment(getMoment.clone().add(1, 'month')) }}/>
      </Top>
      <MiddleWrap>
        <Middle>
          <Week className="sun">SUN</Week>
          <Week>MON</Week>
          <Week>TUE</Week>
          <Week>WED</Week>
          <Week>THU</Week>
          <Week>FRI</Week>
          <Week className="sat">SAT</Week>
        </Middle>
        <Bottem>
          {calendarArr()}
        </Bottem>
      </MiddleWrap>
      <BtnWrap>
        <Btns className="complete-btn" onClick={() => {
          if (btnChange === false) {

            dispatch(completeList())
            setBtnChange(true)
          
          } else {
          
            setBtnChange(false)
           
          }
        }}>
          {btnChange === false ? "ok" : "all"}
        </Btns>
        <Btns onClick={() => {
            props.history.push("/todo");
        }}>+</Btns>
      </BtnWrap>

   </CalendarWrap>
  ); 
} 
export default Calendar;

const CalendarWrap = styled.div`
  
  margin:-8px auto 15px auto;
  width:83%;
  padding: 10px;
`

const Top = styled.div`

  & .month-btn{
    cursor: pointer;
    transition: color .3s;
  }
  & .month-btn:hover{
    color:#E3302E;
  }
`
const Month = styled.span`
  font-family: "YESGothic-Bold";
  margin: 0px 15px;
  font-size: 20px;
`

const MiddleWrap = styled.div`
  border:1px solid black;
  margin-top:15px;
  padding: 5px 0px 5px 0px;
  
`

const Middle = styled.div`
  display: grid;
  grid-template-columns: repeat(7,1fr);
  align-items:center;
  padding:3px;

  & .sun{
    color:#E3302E;
  }
  & .sat{
    color:#24A5CD;
  }

  @media (max-width:767px) {
  
    font-size: 13px;
  }

`

const Week = styled.div`
  font-family: "YESGothic-Bold";
`
const Bottem = styled.div`
  display: grid;
  padding:3px;
 
`
const ThisDay = styled.div`
 
  display: flex;
`

const BtnWrap = styled.div`
 
  padding: 12px 5px 12px 0px;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  gap : 0px 10px;

  @media (max-width:767px) {
  
   flex-direction: column;
   gap: 8px 0px;
   position: absolute;
   z-index:1500;
   right: 7px;
   bottom: 15px;
  }

 
`
const Btns = styled.button`
 width:60px;
 height: 60px;
 border-radius: 100%;
 cursor: pointer;
 outline: none;
 background-color: #1e1e1d;
 border:none;
 color:white;
 font-size: 22px;
 transition: background-color .3s;
 
 @media (max-width:767px) {
  box-shadow: 0px 2px 5px #A5A5A5;
}
 &:hover{
   background-color: #3BB3D8;
 }
 &.complete-btn{
    font-size: 17px;
    font-family: "YESGothic-Bold";
  &:hover{
    background-color: #DA2727;
  }
}

`

