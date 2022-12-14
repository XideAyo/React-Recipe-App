import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'

export const SideBarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #fff;
    display: grid;
    align-item: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? "100%" : "0%")};
    left: ${({isOpen}) => (isOpen ? "0": "-100%")}};
`
export const CloseIcon = styled(FaTimes)`
    color: #fff
`
export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none
`
export const SideBarWrapper = styled.div`
    color: #000;
`
export const SideBarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-top: 5rem;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 80px);
    }
`
export const SideBarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #000;
    cursor: pointer;

    &:hover{
        color: #29c5f6;
        transition: 0.2s ease-in-out
    }
`
export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`
export const SideBarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #29c5f6;
    white-space: nowrap;
    padding: 16px 24px;
    color: #010606;
    font-size: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-bottom: 10rem;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #000;
        color: #fff
    }
`   