
    fetch('https://kontests.net/api/v1/all')
    .then(res => res.json())
    .then ((data) => 
    {
    var text = "<table><tr><th></th><th>Upcoming Contests</th><th> Date    </th><th>Time</th></tr>";    
    for(var info in data)
    {
        if(data[info].status == "BEFORE" && data[info].site!="Toph" )
        {
            var TIME = data[info].start_time;
            var date = "";
            var time = "";
            var start = 0;
            for(var i=8; i>=0 ;i=i-3)
            {
              for(var j=i;j<i+2;j++)
              {
                date += TIME[j];
                if(j==9 || j==6)
                {
                  date += "-"
                }
              }
            } 

            for(var i=11;i<16;i++)
            {
              if(TIME[i]!="Z")
              {
                time += TIME[i];
              }
              else
              {
                break;
              }
            }

            text += `
            <tr>
            <td>
              <img src="assets/${data[info].site}.png" class="img-fluid rounded rounded-circle" alt="Kick Start" width="60px">
            </td>
            <td>
            <a href=\" ${data[info].url} \"> ${data[info].name} </a> <br>
            </td>
            <td> ${date} </td>
            <td> ${time} </td>
            </tr>
            `
        }
    }
    text += "</table>"
    var myClasses = document.getElementsByClassName("mypanel");

    for (var i = 0; i < myClasses.length; i++) {
        myClasses[i].innerHTML = text;
    }
})