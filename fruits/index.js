var a = prompt('which side dish=east,west,north,south');


switch(a){
    case 'south':
        var b=prompt('dosa,idle,sambar per/dish price 10rupee');
        var c=prompt('how many order you want');
            switch(b){
                case 'dosa':
                    if(c<=10){
                        document.getElementById('loca-item').innerHTML=`you selected ${a} side dish ${b} and total price is ${c*10} rupee`;
                    }
                    break;
                case 'idle':
                    if(c<=10){
                        document.getElementById('loca-item').innerHTML=`you selected ${a} side dish ${b} and total price is ${c*15} rupee`;
                    }
                    break;
                case 'sambar':
                    if(c<=10){
                        document.getElementById('loca-item').innerHTML=`you selected ${a} side dish ${b} and total price is ${c*20} rupee`;
                    }
                    break;
                    default:
                        alert('dish not found...')    
            }
            break;
    case 'east':
        var b=prompt('rasgulla,rasmalai,litti chokha per/dish price 10rupee');
        var c=prompt('how many order you want');
            switch(b){
                case 'rasgulla':
                    if(c<=10){
                        document.getElementById('loca-item').innerHTML=`you selected ${a} side dish ${b} and total price is ${c*30} rupee`;
                    }
                    break;
                case 'rasmalai':
                    if(c<=10){
                        document.getElementById('loca-item').innerHTML=`you selected ${a} side dish ${b} and total price is ${c*40} rupee`;
                    }
                    break;
                case 'litti chokha':
                    if(c<=10){
                        document.getElementById('loca-item').innerHTML=`you selected ${a} side dish ${b} and total price is ${c*20} rupee`;
                    }
                    break;
                    default:
                        alert('dish not found...')    
            }
            break;
    case 'west':
        var b=prompt('vada pav,dhokla,thepla per/dish price 10rupee');
        var c=prompt('how many order you want');
            switch(b){
                case 'vada pav':
                    if(c<=10){
                        document.getElementById('loca-item').innerHTML=`you selected ${a} side dish ${b} and total price is ${c*20} rupee`;
                    }
                    break;
                case 'dhokla':
                    if(c<=10){
                        document.getElementById('loca-item').innerHTML=`you selected ${a} side dish ${b} and total price is ${c*30} rupee`;
                    }
                    break;
                case 'thepla':
                    if(c<=10){
                        document.getElementById('loca-item').innerHTML=`you selected ${a} side dish ${b} and total price is ${c*20} rupee`;
                    }
                    break;
                    default:
                        alert('dish not found...')    
            }
            break;
    case 'north':
        var b=prompt('paratha,kadhi chawal,kadai paneer per/dish price 10rupee');
        var c=prompt('how many order you want');
            switch(b){
                case 'paratha':
                    if(c<=10){
                        document.getElementById('loca-item').innerHTML=`you selected ${a} side dish ${b} and total price is ${c*40} rupee`;
                    }
                    break;
                case 'kadhi chawal':
                    if(c<=10){
                        document.getElementById('loca-item').innerHTML=`you selected ${a} side dish ${b} and total price is ${c*40} rupee`;
                    }
                    break;
                case 'kadai paneer':
                    if(c<=10){
                        document.getElementById('loca-item').innerHTML=`you selected ${a} side dish ${b} and total price is ${c*50} rupee`;
                    }
                    break;
                    default:
                        alert('dish not found...')    
            }
            break;
            default:
                alert('location not found...');

}
