UID_REGEX = "[A-Za-z0-9_-]{2,100}"
PUBKEY_REGEX = "(?![OIl])[1-9A-Za-z]{42,45}"
SIGNATURE_REGEX = "[A-Za-z0-9+/]+(?:=|==)?"
BLOCK_HASH_REGEX = "[0-9a-fA-F]{5,64}"
TRANSACTION_HASH_REGEX = "[0-9a-fA-F]{5,64}"
HASH_REGEX = "[A-F0-9]{64}"
BLOCK_ID_REGEX = "[0-9]+"
BLOCK_UID_REGEX = "{block_id_regex}-{block_hash_regex}".format(
    block_id_regex=BLOCK_ID_REGEX, block_hash_regex=BLOCK_HASH_REGEX
)
CONDITIONS_REGEX = (
    "(&&|\\|\\|| |[()]|(SIG\\({pubkey_regex}\\)|(XHX\\({hash_regex}\\))))*".format(
        pubkey_regex=PUBKEY_REGEX, hash_regex=HASH_REGEX
    )
)
IPV4_REGEX = (
    "(?:(?:[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}(?:[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4]["
    "0-9]|25[0-5])"
)
IPV6_REGEX = (
    "(?:(?:[0-9A-Fa-f]{1,4}:){6}(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:(?:[0-9]|[1-9][0-9]|1[0-9]{2}|2["
    "0-4][0-9]|25[0-5])\\.){3}(?:[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))|::(?:[0-9A-Fa-f]{1,"
    "4}:){5}(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:(?:[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){"
    "3}(?:[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))|(?:[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,"
    "4}:){4}(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:(?:[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){"
    "3}(?:[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))|(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,"
    "4})?::(?:[0-9A-Fa-f]{1,4}:){3}(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:(?:[0-9]|[1-9][0-9]|1[0-9]{2}|2["
    "0-4][0-9]|25[0-5])\\.){3}(?:[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))|(?:(?:[0-9A-Fa-f]{1,4}:){,"
    "2}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){2}(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:(?:[0-9]|[1-9]["
    "0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}(?:[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))|(?:(?:["
    "0-9A-Fa-f]{1,4}:){,3}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}:(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,"
    "4}|(?:(?:[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}(?:[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4]["
    "0-9]|25[0-5]))|(?:(?:[0-9A-Fa-f]{1,4}:){,4}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,"
    "4}|(?:(?:[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}(?:[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4]["
    "0-9]|25[0-5]))|(?:(?:[0-9A-Fa-f]{1,4}:){,5}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}|(?:(?:[0-9A-Fa-f]{1,"
    "4}:){,6}[0-9A-Fa-f]{1,4})?::)(?:%.+)?"
)
HOST_REGEX = "[a-z0-9-_.]*(?:.[a-zA-Z])?"
PATH_REGEX = "[/\\w \\.-]*/?"
WS2PID_REGEX = "[0-9a-f]{8}"
WS2P_PRIVATE_PREFIX_REGEX = "O[CT][SAM]"
WS2P_PUBLIC_PREFIX_REGEX = "I[CT]"
WS2P_HEAD_REGEX = "HEAD:?(?:[0-9]+)?"
EMPTY_HASH = "E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855"
