import React from 'react'
import { FaGreaterThan ,FaCrown} from 'react-icons/fa';

import Styles from "./admin.module.css"
import { GiProgression ,GiBattery100} from 'react-icons/gi';
import { BsFillBagFill,BsCurrencyRupee,BsSticky, BsFillBarChartFill ,BsFillEmojiSmileUpsideDownFill} from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineGift,AiOutlineLogin, AiOutlineDollarCircle } from 'react-icons/ai';
const Admin = () => {
    const flightLoading = 90;
    const hotelLoading =87;
    const carLoading = 60;

    const cruisesLoading = 55;
    const IndiaLoading=40;

  
    const calculateProgressBarWidth = (loading) => {
        // console.log(localStorage)
      return {
        width: `${loading}%`,
      };
    };
  return (
    <>
    <div className={Styles.container}>
        {/* <div className={Styles.left}>
            <div className={Styles.profile}><h3>Analyse</h3></div>
            <div className={Styles.circle}></div>
            <h3>King of King's</h3>
            <p>Master Panel</p>
            <div className={Styles.pannel}>
            <div className={Styles.first}>
                <GiProgression/>
                <h4>Analyse</h4>
                <FaGreaterThan/>
            </div>
            <div>
                <BiUserCircle/>
                <h4>user</h4>
                <FaGreaterThan/>
            </div>
            <div>
                <BsFillBagFill/
            <h4>Store</h4>
                <FaGreaterThan/>
            </div>
            <div>
                <FaCrown/>
                <h4>Ads</h4>
                <FaGreaterThan/>
            </div>
            <div>
            <AiOutlineGift/>
                <h4>Gifts</h4>
                <FaGreaterThan/>
            </div>
            <br /><br /><br />
            <div>
            <BsFillEmojiSmileUpsideDownFill/>
                <h4>Ban</h4>
                <FaGreaterThan/>
            </div>
            <div>
            <BsFillBarChartFill/>
                <h4>Level</h4>
                <FaGreaterThan/>
            </div>
            <div>
            <AiOutlineDollarCircle/>
                <h4>Recharge</h4>
                <FaGreaterThan/>
            </div>
            <div>          <GiBattery100/>
                <h4>Banner</h4>
                <FaGreaterThan/></div>
            <div>
            <BsCurrencyRupee/>
                <h4>Salary</h4>
                <FaGreaterThan/>
            </div>
            <div>
            <BsSticky/>
                <h4>Sticker</h4>
                <FaGreaterThan/>

            </div>
            <div>
            <AiOutlineLogin/>
                <h4>Log Out</h4>
                <FaGreaterThan/>

            </div>
            </div>
        </div> */}
        <div className={Styles.mid}>
            <select className={Styles.day}>
        <option value="">Last 30 days</option>
            </select>
            <div className={Styles.user}>
                <div style={{backgroundColor:"rgb(254,227,229)"}}>
                    <div style={{backgroundColor:"rgb(243,93,135)"}} className={Styles.scircle}></div>
                    <p>84637</p>
                    <p>Users</p>
                </div>
                <div style={{backgroundColor:"rgb(254,244,222)"}}>
                <div style={{backgroundColor:"rgb(253,157,132)"}} className={Styles.scircle}></div>
                    <p>12400</p>
                    <p>Revenue</p>
                </div>
                <div style={{backgroundColor:"rgb(221,252,230)"}}>
                <div style={{backgroundColor:"rgb(65,215,89)"}} className={Styles.scircle}></div>
                    <p>12400</p>
                    <p>Host</p>
                </div>
                <div style={{backgroundColor:"rgb(236,232,255)"}}>
                <div style={{backgroundColor:"rgb(147,130,250)"}} className={Styles.scircle}></div>
                    <p>12400</p>
                    <p>Host</p>
                </div>
                <div style={{backgroundColor:"rgb(213,235,240)"}}>
                <div style={{backgroundColor:"rgb(18,211,207)"}} className={Styles.scircle}></div>
                    <p>712400</p>
                    <p>Active</p>
                </div>

               
                <div style={{backgroundColor:"rgb(254,227,229)"}} >
                <div style={{backgroundColor:"rgb(243,93,135)"}} className={Styles.scircle}></div>
                    <p>800</p>
                    <p>Gaurdian</p>
                </div>
                <div style={{backgroundColor:"rgb(254,255,203)"}}>
                <div style={{backgroundColor:"rgb(253,157,132)"}} className={Styles.scircle}></div>
                    <p>12400</p>
                    <p>Tax</p>
                </div>
                <div style={{backgroundColor:"rgb(198,255,214)"}}>
                <div style={{backgroundColor:"rgb(65,215,89)"}} className={Styles.scircle}></div>
                    <p>12400</p>
                    <p>Teen patti</p>

                </div>
                <div style={{backgroundColor:"rgb(236,232,255)"}}>
                <div style={{backgroundColor:"rgb(147,130,250)"}} className={Styles.scircle}></div>
                    <p>12400</p>
                    <p>Host</p>
                </div>
                <div style={{backgroundColor:"rgb(213,235,240)"}}>
                <div style={{backgroundColor:"rgb(18,211,207)"}} className={Styles.scircle}></div>
                    <p>712400</p>
                    <p>Active</p>
                </div>
                <div  style={{backgroundColor:"rgb(197,206,223)"}}>
                <div style={{backgroundColor:"rgb(243,93,135)"}} className={Styles.scircle}></div>
                    <p>46373</p>
                    <p>Agency</p>
                </div>
                <div style={{backgroundColor:"rgb(227,212,178)"}}>
                <div style={{backgroundColor:"rgb(253,157,132)"}} className={Styles.scircle}></div>
                    <p>1243466</p>
                    <p>Agency Ban</p>
                </div>
                <div style={{backgroundColor:"rgb(154,216,163)"}}>
                <div style={{backgroundColor:"rgb(65,215,89)"}} className={Styles.scircle}></div>
                    <p>12400</p>
                    <p>Reward</p>

                </div>
                <div style={{backgroundColor:"rgb(236,232,255)"}}>
                <div style={{backgroundColor:"rgb(147,130,250)"}} className={Styles.scircle}></div>
                    <p>12400</p>
                    <p>Host</p>
                </div>

                <div style={{backgroundColor:"rgb(213,235,240)"}}>
                <div style={{backgroundColor:"rgb(18,211,207)"}} className={Styles.scircle}></div>
                    <p>712400</p>
                    <p>Active</p>
                </div>
                <div style={{backgroundColor:"rgb(197,206,223)"}}>
                <div style={{backgroundColor:"rgb(243,93,135)"}} className={Styles.scircle}></div>
                    <p>84637</p>
                    <p>Top-up</p>
                </div>
                <div style={{backgroundColor:"rgb(227,212,178)"}}>
                <div style={{backgroundColor:"rgb(253,157,132)"}} className={Styles.scircle}></div>
                    <p>124300</p>
                    <p>Device ban</p>
                </div>
                <div style={{backgroundColor:"rgb(154,216,163)"}}>
                <div style={{backgroundColor:"rgb(65,215,89)"}} className={Styles.scircle}></div>
                    <p>12400</p>
                    <p>Reward</p>

                </div>
                <div style={{backgroundColor:"rgb(236,232,255)"}}>
                <div style={{backgroundColor:"rgb(147,130,250)"}} className={Styles.scircle}></div>
                    <p>12400</p>
                    <p>Host</p>
                </div>
                <div style={{backgroundColor:"rgb(213,235,240)"}}>
                <div style={{backgroundColor:"rgb(18,211,207)"}} className={Styles.scircle}></div>
                    <p>712400</p>
                    <p>Active</p>
                </div>
            </div>


            <br /><br /><br /><br /><br />
            <div className={Styles.map}>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <h3>Top Countries</h3>
                    <select>
                        <option>last 7 days</option>
                    </select>
                </div>
<img width="100%" height="100%" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHsA7QMBEQACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAwQFBgcBAgj/xAA3EAABAwMDAgMGBAYCAwAAAAABAgMEAAUREiExBkETUWEHIjJxgZEUI0KhFTNSscHhYoIWJEP/xAAaAQEAAgMBAAAAAAAAAAAAAAAABAUBAgMG/8QALxEAAgICAQMCBAUFAQEAAAAAAAECAwQRIQUSMRNBIjJRYRRxgZGxFSOhwfDxUv/aAAwDAQACEQMRAD8A3GgCgCgCgOZFAcKkjk+tBtDO43WDbopky3whnONQSVf2BrpCqdku2K5Odl0K1uT4IKd1vAip1JaW6OxDrQCh5j3s/t3qTXgWT+37kOzqFcF9f2OM9WvOJU67Z347CU6lOyHAjA9ByfoDSWHFcKab+wjnNrucGkN1+0K2hWERpK9viAAH711XSrn5aRwl1mhPwxlJ9opBH4S3Agp38VzBB+grtDpLfzyI9nW1v4Ijdr2hztWXocbR5JCtvrmt30mPtI5x63PfMUW6xXl67xW30wHG2yd1qWMHft3NVl9Cpl272W+Lkyvj3dukTdRyYIyn0RmVOuhZSkb6EFZ+wBNZUe56RrKSitsYRb1GmlP4Rt91KlFIVpCBkc/EQdvlXSdMofN/37HGvIhZ8uyUrkSDuaA5kUAah50AGgI7+JFEl1qTDksoQMpeKdSFj5pzj5Gt+xa2mjn6nLTWh+26262lxtQUhQyFDg1o+PJuns9ah50MhkedNgMjzoDtAFAFAFAcOwoBnPu0C2pBnzGI+eA44AT9K3hVOz5Fs1lOMfLPDF7tckDwLjEcz2S+nP2zWXTYvMWaq2D8MXkTY0ZGuRIZaTzlbgTWijJ+EbOUV5ZXr5eZzSpJZhJXBj6dTyJiULWT5Y4Az3IqVTRB629N/Yi3XTW9La/Mj7H1NHuE5qM27NKnfERrfbbSFEY0jKc5PP757V1vw5Vw7nr9DlTlxnLs5/XQqJUl512MjWmQ02tzQlaCpfv7JRhIQeMHuM+da9kVqXs/8fn7hyk217/9+hGMTo7Etdwk2OTIRHVhTw9/Qr9W3mDtg/tUl1SlH01Ylv2Iitgpeo6969y0MosXVLKZIaTJS37uFBSSn0IqE/xGK+3wT4/hstd3kqXWvTLMFYlW5oNR9GXEZOxz2+/FWfT82U/gm9spuqYKq+Ovhe5UQmrXZRj+12x64yA202tY7lIP98Y++Kj35Cqj55JOPjztkklwa3Zbe3bbezGbKzpG5WcnNeZutds3Jo9jjUqitQRI1zJB5VWGCvzOrbHAUWjJCik4KGUFWPPipleFfNd2iBPqGNW9OX7CsHq6yzQnRMQ0pW2h46Dn61izCvr8xN68/Hs8SJVyWwnl1AwAr4v0nv8AL1qL2y+hKco/UrQucBtbsq+XWM4dZ8NlmTqaSjgHSMZPmSDvxtUv0pvUaov9iIrYLcrJf5EHOso7N1VCt0Vt+KIynW1NLA8RQ3UB2GBk7447c1usKTr75PT3o1/GR9Ttitr+StX72iXF1DrNvQIS8lJykKWB/UFcfTH1NT6OlwTTm9kS7qMnxFaKhJ6hvEpKw/dJq0r+JPjqAP0BxVlHFpjyoohPIufmTFrN1C9aVNrQHnVtqykKkrSgemkGud+JG36L9F/JvVkOv7/qWpPtWl+AQq1sF7Oyg4QnGfL/AHUH+jx3xLgmLqb/APnkmW/aPZ5EBoSly40lYBcEdvPhnPAJ7VFfS74zeltEhdQqceeGJW/2mWsOJblonJAWR4pShQx2JAwf2rafSrlytGI9Qr3p7LRA6usM94tRbkwVgZwo6c/LNQp4t0FuUSXHIqk9KRKfjovun8SzhWyfzBv8q49svodO5fUVS4F/CDscbjFamx7oBnd5ggW2RJOv8tBI8NvWc9sJ71vXHukkaWS7YtmC3V16/wB2ekw2HHjpBUsNBJVj9SgCQMnsK9RSo41ajJ6KG1yvnuK2NptpnwRmbBkMp83WyB9+K7Qurs+VpnCdVlfMlobg8Z3wABnsB2rqlrwcXJvyLxXXIzyXo61NOp4Wg4IrScIyWpI1VkovaJAXi5lQX/EJQUE6cpeUNvLY1z/D0612oPJt89zLt010jOmNs3K5TFIVoywgqJI7gk52HfFVOXnVx3XXH8y0xcGyaVlkvyJi5y4fTdvi250+AXUrIXGZBAIx72FE43PrwaiU1WZNjmudfck3214tark9b+wj0lYmocpDzsxt9a0+M0WlKQtYPdQzunfgjY1vl5LmtduvY5YWIq57ct75Wv8AZJdZ2R27wWzGTqksElCSrGoHGR5Z2H2rlhZEaLNy8M7dTxJZNXw+URfSXSDRZcfvcXLhVhDKz8IHc486lZme2+2l8fUh9P6VFR7748/QuhZQlnwmxoQE4ATtpHpVVt72y8UUo6XAyg256M+p165S5OcgNuaQkD5Ac10nYpLSikcKqJwl3Obf5kgFjJTqGR28q5Eje+CjdZdQ3FCpcCJGcaaawHZGDwR2PA5G9WuDi1PtnOXL9ij6jm3Rcq4R0vdkGxZPD6ZTcI8dt5x8lLi5ADaY6f6k6sb/APLepMsneR2N6S+nuQ4Ynbi+pFbcvr4S+pBxpT1qlOhtMV/I0kLSHWz5EetTZVxvim9r+SJVdKiTS0/4Gs24S5gIefWUH/5g4QByAE8ADsK3rprr+VCd9k/mYwVtXc1R5S+80lxLTikBxOlek41DyPpWrim1v2OsZteBsdq3M72eDQ2PJobHKAKaGxxFgypev8JFef0fF4bZVj7VznZCHzPR0jXOfyok7Z0ne7o482zAW2Wkal+P+WN+AM8k1wszaK0m5efpydoYts34PP8A4reFr8GNb3JCCUjxGU6mtRAyNXGx2J42NYWZTrcnr+TLxrd8LZpHSnSd3tdrSBdZEKXk/khSXmcHGPdI2I348+9UuVl1WWcRTj+zLTHx5why+S9IyEgKVqIG54zVcTV4B1KlIISdJPfGayBpEtcSG84+wyA87/Mc7r+dbyslJabNFXFPaFZ0ZEuK6w62HELSRpVwa1jJxe0ZnFSWmYX1XZlWW9PxkhRZJCkK7YIzg+vP2r1WHkK+pN+TzWVS6puPsRSBUtkJiyRWDRlhsvVF2tKUtsSPEjpGA04NSQPTyqFfg027bXP1JVPULqeE9r7jvq++Jvc1rwSDHaT+WdOFZUBqyfmK54GM6Ivu8sdSylkTXb4X+z1Y4d6hymJ0SKsaBnU5gJCe+c8CmTbj2QdcmaYtWVXNWwXj+DVLbKEyCxIy2StAKvDVqAONwDXnZx7ZNHq6bPUrUh1Wp1CgPLmdCtIyrBwPWhh71wVCQudabnHuEtUYlxsia4HAlJTk6QkHfI9OanpV2wcI7+xUWStx7I2T1z5+n7fUhb51amXKUGIoXF0Kbw6ogOA4O4Gw4+e9S6cBxjuT0yvyurKyeoR3HlfmQ12v8u4x2oxS1Hjt5CG2AUjGMYPpiplGHCuTn5f3Il+fZbFQ8JfQg1CppDR4Qw68rSy044o8BCST+1YlKMfL0doQlLhISkMuMOKbfbW24n4kLSUkfQ1mMlJbT2b9ri9NaGyq2NkIqrJujwqhujwaGUcoZCsMGrezbqJlbAtzFraisslsOOtuElal6hqIxncgDnbPpXn+o40oy9SUt7LvCvUl2KOi39XwJlz6elxbc6puQtPu6VadWDunPqNqg41ka7VKS2iZdGU62ovkcdO2z+DWaLb/ABVO+AjTrV3/ANeVa3W+rY561szVX6cFEka5HQKAKAKAKAyv2uTFGfDhJJCUNFa/+WTt9tP71e9IrXbKZSdVk9xiUJNXLKZiya1ObFkUObJzpyxS7zKCWElLKCPFe29wHy8ztUPKyoUx58/Qk4mHZkT48LyzULNYW7ZHVHD7jrBJJbWAQSeSe5/tXnrsh2y7taZ6jHxFTHt3tEnHjNR0aGG0NoznSgYGa5Sk5PbZJjCMFqK0LVqbBQHFHAJoYb0tmb3G8K6qDMFi3oTJK8ocKs6Rgk1d1Y/4T+65caPLX5f9Q1TCHxbHi+ikM6NC1S3QQtTSvcStHBAV2Vvtk1y/qUpb9iQujRr1p9z+nj/n9CvT+m5SJjDMFLjyZCVKbDifDUMcg5OMj0NTas2Dg3PjRAu6dONijXyn9eCSgyulYMeE1KS4uW2CXnUM6gFEbg85AztjPFRrI5lrlKPj2/In1TwaoRjL5l549xj09Pi2jqoGA6ubEkfl+IUaFjUecEDfP3rtk1TuxdzXa0c8S6unK+B9yZ49pZki9oEksHDf5ZbQUnTn9WTuaz0pQ9JuP6m3VO/1l3FMVVoVyEVVk6ITNDZHg0NkemGXZDyGWG1uurOEoQMkn0FYlJQXdJ6RvGLk9Imbb0rdZ15Ra1x1xnTkrU6n3UJBwTtzvttUW3MqhX6iezvXiWSn2Pg1CyWA9K2ZDEVTD9wkSE6nHVFCFqznSMb7JBwPOqC/JeVY3LwkXFVHoQ0vJcEZwM896hks9UAUAUAUAUAUBTPaJ03/ABiAJzCtMmG2pWnTnxE8kfttVh0/L9CfbLw/8EDOxfWh3LyjJ5Ed2JIcjyE6HW1aVJzwa9HCanHuR5ucXF6Yow048dLTa3FAZIQkqOPpSUox8vRooSl8q2SsOxXB+ZGjqjOsmQrCFutlKTtnmo88quMHLe9G8cS2U1FrWzX+n7Siz2xqGlfiFIypeMZJrzWRc7rHNnqsXHWPWoLkkxtXEkhQBQBQCEt9MeO6858DaCo/Ssxi5SSRpZNQg5S8Iy031xp15dtixYJWfdU22NaE+Wf9V6KOGmkrG3o8U+ouMm6YqO/f3HFr6mfjyyu5rkTGC2ptbRcyCSecHbgVzvwFKOq0kyRi9UshPdzclos8jquypVEX7zoVkpWhIJZPkRzv6VXRwr3teP8AZdz6li7j7/6IfqR3pn8FMMWOx+P0kfyiClSt8+h2qRixyu+O2+0jZc8Lsl2JdxQW0urdQlgLLpUA3oB1Z7Yq8n26bl4KSvubXb5O3SdNmyM3F5x15oeHlwe8MHg/XzrSmuuEf7a4Z2ttsnL+4+SOXXZGqEVVk6I8KobITNDZCkWQ5EktSGVKSttQUChZSfuOK1nFTi4v3OkJOMk0bsiMzcYlpvcRLwejsFxtBXlbupH8tSjud/XkCvJNutyrfueiSU1Gxew5atUt+5R51xnFYjklqM0jS2CQRqPcnBNY9WMYOEV59zKhJyUpMmq4nYKAKAKAKAKAKA4oZSRig8mae0DphEW3/wAUZ0jwFJbUMn3kE4STnuCQPUVc9Oy25+lLwyk6hiJQ9RexIeylDKbVMdBT4xfwvzSMDH05rl1Zy9VJ+NHXpKiqm/uWaQ5GusFp+NrktJdDjamFAboPYnGfKoCUqpNPhk+TjbFNcoeRZbLyEKSvBXwlY0qyORg1o4tHSM09MdVqbhQBQBQGfe0K5OqmotySpLSEhaxwFk8fQVc9Mpj2ux+TzHXMqfeqV4RUSatzzgmTWTdCS6yboeWN9pFxSzJBMeUPAdwNwFbAj1Bwaj5MG6+6Hlck/DnFWds/EuBjcIr9suDkZZKHmHMBXB2Oyh/f610rnG6tSXhidc6LXF+UWC3zInU9zYhzbQkvPJHjSY6tLilD9fljnPzqBbVZiwc4T4XsyyqshlTUJw5+qH/Uvs8QxCS9ZPHcdQQFNOKBKgTjY7YxXLG6pJz1b4JOR0yMYbqM2dSUkg8jIO9XcWmVOtPRJSem7tHswu70Utw1YwSoasHg47D54qNHLplb6SfJKeLZGv1GuCIaZcffQwy2px1aglKEjJJPYVJlJRTbfg5Qi5PSLZZPZ5eZ8hP41tMOKF4cWpwFZA50gZ/eq2/qdUI/ByyfVg2SfxcI2S3MCNBZYS0hpLadCW0cJA4H2rz0pd0m2XcY9qSHNamQoAoAoAoAoAoAoAoBOQw3IaU0+2hxtQwpCxkEeorKbT2jEoqS0/BVpnQ0Tw5JtUmRAdeA91t0+Hn1SORuanQ6hZteolJL6rkr59Ohp+m3Hf0PfTDlwgy12Se3HS1EjoLK2gfzBnGck/etcr05x9aDe2+TbFdkJOma4S4+5JSp9mYlttS3Ywfaxp8TBLeeN+2f8VHjXbKPdFPR2nbRCXbJraJGPJYeCvAdbcCTg6FA6ftXNxcfJ3jOMvlexesGwUAUBmntBYfTfA+tBDK20pbWODjkfc1fdMnH0u1eTyXW65rI72uGisZqyKTR4JrJtoTUaybIRUcHnFZOsSyOJjdTpjyZc6Lb1xmgzJdeUNTuMaSBnc8j6VWJzxNwjFy34Ln4M1KUpKLXn7l/6ZsVstcJty3pDinUAmQoe8tJ3HyG/FU+TkW3S+P9i8xcaqmK7P3JtXFR2SjLOn+l46+u7hFuDPisRCXm0q2SdSsoyO4wT9qu8jLl+Ei4PW+P2KajFX4qXd7cmlToTc+C/Ee/lvNlCseRqmhJwkpL2LeUFKLi/cxfqCwXHpi7C4W9twR0SymKtOVFJG6Un58euMV6OjJrya/Ts865KS2idE++HjZstsyYDC1MJYUtAWttIxpUdyMfMmvOTWpNbLuHMTzaStuN4D7qnXmyStZ75JP27Y7YpNre0IeND+tTYKAKAKAKAKAKAKAKAKAKAbS4sZ5IXJQlQb3ClfpraLkuEzScYvmRiNzfQ9cpa2XFLZU8rwyok5Tn3efTFesoj21RTXseLyJd1kteN/8Ag5st3l2eT48JQBIwpCvhV8xWmRjwvj2yGPlW48u6BqPSV9VfICnXW0tvNK0LCc4O3Irz2ZjehPtXg9TgZn4qvb4aJ2opOCgI+82qNd4ZjyknGdSVDlCvMV1pulTPuiR8nGhk19kyuxugoKFpMiU+6APeSMJB/wA1Nl1S1rUUirr6FQn8TbK71f041Y9DzD5U084UoaPKRjz71OwsyV+4yXKK7qXT4Y2pxfDKspVWRV6Elmsm8US/S9hfvtxQlKP/AFG1Dx3OwHl6k/5qJmZUaIeeX4LHBxJXzXHC8m0tpShtKEDCUjAA7V5fe+T1iWlo9UMjRyCyqU3JTlDiValFO3ibEAK8xua27nrRp2LexdwrS2rwwCoA6Qo4BNamxW7Bc/x9zmRiyEtJAdU2vdTL+ohaT2xwoHvnI9JV1XZFP3/lexwrn3Sa/wC2dmdWxB1BCssBbT8h5zDyir3W06ScZ7qPlSOJL0XbLhIxLJXqKuPLJpmMUzXpJkLWh1KQlo40pIzkj55H2qO5bilo7qOnse1qbBQBQBQBQBQBQBQBQBQBQDW6MuSLbKZZALjjSkpCjgEkedb1yUZps0sTlBpGDrStlxTTiSlbailaTyCORXr4yUlte54icWnp+T0lVZOTQ6iTJER0OxX3Glgg5Qoiuc6oTWpLZtXbZU9wei89J9XTptxagTkpeDudLqdinAzuBzVPm4MK4d8Hr7F90/qVttnpWc79y+DcVUF+doAoCt9d2tE+yuPAYeiguoI8u4+39qmYNzquS9mV3U8ZXUN+68GSK+demPIIRUrG9bHWJuHTcGLb7PGZigaChKyojdaiASTXkMi2VlrlPye0xq411KMfBK/KuR3CgCgCgKvItq7X1Su9NupbhSmQ3MT4ZUdYPuK2HG5ye1Slap0ek1yntEdwcLe9eH5Iuy9IQo0yXdrNckvl5C0sEBKgyoncg8HA23rtbmTnCNVkdaOVeNGE3ZF7Za24rogIaBQ054WFLb2KVEbkfXFQdreyT2vt0U249c3Dp2+Jt97htLjFtCg6y4dWDsVnbfcHbAqxqwIX0+pXLkh2ZcqrOya4L5GkIfGWiVIwCFYODkZGPOq1prhk9NPlC9YMhQBQBQBQBQBQBQBQHDwaAzf2gdLyDLcu1vaC2lJ1SEp5BHKseWOauun5sYx9Kb/IoepYMpSdsF+ZQwauihaFAqsGui/+y+K0tybKU3l1GlCVHsDucftVL1Wb+GJfdFri3KeuTQRtVMegO0AUBDdXSVROnpzrYyrwikbZ52/zUjFgp3RiyLmTcKJyX0MVWrG1erPGJHGGXZT6GI7anHXDpShPJrEpxgu6Xg6whKT1Hyaw5d1WC02i1uI13V9CG22+QDkAkn0zXmY0evOdi+VHqnd6EIVv5mWtPFQ1yTjtAFAFAcIoBFcdo8oSN87DFNmNFOvntAtVqHh24fjJHjltaQrSE45JUe2+B8qsKOn22cz4RDtza4cR5ZKLVbJd6tgmwY5nSYrjiFqAUQBpynPfYn7VHSsjCXa+Ezs+yUltcsm7fETBitxkLWtDSdKCs5ISOBnvgbVwlLuezrGPatDmsGwUAUAUAUAUAUAUAUAUAm+kKaWDwUkVleTWS3Fnz2fcUU/0nG3pXso+EeJnHUmh9aISrnco0JCwgvrCdZGQnzrlfb6Vcp/Q3op9WyMF7mydOWSPYoRjR1LXqVrWteMk/SvMZGRLIn3SPWYuLHGh2xJauBJCgCgEJsduXGdjvJ1NuoKFA9wazGTjJSRpOPfFxZ8+q1oJQ4ClaThQPY969lFppM8U46ei6ey6A+9d3LgjR4DCC2rPOVDbH2qr6rbFVqv3ZcdJqk5uz2XBb51mlzetIFwe0mBDjko338YkjjyxpP0qqhfGGNKtfM3/AILWdMpZEZvwiyjiopLO0AUAUBwnAJoDH+rfaJMuAl26AwiPFUS2XSSXFAHB9BmvQYnTYx7bJvbKbJzpPcIrRQs1bFbssHR94dgdSWx550rbbV4ICySEIVkbeW5qFmUKdMkl9yVjXONsXJ8eDfQc15Y9CdoAoAoAoAoAoAoAoAoAoDysAp3oD55maW5j6EbpS6oJPpk4r2Ve3Bb+h422PxvRoHsxsStRvEgNltSdMfCskHJBJHb/AHVN1TJ3/Zj+pb9LxdP1pfoaRVMXYUAUAUBzANAZ11J0HcLnfpUuGuKzHdIUNa1ZzjfYJ/zVxjdRhVSoSTbRTZPTZ23OcWkmXHpyzsWO2tQ2PeKd3HCMa1dzVbkXyvsc5Flj0RpgoolMDyridztAFAFAFAJvqSlhxS1BKQkkknAArK3vgw/B85261z7u+pFtiuyT8WUDIxnkmvXTvrqiu96PNqmyyT7UF2tM6zy/w1xjqZd06wCQQU8ZBHrWar4XLcGa2UyqepI5Zre5dLrEgMjK3nQk9sJ7n7ZpfYqq5TZmmDnNRPo9A0gDyGK8cemPVZAUAUAUAUAUAUAUAUAUB5XxjzrAMWtVnandcLtxCnY6H1qWpoAYSN99jtnA+teltyHDEU1w9HnK8dTy+x+NmyRozUZpDUdpDTSPhQgYA+lecbcnts9DGKS0hesGwUAUAUAUAUAUAUAUAUAUAUB5WkLQUqAUkjBB4IoDjbaW0hCEpShIwlKRgAfKm2/JhLRWOv8Ap9+/WtLUFLIkh1B1OHGUjO2f+x2qZhZCps3LwRsul2w1HyN/Z90grp5p2RO8NU533coOQhG2w9c8/IVvnZv4iSUflNcTF9Fbl5Lio4FQCWxCBLamxUSI7iHG15wpByNjg/uKy04vTEZJraHFYMhQBQBQBQBQBQBQBQHFcUBmzNtTZ/aO5KuLhbiPalx3VKwlS1YAST6HIx8qt5XerhKEPK8lSqvSzO6Xh+DRkqWVkEI0baSFZJ88jFVBailDIUAUAUAUAUAUAUAUAUAUAUAUAUA3nQ2p8V2NI1eE6MKCVYOPnWYvte0YcVJaYsAEIwkbAYArDMoiG5ci7PuIZacjwWXFNuLdRhUggYISCNkb/F3xsMb11lGMEm+W/wDByUnPx4JWO02wyhplAQ2gBKUgbAVybb5Z0SSWkKUMhQBQBQBQBQBQBQBQAd6A5pHlQBigO0AUAUAUAUAUAUAUAUAUAUAUAUAUAUAc0BzA8qA7QBQBQH//2Q==" alt="" />
            </div>


            <div>
<div className={Styles.progressb}>
        <div className={Styles.progress} style={calculateProgressBarWidth(flightLoading)}>
          United States: {flightLoading}%
        </div>
      </div>
      <div className={Styles.progressb}>
        <div  className={Styles.progress} style={calculateProgressBarWidth(hotelLoading)}>
          Canada: {hotelLoading}%
        </div>
      </div>
      <div className={Styles.progressb}>
        <div className={Styles.progress} style={calculateProgressBarWidth(carLoading)}>
          France: {carLoading}%
        </div>
      </div>

      <div className={Styles.progressb}>
        <div  className={Styles.progress} style={calculateProgressBarWidth(cruisesLoading)}>
          Italy: {cruisesLoading}%
        </div>
      </div>
      <div className={Styles.progressb}>
        <div  className={Styles.progress} style={calculateProgressBarWidth(cruisesLoading)}>
          Australia: {cruisesLoading}%
        </div>
      </div>
     
      <div className={Styles.progressb}>
        <div  className={Styles.progress} style={calculateProgressBarWidth(IndiaLoading)}>
          india: {IndiaLoading}%
        </div>
   
      </div>
      
</div>

        </div>
        <div className={Styles.right}>
            
            <div>
                <div className={Styles.card}>
                    <div className={Styles.imagew} style={{display:"flex"}}>
                       <div className={Styles.img}></div>
                       <h5>Raj kamal</h5>
                    </div>
                    <div className={Styles.income}>
                        <p>Order:5</p>
                        <p>income: $98</p>
                    </div>
                </div>
            </div>
            <div>


            <h3>Top-Agency</h3>
            <div className={Styles.card}>
                    <div className={Styles.imagew} style={{display:"flex"}}>
                       <div className={Styles.img}></div>
                       <h5>Raj kamal</h5>
                    </div>
                    <div className={Styles.income}>
                        <p>Order:5</p>
                        <p>income: $98</p>
                    </div>
                </div>
                <div className={Styles.card}>
                    <div className={Styles.imagew} style={{display:"flex"}}>
                       <div className={Styles.img}></div>
                       <h5>Raj kamal</h5>
                    </div>
                    <div className={Styles.income}>
                        <p>Order:5</p>
                        <p>income: $98</p>
                    </div>
                </div>
                <div className={Styles.card}>
                    <div className={Styles.imagew} style={{display:"flex"}}>
                       <div className={Styles.img}></div>
                       <h5>Raj kamal</h5>
                    </div>
                    <div className={Styles.income}>
                        <p>Order:5</p>
                        <p>income: $98</p>
                    </div>
                </div>
                <div className={Styles.card}>
                    <div className={Styles.imagew} style={{display:"flex"}}>
                       <div className={Styles.img}></div>
                       <h5>Raj kamal</h5>
                    </div>
                    <div className={Styles.income}>
                        <p>Order:5</p>
                        <p>income: $98</p>
                    </div>
                </div>
            </div>
            <div>
                <h3>Top-Sender</h3>
                <div className={Styles.card}>
                    <div className={Styles.imagew} style={{display:"flex"}}>
                       <div className={Styles.img}></div>
                       <h5>Raj kamal</h5>
                    </div>
                    <div className={Styles.income}>
                        <p>Order:5</p>
                        <p>income: $98</p>
                    </div>
                </div>
                <div className={Styles.card}>
                    <div className={Styles.imagew} style={{display:"flex"}}>
                       <div className={Styles.img}></div>
                       <h5>Raj kamal</h5>
                    </div>
                    <div className={Styles.income}>
                        <p>Order:5</p>
                        <p>income: $98</p>
                    </div>
                </div>
                <div className={Styles.card}>
                    <div className={Styles.imagew} style={{display:"flex"}}>
                       <div className={Styles.img}></div>
                       <h5>Raj kamal</h5>
                    </div>
                    <div className={Styles.income}>
                        <p>Order:5</p>
                        <p>income: $98</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Admin