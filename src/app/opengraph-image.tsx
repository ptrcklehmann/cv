/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { RESUME_DATA } from "../data/resume-data";

export const runtime = "edge";

export const alt = "Minimalist Resume";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const fontData = await fetch(
    new URL("../fonts/Geomanist-Medium.woff", import.meta.url),
  ).then((res) => res.arrayBuffer());
  return new ImageResponse(
    (
      <div
        style={{
          background:
            "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACQCAYAAADqWJL/AAAAAXNSR0IArs4c6QAAIABJREFUeF7tnQl0XNV5x//33fvW2TQz2mV5kSxLYGIbLINxIBZOCFASAiV2s5oWUnICJacQktCQHtkl5zTNAjRAFto0KQGS4NATDku6kCZhKdgY2xjvi2zLkmxL1jKj2ect7XffyDgtbeNFBqI3nHfGo3lz571vfnzfd/93+RiCR2CBSbAAm4Q2gyYDCyAAK4BgUiwQgDUpZg0aDcAKGJgUCwRgTYpZg0YDsAIGJsUCAViTYtag0QCsgIFJsUAA1qSYNWg0ACtgYFIsEIA1KWYNGg3AChiYFAsEYE2KWYNGA7ACBibFAgFYk2LWoNE3BWv58sd41/t3zmEhW73pY6s3B2YKLHCiFnhTsK7vvqqxs63lqws7zjonas75Vm/yrDWX1ddnT7Tx4Pypa4E3BWv1PcuvnDu3Y01n2wWmtT89pBzKbnL0yM9G6xb8uOOijvGpa67gzn9XC/wPsG7oXp44r7XxqxcunP+nCbcGoVd7wMeKUC19zNGt7aVQ+CeDbvzhc1ZcPvK7fklw3tSzwP8A68v3fKSrvWX6M4vnXmSq+0dhvdoL7jAIywA0DpWLjKOLnoIRfjgTSfxo1pVXHp56Zgvu+P+zwG+BddX1V0W6Lpj2pYsunH9H0quD2LAX5t4RcC7ADA2KxsGFCsCD4LzoGXpvLmQ9ZKvhR+uuvXYfY8z7/74weH9qWOC3wLr969fOa5vW9OzShV01oncc+su7oQ0XwTUVii7AVA4mBARTUCqXYOk6ILhjh6zBQjT6g5Sp/6RlWssO1tlZnhrmC+7yf7PAMbBuvHGh2rHowpXzzpn+99Mj7VA27oG5sR+i4EJRFSiCQ1E1cF3D1vERDMPGRbFaaJoKVxPQQzqKhjGcC0UeLCv6z6CqO5quuioXmH5qWuAYWLevuqa2eUbzo0sXLXyvldIgnt8Gbd8IhAMoQoHCGTRNx6vZNJ4Y2I0LWlrxwWgjoHN4ugamqeCaAsMykFXVdEk3f+RZoW/3cfPA/MsuC6SKKcbXMbDuvHvl+a3N8ZeXzO1ibPcR6M/vAD+alWFP4Ryq4CgJgdU7X0PPkQF8dn4nlk2bgbKhgUmwBIVFeIKDqwymZSLDxcGiZf0oU/YeLzfN3NO2eHF6itl3yt6uBKu7u0toNWddv3hh6/cazVYo63dBX9cDnimBc0rYFQhVRUFheGjfbqhgWNnWAcMyAUMDdFV6LOo14r/gY5zBUwBV5dAjIYy57JBrRB4tc29Nnxbb0Xnppakpa/EpcuMSrOu/cFWkfWbdQ0sXn391tBCB+vxmqFsPgRVtqFwBFxzgHK6iQBUqLFVFmTF4BJROQE08CzB5LgMUBsYVeAqFUAEt5ANmC/FjR9fXjLfN29bW1hZ4sN9T0CRYn+1ePn36tPDGZYsuTRhHCtB+vRl83zCUsg1OYKkCClfAFHqmnqECRdUlRDIEaprvrTQCiw4F4G8cnmBgTIEmODTLQMrjva6uP+YJ8fh9Mzo2rJo7t/R7at8pe1sSrDu/8vHFLe3xlxa2LoW69zC057aCD4xBsStgCQGFknPSs+ggoOhvQkhPRnBRbsVUgkwFhOJ7ruMAY4oivRgt6tcotGoaMkLdXVaUhxwr/MufX37N+k8zFsgUvycosu7ubqWk935y0bnTfjgrPh/alt3QXtoFNpSG4rrgCgMXAlwjuHQoXJXeiCkciqKASQ/mJ+4SJNX3XCDIZFikc8h7cYB50nPRg55U0sR0DQXOhyCUtaVI/MmeOfN+2tnaGuRg73DAGCXuea3hq0sXz/tco94KbcM2qOv3gg2PV8CCBEt6LFV/w0sRUAodDAonz0WezM+tPNlDJO/l52YyNJLHYhQS4edf5L1A0DGosm2BkqIc9VRtQ78V+U57JPkULrnEfofbd8pePlu1armWM/HEpYvffXnSq4W27nWorx0AG8lAcRxwTuBQnqWBq2olh1JlrkVuh0KczKsIIKKGwCIvpQsZ7lyFwaVeIr0vXRV9jEugfM9HSb7fFvUi/d6l6CuboY2jsZof3hV935MPdgYh8p1GKPvj7i6jOVa3/pJFXXOjpRD0tVsgXu/1PZYEC9IjyXCoVoDilMQL3+soPlSkzBNkHvNBpNeOBFKVMDny3IqnIu9VycMkVASZ1MuoB6pAN3S4FEZVfjirmVuHjNh3H77iAz9fzVjgwd4hhLFb777QrBJNe7rOu6LRyjJo67ZB3doHHE3J5J0YILmBEnVFIU2LICMPQ0D4CbyfmPu5FHkyDgU95Rz2aR4uMKoQZRxlclfSQ1WS+EpOJscfKeHiihweGikXsSU9hvZkAs3RGIrk5HQxXLTC28biTXfPuuSSn79DbDulL3MCrL5LFlyZ0LM29PU7oG7rA4ZSYMUiODx/nFACJWBIb0WaFqnsgtyZDwvlTwqHUAX6XQdPpg7BUhiuTU5HXKgoSY9F55G38s89vtfIVY4MA35zqA8H0yO4fFYb2mpqZRglr+bK8Kql7FB47VAofn/bZX/w5JT+5d7mN38MrKULrkwYGRv6pl0QW/vAjoyC5QtQPEfmQ4LCoWVhe1hDuFDCHJfDkWFO8T0OhUBFkcA9NXwEj40O4JZZHXhPNAnPhcy1ZNirSA4yxlZeE7gEzgtDh/HIjs1oNA2sXNCJjvp66el86YLyMunxXKar+YIZe2kwHPpWxxUfegaAG0zZeXuRxm699UIzOqNpT9eCyxr1ggJ9806oW/qAwyNgmTwU15Fap2KYeD4k8LqwsYxZWJgpwSXFnTwPgeVSuiVkbvTPw4N4JZPCF2bPRYJUetkRpGS9kuDLJJ7JfMzXxCgfY3ji4AHcv2EdPjx7DlYuWIBENAq7ouBLCNU3tDCFKR7T1JIdi7+UTiT/Vhs4+m/PGUZhxYoVztvLxFPzamTy3hhOrn3PuRfPi7pVULftgbZ5P9jACNh4DswuwWAKek0N386OQFc5btZjmMYEXFWAeUzOfmBMwFM4bMbgwJNh09S0Y2HyWC+SAJOaAwM8r+LBGByh4FCxiH3pMcyvrUU8HIan+j3OCW8lvR2FU3igGYWSVQa4hu6V4/GXU+Ho/UpMfeaHXVenVzPmTs2f9O1x12z5quVak1J6ZGnnwg/XGLOg7toPfeNesP4RYGwcrFSEpgA9XME/jh7F+YaJD1oRmUvJ/Er2AinP8pN4KTVI8ZT7f6+AJOWIyvn+rftjiUSI5zE4soOpQNcEHBlS/Z6ldJeU4HMuxx399ugznjzkg8YjDQE3FkJuZvPTxZrEd8bt3Pp3Lb5qUKqyweOMW4B1dXeJhW7d7fPPrf/rmfFOqAePwFi/E0rvUR+sXJaiHMquDc9xECNpQadxQiF1KR8YHyoKd3LIh8IjvT6mdb2hVUnda0LPAnkfmgnhSxFSMKV0baL3SGBJnWxCuZ/wVj4r0m/J3iaHp3GwsAZjdg3y0+uRDoWfzdnKvePjhU1LlnxgIADszLLFPM9jX1j18SuaZipPnzNjKazhIvS1WyH2D1XAysErlwHHBqdEfkJykIm7r1lRGJTASLB878LYxLMf+vz3K7JE5bUfzvzPSY2LQJPvVUCbkCYmXhNHsg06l0Ku63svCpchDUhYcNtqgdn1sKbVIpXKlcbHx37Zc/j17z6/btumv7ljzUHJY/CYdAtI53HLX3zo7FC8tPGiBcu0eDEB7ZUt0Hb2A+ks2HgWKBUAxwUjsMivkNciUGS4In2rosATJMd5KYW0rmNjgwSQPwQkh38m3JYMb8cB5Uvzx4Z+ZMishD96i1OIlXT4ns7mgGeqQMwEGqvgnNMMr6kanqCORR4u68cv1v2ytH7j6D+Nov+6Nau2BjMpJh0rP5Dg6j/vqpoeM55esnD+kgZjLoytu6Fv6gEbGQdSWTAJliO9FoPrexnPk6FPITW+oshTNiM1rYrnUY6DZkKWOCamHp97VcCayL0kVZKvN7yT9I4VdX6AObCZi2ZHwLM0OBENqIvCa6mBM3cGWCQEx7FRsgexre8F/Gb7Ogz1Jl+NpdV333ffL0hzDR6TbIHKDNJukXK3fWJ6C//BOdOXwRy2YbyyBfr+QQmWl83LJB4ugQV4BJjjVHIq8loVuCrh0KeCdC0KiZXum1fxQhPjixW13R/I9mc8yM/JXMvv/fmeyh9PpActPdvEbaz3Mog6Hq5gYVTVJ1FKhuDNqoHT1gA0JGVns2wP48DRDXhh53NI5w2UDzfdPPB66Xtr1qwJ5IhJhqryS/rfcuPnPtARrXZ+s2TehbUJbRa0HT2wNu6FMpQCMnkgn5ceC64DlMsyw6E8h35F2TOszM/ilMjTnycSeV8Y8OEgaYJCpfxm0rCE/56c9UDh0L8kCRrNmJgIgWDgjGGYAQ+M9aPglVEPjhtmzkFkejXKzQm4bU1wm5Jguo6ynUEquxvPbX8Wh9IjKGfqi6Wj0UX33/XIliDHOgNU+a7Bf3zyk58MxWeN3dXeHr+1rb4LZsaBsWE79O0HgfEckCsAxSK8cgmwyXN5MhxK0MibaCoMoYJ7NODMYXuun8RPQFRJ0o8l8QTTcV5KDnRTx4Ax2Iz6e5XhH6lIUI8TGHBsfPHATuSdMt6XrMFNizvhTE/Ca2+EO7MBME3YbhGFYh9e730Br/RshaFXY/xQYm92KHz+9+/5frAtwJnh6g2wPHjsM3desygaKT+z6Oxzk8lwB/TDwzBffA3qoVF42SI8gqtQACPPJcdpHD8kqjTzQUOaeciqHE35MpjrwpVSRKW3WOnNEctSliCvJHt5/rghZwo8+Rkh52c5rut7PabQeI18nQfwVHoYR+wCrpnbjpazZ8Ge0wCvtQGIReF5LnLFwzgwtAEvbX8JWduDpdcjdTD+gBir/vw999xDTQSPM2CB31oJ3d3dbQw76z4/fab5V2c3X4SwqIX++i5Ym3vAjo4D+SJQLMmD4PJsGqzx5NSYlK7hxbiJULGISwbT0nPZ1GuUPcaK56rIBP6EvzfgElxBiavYHjVQcm0syrpQOUfJj6IyZyI1v8w5igYHEmHEWhvA2hrhtjWCxaPw5OrsNAbHNuOlXS+if2wIhh6HU0wAmdDSb9zxyPMsEEvPAFLHsuXf/q4/uuXq1pqq9INntTcta6lbgnBJh7Z5N/RtB6CMZYBSGSiWgVJJHpQ7FbiCZyMattl5nF9wcFm6LOdfSaWcxFLKw+R05Mr05EqSTrqVnOin69hRFcG/I4dEJo9rCyrCXKBUGU+U+oKqwouaYMkIeFMcbmsDvNmNYMmYTPBLdg7ZfC/W7f0VtvTuBtdMWGYcpVTVFtcz33/vrQ8fOmNWDb7oTeoVdncrn8GmZRGz+NCcGTMaZtYtAU2n0bbsgb6r14eLwCoQWLYcVunzXHytMIZIsYA/4SbmexyFilwge3Zy6MVP8uXrCW2KgFM4UqaOn+jAvmwKnYqBD9saNKHCpoHAykogpSoMVh0BGhNwW+rgzWoA4hF/fNLNIZMfwIHB1/CrrS8j73hIVCWgihjc0eQt5421PLhi1apAvzqDwP9WKJz43u4uT/Scu/S6ZLX3wOK5F+vV0XZoOQ/qnv3Q9/RBjI5LuFihBCdXxEixhF9nUmgolbHUsOBKGYqAIs2r8hUE0cTIsQRKkSInPY5aJr5RGsfg2AhWhpK43AjDod4jrVk0BFhVCEptlYTKm1EHZ0YdmISKwl8W+dIADgxtwSt7NuBIahy6lYCqWkAx3Kfa5nvv/txPd51BmwZfdXyv8L9bY9WqB8J9pTW3z2w2v9xav4AnI3NguAKi/zD0viPQCC7SuDI52Ok8eLYA4bgyyVZc6i3S6DKp9f4IyjGC5fAezWqgZN2T45BFzrHFtZErFrA0Eodq0jpFAUbPccsPd41JuDNr4TXVANGInCNGUGUKfeg9uhWv9mxC79AwdDOGkBUFF5an29V3dlZ/6N4VK1YESfsZxv1NPdbENdy88uZkquHFR2dNS763rWEer6vqgKlFoWWyEEPDEENj4EfTUqH3aPgnVwQKNljJBmxS6qnneFwYpIDour43k7qWBxIryMMJQbNPVTjUwwwbYHTEQ0AyArc+Ca+5Bl5tAiwUgsc8FMspjOcOoGfwNWzo2YLDo2l43EAkFIVuhFClNW40QtXL//Ij9+09wzYNvu7/8lgT1rntttvmHHT+9ZvTm2OXdkw7S2+Mz0XEqoXGGHguBz40Ck6AjWTARrNAJgdkC0C+5ENGcNE440SD5MFkePT8aTP0L7nQVQC6AA8ZUKpC8GIheDUxuPVVcOuqgXhMrr523TJy5UGMju/F7oHXsGn/TgyPFyG0EEzLgOAWIkYi7aX06+794uPB/Pi3CPP/02NNXNOqmx6o38D+7stN9cqK9ubWmubqdiQizTCNGASFvlxOJvV8JC1X97DRDFg6B4yTqOp7r4lpd/IL/dky/qJWmu5CG4vQrjWmBhY24VZH4FbHgOoquFVRMMOSPb+yPY5svg+HxnZga99m7DzYB3KSqhFDJGzC0nToViwbRePXOsKX3r1ixYrMW2TXKf+1vxNYZKUb4amHPrVoZXWdc9OMhup5rU0toj42G2GrDqow/EHpQhEsk5WhkY+OQxnOSMWeNhchzyVDIHkrml9Fh0zONTmQDFMHLB1e2IRHOVU4AhimzMVsp4BC6ShGMz3Yd2QrtvTuRN/wCISwEKWcTOjQdQO18WpHlOL3u/3aXV/60gPDU/7XfQsN8DuDNXGN13/6+vkpc+2nG2qMP+xomVHXFG9BldkIw0hAUy3IqTK2A4UUepoomMnJ3qNCXktqWf6MUE+CRUBp8EzaOFf3932gDUZUQwLoOEUUyqNI5w7i0Mhu7Ozfjl0DfciVXIRDMUSjMRiaBs5NVIXijqVUPd3otd/wsY/dfvQttGnw1b9LjvXmVvKUZR+dc92MOeYnGpPRJc119UYy3Igqq16KkqoakV5MIQHUdqW3UmQPsSI/yNUZ/uKKYwcUKXfRKKFt51EsjyGdP4TDoz3YP7gHew/3YSidhRAmQuEoTMNCMhoGFA2mGh2pseoeZ9nYN2/65Fd2Br/sW2+BE/ZYx1/y8q6bwpmz/uXi+mrrai685YmEGU+EY0iGq1Fl1aAq3ABDj0FXLRmuaKBZrtbxJ99IOcL1bOmZyk4WxVIGmUIKR8YOon/4IPpHDmM4nYYidKhaCNFwFA4UlB2GWDSCmBHNhbX4zzRFffDo5vvWrl4drJR+65Hyr+CUwJq4iY/e2FU9rB44typkXCw8/kEmSu+KxlUetSxEzTBioSqEjQgs3YQmdLlGkcCy3TKKdgHZwjhGs2MYTo1gLJNGKpOXY3+WFUEkFIFpmDDMkByTzJcdeGW1oCvms6qq/0MtZq+94aNfHHi7GDS4jtMI1oQxaerNiLZ9lqukm61wZLHG3GtsJdcqdNsSGi0Jo8ingFcWVLieC9v2UC7bcF3AMixYVgimGUHIiiAUiiAcCoMpGpySgnyu3JfPO0+pBp6wyuHtf/bxbx4Ifsi3pwVOi8d6s1u7/favhwbzv2rKoi8uPGu2ZhmdmsbPU4Q3g3EnwhTF5FzVTZ0phsYhuA5VN8GY5nqMlRRFKcETWTi8l3niPwzLeE4IttdEXf+nVtwWzKt6e/J07KomDazj7/ux5R5/teWOsIikwiUvbwhe4A6nfXMtFou6TO40qWkoQUOhoHi5fN7TmevanuHYoyimyzx13+r7gv1K3+YwHX95ZwSsd5A9gks9TRYIwDpNhgya+W0LBGAFREyKBQKwJsWsQaMBWAEDk2KBAKxJMWvQaABWwMCkWCAAa1LMGjQagBUwMCkWCMCaFLMGjQZgBQxMigUCsCbFrEGjAVinyMDy5Y/xrvfvnMNCtnrTx1ZvPsXmfm8+HoB1ij/l9d1XNXa2tXx1YcdZ50TNOd/qTZ615rL6+ilfXD0A6xTBWn3P8ivnzu1Y09l2gWntTw8ph7KbHD3ys9G6BT/uuKhj/BSbf8d+PADrFH66G7qXJ85rbfzqhQvn/2nCrUHo1R7wsSJUSx9zdGt7KRT+yaAbf/icFZdPuYmJAVinANaX7/lIV3vL9GcWz73IVPePwnq1F9xhEBYtZ+NQucg4uugpGOGHM5HEj2ZdeeXhU/i6d9RHA7BO8ue66vqrIl0XTPvSRRfOvyPp1UFs2Atz74hfN9vQoGhUgk+Vi0YE50XP0HtzIeshWw0/Wnfttft+34tKBWCdJFi3f/3aeW3Tmp5durCrRvSOQ395N7ThotyLVdEFZB1GqnktdxoswdJ12uvLsUPWYCEa/UHK1H/SMq1lB+vs/L0ssB6AdRJg3XjjQrVj0YUr550z/e+nR9qhbNwDc2M/RMGFovo1gBQqdaxr2Do+gmHYuChWKwt9upqAHtJRNIzhXCjyYFnRfwZV3dF01VW5k7iUt+1HArBO4qe5fdU1tc0zmh9dumjhe62UBvH8Nmj7RiAcv9CUwhk0Tcer2TSeGNiNC1pa8cFoI6BzeLom615zTYFhGciqarqkmz/yrNC3+7h5YP5ll/1eSBUBWCcB1p13rzy/tTn+8pK5XYztPgL9+R3gR7My7NE+9qrgKP1XEavVO19Dz5EBfHZ+J5ZNm4Ey7agjwfJL5XmCg6sMpmUiw8XBomX9KFP2Hi83zdzTtnjxO3pVUgDWCYLV3d0ltJqzrl+8sPV7jWYrlPW7oK/rAc+UaD2bLJZOG8gVFIaH9u2GCoaVbR0wLFPurEM77JDHol4jqIIap02Aae9eDj0SwpjLDrlG5NEy99b0abEdnZdemjrBS3xbnB6AdYI/w/VfuCrSPrPuoaWLz786WohAfX4z1K2H5FZNKq3yljUWqWa2AlWosKjCLO3+TEDRtk1UlVY+C78kMW3gW6kiS7tMa5qAFvIBs4X4saPra8bb5m1ra2t7R3mwAKwTBOuz3cunT58W3rhs0aUJ40gB2q83g+8bhlK2/e0DVCrGTtuM+0XZqdYi7UQoSxRTCJSrc3kFLIKLyru8cXhUiJ0p0ASHZhlIebzX1fXHPCEev29Gx4ZVc+e+I3Z/DsA6QbDu/MrHF7e0x19a2LoU6t7D0J7bCj4wBsWugEU1hSg5Jz2LDlnzWshaQ7ImtiZkbsXkboaq3IDOL6b+BlwTVc9oyxaNQqumISPU3WVFecixwr/8+eXXrP80Y29rmSIA6wTA6u7uVkp67ycXnTvth7Pi86Ft2Q3tpV1gQ2korguuMFkLm2sEF23bpEpv5Jcy9ms5TtS4liCpvueSW2ZWyhTLfVllzUfaF9/fo5WeVNLEdA0FzocglLWlSPzJnjnzftrZ2vq2zMECsE4IrC6R1xq+unTxvM816q3QNmyDun6v3HfVB4uKllU8lqq/4aUm6mErVP2MPBd5Mj+38mQP0d+LVXo0Ao52PZTFFvx6135ZPQKTyTpDFG5LinLUU7UN/VbkO+2R5FO45BL7BG5l0k8NwDoBE69atVzLmXji0sXvvjzp1UJb9zrU1w6AjWSgOA4490sZU8Eq2stL1s2mWo7Hqs5S2KMQWSnCTmCRR9OFDHeuwuBSL/FY1TS/TAwB5Xu+N2prUy/S712KvrIZ2jgaq/nhXdH3Pflg59sjRAZgnQBYf9zdZTTH6tZfsqhrbrQUgr52C8Trvb7HkmBRWWPhh8NK1VnyTvQ3v861DxUp87IyR6WmNr12JJBUZ5vK8lV6ivLZ3whY5mpya02/OKgEWCjQDR0uhVGVH85q5tYhI/bdh6/4wM9Xs7d2d8MArBMA69a7LzSrRNOervOuaLSyDNq6bVC39gFHUzJ59+t3EjhUJ5s0LYKM8iUCwk/gj5Uu5r6YShWue8o57NM8XGBUIco4yvSrSA9V2au1ktzL8cdKZVoaHhopF7ElPYb2ZALN0RioJjHTxXDRCm8bizfdPeuSS96yfe4DsE4crL5LFlyZoMJV+vodULf1AUMpsGIRnEp2VsAiqAzprUjTIpVdkDvzYanUaBSqQL/r4MnUIVgKw7XJ6YgLFaUJT0UQkfxAVdOO6zVylSPDgN8c6sPB9Agun9WGtppaGUbJq7kyvGopOxReOxSK39922R88eQK3eVpODcA6ATNWPFbf0gVXJoyMDX3TLoitfWBHRsHyBSieI/Mh2mOVWxa2hzWECyXMcTkcGeaoKKgPFvUSCbinho/gsdEB3DKrA++JJv36ohO5FAEmvVdld2lK/oUPzgtDh/HIjs1oNA2sXNCJjvp66el86YLCpvR4LtPVfMGMvTQYDn2r44oPPSMrzDBZLmtSHwFYJ2DeW2+90IzOaNrTteCyRr2gQN+8E+qWPuDwCFgmD8V1ZM9QMUw8HxJ4XdhYxiwszJTgkuIu6zUqoMpUFBYpN/rn4UG8kknhC7PnIkEqvewI+luVH6ucVqnb6GtilI8xPHHwAO7fsA4fnj0HKxcsQCIahV1R8CWIaiWMynRN8ZimluxY/KV0Ivm32sDRf3vOMAorVqyYtMLrAVgnABYl743h5Nr3nHvxvKhbBXXbHmib94MNjICN58DsEgymoNfU8O3sCHSV42Y9hmlMwFUFGBVbp0ScCb/OIhVJoAq1QsDUtGNh8lgvUhZbp5+oUvNRejAGRyg4VCxiX3oM82trEQ+H4al+j3PCW8l99Cnsyp3z/WYo73cN3SvH4y+nwtH7lZj6zA+7rk6vZhMFaU7AGP/PqQFYJ2DL5auWa01K6ZGlnQs/XGPMgrprP/SNe8H6RwCqwlEqQlOAHq7gH0eP4nzDxAetCCiXkvmV7AVSnuUn8VJqkOIp9/9eAUnKEZXz/cuj3Mmvoe15DI7sYCrQNQFHhlR/Dph0l5Tgc+5Xt5Xt0Wc8ecgHjUcaAm4shNzM5qeLNYnvjNu59e9afNWgVGVP0yMA6wQM2dXdJRa6dbfPP7f+r2fGO6EePAJj/U4ovUd9sHJZWX+x7NrwHAcxkhZ0GicUfrmX46CSBdelDEEahd9DlDkDB492AAANSElEQVTYcVqVLNTuc0Ul2uU/CBjpjWTZY2qz0nsksOh8meRXQq70Vj4r8rmSr3lUGCuswZhdg/z0eqRD4WdztnLv+Hhh05IlHxg4HYAFYJ0AWJ7nsS+s+vgVTTOVp8+ZsRTWcBH62q0Q+4cqYOXglcuAY4NTIj8hOcjE3RdPKQxKYCRYvndhbOLZD3X++74CP1GU3Q9n/mupxhNo8twKaBPSxMRrWb3Pz7PoP4eQJ+9F4TKkAQkLblstMLse1rRapFK50vj42C97Dr/+3efXbdv0N3esOeiXDzm5RwDWCdrtlr/40NmheGnjRQuWafFiAtorW6Dt7AeoEOh4FigV/PqMBBb5FfJaBIgMV6Rv+f+WkBznpWRxq2Njg/Q+hUNKjISfZk0UaK/0Kv1hHl8snRj6OVZru/IWpxDrV4aUns6muu+mCsRMoLEKzjnN8Jqq4QnqWOThsn78Yt0vS+s3jv7TKPqvW7Nq60nPpAjAOkGwrv7zrqrpMePpJQvnL2kw5sLYuhv6ph5ZSo9KGTMJFlWXtcFARakUv+QeeSxS4yuKPGUzUtOqeB5F5kS+F5qQJY6JqcfnXhPnVHIv//xKWxXvJL1jRZ0fYA5s5qLZEbJ8nxPRgLoovJYaOHNngEVCcBwbJXsQ2/pewG+2r8NQb/LVWFp99333/YI015N6BGCdoNm6u7tFyt32iekt/AfnTF8Gc9iG8coW6PsH/RrZ2bxM4uESWIBHgDmOBIvyIYXGDgmuSpjzqSBdi0JipfvmVbyQzLkqYbGS6PswvuHBfE9WCZGVHI3epaVnm7iN9V4GUcfDFSyMqvokSskQvFk1cNoagIakrLhWtodx4OgGvLDzOaTzBsqHm24eeL30vTVr1py0HBGAdYJg0ek3fu4DHdFq5zdL5l1Ym9BmQdvRA2vjXihDKSCTB/J56bHgOkC5LDMcWQTUo6kwJDn4wzuceof054lE3hcG/BBI0gSFSskQ86UEek/OeiDP5sMlQaMZExXPRX/jjGGYAQ+M9aPglVEPjhtmzkFkejXKzQm4bU1wm5Jguo6ynUEquxvPbX8Wh9IjKGfqi6Wj0UX33/XIliDHOgk4TuUjVIwqPmvsrvb2+K1t9V0wMw6MDduhbz8IjOdkVVkUi/DKJcAmz+XJcChBI2+iqTCECu7RgDOHTXUcj81o8MGZSNonwqPvAfxEXQ50U8eAMdiM+nsEGiXqlE8pstM44Nj44oGdyDtlvC9Zg5sWd8KZnoTX3gh3ZgNgmrDdIgrFPrze+wJe6dkKQ6/G+KHE3uxQ+Pzv3/P9U9oWIPBYJ0GYB4995s5rFkUj5WcWnX1uMhnugH54GOaLr0E9NAovW4RHcFGVWfJccpzG8UOiSjMfNKSZh6zK0ZQvg7kuXClFVICq9OakyFDpJUq1oDLGyJkCT35GyPlZjuv6Xo8pNF4jX+cBPJUexhG7gGvmtqPl7Fmw5zTAa20AYlF4notc8TAODG3AS9tfQtb2YOn1SB2MPyDGqj9/zz33UBMn/QjAOknTdXd3G8POus9Pn2n+1dnNFyEsaqG/vgvW5h6wo+NAvggUS/IguDybBms8OTUmpWt4MW4iVCziksG09Fw29Rplj5H7Ue64RHzCexFcgisocRXbowZKro1FWRcq5yj5UVTmTKTmlzlH0eBAIoxYawNYWyPctkaweFTWgiyV0xgc24yXdr2I/rEhGHocTjEBZEJLv3HHI8+zUxRLA7BOEiz62B/dcnVrTVX6wbPam5a11C1BuKRD27wb+rYDUMYyQKkMFMtAqSQPyp0KXMGzEQ3b7DzOLzi4LF2W86+kUk5iKeVhcjpyZXryhMwgBVEm86IdVRH8O3JIZPK4tqAizAVKlfFEqS+oKryoCZaMgDfF4bY2wJvdCEZF3AkqO4dsvhfr9v4KW3p3g2umLLlcSlVtcT3z/ffe+vChUzDLRNA+1Sam8Oe7u5XPYNOyiFl8aM6MGQ0z65aAptNoW/ZA39Xrw0VgFQgsWw6r9HkuvlYYQ6RYwJ9wE/M9jkJFLpDipxx68ZN8fxC68kzAKRwpU8dPdGBfNoVOxcCHbQ2aUGHTQGBlJZBSFQarjgCNCbgtdfBmNQDxiD8+6eaQyQ/gwOBr+NXWl5F3PCSqElBFDO5o8pbzxloeXLFq1UnrVxM0BB7rFP+/6O7yRM+5S69LVnsPLJ57sV4dbYeW86Du2Q99Tx/E6LiEixVKcHJFjBRL+HUmhYZSGUsNC66UoQioSiF2uh6CaGLkWAKlSJGTHkctE98ojWNwbAQrQ0lcboThUO+R1ioaAqwqBKW2SkLlzaiDM6MOTEJF4S+LfGkAB4a24JU9G3AkNQ7dSkBVLaAY7lNt8713f+6nu07RJIHHOh0GpDZWrXog3Fdac/vMZvPLrfULeDIyB4YrIPoPQ+87Ao3gIo0rk4OdzoNnCxCOK5NsxaXeol94XfYcjy/ULYf3PKlTea4nxyGLnGOLayNXLGBpJA7VpHWKAoye45Yf7hqTcGfWwmuqAaIROUeMoMoU+tB7dCte7dmE3qFh6GYMISsKLixPt6vv7Kz+0L0rVqw4paQ98Fini6pKOzevvDmZanjx0VnTku9ta5jH66o6YGpRaJksxNAwxNAY+NG0VOg9Gv7JFYGCDVayAZuUeuo5HhcGyXG5ru/NpK7lgcQK8nBCcLmM36EeZtgAoyMeApIRuPVJeM018GoTYKEQPOahWE5hPHcAPYOvYUPPFhweTcPjBiKhKHQjhCqtcaMRql7+lx+5b+/pMksQCk+XJQHcdtttcw46//rN6c2xSzumnaU3xuciYtVCYww8lwMfGgUnwEYyYKNZIJMDsgUgX/IhI7honHHimsiDyTzL86fN0L/kQlcB6AI8ZECpCsGLheDVxODWV8GtqwbiMbn62nXLyJUHMTq+F7sHXsOm/TsxPF6E0EIwLQOCW4gYibSX0q+794uPn9b58QFYpxEsGRZveqB+A/u7LzfVKyvam1trmqvbkYg0wzRiEBT6cjmZ1PORtFzdw0YzYOkcME6iqu+9Jqbd+bJDJTZKoLjcLZA2F6HQx8Im3OoI3OoYUF0FtyoKZliy51e2x5HN9+HQ2A5s7duMnQf7QE5SNWKIhE1Ymg7dimWjaPxaR/jSu1esWJE5naYIwDqd1qy0dSM89dCnFq2srnNumtFQPa+1qUXUx2YjbNVBFYY/KF0ogmWyMjTy0XEowxmp2NPmIuS5ZAgkb0Xzq+iQybkmB5Jh6oClwwub8CinCkcAw5S5mO0UUCgdxWimB/uObMWW3p3oGx6BEBailJMJHbpuoDZe7YhS/H63X7vrS196YPh0myEA63Rb9Lj2rv/09fNT5tpPN9QYf9jRMqOuKd6CKrMRhpGAplqQU2VsBwop9DRRMJOTvUeFvJbUsvwZoZ4Ei4DS4Jm0ca7u7/tAG4yohj9d2SmiUB5FOncQh0Z2Y2f/duwa6EOu5CIciiEajcHQNHBuoioUdyyl6ulGr/2Gj33s9qOTYYIArMmw6m+16SnLPjrnuhlzzE80JqNLmuvqjWS4EVVWvRQlVTUivZhCAqjtSm+lyB5iRX6QqzP8xRXHDihS7qJRQtvOo1geQzp/CIdHe7B/cA/2Hu7DUDoLIUyEwlGYhoVkNAwoGkw1OlJj1T3OsrFv3vTJr+ycrNsPwJosy/63dpd33RTOnPUvF9dXW1dz4S1PJMx4IhxDMlyNKqsGVeEGGHoMumrJcEUDzXK1jj/5RsoRrmdLz1R2siiWMsgUUjgydhD9wwfRP3IYw+k0FKFD1UKIhqNwoKDsMMSiEcSMaC6sxX+mKeqDRzfft3b16sldKR2AdYbAmviaj97YVT2sHji3KmRcLDz+QSZK74rGVR61LETNMGKhKoSNCCzdhCZ0uUaRwLLdMop2AdnCOEazYxhOjWAsk0Yqk5djf5YVQSQUgWmYMMyQHJPMlx14ZbWgK+azqqr/Qy1mr73ho18cOBO3HIB1Jqz8Jt9BU29GtO2zXCXdbIUjizXmXmMruVah25bQaEkYRT4FvLKgwvVc2LaHctmG6wKWYcGyQjDNCEJWBKFQBOFQGEzR4JQU5HPlvnzeeUo18IRVDm//s49/88CZvNUArDNp7f/lu26//euhwfyvmrLoiwvPmq1ZRqem8fMU4c1g3IkwRTE5V3VTZ4qhcQiuQ9VNMKa5HmMlRVFK8EQWDu9lnvgPwzKeE4LtNVHX/6kVt53SvKqTNU8A1slabpI+99hyj7/ackdYRFLhkpc3BC9wh9O+uRaLRV0md5rUNJSgoVBQvFw+7+nMdW3PcOxRFNNlnrpv9X1v+X6lAViTBMhUbzYAa6oTMEn3H4A1SYad6s0GYE11Aibp/gOwJsmwU73ZAKypTsAk3X8A1iQZdqo3G4A11QmYpPsPwJokw071ZgOwpjoBk3T/AViTZNip3mwA1lQnYJLuPwBrkgw71ZsNwJrqBEzS/QdgTZJhp3qzAVhTnYBJuv8ArEky7FRvNgBrqhMwSfcfgDVJhp3qzQZgTXUCJun+/xOrRrFjxJNEsAAAAABJRU5ErkJggg==)",
          color: "#12191f",
          backgroundSize: "150px 144px",
          backgroundPosition: "top",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Geomanist, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <img
            src={RESUME_DATA.avatarUrl}
            alt={RESUME_DATA.name}
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              marginBottom: "2rem",
              filter: "grayscale(100%)",
            }}
          />
          <div
            style={{
              fontSize: "2.5rem",
              fontWeight: "400",
              textTransform: "uppercase",
              color: "#12191f",
              background: "#f0f0f0",
            }}
          >
            {RESUME_DATA.name}
          </div>
          <div
            style={{
              fontSize: "1.8rem",
              color: "#626262",
              maxWidth: "600px",
              background: "#f0f0f0",
            }}
          >
            {RESUME_DATA.about}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "2rem",
              gap: "1rem",
              background: "#f0f0f0",
            }}
          >
            {RESUME_DATA.personalWebsiteUrl && (
              <div style={{ fontSize: "1.2rem", color: "#626262" }}>
                {RESUME_DATA.personalWebsiteUrl.slice(8)}
              </div>
            )}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          data: fontData,
          name: "Geomanist Bold",
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}
