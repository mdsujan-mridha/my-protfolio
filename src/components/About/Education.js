import React from 'react';
import './Education.css';
const Education = () => {
    return <table className="table">
        <thead>
            <tr>
                <th> Degree </th>
                <th> Department </th>
                <th> Institute </th>
                <th> Year </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td> Bsc Engineering </td>
                <td> Computer science & Engineering </td>
                 <td> Green University of Bangladesh </td>
               <td> 2020 - present </td>
            </tr>
            <tr>
                <td> HSC </td>
                <td> Science </td>
                <td> Barguna Govt college </td>
                <td>  2016-2019 </td>
            </tr>
            <tr>
                <td> SSC </td>
                <td> General </td>
                <td> Parirkhal High School  </td>
                <td>  2015-2016 </td>
            </tr>

        </tbody>
    </table>
};

export default Education;