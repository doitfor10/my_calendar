import React from "react"; 
import styled from 'styled-components';
const Daily = (props) => { 
    // 반환할 리액트 요소가 없을 때는 null을 넘겨주세요! 처음 껍데기 잡으실때도 null을 넘겨주면 굳! 
   
    let day = props.day;
    let notThisMonth = props.notThisMonth;
    let today = props.today;
    if (notThisMonth) {
        return (<Day>
            <Yoil style={{ color: '#CFCFCF' }}>{day}</Yoil>
        </Day>);
    } else if (today === 'yes') {
        return (<Day>
            <Yoil style={{
                color: 'white',
                backgroundColor: '#E3302E',
                borderRadius: '100%',
               
            }}>{day}</Yoil>
        </Day>);
    } else {
        return (<Day>
            <Yoil >{day}</Yoil>
        </Day>);

    }
    
    return null;

    }
        
          
  
export default Daily;

const Day = styled.div`
    text-align:left;
    width:30%;
    min-height: 90px;
    
`
const Yoil = styled.span`
    margin:5px;
    font-size: 11px;
    padding:3px;
    position: relative;
    top:5px;
    font-family: "YESGothic-Bold";
`