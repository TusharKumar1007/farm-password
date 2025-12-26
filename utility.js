
export const genLowerLetters=()=>{
	return Array.from({length:26},(_,i)=>String.fromCharCode(i+97));

}

export const genUpperLetters=()=>{
        return Array.from({length:26},(_,i)=>String.fromCharCode(i+65));

}

export const genSymbols=()=>{
        return Array.from({length:14},(_,i)=>String.fromCharCode(i+33));

}
export const genNumbers=()=>{
        return Array(10).fill(10).map((_,i)=>i)

}

export const randomNumIn=(x,y)=>{
        return x+Math.round(Math.random()*(y-x));

}

export const shuffle=(arr,inPlace=false)=>{
        const arrLength=arr.length;
        if(!inPlace){
                const protoArr=[...arr];
                arr=protoArr;
        }
        for(let i=arrLength-1;i>=0;i--){
                const j=randomNumIn(0,i);
                [arr[i],arr[j]]=[arr[j],arr[i]];
        }
        if(!inPlace){
                return arr;
        }
}


export const shuffleMax=(charLength=25,lists)=>{
	const arr=[];
	for (let i=0;i<charLength;i++){
		const randomListNumber=Math.floor(Math.random()*lists.length);
		const randomLst=lists[randomListNumber];

		const randomNumber=Math.floor(Math.random()*randomLst.length);
		arr.push(randomLst[randomNumber]);
	}

	return arr;

}

const passLists=[genLowerLetters(),genNumbers(),genSymbols(),genUpperLetters()];
export const genPassword=(charLength=25)=>{
	const password=shuffle(shuffleMax(charLength,passLists)).join('');
	return password;
}
