#include <iostream>
#include <algorithm>
using namespace std;

typedef long long ll;

ll gcd(ll a, ll b) {
    while (b != 0) {
        ll tmp = a % b;
        a = b;
        b = tmp;
    }
    return a;
}

ll lcm(ll a, ll b) {
    return a / gcd(a, b) * b;
}

int main() {
    int ttt;
    cin >> ttt;

    while (ttt--) {
        ll x, y, z, c;
        cin >> x >> y >> z >> c;

        ll res = 1e18;

        for (ll d = -40; d <= 40; ++d) {
            ll cur = z + d;
            if (cur < 1) continue;

            ll pay = abs(d);

            // Check direct equality without C-coin operation
            if (x == y) {
                res = 0;
                break;
            }

            // Try gcd(x, z), lcm(y, z)
            if (gcd(x, cur) == lcm(y, cur)) {
                res = min(res, pay + c);
            }

            // Try lcm(x, z), gcd(y, z)
            if (lcm(x, cur) == gcd(y, cur)) {
                res = min(res, pay + c);
            }
        }

        // Fallback: if we never got any valid transformation
        if (res == 1e18) res = abs(x - y);

        cout << res << endl;
    }

    return 0;
}
