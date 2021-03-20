from rest_framework import generics
from store.models import Product
from .serializers import ProductSerializer
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated

class ProductListView(generics.ListAPIView): 
    
    authentication_classes = (BasicAuthentication,)
    permission_classes = (IsAuthenticated,)
    queryset = Product.objects.all() 
    serializer_class = ProductSerializer

class ProductDetailView(generics.RetrieveAPIView): 
    
    authentication_classes = (BasicAuthentication,)
    permission_classes = (IsAuthenticated,)
    queryset = Product.objects.all() 
    serializer_class = ProductSerializer
