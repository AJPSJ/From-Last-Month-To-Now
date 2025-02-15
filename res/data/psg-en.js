const passages = {
    "02-14-2025": { "entry" : atob("SSBjYW4ndCB0aGluayBvZiBhIHByb3BlciB2YWxlbnRpbmVzIGdpZnQgZm9yIHlvdSBzbyBJIHRob3VnaHQgSSdkIG1ha2UgdGhpcy4uLiBJIGRvbid0IHRoaW5rIGl0J3MgeW91ciB0eXBlIG9mIGdpZnQgZWl0aGVyIGJ1dCBJIHdhbnRlZCB0byB0cnkuIEkgZG9uJ3QgdGhpbmsgaXQncyBhIGxvdmUgbGV0dGVyIGV4YWN0bHkuLi4gSSdtIGp1c3QgbWFraW5nIGV4Y3VzZXMgdG8gd3JpdGUgbXkgbWluZCBvdXQgZm9yIHlvdSB0byByZWFkLiBJIG5ldmVyIHdyb3RlIGEgbGV0dGVyIHRvIGFueW9uZSAobWF5YmUgdW50aWwgbm93KSwgYnV0IEkgdXNlZCB0byB3cml0ZSBteSBvd24gam91cm5hbHMgZXZlbiB0aG91Z2ggdGhleSB3ZXJlIG5vdCBjb25zaXN0ZW50LCBzbyB0aGUgd3JpdGluZyB3aWxsIGJlIGluIGEgZm9ybSBvZiBhIGRpYXJ5LiBJJ20gc29ycnksIEkgY2FuJ3QgdGhpbmsgb2YgYW55dGhpbmcgZWxzZSBiZXR0ZXIuCgpUaGUgcGFzc2FnZSB3aWxsbCBjaGFuZ2UgZGFpbHkgc3RhcnRpbmcgZnJvbSBub3cuIE5vIGNoZWF0aW5nIGJ5IGxvb2tpbmcgYXQgdGhlIGdpdGh1YiBhbmQgdGhlIGluc3BlY3QgZWxlbWVudCEgVGhpcyBpcyBwcm9iYWJseSBoYXJkIGNvZGVkIHNvIHlvdSdsbCBqdXN0IHN0cmFpZ2h0IHVwIHNlZSBteSBub3Rlcy4gSWYgeW91IG1pc3MgYSBkYXksIGFsbCBvZiBpdCB3aWxsIGJlIHJldmVhbGVkIGJ5IHRoZSBlbmQgb2YgdGhpcyBwcm9qZWN0IChhIG1vbnRoIGZyb20gbm93KSBzbyBpdCdzIG5vIGJpZyBkZWFsLg=="),
        "image" : "res/img/RolandFullBody.png"},

    "02-15-2025": { "entry" : atob("TmFnbGFrYWQgdGF5byBuZyBrYWxheWFhbiBicmlkZ2UgdGFwb3Mga3VtYWluIG5nIG1hbm9rIDpWIG1hc2FyYXAgZGluIHl1bmcgZ2FiaSBoZWhlLiBCdXQgSSBzZXJpb3VzbHkgY2FudCBzdHJlc3MgaG93IG11Y2ggSSBsb3ZlIHlvdS4gSWYgbG92ZSB3YXMgYSBjb21wZXRpdGlvbiBiZXR3ZWVuIHVzLCBJJ2Qgc3dlZXAsIGV2ZW4gdGhvdWdoIHRoYXQgd291bGQgYmUgdGhlIG9ubHkgY29tcGV0aXRpb24gSSdkIHdpbiBhZ2FpbnN0IHlvdS4="),
        "image" : "res/img/RolandFullBody.png"},

    "02-16-2025": { "entry" : atob("TWFpbWFpISEhISEhIChDaHVuaXRobSkgTWVkeW8gbmFpaWxhbmcgYWtvIGthcGFnIDJuZCBwZXJzb24ga2l0YSBuaXJlcmVmZXIgKGlrYXcveW91KSBpbWJpcyBuYSAzcmQgcGVyc29uIChzaXlhL2hpbSkgaGFoYS4gSWRrLCBiYWthIG1hZyBpYmEgd3JpdGluZyBzdHlsZSBrby4gQmFrYSBuYWtva29ybmloYW4ga2FuYSwga2FzZSBha28gb28uIERheSAzIHBhbGFuZyBUVCBzYW5hIG1haGFsIG1vIHBhIHJlbiBhcSBrYWhpdCB3YWxhIGFrb25nIHNraWxscyBvIHBlcmEuIEFuZyB3ZWlycnJyZCBidW1hYmFuYXQgYWtvIGthaGl0IGFsYW0ga29uZyBtYWJhYmFzYSBtbyByaW4gdG8gaHVodQ=="),
        "image" : "res/img/RolandFullBody.png"},

    "02-17-2025": { "entry" : atob("VVAgdG93biB3YXMgYXdlc29tZSBhbmcgZ2FnYW5kYSBuZyBtZ2EgcHdlZGUgdGFtYmF5YW4uIERhaGlsIGRpbiBkaXRvIG5hZGlzY292ZXIga28gbmEgaXNhbmcgYnVzIGxhbmcgeXVuZyAgU00gSHlwZXJtYXJrZXQsIHRhYmkgbm9uIFRpZW5kaXNpdGFzLiBNYXJhbWluZyBkb2dpcyBkb24gbmEgYmluZWJlbnRhIHRhcyBuYWthZGlzcGxheS4gTWVyb24gcGFuZyB0aW51cm8gc2kgU29maWEgbmEgQkdDIG5nIFRhZ3VpZyBuYSBpc2FuZyBzYWtheSBsYW5nIGRpbi4gTWF5IG1nYSBwd2VkZW5nIHBhZ2dhbGFhbiEhISEgU2F5YW5nIGthc2UgcGFyYW5nIGRpIHRheW8geXVuZyB0eXBlIG5hIGd1bWFsYSBsYW5nIHNhIG1hbGxzIGthc2kgYW5nIGlpa2xpIG5nIG1nYSBsYWxha2FyYW4gOlYgZHVuIG5hbGFuZyB0YXlvIHNhIEFyY292aWEgaGVoZQ=="),
        "image" : "res/img/RolandFullBody.png"},

    "02-18-2025": { "entry" : atob("V2hhdCB3b3VsZCB5b3VyIHlvdW5nZXIgc2VsZiB0aGluayBhYm91dCB5b3Ugbm93PyBJIGhhdmUgbXVsdGlwbGUgYXNzdW1wdGlvbnMgZm9yIG1pbmUsIG9uZSBvZiB3aGljaCBpcyB0aGF0IHNoZSdkIGJlIGRpc2FwcG9pbnRlZCBhbmQgYml0dGVyIGJlY2F1c2UgSSdtIHNvIGhhcHB5IHdpdGggeW91LiBNYXliZSBwcm91ZCBiZWNhdXNlIEkndmUgY29tZSBmYXIsIGV2ZW4gdGhvdWdoIEkgY2FuJ3QgYnJpbmcgbXlzZWxmIHRvIHB1cnN1ZSBteSBzdHVkaWVzIHJpZ2h0IG5vdy4gV2hhdCB3b3VsZCBoZSB0aGluayBvZiB5b3U/IEFuZCB3aGF0IHdvdWxkIGhlIHRoaW5rIG9mIG1lPyBTaW5jZSBpdCdzIHN0aWxsIHlvdSBhZnRlciBhbGwsIEkgaG9wZSBJIGdldCBhIGdvb2QgZmlyc3QgaW1wcmVzc2lvbiA6KQ=="),
        "image" : "res/img/RolandFullBody.png"},

    "02-19-2025": { "entry" : atob("SSBzdGlsbCBjYW4ndCBnZXQgaXQgb2ZmIG15IG1pbmQuIE15IHJlZ3JldHMsIG15IG1pc3Rha2VzLiBJJ20gc29ycnkgZm9yIHRoZSB0aGluZ3MgSSd2ZSBkb25lIHRvIGh1cnQgeW91LCBJIHRydWx5IGFtLiBCdXQgc2F5aW5nIHNvcnJ5IGZlZWxzIGZha2UgYmVjYXVzZSBJJ3ZlIHVzZWQgdGhhdCB3b3JkIGNvdW50bGVzcyB0aW1lcyBub3cuIEFuZCB0cnlpbmcgdG8gIm1vdmUgb24gYW5kIGRvIGJldHRlciIgZmVlbHMgd3JvbmcgYmVjYXVzZSBpdCBzdGlsbCBmZWVscyBsaWtlIHdlIGhhdmVuJ3QgZnVsbHkgYWRkcmVzc2VkIHdoYXQgSSBkaWQgd3JvbmcuIEl0J3MgbGlrZSBteSBtaW5kIGlzIGxvb2tpbmcgZm9yIGEgcHVuaXNobWVudC4gSXQncyBsaWtlIEknbSB3YWl0aW5nIHRvIGJlIGh1cnQsIHRoYXQgSSdtIG92ZXJwcmVwYXJpbmcgdG8gZ2V0IGh1cnQuIEknbSBzb3JyeSB5b3UgaGF2ZSB0byBkZWFsIHdpdGggbWUu"),
        "image" : "res/img/RolandFullBody.png"},

    "02-20-2025": { "entry" : atob("SSdtIGdvb2Qgd2l0aCBvdGhlciBwZW9wbGUncyBlbW90aW9ucyBidXQgaXQgZmVlbHMgc28gdW5mYWlyIHRoYXQgSSBjYW4ndCBkZWFsIHdpdGggbXkgb3duLiBBbmQgaXQgZnJ1c3RyYXRlcyBtZSBtb3JlIHdoZW5ldmVyIEkgY2FuJ3Qgc2VlbSB0byByZWFkIHRocm91Z2ggeW91LCBlc3BlY2lhbGx5IHdoZW4geW91J3JlIChwcm9iYWJseSB1bmNvbnNjaW91c2x5KSBibG9ja2luZyBtZSBvZmYuIFdoZW5ldmVyIEknbSB0ZW5kaW5nIHRvIG90aGVyIHBlb3BsZSwgaXQgZmVlbHMgbGlrZSBJJ20gdGVuZGluZyB0byBteXNlbGYgYmVjYXVzZSBJIHNlZSBteXNlbGYgaW4gdGhlbSwgb3IgaW4geW91LiBCdXQgb2YgY291cnNlLCBpbiB0aGUgZW5kLCB0aGF0IHdhc24ndCBtZS4gSSBndWVzcyBJIHdhbnRlZCB0byB0cnkgYmVpbmcgbmljZSB0byB3aGF0IEkgY2FuIHNlZSBteXNlbGYgaW4gdG8gZmVlbCBiZXR0ZXIgYWJvdXQgbXlzZWxmLiBJdCBtaWdodCBiZSB1bmNvbnNjaW91cyBjb3BpbmcuIEkgd2lzaCBJIGNhbiBzaG93IHRoYXQgZGlyZWN0bHkgdG8gbXlzZWxmIGluc3RlYWQuIE1heWJlIEkgY2FuIGxvdmUgeW91IGJldHRlciB0aGVuLg=="),
        "image" : "res/img/RolandFullBody.png"},

    "02-21-2025": { "entry" : atob("SSB3YW50IHRvIHN0b3J5IGVhY2ggbW9tZW50IEkgaGF2ZSB3aXRoIGhpbSAocGxlYWRpbmcgZmFjZSkgQnV0IEkgZW5qb3kgZWFjaCBtb21lbnQgd2l0aCBoaW0gc28gbXVjaCB0aGF0IG1vc3Qgb2YgdGhlIHRpbWUgSSBqdXN0IGZvcmdldC4gVGhlIHdvcmxkIGFscmVhZHkga25vd3MgaG93IG11Y2ggaW0gaW50byBoaW0gYnV0IGlnIGl0cyBub3QgZW5vdWdoIGkgd2FudCBpdCB0byBiZSBldmVyeW9uZXMgcHJvYmxlbS4uLi4uLi4uLi4KSSBhY2Nlc3NlZCBteSBvbGQgcGhvbmUgYSBmZXcgZGF5cyBhZ28gYW5kIGxvb2tpbmcgYXQgaGlzIG9sZGVyIHBpY3R1cmVzIG1ha2VzIG15IGhlYXJ0IGZ1Y2tpbmcgbWVsdCBpdHMgbGlrZSBJJ20gZmFsbGluZyBpbiBsb3ZlIGFnYWluIGNhdXNlIGlzdGcgdGhpcyBpcyB0aGUgc2FtZSBmZWVsaW5nIGFzIGJhY2sgdGhlbiwganVzdCBldmVuIGJldHRlciBub3cgY2F1c2UgaGUncyBhY3R1YWxseSBnb2luZyBvdXQgd2l0aCBtZSA6MyBhbGwgbXkgbGlmZSdzIHdvcnRoIG9mIGx1Y2sncyBiZWVuIGRyYWluZWQgYmVjYXVzZSBJIHNwZW50IGl0IGFsbCBvbiBoaW0gaSBsb29vb29vb29vb3ZlIGxvdmUgbG92ZSBoaW0gc28gbXVjaCBJIGNvdWxkIGNyeSBpIGp1c3QgaG9wZSBoZSBmZWVscyBob3cgbXVjaCBJIGxvdmUgaGltLgpOdm0gbWFuIGkgcmVhZCBzb21lIG9mIG15IG9sZCBkaWFyeSBwYXNzYWdlcyBhbmQgaSBmZWVsIHNhZCBhcyBzaGl0IGhlIHJlYWxseSBkaWQgbWFrZSB3b25kZXJzIHdvcmsgdG8ga2VlcCBtZSBoYXBweSBhbmQgaSBjYW50IHRoYW5rIGhpbSBlbm91Z2ggZm9yIHRoYXQuCk5vLCBJIHNlcmlvdXNseSBjYW4ndCBiZWxpZXZlIGl0LiBSZWFkaW5nIG15IG9sZGVyIHBhc3NhZ2VzIG1ha2VzIG15IGhlYXJ0IHR3aXN0IGEgbG90LiBJdCBqdXN0IGZlZWxzIHJlYWxseSB1bnJlYWwuLi4KTm90ZSBpcyB0aXRsZWQgIkl0J3MgYSBzbWFsbCBjb25mZXNzaW9uIiBhbmQgaXRzIGdvdCBzb21lIG9mIHRoZSBtb3N0IGd1dCB3cmVuY2hpbmcgY29udGV4dCBpdmUgZXZlciByZWFkIGFib3V0IG1lLiBNeSBtb3V0aCByZWFsbHkgcnVucyBvbiBpdHMgb3duIHdoZW4gSSB0YWtlIG9mZiB0aGUgYnJha2VzLCBodWg/"),
        "image" : "res/img/RolandFullBody.png"},

    "02-22-2025": { "entry" : atob("SSBrZWVwIGZvcmdldHRpbmcgdG8gbG9nIG9udG8gc29tZSBkYXlzLiBUaGlzIHRpbWUsIEkgYWN0dWFsbHkgZm9yZ290IHdoYXQgSSB3YXMgc3VwcG9zZWQgdG8gd3JpdGUgOiggcHJvYmFibHkgbm90IGEgYmlnIGRlYWwgdG8geW91IGFueXdheSBzbyBpdHMgZmluZS4gU2FuYSBoaW5kaSBrYSBtYXN5YWRvIHdlaXJkZWQgb3V0IG5hIGd1bWF3YSBha28gbmcgZ2FudG8gcGFyYSBzYXlvLg=="),
        "image" : "res/img/RolandFullBody.png"},

    "02-23-2025": { "entry" : atob("U3RpbGwgd29ycmllZCBhYm91dCBteSBmdXR1cmUgY2FyZWVyLiBJIGdlbnVpbmVseSBmZWVsIGxpa2UgdGhpcyBpcyB0aGUgb25seSBmaWVsZCBmaXQgZm9yIG1lLCBidXQgc3RpbGwuIEkgY2FuJ3Qgc2VlbSB0byBkbyBpdC4gSSdsbCBsZXQgeW91IGluIG9uIHRoaXMgb25lLgpJIGZlZWwgaGVhdmlseSwgZXh0cmVtZWx5IGVudmlvdXMgb2YgZXZlcnlvbmUuIEV2ZXJ5b25lJ3Mgd2lsbGluZyB0byBjaGFuZ2UgY291cnNlIHRvIHdoZXJlIHRoZXkgZml0IGJldHRlciwgZXZlcnlvbmUncyBsb29raW5nIGZvciB0aGVpciByaWdodCBwYXRoLCBldGMgZXRjLiBNZWFud2hpbGUsIEknbSBhZnJhaWQuIFdpbGwgSSBzdWNjZWVkPyBXaWxsIEkgbGl2ZSBhIGNvbWZvcnRhYmxlIGxpZmU/IElzIHRoZSBwYXRoIEknbSB0YWtpbmcgZW5vdWdoIHRvIGxhbmQgbWUgYSBzdGFibGUgbGlmZT8gSSB0YWxrIGFsbCBiaWcgYWJvdXQgd2hhdCBJJ20gcGFzc2lvbmF0ZSBhYm91dCwgYnV0IEknbSB0aGUgbW9zdCBmcmlnaHRlbmVkIHBlcnNvbi4gVGhlcmUgd2lsbCBkZWZpbml0ZWx5IGJlIGNvbnNlcXVlbmNlcyBpZiBJIGRvbid0IHN0ZXAgdXAgbXkgZ2FtZSwgYnV0IEkgY2FuJ3Qgc2VlbSB0byBiZSBhYmxlIHRvLiBJIGdpdmUgdXAgZWFzaWx5LgpJdCBmZWVscyBsaWtlIEkndmUgZ290dGVuIHRvIGEgcG9pbnQgd2hlcmUgZG9pbmcgdG9vIG11Y2ggd291bGQga2lsbCBtZSB0aGUgd2F5IGRvaW5nIG5vdGhpbmcgd291bGQuIE15IGJvZHkga2VlcHMgbG9va2luZyB0byBzdGF5IGJ1c3ksIGJ1dCB0aGF0IGJ1c3kgZ29lcyB0byBtZXJlIG9yZGVycyBpbnN0ZWFkIG9mIHdoYXQgSSBhY3R1YWxseSB3YW50IHRvIHB1cnN1ZS4gSSdtIGVudmlvdXMgb2YgcGVvcGxlIHdobyBjYW4gdHJlYXQgdmFjYXRpb25zIGFzIHZhY2F0aW9ucy4gSSdtIGVudmlvdXMgb2YgcGVvcGxlIHdobyBjYW4gd2lsbGluZ2Z1bGx5IGRlY2lkZSBmb3IgdGhlbXNlbHZlcy4gSSdtIHNvIGZ1bGwgb2YgaGF0ZSBhbmQgZW52eSwgZnVsbCBvZiBlbXB0aW5lc3MgYW5kIHVuY2VydGFpbnR5LiBIb3cgY291bGQgeW91IHBvc3NpYmx5IHJpc2sgdGhlIHJlc3Qgb2YgeW91ciBsaWZlIHdpdGggbWU/IEknbSB3b3JyaWVkIGZvciBvdXIgZnV0dXJlLiBUaGF0IHdvcnJ5IG1ha2VzIG1lIHRyeSB0byB3b3JrIGhhcmRlciwgYnV0IGl0IG5ldmVyIGZlbHQgbGlrZSBpdCdzIGVub3VnaC4gSSdtIHRvbyBpbmNvbXBldGVudCBmb3IgeW91LCB3aG8ncyB0cnlpbmcuIEJlY2F1c2UgSSBjYW4ndCBicmluZyBteXNlbGYgdG8gdHJ5LgpJdCBmZWVscyBsaWtlIEkndmUgZ2l2ZW4gbXlzZWxmIHVwIGxvbmcgYWdvIGFuZCBqdXN0IGdvIHdpdGggdGhlIGZsb3cuIEkgd2FudCB0byBwaWNrIG15c2VsZiB1cCBhZ2FpbiB3aXRoIHlvdSwgYnV0IEkgZG9uJ3QuLi4gSSByZWFsbHkgZG9uJ3Qga25vdyBob3cuLi4gSSdtIHJlYWxseSBzb3JyeSB5b3UgaGF2ZSB0byBzaXQgdGhyb3VnaCBteSBkZXByZXNzaW9uLiBBbmQgSSBmZWVsIGxpa2UgSSB3b24ndCBiZSBhYmxlIHRvIGV2ZXIgZm9yZ2l2ZSBteXNlbGYu"),
        "image" : "res/img/RolandFullBody.png"},

    "02-24-2025": { "entry" : atob("SSBmb3Jnb3IgYWdhaW4gOiggSSB3aWxsIG1ha2UgeW91IGEgZHJhd2luZyBpbnN0ZWFkISE="),
        "image" : "res/img/RolandFullBody.png"},

    "02-25-2025": { "entry" : atob("V2Ugd2VyZSBzbGVlcGluZyBuZXh0IHRvIGVhY2ggb3RoZXIsIHRoZW4gSSBzdGFydGVkIGRyZWFtaW5nLiBJdCB3YXMgdW5jYW5ueSBiZWNhdXNlIEkgZm91bmQgbXlzZWxmIGluIHRoZSBzYW1lIGxvY2F0aW9uIGFzIHdoZW4gSSB3YXMgYXNsZWVwLCBidXQgeW91IHdlcmVuJ3QgbmV4dCB0byBtZSBieSB0aGVuLiBUdXJucyBvdXQgeW91IGFscmVhZHkgbGVmdCB3aXRob3V0IHdha2luZyBtZSB1cCB0byB0ZWxsLCBhbmQganVzdCBtZXNzYWdlZCBtZSBpbnN0ZWFkIHRoYXQgeW91IGhhdmUuIEkgd2FzIHdvbmRlcmluZyBob3cgeW91IGdvdCB0aHJvdWdoIHRoZSBkb2dzLCBidXQgSSB3YXMgd29ycmllZCBpZiBJIHBpc3NlZCB5b3Ugb2ZmIGFnYWluIGJlY2F1c2UgeW91ciByZXBsaWVzIHdlcmUgY29sZC4gRXZlbiBzbywgc2xlZXBpbmcgbmV4dCB0byB5b3UgYW5kIHdha2luZyB1cCBzZWVpbmcgeW91IGdvbmU/IE15IG1pbmQgYmVsaWV2ZWQgaXQgd2FzIGEgZHJlYW0sIGJ1dCBhdCB0aGUgc2FtZSB0aW1lIGl0IGRpZG4ndCBmZWVsIGxpa2Ugb25lLiBXaGVuIEkgdHJ1bHkgd29rZSB1cCwgSSBzYXcgeW91ciBzd2VldCBzd2VldCBmYWNlIGFuZCBpdCBjYWxtZWQgbWUgZG93bi4gVGhhbmsgeW91IGZvciB0aGUgaHVnIGFuZCByZWFzc3VyYW5jZSB5b3UgZ2F2ZSBtZSB3aGVuIEkgdHJ1bHkgd2FzIGF3YWtlLiA="),
        "image" : "res/img/RolandFullBody.png"},

    "02-26-2025": { "entry" : atob("SSBzdGlsbCBkb24ndCBrbm93IHdoeSBtZS4uLiBPciBtYXliZSBJJ20ganVzdCBpbiBkZW5pYWwuIFdoeSBhcmUgeW91IHNhdGlzZmllZCB3aXRoIG1lPyBJJ3ZlIGRvbmUgYSBsb3Qgb2YgaG9ycmlibGUgdGhpbmdzIGJhY2sgdGhlbiwgdG9vLg=="),
        "image" : "res/img/RolandFullBody.png"},

    "02-27-2025": { "entry" : atob("VGhlcmUgYXJlIGRhdGVzIHdoZXJlIEkgZm9yZ290IHRvIG1ha2UgZW50cmllcy4uLiBMaWtlIHRoaXMgb25lISBJIGRvbid0IHJlYWxseSBrbm93IHdoYXQgdG8gcHV0IGluLCBidXQgSSB3YW50IHlvdSB0byBrbm93IEkgYXBwcmVjaWF0ZSB5b3Ugc28sIHNvIG11Y2guIFRoYW5rIHlvdSBmb3IgYmVpbmcgc28gc3VwcG9ydGl2ZSBmb3IgbWUuIFRoYW5rIHlvdS4gSSBsb3ZlIHlvdS4gSSB3YW50IHRvIHN1cHBvcnQgeW91IGluIHRoZSB0aGluZ3MgeW91IGxpa2UgdG9vLg=="),
        "image" : "res/img/RolandFullBody.png"},

    "02-28-2025": { "entry" : atob("SSBjYW4ndCBrZWVwIG15IGhvcm1vbmVzIGF0IGJheSB0b2RheS4gQnV0IGdvZCBJJ2QgbGV0IGhpbSBkbyBhbnkgcG9zaXRpb24gaGUgd2FudHMgdG8gdHJ5IHdpdGggbWUsIGVzcGVjaWFsbHkgaWYgaXQgcGxlYXNlcyBoaW0gYW5kIGl0IHBlbmV0cmF0ZXMgbWUuIEknbSBzbyBiYWQgZm9yIGhpbSB0aGF0IG15IGJvZHkgY2FuJ3QgZXZlbiBrZWVwIHVwIHNvbWV0aW1lcy4gSXQncyBzcGVjaWZpY2FsbHkganVzdCB3aXRoIGhpbSB0aGF0IEkgZ2V0IHRha2VuIG92ZXIgYnkgbHVzdC4gRXZlbiBiZWZvcmUgSSBmZWxsIGZvciBoaW0sIEkgZGlkbid0IGdldCB0aGlzIGRvd24gYmFkIGZvciBvdGhlcnMgKGZpY3Rpb25hbCBib3lzIG5vdCBpbmNsdWRlZCkuIEFmZmVjdGlvbiByZWFsbHkgZG9lcyB3b25kZXJzIGVzcGVjaWFsbHkgaWYgaXRzIG11dHVhbC4gClRvIGJlIGhvbmVzdCwgSSdtIHN0aWxsIG5vdCB0aGF0IGNvbWZvcnRhYmxlIHRhbGtpbmcgYWJvdXQgdGhpcyBtdWNoIGJlY2F1c2UgbW9zdCBvZiB0aGUgdGltZSBpdCBqdXN0IG1ha2VzIG1lIGZlZWwgaW5zZWN1cmUuIE1heWJlIHRoYXQgd2FzIHRoZSByZWFzb24gd2h5IEkgYXNzdW1lZCBJIHdhcyBhY2UgYmFjayB0aGVuLiBCZWNhdXNlIEkgd2FudGVkIHRvIGRpc21pc3MgdGhpcyBmZWVsaW5nLiBCdXQgc29tZXRpbWVzLCBJIHdhbnQgYW4gb3V0bGV0IGV2ZW4ganVzdCB0aHJvdWdoIHdvcmRzIChiZWNhdXNlIEknbSBiYWQgYXQgcGxlYXN1cmluZyBteXNlbGYpLiBGdW5uaWx5IGVub3VnaCwgSSBDQU4gYWN0dWFsbHkgZ2V0IHJpZCBvZiB0aGlzIGZlZWxpbmcgc29tZXRpbWVzIGJ5IHRoaW5raW5nIG9mIG90aGVyIG1lbi4gVGhleSdyZS4uLiBKdXN0IG5vdCBhdHRyYWN0aXZlIGVub3VnaCBmb3IgbWU/IEkgdHVybiBteXNlbGYgb2ZmIGJ5IHRoaW5raW5nIG9mIG90aGVyIG1lbi4="),
        "image" : "res/img/RolandFullBody.png"},

    // "03-1-2025": { "entry" : atob("a"),
    //     "image" : "res/img/RolandFullBody.png"},

    // "03-2-2025": { "entry" : atob("aa"),
    //     "image" : "res/img/RolandFullBody.png"},

    "03-3-2025": { "entry" : atob("QXJvdW5kIDRQTSwgSSBkZWNpZGVkIEkgc2hvdWxkIHN0YXJ0IHBsYW5uaW5nIHRoaXMgcHJvamVjdCwgd2hpY2ggZ2l2ZXMgbWUgYWJvdXQgMTQgZGF5cyB0byBhY2NvbXBsaXNoIGl0LiBJJ2xsIGJlIGhhcmQtY29kZWQgZHVlIHRvIG15IGxhY2sgb2Ygc2tpbGxzIGFuZCBsaW1pdGVkIHJlc291cmNlcy4gU3VwcG9zZWRseSBJIHdhcyBnb2luZyB0byB1c2UgUEhQIGZvciB0aGlzIGJ1dCBnaXRodWIgZG9lc24ndCBzdXBwb3J0IGhvc3RpbmcgYW55IGxhbmd1YWdlcyBvdXRzaWRlIG9mIHN0YXRpYyBvbmVzLCBzbyBJJ20gdW5mb3J0dW5hdGVseSBzdGlja2luZyB3aXRoIGphdmFzY3JpcHQuIFRoZSB0aGluZ3Mgd3JpdHRlbiBvbiB0aGUgbmV3bHkgcGxhY2VkIHdoaXRlYm9hcmQgaXMgbXkgZHJhZnQgYmVjYXVzZSBJIGNhbid0IGJlIGFzc2VkIHRvIG1ha2UgYSBmaWdtYSB3aXRoIGEgc2hpdHR5IG1vdXNlIChiZXNpZGVzLCB3aGl0ZWJvYXJkIGZlZWxzIGdvb2QgdG8gd3JpdGUgb24pLiBJIGRvbid0IHJlYWxseSBrbm93IGlmIHlvdSd2ZSByZWFjaGVkIHRoaXMgcG9pbnQsIGJ1dCBpdCdzIGFscmlnaHQuIEl0J3MganVzdCBhIGxpdHRsZSBwcm9qZWN0LiAKVGhhdCBsYXN0IGxpbmUsIGhvbmVzdGx5LCBJIGRvbid0IHdhbnQgdG8gdGhpbmsgYWJvdXQgaXQuIEl0IG1ha2VzIG1lIHVwc2V0LCBidXQgaXQncyBub3QgYWx3YXlzIHRoYXQgeW91IGNhbiBwcm92aWRlIHRpbWUgZm9yIG1lLiBUaGlzIG1pZ2h0IGp1c3QgYmUgdGhlIGluZmx1ZW5jZSBvZiByZWNlbnQgZXZlbnRzIGFuZCBteSBtb29kIHN3aW5ncyBraWNraW5nIGluLiBJIGZlZWwgbGlrZSB0aGUgbGF0ZXIgcGFzc2FnZXMgd2lsbCBsZWFuIG1vcmUgb250byBiZWluZyBiaXR0ZXJzd2VldCwgYmVjYXVzZSBvZiBjb3Vyc2UsIEknbSBzdGlsbCBtZS4gSSBzdGlsbCB3YW50IHRvIHRha2UgdGhpbmdzIG9mZiBteSBjaGVzdCwgYW5kIEkgdHJ1c3QgeW91IHdpdGggaXQuIFlvdSBjYW4gcmVhY3QgaG93ZXZlciB5b3Ugd2FudCBhbmQgSSdsbCBhY2NlcHQgeW91ciByZXNwb25zZS4="),
        "image" : "res/img/RolandFullBody.png"},

    "03-4-2025": { "entry" : atob("TG9va2luZyBiYWNrIG9uIHRoaXMsIG1heWJlIEkgc2hvdWxkbid0IGNvbnRpbnVlIHRoYXQgcGFzc2FnZS4uLiBJdCdzIGJldHRlciBvZmYgdGFsa2VkIGFib3V0IGluIHBlcnNvbiBzbyBubyBtaXN1bmRlcnN0YW5kaW5nIHdvdWxkIHN1cmZhY2UuIEJlc2lkZXMsIGl0J2QgYmUgZnVubmllci4KUGFzczogd2VpcmRlc3QgaW5uZXIgZGVzaXJlIHRoYXQgbWlnaHQgbWFrZSB5b3UgZmVlbCBndWlsdHku"),
        "image" : "res/img/RolandFullBody.png"},

    "03-5-2025": { "entry" : atob("SSdtIHdyaXRpbmcgdG8gY2FsbSBteXNlbGYgZG93biBmcm9tIGFub3RoZXIgcGFuaWMgYXR0YWNrLiBNYXliZSBiZWluZyBjb25jaW91cyBhYm91dCBteXNlbGYgaGFzIGl0cyBvd24gbWVyaXRzLiBJIGNhbid0IGxvb2sgYXQgQ2VzYXIgaW4gdGhlIGV5ZSB3aXRob3V0IGZlZWxpbmcgaG9ycmlibGUgYmVjYXVzZSBJIGNvdWxkJ3ZlIHByZXZlbnRlZCBpdCBpZiBJIGFjdHVhbGx5IGtuZXcgaG93IHRvIGhhbmRsZSB0aGVtLiBJJ20gYXBvbG9naXppbmcgdG8gYSBkb2cgd2hvIGNhbid0IHVuZGVyc3RhbmQgYSBzaW5nbGUgd29yZCBJIHNheS4gSSBmZWVsIHNvIGZ1Y2tpbmcgaG9ycmlibGUuIFRoZXkgY2FuJ3QgdGVsbCB0aHJvdWdoIHdvcmRzIGlmIHRoZXkncmUgaW4gcGFpbi4gVGhleSBjYW4ndCBleHByZXNzIHRoZXkncmUgaW4gc3RpbmdpbmcgcGFpbi4gSSB3aXNoIHlvdSB3ZXJlIHN0aWxsIGhlcmUgYXQgdGhpcyB0aW1lLiBIZSdzIHRoZSBvbmUgaW4gcGFpbiwgeWV0IEknbSB0aGUgb25lIGNyeWluZyB0b28gbXVjaC4gSGUncyBjb25zdGFudGx5IG5leHQgdG8gbWUgd2hlbiBJIHN0YXJ0ZWQgYnJlYWtpbmcgZG93bi4gSGUncyB0aGUgb25lIGluIHBhaW4gYnV0IGhlJ3MgdGhlIG9uZSB0cnlpbmcgdG8gZ2l2ZSBtZSBjb21mb3J0LiBJdCBtYWtlcyBtZSBmZWVsIHNvIG11Y2ggZnVja2luZyB3b3JzZS4gSSBuZXZlciB3YW50ZWQgdG8gc2VlIG15IGRvZ3MgbGlrZSB0aGlzLiBJJ20gcmVhbGx5IHdvcnJpZWQgYWJvdXQgaGlzIGV5ZS4gSSBmZWVsIHNvIGd1aWx0eSwgZXZlbiBpZiBJIGtub3cgSSBjb3VsZG4ndCBoYXZlIGRvbmUgbW9yZSBhdCB0aGF0IHRpbWUuIEl0J3MgYmVlbiBzbyBsb25nIHNpbmNlIEkgbGFzdCBnYXNwZWQgZm9yIGFpciB0aGlzIG11Y2ggd2hpbGUgY3J5aW5nLCBhbmQgaXQncyBvdmVyIGEgZG9nLiBJIHdpc2ggeW91IHdlcmUgaGVyZSB0byBoZWxwIG1lIGNhbG0gZG93bi4gSXQgZ2V0cyByZWFsbHkgc3Rvcm15IGluIG15IG1pbmQuCkp1c3Qgd2hlbiBJIHRob3VnaHQgdGhleSB3ZXJlIGdldHRpbmcgYWxvbmcuLi4gVGhpcyBmZWVscyBzbyBmdWNraW5nIGhvcnJpYmxlLiBJJ20gc28gaGVscGxlc3MuIEkgd2lzaCBJIGNvdWxkJ3ZlIGRvbmUgbW9yZS4="),
        "image" : "res/img/RolandFullBody.png"},

    "03-6-2025": { "entry" : atob("SSd2ZSBiZWVuIG9rYXkgc2luY2UuIEl0IGZlZWxzIG5pY2Uga25vd2luZyBJIGNhbiBhY3QgYWNjb3JkaW5nbHkgZHVyaW5nIGVtZXJnZW5jaWVzLiBCdXQgaXQgbWFrZXMgbWUgZmVlbCBiYWQgc29tZXRpbWVzIGJlY2F1c2UgaXQgZmVlbHMgbGlrZSBJJ20gYmVpbmcgaW5zZW5zaXRpdmUgb3IgZGVuc2UuIEkgZmVlbCBsaWtlIHNvIGxvbmcgYXMgSSBjYW4ga2VlcCBteXNlbGYgdG9nZXRoZXIgdG8gZ2V0IHBhc3QgdGhvc2UgaXNzdWVzLCBpdCdsbCBiZSBva2F5LiBJdHMganVzdC4uLiBNYXliZSBJIHNob3VsZCd2ZSBsZWFybmVkIGhvdyB0byBnaXZlIHdheSB0byBteSBlbW90aW9ucyB3aGVuIEknbSB3aXRoIHNvbWVvbmUgc28gaXQgd291bGRuJ3QgZmVlbCB0b28gaGVhdnksIGJ1dCBJJ20gbGVhcm5pbmcgaG93IHRvIG5vdy4="),
        "image" : "res/img/RolandFullBody.png"},

    "03-7-2025": { "entry" : atob("SXQncyBzbyB1cHNldHRpbmcuIEl0IGRvZXNuJ3QgZXZlbiBmZWVsIGxpa2UgbXkgbW9tIGNhcmVzIGFib3V0IHRoZSBiaXRlcyBJIGdvdC4gU2hlIGFza2VkIGlmIHNoZSBjYW4gc2VlIHRoZSBtYXJrcyBPbnl4IGxlZnQgbWUganVzdCBzbyBzaGUgY2FuIGpvaW4gdGhlIGNvbnZlcnNhdGlvbiBidXQgc2hlIGJhcmVseSBldmVuIGdsYW5jZWQgYXQgaXQgYW5kIGp1c3QgYnJ1c2hlZCBpdCBvZmYuIFNoZSBzaG93cyBzbyBtdWNoICJjb25jZXJuIiB0b3dhcmRzIENlc2FyIGJ1dCBJIGJhcmVseSBmZWVsIHRoYXQgY29uY2VybiB0b3dhcmRzIG1lLiBJIGRpZG4ndCBldmVuIGhlYXIgZnJvbSBoZXIgdGhhdCBJIG5lZWRlZCB0byBnZXQgYSBib29zdGVyIHNob3QgZnJvbSB0aGUgYW1vdW50IG9mIGJpdGVzLiBZZXQgbXkgYnJvdGhlciB0aGlua3Mgc2hlIG1pZ2h0IGJlIGFibGUgdG8gb3BlbiB1cCBpZiBoZSB0cmllcz8gTm8sIEkndmUgcmVhbGx5IGdpdmVuIHVwLiBJdCdzIGp1c3QgdW5mb3J0dW5hdGUgdGhhdCB0aGUgcGVyc29uIEkndmUgZ2l2ZW4gdXAgb24gaGFwcGVucyB0byBiZSB0aGUgcGVyc29uIHdobyByYWlzZWQgbWUgYW5kIGlzIGdpdmluZyBtZSBhIHJvb2YgYW5kIGFsbG93YW5jZSB0byBsaXZlIGluLiBJIHJlYWxseSBoYXZlIHRvIGFkbWl0IG5vdy4gU2hlIHdhc24ndCBhIGdvb2QgbW90aGVyLCBiYWNrIHRoZW4gYW5kIG5vdy4gU2hlJ3MgYSB3b3JrYWhvbGljLCB3YXMgdmVyeSBzdHJpY3Qgd2l0aCBoZXIgaW50ZW50aW9ucywgd2FudHMgZXZlcnlvbmUgdG8gbG9vayB1cCB0byBoZXIsIGdhdmUgdXMgdG8gaGlyZWQgaGVscGVycyB3aGVuIHdlIHdlcmUgeW91bmcgYmVjYXVzZSB0aGV5IHByaW9yaXRpemVkIHdvcmsgb3ZlciB1cywgYW5kIEkgZXZlbiBoYXZlIGEgY29yZSBtZW1vcnkgaW4gZ3JhZGUgNiB3aGVyZSBzaGUgbXVkZ2VkIG15IGRpcnR5IHNvY2sgb24gbXkgZmFjZSBiZWNhdXNlIEkgd2FzIHN0aWxsIHVzaW5nIGl0LiBCZWNhdXNlIG5vIG9uZSBwZXJzb25hbGx5IHRhdWdodCBtZSBob3cgdG8gYmUgY2xlYW4gYW5kIG9yZGVybHkgYmFjayB0aGVuLCBhbmQgSSB3YXMgc2hhbWVkIHNwZWNpZmljYWxseSBieSBteSBtb20gZm9yIG5vdCBrbm93aW5nLiBTaGUgd2Fzbid0IHRoZSBvbmx5IG9uZSB3aG8gdGhvdWdodCBsaWtlIHRoYXQuIEl0IHdhcyB3cml0dGVuIG9uIG15IHNpc3RlcidzIGZhY2UgYmFjayB0aGVuIHRvby4gSXQncyBqdXN0IHRoYXQgaXQgd2FzIG15IG1vbSB3aG8gZGlkIHRoZSBtb3N0IGRhbWFnZSB0byBtZSwgdW5rbm93aW5nbHkgYW5kIHVuYWRtaXR0ZWRseS4gTXkgb25seSBnb29kIGNvcmUgbWVtb3JpZXMgd2l0aCBteSBtb20gYXJlIHRoZSBvbmVzIHdoZXJlIHdlIHdlbnQgc3dpbW1pbmcsIGFuZCB0aGF0IHdoZW4gSSB3YXMgYXNraW5nIGZvciBoZWxwIGluIGhvbWV3b3JrLiBOb3csIHRoaW5raW5nIGJhY2ssIGl0IHdhcyBoeXBvY3JpdGljYWwgb2YgbWUgdG8gdGVsbCBteSBmcmllbmQgdGhhdCBoZSBzaG91bGQgc3RpbGwgdHJ5IHVuZGVyc3RhbmRpbmcgYW5kIGxvdmluZyBoaXMgbW9tIHdoZW4gSSB3YXMgYmxpbmRlZCBieSBteSBsb3ZlIGZvciBteSBmYW1pbHku"),
        "image" : "res/img/RolandFullBody.png"},

    "03-8-2025": { "entry" : atob("SGluYWhhbmFwIG5pIENlc2FyIHNpIG1vbW15IG5vbiBlaCwga2F5YSBzaXlhIGJ1bWFiYWJhLiBTaWd1cm8gbmFpbmdnaXQgbGFuZyBha28gb3IgbmFnc2Vsb3MsIGdhbnVuLiBQZXJvIGhlJ3MganVzdCBhIGRvZywgYWZ0ZXIgYWxsLiBOYWx1bmdrb3QgbGFuZyBha28gaGUgc3RhcnRlZCBzcGVuZGluZyBsZXNzIHRpbWUgd2l0aCBtZSBsYWxvIG5hIG51bmcgdW50aSB1bnRpIG5hIHNpeWFuZyBndW1hZ2FsaW5nLCBwZXJvIGF0IGxlYXN0IGd1bWFnYWxpbmcgc2l5YSBkaWJhPw=="),
        "image" : "res/img/RolandFullBody.png"},

    // "03-9-2025": { "entry" : atob("a"),
    //     "image" : "res/img/RolandFullBody.png"},

    "03-10-2025": { "entry" : atob("Q09VTEQgSEUgU1RPUCBURUFTSU5HIE1FISEhISEhISEhISEhISBFVkVSWVRJTUUgSEUgRE9FUyBUSEFUIEkgRkVFTCBMSUtFIEVYUExPRElORyEhISEhISEhISEhIEkgdGVsbCBoaW0gaGUncyBjdXRlIGFsbCB0aGUgdGltZSBhbmQgSEUgVEFLRVMgQURWQU5UQUdFIE9GIElUISEhISEhISEhISEhIEdPRCBJIExPVkUgVEhJUyBNQU4gU08gTVVDSA=="),
        "image" : "res/img/RolandFullBody.png"},

    // "03-11-2025": { "entry" : atob("a"),
    //     "image" : "res/img/RolandFullBody.png"},

    "03-12-2025": { "entry" : atob("QWR2YW5jZWQgTWVycnkgQ2hyaXN0bWFzISEhISBJIHNlcmlvdXNseSBjYW4ndCBleHByZXNzIGhvdyBtdWNoIEkgbG92ZSB5b3UuIEFsbCBvZiB5b3UuIEZyb20gdGhlIGdvb2QgdG8gdGhlIGJhZCwgZGVlcCBkb3duIEkgbG92ZSB5b3Ugd2l0aCBBTEwgbXkgaGVhcnQuIEkndmUgbmV2ZXIgb25jZSByZWdyZXR0ZWQgdHJ5aW5nIGl0IG91dCB3aXRoIHlvdS4gVGhpcyBkYXkgYmVjYW1lIGFub3RoZXIgcmVtaW5kZXIgdGhhdCBJIGxvdmUgeW91IHNvIG11Y2ggbW9yZSB0aGFuIEkgY291bGQgZXZlciBleHByZXNzLg=="),
        "image" : "res/img/RolandFullBody.png"},

    "03-13-2025": { "entry" : atob("SSdtIHNvIGZ1Y2tpbmcgYW5ncnkuIEkgcHJvYmFibHkgaGF2ZSB3b3JzZSBhbmdlciBpc3N1ZXMgdGhhbiB5b3UuIFRvIGJlZ2luIHdpdGgsIEknbSBhY3R1YWxseSBub3QgYXMgcGF0aWVudCBhcyB5b3UgdGhpbmsgSSBhbS4gTXkgbGltaXRzIGFyZSB2ZXJ5IHJlYWNoYWJsZS4gRG8gdGhlIGxpdHRsZSB0aGluZ3MgdGhhdCBwaXNzIG1lIG9mZiBpZiBJJ20gbm90IGluIHRoZSByaWdodCBtb29kIHRoZW4gaW4gdGhlIGluc2lkZSBJIHdvdWxkIGZlZWwgbGlrZSB3YW50aW5nIHRvIGJlYXQgeW91IHRvIGEgcHVscC4gSSB3b3VsZCBmZWVsIGxpa2Ugc2NyZWFtaW5nIGFuZCB0aHJhc2hpbmcgb3V0LiBBIHJhZ2Ugcm9vbSBpc24ndCBlbm91Z2ggYmVjYXVzZSBJIHdhbnQgdG8gYnJlYWsgdGhpbmdzIHdpdGggbXkgb3duIGhhbmRzLCBub3Qgd2l0aCBnbG92ZXMuIEkndmUgaGFkIHRpbWVzIHdoZXJlIEkndmUgZG9uZSBzb21lIHdhbGwtaGl0dGluZyB0aGF0IHlvdSB3b3VsZCBuZXZlciBleHBlY3QgZnJvbSBhIGdpcmwsIGJlY2F1c2UgdGhlIGFuZ2VyIEkgbm9ybWFsbHkgZmVlbCBpc24ndCBzYXRpc2ZpZWQgYnkgbWVyZSBjdXRzIG9uIHRoZSB3cmlzdCB5b3Ugc2VlIG9uIG90aGVyIGdpcmxzLCBhbmQgdGhhdCBJJ3ZlIGFsd2F5cyBoYXRlZCB0aGUgbG9vayBvZiB0aG9zZSBjdXRzLiBJZiB0aGluZ3MgSSBoYXRlIGtlcHQgb24gaGFwcGVuaW5nIGRlc3BpdGUgdGFraW5nIGFjdGlvbiwgSSBkb24ndCBldmVuIGtub3cgd2hhdCB0byBmdWNraW5nIGRvIGFueW1vcmUuIEkganVzdCBnZXQgZmlsbGVkIHdpdGggc28gbXVjaCBoYXRlIHRoYXQgSSBnZXQgYmxpbmRlZCBieSBpdC4gVGhlIHNvdXJjZSBvZiB0b2RheSdzIHRlbXBlciBjYW1lIGZyb20gdHdvIHNvdXJjZXM7IHRoZSBmZXZlciBhbmQgbXkgZG9nLiBGb3IgdGhlIGZpcnN0IG9uZSwgaXQgZnJ1c3RyYXRlZCBtZSBhIGxvdCBiZWNhdXNlIEkgd2FudGVkIHRvIGNvbnRpbnVlIHRoaXMgcHJvamVjdCBidXQgSSBjb3VsZG4ndCBiZWNhdXNlIEkgc3RhcnRlZCBmZWVsaW5nIGxpZ2h0LWhlYWRlZC4gVGhlIHNlY29uZCBvbmUsIENoaXBweSBwaXNzZWQgb24gdGhlIGZ1Y2tpbmcgYmVkIGFnYWluLiBUaGUgbGFzdCB0aW1lIHRoZSBsaXR0bGUgYnJhdCBkaWQgdGhhdCwgSSBjb3VsZG4ndCBob2xkIG15c2VsZiBiYWNrIGFuZCB5ZWxsZWQgYXQgaGVyIHdoaWxlIGhpdHRpbmcgaGVyIGFuZCBtYWtpbmcgaGVyIHNuaWZmIGhlciBzcG90IG9uIHRoZSBiZWQuIE5vdGhpbmcgY2hhbmdlZCBiZWNhdXNlIHRoZSBmdWNrZXIncyBub3QgYWN0dWFsbHkgYWZyYWlkIG9mIGFueXRoaW5nLiBOb3cgSSdtIHNsZWVwaW5nIG9uIHRoZSBmbG9vciBkZXNwaXRlIG15IGZldmVyIGFuZCB0aGUgY29sZCBhaXIuIEkgZG9uJ3QgZXZlbiBjYXJlIGFueW1vcmUuIE5vdCByaWdodCBub3cuIEF5b2tvIHNhbmFuZyBtYWdwYWthIHN0cmVzcyBrYXNpIG1hbGFwaXQgbmFrbyBtYWdrYXJvb24gYXQgYmFrYSBtYWRlbGF5IG5hbmFtYW4gYWtvLCBwZXJvIHBpbnVwdXRhIGFrbyBlaC4="),
        "image" : "res/img/RolandFullBody.png"},

    // "03-14-2025": { "entry" : atob("SSBmb3Jnb3IgYWdhaW4gOiggSSB3aWxsIG1ha2UgeW91IGEgZHJhd2luZyBpbnN0ZWFkISE="),
    //     "image" : "res/img/RolandFullBody.png"},
};