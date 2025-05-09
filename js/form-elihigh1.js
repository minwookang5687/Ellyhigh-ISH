const form = document.getElementById('form');
form.innerHTML = `
<div class="form-box" id="fm-box">
<div class="inner" style="text-align:-webkit-center;">
<div style="text-align:-webkit-center;border:2px solid #000;border-radius:10px;width:95%;padding:10px 20px;max-width:450px;" > 
	<a href="#sec05" class="scroll box">
                
					<span class="timer" style="color:#000;font-weight:700;">
						⏰  혜택 마감 | <span id="day2" style="font-weight:700;"></span> ( <span id="countdown2" style="font-weight:700;"></span>)
						</span>
					  </a> </div><br><br>

    <div style="text-align:-webkit-center;">
       
    <h1 class="form-top-title">엘리하이 10일 무료체험 신청<br></h1><br>
    <h1 class="form-top-title" style="color:red;font-weight: 600;font-size:140%;line-height:120%;">*등록하신 정보는 해피콜 진행 시,<br>재확인 후 체험기기 발송이 진행됩니다.</h1>
    <div class="form-box-inner">
        <form action="" id="form_e11" method="POST" target="hidden_iframe11" onsubmit="dll(); submitted=true;">
          <input type="hidden" name="entry.2053191736" value="당근">
            <div class="form-box-tb-out">
            <br>
                <table class="form-box-tb">
                    <tbody>
                    
                    <tr>
                        <th><!--<i class="fa fa-user" aria-hidden="true"></i>-->학부모 성함</th>
                        <td>
                            <input type='text' name='entry.1049771114' id='name' class="form-control" placeholder="성함" maxlength="4">
                        </td>
                    </tr>
                  
                   <!-- <tr>
                        <th>연령</th>
                        <td>
                            <input type='text' name='entry.1336420307' id='age' class="form-control" placeholder="연령" maxlength="2">
                           
                        </td>
                    </tr> -->

                  
            <tr>
              <th><!--<i class="fa fa-phone" aria-hidden="true"></i>-->연락처</th>
              <td>
                  <input type='text' name='entry.958538606' id='phone' class="form-control" placeholder="휴대폰번호" maxlength="11">
              </td>
          </tr>

          <tr id="select_lic">
                        <th>자녀 학년<br><span style="color:red; font-size:12px;" id="currentDate1"></span></th>
                        <td>
    
                            <select name='entry.1376637155' id='db2' class="form-control" placeholder="현재 조건">
    
                                   <option value="" selected disabled>자녀학년</option>
						<option value="초1">초1</option>
						<option value="초2">초2</option>
						<option value="초3">초3</option>
						<option value="초4">초4</option>
						<option value="초5">초5</option>
						<option value="초6">초6</option>
                                   
                                  
                            </select>
    
                        
                        </td>
                    </tr>

                      <!-- <tr id="select_lic">
                        <th>신용카드<br></th>
                        <td>
    
                            <select name='entry.1160702980' id='card' class="form-control" placeholder="신용카드 사용여부">
    
                                <option value="신용카드 사용여부" selected disabled>신용카드 사용여부</option>
                                    <option value="신용카드 사용 중">신용카드 사용 중 [우대]</option>
                                    <option value="없음">없음</option>
                                   
                                  
                            </select>
    
                        
                        </td>
                    </tr> -->

                <!-- <tr id="select_lic">
                  <th><i class="fa fa-user" aria-hidden="true"></i>소득 유형<br></th>
                  <td>

                      <select name='entry.673750585' id='type' class="form-control" placeholder="소득 유형">

                          <option value="소득 유형" selected disabled>소득 유형</option>
                              <option value="4대보험가입자">4대보험가입 직장인</option>
                              <option value="3개월 이상 급여 근로자">3개월 이상 급여 근로자</option>
                              
                              
                             
                            
                      </select>

                  
                  </td>
              </tr> -->

           <!-- <tr>
                        <th>주의 확인</th>
                        <td>
                            <label style="display: flex; align-items: center;">
                                <input type="checkbox" id="warningCheck" name="warningCheck" style="width: 18px; height: 18px; margin-right: 8px;">
                                <span style="font-size: 13px; color: red; font-weight: 600;text-align:-webkit-left;line-height:140%;">
                                    과다대출, 파산, 회생, 회복, 연체자, 무직자는 신청이 불가함을 확인합니다.
                                </span>
                            </label>
                        </td>
                    </tr> -->


                    <!-- <tr>
                        <th>통화가능시간</th>
                        <td>
                            <select name="entry.882151947" id='position' class="form-control" placeholder="현재 조건">

                                <option value="통화가능시간" selected disabled>통화가능시간
                                    <option value="언제나 통화 가능">언제나 통화 가능</option>
                                    <option value="오전 09:00~10:00">오전 09:00 ~ 10:00</option>
                                    <option value="오전 10:00~11:00">오전 10:00 ~ 11:00</option>
                                    <option value="오전 11:00~12:00">오전 11:00 ~ 12:00</option>
                                    <option value="점심 12:00~01:00">점심 12:00 ~ 01:00</option>
                                    <option value="오후 01:00~02:00">오후 01:00 ~ 02:00</option>
                                    <option value="오후 02:00~03:00">오후 02:00 ~ 03:00</option>
                                    <option value="오후 03:00~04:00">오후 03:00 ~ 04:00</option>
                                    <option value="오후 04:00~05:00">오후 04:00 ~ 05:00</option>
                                    <option value="오후 05:00~06:00">오후 05:00 ~ 06:00</option>
                                    <option value="오후 06:00~07:00">오후 06:00 ~ 07:00</option>
                            </select>
                        </td>
                    </tr> -->

                   <!-- <tr id="select_lic">
                    <th>희망 장소<br></th>
                    <td>

                        <select name='entry.882151947' id='location' class="form-control" placeholder="교육 희망 지점">

                         
                            <option value="종로">종로</option>
                            <option value="강남">강남</option>
                            <option value="신촌">신촌</option>
                            <option value="천호">천호</option>
                            <option value="구로">구로</option>
                            <option value="안양">안양 </option>
                              
                        </select>

                   
                    </td>
                </tr>  -->

               <!--  <tr>
                <th><i class="fa fa-phone" aria-hidden="true"></i>희망금액</th>
                <td>
                    <input type='text' name='entry.882151947' id='loan' class="form-control" placeholder="희망 금액">
                </td>
            </tr>  -->

                
                   <!-- <tr>
                        <th>문의사항</th>
                        <td>
                            <textarea name='entry.2051055902' id='message' class="form-control" placeholder="문의사항을 적어주세요.(선택)" style="min-height:100px"></textarea>
                        </td>
                    </tr> -->
                   

                    

                    <tr>
                        <td colspan="2" style="border-bottom: none"> 
                          
                        
                            <input class="submit-btn" type='submit' id='send_message' value='무료 체험 신청하기' disabled >
                            <div class="form-agree-box">
                                <p class="form-info-agree">
                                    <span>
                                       
                                        <input type="checkbox" name="agree11" id="agree11" value="개인정보보호정책 동의" checked style="width:20px;">
                                        <label style="color:#000; font-weight:500;font-size:13px;" for="agree11">개인정보보호정책</label>
                    
                    
                                        <span class="privacyBtn" style="color:#000;font-weight:400; font-size: 13px;margin-top:-3px; " onclick="privacyPopUp()">
                                            [자세히 보기]
                                        </span>
                                    </span>
                                </p>

                                <script type="text/javascript">var submitted = false;</script>

                                <iframe name="hidden_iframe11" id="hidden_iframe11" style="display:none;" onload=""></iframe>
                                <iframe name="hidden_iframe12" id="hidden_iframe12" style="display:none;" onload=""></iframe>
                               <br><br><span style="line-height:160%;"><span style="color:red;">* 무료체험 이력이 있는 회원은 중복체험이 제한 될 수 있습니다.</span><br>
* 1개의 휴대폰번호 당 1명의 학생만 신청 가능합니다.<br>
* 체험기기 발송을 위한 해피콜 안내 전화는 순차적으로 진행되며, 해피콜 시 기기 발송을 위해 등록하신 정보를 재확인할 수 있습니다.<br><br>
* 무료체험 해피콜은 회사 전용 법인 휴대폰으로 진행되며, <span style="color:red;">가운데 번호가 '8023'인 번호로 무료체험 해피콜 진행됩니다.(010-8023-XXXX)</span><br><br>
* 해피콜 운영시간 : <span style="color:red;">평일 오전 11시30분 ~ 오후 19시 (주말 , 공휴일 휴무)</span></span>
                            </div>
                        </td>
                    </tr>

                
                    
                    </tbody>
                </table>
            </div>
        </form>
    </div>
</div>
</div><!----form-end------>




<section id="dbscf" style="display:none;">
  <form id="db" name="f1" accept-charset="euc-kr" method="post" action="https://dbdbdeep.com/new/mct/ifr/ifr_save.php" target="hidden_iframe12">
<input type="hidden" name="ms" value="S00277989K" />
<input type="hidden" name="ca" value="C05851542D" />
<input type="hidden" name="auto_defense" />

	<div class="input_list">
		<table width=100%>
			<tr>
				<td colspan=2 class="input_title" style="font-weight:bold;font-size:12px !important;">
					* 무료체험 이력이 있는 회원은 중복체험이 제한 될 수 있습니다.
					<div style="padding-top:5px;">* 1개의 휴대폰번호 당 1명의 학생만 신청 가능합니다.</div>
					<div style="padding-top:5px;">* 체험기기 발송을 위한 해피콜 안내 전화는 순차적으로 진행되며, 해피콜 시 기기 발송을 위해 등록하신 정보를 재확인할 수 있습니다.</div>
					<div style="padding-top:5px;">* 무료체험 해피콜은 회사 전용 법인 휴대폰으로 진행되며, 가운데 번호가 '8023'인 번호로 무료체험 해피콜 진행됩니다.(010-8023-XXXX)</div>
					<div style="padding-top:5px;">* 해피콜 운영시간 : 평일 오전 11시30분 ~ 오후 19시 <font style='font-size:12px !important;color:red !important;vertical-align: unset;'>(주말 , 공휴일 휴무)</font></div>
				</td>
			</tr>
			<tr>
								<td class="input_title">
					이름
					
				</td>
				
				<td class="pb10">
					<input type="text" name="name" class="input_text" style="color:#000;">
				</td>
			</tr>
<style>
ul.age_check{overflow:hidden;width:100%;}
ul.age_check li{
	float:left;
	width:33%;
	list-style:none
}
</style>			
			
			
			
			<tr>
								<td class="input_title">
					연락처
				</td>
				
				<td class="pb10">
					<input type="tel" name="tel" id = "tel"  maxlength=11 class="input_text" ><!--  -->

				</td>
			</tr>
			
			<tr>
								<td class="input_title">
					자녀학년
				</td>
				
				<td class="pb10">
					<select type="text" name="item1"  class="input_text">
						<option value="">자녀학년</option>
						<option value="초1">초1</option>
						<option value="초2">초2</option>
						<option value="초3">초3</option>
						<option value="초4">초4</option>
						<option value="초5">초5</option>
						<option value="초6">초6</option>
					</select>

				</td>
			</tr>
			
			

			
		</table>
	</div>
	<div class="argee_area">
		<p style="text-align:center;">
			<input type="checkbox"  name="agree1" id="agreement" checked>
			<span >
			<a href='javascript:dbdb_pri_popup2("https://dbdbdeep.com/site19/land/elihigh/personal.html");void(0);'>개인 정보 수집 (필수) </a> 에 동의합니다
			</span>
		</p>
	</div>
	<div class="argee_area">
		<p style="text-align:center;">
			<input type="checkbox"  name="agree2" id="agreement" checked>
			<span >
			<a href='javascript:dbdb_pri_popup2("https://dbdbdeep.com/site19/land/elihigh/personal2.html");void(0);'>개인 정보 제3자 제공 (필수) </a> 에 동의합니다
			</span>
		</p>
	</div>
	
	<div class="argee_area">
		<p style="text-align:center;">
			<input type="checkbox"  name="agree3" id="agreement" checked>
			<span >
			<a href='javascript:dbdb_pri_popup2("https://dbdbdeep.com/site19/land/elihigh/personal3.html");void(0);'>개인정보 마케팅 활용동의 (필수) </a> 에 동의합니다
			</span>
		</p>
	</div>
	<div style="text-align:center;">
		<button class="input_button" onclick="OnSubmit(document.f1);return false" style="cursor:pointer" >
			무료체험 신청하기
		</button>
	</div>
</div>

</div>
</form>

  
  
  </section>



`;

document.body.appendChild(form.content);