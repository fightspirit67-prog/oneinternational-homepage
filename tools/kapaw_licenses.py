# 카파우 오픈소스 라이선스 전문 (2026-10-19): make_kapaw_docs.py가 kapaw/licenses.html 본문으로 쓴다.
#   대상: 출시 빌드(AAB 261019021)와 Firebase iOS SDK에 들어가는 구성 요소.
#   근거: 게임 저장소 Docs/Reports/IP_AUDIT_INREPO_2026-10-19.md. 구성 요소가 바뀌면 이 목록도 고친다.
#   약관(terms.html) 맨 아래 "오픈소스 라이선스" 줄에서만 연결한다 (앞에 내세우지 않음 — 사용자 결정).
import html

MIT_TEXT = """Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE."""

BSD3_TEXT = """Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

    * Redistributions of source code must retain the above copyright
notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above
copyright notice, this list of conditions and the following disclaimer
in the documentation and/or other materials provided with the
distribution.
    * Neither the name of the copyright holder nor the names of its
contributors may be used to endorse or promote products derived from
this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE."""

ZLIB_TEXT = """This software is provided 'as-is', without any express or implied
warranty. In no event will the authors be held liable for any damages
arising from the use of this software.

Permission is granted to anyone to use this software for any purpose,
including commercial applications, and to alter it and redistribute it
freely, subject to the following restrictions:

1. The origin of this software must not be misrepresented; you must not
   claim that you wrote the original software. If you use this software
   in a product, an acknowledgment in the product documentation would be
   appreciated but is not required.
2. Altered source versions must be plainly marked as such, and must not be
   misrepresented as being the original software.
3. This notice may not be removed or altered from any source distribution."""

BORINGSSL_NOTICE = """This product includes software developed by the OpenSSL Project
for use in the OpenSSL Toolkit. (http://www.openssl.org/)
This product includes cryptographic software written by Eric Young (eay@cryptsoft.com).

Copyright (c) 1998-2011 The OpenSSL Project. All rights reserved.
Copyright (C) 1995-1998 Eric Young (eay@cryptsoft.com). All rights reserved.
Copyright (c) 2015, Google Inc."""


def _pre(text):
    return ('<pre style="white-space:pre-wrap;font-size:13px;line-height:1.5;background:#f6f6f6;'
            'padding:12px;border-radius:6px;overflow-x:auto">' + html.escape(text) + '</pre>')


def _part(name, where, notice, text):
    body = _pre(notice + '\n\n' + text)
    return f'''
                <h2>{name}</h2>
                <p>{where}</p>
                {body}
'''


APACHE = '''                <p>카파우에 쓰인 오픈소스 구성 요소와 라이선스입니다.</p>

                <h2>Apache License 2.0</h2>
                <p>Firebase Unity SDK·Android·iOS 라이브러리, Google Mobile Ads Unity 플러그인과 User Messaging Platform, Google Play Core·Review, AndroidX, Kotlin 표준 라이브러리, kotlinx.coroutines, gRPC, OkHttp, Okio, Guava, Gson, javax.inject, Abseil, GoogleUtilities, GTMSessionFetcher, PromisesObjC 등은 <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank" rel="noopener">Apache License 2.0</a>에 따라 제공됩니다. 각 저작권은 해당 저작자(Google LLC, The Android Open Source Project, JetBrains s.r.o., Square, Inc., The gRPC Authors 등)에게 있습니다.</p>
'''

BORINGSSL = f'''
                <h2>BoringSSL</h2>
                <p>Firebase iOS SDK(gRPC)에 포함. OpenSSL License, SSLeay License, ISC License에 따라 제공됩니다. 전문: <a href="https://boringssl.googlesource.com/boringssl/+/HEAD/LICENSE" target="_blank" rel="noopener">BoringSSL LICENSE</a></p>
                {_pre(BORINGSSL_NOTICE)}
'''

FONTS = '''
                <h2>글꼴</h2>
                <p>주아체(Copyright 2018 The Jua Project Authors)와 Liberation Sans(Copyright 2012 Red Hat, Inc.)는 <a href="https://openfontlicense.org" target="_blank" rel="noopener">SIL Open Font License 1.1</a>에 따라 쓰였습니다.</p>
'''

LICENSES = (APACHE
            + _part('MiniJSON', 'Firebase Unity SDK에 포함',
                    'Copyright (c) 2013 Calvin Rien\nBased on the JSON parser by Patrick van Bergen', MIT_TEXT)
            + _part('Checker Framework qualifiers (checker-qual)', 'Android 라이브러리에 포함',
                    'Copyright 2004-present by the Checker Framework developers', MIT_TEXT)
            + _part('Protocol Buffers (protobuf-javalite)', 'Android 라이브러리에 포함',
                    'Copyright 2008 Google Inc. All rights reserved.', BSD3_TEXT)
            + _part('LevelDB', 'Firebase iOS SDK(Firestore)에 포함',
                    'Copyright (c) 2011 The LevelDB Authors. All rights reserved.', BSD3_TEXT)
            + _part('nanopb', 'Firebase iOS SDK에 포함',
                    'Copyright (c) 2011 Petteri Aimonen <jpa at nanopb.mail.kapsi.fi>', ZLIB_TEXT)
            + BORINGSSL
            + FONTS)
