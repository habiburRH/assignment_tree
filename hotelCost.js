function hotelCost(day){

    if (day >=1 && day<= 10)
    return day*100

    else if (day>=11 && day<=20)

    {
        return 10*100 +(day -10)*80
    }

    else if (day>=21)
    return (10*100)+(10*80)+(day-20*50)
    
}