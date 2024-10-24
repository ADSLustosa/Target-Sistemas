def string_inversa(string):
    string_inversa = ""
    for i in range(len(string)-1, -1, -1):
        string_inversa += string[i]
    return string_inversa

string = input("Digite o texto a ser invertido: ")
resultado = string_inversa(string)
print (f"O inverso de {string} é: ", resultado)