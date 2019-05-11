import unittest

import jsonschema

from duniterpy.api.client import Client, parse_text
from duniterpy.api.endpoint import BMAEndpoint
from duniterpy.api.ws2p.network import heads, WS2P_HEADS_SCHEMA
from duniterpy.api.ws2p.requests import GET_CURRENT_RESPONSE_SCHEMA, ERROR_RESPONSE_SCHEMA
from tests.api.webserver import WebFunctionalSetupMixin, web


class TestWs2pHeads(WebFunctionalSetupMixin, unittest.TestCase):

    def test_block(self):
        json_sample = {
            "heads": [
                {
                    "message": "WS2POCAIC:HEAD:1:8iVdpXqFLCxGyPqgVx5YbFSkmWKkceXveRd2yvBKeARL:\
                    102102-000002C0694C7D373A78B095419C86584B81804CFB9641B7EBC3A18040B6FEE6:e66254bf:duniter:1.6.20:1",
                    "sig": "ZO5gSUMK6IaUEwU4K40nhuHOfnJ6Zfn8VS+4Ko2FM7t+mDsHf+3gDRT9PgV2p0fz81mF6jVYWpq2UYEsnK/gCg==",
                    "messageV2": "WS2POCAIC:HEAD:2:8iVdpXqFLCxGyPqgVx5YbFSkmWKkceXveRd2yvBKeARL:\
                    102102-000002C0694C7D373A78B095419C86584B81804CFB9641B7EBC3A18040B6FEE6:e66254bf:\
                    duniter:1.6.20:1:15:14",
                    "sigV2": "ReXzbgUya9jo4dL/R4g19Y+RE9BGB0xDkw7mrBWoldlRLkq3KFyRkAf9VthVx1UUb/AINr3nxImZKVQiVH9+DQ==",
                    "step": 0
                },
                {
                    "message": "WS2POCAIC:HEAD:1:2ny7YAdmzReQxAayyJZsyVYwYhVyax2thKcGknmQy5nQ:\
                    102102-000002C0694C7D373A78B095419C86584B81804CFB9641B7EBC3A18040B6FEE6:a0a45ed2:duniter:1.6.21:1",
                    "sig": "pXLMmOpyEMdWihT183g/rnCvMzA2gHki5Cxg7rEl3psQu0RuK0ObCv5YFhmQnRlg+QZ1CWfbYEEbm3G1eGplAQ==",
                    "messageV2": "WS2POCAIC:HEAD:2:2ny7YAdmzReQxAayyJZsyVYwYhVyax2thKcGknmQy5nQ:\
                    102102-000002C0694C7D373A78B095419C86584B81804CFB9641B7EBC3A18040B6FEE6:a0a45ed2:\
                    duniter:1.6.21:1:34:28",
                    "sigV2": "p5f7/KfQqjTaCYSMUXpjUDH7uF2DafetHNgphGzkOXgxM+Upeii0Fz2RFBwnZvN+Gjp81hAqSuH48PJP6HJSAw==",
                    "step": 1
                },
                {
                    "message": "WS2POCA:HEAD:1:GRBPV3Y7PQnB9LaZhSGuS3BqBJbSHyibzYq65kTh1nQ4:\
                    102102-000002C0694C7D373A78B095419C86584B81804CFB9641B7EBC3A18040B6FEE6:6d0e96f9:duniter:1.6.21:1",
                    "sig": "h9o1XBEV18gUzbvj1jdQB1M7U8ifZprIyVwLdlSQEfeG9WZLvZAjYzLGA2nD6h/9RkJLOJPzIQJXysHUHJ2dDQ==",
                    "messageV2": "WS2POCA:HEAD:2:GRBPV3Y7PQnB9LaZhSGuS3BqBJbSHyibzYq65kTh1nQ4:\
                    102102-000002C0694C7D373A78B095419C86584B81804CFB9641B7EBC3A18040B6FEE6:6d0e96f9:\
                    duniter:1.6.21:1:20:20",
                    "sigV2": "VsyQmXOUYrfHWy0FeS4rJrIJCUBI+3BergbSYQ78icJWV6MQzZSw7Z+Yl7urujCYZriDQM76D6GW+6F0EELpBQ==",
                    "step": 2
                },
            ]
        }

        jsonschema.validate(json_sample, WS2P_HEADS_SCHEMA)

    def test_ws2p_heads_bad(self):
        async def handler(request):
            await request.read()
            return web.Response(body=b'{}', content_type='application/json')

        async def go():
            _, port, url = await self.create_server('GET', '/network/ws2p/heads', handler)
            with self.assertRaises(jsonschema.ValidationError):
                client = Client(BMAEndpoint("127.0.0.1", "", "", port))
                await client(heads)
            await client.close()

        self.loop.run_until_complete(go())

    def test_get_current_validation(self):
        response_string = """{"resId":"cfe10cc4","body":{"wrong":false,"version":11,"number":367572,
        "currency":"g1-test","hash":"000024399D612753E59D44415CFA61F3A663919110CD2EB8D30C93F49C61E07F",
        "previousHash":"00007A2931B1B33351151058E8FE5C8368C9A7C6F13F37FEB92AA67B17B7EC46",
        "issuer":"7BGpV28HzE6fyZtteuPmwHf6fHwHkQ9Ssww3Cxq82NnT",
        "previousIssuer":"CrznBiyq8G4RVUprH9jHmAw1n1iuzw8y9FdJbrESnaX7","dividend":null,"time":1557357655,
        "powMin":65,"unitbase":1,"membersCount":18,"issuersCount":4,"issuersFrame":21,"issuersFrameVar":0,
        "identities":[],"joiners":[],"actives":[],"leavers":[],"revoked":[],"excluded":[],"certifications":[],
        "transactions":[],"medianTime":1557355021,"fork":false,"parameters":"",
        "inner_hash":"BA4D939F40D3B6D036659F6B7E0881D69054ADFF399533B44E1D5A9983235721",
        "signature":"Ks0ugrWCZ/jBDyFQ77TnzTIKJrv2lBJKwQqVW64ZEESgD++J4pjPCEP0WDmcbm65VAomKbnkWOJsThdAIgj2DA==",
        "nonce":10400000002073,"monetaryMass":144418724,"writtenOn":367572,
        "written_on":"367572-000024399D612753E59D44415CFA61F3A663919110CD2EB8D30C93F49C61E07F"}} """
        response = parse_text(response_string, GET_CURRENT_RESPONSE_SCHEMA)
        self.assertIsInstance(response, dict)
        error_response_string = """{"resId":"cfe10cc4","err":"Error message"}"""
        error_response = parse_text(error_response_string, ERROR_RESPONSE_SCHEMA)
        self.assertIsInstance(error_response, dict)
