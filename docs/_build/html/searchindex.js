Search.setIndex({docnames:["duniterpy","duniterpy.api","duniterpy.api.bma","duniterpy.documents","duniterpy.grammars","duniterpy.key","index","modules"],envversion:53,filenames:["duniterpy.rst","duniterpy.api.rst","duniterpy.api.bma.rst","duniterpy.documents.rst","duniterpy.grammars.rst","duniterpy.key.rst","index.rst","modules.rst"],objects:{"":{duniterpy:[0,0,0,"-"]},"duniterpy.api":{bma:[2,0,0,"-"],errors:[1,0,0,"-"]},"duniterpy.api.bma":{api:[2,0,0,"-"],blockchain:[2,0,0,"-"],network:[2,0,0,"-"],node:[2,0,0,"-"],tx:[2,0,0,"-"],ud:[2,0,0,"-"],wot:[2,0,0,"-"],ws:[2,0,0,"-"]},"duniterpy.api.bma.api":{API:[2,1,1,""],ConnectionHandler:[2,1,1,""],parse_error:[2,4,1,""],parse_response:[2,4,1,""],parse_text:[2,4,1,""]},"duniterpy.api.bma.api.API":{connect_ws:[2,2,1,""],requests_get:[2,2,1,""],requests_post:[2,2,1,""],reverse_url:[2,2,1,""],schema:[2,3,1,""]},"duniterpy.api.bma.blockchain":{actives:[2,4,1,""],block:[2,4,1,""],blocks:[2,4,1,""],certifications:[2,4,1,""],current:[2,4,1,""],excluded:[2,4,1,""],hardship:[2,4,1,""],joiners:[2,4,1,""],leavers:[2,4,1,""],membership:[2,4,1,""],memberships:[2,4,1,""],newcomers:[2,4,1,""],parameters:[2,4,1,""],tx:[2,4,1,""],ud:[2,4,1,""]},"duniterpy.api.bma.network":{peer:[2,4,1,""],peering:[2,4,1,""],peers:[2,4,1,""]},"duniterpy.api.bma.node":{summary:[2,4,1,""]},"duniterpy.api.bma.tx":{blocks:[2,4,1,""],history:[2,4,1,""],process:[2,4,1,""],sources:[2,4,1,""],times:[2,4,1,""]},"duniterpy.api.bma.ud":{history:[2,4,1,""]},"duniterpy.api.bma.wot":{add:[2,4,1,""],certified_by:[2,4,1,""],certifiers_of:[2,4,1,""],certify:[2,4,1,""],lookup:[2,4,1,""],members:[2,4,1,""],requirements:[2,4,1,""],revoke:[2,4,1,""]},"duniterpy.api.bma.ws":{block:[2,4,1,""],peer:[2,4,1,""]},"duniterpy.api.errors":{DuniterError:[1,5,1,""]},"duniterpy.documents":{block:[3,0,0,"-"],certification:[3,0,0,"-"],constants:[3,0,0,"-"],crc_pubkey:[3,0,0,"-"],document:[3,0,0,"-"],membership:[3,0,0,"-"],peer:[3,0,0,"-"],transaction:[3,0,0,"-"]},"duniterpy.documents.block":{Block:[3,1,1,""],BlockUID:[3,1,1,""],block_uid:[3,4,1,""]},"duniterpy.documents.block.Block":{Empty_Hash:[3,3,1,""],blockUID:[3,3,1,""],computed_inner_hash:[3,2,1,""],fields_parsers:[3,3,1,""],from_signed_raw:[3,6,1,""],proof_of_work:[3,2,1,""],raw:[3,2,1,""],re_actives:[3,3,1,""],re_certifications:[3,3,1,""],re_different_issuers_count:[3,3,1,""],re_excluded:[3,3,1,""],re_exclusion:[3,3,1,""],re_hash:[3,3,1,""],re_identities:[3,3,1,""],re_issuer:[3,3,1,""],re_issuers_frame:[3,3,1,""],re_issuers_frame_var:[3,3,1,""],re_joiners:[3,3,1,""],re_leavers:[3,3,1,""],re_mediantime:[3,3,1,""],re_memberscount:[3,3,1,""],re_noonce:[3,3,1,""],re_number:[3,3,1,""],re_parameters:[3,3,1,""],re_parameters_v10:[3,3,1,""],re_powmin:[3,3,1,""],re_previoushash:[3,3,1,""],re_previousissuer:[3,3,1,""],re_revoked:[3,3,1,""],re_time:[3,3,1,""],re_transactions:[3,3,1,""],re_type:[3,3,1,""],re_unitbase:[3,3,1,""],re_universaldividend:[3,3,1,""],sign:[3,2,1,""]},"duniterpy.documents.block.BlockUID":{empty:[3,6,1,""],from_str:[3,6,1,""],re_block_uid:[3,3,1,""],re_hash:[3,3,1,""]},"duniterpy.documents.certification":{Certification:[3,1,1,""],Identity:[3,1,1,""],Revocation:[3,1,1,""]},"duniterpy.documents.certification.Certification":{fields_parsers:[3,3,1,""],from_inline:[3,6,1,""],from_signed_raw:[3,6,1,""],inline:[3,2,1,""],raw:[3,2,1,""],re_cert_timestamp:[3,3,1,""],re_idty_issuer:[3,3,1,""],re_idty_signature:[3,3,1,""],re_idty_timestamp:[3,3,1,""],re_idty_unique_id:[3,3,1,""],re_inline:[3,3,1,""],re_issuer:[3,3,1,""],re_timestamp:[3,3,1,""],re_type:[3,3,1,""],sign:[3,2,1,""],signed_raw:[3,2,1,""]},"duniterpy.documents.certification.Identity":{fields_parsers:[3,3,1,""],from_inline:[3,6,1,""],from_signed_raw:[3,6,1,""],inline:[3,2,1,""],raw:[3,2,1,""],re_inline:[3,3,1,""],re_issuer:[3,3,1,""],re_meta_ts:[3,3,1,""],re_timestamp:[3,3,1,""],re_type:[3,3,1,""],re_uid:[3,3,1,""],re_unique_id:[3,3,1,""]},"duniterpy.documents.certification.Revocation":{extract_self_cert:[3,7,1,""],fields_parsers:[3,3,1,""],from_inline:[3,6,1,""],from_signed_raw:[3,6,1,""],inline:[3,2,1,""],raw:[3,2,1,""],re_idtysignature:[3,3,1,""],re_inline:[3,3,1,""],re_issuer:[3,3,1,""],re_timestamp:[3,3,1,""],re_type:[3,3,1,""],re_uniqueid:[3,3,1,""],sign:[3,2,1,""],signed_raw:[3,2,1,""]},"duniterpy.documents.crc_pubkey":{CRCPubkey:[3,1,1,""]},"duniterpy.documents.crc_pubkey.CRCPubkey":{from_pubkey:[3,6,1,""],from_str:[3,6,1,""],is_valid:[3,2,1,""],re_crc_pubkey:[3,3,1,""]},"duniterpy.documents.document":{Document:[3,1,1,""],MalformedDocumentError:[3,5,1,""]},"duniterpy.documents.document.Document":{fields_parsers:[3,3,1,""],parse_field:[3,6,1,""],raw:[3,2,1,""],re_currency:[3,3,1,""],re_signature:[3,3,1,""],re_version:[3,3,1,""],sha_hash:[3,3,1,""],sign:[3,2,1,""],signed_raw:[3,2,1,""]},"duniterpy.documents.membership":{Membership:[3,1,1,""]},"duniterpy.documents.membership.Membership":{fields_parsers:[3,3,1,""],from_inline:[3,6,1,""],from_signed_raw:[3,6,1,""],inline:[3,2,1,""],raw:[3,2,1,""],re_block:[3,3,1,""],re_certts:[3,3,1,""],re_inline:[3,3,1,""],re_issuer:[3,3,1,""],re_membership_type:[3,3,1,""],re_type:[3,3,1,""],re_userid:[3,3,1,""]},"duniterpy.documents.peer":{BMAEndpoint:[3,1,1,""],ESSubscribtionEndpoint:[3,1,1,""],ESUserEndpoint:[3,1,1,""],Endpoint:[3,1,1,""],Peer:[3,1,1,""],SecuredBMAEndpoint:[3,1,1,""],UnknownEndpoint:[3,1,1,""],WS2PEndpoint:[3,1,1,""],endpoint:[3,4,1,""]},"duniterpy.documents.peer.BMAEndpoint":{API:[3,3,1,""],conn_handler:[3,2,1,""],from_inline:[3,6,1,""],inline:[3,2,1,""],re_inline:[3,3,1,""]},"duniterpy.documents.peer.ESSubscribtionEndpoint":{API:[3,3,1,""],conn_handler:[3,2,1,""],from_inline:[3,6,1,""],inline:[3,2,1,""],re_inline:[3,3,1,""]},"duniterpy.documents.peer.ESUserEndpoint":{API:[3,3,1,""],conn_handler:[3,2,1,""],from_inline:[3,6,1,""],inline:[3,2,1,""],re_inline:[3,3,1,""]},"duniterpy.documents.peer.Endpoint":{from_inline:[3,6,1,""],inline:[3,2,1,""]},"duniterpy.documents.peer.Peer":{fields_parsers:[3,3,1,""],from_signed_raw:[3,6,1,""],raw:[3,2,1,""],re_block:[3,3,1,""],re_endpoints:[3,3,1,""],re_pubkey:[3,3,1,""],re_type:[3,3,1,""]},"duniterpy.documents.peer.SecuredBMAEndpoint":{API:[3,3,1,""],conn_handler:[3,2,1,""],from_inline:[3,6,1,""],inline:[3,2,1,""],re_inline:[3,3,1,""]},"duniterpy.documents.peer.UnknownEndpoint":{API:[3,3,1,""],from_inline:[3,6,1,""],inline:[3,2,1,""]},"duniterpy.documents.peer.WS2PEndpoint":{API:[3,3,1,""],conn_handler:[3,2,1,""],from_inline:[3,6,1,""],inline:[3,2,1,""],re_inline:[3,3,1,""]},"duniterpy.documents.transaction":{InputSource:[3,1,1,""],OutputSource:[3,1,1,""],SIGParameter:[3,1,1,""],SimpleTransaction:[3,1,1,""],Transaction:[3,1,1,""],Unlock:[3,1,1,""],UnlockParameter:[3,1,1,""],XHXParameter:[3,1,1,""],reduce_base:[3,4,1,""]},"duniterpy.documents.transaction.InputSource":{from_inline:[3,6,1,""],inline:[3,2,1,""],re_inline:[3,3,1,""],re_inline_v3:[3,3,1,""]},"duniterpy.documents.transaction.OutputSource":{from_inline:[3,6,1,""],inline:[3,2,1,""],re_inline:[3,3,1,""]},"duniterpy.documents.transaction.SIGParameter":{from_parameter:[3,6,1,""],re_sig:[3,3,1,""]},"duniterpy.documents.transaction.SimpleTransaction":{is_simple:[3,7,1,""]},"duniterpy.documents.transaction.Transaction":{compact:[3,2,1,""],fields_parsers:[3,3,1,""],from_bma_history:[3,6,1,""],from_compact:[3,6,1,""],from_signed_raw:[3,6,1,""],raw:[3,2,1,""],re_blockstamp:[3,3,1,""],re_comment:[3,3,1,""],re_compact_blockstamp:[3,3,1,""],re_compact_comment:[3,3,1,""],re_header:[3,3,1,""],re_inputs:[3,3,1,""],re_issuers:[3,3,1,""],re_locktime:[3,3,1,""],re_outputs:[3,3,1,""],re_pubkey:[3,3,1,""],re_type:[3,3,1,""],re_unlocks:[3,3,1,""]},"duniterpy.documents.transaction.Unlock":{from_inline:[3,6,1,""],inline:[3,2,1,""],re_inline:[3,3,1,""]},"duniterpy.documents.transaction.UnlockParameter":{compute:[3,2,1,""],from_parameter:[3,6,1,""]},"duniterpy.documents.transaction.XHXParameter":{compute:[3,2,1,""],from_parameter:[3,6,1,""],re_xhx:[3,3,1,""]},"duniterpy.grammars":{output:[4,0,0,"-"]},"duniterpy.grammars.output":{CLTV:[4,1,1,""],CSV:[4,1,1,""],Condition:[4,1,1,""],Hash:[4,1,1,""],Int:[4,1,1,""],Operator:[4,1,1,""],Pubkey:[4,1,1,""],SIG:[4,1,1,""],XHX:[4,1,1,""]},"duniterpy.grammars.output.CLTV":{compose:[4,2,1,""],grammar:[4,3,1,""],token:[4,6,1,""]},"duniterpy.grammars.output.CSV":{compose:[4,2,1,""],grammar:[4,3,1,""],token:[4,6,1,""]},"duniterpy.grammars.output.Condition":{compose:[4,2,1,""],grammar:[4,3,1,""],token:[4,6,1,""]},"duniterpy.grammars.output.Hash":{regex:[4,3,1,""]},"duniterpy.grammars.output.Int":{regex:[4,3,1,""]},"duniterpy.grammars.output.Operator":{compose:[4,2,1,""],grammar:[4,3,1,""],regex:[4,3,1,""],token:[4,6,1,""]},"duniterpy.grammars.output.Pubkey":{regex:[4,3,1,""]},"duniterpy.grammars.output.SIG":{compose:[4,2,1,""],grammar:[4,3,1,""],token:[4,6,1,""]},"duniterpy.grammars.output.XHX":{compose:[4,2,1,""],grammar:[4,3,1,""],token:[4,6,1,""]},"duniterpy.key":{base58:[5,0,0,"-"],encryption_key:[5,0,0,"-"],signing_key:[5,0,0,"-"],verifying_key:[5,0,0,"-"]},"duniterpy.key.base58":{Base58Encoder:[5,1,1,""]},"duniterpy.key.base58.Base58Encoder":{decode:[5,7,1,""],encode:[5,7,1,""]},"duniterpy.key.encryption_key":{PublicKey:[5,1,1,""],SecretKey:[5,1,1,""]},"duniterpy.key.encryption_key.PublicKey":{base58:[5,2,1,""]},"duniterpy.key.encryption_key.SecretKey":{decrypt:[5,2,1,""],encrypt:[5,2,1,""]},"duniterpy.key.signing_key":{ScryptParams:[5,1,1,""],SigningKey:[5,1,1,""]},"duniterpy.key.verifying_key":{VerifyingKey:[5,1,1,""]},"duniterpy.key.verifying_key.VerifyingKey":{verify_document:[5,2,1,""]},duniterpy:{api:[1,0,0,"-"],documents:[3,0,0,"-"],grammars:[4,0,0,"-"],key:[5,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"],"5":["py","exception","Python exception"],"6":["py","classmethod","Python class method"],"7":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function","5":"py:exception","6":"py:classmethod","7":"py:staticmethod"},terms:{"class":[2,3,4,5],"d\u00e9c":3,"enum":4,"function":3,"int":[2,3,4],"new":3,"public":[2,5],"return":[2,3,5],"static":[3,5],"true":[2,3],AND:4,The:[2,3],about:2,accept:2,account:2,activ:[2,3],add:2,aiohttp:[2,3],all:2,amount:3,answer:2,api:[0,3,7],apirequest:2,applic:6,attr_of:4,attribut:4,author:[3,5],base58:[0,6,7],base58encod:5,base:[1,2,3,4,5],basic:[3,6],basic_merkled_api:3,between:2,block:[0,2,6,7],block_numb:3,block_uid:3,blockchain:[0,1,6],blockhash:3,blockid:3,blockstamp:3,blockuid:3,bma:[0,1,3,6],bmaendpoint:3,bool:2,bottom_signatur:3,can:6,cert:2,certif:[0,2,6,7],certifi:2,certification_t:3,certified_bi:2,certifiers_of:2,certt:3,certtimestamp:3,check:[3,5],classmethod:[3,4],client:3,clientrespons:2,clientsess:3,clientwebsocketrespons:2,cltv:4,com:6,comment:3,compact:3,compact_transact:3,compactblockstamp:3,compil:[3,4],compos:4,comput:3,computed_inner_hash:3,condit:[3,4],conn_handl:3,connect:[2,3],connect_w:2,connection_handl:2,connectionhandl:[2,3],constant:[0,6,7],contain:[2,3],content:7,contribut:6,count:2,crc:3,crc_pubkei:[0,6,7],crcpubkei:3,creat:3,csv:4,currenc:[2,3],currency_nam:3,current:[2,3],data:[1,2,3,5],decod:5,decrypt:5,deriv:2,describ:3,develop:6,dict:[2,3],different_issuers_count:3,differentissuerscount:3,dividend:2,dividend_amount:3,document:[0,2,5,6,7],done:3,dunit:[1,3,5],dunitererror:1,e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855:3,eas:2,empti:3,empty_hash:3,encod:5,encrypt:5,encryption_kei:[0,6,7],end:2,end_point_1:3,end_point_2:3,end_point_3:3,endpoint:3,entri:2,error:[0,2,6,7],es_subscription_api:3,es_user_api:3,essubscribtionendpoint:3,esuserendpoint:3,everi:2,except:[1,3],exclud:[2,3],expect:2,extract_self_cert:3,fals:2,field_nam:3,fields_pars:3,file:3,filter:3,fingerprint:3,first:2,follow:[3,6],format:3,found:6,from:[2,3],from_bma_histori:3,from_compact:3,from_inlin:3,from_paramet:3,from_pubkei:3,from_signed_raw:3,from_str:3,gener:3,generated_on:3,get:[2,3],github:6,given:[2,3],grammar:[0,6,7],handl:[3,6],handler:[2,3],hardship:2,has:3,has_com:3,hash:[3,4],help:6,helper:2,histori:2,http:6,http_scheme:2,ident:[2,3],identity_t:3,idtyissu:3,idtysignatur:3,idtytimestamp:3,idtyuniqueid:3,implement:3,index:[3,6],inform:2,inlin:3,inner_hash:3,innerhash:3,input:3,inputsourc:3,insid:2,inso:[3,5],instanc:[2,3],instanci:3,integ:3,interfac:2,intermedi:2,ipv4:3,ipv6:3,is_simpl:3,is_valid:3,issuer:[2,3],issuer_kei:3,issuers_fram:3,issuers_frame_var:3,issuersfram:3,issuersframevar:3,its:3,joiner:[2,3],json:[2,3],kei:[0,2,3,6,7],keyword:4,kwarg:[2,5],last:2,leaf:2,leav:2,leaver:[2,3],left:4,level:2,libnacl:5,librari:6,line:3,list:2,locktim:3,lookup:2,malform:3,malformeddocumenterror:3,maximum:3,median_d:3,mediantim:3,member:2,members_count:3,memberscount:3,membership:[0,2,6,7],membership_t:3,membership_typ:3,merkl:6,meta:3,modul:[6,7],multilin:4,must:3,name:4,nb_input:3,nb_issuer:3,nb_output:3,network:[0,1,6],newcom:2,next:2,node:[0,1,6],node_publickei:3,non:6,nonc:3,none:[2,3,4,5],noonc:[3,5],number:[2,3],number_of_zero:3,object:[2,3,5],oil:[3,4],one:3,ones:3,onli:3,oper:4,order:2,origin_id:3,other:2,out:3,output:[0,3,6,7],outputsourc:3,over:2,packag:[6,7],page:6,param:[3,5],paramet:[2,3],pars:2,parse_error:2,parse_field:3,parse_respons:2,parse_text:2,parser:4,pass:2,password:5,path:[2,3],peer:[0,2,6,7],pip:6,port:[2,3],post:2,powmin:3,present:3,prev_hash:3,prev_issu:3,previous_hash:3,previous_issuer_kei:3,previoushash:3,previousissu:3,privat:5,problem:6,process:2,proof_of_work:3,properti:3,provid:6,proxi:[2,3],pubkei:[2,3,4,5],pubkey_from:3,pubkey_to:3,public_kei:3,publickei:[3,5],pypeg2:4,raw:[2,3],re_act:3,re_block:3,re_block_uid:3,re_blockstamp:3,re_cert_timestamp:3,re_certif:3,re_certt:3,re_com:3,re_compact_blockstamp:3,re_compact_com:3,re_crc_pubkei:3,re_curr:3,re_different_issuers_count:3,re_endpoint:3,re_exclud:3,re_exclus:3,re_hash:3,re_head:3,re_ident:3,re_idty_issu:3,re_idty_signatur:3,re_idty_timestamp:3,re_idty_unique_id:3,re_idtysignatur:3,re_inlin:3,re_inline_v3:3,re_input:3,re_issu:3,re_issuers_fram:3,re_issuers_frame_var:3,re_join:3,re_leav:3,re_locktim:3,re_mediantim:3,re_memberscount:3,re_membership_typ:3,re_meta_t:3,re_noonc:3,re_numb:3,re_output:3,re_paramet:3,re_parameters_v10:3,re_powmin:3,re_previoushash:3,re_previousissu:3,re_pubkei:3,re_revok:3,re_sig:3,re_signatur:3,re_tim:3,re_timestamp:3,re_transact:3,re_typ:3,re_uid:3,re_unique_id:3,re_uniqueid:3,re_unitbas:3,re_universaldividend:3,re_unlock:3,re_userid:3,re_vers:3,re_xhx:3,reduc:3,reduce_bas:3,regex:4,replac:3,request:[2,6],requests_get:2,requests_post:2,requir:2,respons:2,revers:2,reverse_url:2,revoc:[2,3],revok:[2,3],right:4,rtype:3,salt:5,schema:2,scheme:2,scrypt_param:5,scryptparam:5,search:[2,6],secretkei:5,securedbmaendpoint:3,self:3,selfcert:3,server:[2,3],session:[2,3],sha_hash:[3,4],should:2,sig:[3,4],sign:[2,3,5,6],signatur:[2,3],signed_raw:3,signer:5,signing_kei:[0,6,7],signingkei:5,sigparamet:3,simpl:3,simpletransact:3,simpli:6,single_input:3,sourc:[2,3],specifi:[3,5],start:2,str:[2,3,4],string:3,structur:2,submodul:[0,6,7],subpackag:[6,7],subtyp:4,summari:2,text:[2,5],thi:2,thing:4,time:[2,3,4],timestamp:[2,3,4],token:4,transact:[0,2,6,7],trust:2,tupl:3,two:3,tx_data:3,tx_version:3,type:[2,3,6],uid:[2,3],uniqueid:3,unit_bas:3,unitbas:3,univers:2,universaldividend:3,unknownendpoint:3,unlock:3,unlockparamet:3,url:[2,3],use:2,used:2,user_id:3,userid:3,using:2,valid:2,valu:3,verifi:5,verify_docu:5,verifying_kei:[0,6,7],verifyingkei:5,version:3,wai:6,warn:3,web:2,websocket:2,welcom:6,which:3,wot:[0,1,6],wot_mem_count:3,wrapper:2,write:2,ws2p:3,ws2pendpoint:3,ws2pid:3,ws_scheme:2,xhx:[3,4],xhxparamet:3},titles:["duniterpy package","duniterpy.api package","duniterpy.api.bma package","duniterpy.documents package","duniterpy.grammars package","duniterpy.key package","duniterpy : A python implementation of duniter API","duniterpy"],titleterms:{api:[1,2,6],base58:5,block:3,blockchain:2,bma:2,certif:3,code:6,constant:3,content:[0,1,2,3,4,5,6],crc_pubkei:3,document:3,dunit:6,duniterpi:[0,1,2,3,4,5,6,7],encryption_kei:5,error:1,grammar:4,implement:6,indic:6,instal:6,kei:5,membership:3,modul:[0,1,2,3,4,5],network:2,node:2,output:4,packag:[0,1,2,3,4,5],peer:3,python:6,signing_kei:5,sourc:6,submodul:[1,2,3,4,5],subpackag:[0,1],tabl:6,transact:3,verifying_kei:5,wot:2}})