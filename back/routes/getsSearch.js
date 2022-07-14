

const getsSearch = (props) => {

    let res = '';

    if (props.includes("s")) res += '/:searchProp/:search';
    if (props.includes("i")) res += '/:searchIntervalProp/:intervalBegin/:intervalEnd';
    if (props.includes("e1")) res += '/:searchExactProp1/:searchExact1';
    if (props.includes("e2")) res += '/:searchExactProp2/:searchExact2';
    if (props.includes("e3")) res += '/:searchExactProp3/:searchExact3';
    if (props.includes("e4")) res += '/:searchExactProp4/:searchExact4';
    if (props.includes("e5")) res += '/:searchExactProp5/:searchExact5';

    return res;
}

module.exports = getsSearch;