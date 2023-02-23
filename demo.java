import java.util.Arrays;

class Solution {
  public static void main(String[] args) {
    Solution sol = new Solution();
    System.out.println(sol.isMatch2("aaa", "ab*a*c*a"));
  }
  public boolean isMatch2(String s, String p) {
    int m = s.length(), n = p.length();
    boolean[][] dp = new boolean[m+1][n+1];
    dp[0][0] = true;
    for (int i = 0; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (p.charAt(j-1) == '*') {
                dp[i][j] = dp[i][j-2];
                if (i > 0 && (s.charAt(i-1) == p.charAt(j-2) || p.charAt(j-2) == '.')) {
                    dp[i][j] = dp[i][j] || dp[i-1][j];
                }
            } else {
                if (i > 0 && (s.charAt(i-1) == p.charAt(j-1) || p.charAt(j-1) == '.')) {
                    dp[i][j] = dp[i-1][j-1];
                }
            }
        }
    }
    return dp[m][n];
}
  public boolean isMatch(String s, String p) {
      int n = s.length();
      int m = p.length();
      boolean[][] dp = new boolean[n + 1][m + 1];
      
      dp[0][0] = true;
      for(int i = 1; i <= n; i++) {
        dp[i][0] = false;
      }
      for(int i = 1; i <= m; i++) {
        if(p.charAt(i - 1) == '*') {
          if(i > 1) {
            dp[0][i] = dp[0][i-2];
          }else {
            dp[0][i] = false;
          }
        }else {
          dp[0][i] = false;
        }
      }
      
      for(int i = 1; i <= n; i++) {
          for(int j = 1; j <= m; j++) {
              char sc = s.charAt(i-1);
              char pc = p.charAt(j-1);
              if(sc == pc) {
                  dp[i][j] = dp[i - 1][j - 1];
              }else if(pc == '.') {
                  dp[i][j] = dp[i - 1][j - 1];
              }else if(pc == '*') {
                  dp[i][j] = dp[i][j-2];
                  if(j - 2 >= 0) {
                    char pc2 = p.charAt(j-2);
                    if(sc == pc2 || pc2 == '.') {
                      dp[i][j] = dp[i-1][j];
                    }
                  }
              }else {
                  dp[i][j] = false;
              }
          }
      }
      for(int i = 0; i <= n; i++) {
        System.out.println(Arrays.toString(dp[i]));
      }
      return dp[n][m];
  }
}

